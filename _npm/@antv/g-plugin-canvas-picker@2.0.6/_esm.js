/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@antv/g-plugin-canvas-picker@2.0.6/dist/index.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{__extends as t,__spreadArray as r,__read as n,__assign as e,__awaiter as i,__generator as o,__values as a}from"../../tslib@2.6.3/_esm.js";import{Shape as s,AbstractRendererPlugin as u,isFillOrStrokeAffected as c,getOrCalculatePathTotalLength as v,Point as d,findClosestClipPathTarget as f}from"../g-lite@2.0.5/_esm.js";import{vec3 as h,mat4 as l}from"../../gl-matrix@3.4.3/_esm.js";import{distance as p,linePointToLine as y,cubicPointDistance as m,quadPointDistance as x}from"../g-math@3.0.0/_esm.js";import{clamp as g,arcToCubic as P}from"../util@3.3.7/_esm.js";var M=h.create(),k=h.create(),I=h.create(),C=l.create(),E=function(){function t(){var t=this;this.isHit=function(r,n,e,i){var o=t.context.pointInPathPickerFactory[r.nodeName];if(o){var a=l.invert(C,e),s=h.transformMat4(k,h.set(I,n[0],n[1],0),a);if(o(r,new d(s[0],s[1]),i,t.isPointInPath,t.context,t.runtime))return!0}return!1},this.isPointInPath=function(r,n){var e=t.runtime.offscreenCanvasCreator.getOrCreateContext(t.context.config.offscreenCanvas),i=t.context.pathGeneratorFactory[r.nodeName];return i&&(e.beginPath(),i(e,r.parsedStyle),e.closePath()),e.isPointInPath(n.x,n.y)}}return t.prototype.apply=function(r,n){var e,a=this,s=r.renderingService,u=r.renderingContext;this.context=r,this.runtime=n;var c=null===(e=u.root)||void 0===e?void 0:e.ownerDocument;s.hooks.pick.tapPromise(t.tag,(function(t){return i(a,void 0,void 0,(function(){return o(this,(function(r){return[2,this.pick(c,t)]}))}))})),s.hooks.pickSync.tap(t.tag,(function(t){return a.pick(c,t)}))},t.prototype.pick=function(t,r){var n,e,i=r.topmost,o=r.position,s=o.x,u=o.y,c=h.set(M,s,u,0),v=t.elementsFromBBox(c[0],c[1],c[0],c[1]),d=[];try{for(var l=a(v),p=l.next();!p.done;p=l.next()){var y=p.value,m=y.getWorldTransform();if(this.isHit(y,c,m,!1)){var x=f(y);if(x){var g=x.parsedStyle.clipPath;if(this.isHit(g,c,g.getWorldTransform(),!0)){if(i)return r.picked=[y],r;d.push(y)}}else{if(i)return r.picked=[y],r;d.push(y)}}}}catch(t){n={error:t}}finally{try{p&&!p.done&&(e=l.return)&&e.call(l)}finally{if(n)throw n.error}}return r.picked=d,r},t.tag="CanvasPicker",t}();function L(t,r,e){var i=t.parsedStyle,o=i.cx,a=void 0===o?0:o,s=i.cy,u=void 0===s?0:s,v=i.r,d=i.fill,f=i.stroke,h=i.lineWidth,l=void 0===h?1:h,y=i.increasedLineWidthForHitTesting,m=void 0===y?0:y,x=i.pointerEvents,g=void 0===x?"auto":x,P=(l+m)/2,M=p(a,u,r.x,r.y),k=n(c(g,d,f),2),I=k[0],C=k[1];return I&&C||e?M<=v+P:I?M<=v:!!C&&(M>=v-P&&M<=v+P)}function S(t,r,n,e){return t/(n*n)+r/(e*e)}function W(t,r,e){var i=t.parsedStyle,o=i.cx,a=void 0===o?0:o,s=i.cy,u=void 0===s?0:s,v=i.rx,d=i.ry,f=i.fill,h=i.stroke,l=i.lineWidth,p=void 0===l?1:l,y=i.increasedLineWidthForHitTesting,m=void 0===y?0:y,x=i.pointerEvents,g=void 0===x?"auto":x,P=r.x,M=r.y,k=n(c(g,f,h),2),I=k[0],C=k[1],E=(p+m)/2,L=(P-a)*(P-a),W=(M-u)*(M-u);return I&&C||e?S(L,W,v+E,d+E)<=1:I?S(L,W,v,d)<=1:!!C&&(S(L,W,v-E,d-E)>=1&&S(L,W,v+E,d+E)<=1)}function F(t,r,n,e,i,o){return i>=t&&i<=t+n&&o>=r&&o<=r+e}function T(t,r,n,e,i,o,a,s){var u=(Math.atan2(s-r,a-t)+2*Math.PI)%(2*Math.PI),c={x:t+n*Math.cos(u),y:r+n*Math.sin(u)};return p(c.x,c.y,a,s)<=o/2}function b(t,r,n,e,i,o,a){var s=Math.min(t,n),u=Math.max(t,n),c=Math.min(r,e),v=Math.max(r,e),d=i/2;return o>=s-d&&o<=u+d&&a>=c-d&&a<=v+d&&y(t,r,n,e,o,a)<=i/2}function H(t,r,n,e,i){var o=t.length;if(o<2)return!1;for(var a=0;a<o-1;a++){if(b(t[a][0],t[a][1],t[a+1][0],t[a+1][1],r,n,e))return!0}if(i){var s=t[0],u=t[o-1];if(b(s[0],s[1],u[0],u[1],r,n,e))return!0}return!1}var w=1e-6;function O(t){return Math.abs(t)<w?0:t<0?-1:1}function R(t,r,n){return(n[0]-t[0])*(r[1]-t[1])==(r[0]-t[0])*(n[1]-t[1])&&Math.min(t[0],r[0])<=n[0]&&n[0]<=Math.max(t[0],r[0])&&Math.min(t[1],r[1])<=n[1]&&n[1]<=Math.max(t[1],r[1])}function A(t,r,n){var e=!1,i=t.length;if(i<=2)return!1;for(var o=0;o<i;o++){var a=t[o],s=t[(o+1)%i];if(R(a,s,[r,n]))return!0;O(a[1]-n)>0!=O(s[1]-n)>0&&O(r-(n-a[1])*(a[0]-s[0])/(a[1]-s[1])-a[0])<0&&(e=!e)}return e}function G(t,r,n){for(var e=!1,i=0;i<t.length;i++){if(e=A(t[i],r,n))break}return e}function N(t,r,e){var i=t.parsedStyle,o=i.x1,a=i.y1,s=i.x2,u=i.y2,v=i.lineWidth,d=void 0===v?1:v,f=i.increasedLineWidthForHitTesting,h=void 0===f?0:f,l=i.pointerEvents,p=void 0===l?"auto":l,y=i.fill,m=i.stroke;return!(!n(c(p,y,m),2)[1]&&!e||!d)&&b(o,a,s,u,d+h,r.x,r.y)}function B(t,r,e,i,o,a){var s=t.parsedStyle,u=s.lineWidth,d=void 0===u?1:u,f=s.increasedLineWidthForHitTesting,h=void 0===f?0:f,l=s.stroke,p=s.fill,y=s.d,g=s.pointerEvents,M=void 0===g?"auto":g,k=y.segments,I=y.hasArc,C=y.polylines,E=y.polygons,L=n(c(M,(null==E?void 0:E.length)&&p,l),2),S=L[0],W=L[1],T=v(t),H=!1;return S||e?H=I?i(t,r):G(E,r.x,r.y)||G(C,r.x,r.y):((W||e)&&(H=function(t,r,n,e,i){for(var o=!1,a=r/2,s=0;s<t.length;s++){var u=t[s],c=u.currentPoint,v=u.params,d=u.prePoint,f=u.box;if(!f||F(f.x-a,f.y-a,f.width+r,f.height+r,n,e))switch(u.command){case"L":case"Z":if(o=b(d[0],d[1],c[0],c[1],r,n,e))return!0;break;case"Q":if(o=x(d[0],d[1],v[1],v[2],v[3],v[4],n,e)<=r/2)return!0;break;case"C":if(o=m(d[0],d[1],v[1],v[2],v[3],v[4],v[5],v[6],n,e,i)<=r/2)return!0;break;case"A":u.cubicParams||(u.cubicParams=P(d[0],d[1],v[1],v[2],v[3],v[4],v[5],v[6],v[7],void 0));for(var h=u.cubicParams,l=d,p=0;p<h.length;p+=6){var y=m(l[0],l[1],h[p],h[p+1],h[p+2],h[p+3],h[p+4],h[p+5],n,e,i);if(l=[h[p+4],h[p+5]],o=y<=r/2)return!0}}}return o}(k,d+h,r.x,r.y,T)),H)}function D(t,r,e){var i=t.parsedStyle,o=i.stroke,a=i.fill,s=i.lineWidth,u=void 0===s?1:s,v=i.increasedLineWidthForHitTesting,d=void 0===v?0:v,f=i.points,h=i.pointerEvents,l=n(c(void 0===h?"auto":h,a,o),2),p=l[0],y=!1;return(l[1]||e)&&(y=H(f.points,u+d,r.x,r.y,!0)),y||!p&&!e||(y=A(f.points,r.x,r.y)),y}function Y(t,r,e){var i=t.parsedStyle,o=i.lineWidth,a=void 0===o?1:o,s=i.increasedLineWidthForHitTesting,u=void 0===s?0:s,v=i.points,d=i.pointerEvents,f=void 0===d?"auto":d,h=i.fill,l=i.stroke;return!(!n(c(f,h,l),2)[1]&&!e||!a)&&H(v.points,a+u,r.x,r.y,!1)}function q(t,r,e,i,o){var a=t.parsedStyle,s=a.radius,u=a.fill,v=a.stroke,d=a.lineWidth,f=void 0===d?1:d,h=a.increasedLineWidthForHitTesting,l=void 0===h?0:h,p=a.x,y=void 0===p?0:p,m=a.y,x=void 0===m?0:m,P=a.width,M=a.height,k=a.pointerEvents,I=n(c(void 0===k?"auto":k,u,v),2),C=I[0],E=I[1],L=f+l;if(s&&s.some((function(t){return 0!==t}))){var S=!1;return(E||e)&&(S=function(t,r,e,i,o,a,s,u){var c=n(o,4),v=c[0],d=c[1],f=c[2],h=c[3];return b(t+v,r,t+e-d,r,a,s,u)||b(t+e,r+d,t+e,r+i-f,a,s,u)||b(t+e-f,r+i,t+h,r+i,a,s,u)||b(t,r+i-h,t,r+v,a,s,u)||T(t+e-d,r+d,d,Math.PI,Math.PI,a,s,u)||T(t+e-f,r+i-f,f,0,Math.PI,a,s,u)||T(t+h,r+i-h,h,Math.PI,Math.PI,a,s,u)||T(t+v,r+v,v,Math.PI,Math.PI,a,s,u)}(y,x,P,M,s.map((function(t){return g(t,0,Math.min(Math.abs(P)/2,Math.abs(M)/2))})),L,r.x,r.y)),S||!C&&!e||(S=i(t,r)),S}var W=L/2;return C&&E||e?F(y-W,x-W,P+W,M+W,r.x,r.y):C?F(y,x,P,M,r.x,r.y):!!E&&function(t,r,n,e,i,o,a){var s=i/2;return F(t-s,r-s,n,i,o,a)||F(t+n-s,r-s,i,e,o,a)||F(t+s,r+e-s,n,i,o,a)||F(t-s,r+s,i,e,o,a)}(y,x,P,M,L,r.x,r.y)}function Q(t,r,n,i,o,a){var u=t.parsedStyle,c=u.pointerEvents,v=void 0===c?"auto":c,d=u.x,f=void 0===d?0:d,h=u.y,l=void 0===h?0:h,p=u.width,y=u.height;if("non-transparent-pixel"===v){var m=o.config.offscreenCanvas,x=a.offscreenCanvasCreator.getOrCreateCanvas(m),g=a.offscreenCanvasCreator.getOrCreateContext(m,{willReadFrequently:!0});return x.width=p,x.height=y,o.defaultStyleRendererFactory[s.IMAGE].render(g,e(e({},t.parsedStyle),{x:0,y:0}),t,void 0,void 0,void 0),g.getImageData(r.x-f,r.y-l,1,1).data.every((function(t){return 0!==t}))}return!0}var U=function(e){function i(){var t=e.apply(this,r([],n(arguments),!1))||this;return t.name="canvas-picker",t}return t(i,e),i.prototype.init=function(){var t,r=((t={})[s.CIRCLE]=L,t[s.ELLIPSE]=W,t[s.RECT]=q,t[s.LINE]=N,t[s.POLYLINE]=Y,t[s.POLYGON]=D,t[s.PATH]=B,t[s.TEXT]=function(){return!0},t[s.GROUP]=null,t[s.IMAGE]=Q,t[s.HTML]=null,t[s.MESH]=null,t);this.context.pointInPathPickerFactory=r,this.addRenderingPlugin(new E)},i.prototype.destroy=function(){delete this.context.pointInPathPickerFactory,this.removeAllRenderingPlugins()},i}(u);export{U as Plugin};export default null;
