/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/fmin@0.0.2/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function r(r,e,i,f){var x=(f=f||{}).maxIterations||100,t=f.tolerance||1e-10,n=r(e),a=r(i),s=i-e;if(n*a>0)throw"Initial bisect points must have opposite signs";if(0===n)return e;if(0===a)return i;for(var o=0;o<x;++o){var l=e+(s/=2),c=r(l);if(c*n>=0&&(e=l),Math.abs(s)<t||0===c)return l}return e+s}function e(r){for(var e=new Array(r),i=0;i<r;++i)e[i]=0;return e}function i(r,i){return e(r).map((function(){return e(i)}))}function f(r,e){for(var i=0,f=0;f<r.length;++f)i+=r[f]*e[f];return i}function x(r){return Math.sqrt(f(r,r))}function t(r,e,i){for(var f=0;f<e.length;++f)r[f]=e[f]*i}function n(r,e,i,f,x){for(var t=0;t<r.length;++t)r[t]=e*i[t]+f*x[t]}function a(r,e,i){var f,x=(i=i||{}).maxIterations||200*e.length,t=i.nonZeroDelta||1.05,a=i.zeroDelta||.001,s=i.minErrorDelta||1e-6,o=i.minErrorDelta||1e-5,l=void 0!==i.rho?i.rho:1,c=void 0!==i.chi?i.chi:2,p=void 0!==i.psi?i.psi:-.5,u=void 0!==i.sigma?i.sigma:.5,m=e.length,h=new Array(m+1);h[0]=e,h[0].fx=r(e),h[0].id=0;for(var v=0;v<m;++v){var g=e.slice();g[v]=g[v]?g[v]*t:a,h[v+1]=g,h[v+1].fx=r(g),h[v+1].id=v+1}function y(r){for(var e=0;e<r.length;e++)h[m][e]=r[e];h[m].fx=r.fx}for(var d=function(r,e){return r.fx-e.fx},b=e.slice(),M=e.slice(),I=e.slice(),D=e.slice(),k=0;k<x;++k){if(h.sort(d),i.history){var w=h.map((function(r){var e=r.slice();return e.fx=r.fx,e.id=r.id,e}));w.sort((function(r,e){return r.id-e.id})),i.history.push({x:h[0].slice(),fx:h[0].fx,simplex:w})}for(f=0,v=0;v<m;++v)f=Math.max(f,Math.abs(h[0][v]-h[1][v]));if(Math.abs(h[0].fx-h[m].fx)<s&&f<o)break;for(v=0;v<m;++v){b[v]=0;for(var R=0;R<m;++R)b[v]+=h[R][v];b[v]/=m}var A=h[m];if(n(M,1+l,b,-l,A),M.fx=r(M),M.fx<h[0].fx)n(D,1+c,b,-c,A),D.fx=r(D),D.fx<M.fx?y(D):y(M);else if(M.fx>=h[m-1].fx){var E=!1;if(M.fx>A.fx?(n(I,1+p,b,-p,A),I.fx=r(I),I.fx<A.fx?y(I):E=!0):(n(I,1-p*l,b,p*l,A),I.fx=r(I),I.fx<M.fx?y(I):E=!0),E){if(u>=1)break;for(v=1;v<h.length;++v)n(h[v],1-u,h[0],u,h[v]),h[v].fx=r(h[v])}}else y(M)}return h.sort(d),{fx:h[0].fx,x:h[0]}}function s(r,e,i,x,t,a,s){var o=i.fx,l=f(i.fxprime,e),c=o,p=o,u=l,m=0;function h(p,m,h){for(var v=0;v<16;++v)if(t=(p+m)/2,n(x.x,1,i.x,t,e),c=x.fx=r(x.x,x.fxprime),u=f(x.fxprime,e),c>o+a*t*l||c>=h)m=t;else{if(Math.abs(u)<=-s*l)return t;u*(m-p)>=0&&(m=p),p=t,h=c}return 0}t=t||1,a=a||1e-6,s=s||.1;for(var v=0;v<10;++v){if(n(x.x,1,i.x,t,e),c=x.fx=r(x.x,x.fxprime),u=f(x.fxprime,e),c>o+a*t*l||v&&c>=p)return h(m,t,p);if(Math.abs(u)<=-s*l)return t;if(u>=0)return h(t,m,c);p=c,m=t,t*=2}return t}function o(r,e,i){var a,o,l,c={x:e.slice(),fx:0,fxprime:e.slice()},p={x:e.slice(),fx:0,fxprime:e.slice()},u=e.slice(),m=1;l=(i=i||{}).maxIterations||20*e.length,c.fx=r(c.x,c.fxprime),t(a=c.fxprime.slice(),c.fxprime,-1);for(var h=0;h<l;++h){if(m=s(r,a,c,p,m),i.history&&i.history.push({x:c.x.slice(),fx:c.fx,fxprime:c.fxprime.slice(),alpha:m}),m){n(u,1,p.fxprime,-1,c.fxprime);var v=f(c.fxprime,c.fxprime);n(a,Math.max(0,f(u,p.fxprime)/v),a,-1,p.fxprime),o=c,c=p,p=o}else t(a,c.fxprime,-1);if(x(c.fxprime)<=1e-5)break}return i.history&&i.history.push({x:c.x.slice(),fx:c.fx,fxprime:c.fxprime.slice(),alpha:m}),c}function l(r,e,i){for(var f=(i=i||{}).maxIterations||100*e.length,t=i.learnRate||.001,a={x:e.slice(),fx:0,fxprime:e.slice()},s=0;s<f&&(a.fx=r(a.x,a.fxprime),i.history&&i.history.push({x:a.x.slice(),fx:a.fx,fxprime:a.fxprime.slice()}),n(a.x,1,a.x,-t,a.fxprime),!(x(a.fxprime)<=1e-5));++s);return a}function c(r,e,i){i=i||{};var f,n={x:e.slice(),fx:0,fxprime:e.slice()},a={x:e.slice(),fx:0,fxprime:e.slice()},o=i.maxIterations||100*e.length,l=i.learnRate||1,c=e.slice(),p=i.c1||.001,u=i.c2||.1,m=[];if(i.history){var h=r;r=function(r,e){return m.push(r.slice()),h(r,e)}}n.fx=r(n.x,n.fxprime);for(var v=0;v<o&&(t(c,n.fxprime,-1),l=s(r,c,n,a,l,p,u),i.history&&(i.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),functionCalls:m,learnRate:l,alpha:l}),m=[]),f=n,n=a,a=f,!(0===l||x(n.fxprime)<1e-5));++v);return n}export{r as bisect,o as conjugateGradient,l as gradientDescent,c as gradientDescentLineSearch,a as nelderMead,x as norm2,t as scale,n as weightedSum,e as zeros,i as zerosM};export default null;
