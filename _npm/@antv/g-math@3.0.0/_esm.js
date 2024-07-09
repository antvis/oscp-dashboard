/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@antv/g-math@3.0.0/dist/index.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{__read as n,__spreadArray as t}from"../../tslib@2.6.3/_esm.js";import{isNumberEqual as r}from"../util@3.3.7/_esm.js";import{vec2 as a}from"../../gl-matrix@3.4.3/_esm.js";function o(n,t,r,a){var o=n-r,u=t-a;return Math.sqrt(o*o+u*u)}function u(r,a){var o=Math.min.apply(Math,t([],n(r),!1)),u=Math.min.apply(Math,t([],n(a),!1));return{x:o,y:u,width:Math.max.apply(Math,t([],n(r),!1))-o,height:Math.max.apply(Math,t([],n(a),!1))-u}}function e(n){return(n+2*Math.PI)%(2*Math.PI)}function i(n,t){var r=Math.abs(n);return t>0?r:-1*r}function h(n,t,r,a,o,u){return r*Math.cos(o)*Math.cos(u)-a*Math.sin(o)*Math.sin(u)+n}function c(n,t,r,a,o,u){return r*Math.sin(o)*Math.cos(u)+a*Math.cos(o)*Math.sin(u)+t}function s(n,t,r){return{x:n*Math.cos(r),y:t*Math.sin(r)}}function f(n,t,r){var a=Math.cos(r),o=Math.sin(r);return[n*a-t*o,n*o+t*a]}function l(n,t,r,a,o,u,e){for(var i=function(n,t,r){return Math.atan(-t/n*Math.tan(r))}(r,a,o),s=1/0,f=-1/0,l=[u,e],v=2*-Math.PI;v<=2*Math.PI;v+=Math.PI){var p=i+v;u<e?u<p&&p<e&&l.push(p):e<p&&p<u&&l.push(p)}for(v=0;v<l.length;v++){var M=h(n,0,r,a,o,l[v]);M<s&&(s=M),M>f&&(f=M)}var y=function(n,t,r){return Math.atan(t/(n*Math.tan(r)))}(r,a,o),g=1/0,x=-1/0,m=[u,e];for(v=2*-Math.PI;v<=2*Math.PI;v+=Math.PI){var P=y+v;u<e?u<P&&P<e&&m.push(P):e<P&&P<u&&m.push(P)}for(v=0;v<m.length;v++){var d=c(0,t,r,a,o,m[v]);d<g&&(g=d),d>x&&(x=d)}return{x:s,y:g,width:f-s,height:x-g}}function v(t,r,a,o,u,e,h,c,l){var v=f(c-t,l-r,-u),p=n(v,2),M=function(n,t,r,a,o,u){var e=r,h=a;if(0===e||0===h)return{x:n,y:t};for(var c=o-n,s=u-t,f=Math.abs(c),l=Math.abs(s),v=e*e,p=h*h,M=Math.PI/4,y=0,g=0,x=0;x<4;x++){y=e*Math.cos(M),g=h*Math.sin(M);var m=(v-p)*Math.pow(Math.cos(M),3)/e,P=(p-v)*Math.pow(Math.sin(M),3)/h,d=y-m,b=g-P,I=f-m,q=l-P,A=Math.hypot(b,d),L=Math.hypot(q,I);M+=A*Math.asin((d*q-b*I)/(A*L))/Math.sqrt(v+p-y*y-g*g),M=Math.min(Math.PI/2,Math.max(0,M))}return{x:n+i(y,c),y:t+i(g,s)}}(0,0,a,o,p[0],p[1]),y=function(n,t,r,a){return(Math.atan2(a*n,r*t)+2*Math.PI)%(2*Math.PI)}(a,o,M.x,M.y);y<e?M=s(a,o,e):y>h&&(M=s(a,o,h));var g=f(M.x,M.y,u);return{x:g[0]+t,y:g[1]+r}}function p(n,t,r,a,o,u,i,h){var c=(i-u)*h+u,s=function(n,t,r,a,o,u,e,i){return-1*r*Math.cos(o)*Math.sin(i)-a*Math.sin(o)*Math.cos(i)}(0,0,r,a,o,0,0,c),f=function(n,t,r,a,o,u,e,i){return-1*r*Math.sin(o)*Math.sin(i)+a*Math.cos(o)*Math.cos(i)}(0,0,r,a,o,0,0,c);return e(Math.atan2(f,s))}var M=1e-4;function y(r,a,u,e,i,h){var c=-1,s=1/0,f=[u,e],l=20;h&&h>200&&(l=h/10);for(var v=1/l,p=v/10,y=0;y<=l;y++){var g=y*v,x=[i.apply(void 0,t([],n(r.concat([g])),!1)),i.apply(void 0,t([],n(a.concat([g])),!1))];(b=o(f[0],f[1],x[0],x[1]))<s&&(c=g,s=b)}if(0===c)return{x:r[0],y:a[0]};if(1===c){var m=r.length;return{x:r[m-1],y:a[m-1]}}s=1/0;for(y=0;y<32&&!(p<M);y++){var P=c-p,d=c+p,b=(x=[i.apply(void 0,t([],n(r.concat([P])),!1)),i.apply(void 0,t([],n(a.concat([P])),!1))],o(f[0],f[1],x[0],x[1]));if(P>=0&&b<s)c=P,s=b;else{var I=[i.apply(void 0,t([],n(r.concat([d])),!1)),i.apply(void 0,t([],n(a.concat([d])),!1))],q=o(f[0],f[1],I[0],I[1]);d<=1&&q<s?(c=d,s=q):p*=.5}}return{x:i.apply(void 0,t([],n(r.concat([c])),!1)),y:i.apply(void 0,t([],n(a.concat([c])),!1))}}function g(n,t,r,a){return u([n,r],[t,a])}function x(n,t,r,a){return o(n,t,r,a)}function m(n,t,r,a,o){return{x:(1-o)*n+o*r,y:(1-o)*t+o*a}}function P(n,t,r,a,u,e){var i=(r-n)*(u-n)+(a-t)*(e-t);return i<0?o(n,t,u,e):i>(r-n)*(r-n)+(a-t)*(a-t)?o(r,a,u,e):d(n,t,r,a,u,e)}function d(n,t,r,o,u,e){var i=[r-n,o-t];if(a.exactEquals(i,[0,0]))return Math.sqrt((u-n)*(u-n)+(e-t)*(e-t));var h=[-i[1],i[0]];a.normalize(h,h);var c=[u-n,e-t];return Math.abs(a.dot(c,h))}function b(n,t,r,a){return Math.atan2(a-t,r-n)}function I(n,t,r,a,o){var u=1-o;return u*u*u*n+3*t*o*u*u+3*r*o*o*u+a*o*o*o}function q(n,t,r,a,o){var u=1-o;return 3*(u*u*(t-n)+2*u*o*(r-t)+o*o*(a-r))}function A(n,t,a,o){var u,e,i,h=-3*n+9*t-9*a+3*o,c=6*n-12*t+6*a,s=3*t-3*n,f=[];if(r(h,0))r(c,0)||(u=-s/c)>=0&&u<=1&&f.push(u);else{var l=c*c-4*h*s;r(l,0)?f.push(-c/(2*h)):l>0&&(e=(-c-(i=Math.sqrt(l)))/(2*h),(u=(-c+i)/(2*h))>=0&&u<=1&&f.push(u),e>=0&&e<=1&&f.push(e))}return f}function L(r,a,u,e,i,h,c,s,f){if(0===f)return function(n,t){for(var r=0,a=n.length,u=0;u<a;u++)r+=o(n[u],t[u],n[(u+1)%a],t[(u+1)%a]);return r/2}([r,u,i,c],[a,e,h,s]);var l=function(n,t,r,a,o,u,e,i,h){var c=I(n,r,o,e,h),s=I(t,a,u,i,h),f=m(n,t,r,a,h),l=m(r,a,o,u,h),v=m(o,u,e,i,h),p=m(f.x,f.y,l.x,l.y,h),M=m(l.x,l.y,v.x,v.y,h);return[[n,t,f.x,f.y,p.x,p.y,c,s],[c,s,M.x,M.y,v.x,v.y,e,i]]}(r,a,u,e,i,h,c,s,.5),v=t(t([],n(l[0]),!1),[f-1],!1),p=t(t([],n(l[1]),!1),[f-1],!1);return L.apply(void 0,t([],n(v),!1))+L.apply(void 0,t([],n(p),!1))}function B(n,t,r,a,o,e,i,h){for(var c=[n,i],s=[t,h],f=A(n,r,o,i),l=A(t,a,e,h),v=0;v<f.length;v++)c.push(I(n,r,o,i,f[v]));for(v=0;v<l.length;v++)s.push(I(t,a,e,h,l[v]));return u(c,s)}function T(n,t,r,a,o,u,e,i){return L(n,t,r,a,o,u,e,i,3)}function D(n,t,r,a,o,u,e,i,h,c,s){return y([n,r,o,e],[t,a,u,i],h,c,I,s)}function w(n,t,r,a,u,e,i,h,c,s,f){var l=D(n,t,r,a,u,e,i,h,c,s,f);return o(l.x,l.y,c,s)}function N(n,t,r,a,o,u,e,i,h){return{x:I(n,r,o,e,h),y:I(t,a,u,i,h)}}function k(n,t,r,a,o,u,i,h,c){var s=q(n,r,o,i,c),f=q(t,a,u,h,c);return e(Math.atan2(f,s))}function z(n){for(var t=0,r=[],a=0;a<n.length-1;a++){var u=n[a],e=n[a+1],i=o(u[0],u[1],e[0],e[1]),h={from:u,to:e,length:i};r.push(h),t+=i}return{segments:r,totalLength:t}}function E(n){if(n.length<2)return 0;for(var t=0,r=0;r<n.length-1;r++){var a=n[r],u=n[r+1];t+=o(a[0],a[1],u[0],u[1])}return t}function j(n,t){if(t>1||t<0||n.length<2)return null;var r=z(n),a=r.segments,o=r.totalLength;if(0===o)return{x:n[0][0],y:n[0][1]};for(var u=0,e=null,i=0;i<a.length;i++){var h=a[i],c=h.from,s=h.to,f=h.length/o;if(t>=u&&t<=u+f){var l=(t-u)/f;e=m(c[0],c[1],s[0],s[1],l);break}u+=f}return e}function C(n,t){if(t>1||t<0||n.length<2)return 0;for(var r=z(n),a=r.segments,o=r.totalLength,u=0,e=0,i=0;i<a.length;i++){var h=a[i],c=h.from,s=h.to,f=h.length/o;if(t>=u&&t<=u+f){e=Math.atan2(s[1]-c[1],s[0]-c[0]);break}u+=f}return e}function F(n,t,r){for(var a=1/0,o=0;o<n.length-1;o++){var u=n[o],e=n[o+1],i=P(u[0],u[1],e[0],e[1],t,r);i<a&&(a=i)}return a}function G(n){for(var t=[],r=[],a=0;a<n.length;a++){var o=n[a];t.push(o[0]),r.push(o[1])}return u(t,r)}function H(n){return E(n)}function J(n,t){return j(n,t)}function K(n,t,r){return F(n,t,r)}function O(n,t){return C(n,t)}function Q(n){var t=n.slice(0);return n.length&&t.push(n[0]),t}function R(n){return G(n)}function S(n){return E(Q(n))}function U(n,t){return j(Q(n),t)}function V(n,t,r){return F(Q(n),t,r)}function W(n,t){return C(Q(n),t)}function X(n,t,r,a){var o=1-a;return o*o*n+2*a*o*t+a*a*r}function Y(n,t,a){var o=n+a-2*t;if(r(o,0))return[.5];var u=(n-t)/o;return u<=1&&u>=0?[u]:[]}function Z(r,a,u,e,i,h,c){if(0===c)return(o(r,a,u,e)+o(u,e,i,h)+o(r,a,i,h))/2;var s=function(n,t,r,a,o,u,e){var i=X(n,r,o,e),h=X(t,a,u,e),c=m(n,t,r,a,e),s=m(r,a,o,u,e);return[[n,t,c.x,c.y,i,h],[i,h,s.x,s.y,o,u]]}(r,a,u,e,i,h,.5),f=s[0],l=s[1];return f.push(c-1),l.push(c-1),Z.apply(void 0,t([],n(f),!1))+Z.apply(void 0,t([],n(l),!1))}function $(n,t,r,a,o,e){var i=Y(n,r,o)[0],h=Y(t,a,e)[0],c=[n,o],s=[t,e];return void 0!==i&&c.push(X(n,r,o,i)),void 0!==h&&s.push(X(t,a,e,h)),u(c,s)}function _(n,t,r,a,o,u){return Z(n,t,r,a,o,u,3)}function nn(n,t,r,a,o,u,e,i){return y([n,r,o],[t,a,u],e,i,X)}function tn(n,t,r,a,u,e,i,h){var c=nn(n,t,r,a,u,e,i,h);return o(c.x,c.y,i,h)}export{l as arcBox,v as arcNearestPoint,p as arcTangentAngle,B as cubicBox,T as cubicLength,D as cubicNearestPoint,N as cubicPointAt,w as cubicPointDistance,k as cubicTangentAngle,o as distance,g as lineBox,x as lineLength,m as linePointAt,P as linePointDistance,d as linePointToLine,b as lineTangentAngle,R as polygonBox,S as polygonLength,U as polygonPointAt,V as polygonPointDistance,W as polygonTangentAngle,G as polylineBox,H as polylineLength,J as polylinePointAt,K as polylinePointDistance,O as polylineTangentAngle,$ as quadBox,_ as quadLength,nn as quadNearestPoint,tn as quadPointDistance};export default null;
