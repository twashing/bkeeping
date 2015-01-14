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







enfocus.core.ISelector = (function (){var obj12464 = {};
return obj12464;
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


enfocus.core.ITransform = (function (){var obj12466 = {};
return obj12466;
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

return cljs.core.mapcat.call(null,(function (p1__12467_SHARP_){
if(typeof p1__12467_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__12467_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__12467_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__12474_12480 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__12475_12481 = null;
var count__12476_12482 = (0);
var i__12477_12483 = (0);
while(true){
if((i__12477_12483 < count__12476_12482)){
var vec__12478_12484 = cljs.core._nth.call(null,chunk__12475_12481,i__12477_12483);
var attr_12485 = cljs.core.nth.call(null,vec__12478_12484,(0),null);
var value_12486 = cljs.core.nth.call(null,vec__12478_12484,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12485),value_12486);

var G__12487 = seq__12474_12480;
var G__12488 = chunk__12475_12481;
var G__12489 = count__12476_12482;
var G__12490 = (i__12477_12483 + (1));
seq__12474_12480 = G__12487;
chunk__12475_12481 = G__12488;
count__12476_12482 = G__12489;
i__12477_12483 = G__12490;
continue;
} else {
var temp__4126__auto___12491 = cljs.core.seq.call(null,seq__12474_12480);
if(temp__4126__auto___12491){
var seq__12474_12492__$1 = temp__4126__auto___12491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12474_12492__$1)){
var c__4409__auto___12493 = cljs.core.chunk_first.call(null,seq__12474_12492__$1);
var G__12494 = cljs.core.chunk_rest.call(null,seq__12474_12492__$1);
var G__12495 = c__4409__auto___12493;
var G__12496 = cljs.core.count.call(null,c__4409__auto___12493);
var G__12497 = (0);
seq__12474_12480 = G__12494;
chunk__12475_12481 = G__12495;
count__12476_12482 = G__12496;
i__12477_12483 = G__12497;
continue;
} else {
var vec__12479_12498 = cljs.core.first.call(null,seq__12474_12492__$1);
var attr_12499 = cljs.core.nth.call(null,vec__12479_12498,(0),null);
var value_12500 = cljs.core.nth.call(null,vec__12479_12498,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12499),value_12500);

var G__12501 = cljs.core.next.call(null,seq__12474_12492__$1);
var G__12502 = null;
var G__12503 = (0);
var G__12504 = (0);
seq__12474_12480 = G__12501;
chunk__12475_12481 = G__12502;
count__12476_12482 = G__12503;
i__12477_12483 = G__12504;
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
var seq__12509 = cljs.core.seq.call(null,values);
var chunk__12510 = null;
var count__12511 = (0);
var i__12512 = (0);
while(true){
if((i__12512 < count__12511)){
var attr = cljs.core._nth.call(null,chunk__12510,i__12512);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12513 = seq__12509;
var G__12514 = chunk__12510;
var G__12515 = count__12511;
var G__12516 = (i__12512 + (1));
seq__12509 = G__12513;
chunk__12510 = G__12514;
count__12511 = G__12515;
i__12512 = G__12516;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12509);
if(temp__4126__auto__){
var seq__12509__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12509__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12509__$1);
var G__12517 = cljs.core.chunk_rest.call(null,seq__12509__$1);
var G__12518 = c__4409__auto__;
var G__12519 = cljs.core.count.call(null,c__4409__auto__);
var G__12520 = (0);
seq__12509 = G__12517;
chunk__12510 = G__12518;
count__12511 = G__12519;
i__12512 = G__12520;
continue;
} else {
var attr = cljs.core.first.call(null,seq__12509__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12521 = cljs.core.next.call(null,seq__12509__$1);
var G__12522 = null;
var G__12523 = (0);
var G__12524 = (0);
seq__12509 = G__12521;
chunk__12510 = G__12522;
count__12511 = G__12523;
i__12512 = G__12524;
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
var seq__12531_12537 = cljs.core.seq.call(null,ats);
var chunk__12532_12538 = null;
var count__12533_12539 = (0);
var i__12534_12540 = (0);
while(true){
if((i__12534_12540 < count__12533_12539)){
var vec__12535_12541 = cljs.core._nth.call(null,chunk__12532_12538,i__12534_12540);
var k_12542 = cljs.core.nth.call(null,vec__12535_12541,(0),null);
var v_12543 = cljs.core.nth.call(null,vec__12535_12541,(1),null);
add_map_attrs.call(null,elem,k_12542,v_12543);

var G__12544 = seq__12531_12537;
var G__12545 = chunk__12532_12538;
var G__12546 = count__12533_12539;
var G__12547 = (i__12534_12540 + (1));
seq__12531_12537 = G__12544;
chunk__12532_12538 = G__12545;
count__12533_12539 = G__12546;
i__12534_12540 = G__12547;
continue;
} else {
var temp__4126__auto___12548 = cljs.core.seq.call(null,seq__12531_12537);
if(temp__4126__auto___12548){
var seq__12531_12549__$1 = temp__4126__auto___12548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12531_12549__$1)){
var c__4409__auto___12550 = cljs.core.chunk_first.call(null,seq__12531_12549__$1);
var G__12551 = cljs.core.chunk_rest.call(null,seq__12531_12549__$1);
var G__12552 = c__4409__auto___12550;
var G__12553 = cljs.core.count.call(null,c__4409__auto___12550);
var G__12554 = (0);
seq__12531_12537 = G__12551;
chunk__12532_12538 = G__12552;
count__12533_12539 = G__12553;
i__12534_12540 = G__12554;
continue;
} else {
var vec__12536_12555 = cljs.core.first.call(null,seq__12531_12549__$1);
var k_12556 = cljs.core.nth.call(null,vec__12536_12555,(0),null);
var v_12557 = cljs.core.nth.call(null,vec__12536_12555,(1),null);
add_map_attrs.call(null,elem,k_12556,v_12557);

var G__12558 = cljs.core.next.call(null,seq__12531_12549__$1);
var G__12559 = null;
var G__12560 = (0);
var G__12561 = (0);
seq__12531_12537 = G__12558;
chunk__12532_12538 = G__12559;
count__12533_12539 = G__12560;
i__12534_12540 = G__12561;
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

var seq__12566_12570 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__12567_12571 = null;
var count__12568_12572 = (0);
var i__12569_12573 = (0);
while(true){
if((i__12569_12573 < count__12568_12572)){
var node_12574 = cljs.core._nth.call(null,chunk__12567_12571,i__12569_12573);
goog.dom.appendChild(div,node_12574);

var G__12575 = seq__12566_12570;
var G__12576 = chunk__12567_12571;
var G__12577 = count__12568_12572;
var G__12578 = (i__12569_12573 + (1));
seq__12566_12570 = G__12575;
chunk__12567_12571 = G__12576;
count__12568_12572 = G__12577;
i__12569_12573 = G__12578;
continue;
} else {
var temp__4126__auto___12579 = cljs.core.seq.call(null,seq__12566_12570);
if(temp__4126__auto___12579){
var seq__12566_12580__$1 = temp__4126__auto___12579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12566_12580__$1)){
var c__4409__auto___12581 = cljs.core.chunk_first.call(null,seq__12566_12580__$1);
var G__12582 = cljs.core.chunk_rest.call(null,seq__12566_12580__$1);
var G__12583 = c__4409__auto___12581;
var G__12584 = cljs.core.count.call(null,c__4409__auto___12581);
var G__12585 = (0);
seq__12566_12570 = G__12582;
chunk__12567_12571 = G__12583;
count__12568_12572 = G__12584;
i__12569_12573 = G__12585;
continue;
} else {
var node_12586 = cljs.core.first.call(null,seq__12566_12580__$1);
goog.dom.appendChild(div,node_12586);

var G__12587 = cljs.core.next.call(null,seq__12566_12580__$1);
var G__12588 = null;
var G__12589 = (0);
var G__12590 = (0);
seq__12566_12570 = G__12587;
chunk__12567_12571 = G__12588;
count__12568_12572 = G__12589;
i__12569_12573 = G__12590;
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
return (function (p1__12591_SHARP_){
var id = p1__12591_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__12591_SHARP_.setAttribute("id",rid);
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
var vec__12593 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__12593,(0),null);
var txt = cljs.core.nth.call(null,vec__12593,(1),null);
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

var seq__12598_12602 = cljs.core.seq.call(null,dfa);
var chunk__12599_12603 = null;
var count__12600_12604 = (0);
var i__12601_12605 = (0);
while(true){
if((i__12601_12605 < count__12600_12604)){
var df_12606 = cljs.core._nth.call(null,chunk__12599_12603,i__12601_12605);
goog.dom.append(frag,df_12606);

var G__12607 = seq__12598_12602;
var G__12608 = chunk__12599_12603;
var G__12609 = count__12600_12604;
var G__12610 = (i__12601_12605 + (1));
seq__12598_12602 = G__12607;
chunk__12599_12603 = G__12608;
count__12600_12604 = G__12609;
i__12601_12605 = G__12610;
continue;
} else {
var temp__4126__auto___12611 = cljs.core.seq.call(null,seq__12598_12602);
if(temp__4126__auto___12611){
var seq__12598_12612__$1 = temp__4126__auto___12611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12598_12612__$1)){
var c__4409__auto___12613 = cljs.core.chunk_first.call(null,seq__12598_12612__$1);
var G__12614 = cljs.core.chunk_rest.call(null,seq__12598_12612__$1);
var G__12615 = c__4409__auto___12613;
var G__12616 = cljs.core.count.call(null,c__4409__auto___12613);
var G__12617 = (0);
seq__12598_12602 = G__12614;
chunk__12599_12603 = G__12615;
count__12600_12604 = G__12616;
i__12601_12605 = G__12617;
continue;
} else {
var df_12618 = cljs.core.first.call(null,seq__12598_12612__$1);
goog.dom.append(frag,df_12618);

var G__12619 = cljs.core.next.call(null,seq__12598_12612__$1);
var G__12620 = null;
var G__12621 = (0);
var G__12622 = (0);
seq__12598_12602 = G__12619;
chunk__12599_12603 = G__12620;
count__12600_12604 = G__12621;
i__12601_12605 = G__12622;
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
var vec__12625 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__12625,(0),null);
var tdom = cljs.core.nth.call(null,vec__12625,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12625,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__12623_SHARP_){
return p1__12623_SHARP_.outerHTML;
});})(vec__12625,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t12630 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12630 = (function (trans,filt,func,extr_multi_node,meta12631){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta12631 = meta12631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12630.prototype.call = ((function (trans){
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
return (new enfocus.core.t12630(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta12631__$1));
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
return (function __GT_t12630(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12631){
return (new enfocus.core.t12630(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12631));
});})(trans))
;

}

return (new enfocus.core.t12630(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
if(typeof enfocus.core.t12644 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12644 = (function (trans,func,multi_node_chain,meta12645){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta12645 = meta12645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12644.prototype.call = ((function (trans){
return (function() {
var G__12652 = null;
var G__12652__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12652__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12652 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12652__2.call(this,self__,nodes);
case 3:
return G__12652__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12652.cljs$core$IFn$_invoke$arity$2 = G__12652__2;
G__12652.cljs$core$IFn$_invoke$arity$3 = G__12652__3;
return G__12652;
})()
;})(trans))
;

enfocus.core.t12644.prototype.apply = ((function (trans){
return (function (self__,args12647){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12647)));
});})(trans))
;

enfocus.core.t12644.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12644.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12644.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12644.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12644.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12646){
var self__ = this;
var _12646__$1 = this;
return self__.meta12645;
});})(trans))
;

enfocus.core.t12644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12646,meta12645__$1){
var self__ = this;
var _12646__$1 = this;
return (new enfocus.core.t12644(self__.trans,self__.func,self__.multi_node_chain,meta12645__$1));
});})(trans))
;

enfocus.core.t12644.cljs$lang$type = true;

enfocus.core.t12644.cljs$lang$ctorStr = "enfocus.core/t12644";

enfocus.core.t12644.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12644");
});})(trans))
;

enfocus.core.__GT_t12644 = ((function (trans){
return (function __GT_t12644(trans__$1,func__$1,multi_node_chain__$1,meta12645){
return (new enfocus.core.t12644(trans__$1,func__$1,multi_node_chain__$1,meta12645));
});})(trans))
;

}

return (new enfocus.core.t12644(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__12635_SHARP_){
return domina.nodes.call(null,p1__12635_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t12648 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12648 = (function (trans,func,values,multi_node_chain,meta12649){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta12649 = meta12649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12648.prototype.call = ((function (trans){
return (function() {
var G__12653 = null;
var G__12653__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12653__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12653 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12653__2.call(this,self__,nodes);
case 3:
return G__12653__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12653.cljs$core$IFn$_invoke$arity$2 = G__12653__2;
G__12653.cljs$core$IFn$_invoke$arity$3 = G__12653__3;
return G__12653;
})()
;})(trans))
;

enfocus.core.t12648.prototype.apply = ((function (trans){
return (function (self__,args12651){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12651)));
});})(trans))
;

enfocus.core.t12648.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12648.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12648.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12648.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12648.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12650){
var self__ = this;
var _12650__$1 = this;
return self__.meta12649;
});})(trans))
;

