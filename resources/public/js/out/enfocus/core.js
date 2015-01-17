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







enfocus.core.ISelector = (function (){var obj8298 = {};
return obj8298;
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


enfocus.core.ITransform = (function (){var obj8300 = {};
return obj8300;
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

return cljs.core.mapcat.call(null,(function (p1__8301_SHARP_){
if(typeof p1__8301_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__8301_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__8301_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__8308_8314 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__8309_8315 = null;
var count__8310_8316 = (0);
var i__8311_8317 = (0);
while(true){
if((i__8311_8317 < count__8310_8316)){
var vec__8312_8318 = cljs.core._nth.call(null,chunk__8309_8315,i__8311_8317);
var attr_8319 = cljs.core.nth.call(null,vec__8312_8318,(0),null);
var value_8320 = cljs.core.nth.call(null,vec__8312_8318,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_8319),value_8320);

var G__8321 = seq__8308_8314;
var G__8322 = chunk__8309_8315;
var G__8323 = count__8310_8316;
var G__8324 = (i__8311_8317 + (1));
seq__8308_8314 = G__8321;
chunk__8309_8315 = G__8322;
count__8310_8316 = G__8323;
i__8311_8317 = G__8324;
continue;
} else {
var temp__4126__auto___8325 = cljs.core.seq.call(null,seq__8308_8314);
if(temp__4126__auto___8325){
var seq__8308_8326__$1 = temp__4126__auto___8325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8308_8326__$1)){
var c__4409__auto___8327 = cljs.core.chunk_first.call(null,seq__8308_8326__$1);
var G__8328 = cljs.core.chunk_rest.call(null,seq__8308_8326__$1);
var G__8329 = c__4409__auto___8327;
var G__8330 = cljs.core.count.call(null,c__4409__auto___8327);
var G__8331 = (0);
seq__8308_8314 = G__8328;
chunk__8309_8315 = G__8329;
count__8310_8316 = G__8330;
i__8311_8317 = G__8331;
continue;
} else {
var vec__8313_8332 = cljs.core.first.call(null,seq__8308_8326__$1);
var attr_8333 = cljs.core.nth.call(null,vec__8313_8332,(0),null);
var value_8334 = cljs.core.nth.call(null,vec__8313_8332,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_8333),value_8334);

var G__8335 = cljs.core.next.call(null,seq__8308_8326__$1);
var G__8336 = null;
var G__8337 = (0);
var G__8338 = (0);
seq__8308_8314 = G__8335;
chunk__8309_8315 = G__8336;
count__8310_8316 = G__8337;
i__8311_8317 = G__8338;
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
var seq__8343 = cljs.core.seq.call(null,values);
var chunk__8344 = null;
var count__8345 = (0);
var i__8346 = (0);
while(true){
if((i__8346 < count__8345)){
var attr = cljs.core._nth.call(null,chunk__8344,i__8346);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__8347 = seq__8343;
var G__8348 = chunk__8344;
var G__8349 = count__8345;
var G__8350 = (i__8346 + (1));
seq__8343 = G__8347;
chunk__8344 = G__8348;
count__8345 = G__8349;
i__8346 = G__8350;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8343);
if(temp__4126__auto__){
var seq__8343__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8343__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8343__$1);
var G__8351 = cljs.core.chunk_rest.call(null,seq__8343__$1);
var G__8352 = c__4409__auto__;
var G__8353 = cljs.core.count.call(null,c__4409__auto__);
var G__8354 = (0);
seq__8343 = G__8351;
chunk__8344 = G__8352;
count__8345 = G__8353;
i__8346 = G__8354;
continue;
} else {
var attr = cljs.core.first.call(null,seq__8343__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__8355 = cljs.core.next.call(null,seq__8343__$1);
var G__8356 = null;
var G__8357 = (0);
var G__8358 = (0);
seq__8343 = G__8355;
chunk__8344 = G__8356;
count__8345 = G__8357;
i__8346 = G__8358;
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
var seq__8365_8371 = cljs.core.seq.call(null,ats);
var chunk__8366_8372 = null;
var count__8367_8373 = (0);
var i__8368_8374 = (0);
while(true){
if((i__8368_8374 < count__8367_8373)){
var vec__8369_8375 = cljs.core._nth.call(null,chunk__8366_8372,i__8368_8374);
var k_8376 = cljs.core.nth.call(null,vec__8369_8375,(0),null);
var v_8377 = cljs.core.nth.call(null,vec__8369_8375,(1),null);
add_map_attrs.call(null,elem,k_8376,v_8377);

var G__8378 = seq__8365_8371;
var G__8379 = chunk__8366_8372;
var G__8380 = count__8367_8373;
var G__8381 = (i__8368_8374 + (1));
seq__8365_8371 = G__8378;
chunk__8366_8372 = G__8379;
count__8367_8373 = G__8380;
i__8368_8374 = G__8381;
continue;
} else {
var temp__4126__auto___8382 = cljs.core.seq.call(null,seq__8365_8371);
if(temp__4126__auto___8382){
var seq__8365_8383__$1 = temp__4126__auto___8382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8365_8383__$1)){
var c__4409__auto___8384 = cljs.core.chunk_first.call(null,seq__8365_8383__$1);
var G__8385 = cljs.core.chunk_rest.call(null,seq__8365_8383__$1);
var G__8386 = c__4409__auto___8384;
var G__8387 = cljs.core.count.call(null,c__4409__auto___8384);
var G__8388 = (0);
seq__8365_8371 = G__8385;
chunk__8366_8372 = G__8386;
count__8367_8373 = G__8387;
i__8368_8374 = G__8388;
continue;
} else {
var vec__8370_8389 = cljs.core.first.call(null,seq__8365_8383__$1);
var k_8390 = cljs.core.nth.call(null,vec__8370_8389,(0),null);
var v_8391 = cljs.core.nth.call(null,vec__8370_8389,(1),null);
add_map_attrs.call(null,elem,k_8390,v_8391);

var G__8392 = cljs.core.next.call(null,seq__8365_8383__$1);
var G__8393 = null;
var G__8394 = (0);
var G__8395 = (0);
seq__8365_8371 = G__8392;
chunk__8366_8372 = G__8393;
count__8367_8373 = G__8394;
i__8368_8374 = G__8395;
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

var seq__8400_8404 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__8401_8405 = null;
var count__8402_8406 = (0);
var i__8403_8407 = (0);
while(true){
if((i__8403_8407 < count__8402_8406)){
var node_8408 = cljs.core._nth.call(null,chunk__8401_8405,i__8403_8407);
goog.dom.appendChild(div,node_8408);

var G__8409 = seq__8400_8404;
var G__8410 = chunk__8401_8405;
var G__8411 = count__8402_8406;
var G__8412 = (i__8403_8407 + (1));
seq__8400_8404 = G__8409;
chunk__8401_8405 = G__8410;
count__8402_8406 = G__8411;
i__8403_8407 = G__8412;
continue;
} else {
var temp__4126__auto___8413 = cljs.core.seq.call(null,seq__8400_8404);
if(temp__4126__auto___8413){
var seq__8400_8414__$1 = temp__4126__auto___8413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8400_8414__$1)){
var c__4409__auto___8415 = cljs.core.chunk_first.call(null,seq__8400_8414__$1);
var G__8416 = cljs.core.chunk_rest.call(null,seq__8400_8414__$1);
var G__8417 = c__4409__auto___8415;
var G__8418 = cljs.core.count.call(null,c__4409__auto___8415);
var G__8419 = (0);
seq__8400_8404 = G__8416;
chunk__8401_8405 = G__8417;
count__8402_8406 = G__8418;
i__8403_8407 = G__8419;
continue;
} else {
var node_8420 = cljs.core.first.call(null,seq__8400_8414__$1);
goog.dom.appendChild(div,node_8420);

var G__8421 = cljs.core.next.call(null,seq__8400_8414__$1);
var G__8422 = null;
var G__8423 = (0);
var G__8424 = (0);
seq__8400_8404 = G__8421;
chunk__8401_8405 = G__8422;
count__8402_8406 = G__8423;
i__8403_8407 = G__8424;
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
return (function (p1__8425_SHARP_){
var id = p1__8425_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__8425_SHARP_.setAttribute("id",rid);
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
var vec__8427 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__8427,(0),null);
var txt = cljs.core.nth.call(null,vec__8427,(1),null);
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

var seq__8432_8436 = cljs.core.seq.call(null,dfa);
var chunk__8433_8437 = null;
var count__8434_8438 = (0);
var i__8435_8439 = (0);
while(true){
if((i__8435_8439 < count__8434_8438)){
var df_8440 = cljs.core._nth.call(null,chunk__8433_8437,i__8435_8439);
goog.dom.append(frag,df_8440);

var G__8441 = seq__8432_8436;
var G__8442 = chunk__8433_8437;
var G__8443 = count__8434_8438;
var G__8444 = (i__8435_8439 + (1));
seq__8432_8436 = G__8441;
chunk__8433_8437 = G__8442;
count__8434_8438 = G__8443;
i__8435_8439 = G__8444;
continue;
} else {
var temp__4126__auto___8445 = cljs.core.seq.call(null,seq__8432_8436);
if(temp__4126__auto___8445){
var seq__8432_8446__$1 = temp__4126__auto___8445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8432_8446__$1)){
var c__4409__auto___8447 = cljs.core.chunk_first.call(null,seq__8432_8446__$1);
var G__8448 = cljs.core.chunk_rest.call(null,seq__8432_8446__$1);
var G__8449 = c__4409__auto___8447;
var G__8450 = cljs.core.count.call(null,c__4409__auto___8447);
var G__8451 = (0);
seq__8432_8436 = G__8448;
chunk__8433_8437 = G__8449;
count__8434_8438 = G__8450;
i__8435_8439 = G__8451;
continue;
} else {
var df_8452 = cljs.core.first.call(null,seq__8432_8446__$1);
goog.dom.append(frag,df_8452);

var G__8453 = cljs.core.next.call(null,seq__8432_8446__$1);
var G__8454 = null;
var G__8455 = (0);
var G__8456 = (0);
seq__8432_8436 = G__8453;
chunk__8433_8437 = G__8454;
count__8434_8438 = G__8455;
i__8435_8439 = G__8456;
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
var vec__8459 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__8459,(0),null);
var tdom = cljs.core.nth.call(null,vec__8459,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__8459,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__8457_SHARP_){
return p1__8457_SHARP_.outerHTML;
});})(vec__8459,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t8464 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t8464 = (function (trans,filt,func,extr_multi_node,meta8465){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta8465 = meta8465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t8464.prototype.call = ((function (trans){
return (function() {
var G__8468 = null;
var G__8468__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__8468__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__8468 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__8468__2.call(this,self__,nodes);
case 3:
return G__8468__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8468.cljs$core$IFn$_invoke$arity$2 = G__8468__2;
G__8468.cljs$core$IFn$_invoke$arity$3 = G__8468__3;
return G__8468;
})()
;})(trans))
;

enfocus.core.t8464.prototype.apply = ((function (trans){
return (function (self__,args8467){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8467)));
});})(trans))
;

enfocus.core.t8464.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8464.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8464.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t8464.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8464.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_8466){
var self__ = this;
var _8466__$1 = this;
return self__.meta8465;
});})(trans))
;

enfocus.core.t8464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_8466,meta8465__$1){
var self__ = this;
var _8466__$1 = this;
return (new enfocus.core.t8464(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta8465__$1));
});})(trans))
;

enfocus.core.t8464.cljs$lang$type = true;

enfocus.core.t8464.cljs$lang$ctorStr = "enfocus.core/t8464";

enfocus.core.t8464.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t8464");
});})(trans))
;

