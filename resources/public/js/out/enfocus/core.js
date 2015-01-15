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







enfocus.core.ISelector = (function (){var obj12465 = {};
return obj12465;
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


enfocus.core.ITransform = (function (){var obj12467 = {};
return obj12467;
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

return cljs.core.mapcat.call(null,(function (p1__12468_SHARP_){
if(typeof p1__12468_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__12468_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__12468_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__12475_12481 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__12476_12482 = null;
var count__12477_12483 = (0);
var i__12478_12484 = (0);
while(true){
if((i__12478_12484 < count__12477_12483)){
var vec__12479_12485 = cljs.core._nth.call(null,chunk__12476_12482,i__12478_12484);
var attr_12486 = cljs.core.nth.call(null,vec__12479_12485,(0),null);
var value_12487 = cljs.core.nth.call(null,vec__12479_12485,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12486),value_12487);

var G__12488 = seq__12475_12481;
var G__12489 = chunk__12476_12482;
var G__12490 = count__12477_12483;
var G__12491 = (i__12478_12484 + (1));
seq__12475_12481 = G__12488;
chunk__12476_12482 = G__12489;
count__12477_12483 = G__12490;
i__12478_12484 = G__12491;
continue;
} else {
var temp__4126__auto___12492 = cljs.core.seq.call(null,seq__12475_12481);
if(temp__4126__auto___12492){
var seq__12475_12493__$1 = temp__4126__auto___12492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12475_12493__$1)){
var c__4409__auto___12494 = cljs.core.chunk_first.call(null,seq__12475_12493__$1);
var G__12495 = cljs.core.chunk_rest.call(null,seq__12475_12493__$1);
var G__12496 = c__4409__auto___12494;
var G__12497 = cljs.core.count.call(null,c__4409__auto___12494);
var G__12498 = (0);
seq__12475_12481 = G__12495;
chunk__12476_12482 = G__12496;
count__12477_12483 = G__12497;
i__12478_12484 = G__12498;
continue;
} else {
var vec__12480_12499 = cljs.core.first.call(null,seq__12475_12493__$1);
var attr_12500 = cljs.core.nth.call(null,vec__12480_12499,(0),null);
var value_12501 = cljs.core.nth.call(null,vec__12480_12499,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12500),value_12501);

var G__12502 = cljs.core.next.call(null,seq__12475_12493__$1);
var G__12503 = null;
var G__12504 = (0);
var G__12505 = (0);
seq__12475_12481 = G__12502;
chunk__12476_12482 = G__12503;
count__12477_12483 = G__12504;
i__12478_12484 = G__12505;
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
var seq__12510 = cljs.core.seq.call(null,values);
var chunk__12511 = null;
var count__12512 = (0);
var i__12513 = (0);
while(true){
if((i__12513 < count__12512)){
var attr = cljs.core._nth.call(null,chunk__12511,i__12513);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12514 = seq__12510;
var G__12515 = chunk__12511;
var G__12516 = count__12512;
var G__12517 = (i__12513 + (1));
seq__12510 = G__12514;
chunk__12511 = G__12515;
count__12512 = G__12516;
i__12513 = G__12517;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12510);
if(temp__4126__auto__){
var seq__12510__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12510__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12510__$1);
var G__12518 = cljs.core.chunk_rest.call(null,seq__12510__$1);
var G__12519 = c__4409__auto__;
var G__12520 = cljs.core.count.call(null,c__4409__auto__);
var G__12521 = (0);
seq__12510 = G__12518;
chunk__12511 = G__12519;
count__12512 = G__12520;
i__12513 = G__12521;
continue;
} else {
var attr = cljs.core.first.call(null,seq__12510__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12522 = cljs.core.next.call(null,seq__12510__$1);
var G__12523 = null;
var G__12524 = (0);
var G__12525 = (0);
seq__12510 = G__12522;
chunk__12511 = G__12523;
count__12512 = G__12524;
i__12513 = G__12525;
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
var seq__12532_12538 = cljs.core.seq.call(null,ats);
var chunk__12533_12539 = null;
var count__12534_12540 = (0);
var i__12535_12541 = (0);
while(true){
if((i__12535_12541 < count__12534_12540)){
var vec__12536_12542 = cljs.core._nth.call(null,chunk__12533_12539,i__12535_12541);
var k_12543 = cljs.core.nth.call(null,vec__12536_12542,(0),null);
var v_12544 = cljs.core.nth.call(null,vec__12536_12542,(1),null);
add_map_attrs.call(null,elem,k_12543,v_12544);

var G__12545 = seq__12532_12538;
var G__12546 = chunk__12533_12539;
var G__12547 = count__12534_12540;
var G__12548 = (i__12535_12541 + (1));
seq__12532_12538 = G__12545;
chunk__12533_12539 = G__12546;
count__12534_12540 = G__12547;
i__12535_12541 = G__12548;
continue;
} else {
var temp__4126__auto___12549 = cljs.core.seq.call(null,seq__12532_12538);
if(temp__4126__auto___12549){
var seq__12532_12550__$1 = temp__4126__auto___12549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12532_12550__$1)){
var c__4409__auto___12551 = cljs.core.chunk_first.call(null,seq__12532_12550__$1);
var G__12552 = cljs.core.chunk_rest.call(null,seq__12532_12550__$1);
var G__12553 = c__4409__auto___12551;
var G__12554 = cljs.core.count.call(null,c__4409__auto___12551);
var G__12555 = (0);
seq__12532_12538 = G__12552;
chunk__12533_12539 = G__12553;
count__12534_12540 = G__12554;
i__12535_12541 = G__12555;
continue;
} else {
var vec__12537_12556 = cljs.core.first.call(null,seq__12532_12550__$1);
var k_12557 = cljs.core.nth.call(null,vec__12537_12556,(0),null);
var v_12558 = cljs.core.nth.call(null,vec__12537_12556,(1),null);
add_map_attrs.call(null,elem,k_12557,v_12558);

var G__12559 = cljs.core.next.call(null,seq__12532_12550__$1);
var G__12560 = null;
var G__12561 = (0);
var G__12562 = (0);
seq__12532_12538 = G__12559;
chunk__12533_12539 = G__12560;
count__12534_12540 = G__12561;
i__12535_12541 = G__12562;
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

var seq__12567_12571 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__12568_12572 = null;
var count__12569_12573 = (0);
var i__12570_12574 = (0);
while(true){
if((i__12570_12574 < count__12569_12573)){
var node_12575 = cljs.core._nth.call(null,chunk__12568_12572,i__12570_12574);
goog.dom.appendChild(div,node_12575);

var G__12576 = seq__12567_12571;
var G__12577 = chunk__12568_12572;
var G__12578 = count__12569_12573;
var G__12579 = (i__12570_12574 + (1));
seq__12567_12571 = G__12576;
chunk__12568_12572 = G__12577;
count__12569_12573 = G__12578;
i__12570_12574 = G__12579;
continue;
} else {
var temp__4126__auto___12580 = cljs.core.seq.call(null,seq__12567_12571);
if(temp__4126__auto___12580){
var seq__12567_12581__$1 = temp__4126__auto___12580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12567_12581__$1)){
var c__4409__auto___12582 = cljs.core.chunk_first.call(null,seq__12567_12581__$1);
var G__12583 = cljs.core.chunk_rest.call(null,seq__12567_12581__$1);
var G__12584 = c__4409__auto___12582;
var G__12585 = cljs.core.count.call(null,c__4409__auto___12582);
var G__12586 = (0);
seq__12567_12571 = G__12583;
chunk__12568_12572 = G__12584;
count__12569_12573 = G__12585;
i__12570_12574 = G__12586;
continue;
} else {
var node_12587 = cljs.core.first.call(null,seq__12567_12581__$1);
goog.dom.appendChild(div,node_12587);

var G__12588 = cljs.core.next.call(null,seq__12567_12581__$1);
var G__12589 = null;
var G__12590 = (0);
var G__12591 = (0);
seq__12567_12571 = G__12588;
chunk__12568_12572 = G__12589;
count__12569_12573 = G__12590;
i__12570_12574 = G__12591;
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
return (function (p1__12592_SHARP_){
var id = p1__12592_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__12592_SHARP_.setAttribute("id",rid);
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
var vec__12594 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__12594,(0),null);
var txt = cljs.core.nth.call(null,vec__12594,(1),null);
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

var seq__12599_12603 = cljs.core.seq.call(null,dfa);
var chunk__12600_12604 = null;
var count__12601_12605 = (0);
var i__12602_12606 = (0);
while(true){
if((i__12602_12606 < count__12601_12605)){
var df_12607 = cljs.core._nth.call(null,chunk__12600_12604,i__12602_12606);
goog.dom.append(frag,df_12607);

var G__12608 = seq__12599_12603;
var G__12609 = chunk__12600_12604;
var G__12610 = count__12601_12605;
var G__12611 = (i__12602_12606 + (1));
seq__12599_12603 = G__12608;
chunk__12600_12604 = G__12609;
count__12601_12605 = G__12610;
i__12602_12606 = G__12611;
continue;
} else {
var temp__4126__auto___12612 = cljs.core.seq.call(null,seq__12599_12603);
if(temp__4126__auto___12612){
var seq__12599_12613__$1 = temp__4126__auto___12612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12599_12613__$1)){
var c__4409__auto___12614 = cljs.core.chunk_first.call(null,seq__12599_12613__$1);
var G__12615 = cljs.core.chunk_rest.call(null,seq__12599_12613__$1);
var G__12616 = c__4409__auto___12614;
var G__12617 = cljs.core.count.call(null,c__4409__auto___12614);
var G__12618 = (0);
seq__12599_12603 = G__12615;
chunk__12600_12604 = G__12616;
count__12601_12605 = G__12617;
i__12602_12606 = G__12618;
continue;
} else {
var df_12619 = cljs.core.first.call(null,seq__12599_12613__$1);
goog.dom.append(frag,df_12619);

var G__12620 = cljs.core.next.call(null,seq__12599_12613__$1);
var G__12621 = null;
var G__12622 = (0);
var G__12623 = (0);
seq__12599_12603 = G__12620;
chunk__12600_12604 = G__12621;
count__12601_12605 = G__12622;
i__12602_12606 = G__12623;
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
var vec__12626 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__12626,(0),null);
var tdom = cljs.core.nth.call(null,vec__12626,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12626,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__12624_SHARP_){
return p1__12624_SHARP_.outerHTML;
});})(vec__12626,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t12631 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12631 = (function (trans,filt,func,extr_multi_node,meta12632){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta12632 = meta12632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12631.prototype.call = ((function (trans){
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

enfocus.core.t12631.prototype.apply = ((function (trans){
return (function (self__,args12634){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12634)));
});})(trans))
;

enfocus.core.t12631.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12631.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12631.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12631.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12631.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12633){
var self__ = this;
var _12633__$1 = this;
return self__.meta12632;
});})(trans))
;

enfocus.core.t12631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12633,meta12632__$1){
var self__ = this;
var _12633__$1 = this;
return (new enfocus.core.t12631(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta12632__$1));
});})(trans))
;

enfocus.core.t12631.cljs$lang$type = true;

enfocus.core.t12631.cljs$lang$ctorStr = "enfocus.core/t12631";

enfocus.core.t12631.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12631");
});})(trans))
;

enfocus.core.__GT_t12631 = ((function (trans){
return (function __GT_t12631(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12632){
return (new enfocus.core.t12631(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12632));
});})(trans))
;

}