enfocus.core.t12648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12650,meta12649__$1){
var self__ = this;
var _12650__$1 = this;
return (new enfocus.core.t12648(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta12649__$1));
});})(trans))
;

enfocus.core.t12648.cljs$lang$type = true;

enfocus.core.t12648.cljs$lang$ctorStr = "enfocus.core/t12648";

enfocus.core.t12648.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12648");
});})(trans))
;

enfocus.core.__GT_t12648 = ((function (trans){
return (function __GT_t12648(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12649){
return (new enfocus.core.t12648(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12649));
});})(trans))
;

}

return (new enfocus.core.t12648(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12654_SHARP_,p2__12655_SHARP_){
domina.destroy_children_BANG_.call(null,p1__12654_SHARP_);

return domina.append_BANG_.call(null,p1__12654_SHARP_,p2__12655_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__12656){
var values = cljs.core.seq(arglist__12656);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12657_SHARP_){
return domina.set_html_BANG_.call(null,p1__12657_SHARP_,txt);
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
return (function (p1__12658_SHARP_){
var seq__12665 = cljs.core.seq.call(null,pairs);
var chunk__12666 = null;
var count__12667 = (0);
var i__12668 = (0);
while(true){
if((i__12668 < count__12667)){
var vec__12669 = cljs.core._nth.call(null,chunk__12666,i__12668);
var name = cljs.core.nth.call(null,vec__12669,(0),null);
var value = cljs.core.nth.call(null,vec__12669,(1),null);
domina.set_attr_BANG_.call(null,p1__12658_SHARP_,name,value);

var G__12671 = seq__12665;
var G__12672 = chunk__12666;
var G__12673 = count__12667;
var G__12674 = (i__12668 + (1));
seq__12665 = G__12671;
chunk__12666 = G__12672;
count__12667 = G__12673;
i__12668 = G__12674;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12665);
if(temp__4126__auto__){
var seq__12665__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12665__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12665__$1);
var G__12675 = cljs.core.chunk_rest.call(null,seq__12665__$1);
var G__12676 = c__4409__auto__;
var G__12677 = cljs.core.count.call(null,c__4409__auto__);
var G__12678 = (0);
seq__12665 = G__12675;
chunk__12666 = G__12676;
count__12667 = G__12677;
i__12668 = G__12678;
continue;
} else {
var vec__12670 = cljs.core.first.call(null,seq__12665__$1);
var name = cljs.core.nth.call(null,vec__12670,(0),null);
var value = cljs.core.nth.call(null,vec__12670,(1),null);
domina.set_attr_BANG_.call(null,p1__12658_SHARP_,name,value);

var G__12679 = cljs.core.next.call(null,seq__12665__$1);
var G__12680 = null;
var G__12681 = (0);
var G__12682 = (0);
seq__12665 = G__12679;
chunk__12666 = G__12680;
count__12667 = G__12681;
i__12668 = G__12682;
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
set_attr.cljs$lang$applyTo = (function (arglist__12683){
var values = cljs.core.seq(arglist__12683);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12684_SHARP_){
var seq__12689 = cljs.core.seq.call(null,values);
var chunk__12690 = null;
var count__12691 = (0);
var i__12692 = (0);
while(true){
if((i__12692 < count__12691)){
var name = cljs.core._nth.call(null,chunk__12690,i__12692);
domina.remove_attr_BANG_.call(null,p1__12684_SHARP_,name);

var G__12693 = seq__12689;
var G__12694 = chunk__12690;
var G__12695 = count__12691;
var G__12696 = (i__12692 + (1));
seq__12689 = G__12693;
chunk__12690 = G__12694;
count__12691 = G__12695;
i__12692 = G__12696;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12689);
if(temp__4126__auto__){
var seq__12689__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12689__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12689__$1);
var G__12697 = cljs.core.chunk_rest.call(null,seq__12689__$1);
var G__12698 = c__4409__auto__;
var G__12699 = cljs.core.count.call(null,c__4409__auto__);
var G__12700 = (0);
seq__12689 = G__12697;
chunk__12690 = G__12698;
count__12691 = G__12699;
i__12692 = G__12700;
continue;
} else {
var name = cljs.core.first.call(null,seq__12689__$1);
domina.remove_attr_BANG_.call(null,p1__12684_SHARP_,name);

var G__12701 = cljs.core.next.call(null,seq__12689__$1);
var G__12702 = null;
var G__12703 = (0);
var G__12704 = (0);
seq__12689 = G__12701;
chunk__12690 = G__12702;
count__12691 = G__12703;
i__12692 = G__12704;
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
remove_attr.cljs$lang$applyTo = (function (arglist__12705){
var values = cljs.core.seq(arglist__12705);
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
var h = cljs.core.mapcat.call(null,(function (p__12708){
var vec__12709 = p__12708;
var n = cljs.core.nth.call(null,vec__12709,(0),null);
var v = cljs.core.nth.call(null,vec__12709,(1),null);
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
set_prop.cljs$lang$applyTo = (function (arglist__12710){
var forms = cljs.core.seq(arglist__12710);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12711_SHARP_){
var seq__12716 = cljs.core.seq.call(null,values);
var chunk__12717 = null;
var count__12718 = (0);
var i__12719 = (0);
while(true){
if((i__12719 < count__12718)){
var val = cljs.core._nth.call(null,chunk__12717,i__12719);
domina.add_class_BANG_.call(null,p1__12711_SHARP_,val);

var G__12720 = seq__12716;
var G__12721 = chunk__12717;
var G__12722 = count__12718;
var G__12723 = (i__12719 + (1));
seq__12716 = G__12720;
chunk__12717 = G__12721;
count__12718 = G__12722;
i__12719 = G__12723;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12716);
if(temp__4126__auto__){
var seq__12716__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12716__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12716__$1);
var G__12724 = cljs.core.chunk_rest.call(null,seq__12716__$1);
var G__12725 = c__4409__auto__;
var G__12726 = cljs.core.count.call(null,c__4409__auto__);
var G__12727 = (0);
seq__12716 = G__12724;
chunk__12717 = G__12725;
count__12718 = G__12726;
i__12719 = G__12727;
continue;
} else {
var val = cljs.core.first.call(null,seq__12716__$1);
domina.add_class_BANG_.call(null,p1__12711_SHARP_,val);

var G__12728 = cljs.core.next.call(null,seq__12716__$1);
var G__12729 = null;
var G__12730 = (0);
var G__12731 = (0);
seq__12716 = G__12728;
chunk__12717 = G__12729;
count__12718 = G__12730;
i__12719 = G__12731;
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
add_class.cljs$lang$applyTo = (function (arglist__12732){
var values = cljs.core.seq(arglist__12732);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12733_SHARP_){
var seq__12738 = cljs.core.seq.call(null,values);
var chunk__12739 = null;
var count__12740 = (0);
var i__12741 = (0);
while(true){
if((i__12741 < count__12740)){
var val = cljs.core._nth.call(null,chunk__12739,i__12741);
domina.remove_class_BANG_.call(null,p1__12733_SHARP_,val);

var G__12742 = seq__12738;
var G__12743 = chunk__12739;
var G__12744 = count__12740;
var G__12745 = (i__12741 + (1));
seq__12738 = G__12742;
chunk__12739 = G__12743;
count__12740 = G__12744;
i__12741 = G__12745;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12738);
if(temp__4126__auto__){
var seq__12738__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12738__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12738__$1);
var G__12746 = cljs.core.chunk_rest.call(null,seq__12738__$1);
var G__12747 = c__4409__auto__;
var G__12748 = cljs.core.count.call(null,c__4409__auto__);
var G__12749 = (0);
seq__12738 = G__12746;
chunk__12739 = G__12747;
count__12740 = G__12748;
i__12741 = G__12749;
continue;
} else {
var val = cljs.core.first.call(null,seq__12738__$1);
domina.remove_class_BANG_.call(null,p1__12733_SHARP_,val);

var G__12750 = cljs.core.next.call(null,seq__12738__$1);
var G__12751 = null;
var G__12752 = (0);
var G__12753 = (0);
seq__12738 = G__12750;
chunk__12739 = G__12751;
count__12740 = G__12752;
i__12741 = G__12753;
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
remove_class.cljs$lang$applyTo = (function (arglist__12754){
var values = cljs.core.seq(arglist__12754);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12755_SHARP_){
return domina.set_classes_BANG_.call(null,p1__12755_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__12756){
var values = cljs.core.seq(arglist__12756);
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
var seq__12761 = cljs.core.seq.call(null,forms);
var chunk__12762 = null;
var count__12763 = (0);
var i__12764 = (0);
while(true){
if((i__12764 < count__12763)){
var fun = cljs.core._nth.call(null,chunk__12762,i__12764);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12765 = seq__12761;
var G__12766 = chunk__12762;
var G__12767 = count__12763;
var G__12768 = (i__12764 + (1));
seq__12761 = G__12765;
chunk__12762 = G__12766;
count__12763 = G__12767;
i__12764 = G__12768;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12761);
if(temp__4126__auto__){
var seq__12761__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12761__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12761__$1);
var G__12769 = cljs.core.chunk_rest.call(null,seq__12761__$1);
var G__12770 = c__4409__auto__;
var G__12771 = cljs.core.count.call(null,c__4409__auto__);
var G__12772 = (0);
seq__12761 = G__12769;
chunk__12762 = G__12770;
count__12763 = G__12771;
i__12764 = G__12772;
continue;
} else {
var fun = cljs.core.first.call(null,seq__12761__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12773 = cljs.core.next.call(null,seq__12761__$1);
var G__12774 = null;
var G__12775 = (0);
var G__12776 = (0);
seq__12761 = G__12773;
chunk__12762 = G__12774;
count__12763 = G__12775;
i__12764 = G__12776;
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
do__GT_.cljs$lang$applyTo = (function (arglist__12777){
var forms = cljs.core.seq(arglist__12777);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12778_SHARP_,p2__12779_SHARP_){
return domina.append_BANG_.call(null,p1__12778_SHARP_,p2__12779_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__12780){
var values = cljs.core.seq(arglist__12780);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12781_SHARP_,p2__12782_SHARP_){
return domina.prepend_BANG_.call(null,p1__12781_SHARP_,p2__12782_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__12783){
var values = cljs.core.seq(arglist__12783);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12784_SHARP_,p2__12785_SHARP_){
return domina.insert_before_BANG_.call(null,p1__12784_SHARP_,p2__12785_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__12786){
var values = cljs.core.seq(arglist__12786);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12787_SHARP_,p2__12788_SHARP_){
return domina.insert_after_BANG_.call(null,p1__12787_SHARP_,p2__12788_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__12789){
var values = cljs.core.seq(arglist__12789);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12790_SHARP_,p2__12791_SHARP_){
return domina.swap_content_BANG_.call(null,p1__12790_SHARP_,p2__12791_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__12792){
var values = cljs.core.seq(arglist__12792);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12793_SHARP_){
return domina.detach_BANG_.call(null,p1__12793_SHARP_);
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
return (function (p1__12794_SHARP_){
var seq__12801 = cljs.core.seq.call(null,pairs);
var chunk__12802 = null;
var count__12803 = (0);
var i__12804 = (0);
while(true){
if((i__12804 < count__12803)){
var vec__12805 = cljs.core._nth.call(null,chunk__12802,i__12804);
var name = cljs.core.nth.call(null,vec__12805,(0),null);
var value = cljs.core.nth.call(null,vec__12805,(1),null);
domina.set_style_BANG_.call(null,p1__12794_SHARP_,name,value);

var G__12807 = seq__12801;
var G__12808 = chunk__12802;
var G__12809 = count__12803;
var G__12810 = (i__12804 + (1));
seq__12801 = G__12807;
chunk__12802 = G__12808;
count__12803 = G__12809;
i__12804 = G__12810;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12801);
if(temp__4126__auto__){
var seq__12801__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12801__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12801__$1);
var G__12811 = cljs.core.chunk_rest.call(null,seq__12801__$1);
var G__12812 = c__4409__auto__;
var G__12813 = cljs.core.count.call(null,c__4409__auto__);
var G__12814 = (0);
seq__12801 = G__12811;
chunk__12802 = G__12812;
count__12803 = G__12813;
i__12804 = G__12814;
continue;
} else {
var vec__12806 = cljs.core.first.call(null,seq__12801__$1);
var name = cljs.core.nth.call(null,vec__12806,(0),null);
var value = cljs.core.nth.call(null,vec__12806,(1),null);
domina.set_style_BANG_.call(null,p1__12794_SHARP_,name,value);

var G__12815 = cljs.core.next.call(null,seq__12801__$1);
var G__12816 = null;
var G__12817 = (0);
var G__12818 = (0);
seq__12801 = G__12815;
chunk__12802 = G__12816;
count__12803 = G__12817;
i__12804 = G__12818;
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
set_style.cljs$lang$applyTo = (function (arglist__12819){
var values = cljs.core.seq(arglist__12819);
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
remove_style.cljs$lang$applyTo = (function (arglist__12820){
var values = cljs.core.seq(arglist__12820);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12821_SHARP_){
return domina.set_data_BANG_.call(null,p1__12821_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__12822){
var ttime = cljs.core.first(arglist__12822);
var funcs = cljs.core.rest(arglist__12822);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__12824_SHARP_,p2__12823_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__12823_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__12849_12857 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__12850_12858 = null;
var count__12851_12859 = (0);
var i__12852_12860 = (0);
while(true){
if((i__12852_12860 < count__12851_12859)){
var idx_12861 = cljs.core._nth.call(null,chunk__12850_12858,i__12852_12860);
var attr_12862 = pnod.attributes.item(idx_12861);
if(cljs.core.truth_(attr_12862.specified)){
attr_12862.value = rep_str.call(null,attr_12862.value);
} else {
}

var G__12863 = seq__12849_12857;
var G__12864 = chunk__12850_12858;
var G__12865 = count__12851_12859;
var G__12866 = (i__12852_12860 + (1));
seq__12849_12857 = G__12863;
chunk__12850_12858 = G__12864;
count__12851_12859 = G__12865;
i__12852_12860 = G__12866;
continue;
} else {
var temp__4126__auto___12867 = cljs.core.seq.call(null,seq__12849_12857);
if(temp__4126__auto___12867){
var seq__12849_12868__$1 = temp__4126__auto___12867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12849_12868__$1)){
var c__4409__auto___12869 = cljs.core.chunk_first.call(null,seq__12849_12868__$1);
var G__12870 = cljs.core.chunk_rest.call(null,seq__12849_12868__$1);
var G__12871 = c__4409__auto___12869;
var G__12872 = cljs.core.count.call(null,c__4409__auto___12869);
var G__12873 = (0);
seq__12849_12857 = G__12870;
chunk__12850_12858 = G__12871;
count__12851_12859 = G__12872;
i__12852_12860 = G__12873;
continue;
} else {
var idx_12874 = cljs.core.first.call(null,seq__12849_12868__$1);
var attr_12875 = pnod.attributes.item(idx_12874);
if(cljs.core.truth_(attr_12875.specified)){
attr_12875.value = rep_str.call(null,attr_12875.value);
} else {
}

var G__12876 = cljs.core.next.call(null,seq__12849_12868__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__12849_12857 = G__12876;
chunk__12850_12858 = G__12877;
count__12851_12859 = G__12878;
i__12852_12860 = G__12879;
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
var seq__12853 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__12854 = null;
var count__12855 = (0);
var i__12856 = (0);
while(true){
if((i__12856 < count__12855)){
var cnode = cljs.core._nth.call(null,chunk__12854,i__12856);
rep_node.call(null,cnode);

var G__12880 = seq__12853;
var G__12881 = chunk__12854;
var G__12882 = count__12855;
var G__12883 = (i__12856 + (1));
seq__12853 = G__12880;
chunk__12854 = G__12881;
count__12855 = G__12882;
i__12856 = G__12883;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12853);
if(temp__4126__auto__){
var seq__12853__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12853__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12853__$1);
var G__12884 = cljs.core.chunk_rest.call(null,seq__12853__$1);
var G__12885 = c__4409__auto__;
var G__12886 = cljs.core.count.call(null,c__4409__auto__);
var G__12887 = (0);
seq__12853 = G__12884;
chunk__12854 = G__12885;
count__12855 = G__12886;
i__12856 = G__12887;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__12853__$1);
rep_node.call(null,cnode);

var G__12888 = cljs.core.next.call(null,seq__12853__$1);
var G__12889 = null;
var G__12890 = (0);
var G__12891 = (0);
seq__12853 = G__12888;
chunk__12854 = G__12889;
count__12855 = G__12890;
i__12856 = G__12891;
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
var seq__12896 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__12897 = null;
var count__12898 = (0);
var i__12899 = (0);
while(true){
if((i__12899 < count__12898)){
var idx = cljs.core._nth.call(null,chunk__12897,i__12899);
var el_12900 = (form_node.elements[idx]);
var ky_12901 = cljs.core.keyword.call(null,el_12900.name);
var val_12902 = ky_12901.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12901)){
var val_12903__$1 = (cljs.core.truth_(val_12902)?val_12902:"");
enfocus.core.set_form_input.call(null,val_12903__$1).call(null,el_12900);
} else {
}

var G__12904 = seq__12896;
var G__12905 = chunk__12897;
var G__12906 = count__12898;
var G__12907 = (i__12899 + (1));
seq__12896 = G__12904;
chunk__12897 = G__12905;
count__12898 = G__12906;
i__12899 = G__12907;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12896);
if(temp__4126__auto__){
var seq__12896__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12896__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12896__$1);
var G__12908 = cljs.core.chunk_rest.call(null,seq__12896__$1);
var G__12909 = c__4409__auto__;
var G__12910 = cljs.core.count.call(null,c__4409__auto__);
var G__12911 = (0);
seq__12896 = G__12908;
chunk__12897 = G__12909;
count__12898 = G__12910;
i__12899 = G__12911;
continue;
} else {
var idx = cljs.core.first.call(null,seq__12896__$1);
var el_12912 = (form_node.elements[idx]);
var ky_12913 = cljs.core.keyword.call(null,el_12912.name);
var val_12914 = ky_12913.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12913)){
var val_12915__$1 = (cljs.core.truth_(val_12914)?val_12914:"");
enfocus.core.set_form_input.call(null,val_12915__$1).call(null,el_12912);
} else {
}

var G__12916 = cljs.core.next.call(null,seq__12896__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__12896 = G__12916;
chunk__12897 = G__12917;
count__12898 = G__12918;
i__12899 = G__12919;
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
var vec__12929 = node_spec;
var tag = cljs.core.nth.call(null,vec__12929,(0),null);
var vec__12930 = cljs.core.nthnext.call(null,vec__12929,(1));
var m = cljs.core.nth.call(null,vec__12930,(0),null);
var ms = cljs.core.nthnext.call(null,vec__12930,(1));
var more = vec__12930;
var vec__12931 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__12931,(0),null);
var segments = cljs.core.nthnext.call(null,vec__12931,(1));
var id = cljs.core.some.call(null,((function (vec__12929,tag,vec__12930,m,ms,more,vec__12931,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12929,tag,vec__12930,m,ms,more,vec__12931,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__12929,tag,vec__12930,m,ms,more,vec__12931,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12929,tag,vec__12930,m,ms,more,vec__12931,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__12932_12938 = cljs.core.seq.call(null,attrs__$2);
var chunk__12933_12939 = null;
var count__12934_12940 = (0);
var i__12935_12941 = (0);
while(true){
if((i__12935_12941 < count__12934_12940)){
var vec__12936_12942 = cljs.core._nth.call(null,chunk__12933_12939,i__12935_12941);
var key_12943 = cljs.core.nth.call(null,vec__12936_12942,(0),null);
var val_12944 = cljs.core.nth.call(null,vec__12936_12942,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12943),val_12944);

var G__12945 = seq__12932_12938;
var G__12946 = chunk__12933_12939;
var G__12947 = count__12934_12940;
var G__12948 = (i__12935_12941 + (1));
seq__12932_12938 = G__12945;
chunk__12933_12939 = G__12946;
count__12934_12940 = G__12947;
i__12935_12941 = G__12948;
continue;
} else {
var temp__4126__auto___12949 = cljs.core.seq.call(null,seq__12932_12938);
if(temp__4126__auto___12949){
var seq__12932_12950__$1 = temp__4126__auto___12949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12932_12950__$1)){
var c__4409__auto___12951 = cljs.core.chunk_first.call(null,seq__12932_12950__$1);
var G__12952 = cljs.core.chunk_rest.call(null,seq__12932_12950__$1);
var G__12953 = c__4409__auto___12951;
var G__12954 = cljs.core.count.call(null,c__4409__auto___12951);
var G__12955 = (0);
seq__12932_12938 = G__12952;
chunk__12933_12939 = G__12953;
count__12934_12940 = G__12954;
i__12935_12941 = G__12955;
continue;
} else {
var vec__12937_12956 = cljs.core.first.call(null,seq__12932_12950__$1);
var key_12957 = cljs.core.nth.call(null,vec__12937_12956,(0),null);
var val_12958 = cljs.core.nth.call(null,vec__12937_12956,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12957),val_12958);

var G__12959 = cljs.core.next.call(null,seq__12932_12950__$1);
var G__12960 = null;
var G__12961 = (0);
var G__12962 = (0);
seq__12932_12938 = G__12959;
chunk__12933_12939 = G__12960;
count__12934_12940 = G__12961;
i__12935_12941 = G__12962;
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
return (function (p1__12964_SHARP_,p2__12963_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__12963_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__12964_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__12964_SHARP_,vals);
} else {
return p1__12964_SHARP_;
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
if(typeof enfocus.core.t12969 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12969 = (function (trans,read_form_input,meta12970){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta12970 = meta12970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12969.prototype.call = ((function (trans){
return (function() {
var G__12973 = null;
var G__12973__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12973__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12973 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12973__2.call(this,self__,nodes);
case 3:
return G__12973__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12973.cljs$core$IFn$_invoke$arity$2 = G__12973__2;
G__12973.cljs$core$IFn$_invoke$arity$3 = G__12973__3;
return G__12973;
})()
;})(trans))
;

enfocus.core.t12969.prototype.apply = ((function (trans){
return (function (self__,args12972){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12972)));
});})(trans))
;

enfocus.core.t12969.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12969.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12969.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12969.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12969.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12971){
var self__ = this;
var _12971__$1 = this;
return self__.meta12970;
});})(trans))
;

enfocus.core.t12969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12971,meta12970__$1){
var self__ = this;
var _12971__$1 = this;
return (new enfocus.core.t12969(self__.trans,self__.read_form_input,meta12970__$1));
});})(trans))
;

enfocus.core.t12969.cljs$lang$type = true;

enfocus.core.t12969.cljs$lang$ctorStr = "enfocus.core/t12969";

enfocus.core.t12969.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12969");
});})(trans))
;

enfocus.core.__GT_t12969 = ((function (trans){
return (function __GT_t12969(trans__$1,read_form_input__$1,meta12970){
return (new enfocus.core.t12969(trans__$1,read_form_input__$1,meta12970));
});})(trans))
;

}

return (new enfocus.core.t12969(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__12975_SHARP_,p2__12974_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__12974_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__12975_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__12974_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__12974_SHARP_)));
} else {
return p1__12975_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__12976_SHARP_){
if((p1__12976_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__12976_SHARP_);
} else {
if((p1__12976_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__12976_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__12976_SHARP_)){
return create_sel_str.call(null,p1__12976_SHARP_);
} else {
if(typeof p1__12976_SHARP_ === 'string'){
return p1__12976_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var G__12987 = node;
if(G__12987){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__12987.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__12987.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12987);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12987);
}
} else {
return and__3610__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__12988 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__12988,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__12988,(1),null);
var seq__12989 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__12990 = null;
var count__12991 = (0);
var i__12992 = (0);
while(true){
if((i__12992 < count__12991)){
var vec__12993 = cljs.core._nth.call(null,chunk__12990,i__12992);
var sel = cljs.core.nth.call(null,vec__12993,(0),null);
var t = cljs.core.nth.call(null,vec__12993,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12995 = seq__12989;
var G__12996 = chunk__12990;
var G__12997 = count__12991;
var G__12998 = (i__12992 + (1));
seq__12989 = G__12995;
chunk__12990 = G__12996;
count__12991 = G__12997;
i__12992 = G__12998;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12989);
if(temp__4126__auto__){
var seq__12989__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12989__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12989__$1);
var G__12999 = cljs.core.chunk_rest.call(null,seq__12989__$1);
var G__13000 = c__4409__auto__;
var G__13001 = cljs.core.count.call(null,c__4409__auto__);
var G__13002 = (0);
seq__12989 = G__12999;
chunk__12990 = G__13000;
count__12991 = G__13001;
i__12992 = G__13002;
continue;
} else {
var vec__12994 = cljs.core.first.call(null,seq__12989__$1);
var sel = cljs.core.nth.call(null,vec__12994,(0),null);
var t = cljs.core.nth.call(null,vec__12994,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__13003 = cljs.core.next.call(null,seq__12989__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__12989 = G__13003;
chunk__12990 = G__13004;
count__12991 = G__13005;
i__12992 = G__13006;
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
i_at.cljs$lang$applyTo = (function (arglist__13007){
var id_mask = cljs.core.first(arglist__13007);
arglist__13007 = cljs.core.next(arglist__13007);
var node = cljs.core.first(arglist__13007);
var trans = cljs.core.rest(arglist__13007);
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
at.cljs$lang$applyTo = (function (arglist__13008){
var node = cljs.core.first(arglist__13008);
var trans = cljs.core.rest(arglist__13008);
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
var sel_QMARK_ = (function (){var G__13013 = node;
if(G__13013){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13013.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__13013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13013);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__13014 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__13014,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__13014,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__13014,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__13015){
var vec__13016 = p__13015;
var ky = cljs.core.nth.call(null,vec__13016,(0),null);
var sel = cljs.core.nth.call(null,vec__13016,(1),null);
var ext = cljs.core.nth.call(null,vec__13016,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__13014,node__$1,trans__$1,cnt,sel_QMARK_))
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
from.cljs$lang$applyTo = (function (arglist__13017){
var node = cljs.core.first(arglist__13017);
var trans = cljs.core.rest(arglist__13017);
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
var G__13018 = null;
var G__13018__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__13018__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__13018__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__13018 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13018__1.call(this,this$);
case 2:
return G__13018__2.call(this,this$,root);
case 3:
return G__13018__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13018.cljs$core$IFn$_invoke$arity$1 = G__13018__1;
G__13018.cljs$core$IFn$_invoke$arity$2 = G__13018__2;
G__13018.cljs$core$IFn$_invoke$arity$3 = G__13018__3;
return G__13018;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__13019 = null;
var G__13019__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13019__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13019__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__13019 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13019__1.call(this,this$);
case 2:
return G__13019__2.call(this,this$,root);
case 3:
return G__13019__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13019.cljs$core$IFn$_invoke$arity$1 = G__13019__1;
G__13019.cljs$core$IFn$_invoke$arity$2 = G__13019__2;
G__13019.cljs$core$IFn$_invoke$arity$3 = G__13019__3;
return G__13019;
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
var G__13020 = null;
var G__13020__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13020__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13020__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__13020 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13020__1.call(this,this$);
case 2:
return G__13020__2.call(this,this$,root);
case 3:
return G__13020__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13020.cljs$core$IFn$_invoke$arity$1 = G__13020__1;
G__13020.cljs$core$IFn$_invoke$arity$2 = G__13020__2;
G__13020.cljs$core$IFn$_invoke$arity$3 = G__13020__3;
return G__13020;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__13021 = null;
var G__13021__2 = (function (trans,nodes){
return nodes;
});
var G__13021__3 = (function (trans,nodes,chain){
return nodes;
});
G__13021 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13021__2.call(this,trans,nodes);
case 3:
return G__13021__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13021.cljs$core$IFn$_invoke$arity$2 = G__13021__2;
G__13021.cljs$core$IFn$_invoke$arity$3 = G__13021__3;
return G__13021;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__13022 = null;
var G__13022__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__13022__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__13022 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13022__2.call(this,trans,nodes);
case 3:
return G__13022__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13022.cljs$core$IFn$_invoke$arity$2 = G__13022__2;
G__13022.cljs$core$IFn$_invoke$arity$3 = G__13022__3;
return G__13022;
})()
);

//# sourceMappingURL=core.js.map