enfocus.core.__GT_t8464 = ((function (trans){
return (function __GT_t8464(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta8465){
return (new enfocus.core.t8464(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta8465));
});})(trans))
;

}

return (new enfocus.core.t8464(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
if(typeof enfocus.core.t8478 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t8478 = (function (trans,func,multi_node_chain,meta8479){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta8479 = meta8479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t8478.prototype.call = ((function (trans){
return (function() {
var G__8486 = null;
var G__8486__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__8486__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__8486 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__8486__2.call(this,self__,nodes);
case 3:
return G__8486__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8486.cljs$core$IFn$_invoke$arity$2 = G__8486__2;
G__8486.cljs$core$IFn$_invoke$arity$3 = G__8486__3;
return G__8486;
})()
;})(trans))
;

enfocus.core.t8478.prototype.apply = ((function (trans){
return (function (self__,args8481){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8481)));
});})(trans))
;

enfocus.core.t8478.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8478.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8478.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t8478.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8478.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_8480){
var self__ = this;
var _8480__$1 = this;
return self__.meta8479;
});})(trans))
;

enfocus.core.t8478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_8480,meta8479__$1){
var self__ = this;
var _8480__$1 = this;
return (new enfocus.core.t8478(self__.trans,self__.func,self__.multi_node_chain,meta8479__$1));
});})(trans))
;

