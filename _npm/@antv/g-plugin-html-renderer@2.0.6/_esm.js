/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@antv/g-plugin-html-renderer@2.0.6/dist/index.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{__extends as e,__spreadArray as t,__read as r}from"../../tslib@2.6.3/_esm.js";import{AbstractRendererPlugin as a,CanvasEvent as n,ElementEvent as i,RenderReason as o,isCSSRGB as s,isPattern as l,Shape as c}from"../g-lite@2.0.5/_esm.js";import{isNil as d,isNumber as p,isString as y}from"../util@3.3.7/_esm.js";var m=function(){function e(){this.displayObjectHTMLElementMap=new WeakMap}return e.prototype.joinTransformMatrix=function(e){return"matrix(".concat([e[0],e[1],e[4],e[5],e[12],e[13]].join(","),")")},e.prototype.apply=function(t,r){var a=this,s=t.camera,l=t.renderingContext,d=t.renderingService;this.context=t;var p=l.root.ownerDocument.defaultView,y=p.context.eventService.nativeHTMLMap,m=function(e,t){t.style.transform=a.joinTransformMatrix(e.getWorldTransform())},f=function(e){var t=e.target;if(t.nodeName===c.HTML){a.$camera||(a.$camera=a.createCamera(s));var n=a.getOrCreateEl(t);if(a.$camera.appendChild(n),r.enableCSSParsing){var i=t.ownerDocument.documentElement.attributes;Object.keys(i).forEach((function(e){n.style[e]=i[e]}))}Object.keys(t.attributes).forEach((function(e){a.updateAttribute(e,t)})),m(t,n),y.set(n,t)}},v=function(e){var t=e.target;if(t.nodeName===c.HTML&&a.$camera){var r=a.getOrCreateEl(t);r&&(r.remove(),y.delete(r))}},u=function(e){var t=e.target;if(t.nodeName===c.HTML){var r=e.attrName;a.updateAttribute(r,t)}},h=function(e){var t=e.target;if(t.nodeName===c.HTML){var r=a.getOrCreateEl(t);m(t,r)}},g=function(){if(a.$camera){var e=a.context.config,t=e.width,r=e.height;a.$camera.style.width="".concat(t||0,"px"),a.$camera.style.height="".concat(r||0,"px")}};d.hooks.init.tap(e.tag,(function(){p.addEventListener(n.RESIZE,g),p.addEventListener(i.MOUNTED,f),p.addEventListener(i.UNMOUNTED,v),p.addEventListener(i.ATTR_MODIFIED,u),p.addEventListener(i.BOUNDS_CHANGED,h)})),d.hooks.endFrame.tap(e.tag,(function(){a.$camera&&l.renderReasons.has(o.CAMERA_CHANGED)&&(a.$camera.style.transform=a.joinTransformMatrix(s.getOrthoMatrix()))})),d.hooks.destroy.tap(e.tag,(function(){a.$camera&&a.$camera.remove(),p.removeEventListener(n.RESIZE,g),p.removeEventListener(i.MOUNTED,f),p.removeEventListener(i.UNMOUNTED,v),p.removeEventListener(i.ATTR_MODIFIED,u),p.removeEventListener(i.BOUNDS_CHANGED,h)}))},e.prototype.createCamera=function(e){var t=this.context.config,r=t.document,a=t.width,n=t.height,i=this.context.contextService.getDomElement(),o=i.parentNode;if(o){var s="g-canvas-camera",l=o.querySelector("#"+s);if(!l){var c=(r||document).createElement("div");l=c,c.id=s,c.style.position="absolute",c.style.left="".concat(i.offsetLeft||0,"px"),c.style.top="".concat(i.offsetTop||0,"px"),c.style.transformOrigin="left top",c.style.transform=this.joinTransformMatrix(e.getOrthoMatrix()),c.style.overflow="hidden",c.style.pointerEvents="none",c.style.width="".concat(a||0,"px"),c.style.height="".concat(n||0,"px"),o.appendChild(c)}return l}return null},e.prototype.getOrCreateEl=function(e){var t=this.context.config.document,r=this.displayObjectHTMLElementMap.get(e);return r||(r=(t||document).createElement("div"),e.parsedStyle.$el=r,this.displayObjectHTMLElementMap.set(e,r),e.id&&(r.id=e.id),e.name&&r.setAttribute("name",e.name),e.className&&(r.className=e.className),r.style.position="absolute",r.style["will-change"]="transform",r.style.transform=this.joinTransformMatrix(e.getWorldTransform())),r},e.prototype.updateAttribute=function(e,t){var r=this.getOrCreateEl(t);switch(e){case"innerHTML":var a=t.parsedStyle.innerHTML;y(a)?r.innerHTML=a:(r.innerHTML="",r.appendChild(a));break;case"x":r.style.left="".concat(t.parsedStyle.x,"px");break;case"y":r.style.top="".concat(t.parsedStyle.y,"px");break;case"transformOrigin":var n=t.parsedStyle.transformOrigin;r.style["transform-origin"]="".concat(n[0].value," ").concat(n[1].value);break;case"width":if(this.context.enableCSSParsing){var i=t.computedStyleMap().get("width");r.style.width=i.toString()}else{i=t.parsedStyle.width;r.style.width=p(i)?"".concat(i,"px"):i.toString()}break;case"height":if(this.context.enableCSSParsing){var o=t.computedStyleMap().get("height");r.style.height=o.toString()}else{o=t.parsedStyle.height;r.style.height=p(o)?"".concat(o,"px"):o.toString()}break;case"zIndex":var c=t.parsedStyle.zIndex;r.style["z-index"]="".concat(c);break;case"visibility":var m=t.parsedStyle.visibility;r.style.visibility=m;break;case"pointerEvents":var f=t.parsedStyle.pointerEvents,v=void 0===f?"auto":f;r.style.pointerEvents=v;break;case"opacity":var u=t.parsedStyle.opacity;r.style.opacity="".concat(u);break;case"fill":var h=t.parsedStyle.fill,g="";s(h)?g=h.isNone?"transparent":t.getAttribute("fill"):Array.isArray(h)?g=t.getAttribute("fill"):l(h),r.style.background=g;break;case"stroke":var b=t.parsedStyle.stroke,E="";s(b)?E=b.isNone?"transparent":t.getAttribute("stroke"):Array.isArray(b)?E=t.getAttribute("stroke"):l(b),r.style["border-color"]=E,r.style["border-style"]="solid";break;case"lineWidth":var x=t.parsedStyle.lineWidth;r.style["border-width"]="".concat(x||0,"px");break;case"lineDash":r.style["border-style"]="dashed";break;case"filter":var M=t.style.filter;r.style.filter=M;break;default:d(t.style[e])||""===t.style[e]||(r.style[e]=t.style[e])}},e.tag="HTMLRendering",e}(),f=function(a){function n(){var e=a.apply(this,t([],r(arguments),!1))||this;return e.name="html-renderer",e}return e(n,a),n.prototype.init=function(){this.addRenderingPlugin(new m)},n.prototype.destroy=function(){this.removeAllRenderingPlugins()},n}(a);export{f as Plugin};export default null;
