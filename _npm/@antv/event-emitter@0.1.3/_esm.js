/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@antv/event-emitter@0.1.3/esm/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t=function(){function t(){this._events={}}return t.prototype.on=function(t,e,n){return this._events[t]||(this._events[t]=[]),this._events[t].push({callback:e,once:!!n}),this},t.prototype.once=function(t,e){return this.on(t,e,!0)},t.prototype.emit=function(t){for(var e=this,n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];var i=this._events[t]||[],o=this._events["*"]||[],r=function(s){for(var i=s.length,o=0;o<i;o++)if(s[o]){var r=s[o],h=r.callback;r.once&&(s.splice(o,1),0===s.length&&delete e._events[t],i--,o--),h.apply(e,n)}};r(i),r(o)},t.prototype.off=function(t,e){if(t)if(e){for(var n=this._events[t]||[],s=n.length,i=0;i<s;i++)n[i].callback===e&&(n.splice(i,1),s--,i--);0===n.length&&delete this._events[t]}else delete this._events[t];else this._events={};return this},t.prototype.getEvents=function(){return this._events},t}();export{t as default};