enfocus.core.t8478.cljs$lang$type = true;

enfocus.core.t8478.cljs$lang$ctorStr = "enfocus.core/t8478";

enfocus.core.t8478.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t8478");
});})(trans))
;

enfocus.core.__GT_t8478 = ((function (trans){
return (function __GT_t8478(trans__$1,func__$1,multi_node_chain__$1,meta8479){
return (new enfocus.core.t8478(trans__$1,func__$1,multi_node_chain__$1,meta8479));
});})(trans))
;

}

return (new enfocus.core.t8478(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__8469_SHARP_){
return domina.nodes.call(null,p1__8469_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t8482 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t8482 = (function (trans,func,values,multi_node_chain,meta8483){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta8483 = meta8483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t8482.prototype.call = ((function (trans){
return (function() {
var G__8487 = null;
var G__8487__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__8487__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__8487 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__8487__2.call(this,self__,nodes);
case 3:
return G__8487__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8487.cljs$core$IFn$_invoke$arity$2 = G__8487__2;
G__8487.cljs$core$IFn$_invoke$arity$3 = G__8487__3;
return G__8487;
})()
;})(trans))
;

enfocus.core.t8482.prototype.apply = ((function (trans){
return (function (self__,args8485){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8485)));
});})(trans))
;

enfocus.core.t8482.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8482.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8482.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t8482.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8482.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_8484){
var self__ = this;
var _8484__$1 = this;
return self__.meta8483;
});})(trans))
;

enfocus.core.t8482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_8484,meta8483__$1){
var self__ = this;
var _8484__$1 = this;
return (new enfocus.core.t8482(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta8483__$1));
});})(trans))
;

enfocus.core.t8482.cljs$lang$type = true;

enfocus.core.t8482.cljs$lang$ctorStr = "enfocus.core/t8482";

enfocus.core.t8482.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t8482");
});})(trans))
;

enfocus.core.__GT_t8482 = ((function (trans){
return (function __GT_t8482(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta8483){
return (new enfocus.core.t8482(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta8483));
});})(trans))
;

}

