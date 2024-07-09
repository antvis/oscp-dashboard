/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@antv/g-plugin-image-loader@2.0.5/dist/index.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{__extends as t,__spreadArray as e,__read as n}from"../../tslib@2.6.3/_esm.js";import{AbstractRendererPlugin as r,isBrowser as i,parsedTransformToMat4 as a,parseTransform as o,DisplayObject as c,GradientType as s,computeLinearGradient as g,computeRadialGradient as h,UnitType as u,ElementEvent as d,Shape as m}from"../g-lite@2.0.5/_esm.js";import{isString as f}from"../util@3.3.7/_esm.js";import{mat4 as p}from"../../gl-matrix@3.4.3/_esm.js";var l=function(){function t(t){this.canvasConfig=t,this.imageCache={},this.gradientCache={},this.patternCache={}}return t.prototype.getImageSync=function(t,e){return this.imageCache[t]?e&&e(this.imageCache[t]):this.getOrCreateImage(t).then((function(t){e&&e(t)})),this.imageCache[t]},t.prototype.getOrCreateImage=function(t){var e=this;if(this.imageCache[t])return Promise.resolve(this.imageCache[t]);var n=this.canvasConfig.createImage;return new Promise((function(r,a){var o;n?o=n(t):i&&(o=new window.Image),o&&(o.onload=function(){e.imageCache[t]=o,r(o)},o.onerror=function(t){a(t)},o.crossOrigin="Anonymous",o.src=t)}))},t.prototype.getOrCreatePatternSync=function(t,e,n,r,i,s){var g=this.generatePatternKey(t);if(g&&this.patternCache[g])return this.patternCache[g];var h,u=t.image,d=t.repetition,m=t.transform,l=!1;f(u)?h=this.getImageSync(u,s):n?(h=n,l=!0):h=u;var v=h&&e.createPattern(h,d);if(v){var y=void 0;y=m?a(o(m),new c({})):p.identity(p.create()),l&&p.scale(y,y,[1/r,1/r,1]),v.setTransform({a:y[0],b:y[1],c:y[4],d:y[5],e:y[12]+i[0],f:y[13]+i[1]})}return g&&v&&(this.patternCache[g]=v),v},t.prototype.getOrCreateGradient=function(t,e){var n=this.generateGradientKey(t),r=t.type,i=t.steps,a=t.min,o=t.width,c=t.height,d=t.angle,m=t.cx,f=t.cy,p=t.size;if(this.gradientCache[n])return this.gradientCache[n];var l=null;if(r===s.LinearGradient){var v=g(a,o,c,d),y=v.x1,C=v.y1,w=v.x2,I=v.y2;l=e.createLinearGradient(y,C,w,I)}else if(r===s.RadialGradient){var S=h(a,o,c,m,f,p),x=S.x,E=S.y,P=S.r;l=e.createRadialGradient(x,E,0,x,E,P)}return l&&(i.forEach((function(t){var e=t.offset,n=t.color;e.unit===u.kPercentage&&(null==l||l.addColorStop(e.value/100,n.toString()))})),this.gradientCache[n]=l),this.gradientCache[n]},t.prototype.generateGradientKey=function(t){var e=t.type,n=t.min,r=t.width,i=t.height,a=t.steps,o=t.angle,c=t.cx,s=t.cy,g=t.size;return"gradient-".concat(e,"-").concat((null==o?void 0:o.toString())||0,"-").concat((null==c?void 0:c.toString())||0,"-").concat((null==s?void 0:s.toString())||0,"-").concat((null==g?void 0:g.toString())||0,"-").concat(n[0],"-").concat(n[1],"-").concat(r,"-").concat(i,"-").concat(a.map((function(t){var e=t.offset,n=t.color;return"".concat(e).concat(n)})).join("-"))},t.prototype.generatePatternKey=function(t){var e=t.image,n=t.repetition;return f(e)?"pattern-".concat(e,"-").concat(n):"rect"===e.nodeName?"pattern-".concat(e.entity,"-").concat(n):void 0},t}(),v=function(){function t(){}return t.prototype.apply=function(e){var n=e.renderingService,r=e.renderingContext,i=e.imagePool,a=r.root.ownerDocument.defaultView,o=function(t,e,n){var r=t.parsedStyle,i=r.width,a=r.height;i&&!a?t.setAttribute("height",n/e*i):!i&&a&&t.setAttribute("width",e/n*a)},c=function(t){var e=t.target,r=e.nodeName,a=e.attributes;if(r===m.IMAGE){var c=a.src,s=a.keepAspectRatio;f(c)&&i.getImageSync(c,(function(t){var r=t.width,i=t.height;s&&o(e,r,i),e.renderable.dirty=!0,n.dirtify()}))}},s=function(t){var e=t.target,r=t.attrName,a=t.newValue;e.nodeName===m.IMAGE&&"src"===r&&f(a)&&i.getOrCreateImage(a).then((function(t){var r=t.width,i=t.height;e.attributes.keepAspectRatio&&o(e,r,i),e.renderable.dirty=!0,n.dirtify()}))};n.hooks.init.tap(t.tag,(function(){a.addEventListener(d.MOUNTED,c),a.addEventListener(d.ATTR_MODIFIED,s)})),n.hooks.destroy.tap(t.tag,(function(){a.removeEventListener(d.MOUNTED,c),a.removeEventListener(d.ATTR_MODIFIED,s)}))},t.tag="LoadImage",t}(),y=function(r){function i(){var t=r.apply(this,e([],n(arguments),!1))||this;return t.name="image-loader",t}return t(i,r),i.prototype.init=function(){this.context.imagePool=new l(this.context.config),this.addRenderingPlugin(new v)},i.prototype.destroy=function(){this.removeAllRenderingPlugins()},i}(r);export{l as ImagePool,y as Plugin};export default null;