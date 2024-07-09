/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/flru@1.0.2/dist/flru.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function n(n){var t,e,o,i=n||1;function r(n,r){++t>i&&(o=e,u(1),++t),e[n]=r}function u(n){t=0,e=Object.create(null),n||(o=Object.create(null))}return u(),{clear:u,has:function(n){return void 0!==e[n]||void 0!==o[n]},get:function(n){var t=e[n];return void 0!==t?t:void 0!==(t=o[n])?(r(n,t),t):void 0},set:function(n,t){void 0!==e[n]?e[n]=t:r(n,t)}}}export{n as default};
