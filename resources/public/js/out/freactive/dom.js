// Compiled by ClojureScript 0.0-2505
goog.provide('freactive.dom');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('freactive.core');
if(typeof freactive.dom.element_state_lookup !== 'undefined'){
} else {
freactive.dom.element_state_lookup = cljs.core.PersistentArrayMap.EMPTY;
}

freactive.dom.IElementSpec = (function (){var obj13720 = {};
return obj13720;
})();

freactive.dom._get_virtual_dom = (function _get_virtual_dom(x){
if((function (){var and__3610__auto__ = x;
if(and__3610__auto__){
return x.freactive$dom$IElementSpec$_get_virtual_dom$arity$1;
} else {
return and__3610__auto__;
}
})()){
return x.freactive$dom$IElementSpec$_get_virtual_dom$arity$1(x);
} else {
var x__4266__auto__ = (((x == null))?null:x);
return (function (){var or__3622__auto__ = (freactive.dom._get_virtual_dom[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.dom._get_virtual_dom["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IElementSpec.-get-virtual-dom",x);
}
}
})().call(null,x);
}
});


/**
* @constructor
* @param {*} spec
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
freactive.dom.ElementSpec = (function (spec,__meta,__extmap,__hash){
this.spec = spec;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
freactive.dom.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4225__auto__,k__4226__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return cljs.core._lookup.call(null,this__4225__auto____$1,k__4226__auto__,null);
});

freactive.dom.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k13722,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__13724 = (((k13722 instanceof cljs.core.Keyword))?k13722.fqn:null);
switch (G__13724) {
case "spec":
return self__.spec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13722,else__4228__auto__);

}
});

freactive.dom.ElementSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4239__auto__,writer__4240__auto__,opts__4241__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
var pr_pair__4242__auto__ = ((function (this__4239__auto____$1){
return (function (keyval__4243__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,cljs.core.pr_writer,""," ","",opts__4241__auto__,keyval__4243__auto__);
});})(this__4239__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,pr_pair__4242__auto__,"#freactive.dom.ElementSpec{",", ","}",opts__4241__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});

freactive.dom.ElementSpec.prototype.freactive$dom$IElementSpec$ = true;

freactive.dom.ElementSpec.prototype.freactive$dom$IElementSpec$_get_virtual_dom$arity$1 = (function (x){
var self__ = this;
var x__$1 = this;
return self__.spec;
});

freactive.dom.ElementSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4223__auto__){
var self__ = this;
var this__4223__auto____$1 = this;
return self__.__meta;
});

freactive.dom.ElementSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4219__auto__){
var self__ = this;
var this__4219__auto____$1 = this;
return (new freactive.dom.ElementSpec(self__.spec,self__.__meta,self__.__extmap,self__.__hash));
});

freactive.dom.ElementSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

freactive.dom.ElementSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4220__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var h__4043__auto__ = self__.__hash;
if(!((h__4043__auto__ == null))){
return h__4043__auto__;
} else {
var h__4043__auto____$1 = cljs.core.hash_imap.call(null,this__4220__auto____$1);
self__.__hash = h__4043__auto____$1;

return h__4043__auto____$1;
}
});

freactive.dom.ElementSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4221__auto__,other__4222__auto__){
var self__ = this;
var this__4221__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3610__auto__ = other__4222__auto__;
if(cljs.core.truth_(and__3610__auto__)){
return ((this__4221__auto____$1.constructor === other__4222__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4221__auto____$1,other__4222__auto__));
} else {
return and__3610__auto__;
}
})())){
return true;
} else {
return false;
}
});

freactive.dom.ElementSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4234__auto__,k__4235__auto__){
var self__ = this;
var this__4234__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),null], null), null),k__4235__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4234__auto____$1),self__.__meta),k__4235__auto__);
} else {
return (new freactive.dom.ElementSpec(self__.spec,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4235__auto__)),null));
}
});

freactive.dom.ElementSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__13721){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__13725 = cljs.core.keyword_identical_QMARK_;
var expr__13726 = k__4233__auto__;
if(cljs.core.truth_(pred__13725.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__13726))){
return (new freactive.dom.ElementSpec(G__13721,self__.__meta,self__.__extmap,null));
} else {
return (new freactive.dom.ElementSpec(self__.spec,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__13721),null));
}
});

freactive.dom.ElementSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});

freactive.dom.ElementSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__13721){
var self__ = this;
var this__4224__auto____$1 = this;
return (new freactive.dom.ElementSpec(self__.spec,G__13721,self__.__extmap,self__.__hash));
});

freactive.dom.ElementSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4230__auto__,entry__4231__auto__){
var self__ = this;
var this__4230__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4231__auto__)){
return cljs.core._assoc.call(null,this__4230__auto____$1,cljs.core._nth.call(null,entry__4231__auto__,(0)),cljs.core._nth.call(null,entry__4231__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4230__auto____$1,entry__4231__auto__);
}
});

freactive.dom.ElementSpec.cljs$lang$type = true;

freactive.dom.ElementSpec.cljs$lang$ctorPrSeq = (function (this__4259__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.dom/ElementSpec");
});

freactive.dom.ElementSpec.cljs$lang$ctorPrWriter = (function (this__4259__auto__,writer__4260__auto__){
return cljs.core._write.call(null,writer__4260__auto__,"freactive.dom/ElementSpec");
});

freactive.dom.__GT_ElementSpec = (function __GT_ElementSpec(spec){
return (new freactive.dom.ElementSpec(spec,null,null,null));
});

freactive.dom.map__GT_ElementSpec = (function map__GT_ElementSpec(G__13723){
return (new freactive.dom.ElementSpec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__13723),null,cljs.core.dissoc.call(null,G__13723,new cljs.core.Keyword(null,"spec","spec",347520401)),null));
});

freactive.dom.dom_node_QMARK_ = (function dom_node_QMARK_(x){
return (x.nodeType > (0));
});
freactive.dom.get_element_state = (function get_element_state(x){
return cljs.core.get.call(null,freactive.dom.element_state_lookup,x);
});
freactive.dom.get_virtual_dom = (function get_virtual_dom(x){
if(cljs.core.truth_(x)){
if(freactive.dom.dom_node_QMARK_.call(null,x)){
var temp__4126__auto__ = freactive.dom.get_element_state.call(null,x);
if(cljs.core.truth_(temp__4126__auto__)){
var state = temp__4126__auto__;
return get_virtual_dom.call(null,state.element_spec);
} else {
return null;
}
} else {
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return freactive.dom._get_virtual_dom.call(null,x);

}
}
}
} else {
return null;
}
});
freactive.dom.reset_element_spec_BANG_ = (function reset_element_spec_BANG_(dom_node,spec){
return freactive.dom.get_element_state.call(null,dom_node).element_spec = spec;
});

/**
* @constructor
*/
freactive.dom.ElementState = (function (disposed,element_spec,childstates){
this.disposed = disposed;
this.element_spec = element_spec;
this.childstates = childstates;
})