return (new enfocus.core.t12631(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
if(typeof enfocus.core.t12645 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12645 = (function (trans,func,multi_node_chain,meta12646){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta12646 = meta12646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12645.prototype.call = ((function (trans){
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

enfocus.core.t12645.prototype.apply = ((function (trans){
return (function (self__,args12648){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12648)));
});})(trans))
;

enfocus.core.t12645.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12645.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12645.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12645.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12645.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12647){
var self__ = this;
var _12647__$1 = this;
return self__.meta12646;
});})(trans))
;

enfocus.core.t12645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12647,meta12646__$1){
var self__ = this;
var _12647__$1 = this;
return (new enfocus.core.t12645(self__.trans,self__.func,self__.multi_node_chain,meta12646__$1));
});})(trans))
;

enfocus.core.t12645.cljs$lang$type = true;

enfocus.core.t12645.cljs$lang$ctorStr = "enfocus.core/t12645";

enfocus.core.t12645.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12645");
});})(trans))
;

enfocus.core.__GT_t12645 = ((function (trans){
return (function __GT_t12645(trans__$1,func__$1,multi_node_chain__$1,meta12646){
return (new enfocus.core.t12645(trans__$1,func__$1,multi_node_chain__$1,meta12646));
});})(trans))
;

}

return (new enfocus.core.t12645(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__12636_SHARP_){
return domina.nodes.call(null,p1__12636_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t12649 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12649 = (function (trans,func,values,multi_node_chain,meta12650){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta12650 = meta12650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12649.prototype.call = ((function (trans){
return (function() {
var G__12654 = null;
var G__12654__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12654__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12654 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12654__2.call(this,self__,nodes);
case 3:
return G__12654__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12654.cljs$core$IFn$_invoke$arity$2 = G__12654__2;
G__12654.cljs$core$IFn$_invoke$arity$3 = G__12654__3;
return G__12654;
})()
;})(trans))
;

enfocus.core.t12649.prototype.apply = ((function (trans){
return (function (self__,args12652){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12652)));
});})(trans))
;

enfocus.core.t12649.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12649.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12649.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12649.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12649.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12651){
var self__ = this;
var _12651__$1 = this;
return self__.meta12650;
});})(trans))
;

