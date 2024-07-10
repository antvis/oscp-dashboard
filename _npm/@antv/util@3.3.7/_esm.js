/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@antv/util@3.3.7/esm/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{mat3 as n,vec2 as t}from"../../gl-matrix@3.4.3/_esm.js";import{__assign as r,__spreadArray as e}from"../../tslib@2.6.3/_esm.js";function a(n){return[parseInt(n.substr(1,2),16),parseInt(n.substr(3,2),16),parseInt(n.substr(5,2),16)]}function u(n){var t=Math.round(n).toString(16);return 1===t.length?"0"+t:t}function i(n){return"#"+u(n[0])+u(n[1])+u(n[2])}var o=function(n){return null!==n&&"function"!=typeof n&&isFinite(n.length)},c=function(n,t){return!!o(n)&&n.indexOf(t)>-1},f=function(n,t){if(!o(n))return n;for(var r=[],e=0;e<n.length;e++){var a=n[e];t(a,e)&&r.push(a)}return r},l=function(n,t){return void 0===t&&(t=[]),f(n,(function(n){return!c(t,n)}))},h=function(n){return"function"==typeof n},s=function(n){return null==n},p={}.toString,v=function(n,t){return p.call(n)==="[object "+t+"]"},m=function(n){return Array.isArray?Array.isArray(n):v(n,"Array")},y=function(n){var t=typeof n;return null!==n&&"object"===t||"function"===t};function x(n,t){if(n)if(m(n))for(var r=0,e=n.length;r<e&&!1!==t(n[r],r);r++);else if(y(n))for(var a in n)if(n.hasOwnProperty(a)&&!1===t(n[a],a))break}var g=Object.keys?function(n){return Object.keys(n)}:function(n){var t=[];return x(n,(function(r,e){h(n)&&"prototype"===e||t.push(e)})),t};function d(n,t){var r=g(t),e=r.length;if(s(n))return!e;for(var a=0;a<e;a+=1){var u=r[a];if(t[u]!==n[u]||!(u in n))return!1}return!0}var M=function(n){return"object"==typeof n&&null!==n},b=function(n){if(!M(n)||!v(n,"Object"))return!1;if(null===Object.getPrototypeOf(n))return!0;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t};function w(n,t){if(!m(n))return null;var r;if(h(t)&&(r=t),b(t)&&(r=function(n){return d(n,t)}),r)for(var e=0;e<n.length;e+=1)if(r(n[e]))return n[e];return null}function A(n,t,r){void 0===r&&(r=0);for(var e=r;e<n.length;e++)if(t(n[e],e))return e;return-1}var O=function(n,t){for(var r=null,e=0;e<n.length;e++){var a=n[e][t];if(!s(a)){r=m(a)?a[0]:a;break}}return r},C=function(n){if(!m(n))return[];for(var t=[],r=0;r<n.length;r++)t=t.concat(n[r]);return t},j=function(n,t){if(void 0===t&&(t=[]),m(n))for(var r=0;r<n.length;r+=1)j(n[r],t);else t.push(n);return t},I=function(n){if(m(n))return n.reduce((function(n,t){return Math.max(n,t)}),n[0])},k=function(n){if(m(n))return n.reduce((function(n,t){return Math.min(n,t)}),n[0])},q=function(n){var t=n.filter((function(n){return!isNaN(n)}));if(!t.length)return{min:0,max:0};if(m(n[0])){for(var r=[],e=0;e<n.length;e++)r=r.concat(n[e]);t=r}var a=I(t);return{min:k(t),max:a}},P=Array.prototype,S=P.splice,E=P.indexOf,N=function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var e=0;e<t.length;e++)for(var a=t[e],u=-1;(u=E.call(n,a))>-1;)S.call(n,u,1);return n},F=Array.prototype.splice,T=function(n,t){if(!o(n))return[];for(var r=n?t.length:0,e=r-1;r--;){var a=void 0,u=t[r];r!==e&&u===a||(a=u,F.call(n,u,1))}return n},z=function(n,t,r){if(!m(n)&&!b(n))return n;var e=r;return x(n,(function(n,r){e=t(e,n,r)})),e},L=function(n,t){var r=[];if(!o(n))return r;for(var e=-1,a=[],u=n.length;++e<u;){var i=n[e];t(i,e,n)&&(r.push(i),a.push(e))}return T(n,a),r},V=function(n){return v(n,"String")};function _(n,t){var r;if(h(t))r=function(n,r){return t(n)-t(r)};else{var e=[];V(t)?e.push(t):m(t)&&(e=t),r=function(n,t){for(var r=0;r<e.length;r+=1){var a=e[r];if(n[a]>t[a])return 1;if(n[a]<t[a])return-1}return 0}}return n.sort(r),n}function Q(n,t){void 0===t&&(t=new Map);var r=[];if(Array.isArray(n))for(var e=0,a=n.length;e<a;e++){var u=n[e];t.has(u)||(r.push(u),t.set(u,!0))}return r}var R=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Q([].concat.apply([],n))},X=function(n,t){for(var r=[],e={},a=0;a<n.length;a++){var u=n[a][t];if(!s(u)){m(u)||(u=[u]);for(var i=0;i<u.length;i++){var o=u[i];e[o]||(r.push(o),e[o]=!0)}}}return r};function Y(n){if(o(n))return n[0]}function Z(n){if(o(n)){return n[n.length-1]}}function D(n,t){return!(!m(n)&&!V(n))&&n[0]===t}function H(n,t){return!(!m(n)&&!V(n))&&n[n.length-1]===t}var U=function(n,t){for(var r=0;r<n.length;r++)if(!t(n[r],r))return!1;return!0},B=function(n,t){for(var r=0;r<n.length;r++)if(t(n[r],r))return!0;return!1},K=Object.prototype.hasOwnProperty;function W(n,t){if(!t||!m(n))return{};for(var r,e={},a=h(t)?t:function(n){return n[t]},u=0;u<n.length;u++){var i=n[u];r=a(i),K.call(e,r)?e[r].push(i):e[r]=[i]}return e}function $(n,t){if(!t)return{0:n};if(!h(t)){var r=m(t)?t:t.replace(/\s+/g,"").split("*");t=function(n){for(var t="_",e=0,a=r.length;e<a;e++)t+=n[r[e]]&&n[r[e]].toString();return t}}return W(n,t)}var G=function(n,t){if(!t)return[n];var r=$(n,t),e=[];for(var a in r)e.push(r[a]);return e};function J(n,t){return n["_wrap_"+t]}function nn(n,t){if(n["_wrap_"+t])return n["_wrap_"+t];var r=function(r){n[t](r)};return n["_wrap_"+t]=r,r}var tn={};function rn(n){var t=tn[n];if(!t){for(var r=n.toString(16),e=r.length;e<6;e++)r="0"+r;t="#"+r,tn[n]=t}return t}function en(n){var t=0,r=0,e=0,a=0;return m(n)?1===n.length?t=r=e=a=n[0]:2===n.length?(t=e=n[0],r=a=n[1]):3===n.length?(t=n[0],r=a=n[1],e=n[2]):(t=n[0],r=n[1],e=n[2],a=n[3]):t=r=e=a=n,{r1:t,r2:r,r3:e,r4:a}}var an=function(n,t,r){return n<t?t:n>r?r:n},un=function(n,t){var r=t.toString(),e=r.indexOf(".");if(-1===e)return Math.round(n);var a=r.substr(e+1).length;return a>20&&(a=20),parseFloat(n.toFixed(a))},on=function(n){return v(n,"Number")},cn=function(n){return on(n)&&n%1!=0},fn=function(n){return on(n)&&n%2==0},ln=Number.isInteger?Number.isInteger:function(n){return on(n)&&n%1==0},hn=function(n){return on(n)&&n<0};function sn(n,t,r){return void 0===r&&(r=1e-5),Math.abs(n-t)<r}var pn=function(n){return on(n)&&n%2!=0},vn=function(n){return on(n)&&n>0},mn=function(n,t){if(m(n)){for(var r,e=-1/0,a=0;a<n.length;a++){var u=n[a],i=h(t)?t(u):u[t];i>e&&(r=u,e=i)}return r}},yn=function(n,t){if(m(n)){for(var r,e=1/0,a=0;a<n.length;a++){var u=n[a],i=h(t)?t(u):u[t];i<e&&(r=u,e=i)}return r}},xn=function(n,t){return(n%t+t)%t},gn=180/Math.PI,dn=function(n){return gn*n},Mn=parseInt,bn=Math.PI/180,wn=function(n){return bn*n},An=function(n,t){return n.hasOwnProperty(t)},On=Object.values?function(n){return Object.values(n)}:function(n){var t=[];return x(n,(function(r,e){h(n)&&"prototype"===e||t.push(r)})),t},Cn=function(n,t){return c(On(n),t)},jn=function(n){return s(n)?"":n.toString()},In=function(n){return jn(n).toLowerCase()},kn=function(n){var t=jn(n);return t.charAt(0).toLowerCase()+t.substring(1)};function qn(n,t){return n&&t?n.replace(/\\?\{([^{}]+)\}/g,(function(n,r){return"\\"===n.charAt(0)?n.slice(1):void 0===t[r]?"":t[r]})):n}var Pn=function(n){return jn(n).toUpperCase()},Sn=function(n){var t=jn(n);return t.charAt(0).toUpperCase()+t.substring(1)},En={}.toString,Nn=function(n){return En.call(n).replace(/^\[object /,"").replace(/]$/,"")},Fn=function(n){return v(n,"Arguments")},Tn=function(n){return v(n,"Boolean")},zn=function(n){return v(n,"Date")},Ln=function(n){return v(n,"Error")};function Vn(n){return on(n)&&isFinite(n)}var _n=function(n){return null===n},Qn=Object.prototype,Rn=function(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||Qn)},Xn=function(n){return v(n,"RegExp")},Yn=function(n){return void 0===n},Zn=function(n){return n instanceof Element||n instanceof Document};function Dn(n){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return setTimeout(n,16)})(n)}function Hn(n){(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame||clearTimeout)(n)}function Un(n,t){for(var r in t)t.hasOwnProperty(r)&&"constructor"!==r&&void 0!==t[r]&&(n[r]=t[r])}function Bn(n,t,r,e){return t&&Un(n,t),r&&Un(n,r),e&&Un(n,e),n}var Kn=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];for(var r=n[0],e=1;e<n.length;e++){var a=n[e];h(a)&&(a=a.prototype),Bn(r.prototype,a)}},Wn=function(n){if("object"!=typeof n||null===n)return n;var t;if(m(n)){t=[];for(var r=0,e=n.length;r<e;r++)"object"==typeof n[r]&&null!=n[r]?t[r]=Wn(n[r]):t[r]=n[r]}else for(var a in t={},n)"object"==typeof n[a]&&null!=n[a]?t[a]=Wn(n[a]):t[a]=n[a];return t};function $n(n,t,r){var e;return function(){var a=this,u=arguments,i=r&&!e;clearTimeout(e),e=setTimeout((function(){e=null,r||n.apply(a,u)}),t),i&&n.apply(a,u)}}var Gn=function(n,t,r){if(void 0===r&&(r=128),!h(n))throw new TypeError("Expected a function");var e=function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var u=t?t.apply(this,r):r[0],i=e.cache;if(i.has(u))return i.get(u);var o=n.apply(this,r);return i.set(u,o),o};return e.cache=function(n){var t,r,e,a=n||1;function u(n,u){++t>a&&(e=r,i(1),++t),r[n]=u}function i(n){t=0,r=Object.create(null),n||(e=Object.create(null))}return i(),{clear:i,has:function(n){return void 0!==r[n]||void 0!==e[n]},get:function(n){var t=r[n];return void 0!==t?t:void 0!==(t=e[n])?(u(n,t),t):void 0},set:function(n,t){void 0!==r[n]?r[n]=t:u(n,t)}}}(r),e};function Jn(n,t){if(Object.hasOwn)return Object.hasOwn(n,t);if(null==n)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(n),t)}function nt(n,t,r,e){for(var a in r=r||0,e=e||5,t)if(Jn(t,a)){var u=t[a];null!==u&&b(u)?(b(n[a])||(n[a]={}),r<e?nt(n[a],u,r+1,e):n[a]=t[a]):m(u)?(n[a]=[],n[a]=n[a].concat(u)):void 0!==u&&(n[a]=u)}}var tt=function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var e=0;e<t.length;e+=1)nt(n,t[e]);return n},rt=function(n,t,r,e){h(t)||(r=t,t=n,n=function(){});var a=Object.create?function(n,t){return Object.create(n,{constructor:{value:t}})}:function(n,t){function r(){}r.prototype=n;var e=new r;return e.constructor=t,e},u=a(t.prototype,n);return n.prototype=Bn(u,n.prototype),n.superclass=a(t.prototype,t),Bn(u,r),Bn(n,e),n},et=function(n,t){if(!o(n))return-1;var r=Array.prototype.indexOf;if(r)return r.call(n,t);for(var e=-1,a=0;a<n.length;a++)if(n[a]===t){e=a;break}return e},at=Object.prototype.hasOwnProperty;function ut(n){if(s(n))return!0;if(o(n))return!n.length;var t=Nn(n);if("Map"===t||"Set"===t)return!n.size;if(Rn(n))return!Object.keys(n).length;for(var r in n)if(at.call(n,r))return!1;return!0}var it=function(n,t){if(n===t)return!0;if(!n||!t)return!1;if(V(n)||V(t))return!1;if(o(n)||o(t)){if(n.length!==t.length)return!1;for(var r=!0,e=0;e<n.length&&(r=it(n[e],t[e]));e++);return r}if(M(n)||M(t)){var a=Object.keys(n),u=Object.keys(t);if(a.length!==u.length)return!1;for(r=!0,e=0;e<a.length&&(r=it(n[a[e]],t[a[e]]));e++);return r}return!1},ot=function(n,t,r){return h(r)?!!r(n,t):it(n,t)},ct=function(n,t){if(!o(n))return n;for(var r=[],e=0;e<n.length;e++){var a=n[e];r.push(t(a,e))}return r},ft=function(n){return n},lt=function(n,t){void 0===t&&(t=ft);var r={};return y(n)&&!s(n)&&Object.keys(n).forEach((function(e){r[e]=t(n[e],e)})),r},ht=function(n,t,r){for(var e=0,a=V(t)?t.split("."):t;n&&e<a.length;)n=n[a[e++]];return void 0===n||e<a.length?r:n},st=function(n,t,r){var e=n,a=V(t)?t.split("."):t;return a.forEach((function(n,t){t<a.length-1?(y(e[n])||(e[n]=on(a[t+1])?[]:{}),e=e[n]):e[n]=r})),n},pt=Object.prototype.hasOwnProperty,vt=function(n,t){if(null===n||!b(n))return{};var r={};return x(t,(function(t){pt.call(n,t)&&(r[t]=n[t])})),r},mt=function(n,t){return z(n,(function(n,r,e){return t.includes(e)||(n[e]=r),n}),{})},yt=function(n,t,r){var e,a,u,i,o=0;r||(r={});var c=function(){o=!1===r.leading?0:Date.now(),e=null,i=n.apply(a,u),e||(a=u=null)},f=function(){var f=Date.now();o||!1!==r.leading||(o=f);var l=t-(f-o);return a=this,u=arguments,l<=0||l>t?(e&&(clearTimeout(e),e=null),o=f,i=n.apply(a,u),e||(a=u=null)):e||!1===r.trailing||(e=setTimeout(c,l)),i};return f.cancel=function(){clearTimeout(e),o=0,e=a=u=null},f},xt=function(n){return o(n)?Array.prototype.slice.call(n):[]},gt={},dt=function(n){return gt[n=n||"g"]?gt[n]+=1:gt[n]=1,n+gt[n]},Mt=function(){},bt=function(n){return n};function wt(n){return s(n)?0:o(n)?n.length:Object.keys(n).length}var At,Ot=function(){function n(){this.map={}}return n.prototype.has=function(n){return void 0!==this.map[n]},n.prototype.get=function(n,t){var r=this.map[n];return void 0===r?t:r},n.prototype.set=function(n,t){this.map[n]=t},n.prototype.clear=function(){this.map={}},n.prototype.delete=function(n){delete this.map[n]},n.prototype.size=function(){return Object.keys(this.map).length},n}(),Ct=/rgba?\(([\s.,0-9]+)\)/;var jt=Gn((function(n){if("#"===n[0]&&7===n.length)return n;var t;At||((t=document.createElement("i")).title="Web Colour Picker",t.style.display="none",document.body.appendChild(t),At=t),At.style.color=n;var r=document.defaultView.getComputedStyle(At,"").getPropertyValue("color");return r=i(Ct.exec(r)[1].split(/\s*,\s*/).map((function(n){return Number(n)})))}),(function(n){return n}),256);function It(n,t,r,e){return n[e]+(t[e]-n[e])*r}function kt(n){var t=("string"==typeof n?n.split("-"):n).map((function(n){return a(-1===n.indexOf("#")?jt(n):n)}));return function(n){return function(n,t){var r=isNaN(Number(t))||t<0?0:t>1?1:Number(t),e=n.length-1,a=Math.floor(e*r),u=e*r-a,o=n[a],c=a===e?o:n[a+1];return i([It(o,c,u,0),It(o,c,u,1),It(o,c,u,2)])}(t,n)}}var qt=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,Pt=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,St=/[\d.]+:(#[^\s]+|[^)]+\))/gi;function Et(n){if(/^[r,R,L,l]{1}[\s]*\(/.test(n)){var t,r=void 0;if("l"===n[0]){var e=+(a=qt.exec(n))[1]+90;r=a[2],t="linear-gradient("+e+"deg, "}else if("r"===n[0]){var a;t="radial-gradient(",r=(a=Pt.exec(n))[4]}var u=r.match(St);return u.forEach((function(n,r){var e=n.split(":");t+=e[1]+" "+100*Number(e[0])+"%",r!==u.length-1&&(t+=", ")})),t+=")"}return n}function Nt(t,r,e){var a=[0,0,0,0,0,0,0,0,0];return n.fromRotation(a,e),n.multiply(t,a,r)}function Ft(t,r,e){var a=[0,0,0,0,0,0,0,0,0];return n.fromScaling(a,e),n.multiply(t,a,r)}function Tt(t,r,e){return n.multiply(t,e,r)}function zt(t,r){for(var e,a,u,i,o=t?[].concat(t):[1,0,0,0,1,0,0,0,1],c=0,f=r.length;c<f;c++){var l=r[c];switch(l[0]){case"t":e=o,a=o,u=[l[1],l[2]],i=void 0,i=[0,0,0,0,0,0,0,0,0],n.fromTranslation(i,u),n.multiply(e,i,a);break;case"s":Ft(o,o,[l[1],l[2]]);break;case"r":Nt(o,o,l[1]);break;case"m":Tt(o,o,l[1])}}return o}function Lt(n,t){return n[0]*t[1]-t[0]*n[1]}function Vt(n,r,e){var a=t.angle(n,r),u=Lt(n,r)>=0;return e?u?2*Math.PI-a:a:u?a:2*Math.PI-a}function _t(n,t,r){return r?(n[0]=t[1],n[1]=-1*t[0]):(n[0]=-1*t[1],n[1]=t[0]),n}function Qt(n,t){return void 0===t&&(t="off"),function(n,t){if("off"===t)return[].concat(n);var r="number"==typeof t&&t>=1?Math.pow(10,t):1;return n.map((function(n){var e=n.slice(1).map(Number).map((function(n){return t?Math.round(n*r)/r:Math.round(n)}));return[n[0]].concat(e)}))}(n,t).map((function(n){return n[0]+n.slice(1).join(" ")})).join("")}var Rt={x1:0,y1:0,x2:0,y2:0,x:0,y:0,qx:null,qy:null};function Xt(n,t,r){if(n[r].length>7){n[r].shift();for(var e=n[r],a=r;e.length;)t[r]="A",n.splice(a+=1,0,["C"].concat(e.splice(0,6)));n.splice(r,1)}}var Yt={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0};function Zt(n){return Array.isArray(n)&&n.every((function(n){var t=n[0].toLowerCase();return Yt[t]===n.length-1&&"achlmqstvz".includes(t)}))}function Dt(n){return Zt(n)&&n.every((function(n){var t=n[0];return t===t.toUpperCase()}))}function Ht(n){return Dt(n)&&n.every((function(n){var t=n[0];return"ACLMQZ".includes(t)}))}function Ut(n){for(var t=n.pathValue[n.segmentStart],r=t.toLowerCase(),e=n.data;e.length>=Yt[r]&&("m"===r&&e.length>2?(n.segments.push([t].concat(e.splice(0,2))),r="l",t="m"===t?"l":"L"):n.segments.push([t].concat(e.splice(0,Yt[r]))),Yt[r]););}function Bt(n){var t=n.index,r=n.pathValue,e=r.charCodeAt(t);return 48===e?(n.param=0,void(n.index+=1)):49===e?(n.param=1,void(n.index+=1)):void(n.err='[path-util]: invalid Arc flag "'+r[t]+'", expecting 0 or 1 at index '+t)}function Kt(n){return n>=48&&n<=57||43===n||45===n||46===n}function Wt(n){return n>=48&&n<=57}function $t(n){var t,r=n.max,e=n.pathValue,a=n.index,u=a,i=!1,o=!1,c=!1,f=!1;if(u>=r)n.err="[path-util]: Invalid path value at index "+u+', "pathValue" is missing param';else if(43!==(t=e.charCodeAt(u))&&45!==t||(u+=1,t=e.charCodeAt(u)),Wt(t)||46===t){if(46!==t){if(i=48===t,u+=1,t=e.charCodeAt(u),i&&u<r&&t&&Wt(t))return void(n.err="[path-util]: Invalid path value at index "+a+', "'+e[a]+'" illegal number');for(;u<r&&Wt(e.charCodeAt(u));)u+=1,o=!0;t=e.charCodeAt(u)}if(46===t){for(f=!0,u+=1;Wt(e.charCodeAt(u));)u+=1,c=!0;t=e.charCodeAt(u)}if(101===t||69===t){if(f&&!o&&!c)return void(n.err="[path-util]: Invalid path value at index "+u+', "'+e[u]+'" invalid float exponent');if(u+=1,43!==(t=e.charCodeAt(u))&&45!==t||(u+=1),!(u<r&&Wt(e.charCodeAt(u))))return void(n.err="[path-util]: Invalid path value at index "+u+', "'+e[u]+'" invalid integer exponent');for(;u<r&&Wt(e.charCodeAt(u));)u+=1}n.index=u,n.param=+n.pathValue.slice(a,u)}else n.err="[path-util]: Invalid path value at index "+u+', "'+e[u]+'" is not a number'}function Gt(n){for(var t,r=n.pathValue,e=n.max;n.index<e&&(10===(t=r.charCodeAt(n.index))||13===t||8232===t||8233===t||32===t||9===t||11===t||12===t||160===t||t>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].includes(t));)n.index+=1}function Jt(n){var t=n.max,r=n.pathValue,e=n.index,a=r.charCodeAt(e),u=Yt[r[e].toLowerCase()];if(n.segmentStart=e,function(n){switch(32|n){case 109:case 122:case 108:case 104:case 118:case 99:case 115:case 113:case 116:case 97:return!0;default:return!1}}(a))if(n.index+=1,Gt(n),n.data=[],u){for(;;){for(var i=u;i>0;i-=1){if(97!=(32|a)||3!==i&&4!==i?$t(n):Bt(n),n.err.length)return;n.data.push(n.param),Gt(n),n.index<t&&44===r.charCodeAt(n.index)&&(n.index+=1,Gt(n))}if(n.index>=n.max)break;if(!Kt(r.charCodeAt(n.index)))break}Ut(n)}else Ut(n);else n.err='[path-util]: Invalid path value "'+r[e]+'" is not a path command'}var nr=function(n){this.pathValue=n,this.segments=[],this.max=n.length,this.index=0,this.param=0,this.segmentStart=0,this.data=[],this.err=""};function tr(n){if(Zt(n))return[].concat(n);var t=new nr(n);for(Gt(t);t.index<t.max&&!t.err.length;)Jt(t);return t.err?t.err:t.segments}function rr(n){if(Dt(n))return[].concat(n);var t=tr(n),r=0,e=0,a=0,u=0;return t.map((function(n){var t,i=n.slice(1).map(Number),o=n[0],c=o.toUpperCase();if("M"===o)return r=i[0],e=i[1],a=r,u=e,["M",r,e];if(o!==c)switch(c){case"A":t=[c,i[0],i[1],i[2],i[3],i[4],i[5]+r,i[6]+e];break;case"V":t=[c,i[0]+e];break;case"H":t=[c,i[0]+r];break;default:var f=i.map((function(n,t){return n+(t%2?e:r)}));t=[c].concat(f)}else t=[c].concat(i);var l=t.length;switch(c){case"Z":r=a,e=u;break;case"H":r=t[1];break;case"V":e=t[1];break;default:r=t[l-2],e=t[l-1],"M"===c&&(a=r,u=e)}return t}))}function er(n,t){var r=n[0],e=t.x1,a=t.y1,u=t.x2,i=t.y2,o=n.slice(1).map(Number),c=n;if("TQ".includes(r)||(t.qx=null,t.qy=null),"H"===r)c=["L",n[1],a];else if("V"===r)c=["L",e,n[1]];else if("S"===r){var f=2*e-u,l=2*a-i;t.x1=f,t.y1=l,c=["C",f,l].concat(o)}else if("T"===r){var h=2*e-t.qx,s=2*a-t.qy;t.qx=h,t.qy=s,c=["Q",h,s].concat(o)}else if("Q"===r){var p=o[0],v=o[1];t.qx=p,t.qy=v}return c}function ar(n){if(Ht(n))return[].concat(n);for(var t=rr(n),e=r({},Rt),a=0;a<t.length;a+=1){t[a]=er(t[a],e);var u=t[a],i=u.length;e.x1=+u[i-2],e.y1=+u[i-1],e.x2=+u[i-4]||e.x1,e.y2=+u[i-3]||e.y1}return t}function ur(n,t,r){return{x:n*Math.cos(r)-t*Math.sin(r),y:n*Math.sin(r)+t*Math.cos(r)}}function ir(n,t,r,e,a,u,i,o,c,f){var l,h,s,p,v,m=n,y=t,x=r,g=e,d=o,M=c,b=120*Math.PI/180,w=Math.PI/180*(+a||0),A=[];if(f)h=f[0],s=f[1],p=f[2],v=f[3];else{m=(l=ur(m,y,-w)).x,y=l.y;var O=(m-(d=(l=ur(d,M,-w)).x))/2,C=(y-(M=l.y))/2,j=O*O/(x*x)+C*C/(g*g);j>1&&(x*=j=Math.sqrt(j),g*=j);var I=x*x,k=g*g,q=(u===i?-1:1)*Math.sqrt(Math.abs((I*k-I*C*C-k*O*O)/(I*C*C+k*O*O)));p=q*x*C/g+(m+d)/2,v=q*-g*O/x+(y+M)/2,h=Math.asin(((y-v)/g*Math.pow(10,9)>>0)/Math.pow(10,9)),s=Math.asin(((M-v)/g*Math.pow(10,9)>>0)/Math.pow(10,9)),h=m<p?Math.PI-h:h,s=d<p?Math.PI-s:s,h<0&&(h=2*Math.PI+h),s<0&&(s=2*Math.PI+s),i&&h>s&&(h-=2*Math.PI),!i&&s>h&&(s-=2*Math.PI)}var P=s-h;if(Math.abs(P)>b){var S=s,E=d,N=M;s=h+b*(i&&s>h?1:-1),A=ir(d=p+x*Math.cos(s),M=v+g*Math.sin(s),x,g,a,0,i,E,N,[s,S,p,v])}P=s-h;var F=Math.cos(h),T=Math.sin(h),z=Math.cos(s),L=Math.sin(s),V=Math.tan(P/4),_=4/3*x*V,Q=4/3*g*V,R=[m,y],X=[m+_*T,y-Q*F],Y=[d+_*L,M-Q*z],Z=[d,M];if(X[0]=2*R[0]-X[0],X[1]=2*R[1]-X[1],f)return X.concat(Y,Z,A);for(var D=[],H=0,U=(A=X.concat(Y,Z,A)).length;H<U;H+=1)D[H]=H%2?ur(A[H-1],A[H],w).y:ur(A[H],A[H+1],w).x;return D}function or(n,t,r){var e=n[0],a=n[1];return[e+(t[0]-e)*r,a+(t[1]-a)*r]}var cr=function(n,t,r,a){var u=or([n,t],[r,a],.5);return e(e([],u,!0),[r,a,r,a],!1)};function fr(n,t){var r,e,a,u,i,o,c,f,l,h=n[0],s=n.slice(1).map(Number),p=s[0],v=s[1],m=t.x1,y=t.y1,x=t.x,g=t.y;switch("TQ".includes(h)||(t.qx=null,t.qy=null),h){case"M":return t.x=p,t.y=v,n;case"A":return r=[m,y].concat(s),["C"].concat(ir(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]));case"Q":return t.qx=p,t.qy=v,r=[m,y].concat(s),["C"].concat((e=r[0],a=r[1],u=r[2],i=r[3],o=r[4],c=r[5],[(f=1/3)*e+(l=2/3)*u,f*a+l*i,f*o+l*u,f*c+l*i,o,c]));case"L":return["C"].concat(cr(m,y,p,v));case"Z":return m===x&&y===g?["C",m,y,x,g,x,g]:["C"].concat(cr(m,y,x,g))}return n}function lr(n,t){if(void 0===t&&(t=!1),function(n){return Ht(n)&&n.every((function(n){var t=n[0];return"MC".includes(t)}))}(n)){var e=[].concat(n);return t?[e,[]]:e}for(var a,u,i=ar(n),o=r({},Rt),c=[],f="",l=i.length,h=[],s=0;s<l;s+=1){i[s]&&(f=i[s][0]),c[s]=f;var p=fr(i[s],o);i[s]=p,Xt(i,c,s),l=i.length,"Z"===f&&h.push(s),u=(a=i[s]).length,o.x1=+a[u-2],o.y1=+a[u-1],o.x2=+a[u-4]||o.x1,o.y2=+a[u-3]||o.y1}return t?[i,h]:i}function hr(n){return tr(n)}function sr(n){return n.map((function(n){return Array.isArray(n)?[].concat(n):n}))}function pr(n){var t=n.slice(1).map((function(t,r,e){return r?e[r-1].slice(-2).concat(t.slice(1)):n[0].slice(1).concat(t.slice(1))})).map((function(n){return n.map((function(t,r){return n[n.length-r-2*(1-r%2)]}))})).reverse();return[["M"].concat(t[0].slice(0,2))].concat(t.map((function(n){return["C"].concat(n.slice(2))})))}function vr(n,t){return Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1]))}function mr(n,t,r,e,a){var u=vr([n,t],[r,e]),i={x:0,y:0};if("number"==typeof a)if(a<=0)i={x:n,y:t};else if(a>=u)i={x:r,y:e};else{var o=or([n,t],[r,e],a/u);i={x:o[0],y:o[1]}}return{length:u,point:i,min:{x:Math.min(n,r),y:Math.min(t,e)},max:{x:Math.max(n,r),y:Math.max(t,e)}}}function yr(n,t){var r=n.x,e=n.y,a=t.x,u=t.y,i=r*a+e*u,o=Math.sqrt((Math.pow(r,2)+Math.pow(e,2))*(Math.pow(a,2)+Math.pow(u,2)));return(r*u-e*a<0?-1:1)*Math.acos(i/o)}function xr(n,t,r,e,a,u,i,o,c,f){var l=Math.abs,h=Math.sin,s=Math.cos,p=Math.sqrt,v=Math.PI,m=l(r),y=l(e),x=(a%360+360)%360*(v/180);if(n===o&&t===c)return{x:n,y:t};if(0===m||0===y)return mr(n,t,o,c,f).point;var g=(n-o)/2,d=(t-c)/2,M={x:s(x)*g+h(x)*d,y:-h(x)*g+s(x)*d},b=Math.pow(M.x,2)/Math.pow(m,2)+Math.pow(M.y,2)/Math.pow(y,2);b>1&&(m*=p(b),y*=p(b));var w=(Math.pow(m,2)*Math.pow(y,2)-Math.pow(m,2)*Math.pow(M.y,2)-Math.pow(y,2)*Math.pow(M.x,2))/(Math.pow(m,2)*Math.pow(M.y,2)+Math.pow(y,2)*Math.pow(M.x,2)),A=(u!==i?1:-1)*p(w=w<0?0:w),O=A*(m*M.y/y),C=A*(-y*M.x/m),j=s(x)*O-h(x)*C+(n+o)/2,I=h(x)*O+s(x)*C+(t+c)/2,k={x:(M.x-O)/m,y:(M.y-C)/y},q=yr({x:1,y:0},k),P=yr(k,{x:(-M.x-O)/m,y:(-M.y-C)/y});!i&&P>0?P-=2*v:i&&P<0&&(P+=2*v);var S=q+(P%=2*v)*f,E=m*s(S),N=y*h(S);return{x:s(x)*E-h(x)*N+j,y:h(x)*E+s(x)*N+I}}function gr(n,t,r,e,a,u,i,o,c,f,l){var h,s=l.bbox,p=void 0===s||s,v=l.length,m=void 0===v||v,y=l.sampleSize,x=void 0===y?30:y,g="number"==typeof f,d=n,M=t,b=0,w=[d,M,b],A=[d,M],O={x:0,y:0},C=[{x:d,y:M}];g&&f<=0&&(O={x:d,y:M});for(var j=0;j<=x;j+=1){if(d=(h=xr(n,t,r,e,a,u,i,o,c,j/x)).x,M=h.y,p&&C.push({x:d,y:M}),m&&(b+=vr(A,[d,M])),A=[d,M],g&&b>=f&&f>w[2]){var I=(b-f)/(b-w[2]);O={x:A[0]*(1-I)+w[0]*I,y:A[1]*(1-I)+w[1]*I}}w=[d,M,b]}return g&&f>=b&&(O={x:o,y:c}),{length:b,point:O,min:{x:Math.min.apply(null,C.map((function(n){return n.x}))),y:Math.min.apply(null,C.map((function(n){return n.y})))},max:{x:Math.max.apply(null,C.map((function(n){return n.x}))),y:Math.max.apply(null,C.map((function(n){return n.y})))}}}function dr(n,t,r,e,a,u,i,o,c){var f=1-c;return{x:Math.pow(f,3)*n+3*Math.pow(f,2)*c*r+3*f*Math.pow(c,2)*a+Math.pow(c,3)*i,y:Math.pow(f,3)*t+3*Math.pow(f,2)*c*e+3*f*Math.pow(c,2)*u+Math.pow(c,3)*o}}function Mr(n,t,r,e,a,u,i,o,c,f){var l,h=f.bbox,s=void 0===h||h,p=f.length,v=void 0===p||p,m=f.sampleSize,y=void 0===m?10:m,x="number"==typeof c,g=n,d=t,M=0,b=[g,d,M],w=[g,d],A={x:0,y:0},O=[{x:g,y:d}];x&&c<=0&&(A={x:g,y:d});for(var C=0;C<=y;C+=1){if(g=(l=dr(n,t,r,e,a,u,i,o,C/y)).x,d=l.y,s&&O.push({x:g,y:d}),v&&(M+=vr(w,[g,d])),w=[g,d],x&&M>=c&&c>b[2]){var j=(M-c)/(M-b[2]);A={x:w[0]*(1-j)+b[0]*j,y:w[1]*(1-j)+b[1]*j}}b=[g,d,M]}return x&&c>=M&&(A={x:i,y:o}),{length:M,point:A,min:{x:Math.min.apply(null,O.map((function(n){return n.x}))),y:Math.min.apply(null,O.map((function(n){return n.y})))},max:{x:Math.max.apply(null,O.map((function(n){return n.x}))),y:Math.max.apply(null,O.map((function(n){return n.y})))}}}function br(n,t,r,e,a,u,i){var o=1-i;return{x:Math.pow(o,2)*n+2*o*i*r+Math.pow(i,2)*a,y:Math.pow(o,2)*t+2*o*i*e+Math.pow(i,2)*u}}function wr(n,t,r,e,a,u,i,o){var c,f=o.bbox,l=void 0===f||f,h=o.length,s=void 0===h||h,p=o.sampleSize,v=void 0===p?10:p,m="number"==typeof i,y=n,x=t,g=0,d=[y,x,g],M=[y,x],b={x:0,y:0},w=[{x:y,y:x}];m&&i<=0&&(b={x:y,y:x});for(var A=0;A<=v;A+=1){if(y=(c=br(n,t,r,e,a,u,A/v)).x,x=c.y,l&&w.push({x:y,y:x}),s&&(g+=vr(M,[y,x])),M=[y,x],m&&g>=i&&i>d[2]){var O=(g-i)/(g-d[2]);b={x:M[0]*(1-O)+d[0]*O,y:M[1]*(1-O)+d[1]*O}}d=[y,x,g]}return m&&i>=g&&(b={x:a,y:u}),{length:g,point:b,min:{x:Math.min.apply(null,w.map((function(n){return n.x}))),y:Math.min.apply(null,w.map((function(n){return n.y})))},max:{x:Math.max.apply(null,w.map((function(n){return n.x}))),y:Math.max.apply(null,w.map((function(n){return n.y})))}}}function Ar(n,t,r){for(var e,a,u,i,o,c,f,l,h,s=ar(n),p="number"==typeof t,v=[],m=0,y=0,x=0,g=0,d=[],M=[],b=0,w={x:0,y:0},A=w,O=w,C=w,j=0,I=0,k=s.length;I<k;I+=1)v=(f="M"===(l=(h=s[I])[0]))?v:[m,y].concat(h.slice(1)),f?(A=w={x:x=h[1],y:g=h[2]},b=0,p&&t<.001&&(C=w)):"L"===l?(b=(e=mr(v[0],v[1],v[2],v[3],(t||0)-j)).length,w=e.min,A=e.max,O=e.point):"A"===l?(b=(a=gr(v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],v[8],(t||0)-j,r||{})).length,w=a.min,A=a.max,O=a.point):"C"===l?(b=(u=Mr(v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],(t||0)-j,r||{})).length,w=u.min,A=u.max,O=u.point):"Q"===l?(b=(i=wr(v[0],v[1],v[2],v[3],v[4],v[5],(t||0)-j,r||{})).length,w=i.min,A=i.max,O=i.point):"Z"===l&&(b=(o=mr((v=[m,y,x,g])[0],v[1],v[2],v[3],(t||0)-j)).length,w=o.min,A=o.max,O=o.point),p&&j<t&&j+b>=t&&(C=O),M.push(A),d.push(w),j+=b,m=(c="Z"!==l?h.slice(-2):[x,g])[0],y=c[1];return p&&t>=j&&(C={x:m,y:y}),{length:j,point:C,min:{x:Math.min.apply(null,d.map((function(n){return n.x}))),y:Math.min.apply(null,d.map((function(n){return n.y})))},max:{x:Math.max.apply(null,M.map((function(n){return n.x}))),y:Math.max.apply(null,M.map((function(n){return n.y})))}}}function Or(n,t){if(!n)return{x:0,y:0,width:0,height:0,x2:0,y2:0,cx:0,cy:0,cz:0};var e=Ar(n,void 0,r(r({},t),{length:!1})),a=e.min,u=a.x,i=a.y,o=e.max,c=o.x,f=o.y,l=c-u,h=f-i;return{width:l,height:h,x:u,y:i,x2:c,y2:f,cx:u+l/2,cy:i+h/2,cz:Math.max(l,h)+Math.min(l,h)/2}}function Cr(n,t){return Ar(n,void 0,r(r({},t),{bbox:!1,length:!0})).length}function jr(n,t){if(!n)return{length:0,x:0,y:0,width:0,height:0,x2:0,y2:0,cx:0,cy:0,cz:0};var e=Ar(n,void 0,r(r({},t),{bbox:!0,length:!0})),a=e.length,u=e.min,i=u.x,o=u.y,c=e.max,f=c.x,l=c.y,h=f-i,s=l-o;return{length:a,width:h,height:s,x:i,y:o,x2:f,y2:l,cx:i+h/2,cy:o+s/2,cz:Math.max(h,s)+Math.min(h,s)/2}}function Ir(n,t){var r=n.length-1,e=[],a=0,u=function(n){var t=n.length,r=t-1;return n.map((function(e,a){return n.map((function(e,u){var i,o=a+u;return 0===u||n[o]&&"M"===n[o][0]?(i=n[o],["M"].concat(i.slice(-2))):(o>=t&&(o-=r),n[o])}))}))}(n);return u.forEach((function(u,i){n.slice(1).forEach((function(e,u){a+=vr(n[(i+u)%r].slice(-2),t[u%r].slice(-2))})),e[i]=a,a=0})),u[e.indexOf(Math.min.apply(null,e))]}function kr(n){var t=0,r=0,e=0;return lr(n).map((function(n){var a;if("M"===n[0])return t=n[1],r=n[2],0;var u=n.slice(1),i=u[0],o=u[1],c=u[2],f=u[3],l=u[4],h=u[5];return e=function(n,t,r,e,a,u,i,o){return 3*((o-t)*(r+a)-(i-n)*(e+u)+e*(n-a)-r*(t-u)+o*(a+n/3)-i*(u+t/3))/20}(t,r,i,o,c,f,l,h),a=n.slice(-2),t=a[0],r=a[1],e})).reduce((function(n,t){return n+t}),0)}function qr(n){return kr(n)>=0}function Pr(n,t,e){return Ar(n,t,r(r({},e),{bbox:!1,length:!0})).point}function Sr(n,t){for(var r,e,a,u,i=tr(n),o=ar(i),c=Cr(i),f=function(n){var r=n.x-t.x,e=n.y-t.y;return r*r+e*e},l=8,h=0,s=0,p=1/0,v=0;v<=c;v+=l)(h=f(r=Pr(o,v)))<p&&(e=r,s=v,p=h);l/=2;for(var m=0,y=0,x=0,g=0;l>.5;)x=f(a=Pr(o,m=s-l)),g=f(u=Pr(o,y=s+l)),m>=0&&x<p?(e=a,s=m,p=x):y<=c&&g<p?(e=u,s=y,p=g):l/=2;var d=function(n,t){var r=tr(n);if("string"==typeof r)throw TypeError(r);var e=r.slice(),a=Cr(e),u=e.length-1,i=0,o=0,c=r[0],f=c.slice(-2),l={x:f[0],y:f[1]};if(u<=0||!t||!Number.isFinite(t))return{segment:c,index:0,length:o,point:l,lengthAtSegment:i};if(t>=a)return o=a-(i=Cr(e=r.slice(0,-1))),{segment:r[u],index:u,length:o,lengthAtSegment:i};for(var h=[];u>0;)c=e[u],o=a-(i=Cr(e=e.slice(0,-1))),a=i,h.push({segment:c,index:u,length:o,lengthAtSegment:i}),u-=1;return h.find((function(n){return n.lengthAtSegment<=t}))}(i,s);return{closest:e,distance:Math.sqrt(p),segment:d}}function Er(n,t){var r=Sr(n,t).distance;return Math.abs(r)<.001}function Nr(n){return n.map((function(n,t,r){var e=t&&r[t-1].slice(-2).concat(n.slice(1)),a=t?Mr(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],{bbox:!1}).length:0;return{s:n,ss:t?a?function(n,t){void 0===t&&(t=.5);var r=n.slice(0,2),e=n.slice(2,4),a=n.slice(4,6),u=n.slice(6,8),i=or(r,e,t),o=or(e,a,t),c=or(a,u,t),f=or(i,o,t),l=or(o,c,t),h=or(f,l,t);return[["C"].concat(i,f,h),["C"].concat(l,c,u)]}(e):[n,n]:[n],l:a}}))}function Fr(n,t,r){var e=Nr(n),a=Nr(t),u=e.length,i=a.length,o=e.filter((function(n){return n.l})).length,c=a.filter((function(n){return n.l})).length,f=e.filter((function(n){return n.l})).reduce((function(n,t){return n+t.l}),0)/o||0,l=a.filter((function(n){return n.l})).reduce((function(n,t){return n+t.l}),0)/c||0,h=r||Math.max(u,i),s=[f,l],p=[h-u,h-i],v=0,m=[e,a].map((function(n,t){return n.l===h?n.map((function(n){return n.s})):n.map((function(n,r){return v=r&&p[t]&&n.l>=s[t],p[t]-=v?1:0,v?n.ss:[n.s]})).flat()}));return m[0].length===m[1].length?m:Fr(m[0],m[1],h)}var Tr=1e-6;function zr(n){return Math.abs(n)<Tr?0:n<0?-1:1}function Lr(n,t,r){return(r[0]-n[0])*(t[1]-n[1])==(t[0]-n[0])*(r[1]-n[1])&&Math.min(n[0],t[0])<=r[0]&&r[0]<=Math.max(n[0],t[0])&&Math.min(n[1],t[1])<=r[1]&&r[1]<=Math.max(n[1],t[1])}function Vr(n,t,r){var e=!1,a=n.length;if(a<=2)return!1;for(var u=0;u<a;u++){var i=n[u],o=n[(u+1)%a];if(Lr(i,o,[t,r]))return!0;zr(i[1]-r)>0!=zr(o[1]-r)>0&&zr(t-(r-i[1])*(i[0]-o[0])/(i[1]-o[1])-i[0])<0&&(e=!e)}return e}var _r=function(n,t,r){return n>=t&&n<=r};function Qr(n){for(var t=[],r=n.length,e=0;e<r-1;e++){var a=n[e],u=n[e+1];t.push({from:{x:a[0],y:a[1]},to:{x:u[0],y:u[1]}})}if(t.length>1){var i=n[0],o=n[r-1];t.push({from:{x:o[0],y:o[1]},to:{x:i[0],y:i[1]}})}return t}function Rr(n,t){var r=!1;return n.forEach((function(n){if(function(n,t,r,e){var a=r.x-n.x,u=r.y-n.y,i=t.x-n.x,o=t.y-n.y,c=e.x-r.x,f=e.y-r.y,l=i*f-o*c,h=null;if(l*l>.001*(i*i+o*o)*(c*c+f*f)){var s=(a*f-u*c)/l,p=(a*o-u*i)/l;_r(s,0,1)&&_r(p,0,1)&&(h={x:n.x+s*i,y:n.y+s*o})}return h}(n.from,n.to,t.from,t.to))return r=!0,!1})),r}function Xr(n){var t=n.map((function(n){return n[0]})),r=n.map((function(n){return n[1]}));return{minX:Math.min.apply(null,t),maxX:Math.max.apply(null,t),minY:Math.min.apply(null,r),maxY:Math.max.apply(null,r)}}function Yr(n,t){if(n.length<2||t.length<2)return!1;var r,e,a=Xr(n),u=Xr(t);if(r=a,(e=u).minX>r.maxX||e.maxX<r.minX||e.minY>r.maxY||e.maxY<r.minY)return!1;var i=!1;if(t.forEach((function(t){if(Vr(n,t[0],t[1]))return i=!0,!1})),i)return!0;if(n.forEach((function(n){if(Vr(t,n[0],n[1]))return i=!0,!1})),i)return!0;var o=Qr(n),c=Qr(t),f=!1;return c.forEach((function(n){if(Rr(o,n))return f=!0,!1})),f}function Zr(n){var t=document.createElement("div");t.innerHTML=n;var r=t.childNodes[0];return r&&t.contains(r)&&t.removeChild(r),r}function Dr(n,t){if(n)return Object.keys(t).forEach((function(r){n.style[r]=t[r]})),n}export{Ot as Cache,Vt as angleTo,ir as arcToCubic,Bn as assign,Kn as augment,an as clamp,Hn as clearAnimationFrame,Wn as clone,sr as clonePath,c as contains,Zr as createDOM,$n as debounce,tt as deepMix,l as difference,Lt as direction,vr as distanceSquareRoot,x as each,H as endsWith,Fr as equalizeSegments,U as every,rt as extend,f as filter,w as find,A as findIndex,O as firstValue,un as fixedBase,C as flatten,j as flattenDeep,x as forIn,ht as get,qr as getDrawDirection,kr as getPathArea,Or as getPathBBox,jr as getPathBBoxTotalLength,Pr as getPointAtLength,q as getRange,Ir as getRotatedCurve,Cr as getTotalLength,Nn as getType,J as getWrapBehavior,kt as gradient,G as group,W as groupBy,$ as groupToMap,An as has,An as hasKey,Cn as hasValue,Y as head,bt as identity,c as includes,et as indexOf,Fn as isArguments,m as isArray,o as isArrayLike,Tn as isBoolean,zn as isDate,cn as isDecimal,Zn as isElement,ut as isEmpty,it as isEqual,ot as isEqualWith,Ln as isError,fn as isEven,Vn as isFinite,h as isFunction,ln as isInteger,d as isMatch,hn as isNegative,s as isNil,_n as isNull,on as isNumber,sn as isNumberEqual,y as isObject,M as isObjectLike,pn as isOdd,b as isPlainObject,Vr as isPointInPolygon,Er as isPointInStroke,Yr as isPolygonsIntersect,vn as isPositive,Rn as isPrototype,Xn as isRegExp,V as isString,v as isType,Yn as isUndefined,g as keys,Z as last,In as lowerCase,kn as lowerFirst,ct as map,lt as mapValues,I as max,mn as maxBy,Gn as memoize,k as min,yn as minBy,Bn as mix,xn as mod,Dr as modifyCSS,Mt as noop,ar as normalizePath,rn as number2color,mt as omit,en as parseRadius,rr as path2Absolute,hr as path2Array,lr as path2Curve,Qt as path2String,vt as pick,N as pull,T as pullAt,z as reduce,L as remove,Dn as requestAnimationFrame,pr as reverseCurve,a as rgb2arr,st as set,wt as size,B as some,_ as sortBy,D as startsWith,qn as substitute,yt as throttle,xt as toArray,Et as toCSSGradient,dn as toDegree,Mn as toInteger,jt as toRGB,wn as toRadian,jn as toString,zt as transform,R as union,Q as uniq,dt as uniqueId,Pn as upperCase,Sn as upperFirst,On as values,X as valuesOfKey,_t as vertical,nn as wrapBehavior};export default null;