freactive.dom.ElementState.cljs$lang$type = true;

freactive.dom.ElementState.cljs$lang$ctorStr = "freactive.dom/ElementState";

freactive.dom.ElementState.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"freactive.dom/ElementState");
});

freactive.dom.__GT_ElementState = (function __GT_ElementState(disposed,element_spec,childstates){
return (new freactive.dom.ElementState(disposed,element_spec,childstates));
});

freactive.dom.init_element_state_BANG_ = (function init_element_state_BANG_(dom_node,element_spec){
var state = (new freactive.dom.ElementState(false,element_spec,cljs.core.PersistentArrayMap.EMPTY));
freactive.dom.element_state_lookup = cljs.core.assoc.call(null,freactive.dom.element_state_lookup,dom_node,state);

return state;
});
freactive.dom.register_with_parent_state = (function register_with_parent_state(parent_state,child,state){
return parent_state.childstates = cljs.core.assoc.call(null,parent_state.childstates,child,state);
});
freactive.dom.unregister_from_parent_state = (function unregister_from_parent_state(parent_state,child){
return parent_state.childstates = cljs.core.dissoc.call(null,parent_state.childstates,child);
});
freactive.dom.get_element_spec = (function get_element_spec(x){
if(freactive.dom.dom_node_QMARK_.call(null,x)){
var temp__4126__auto__ = freactive.dom.get_element_state.call(null,x);
if(cljs.core.truth_(temp__4126__auto__)){
var state = temp__4126__auto__;
return state.element_spec;
} else {
return null;
}
} else {
return x;
}
});

freactive.dom.IHasDOMNode = (function (){var obj13730 = {};
return obj13730;
})();

freactive.dom._get_dom_node = (function _get_dom_node(x){
if((function (){var and__3610__auto__ = x;
if(and__3610__auto__){
return x.freactive$dom$IHasDOMNode$_get_dom_node$arity$1;
} else {
return and__3610__auto__;
}
})()){
return x.freactive$dom$IHasDOMNode$_get_dom_node$arity$1(x);
} else {
var x__4266__auto__ = (((x == null))?null:x);
return (function (){var or__3622__auto__ = (freactive.dom._get_dom_node[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.dom._get_dom_node["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHasDOMNode.-get-dom-node",x);
}
}
})().call(null,x);
}
});

freactive.dom.get_dom_node = (function get_dom_node(x){
if(freactive.dom.dom_node_QMARK_.call(null,x)){
return x;
} else {
return freactive.dom._get_dom_node.call(null,x);
}
});

freactive.dom.IRemove = (function (){var obj13732 = {};
return obj13732;
})();

