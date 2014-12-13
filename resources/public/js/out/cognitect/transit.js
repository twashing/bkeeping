// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__6164_6168 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__6165_6169 = null;var count__6166_6170 = (0);var i__6167_6171 = (0);while(true){
if((i__6167_6171 < count__6166_6170))
{var k_6172 = cljs.core._nth.call(null,chunk__6165_6169,i__6167_6171);var v_6173 = (b[k_6172]);(a[k_6172] = v_6173);
{
var G__6174 = seq__6164_6168;
var G__6175 = chunk__6165_6169;
var G__6176 = count__6166_6170;
var G__6177 = (i__6167_6171 + (1));
seq__6164_6168 = G__6174;
chunk__6165_6169 = G__6175;
count__6166_6170 = G__6176;
i__6167_6171 = G__6177;
continue;
}
} else
{var temp__4126__auto___6178 = cljs.core.seq.call(null,seq__6164_6168);if(temp__4126__auto___6178)
{var seq__6164_6179__$1 = temp__4126__auto___6178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6164_6179__$1))
{var c__4410__auto___6180 = cljs.core.chunk_first.call(null,seq__6164_6179__$1);{
var G__6181 = cljs.core.chunk_rest.call(null,seq__6164_6179__$1);
var G__6182 = c__4410__auto___6180;
var G__6183 = cljs.core.count.call(null,c__4410__auto___6180);
var G__6184 = (0);
seq__6164_6168 = G__6181;
chunk__6165_6169 = G__6182;
count__6166_6170 = G__6183;
i__6167_6171 = G__6184;
continue;
}
} else
{var k_6185 = cljs.core.first.call(null,seq__6164_6179__$1);var v_6186 = (b[k_6185]);(a[k_6185] = v_6186);
{
var G__6187 = cljs.core.next.call(null,seq__6164_6179__$1);
var G__6188 = null;
var G__6189 = (0);
var G__6190 = (0);
seq__6164_6168 = G__6187;
chunk__6165_6169 = G__6188;
count__6166_6170 = G__6189;
i__6167_6171 = G__6190;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__6191 = (i + (2));
var G__6192 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6191;
ret = G__6192;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6193_6197 = cljs.core.seq.call(null,v);var chunk__6194_6198 = null;var count__6195_6199 = (0);var i__6196_6200 = (0);while(true){
if((i__6196_6200 < count__6195_6199))
{var x_6201 = cljs.core._nth.call(null,chunk__6194_6198,i__6196_6200);ret.push(x_6201);
{
var G__6202 = seq__6193_6197;
var G__6203 = chunk__6194_6198;
var G__6204 = count__6195_6199;
var G__6205 = (i__6196_6200 + (1));
seq__6193_6197 = G__6202;
chunk__6194_6198 = G__6203;
count__6195_6199 = G__6204;
i__6196_6200 = G__6205;
continue;
}
} else
{var temp__4126__auto___6206 = cljs.core.seq.call(null,seq__6193_6197);if(temp__4126__auto___6206)
{var seq__6193_6207__$1 = temp__4126__auto___6206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6193_6207__$1))
{var c__4410__auto___6208 = cljs.core.chunk_first.call(null,seq__6193_6207__$1);{
var G__6209 = cljs.core.chunk_rest.call(null,seq__6193_6207__$1);
var G__6210 = c__4410__auto___6208;
var G__6211 = cljs.core.count.call(null,c__4410__auto___6208);
var G__6212 = (0);
seq__6193_6197 = G__6209;
chunk__6194_6198 = G__6210;
count__6195_6199 = G__6211;
i__6196_6200 = G__6212;
continue;
}
} else
{var x_6213 = cljs.core.first.call(null,seq__6193_6207__$1);ret.push(x_6213);
{
var G__6214 = cljs.core.next.call(null,seq__6193_6207__$1);
var G__6215 = null;
var G__6216 = (0);
var G__6217 = (0);
seq__6193_6197 = G__6214;
chunk__6194_6198 = G__6215;
count__6195_6199 = G__6216;
i__6196_6200 = G__6217;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6218_6222 = cljs.core.seq.call(null,v);var chunk__6219_6223 = null;var count__6220_6224 = (0);var i__6221_6225 = (0);while(true){
if((i__6221_6225 < count__6220_6224))
{var x_6226 = cljs.core._nth.call(null,chunk__6219_6223,i__6221_6225);ret.push(x_6226);
{
var G__6227 = seq__6218_6222;
var G__6228 = chunk__6219_6223;
var G__6229 = count__6220_6224;
var G__6230 = (i__6221_6225 + (1));
seq__6218_6222 = G__6227;
chunk__6219_6223 = G__6228;
count__6220_6224 = G__6229;
i__6221_6225 = G__6230;
continue;
}
} else
{var temp__4126__auto___6231 = cljs.core.seq.call(null,seq__6218_6222);if(temp__4126__auto___6231)
{var seq__6218_6232__$1 = temp__4126__auto___6231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6218_6232__$1))
{var c__4410__auto___6233 = cljs.core.chunk_first.call(null,seq__6218_6232__$1);{
var G__6234 = cljs.core.chunk_rest.call(null,seq__6218_6232__$1);
var G__6235 = c__4410__auto___6233;
var G__6236 = cljs.core.count.call(null,c__4410__auto___6233);
var G__6237 = (0);
seq__6218_6222 = G__6234;
chunk__6219_6223 = G__6235;
count__6220_6224 = G__6236;
i__6221_6225 = G__6237;
continue;
}
} else
{var x_6238 = cljs.core.first.call(null,seq__6218_6232__$1);ret.push(x_6238);
{
var G__6239 = cljs.core.next.call(null,seq__6218_6232__$1);
var G__6240 = null;
var G__6241 = (0);
var G__6242 = (0);
seq__6218_6222 = G__6239;
chunk__6219_6223 = G__6240;
count__6220_6224 = G__6241;
i__6221_6225 = G__6242;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6243_6247 = cljs.core.seq.call(null,v);var chunk__6244_6248 = null;var count__6245_6249 = (0);var i__6246_6250 = (0);while(true){
if((i__6246_6250 < count__6245_6249))
{var x_6251 = cljs.core._nth.call(null,chunk__6244_6248,i__6246_6250);ret.push(x_6251);
{
var G__6252 = seq__6243_6247;
var G__6253 = chunk__6244_6248;
var G__6254 = count__6245_6249;
var G__6255 = (i__6246_6250 + (1));
seq__6243_6247 = G__6252;
chunk__6244_6248 = G__6253;
count__6245_6249 = G__6254;
i__6246_6250 = G__6255;
continue;
}
} else
{var temp__4126__auto___6256 = cljs.core.seq.call(null,seq__6243_6247);if(temp__4126__auto___6256)
{var seq__6243_6257__$1 = temp__4126__auto___6256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6243_6257__$1))
{var c__4410__auto___6258 = cljs.core.chunk_first.call(null,seq__6243_6257__$1);{
var G__6259 = cljs.core.chunk_rest.call(null,seq__6243_6257__$1);
var G__6260 = c__4410__auto___6258;
var G__6261 = cljs.core.count.call(null,c__4410__auto___6258);
var G__6262 = (0);
seq__6243_6247 = G__6259;
chunk__6244_6248 = G__6260;
count__6245_6249 = G__6261;
i__6246_6250 = G__6262;
continue;
}
} else
{var x_6263 = cljs.core.first.call(null,seq__6243_6257__$1);ret.push(x_6263);
{
var G__6264 = cljs.core.next.call(null,seq__6243_6257__$1);
var G__6265 = null;
var G__6266 = (0);
var G__6267 = (0);
seq__6243_6247 = G__6264;
chunk__6244_6248 = G__6265;
count__6245_6249 = G__6266;
i__6246_6250 = G__6267;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x6277 = cljs.core.clone.call(null,handlers);x6277.forEach = ((function (x6277,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__6278 = cljs.core.seq.call(null,coll);var chunk__6279 = null;var count__6280 = (0);var i__6281 = (0);while(true){
if((i__6281 < count__6280))
{var vec__6282 = cljs.core._nth.call(null,chunk__6279,i__6281);var k = cljs.core.nth.call(null,vec__6282,(0),null);var v = cljs.core.nth.call(null,vec__6282,(1),null);f.call(null,v,k);
{
var G__6284 = seq__6278;
var G__6285 = chunk__6279;
var G__6286 = count__6280;
var G__6287 = (i__6281 + (1));
seq__6278 = G__6284;
chunk__6279 = G__6285;
count__6280 = G__6286;
i__6281 = G__6287;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6278);if(temp__4126__auto__)
{var seq__6278__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6278__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6278__$1);{
var G__6288 = cljs.core.chunk_rest.call(null,seq__6278__$1);
var G__6289 = c__4410__auto__;
var G__6290 = cljs.core.count.call(null,c__4410__auto__);
var G__6291 = (0);
seq__6278 = G__6288;
chunk__6279 = G__6289;
count__6280 = G__6290;
i__6281 = G__6291;
continue;
}
} else
{var vec__6283 = cljs.core.first.call(null,seq__6278__$1);var k = cljs.core.nth.call(null,vec__6283,(0),null);var v = cljs.core.nth.call(null,vec__6283,(1),null);f.call(null,v,k);
{
var G__6292 = cljs.core.next.call(null,seq__6278__$1);
var G__6293 = null;
var G__6294 = (0);
var G__6295 = (0);
seq__6278 = G__6292;
chunk__6279 = G__6293;
count__6280 = G__6294;
i__6281 = G__6295;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x6277,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x6277;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__6276 = obj;G__6276.push(kfn.call(null,k),vfn.call(null,v));
return G__6276;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t6299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t6299 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta6300){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta6300 = meta6300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t6299.cljs$lang$type = true;
cognitect.transit.t6299.cljs$lang$ctorStr = "cognitect.transit/t6299";
cognitect.transit.t6299.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/t6299");
});
cognitect.transit.t6299.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t6299.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t6299.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t6299.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t6299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6301){var self__ = this;
var _6301__$1 = this;return self__.meta6300;
});
cognitect.transit.t6299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6301,meta6300__$1){var self__ = this;
var _6301__$1 = this;return (new cognitect.transit.t6299(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta6300__$1));
});
cognitect.transit.__GT_t6299 = (function __GT_t6299(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6300){return (new cognitect.transit.t6299(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6300));
});
}
return (new cognitect.transit.t6299(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});