enfocus.core.t12649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12651,meta12650__$1){
var self__ = this;
var _12651__$1 = this;
return (new enfocus.core.t12649(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta12650__$1));
});})(trans))
;

enfocus.core.t12649.cljs$lang$type = true;

enfocus.core.t12649.cljs$lang$ctorStr = "enfocus.core/t12649";

enfocus.core.t12649.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12649");
});})(trans))
;

enfocus.core.__GT_t12649 = ((function (trans){
return (function __GT_t12649(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12650){
return (new enfocus.core.t12649(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12650));
});})(trans))
;

}

return (new enfocus.core.t12649(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12655_SHARP_,p2__12656_SHARP_){
domina.destroy_children_BANG_.call(null,p1__12655_SHARP_);

return domina.append_BANG_.call(null,p1__12655_SHARP_,p2__12656_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__12657){
var values = cljs.core.seq(arglist__12657);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12658_SHARP_){
return domina.set_html_BANG_.call(null,p1__12658_SHARP_,txt);
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
return (function (p1__12659_SHARP_){
var seq__12666 = cljs.core.seq.call(null,pairs);
var chunk__12667 = null;
var count__12668 = (0);
var i__12669 = (0);
while(true){
if((i__12669 < count__12668)){
var vec__12670 = cljs.core._nth.call(null,chunk__12667,i__12669);
var name = cljs.core.nth.call(null,vec__12670,(0),null);
var value = cljs.core.nth.call(null,vec__12670,(1),null);
domina.set_attr_BANG_.call(null,p1__12659_SHARP_,name,value);

var G__12672 = seq__12666;
var G__12673 = chunk__12667;
var G__12674 = count__12668;
var G__12675 = (i__12669 + (1));
seq__12666 = G__12672;
chunk__12667 = G__12673;
count__12668 = G__12674;
i__12669 = G__12675;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12666);
if(temp__4126__auto__){
var seq__12666__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12666__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12666__$1);
var G__12676 = cljs.core.chunk_rest.call(null,seq__12666__$1);
var G__12677 = c__4409__auto__;
var G__12678 = cljs.core.count.call(null,c__4409__auto__);
var G__12679 = (0);
seq__12666 = G__12676;
chunk__12667 = G__12677;
count__12668 = G__12678;
i__12669 = G__12679;
continue;
} else {
var vec__12671 = cljs.core.first.call(null,seq__12666__$1);
var name = cljs.core.nth.call(null,vec__12671,(0),null);
var value = cljs.core.nth.call(null,vec__12671,(1),null);
domina.set_attr_BANG_.call(null,p1__12659_SHARP_,name,value);

var G__12680 = cljs.core.next.call(null,seq__12666__$1);
var G__12681 = null;
var G__12682 = (0);
var G__12683 = (0);
seq__12666 = G__12680;
chunk__12667 = G__12681;
count__12668 = G__12682;
i__12669 = G__12683;
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
set_attr.cljs$lang$applyTo = (function (arglist__12684){
var values = cljs.core.seq(arglist__12684);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12685_SHARP_){
var seq__12690 = cljs.core.seq.call(null,values);
var chunk__12691 = null;
var count__12692 = (0);
var i__12693 = (0);
while(true){
if((i__12693 < count__12692)){
var name = cljs.core._nth.call(null,chunk__12691,i__12693);
domina.remove_attr_BANG_.call(null,p1__12685_SHARP_,name);

var G__12694 = seq__12690;
var G__12695 = chunk__12691;
var G__12696 = count__12692;
var G__12697 = (i__12693 + (1));
seq__12690 = G__12694;
chunk__12691 = G__12695;
count__12692 = G__12696;
i__12693 = G__12697;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12690);
if(temp__4126__auto__){
var seq__12690__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12690__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12690__$1);
var G__12698 = cljs.core.chunk_rest.call(null,seq__12690__$1);
var G__12699 = c__4409__auto__;
var G__12700 = cljs.core.count.call(null,c__4409__auto__);
var G__12701 = (0);
seq__12690 = G__12698;
chunk__12691 = G__12699;
count__12692 = G__12700;
i__12693 = G__12701;
continue;
} else {
var name = cljs.core.first.call(null,seq__12690__$1);
domina.remove_attr_BANG_.call(null,p1__12685_SHARP_,name);

var G__12702 = cljs.core.next.call(null,seq__12690__$1);
var G__12703 = null;
var G__12704 = (0);
var G__12705 = (0);
seq__12690 = G__12702;
chunk__12691 = G__12703;
count__12692 = G__12704;
i__12693 = G__12705;
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
remove_attr.cljs$lang$applyTo = (function (arglist__12706){
var values = cljs.core.seq(arglist__12706);
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
var h = cljs.core.mapcat.call(null,(function (p__12709){
var vec__12710 = p__12709;
var n = cljs.core.nth.call(null,vec__12710,(0),null);
var v = cljs.core.nth.call(null,vec__12710,(1),null);
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
set_prop.cljs$lang$applyTo = (function (arglist__12711){
var forms = cljs.core.seq(arglist__12711);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12712_SHARP_){
var seq__12717 = cljs.core.seq.call(null,values);
var chunk__12718 = null;
var count__12719 = (0);
var i__12720 = (0);
while(true){
if((i__12720 < count__12719)){
var val = cljs.core._nth.call(null,chunk__12718,i__12720);
domina.add_class_BANG_.call(null,p1__12712_SHARP_,val);

var G__12721 = seq__12717;
var G__12722 = chunk__12718;
var G__12723 = count__12719;
var G__12724 = (i__12720 + (1));
seq__12717 = G__12721;
chunk__12718 = G__12722;
count__12719 = G__12723;
i__12720 = G__12724;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12717);
if(temp__4126__auto__){
var seq__12717__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12717__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12717__$1);
var G__12725 = cljs.core.chunk_rest.call(null,seq__12717__$1);
var G__12726 = c__4409__auto__;
var G__12727 = cljs.core.count.call(null,c__4409__auto__);
var G__12728 = (0);
seq__12717 = G__12725;
chunk__12718 = G__12726;
count__12719 = G__12727;
i__12720 = G__12728;
continue;
} else {
var val = cljs.core.first.call(null,seq__12717__$1);
domina.add_class_BANG_.call(null,p1__12712_SHARP_,val);

var G__12729 = cljs.core.next.call(null,seq__12717__$1);
var G__12730 = null;
var G__12731 = (0);
var G__12732 = (0);
seq__12717 = G__12729;
chunk__12718 = G__12730;
count__12719 = G__12731;
i__12720 = G__12732;
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
add_class.cljs$lang$applyTo = (function (arglist__12733){
var values = cljs.core.seq(arglist__12733);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12734_SHARP_){
var seq__12739 = cljs.core.seq.call(null,values);
var chunk__12740 = null;
var count__12741 = (0);
var i__12742 = (0);
while(true){
if((i__12742 < count__12741)){
var val = cljs.core._nth.call(null,chunk__12740,i__12742);
domina.remove_class_BANG_.call(null,p1__12734_SHARP_,val);

var G__12743 = seq__12739;
var G__12744 = chunk__12740;
var G__12745 = count__12741;
var G__12746 = (i__12742 + (1));
seq__12739 = G__12743;
chunk__12740 = G__12744;
count__12741 = G__12745;
i__12742 = G__12746;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12739);
if(temp__4126__auto__){
var seq__12739__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12739__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12739__$1);
var G__12747 = cljs.core.chunk_rest.call(null,seq__12739__$1);
var G__12748 = c__4409__auto__;
var G__12749 = cljs.core.count.call(null,c__4409__auto__);
var G__12750 = (0);
seq__12739 = G__12747;
chunk__12740 = G__12748;
count__12741 = G__12749;
i__12742 = G__12750;
continue;
} else {
var val = cljs.core.first.call(null,seq__12739__$1);
domina.remove_class_BANG_.call(null,p1__12734_SHARP_,val);

var G__12751 = cljs.core.next.call(null,seq__12739__$1);
var G__12752 = null;
var G__12753 = (0);
var G__12754 = (0);
seq__12739 = G__12751;
chunk__12740 = G__12752;
count__12741 = G__12753;
i__12742 = G__12754;
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
remove_class.cljs$lang$applyTo = (function (arglist__12755){
var values = cljs.core.seq(arglist__12755);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12756_SHARP_){
return domina.set_classes_BANG_.call(null,p1__12756_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__12757){
var values = cljs.core.seq(arglist__12757);
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
var seq__12762 = cljs.core.seq.call(null,forms);
var chunk__12763 = null;
var count__12764 = (0);
var i__12765 = (0);
while(true){
if((i__12765 < count__12764)){
var fun = cljs.core._nth.call(null,chunk__12763,i__12765);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12766 = seq__12762;
var G__12767 = chunk__12763;
var G__12768 = count__12764;
var G__12769 = (i__12765 + (1));
seq__12762 = G__12766;
chunk__12763 = G__12767;
count__12764 = G__12768;
i__12765 = G__12769;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12762);
if(temp__4126__auto__){
var seq__12762__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12762__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12762__$1);
var G__12770 = cljs.core.chunk_rest.call(null,seq__12762__$1);
var G__12771 = c__4409__auto__;
var G__12772 = cljs.core.count.call(null,c__4409__auto__);
var G__12773 = (0);
seq__12762 = G__12770;
chunk__12763 = G__12771;
count__12764 = G__12772;
i__12765 = G__12773;
continue;
} else {
var fun = cljs.core.first.call(null,seq__12762__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12774 = cljs.core.next.call(null,seq__12762__$1);
var G__12775 = null;
var G__12776 = (0);
var G__12777 = (0);
seq__12762 = G__12774;
chunk__12763 = G__12775;
count__12764 = G__12776;
i__12765 = G__12777;
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
do__GT_.cljs$lang$applyTo = (function (arglist__12778){
var forms = cljs.core.seq(arglist__12778);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12779_SHARP_,p2__12780_SHARP_){
return domina.append_BANG_.call(null,p1__12779_SHARP_,p2__12780_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__12781){
var values = cljs.core.seq(arglist__12781);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12782_SHARP_,p2__12783_SHARP_){
return domina.prepend_BANG_.call(null,p1__12782_SHARP_,p2__12783_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__12784){
var values = cljs.core.seq(arglist__12784);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12785_SHARP_,p2__12786_SHARP_){
return domina.insert_before_BANG_.call(null,p1__12785_SHARP_,p2__12786_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__12787){
var values = cljs.core.seq(arglist__12787);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12788_SHARP_,p2__12789_SHARP_){
return domina.insert_after_BANG_.call(null,p1__12788_SHARP_,p2__12789_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__12790){
var values = cljs.core.seq(arglist__12790);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12791_SHARP_,p2__12792_SHARP_){
return domina.swap_content_BANG_.call(null,p1__12791_SHARP_,p2__12792_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__12793){
var values = cljs.core.seq(arglist__12793);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12794_SHARP_){
return domina.detach_BANG_.call(null,p1__12794_SHARP_);
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
return (function (p1__12795_SHARP_){
var seq__12802 = cljs.core.seq.call(null,pairs);
var chunk__12803 = null;
var count__12804 = (0);
var i__12805 = (0);
while(true){
if((i__12805 < count__12804)){
var vec__12806 = cljs.core._nth.call(null,chunk__12803,i__12805);
var name = cljs.core.nth.call(null,vec__12806,(0),null);
var value = cljs.core.nth.call(null,vec__12806,(1),null);
domina.set_style_BANG_.call(null,p1__12795_SHARP_,name,value);

var G__12808 = seq__12802;
var G__12809 = chunk__12803;
var G__12810 = count__12804;
var G__12811 = (i__12805 + (1));
seq__12802 = G__12808;
chunk__12803 = G__12809;
count__12804 = G__12810;
i__12805 = G__12811;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12802);
if(temp__4126__auto__){
var seq__12802__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12802__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12802__$1);
var G__12812 = cljs.core.chunk_rest.call(null,seq__12802__$1);
var G__12813 = c__4409__auto__;
var G__12814 = cljs.core.count.call(null,c__4409__auto__);
var G__12815 = (0);
seq__12802 = G__12812;
chunk__12803 = G__12813;
count__12804 = G__12814;
i__12805 = G__12815;
continue;
} else {
var vec__12807 = cljs.core.first.call(null,seq__12802__$1);
var name = cljs.core.nth.call(null,vec__12807,(0),null);
var value = cljs.core.nth.call(null,vec__12807,(1),null);
domina.set_style_BANG_.call(null,p1__12795_SHARP_,name,value);

var G__12816 = cljs.core.next.call(null,seq__12802__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12802 = G__12816;
chunk__12803 = G__12817;
count__12804 = G__12818;
i__12805 = G__12819;
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
set_style.cljs$lang$applyTo = (function (arglist__12820){
var values = cljs.core.seq(arglist__12820);
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
remove_style.cljs$lang$applyTo = (function (arglist__12821){
var values = cljs.core.seq(arglist__12821);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12822_SHARP_){
return domina.set_data_BANG_.call(null,p1__12822_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__12823){
var ttime = cljs.core.first(arglist__12823);
var funcs = cljs.core.rest(arglist__12823);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__12825_SHARP_,p2__12824_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__12824_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__12850_12858 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__12851_12859 = null;
var count__12852_12860 = (0);
var i__12853_12861 = (0);
while(true){
if((i__12853_12861 < count__12852_12860)){
var idx_12862 = cljs.core._nth.call(null,chunk__12851_12859,i__12853_12861);
var attr_12863 = pnod.attributes.item(idx_12862);
if(cljs.core.truth_(attr_12863.specified)){
attr_12863.value = rep_str.call(null,attr_12863.value);
} else {
}

var G__12864 = seq__12850_12858;
var G__12865 = chunk__12851_12859;
var G__12866 = count__12852_12860;
var G__12867 = (i__12853_12861 + (1));
seq__12850_12858 = G__12864;
chunk__12851_12859 = G__12865;
count__12852_12860 = G__12866;
i__12853_12861 = G__12867;
continue;
} else {
var temp__4126__auto___12868 = cljs.core.seq.call(null,seq__12850_12858);
if(temp__4126__auto___12868){
var seq__12850_12869__$1 = temp__4126__auto___12868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12850_12869__$1)){
var c__4409__auto___12870 = cljs.core.chunk_first.call(null,seq__12850_12869__$1);
var G__12871 = cljs.core.chunk_rest.call(null,seq__12850_12869__$1);
var G__12872 = c__4409__auto___12870;
var G__12873 = cljs.core.count.call(null,c__4409__auto___12870);
var G__12874 = (0);
seq__12850_12858 = G__12871;
chunk__12851_12859 = G__12872;
count__12852_12860 = G__12873;
i__12853_12861 = G__12874;
continue;
} else {
var idx_12875 = cljs.core.first.call(null,seq__12850_12869__$1);
var attr_12876 = pnod.attributes.item(idx_12875);
if(cljs.core.truth_(attr_12876.specified)){
attr_12876.value = rep_str.call(null,attr_12876.value);
} else {
}

var G__12877 = cljs.core.next.call(null,seq__12850_12869__$1);
var G__12878 = null;
var G__12879 = (0);
var G__12880 = (0);
seq__12850_12858 = G__12877;
chunk__12851_12859 = G__12878;
count__12852_12860 = G__12879;
i__12853_12861 = G__12880;
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
var seq__12854 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__12855 = null;
var count__12856 = (0);
var i__12857 = (0);
while(true){
if((i__12857 < count__12856)){
var cnode = cljs.core._nth.call(null,chunk__12855,i__12857);
rep_node.call(null,cnode);

var G__12881 = seq__12854;
var G__12882 = chunk__12855;
var G__12883 = count__12856;
var G__12884 = (i__12857 + (1));
seq__12854 = G__12881;
chunk__12855 = G__12882;
count__12856 = G__12883;
i__12857 = G__12884;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12854);
if(temp__4126__auto__){
var seq__12854__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12854__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12854__$1);
var G__12885 = cljs.core.chunk_rest.call(null,seq__12854__$1);
var G__12886 = c__4409__auto__;
var G__12887 = cljs.core.count.call(null,c__4409__auto__);
var G__12888 = (0);
seq__12854 = G__12885;
chunk__12855 = G__12886;
count__12856 = G__12887;
i__12857 = G__12888;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__12854__$1);
rep_node.call(null,cnode);

var G__12889 = cljs.core.next.call(null,seq__12854__$1);
var G__12890 = null;
var G__12891 = (0);
var G__12892 = (0);
seq__12854 = G__12889;
chunk__12855 = G__12890;
count__12856 = G__12891;
i__12857 = G__12892;
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
var seq__12897 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__12898 = null;
var count__12899 = (0);
var i__12900 = (0);
while(true){
if((i__12900 < count__12899)){
var idx = cljs.core._nth.call(null,chunk__12898,i__12900);
var el_12901 = (form_node.elements[idx]);
var ky_12902 = cljs.core.keyword.call(null,el_12901.name);
var val_12903 = ky_12902.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12902)){
var val_12904__$1 = (cljs.core.truth_(val_12903)?val_12903:"");
enfocus.core.set_form_input.call(null,val_12904__$1).call(null,el_12901);
} else {
}

var G__12905 = seq__12897;
var G__12906 = chunk__12898;
var G__12907 = count__12899;
var G__12908 = (i__12900 + (1));
seq__12897 = G__12905;
chunk__12898 = G__12906;
count__12899 = G__12907;
i__12900 = G__12908;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12897);
if(temp__4126__auto__){
var seq__12897__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12897__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12897__$1);
var G__12909 = cljs.core.chunk_rest.call(null,seq__12897__$1);
var G__12910 = c__4409__auto__;
var G__12911 = cljs.core.count.call(null,c__4409__auto__);
var G__12912 = (0);
seq__12897 = G__12909;
chunk__12898 = G__12910;
count__12899 = G__12911;
i__12900 = G__12912;
continue;
} else {
var idx = cljs.core.first.call(null,seq__12897__$1);
var el_12913 = (form_node.elements[idx]);
var ky_12914 = cljs.core.keyword.call(null,el_12913.name);
var val_12915 = ky_12914.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12914)){
var val_12916__$1 = (cljs.core.truth_(val_12915)?val_12915:"");
enfocus.core.set_form_input.call(null,val_12916__$1).call(null,el_12913);
} else {
}

var G__12917 = cljs.core.next.call(null,seq__12897__$1);
var G__12918 = null;
var G__12919 = (0);
var G__12920 = (0);
seq__12897 = G__12917;
chunk__12898 = G__12918;
count__12899 = G__12919;
i__12900 = G__12920;
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
var vec__12930 = node_spec;
var tag = cljs.core.nth.call(null,vec__12930,(0),null);
var vec__12931 = cljs.core.nthnext.call(null,vec__12930,(1));
var m = cljs.core.nth.call(null,vec__12931,(0),null);
var ms = cljs.core.nthnext.call(null,vec__12931,(1));
var more = vec__12931;
var vec__12932 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__12932,(0),null);
var segments = cljs.core.nthnext.call(null,vec__12932,(1));
var id = cljs.core.some.call(null,((function (vec__12930,tag,vec__12931,m,ms,more,vec__12932,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12930,tag,vec__12931,m,ms,more,vec__12932,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__12930,tag,vec__12931,m,ms,more,vec__12932,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12930,tag,vec__12931,m,ms,more,vec__12932,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__12933_12939 = cljs.core.seq.call(null,attrs__$2);
var chunk__12934_12940 = null;
var count__12935_12941 = (0);
var i__12936_12942 = (0);
while(true){
if((i__12936_12942 < count__12935_12941)){
var vec__12937_12943 = cljs.core._nth.call(null,chunk__12934_12940,i__12936_12942);
var key_12944 = cljs.core.nth.call(null,vec__12937_12943,(0),null);
var val_12945 = cljs.core.nth.call(null,vec__12937_12943,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12944),val_12945);

var G__12946 = seq__12933_12939;
var G__12947 = chunk__12934_12940;
var G__12948 = count__12935_12941;
var G__12949 = (i__12936_12942 + (1));
seq__12933_12939 = G__12946;
chunk__12934_12940 = G__12947;
count__12935_12941 = G__12948;
i__12936_12942 = G__12949;
continue;
} else {
var temp__4126__auto___12950 = cljs.core.seq.call(null,seq__12933_12939);
if(temp__4126__auto___12950){
var seq__12933_12951__$1 = temp__4126__auto___12950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12933_12951__$1)){
var c__4409__auto___12952 = cljs.core.chunk_first.call(null,seq__12933_12951__$1);
var G__12953 = cljs.core.chunk_rest.call(null,seq__12933_12951__$1);
var G__12954 = c__4409__auto___12952;
var G__12955 = cljs.core.count.call(null,c__4409__auto___12952);
var G__12956 = (0);
seq__12933_12939 = G__12953;
chunk__12934_12940 = G__12954;
count__12935_12941 = G__12955;
i__12936_12942 = G__12956;
continue;
} else {
var vec__12938_12957 = cljs.core.first.call(null,seq__12933_12951__$1);
var key_12958 = cljs.core.nth.call(null,vec__12938_12957,(0),null);
var val_12959 = cljs.core.nth.call(null,vec__12938_12957,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12958),val_12959);

var G__12960 = cljs.core.next.call(null,seq__12933_12951__$1);
var G__12961 = null;
var G__12962 = (0);
var G__12963 = (0);
seq__12933_12939 = G__12960;
chunk__12934_12940 = G__12961;
count__12935_12941 = G__12962;
i__12936_12942 = G__12963;
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
return (function (p1__12965_SHARP_,p2__12964_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__12964_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__12965_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__12965_SHARP_,vals);
} else {
return p1__12965_SHARP_;
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
if(typeof enfocus.core.t12970 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12970 = (function (trans,read_form_input,meta12971){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta12971 = meta12971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12970.prototype.call = ((function (trans){
return (function() {
var G__12974 = null;
var G__12974__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12974__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12974 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12974__2.call(this,self__,nodes);
case 3:
return G__12974__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12974.cljs$core$IFn$_invoke$arity$2 = G__12974__2;
G__12974.cljs$core$IFn$_invoke$arity$3 = G__12974__3;
return G__12974;
})()
;})(trans))
;

enfocus.core.t12970.prototype.apply = ((function (trans){
return (function (self__,args12973){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12973)));
});})(trans))
;

enfocus.core.t12970.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12970.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12970.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12970.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12970.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12972){
var self__ = this;
var _12972__$1 = this;
return self__.meta12971;
});})(trans))
;

enfocus.core.t12970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12972,meta12971__$1){
var self__ = this;
var _12972__$1 = this;
return (new enfocus.core.t12970(self__.trans,self__.read_form_input,meta12971__$1));
});})(trans))
;

enfocus.core.t12970.cljs$lang$type = true;

enfocus.core.t12970.cljs$lang$ctorStr = "enfocus.core/t12970";

enfocus.core.t12970.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12970");
});})(trans))
;

enfocus.core.__GT_t12970 = ((function (trans){
return (function __GT_t12970(trans__$1,read_form_input__$1,meta12971){
return (new enfocus.core.t12970(trans__$1,read_form_input__$1,meta12971));
});})(trans))
;

}

return (new enfocus.core.t12970(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__12976_SHARP_,p2__12975_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__12975_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__12976_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__12975_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__12975_SHARP_)));
} else {
return p1__12976_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__12977_SHARP_){
if((p1__12977_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__12977_SHARP_);
} else {
if((p1__12977_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__12977_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__12977_SHARP_)){
return create_sel_str.call(null,p1__12977_SHARP_);
} else {
if(typeof p1__12977_SHARP_ === 'string'){
return p1__12977_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var G__12988 = node;
if(G__12988){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__12988.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__12988.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12988);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12988);
}
} else {
return and__3610__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__12989 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__12989,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__12989,(1),null);
var seq__12990 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__12991 = null;
var count__12992 = (0);
var i__12993 = (0);
while(true){
if((i__12993 < count__12992)){
var vec__12994 = cljs.core._nth.call(null,chunk__12991,i__12993);
var sel = cljs.core.nth.call(null,vec__12994,(0),null);
var t = cljs.core.nth.call(null,vec__12994,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12996 = seq__12990;
var G__12997 = chunk__12991;
var G__12998 = count__12992;
var G__12999 = (i__12993 + (1));
seq__12990 = G__12996;
chunk__12991 = G__12997;
count__12992 = G__12998;
i__12993 = G__12999;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12990);
if(temp__4126__auto__){
var seq__12990__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12990__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12990__$1);
var G__13000 = cljs.core.chunk_rest.call(null,seq__12990__$1);
var G__13001 = c__4409__auto__;
var G__13002 = cljs.core.count.call(null,c__4409__auto__);
var G__13003 = (0);
seq__12990 = G__13000;
chunk__12991 = G__13001;
count__12992 = G__13002;
i__12993 = G__13003;
continue;
} else {
var vec__12995 = cljs.core.first.call(null,seq__12990__$1);
var sel = cljs.core.nth.call(null,vec__12995,(0),null);
var t = cljs.core.nth.call(null,vec__12995,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__13004 = cljs.core.next.call(null,seq__12990__$1);
var G__13005 = null;
var G__13006 = (0);
var G__13007 = (0);
seq__12990 = G__13004;
chunk__12991 = G__13005;
count__12992 = G__13006;
i__12993 = G__13007;
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
i_at.cljs$lang$applyTo = (function (arglist__13008){
var id_mask = cljs.core.first(arglist__13008);
arglist__13008 = cljs.core.next(arglist__13008);
var node = cljs.core.first(arglist__13008);
var trans = cljs.core.rest(arglist__13008);
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
at.cljs$lang$applyTo = (function (arglist__13009){
var node = cljs.core.first(arglist__13009);
var trans = cljs.core.rest(arglist__13009);
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
var sel_QMARK_ = (function (){var G__13014 = node;
if(G__13014){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13014.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__13014.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13014);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13014);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__13015 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__13015,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__13015,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__13015,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__13016){
var vec__13017 = p__13016;
var ky = cljs.core.nth.call(null,vec__13017,(0),null);
var sel = cljs.core.nth.call(null,vec__13017,(1),null);
var ext = cljs.core.nth.call(null,vec__13017,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__13015,node__$1,trans__$1,cnt,sel_QMARK_))
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
from.cljs$lang$applyTo = (function (arglist__13018){
var node = cljs.core.first(arglist__13018);
var trans = cljs.core.rest(arglist__13018);
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
var G__13019 = null;
var G__13019__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__13019__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__13019__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
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

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__13020 = null;
var G__13020__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13020__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13020__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
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
var G__13021 = null;
var G__13021__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13021__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13021__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__13021 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13021__1.call(this,this$);
case 2:
return G__13021__2.call(this,this$,root);
case 3:
return G__13021__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13021.cljs$core$IFn$_invoke$arity$1 = G__13021__1;
G__13021.cljs$core$IFn$_invoke$arity$2 = G__13021__2;
G__13021.cljs$core$IFn$_invoke$arity$3 = G__13021__3;
return G__13021;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__13022 = null;
var G__13022__2 = (function (trans,nodes){
return nodes;
});
var G__13022__3 = (function (trans,nodes,chain){
return nodes;
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

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__13023 = null;
var G__13023__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__13023__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__13023 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13023__2.call(this,trans,nodes);
case 3:
return G__13023__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13023.cljs$core$IFn$_invoke$arity$2 = G__13023__2;
G__13023.cljs$core$IFn$_invoke$arity$3 = G__13023__3;
return G__13023;
})()
);

//# sourceMappingURL=core.js.map