freactive.dom._remove_BANG_ = (function _remove_BANG_(x){
if((function (){var and__3610__auto__ = x;
if(and__3610__auto__){
return x.freactive$dom$IRemove$_remove_BANG_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return x.freactive$dom$IRemove$_remove_BANG_$arity$1(x);
} else {
var x__4266__auto__ = (((x == null))?null:x);
return (function (){var or__3622__auto__ = (freactive.dom._remove_BANG_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.dom._remove_BANG_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRemove.-remove!",x);
}
}
})().call(null,x);
}
});

freactive.dom.dispose_node = (function() {
var dispose_node = null;
var dispose_node__1 = (function (dom_node){
return dispose_node.call(null,dom_node,freactive.dom.get_element_state.call(null,dom_node));
});
var dispose_node__2 = (function (dom_node,state){
if(cljs.core.truth_(state)){
state.disposed = true;

delete freactive.dom.element_state_lookup[dom_node];

var seq__13739 = cljs.core.seq.call(null,state.childstates);
var chunk__13740 = null;
var count__13741 = (0);
var i__13742 = (0);
while(true){
if((i__13742 < count__13741)){
var vec__13743 = cljs.core._nth.call(null,chunk__13740,i__13742);
var child = cljs.core.nth.call(null,vec__13743,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__13743,(1),null);
dispose_node.call(null,child,state__$1);

var G__13745 = seq__13739;
var G__13746 = chunk__13740;
var G__13747 = count__13741;
var G__13748 = (i__13742 + (1));
seq__13739 = G__13745;
chunk__13740 = G__13746;
count__13741 = G__13747;
i__13742 = G__13748;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13739);
if(temp__4126__auto__){
var seq__13739__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13739__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13739__$1);
var G__13749 = cljs.core.chunk_rest.call(null,seq__13739__$1);
var G__13750 = c__4409__auto__;
var G__13751 = cljs.core.count.call(null,c__4409__auto__);
var G__13752 = (0);
seq__13739 = G__13749;
chunk__13740 = G__13750;
count__13741 = G__13751;
i__13742 = G__13752;
continue;
} else {
var vec__13744 = cljs.core.first.call(null,seq__13739__$1);
var child = cljs.core.nth.call(null,vec__13744,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__13744,(1),null);
dispose_node.call(null,child,state__$1);

var G__13753 = cljs.core.next.call(null,seq__13739__$1);
var G__13754 = null;
var G__13755 = (0);
var G__13756 = (0);
seq__13739 = G__13753;
chunk__13740 = G__13754;
count__13741 = G__13755;
i__13742 = G__13756;
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
dispose_node = function(dom_node,state){
switch(arguments.length){
case 1:
return dispose_node__1.call(this,dom_node);
case 2:
return dispose_node__2.call(this,dom_node,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispose_node.cljs$core$IFn$_invoke$arity$1 = dispose_node__1;
dispose_node.cljs$core$IFn$_invoke$arity$2 = dispose_node__2;
return dispose_node;
})()
;
freactive.dom.remove_dom_node = (function remove_dom_node(dom_node){
var state = (freactive.dom.element_state_lookup[dom_node]);
freactive.dom.dispose_node.call(null,dom_node,state);

var temp__4126__auto__ = dom_node.parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
parent.removeChild(dom_node);

if(cljs.core.truth_(state)){
return delete state.parent_state[state];
} else {
return null;
}
} else {
return null;
}
});
freactive.dom.remove_BANG_ = (function remove_BANG_(x){
if(freactive.dom.dom_node_QMARK_.call(null,x)){
return freactive.dom.remove_dom_node.call(null,x);
} else {
return freactive.dom._remove_BANG_.call(null,x);
}
});
freactive.dom.wrap_element_spec = (function wrap_element_spec(elem_spec){
if(typeof elem_spec === 'string'){
return (new freactive.dom.ElementSpec(elem_spec,null,null,null));
} else {
return elem_spec;
}
});
freactive.dom.with_transitions = (function with_transitions(elem_spec,transitions){
if((function (){var G__13758 = elem_spec;
if(G__13758){
var bit__4303__auto__ = (G__13758.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4303__auto__) || (G__13758.cljs$core$IDeref$)){
return true;
} else {
if((!G__13758.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13758);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13758);
}
})()){
return freactive.core.rx_STAR_.call(null,(function (){
return with_transitions.call(null,cljs.core.deref.call(null,elem_spec),transitions);
}),false);
} else {
return cljs.core.vary_meta.call(null,freactive.dom.wrap_element_spec.call(null,elem_spec),cljs.core.merge,transitions);
}
});
freactive.dom.get_transition = (function get_transition(x,transition_name){
var spec = freactive.dom.get_element_spec.call(null,x);
if(typeof spec === 'string'){
return null;
} else {
return cljs.core.get.call(null,cljs.core.meta.call(null,spec),transition_name);
}
});
freactive.dom.chain_transition = (function chain_transition(elem_spec,transition_name,transition_fn,chain_fn){
if((function (){var G__13760 = elem_spec;
if(G__13760){
var bit__4303__auto__ = (G__13760.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4303__auto__) || (G__13760.cljs$core$IDeref$)){
return true;
} else {
if((!G__13760.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13760);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13760);
}
})()){
return freactive.core.rx_STAR_.call(null,(function (){
return chain_transition.call(null,cljs.core.deref.call(null,elem_spec),transition_name,transition_fn,chain_fn);
}),false);
} else {
var cur_transition_fn = freactive.dom.get_transition.call(null,elem_spec,transition_name);
var transition_fn__$1 = (cljs.core.truth_(cur_transition_fn)?chain_fn.call(null,cur_transition_fn,transition_fn):transition_fn);
return freactive.dom.with_transitions.call(null,elem_spec,new cljs.core.PersistentArrayMap.fromArray([transition_name,transition_fn__$1], true, false));
}
});
freactive.dom.prepend_transition = (function prepend_transition(elem_spec,transition_name,transition_fn){
return freactive.dom.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){
return (function (elem,on_complete){
return new_tx.call(null,elem,(function (elem__$1,_){
return cur_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.dom.append_transition = (function append_transition(elem_spec,transition_name,transition_fn){
return freactive.dom.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){
return (function (elem,on_complete){
return cur_tx.call(null,elem,(function (elem__$1,_){
return new_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.dom.request_animation_frame = (function request_animation_frame(f){
return window.requestAnimationFrame(f);
});
if(typeof freactive.dom.render_queue !== 'undefined'){
} else {
freactive.dom.render_queue = [];
}
freactive.dom.enable_fps_instrumentation = false;
freactive.dom.enable_fps_instrumentation_BANG_ = (function() {
var enable_fps_instrumentation_BANG_ = null;
var enable_fps_instrumentation_BANG___0 = (function (){
return enable_fps_instrumentation_BANG_.call(null,true);
});
var enable_fps_instrumentation_BANG___1 = (function (enable){
return freactive.dom.enable_fps_instrumentation = enable;
});
enable_fps_instrumentation_BANG_ = function(enable){
switch(arguments.length){
case 0:
return enable_fps_instrumentation_BANG___0.call(this);
case 1:
return enable_fps_instrumentation_BANG___1.call(this,enable);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enable_fps_instrumentation_BANG_.cljs$core$IFn$_invoke$arity$0 = enable_fps_instrumentation_BANG___0;
enable_fps_instrumentation_BANG_.cljs$core$IFn$_invoke$arity$1 = enable_fps_instrumentation_BANG___1;
return enable_fps_instrumentation_BANG_;
})()
;
freactive.dom.instrumentation_i = (-1);
freactive.dom.fps = freactive.core.atom.call(null,null);
freactive.dom.frame_time = freactive.core.atom.call(null,null);
if(typeof freactive.dom.render_loop !== 'undefined'){
} else {
freactive.dom.render_loop = freactive.dom.request_animation_frame.call(null,(function render(frame_ms){
cljs.core.reset_BANG_.call(null,freactive.dom.frame_time,frame_ms);

if(cljs.core.truth_(freactive.dom.enable_fps_instrumentation)){
if(cljs.core._EQ_.call(null,freactive.dom.instrumentation_i,(4))){
cljs.core.reset_BANG_.call(null,freactive.dom.fps,((1000) * ((5) / (frame_ms - freactive.dom.last_instrumentation_time))));

freactive.dom.instrumentation_i = (0);
} else {
freactive.dom.instrumentation_i = (freactive.dom.instrumentation_i + (1));
}

if(cljs.core._EQ_.call(null,(0),freactive.dom.instrumentation_i)){
freactive.dom.last_instrumentation_time = frame_ms;
} else {
}
} else {
}

var queue_13761 = freactive.dom.render_queue;
var n_13762 = queue_13761.length;
if((n_13762 > (0))){
freactive.dom.render_queue = [];

var i_13763 = (0);
while(true){
if((i_13763 < n_13762)){
(queue_13761[i_13763]).call(null);

var G__13764 = (i_13763 + (1));
i_13763 = G__13764;
continue;
} else {
}
break;
}
} else {
}

return freactive.dom.request_animation_frame.call(null,render);
}));
}
freactive.dom.queue_animation = (function queue_animation(f){
return freactive.dom.render_queue.push(f);
});
freactive.dom.set_style_prop_BANG_ = (function set_style_prop_BANG_(elem,prop_name,prop_value){
var prop_name__$1 = cljs.core.name.call(null,prop_name);
return (elem.style[prop_name__$1] = [cljs.core.str(prop_value)].join(''));
});
freactive.dom.set_attr_BANG_ = (function set_attr_BANG_(elem,attr_name,attr_value){
var attr_name__$1 = cljs.core.name.call(null,attr_name);
return elem.setAttribute(attr_name__$1,attr_value);
});
freactive.dom.on_value_ref_invalidated_STAR_ = (function on_value_ref_invalidated_STAR_(set_fn,element,attr_name,ref,node_state){
var temp__4126__auto___13771 = freactive.core.get_add_remove_watch_STAR_.call(null,ref);
if(cljs.core.truth_(temp__4126__auto___13771)){
var vec__13768_13772 = temp__4126__auto___13771;
var add_watch_STAR__13773 = cljs.core.nth.call(null,vec__13768_13772,(0),null);
var remove_watch_STAR__13774 = cljs.core.nth.call(null,vec__13768_13772,(1),null);
var f_13775 = ((function (vec__13768_13772,add_watch_STAR__13773,remove_watch_STAR__13774,temp__4126__auto___13771){
return (function() {
var on_value_ref_invalidated = null;
var on_value_ref_invalidated__2 = (function (key,ref__$1){
remove_watch_STAR__13774.call(null,ref__$1,key);

return freactive.dom.queue_animation.call(null,((function (vec__13768_13772,add_watch_STAR__13773,remove_watch_STAR__13774,temp__4126__auto___13771){
return (function (_){
if(cljs.core.truth_(node_state.disposed)){
return null;
} else {
add_watch_STAR__13773.call(null,ref__$1,key,on_value_ref_invalidated);

return set_fn.call(null,element,attr_name,(function (){var _STAR_invalidate_rx_STAR_13770 = freactive.core._STAR_invalidate_rx_STAR_;
try{freactive.core._STAR_invalidate_rx_STAR_ = null;

return cljs.core.deref.call(null,ref__$1);
}finally {freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_13770;
}})());
}
});})(vec__13768_13772,add_watch_STAR__13773,remove_watch_STAR__13774,temp__4126__auto___13771))
);
});
var on_value_ref_invalidated__4 = (function (key,ref__$1,_,___$1){
return on_value_ref_invalidated.call(null,key,ref__$1);
});
on_value_ref_invalidated = function(key,ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_value_ref_invalidated__2.call(this,key,ref__$1);
case 4:
return on_value_ref_invalidated__4.call(this,key,ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_value_ref_invalidated__2;
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_value_ref_invalidated__4;
return on_value_ref_invalidated;
})()
;})(vec__13768_13772,add_watch_STAR__13773,remove_watch_STAR__13774,temp__4126__auto___13771))
;
add_watch_STAR__13773.call(null,ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,attr_name], null),f_13775);
} else {
}

return set_fn.call(null,element,attr_name,cljs.core.deref.call(null,ref));
});
freactive.dom.bind_style_prop_BANG_ = (function bind_style_prop_BANG_(element,attr_name,attr_value,node_state){
if((function (){var G__13777 = attr_value;
if(G__13777){
var bit__4303__auto__ = (G__13777.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4303__auto__) || (G__13777.cljs$core$IDeref$)){
return true;
} else {
if((!G__13777.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13777);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13777);
}
})()){
return freactive.dom.on_value_ref_invalidated_STAR_.call(null,freactive.dom.set_style_prop_BANG_,element,attr_name,attr_value,node_state);
} else {
return freactive.dom.set_style_prop_BANG_.call(null,element,attr_name,attr_value);
}
});
freactive.dom.listen_BANG_ = (function listen_BANG_(element,evt_name,handler){
return element.addEventListener(evt_name,handler);
});
freactive.dom.bind_attr_BANG_ = (function bind_attr_BANG_(element,attr_name,attr_value,node_state){
var attr_name__$1 = cljs.core.name.call(null,attr_name);
if(cljs.core._EQ_.call(null,"style",attr_name__$1)){
if(cljs.core.map_QMARK_.call(null,attr_value)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"attr-value","attr-value",-561203417,null))))].join('')));
}

var seq__13785 = cljs.core.seq.call(null,attr_value);
var chunk__13786 = null;
var count__13787 = (0);
var i__13788 = (0);
while(true){
if((i__13788 < count__13787)){
var vec__13789 = cljs.core._nth.call(null,chunk__13786,i__13788);
var p = cljs.core.nth.call(null,vec__13789,(0),null);
var v = cljs.core.nth.call(null,vec__13789,(1),null);
freactive.dom.bind_style_prop_BANG_.call(null,element,p,v,node_state);

var G__13792 = seq__13785;
var G__13793 = chunk__13786;
var G__13794 = count__13787;
var G__13795 = (i__13788 + (1));
seq__13785 = G__13792;
chunk__13786 = G__13793;
count__13787 = G__13794;
i__13788 = G__13795;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13785);
if(temp__4126__auto__){
var seq__13785__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13785__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13785__$1);
var G__13796 = cljs.core.chunk_rest.call(null,seq__13785__$1);
var G__13797 = c__4409__auto__;
var G__13798 = cljs.core.count.call(null,c__4409__auto__);
var G__13799 = (0);
seq__13785 = G__13796;
chunk__13786 = G__13797;
count__13787 = G__13798;
i__13788 = G__13799;
continue;
} else {
var vec__13790 = cljs.core.first.call(null,seq__13785__$1);
var p = cljs.core.nth.call(null,vec__13790,(0),null);
var v = cljs.core.nth.call(null,vec__13790,(1),null);
freactive.dom.bind_style_prop_BANG_.call(null,element,p,v,node_state);

var G__13800 = cljs.core.next.call(null,seq__13785__$1);
var G__13801 = null;
var G__13802 = (0);
var G__13803 = (0);
seq__13785 = G__13800;
chunk__13786 = G__13801;
count__13787 = G__13802;
i__13788 = G__13803;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["o","n","-"], null),cljs.core.take.call(null,(3),attr_name__$1))){
return freactive.dom.listen_BANG_.call(null,element,attr_name__$1.substring((3)),attr_value);
} else {
if((function (){var G__13791 = attr_value;
if(G__13791){
var bit__4303__auto__ = (G__13791.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4303__auto__) || (G__13791.cljs$core$IDeref$)){
return true;
} else {
if((!G__13791.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13791);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13791);
}
})()){
return freactive.dom.on_value_ref_invalidated_STAR_.call(null,freactive.dom.set_attr_BANG_,element,attr_name__$1,attr_value,node_state);
} else {
return freactive.dom.set_attr_BANG_.call(null,element,attr_name__$1,attr_value);
}

}
}
});
/**
* Regular expression that parses a CSS-style id and class from an element name.
*/
freactive.dom.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
freactive.dom.create_dom_node = (function create_dom_node(kw){
var tag_ns = cljs.core.namespace.call(null,kw);
var vec__13806 = cljs.core.re_matches.call(null,freactive.dom.re_tag,cljs.core.name.call(null,kw));
var _ = cljs.core.nth.call(null,vec__13806,(0),null);
var tag = cljs.core.nth.call(null,vec__13806,(1),null);
var id = cljs.core.nth.call(null,vec__13806,(2),null);
var class$ = cljs.core.nth.call(null,vec__13806,(3),null);
var node = (function (){var G__13807 = tag_ns;
if(cljs.core._EQ_.call(null,null,G__13807)){
return document.createElement(tag);
} else {
if(cljs.core._EQ_.call(null,"svg",G__13807)){
return document.createElementNS("http://www.w3.org/2000/svg",tag);
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Don't know how to handle tag ns "),cljs.core.str(tag_ns)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));


}
}
})();
if(cljs.core.truth_(id)){
node.id = id;
} else {
}

if(cljs.core.truth_(class$)){
node.className = class$;
} else {
}

return node;
});
freactive.dom.replace_child = (function replace_child(parent,new_elem_spec,cur_elem){
var cur_dom_node = freactive.dom.get_dom_node.call(null,cur_elem);
var new_virtual_dom = freactive.dom.get_virtual_dom.call(null,new_elem_spec);
if((typeof new_virtual_dom === 'string') && (cljs.core._EQ_.call(null,cur_dom_node.nodeType,(3)))){
cur_dom_node.textContent = new_virtual_dom;

freactive.dom.reset_element_spec_BANG_.call(null,cur_dom_node,new_elem_spec);

return cur_elem;
} else {
var new_elem = freactive.dom.build_element.call(null,new_elem_spec);
freactive.dom.get_dom_node.call(null,parent).replaceChild(freactive.dom.get_dom_node.call(null,new_elem),cur_dom_node);

freactive.dom.dispose_node.call(null,cur_dom_node);

return new_elem;
}
});
freactive.dom.append_child = (function append_child(parent,new_elem){
var new_elem__$1 = freactive.dom.build_element.call(null,new_elem);
freactive.dom.get_dom_node.call(null,parent).appendChild(new_elem__$1);

return new_elem__$1;
});
freactive.dom.replace_or_append_child = (function replace_or_append_child(parent,new_elem,cur_elem){
var new_elem__$1 = (cljs.core.truth_(cur_elem)?freactive.dom.replace_child.call(null,parent,new_elem,cur_elem):freactive.dom.append_child.call(null,parent,new_elem));
var temp__4126__auto___13808 = freactive.dom.get_element_state.call(null,parent);
if(cljs.core.truth_(temp__4126__auto___13808)){
var parent_state_13809 = temp__4126__auto___13808;
var state_13810 = freactive.dom.get_element_state.call(null,new_elem__$1);
state_13810.parent_state = parent_state_13809;

freactive.dom.register_with_parent_state.call(null,parent_state_13809,new_elem__$1,state_13810);
} else {
}

return new_elem__$1;
});
freactive.dom.do_show_element = (function do_show_element(parent,new_elem,cur_elem){
if(cljs.core.truth_(new_elem)){
var show = freactive.dom.get_transition.call(null,new_elem,new cljs.core.Keyword(null,"on-show","on-show",-1100796727));
var new_elem__$1 = freactive.dom.replace_or_append_child.call(null,parent,new_elem,cur_elem);
if(cljs.core.truth_(show)){
show.call(null,new_elem__$1,null);

} else {
}

return new_elem__$1;
} else {
return null;
}
});
freactive.dom.transition_element = (function transition_element(parent,new_elem,cur_elem){
if(cljs.core.truth_(cur_elem)){
var temp__4124__auto__ = freactive.dom.get_transition.call(null,cur_elem,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
if(cljs.core.truth_(temp__4124__auto__)){
var hide = temp__4124__auto__;
return hide.call(null,cur_elem,freactive.dom.do_show_element.call(null,parent,new_elem,cur_elem));
} else {
return freactive.dom.do_show_element.call(null,parent,new_elem,cur_elem);
}
} else {
return freactive.dom.do_show_element.call(null,parent,new_elem,cur_elem);
}
});
freactive.dom.clear_children_BANG_ = (function clear_children_BANG_(parent){
var dom_node = freactive.dom.get_dom_node.call(null,parent);
while(true){
var last_child = dom_node.lastChild;
if(cljs.core.truth_(last_child)){
dom_node.removeChild(last_child);

continue;
} else {
return null;
}
break;
}
});
freactive.dom.exec_transition = (function exec_transition(node,transition_name,callback){
var temp__4124__auto__ = freactive.dom.get_transition.call(null,node,transition_name);
if(cljs.core.truth_(temp__4124__auto__)){
var transition = temp__4124__auto__;
return transition.call(null,node,callback);
} else {
if(cljs.core.truth_(callback)){
return callback.call(null);
} else {
return null;
}
}
});
freactive.dom.hide_node = (function hide_node(node,callback){
return freactive.dom.exec_transition.call(null,node,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),callback);
});
freactive.dom.show_node = (function show_node(node,callback){
return freactive.dom.exec_transition.call(null,node,new cljs.core.Keyword(null,"on-show","on-show",-1100796727),callback);
});

/**
* @constructor
*/
freactive.dom.ReactiveElement = (function (parent,cur_element,dirty,updating,disposed,animate,invalidate){
this.parent = parent;
this.cur_element = cur_element;
this.dirty = dirty;
this.updating = updating;
this.disposed = disposed;
this.animate = animate;
this.invalidate = invalidate;
})
freactive.dom.ReactiveElement.prototype.freactive$dom$IRemove$ = true;

freactive.dom.ReactiveElement.prototype.freactive$dom$IRemove$_remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.disposed = true;

if(cljs.core.truth_(self__.updating)){
} else {
freactive.dom.remove_BANG_.call(null,cljs.core.deref.call(null,self__.cur_element));
}

var temp__4126__auto__ = freactive.dom.get_element_state.call(null,self__.parent);
if(cljs.core.truth_(temp__4126__auto__)){
var parent_state = temp__4126__auto__;
return freactive.dom.unregister_from_parent_state.call(null,parent_state,this$__$1);
} else {
return null;
}
});

freactive.dom.ReactiveElement.cljs$lang$type = true;

freactive.dom.ReactiveElement.cljs$lang$ctorStr = "freactive.dom/ReactiveElement";

freactive.dom.ReactiveElement.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"freactive.dom/ReactiveElement");
});

freactive.dom.__GT_ReactiveElement = (function __GT_ReactiveElement(parent,cur_element,dirty,updating,disposed,animate,invalidate){
return (new freactive.dom.ReactiveElement(parent,cur_element,dirty,updating,disposed,animate,invalidate));
});

freactive.dom.append_deref_child = (function append_deref_child(parent,child_ref){
var temp__4124__auto__ = freactive.core.get_add_remove_watch_STAR_.call(null,child_ref);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__13814 = temp__4124__auto__;
var add_watch_STAR_ = cljs.core.nth.call(null,vec__13814,(0),null);
var remove_watch_STAR_ = cljs.core.nth.call(null,vec__13814,(1),null);
var state = (new freactive.dom.ReactiveElement(parent,null,false,false,false,null,null));
var get_new_elem = ((function (state,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__){
return (function (){
state.dirty = false;

add_watch_STAR_.call(null,child_ref,state,state.invalidate);

var or__3622__auto__ = (function (){var _STAR_invalidate_rx_STAR_13816 = freactive.core._STAR_invalidate_rx_STAR_;
try{freactive.core._STAR_invalidate_rx_STAR_ = null;

return cljs.core.deref.call(null,child_ref);
}finally {freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_13816;
}})();
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
});})(state,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__))
;
var show_new_elem = ((function (state,get_new_elem,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__){
return (function (new_elem,cur){
var new_node = freactive.dom.replace_or_append_child.call(null,parent,new_elem,cur);
state.cur_element = new_node;

state.updating = false;

if(cljs.core.truth_(state.dirty)){
freactive.dom.queue_animation.call(null,state.animate);
} else {
}

return freactive.dom.show_node.call(null,new_node,null);
});})(state,get_new_elem,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__))
;
var animate = ((function (state,get_new_elem,show_new_elem,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__){
return (function animate(x){
if(cljs.core.truth_(state.disposed)){
return freactive.dom.remove_BANG_.call(null,state.cur_element);
} else {
var new_elem = get_new_elem.call(null);
var cur = state.cur_element;
if(cljs.core.not_EQ_.call(null,freactive.dom.get_virtual_dom.call(null,cur),freactive.dom.get_virtual_dom.call(null,new_elem))){
var hide = freactive.dom.get_transition.call(null,cur,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
if(cljs.core.truth_(hide)){
return hide.call(null,cur,((function (hide,new_elem,cur,state,get_new_elem,show_new_elem,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__){
return (function (){
if(cljs.core.truth_(state.disposed)){
freactive.dom.remove_dom_node.call(null,cur);

return cur.updating = false;
} else {
var new_elem__$1 = (cljs.core.truth_(state.dirty)?get_new_elem.call(null):new_elem);
return show_new_elem.call(null,new_elem__$1,cur);
}
});})(hide,new_elem,cur,state,get_new_elem,show_new_elem,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__))
);
} else {
return show_new_elem.call(null,new_elem,cur);
}
} else {
return null;
}
}
});})(state,get_new_elem,show_new_elem,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__))
;
var invalidate = ((function (state,get_new_elem,show_new_elem,animate,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__){
return (function() {
var on_child_ref_invalidated = null;
var on_child_ref_invalidated__2 = (function (cur_elem,child_ref__$1){
remove_watch_STAR_.call(null,child_ref__$1,cur_elem);

if(cljs.core.truth_(state.disposed)){
return null;
} else {
state.dirty = true;

if(cljs.core.truth_(state.updating)){
return null;
} else {
state.updating = true;

return freactive.dom.queue_animation.call(null,animate);
}
}
});
var on_child_ref_invalidated__4 = (function (key,child_ref__$1,_,___$1){
return on_child_ref_invalidated.call(null,key,child_ref__$1);
});
on_child_ref_invalidated = function(key,child_ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_child_ref_invalidated__2.call(this,key,child_ref__$1);
case 4:
return on_child_ref_invalidated__4.call(this,key,child_ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_child_ref_invalidated__2;
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_child_ref_invalidated__4;
return on_child_ref_invalidated;
})()
;})(state,get_new_elem,show_new_elem,animate,vec__13814,add_watch_STAR_,remove_watch_STAR_,temp__4124__auto__))
;
state.animate = animate;

state.invalidate = invalidate;

show_new_elem.call(null,get_new_elem.call(null),null);

var temp__4126__auto___13817 = freactive.dom.get_element_state.call(null,parent);
if(cljs.core.truth_(temp__4126__auto___13817)){
var parent_state_13818 = temp__4126__auto___13817;
freactive.dom.register_with_parent_state.call(null,parent_state_13818,state,state);
} else {
}

return state;
} else {
return freactive.dom.transition_element.call(null,parent,cljs.core.deref.call(null,child_ref),null);
}
});
freactive.dom.append_child_BANG_ = (function append_child_BANG_(parent,child){
if((function (){var G__13820 = child;
if(G__13820){
var bit__4303__auto__ = (G__13820.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4303__auto__) || (G__13820.cljs$core$IDeref$)){
return true;
} else {
if((!G__13820.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13820);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13820);
}
})()){
return freactive.dom.append_deref_child.call(null,parent,child);
} else {
return freactive.dom.transition_element.call(null,parent,child,null);

}
});
freactive.dom.append_children_BANG_ = (function append_children_BANG_(elem,children){
var seq__13825 = cljs.core.seq.call(null,children);
var chunk__13826 = null;
var count__13827 = (0);
var i__13828 = (0);
while(true){
if((i__13828 < count__13827)){
var ch = cljs.core._nth.call(null,chunk__13826,i__13828);
if(cljs.core.sequential_QMARK_.call(null,ch)){
if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword)){
freactive.dom.append_child_BANG_.call(null,elem,ch);
} else {
append_children_BANG_.call(null,elem,ch);
}
} else {
freactive.dom.append_child_BANG_.call(null,elem,ch);
}

var G__13829 = seq__13825;
var G__13830 = chunk__13826;
var G__13831 = count__13827;
var G__13832 = (i__13828 + (1));
seq__13825 = G__13829;
chunk__13826 = G__13830;
count__13827 = G__13831;
i__13828 = G__13832;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13825);
if(temp__4126__auto__){
var seq__13825__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13825__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13825__$1);
var G__13833 = cljs.core.chunk_rest.call(null,seq__13825__$1);
var G__13834 = c__4409__auto__;
var G__13835 = cljs.core.count.call(null,c__4409__auto__);
var G__13836 = (0);
seq__13825 = G__13833;
chunk__13826 = G__13834;
count__13827 = G__13835;
i__13828 = G__13836;
continue;
} else {
var ch = cljs.core.first.call(null,seq__13825__$1);
if(cljs.core.sequential_QMARK_.call(null,ch)){
if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword)){
freactive.dom.append_child_BANG_.call(null,elem,ch);
} else {
append_children_BANG_.call(null,elem,ch);
}
} else {
freactive.dom.append_child_BANG_.call(null,elem,ch);
}

var G__13837 = cljs.core.next.call(null,seq__13825__$1);
var G__13838 = null;
var G__13839 = (0);
var G__13840 = (0);
seq__13825 = G__13837;
chunk__13826 = G__13838;
count__13827 = G__13839;
i__13828 = G__13840;
continue;
}
} else {
return null;
}
}
break;
}
});
freactive.dom.build_element = (function build_element(elem_spec){
var virtual_dom = freactive.dom.get_virtual_dom.call(null,elem_spec);
var node = ((typeof virtual_dom === 'string')?(function (){var node = document.createTextNode(virtual_dom);
freactive.dom.init_element_state_BANG_.call(null,node,elem_spec);

return node;
})():(function (){var node = freactive.dom.create_dom_node.call(null,cljs.core.first.call(null,virtual_dom));
var state = freactive.dom.init_element_state_BANG_.call(null,node,elem_spec);
var attrs_QMARK_ = cljs.core.second.call(null,virtual_dom);
var attrs = ((cljs.core.map_QMARK_.call(null,attrs_QMARK_))?attrs_QMARK_:null);
var children = (cljs.core.truth_(attrs)?cljs.core.nnext.call(null,virtual_dom):cljs.core.next.call(null,virtual_dom));
var seq__13847_13853 = cljs.core.seq.call(null,attrs);
var chunk__13848_13854 = null;
var count__13849_13855 = (0);
var i__13850_13856 = (0);
while(true){
if((i__13850_13856 < count__13849_13855)){
var vec__13851_13857 = cljs.core._nth.call(null,chunk__13848_13854,i__13850_13856);
var k_13858 = cljs.core.nth.call(null,vec__13851_13857,(0),null);
var v_13859 = cljs.core.nth.call(null,vec__13851_13857,(1),null);
freactive.dom.bind_attr_BANG_.call(null,node,k_13858,v_13859,state);

var G__13860 = seq__13847_13853;
var G__13861 = chunk__13848_13854;
var G__13862 = count__13849_13855;
var G__13863 = (i__13850_13856 + (1));
seq__13847_13853 = G__13860;
chunk__13848_13854 = G__13861;
count__13849_13855 = G__13862;
i__13850_13856 = G__13863;
continue;
} else {
var temp__4126__auto___13864 = cljs.core.seq.call(null,seq__13847_13853);
if(temp__4126__auto___13864){
var seq__13847_13865__$1 = temp__4126__auto___13864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13847_13865__$1)){
var c__4409__auto___13866 = cljs.core.chunk_first.call(null,seq__13847_13865__$1);
var G__13867 = cljs.core.chunk_rest.call(null,seq__13847_13865__$1);
var G__13868 = c__4409__auto___13866;
var G__13869 = cljs.core.count.call(null,c__4409__auto___13866);
var G__13870 = (0);
seq__13847_13853 = G__13867;
chunk__13848_13854 = G__13868;
count__13849_13855 = G__13869;
i__13850_13856 = G__13870;
continue;
} else {
var vec__13852_13871 = cljs.core.first.call(null,seq__13847_13865__$1);
var k_13872 = cljs.core.nth.call(null,vec__13852_13871,(0),null);
var v_13873 = cljs.core.nth.call(null,vec__13852_13871,(1),null);
freactive.dom.bind_attr_BANG_.call(null,node,k_13872,v_13873,state);

var G__13874 = cljs.core.next.call(null,seq__13847_13865__$1);
var G__13875 = null;
var G__13876 = (0);
var G__13877 = (0);
seq__13847_13853 = G__13874;
chunk__13848_13854 = G__13875;
count__13849_13855 = G__13876;
i__13850_13856 = G__13877;
continue;
}
} else {
}
}
break;
}

if(children){
freactive.dom.append_children_BANG_.call(null,node,children);
} else {
}

return node;
})());
return node;
});
freactive.dom.mount_BANG_ = (function mount_BANG_(element,child){
var temp__4126__auto___13878 = freactive.dom.get_dom_node.call(null,element).lastChild;
if(cljs.core.truth_(temp__4126__auto___13878)){
var last_child_13879 = temp__4126__auto___13878;
freactive.dom.remove_BANG_.call(null,last_child_13879);
} else {
}

return freactive.dom.append_child_BANG_.call(null,element,child);
});

//# sourceMappingURL=dom.js.map