return (new enfocus.core.t8482(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__8488_SHARP_,p2__8489_SHARP_){
domina.destroy_children_BANG_.call(null,p1__8488_SHARP_);

return domina.append_BANG_.call(null,p1__8488_SHARP_,p2__8489_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__8490){
var values = cljs.core.seq(arglist__8490);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__8491_SHARP_){
return domina.set_html_BANG_.call(null,p1__8491_SHARP_,txt);
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
return (function (p1__8492_SHARP_){
var seq__8499 = cljs.core.seq.call(null,pairs);
var chunk__8500 = null;
var count__8501 = (0);
var i__8502 = (0);
while(true){
if((i__8502 < count__8501)){
var vec__8503 = cljs.core._nth.call(null,chunk__8500,i__8502);
var name = cljs.core.nth.call(null,vec__8503,(0),null);
var value = cljs.core.nth.call(null,vec__8503,(1),null);
domina.set_attr_BANG_.call(null,p1__8492_SHARP_,name,value);

var G__8505 = seq__8499;
var G__8506 = chunk__8500;
var G__8507 = count__8501;
var G__8508 = (i__8502 + (1));
seq__8499 = G__8505;
chunk__8500 = G__8506;
count__8501 = G__8507;
i__8502 = G__8508;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8499);
if(temp__4126__auto__){
var seq__8499__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8499__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8499__$1);
var G__8509 = cljs.core.chunk_rest.call(null,seq__8499__$1);
var G__8510 = c__4409__auto__;
var G__8511 = cljs.core.count.call(null,c__4409__auto__);
var G__8512 = (0);
seq__8499 = G__8509;
chunk__8500 = G__8510;
count__8501 = G__8511;
i__8502 = G__8512;
continue;
} else {
var vec__8504 = cljs.core.first.call(null,seq__8499__$1);
var name = cljs.core.nth.call(null,vec__8504,(0),null);
var value = cljs.core.nth.call(null,vec__8504,(1),null);
domina.set_attr_BANG_.call(null,p1__8492_SHARP_,name,value);

var G__8513 = cljs.core.next.call(null,seq__8499__$1);
var G__8514 = null;
var G__8515 = (0);
var G__8516 = (0);
seq__8499 = G__8513;
chunk__8500 = G__8514;
count__8501 = G__8515;
i__8502 = G__8516;
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
set_attr.cljs$lang$applyTo = (function (arglist__8517){
var values = cljs.core.seq(arglist__8517);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__8518_SHARP_){
var seq__8523 = cljs.core.seq.call(null,values);
var chunk__8524 = null;
var count__8525 = (0);
var i__8526 = (0);
while(true){
if((i__8526 < count__8525)){
var name = cljs.core._nth.call(null,chunk__8524,i__8526);
domina.remove_attr_BANG_.call(null,p1__8518_SHARP_,name);

var G__8527 = seq__8523;
var G__8528 = chunk__8524;
var G__8529 = count__8525;
var G__8530 = (i__8526 + (1));
seq__8523 = G__8527;
chunk__8524 = G__8528;
count__8525 = G__8529;
i__8526 = G__8530;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8523);
if(temp__4126__auto__){
var seq__8523__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8523__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8523__$1);
var G__8531 = cljs.core.chunk_rest.call(null,seq__8523__$1);
var G__8532 = c__4409__auto__;
var G__8533 = cljs.core.count.call(null,c__4409__auto__);
var G__8534 = (0);
seq__8523 = G__8531;
chunk__8524 = G__8532;
count__8525 = G__8533;
i__8526 = G__8534;
continue;
} else {
var name = cljs.core.first.call(null,seq__8523__$1);
domina.remove_attr_BANG_.call(null,p1__8518_SHARP_,name);

var G__8535 = cljs.core.next.call(null,seq__8523__$1);
var G__8536 = null;
var G__8537 = (0);
var G__8538 = (0);
seq__8523 = G__8535;
chunk__8524 = G__8536;
count__8525 = G__8537;
i__8526 = G__8538;
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
remove_attr.cljs$lang$applyTo = (function (arglist__8539){
var values = cljs.core.seq(arglist__8539);
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
var h = cljs.core.mapcat.call(null,(function (p__8542){
var vec__8543 = p__8542;
var n = cljs.core.nth.call(null,vec__8543,(0),null);
var v = cljs.core.nth.call(null,vec__8543,(1),null);
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
set_prop.cljs$lang$applyTo = (function (arglist__8544){
var forms = cljs.core.seq(arglist__8544);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__8545_SHARP_){
var seq__8550 = cljs.core.seq.call(null,values);
var chunk__8551 = null;
var count__8552 = (0);
var i__8553 = (0);
while(true){
if((i__8553 < count__8552)){
var val = cljs.core._nth.call(null,chunk__8551,i__8553);
domina.add_class_BANG_.call(null,p1__8545_SHARP_,val);

var G__8554 = seq__8550;
var G__8555 = chunk__8551;
var G__8556 = count__8552;
var G__8557 = (i__8553 + (1));
seq__8550 = G__8554;
chunk__8551 = G__8555;
count__8552 = G__8556;
i__8553 = G__8557;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8550);
if(temp__4126__auto__){
var seq__8550__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8550__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8550__$1);
var G__8558 = cljs.core.chunk_rest.call(null,seq__8550__$1);
var G__8559 = c__4409__auto__;
var G__8560 = cljs.core.count.call(null,c__4409__auto__);
var G__8561 = (0);
seq__8550 = G__8558;
chunk__8551 = G__8559;
count__8552 = G__8560;
i__8553 = G__8561;
continue;
} else {
var val = cljs.core.first.call(null,seq__8550__$1);
domina.add_class_BANG_.call(null,p1__8545_SHARP_,val);

var G__8562 = cljs.core.next.call(null,seq__8550__$1);
var G__8563 = null;
var G__8564 = (0);
var G__8565 = (0);
seq__8550 = G__8562;
chunk__8551 = G__8563;
count__8552 = G__8564;
i__8553 = G__8565;
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
add_class.cljs$lang$applyTo = (function (arglist__8566){
var values = cljs.core.seq(arglist__8566);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__8567_SHARP_){
var seq__8572 = cljs.core.seq.call(null,values);
var chunk__8573 = null;
var count__8574 = (0);
var i__8575 = (0);
while(true){
if((i__8575 < count__8574)){
var val = cljs.core._nth.call(null,chunk__8573,i__8575);
domina.remove_class_BANG_.call(null,p1__8567_SHARP_,val);

var G__8576 = seq__8572;
var G__8577 = chunk__8573;
var G__8578 = count__8574;
var G__8579 = (i__8575 + (1));
seq__8572 = G__8576;
chunk__8573 = G__8577;
count__8574 = G__8578;
i__8575 = G__8579;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8572);
if(temp__4126__auto__){
var seq__8572__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8572__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8572__$1);
var G__8580 = cljs.core.chunk_rest.call(null,seq__8572__$1);
var G__8581 = c__4409__auto__;
var G__8582 = cljs.core.count.call(null,c__4409__auto__);
var G__8583 = (0);
seq__8572 = G__8580;
chunk__8573 = G__8581;
count__8574 = G__8582;
i__8575 = G__8583;
continue;
} else {
var val = cljs.core.first.call(null,seq__8572__$1);
domina.remove_class_BANG_.call(null,p1__8567_SHARP_,val);

var G__8584 = cljs.core.next.call(null,seq__8572__$1);
var G__8585 = null;
var G__8586 = (0);
var G__8587 = (0);
seq__8572 = G__8584;
chunk__8573 = G__8585;
count__8574 = G__8586;
i__8575 = G__8587;
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
remove_class.cljs$lang$applyTo = (function (arglist__8588){
var values = cljs.core.seq(arglist__8588);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__8589_SHARP_){
return domina.set_classes_BANG_.call(null,p1__8589_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__8590){
var values = cljs.core.seq(arglist__8590);
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
var seq__8595 = cljs.core.seq.call(null,forms);
var chunk__8596 = null;
var count__8597 = (0);
var i__8598 = (0);
while(true){
if((i__8598 < count__8597)){
var fun = cljs.core._nth.call(null,chunk__8596,i__8598);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__8599 = seq__8595;
var G__8600 = chunk__8596;
var G__8601 = count__8597;
var G__8602 = (i__8598 + (1));
seq__8595 = G__8599;
chunk__8596 = G__8600;
count__8597 = G__8601;
i__8598 = G__8602;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8595);
if(temp__4126__auto__){
var seq__8595__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8595__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8595__$1);
var G__8603 = cljs.core.chunk_rest.call(null,seq__8595__$1);
var G__8604 = c__4409__auto__;
var G__8605 = cljs.core.count.call(null,c__4409__auto__);
var G__8606 = (0);
seq__8595 = G__8603;
chunk__8596 = G__8604;
count__8597 = G__8605;
i__8598 = G__8606;
continue;
} else {
var fun = cljs.core.first.call(null,seq__8595__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__8607 = cljs.core.next.call(null,seq__8595__$1);
var G__8608 = null;
var G__8609 = (0);
var G__8610 = (0);
seq__8595 = G__8607;
chunk__8596 = G__8608;
count__8597 = G__8609;
i__8598 = G__8610;
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
do__GT_.cljs$lang$applyTo = (function (arglist__8611){
var forms = cljs.core.seq(arglist__8611);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__8612_SHARP_,p2__8613_SHARP_){
return domina.append_BANG_.call(null,p1__8612_SHARP_,p2__8613_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__8614){
var values = cljs.core.seq(arglist__8614);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__8615_SHARP_,p2__8616_SHARP_){
return domina.prepend_BANG_.call(null,p1__8615_SHARP_,p2__8616_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__8617){
var values = cljs.core.seq(arglist__8617);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__8618_SHARP_,p2__8619_SHARP_){
return domina.insert_before_BANG_.call(null,p1__8618_SHARP_,p2__8619_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__8620){
var values = cljs.core.seq(arglist__8620);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__8621_SHARP_,p2__8622_SHARP_){
return domina.insert_after_BANG_.call(null,p1__8621_SHARP_,p2__8622_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__8623){
var values = cljs.core.seq(arglist__8623);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__8624_SHARP_,p2__8625_SHARP_){
return domina.swap_content_BANG_.call(null,p1__8624_SHARP_,p2__8625_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__8626){
var values = cljs.core.seq(arglist__8626);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__8627_SHARP_){
return domina.detach_BANG_.call(null,p1__8627_SHARP_);
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
return (function (p1__8628_SHARP_){
var seq__8635 = cljs.core.seq.call(null,pairs);
var chunk__8636 = null;
var count__8637 = (0);
var i__8638 = (0);
while(true){
if((i__8638 < count__8637)){
var vec__8639 = cljs.core._nth.call(null,chunk__8636,i__8638);
var name = cljs.core.nth.call(null,vec__8639,(0),null);
var value = cljs.core.nth.call(null,vec__8639,(1),null);
domina.set_style_BANG_.call(null,p1__8628_SHARP_,name,value);

var G__8641 = seq__8635;
var G__8642 = chunk__8636;
var G__8643 = count__8637;
var G__8644 = (i__8638 + (1));
seq__8635 = G__8641;
chunk__8636 = G__8642;
count__8637 = G__8643;
i__8638 = G__8644;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8635);
if(temp__4126__auto__){
var seq__8635__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8635__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8635__$1);
var G__8645 = cljs.core.chunk_rest.call(null,seq__8635__$1);
var G__8646 = c__4409__auto__;
var G__8647 = cljs.core.count.call(null,c__4409__auto__);
var G__8648 = (0);
seq__8635 = G__8645;
chunk__8636 = G__8646;
count__8637 = G__8647;
i__8638 = G__8648;
continue;
} else {
var vec__8640 = cljs.core.first.call(null,seq__8635__$1);
var name = cljs.core.nth.call(null,vec__8640,(0),null);
var value = cljs.core.nth.call(null,vec__8640,(1),null);
domina.set_style_BANG_.call(null,p1__8628_SHARP_,name,value);

var G__8649 = cljs.core.next.call(null,seq__8635__$1);
var G__8650 = null;
var G__8651 = (0);
var G__8652 = (0);
seq__8635 = G__8649;
chunk__8636 = G__8650;
count__8637 = G__8651;
i__8638 = G__8652;
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
set_style.cljs$lang$applyTo = (function (arglist__8653){
var values = cljs.core.seq(arglist__8653);
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
remove_style.cljs$lang$applyTo = (function (arglist__8654){
var values = cljs.core.seq(arglist__8654);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__8655_SHARP_){
return domina.set_data_BANG_.call(null,p1__8655_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__8656){
var ttime = cljs.core.first(arglist__8656);
var funcs = cljs.core.rest(arglist__8656);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__8658_SHARP_,p2__8657_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__8657_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__8683_8691 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__8684_8692 = null;
var count__8685_8693 = (0);
var i__8686_8694 = (0);
while(true){
if((i__8686_8694 < count__8685_8693)){
var idx_8695 = cljs.core._nth.call(null,chunk__8684_8692,i__8686_8694);
var attr_8696 = pnod.attributes.item(idx_8695);
if(cljs.core.truth_(attr_8696.specified)){
attr_8696.value = rep_str.call(null,attr_8696.value);
} else {
}

var G__8697 = seq__8683_8691;
var G__8698 = chunk__8684_8692;
var G__8699 = count__8685_8693;
var G__8700 = (i__8686_8694 + (1));
seq__8683_8691 = G__8697;
chunk__8684_8692 = G__8698;
count__8685_8693 = G__8699;
i__8686_8694 = G__8700;
continue;
} else {
var temp__4126__auto___8701 = cljs.core.seq.call(null,seq__8683_8691);
if(temp__4126__auto___8701){
var seq__8683_8702__$1 = temp__4126__auto___8701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8683_8702__$1)){
var c__4409__auto___8703 = cljs.core.chunk_first.call(null,seq__8683_8702__$1);
var G__8704 = cljs.core.chunk_rest.call(null,seq__8683_8702__$1);
var G__8705 = c__4409__auto___8703;
var G__8706 = cljs.core.count.call(null,c__4409__auto___8703);
var G__8707 = (0);
seq__8683_8691 = G__8704;
chunk__8684_8692 = G__8705;
count__8685_8693 = G__8706;
i__8686_8694 = G__8707;
continue;
} else {
var idx_8708 = cljs.core.first.call(null,seq__8683_8702__$1);
var attr_8709 = pnod.attributes.item(idx_8708);
if(cljs.core.truth_(attr_8709.specified)){
attr_8709.value = rep_str.call(null,attr_8709.value);
} else {
}

var G__8710 = cljs.core.next.call(null,seq__8683_8702__$1);
var G__8711 = null;
var G__8712 = (0);
var G__8713 = (0);
seq__8683_8691 = G__8710;
chunk__8684_8692 = G__8711;
count__8685_8693 = G__8712;
i__8686_8694 = G__8713;
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
var seq__8687 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__8688 = null;
var count__8689 = (0);
var i__8690 = (0);
while(true){
if((i__8690 < count__8689)){
var cnode = cljs.core._nth.call(null,chunk__8688,i__8690);
rep_node.call(null,cnode);

var G__8714 = seq__8687;
var G__8715 = chunk__8688;
var G__8716 = count__8689;
var G__8717 = (i__8690 + (1));
seq__8687 = G__8714;
chunk__8688 = G__8715;
count__8689 = G__8716;
i__8690 = G__8717;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8687);
if(temp__4126__auto__){
var seq__8687__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8687__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8687__$1);
var G__8718 = cljs.core.chunk_rest.call(null,seq__8687__$1);
var G__8719 = c__4409__auto__;
var G__8720 = cljs.core.count.call(null,c__4409__auto__);
var G__8721 = (0);
seq__8687 = G__8718;
chunk__8688 = G__8719;
count__8689 = G__8720;
i__8690 = G__8721;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__8687__$1);
rep_node.call(null,cnode);

var G__8722 = cljs.core.next.call(null,seq__8687__$1);
var G__8723 = null;
var G__8724 = (0);
var G__8725 = (0);
seq__8687 = G__8722;
chunk__8688 = G__8723;
count__8689 = G__8724;
i__8690 = G__8725;
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
var seq__8730 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__8731 = null;
var count__8732 = (0);
var i__8733 = (0);
while(true){
if((i__8733 < count__8732)){
var idx = cljs.core._nth.call(null,chunk__8731,i__8733);
var el_8734 = (form_node.elements[idx]);
var ky_8735 = cljs.core.keyword.call(null,el_8734.name);
var val_8736 = ky_8735.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_8735)){
var val_8737__$1 = (cljs.core.truth_(val_8736)?val_8736:"");
enfocus.core.set_form_input.call(null,val_8737__$1).call(null,el_8734);
} else {
}

var G__8738 = seq__8730;
var G__8739 = chunk__8731;
var G__8740 = count__8732;
var G__8741 = (i__8733 + (1));
seq__8730 = G__8738;
chunk__8731 = G__8739;
count__8732 = G__8740;
i__8733 = G__8741;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8730);
if(temp__4126__auto__){
var seq__8730__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8730__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8730__$1);
var G__8742 = cljs.core.chunk_rest.call(null,seq__8730__$1);
var G__8743 = c__4409__auto__;
var G__8744 = cljs.core.count.call(null,c__4409__auto__);
var G__8745 = (0);
seq__8730 = G__8742;
chunk__8731 = G__8743;
count__8732 = G__8744;
i__8733 = G__8745;
continue;
} else {
var idx = cljs.core.first.call(null,seq__8730__$1);
var el_8746 = (form_node.elements[idx]);
var ky_8747 = cljs.core.keyword.call(null,el_8746.name);
var val_8748 = ky_8747.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_8747)){
var val_8749__$1 = (cljs.core.truth_(val_8748)?val_8748:"");
enfocus.core.set_form_input.call(null,val_8749__$1).call(null,el_8746);
} else {
}

var G__8750 = cljs.core.next.call(null,seq__8730__$1);
var G__8751 = null;
var G__8752 = (0);
var G__8753 = (0);
seq__8730 = G__8750;
chunk__8731 = G__8751;
count__8732 = G__8752;
i__8733 = G__8753;
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
var vec__8763 = node_spec;
var tag = cljs.core.nth.call(null,vec__8763,(0),null);
var vec__8764 = cljs.core.nthnext.call(null,vec__8763,(1));
var m = cljs.core.nth.call(null,vec__8764,(0),null);
var ms = cljs.core.nthnext.call(null,vec__8764,(1));
var more = vec__8764;
var vec__8765 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__8765,(0),null);
var segments = cljs.core.nthnext.call(null,vec__8765,(1));
var id = cljs.core.some.call(null,((function (vec__8763,tag,vec__8764,m,ms,more,vec__8765,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__8763,tag,vec__8764,m,ms,more,vec__8765,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__8763,tag,vec__8764,m,ms,more,vec__8765,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__8763,tag,vec__8764,m,ms,more,vec__8765,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__8766_8772 = cljs.core.seq.call(null,attrs__$2);
var chunk__8767_8773 = null;
var count__8768_8774 = (0);
var i__8769_8775 = (0);
while(true){
if((i__8769_8775 < count__8768_8774)){
var vec__8770_8776 = cljs.core._nth.call(null,chunk__8767_8773,i__8769_8775);
var key_8777 = cljs.core.nth.call(null,vec__8770_8776,(0),null);
var val_8778 = cljs.core.nth.call(null,vec__8770_8776,(1),null);
node.setAttribute(cljs.core.name.call(null,key_8777),val_8778);

var G__8779 = seq__8766_8772;
var G__8780 = chunk__8767_8773;
var G__8781 = count__8768_8774;
var G__8782 = (i__8769_8775 + (1));
seq__8766_8772 = G__8779;
chunk__8767_8773 = G__8780;
count__8768_8774 = G__8781;
i__8769_8775 = G__8782;
continue;
} else {
var temp__4126__auto___8783 = cljs.core.seq.call(null,seq__8766_8772);
if(temp__4126__auto___8783){
var seq__8766_8784__$1 = temp__4126__auto___8783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8766_8784__$1)){
var c__4409__auto___8785 = cljs.core.chunk_first.call(null,seq__8766_8784__$1);
var G__8786 = cljs.core.chunk_rest.call(null,seq__8766_8784__$1);
var G__8787 = c__4409__auto___8785;
var G__8788 = cljs.core.count.call(null,c__4409__auto___8785);
var G__8789 = (0);
seq__8766_8772 = G__8786;
chunk__8767_8773 = G__8787;
count__8768_8774 = G__8788;
i__8769_8775 = G__8789;
continue;
} else {
var vec__8771_8790 = cljs.core.first.call(null,seq__8766_8784__$1);
var key_8791 = cljs.core.nth.call(null,vec__8771_8790,(0),null);
var val_8792 = cljs.core.nth.call(null,vec__8771_8790,(1),null);
node.setAttribute(cljs.core.name.call(null,key_8791),val_8792);

var G__8793 = cljs.core.next.call(null,seq__8766_8784__$1);
var G__8794 = null;
var G__8795 = (0);
var G__8796 = (0);
seq__8766_8772 = G__8793;
chunk__8767_8773 = G__8794;
count__8768_8774 = G__8795;
i__8769_8775 = G__8796;
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
return (function (p1__8798_SHARP_,p2__8797_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__8797_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__8798_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__8798_SHARP_,vals);
} else {
return p1__8798_SHARP_;
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
if(typeof enfocus.core.t8803 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t8803 = (function (trans,read_form_input,meta8804){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta8804 = meta8804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t8803.prototype.call = ((function (trans){
return (function() {
var G__8807 = null;
var G__8807__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__8807__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__8807 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__8807__2.call(this,self__,nodes);
case 3:
return G__8807__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8807.cljs$core$IFn$_invoke$arity$2 = G__8807__2;
G__8807.cljs$core$IFn$_invoke$arity$3 = G__8807__3;
return G__8807;
})()
;})(trans))
;

enfocus.core.t8803.prototype.apply = ((function (trans){
return (function (self__,args8806){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8806)));
});})(trans))
;

enfocus.core.t8803.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8803.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8803.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t8803.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t8803.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t8803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_8805){
var self__ = this;
var _8805__$1 = this;
return self__.meta8804;
});})(trans))
;

enfocus.core.t8803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_8805,meta8804__$1){
var self__ = this;
var _8805__$1 = this;
return (new enfocus.core.t8803(self__.trans,self__.read_form_input,meta8804__$1));
});})(trans))
;

enfocus.core.t8803.cljs$lang$type = true;

enfocus.core.t8803.cljs$lang$ctorStr = "enfocus.core/t8803";

enfocus.core.t8803.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t8803");
});})(trans))
;

enfocus.core.__GT_t8803 = ((function (trans){
return (function __GT_t8803(trans__$1,read_form_input__$1,meta8804){
return (new enfocus.core.t8803(trans__$1,read_form_input__$1,meta8804));
});})(trans))
;

}

return (new enfocus.core.t8803(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__8809_SHARP_,p2__8808_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__8808_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__8809_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__8808_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__8808_SHARP_)));
} else {
return p1__8809_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__8810_SHARP_){
if((p1__8810_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__8810_SHARP_);
} else {
if((p1__8810_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__8810_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__8810_SHARP_)){
return create_sel_str.call(null,p1__8810_SHARP_);
} else {
if(typeof p1__8810_SHARP_ === 'string'){
return p1__8810_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var G__8821 = node;
if(G__8821){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__8821.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__8821.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__8821);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__8821);
}
} else {
return and__3610__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__8822 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__8822,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__8822,(1),null);
var seq__8823 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__8824 = null;
var count__8825 = (0);
var i__8826 = (0);
while(true){
if((i__8826 < count__8825)){
var vec__8827 = cljs.core._nth.call(null,chunk__8824,i__8826);
var sel = cljs.core.nth.call(null,vec__8827,(0),null);
var t = cljs.core.nth.call(null,vec__8827,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__8829 = seq__8823;
var G__8830 = chunk__8824;
var G__8831 = count__8825;
var G__8832 = (i__8826 + (1));
seq__8823 = G__8829;
chunk__8824 = G__8830;
count__8825 = G__8831;
i__8826 = G__8832;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8823);
if(temp__4126__auto__){
var seq__8823__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8823__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8823__$1);
var G__8833 = cljs.core.chunk_rest.call(null,seq__8823__$1);
var G__8834 = c__4409__auto__;
var G__8835 = cljs.core.count.call(null,c__4409__auto__);
var G__8836 = (0);
seq__8823 = G__8833;
chunk__8824 = G__8834;
count__8825 = G__8835;
i__8826 = G__8836;
continue;
} else {
var vec__8828 = cljs.core.first.call(null,seq__8823__$1);
var sel = cljs.core.nth.call(null,vec__8828,(0),null);
var t = cljs.core.nth.call(null,vec__8828,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__8837 = cljs.core.next.call(null,seq__8823__$1);
var G__8838 = null;
var G__8839 = (0);
var G__8840 = (0);
seq__8823 = G__8837;
chunk__8824 = G__8838;
count__8825 = G__8839;
i__8826 = G__8840;
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
i_at.cljs$lang$applyTo = (function (arglist__8841){
var id_mask = cljs.core.first(arglist__8841);
arglist__8841 = cljs.core.next(arglist__8841);
var node = cljs.core.first(arglist__8841);
var trans = cljs.core.rest(arglist__8841);
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
at.cljs$lang$applyTo = (function (arglist__8842){
var node = cljs.core.first(arglist__8842);
var trans = cljs.core.rest(arglist__8842);
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
var sel_QMARK_ = (function (){var G__8847 = node;
if(G__8847){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__8847.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__8847.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__8847);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__8847);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__8848 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__8848,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__8848,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__8848,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__8849){
var vec__8850 = p__8849;
var ky = cljs.core.nth.call(null,vec__8850,(0),null);
var sel = cljs.core.nth.call(null,vec__8850,(1),null);
var ext = cljs.core.nth.call(null,vec__8850,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__8848,node__$1,trans__$1,cnt,sel_QMARK_))
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
from.cljs$lang$applyTo = (function (arglist__8851){
var node = cljs.core.first(arglist__8851);
var trans = cljs.core.rest(arglist__8851);
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
var G__8852 = null;
var G__8852__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__8852__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__8852__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__8852 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__8852__1.call(this,this$);
case 2:
return G__8852__2.call(this,this$,root);
case 3:
return G__8852__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8852.cljs$core$IFn$_invoke$arity$1 = G__8852__1;
G__8852.cljs$core$IFn$_invoke$arity$2 = G__8852__2;
G__8852.cljs$core$IFn$_invoke$arity$3 = G__8852__3;
return G__8852;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__8853 = null;
var G__8853__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__8853__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__8853__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__8853 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__8853__1.call(this,this$);
case 2:
return G__8853__2.call(this,this$,root);
case 3:
return G__8853__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8853.cljs$core$IFn$_invoke$arity$1 = G__8853__1;
G__8853.cljs$core$IFn$_invoke$arity$2 = G__8853__2;
G__8853.cljs$core$IFn$_invoke$arity$3 = G__8853__3;
return G__8853;
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
var G__8854 = null;
var G__8854__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__8854__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__8854__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__8854 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__8854__1.call(this,this$);
case 2:
return G__8854__2.call(this,this$,root);
case 3:
return G__8854__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8854.cljs$core$IFn$_invoke$arity$1 = G__8854__1;
G__8854.cljs$core$IFn$_invoke$arity$2 = G__8854__2;
G__8854.cljs$core$IFn$_invoke$arity$3 = G__8854__3;
return G__8854;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__8855 = null;
var G__8855__2 = (function (trans,nodes){
return nodes;
});
var G__8855__3 = (function (trans,nodes,chain){
return nodes;
});
G__8855 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__8855__2.call(this,trans,nodes);
case 3:
return G__8855__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8855.cljs$core$IFn$_invoke$arity$2 = G__8855__2;
G__8855.cljs$core$IFn$_invoke$arity$3 = G__8855__3;
return G__8855;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__8856 = null;
var G__8856__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__8856__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__8856 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__8856__2.call(this,trans,nodes);
case 3:
return G__8856__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8856.cljs$core$IFn$_invoke$arity$2 = G__8856__2;
G__8856.cljs$core$IFn$_invoke$arity$3 = G__8856__3;
return G__8856;
})()
);

//# sourceMappingURL=core.js.map