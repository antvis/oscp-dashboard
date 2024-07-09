/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/svg-path-parser@1.1.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function r(n,t,e,u){this.message=n,this.expected=t,this.found=e,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}!function(r,n){function t(){this.constructor=r}t.prototype=n.prototype,r.prototype=new t}(r,Error),r.buildMessage=function(r,n){var t={literal:function(r){return'"'+u(r.text)+'"'},class:function(r){var n,t="";for(n=0;n<r.parts.length;n++)t+=r.parts[n]instanceof Array?o(r.parts[n][0])+"-"+o(r.parts[n][1]):o(r.parts[n]);return"["+(r.inverted?"^":"")+t+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};function e(r){return r.charCodeAt(0).toString(16).toUpperCase()}function u(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+e(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+e(r)}))}function o(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+e(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+e(r)}))}return"Expected "+function(r){var n,e,u,o=new Array(r.length);for(n=0;n<r.length;n++)o[n]=(u=r[n],t[u.type](u));if(o.sort(),o.length>0){for(n=1,e=1;n<o.length;n++)o[n-1]!==o[n]&&(o[e]=o[n],e++);o.length=e}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(r)+" but "+function(r){return r?'"'+u(r)+'"':"end of input"}(n)+" found."};var n=function(n,t){t=void 0!==t?t:{};var e,u={},o={svg_path:vr},c=vr,a=function(r){if(!r)return[];for(var n=[],t=0;t<r.length;t++)n=n.concat.apply(n,r[t]);var e=n[0];return e&&"m"==e.code&&(delete e.relative,e.code="M"),n},i=function(r,n){return function(r,n){if(!n)return[r];for(var t=[r],e=0,u=n.length;e<u;e++)t[e+1]=n[e][1];return t}(r,n)},l=/^[Mm]/,f=fr(["M","m"],!1,!1),s=function(r,n,t){var e=Qr(r,[n]);return t&&(e=e.concat(Qr("M"==r?"L":"l",t[1]))),e},h=/^[Zz]/,p=fr(["Z","z"],!1,!1),v=function(){return Qr("Z")},x=/^[Ll]/,y=fr(["L","l"],!1,!1),A=function(r,n){return Qr(r,n)},g=/^[Hh]/,d=fr(["H","h"],!1,!1),m=function(r,n){return Qr(r,n.map((function(r){return{x:r}})))},C=/^[Vv]/,w=fr(["V","v"],!1,!1),E=function(r,n){return Qr(r,n.map((function(r){return{y:r}})))},F=/^[Cc]/,S=fr(["C","c"],!1,!1),M=function(r,n,t){return{x1:r.x,y1:r.y,x2:n.x,y2:n.y,x:t.x,y:t.y}},q=/^[Ss]/,R=fr(["S","s"],!1,!1),b=function(r,n){return{x2:r.x,y2:r.y,x:n.x,y:n.y}},j=/^[Qq]/,z=fr(["Q","q"],!1,!1),L=function(r,n){return{x1:r.x,y1:r.y,x:n.x,y:n.y}},T=/^[Tt]/,k=fr(["T","t"],!1,!1),U=/^[Aa]/,V=fr(["A","a"],!1,!1),Z=function(r,n,t,e,u,o){return{rx:r,ry:n,xAxisRotation:t,largeArc:e,sweep:u,x:o.x,y:o.y}},H=function(r,n){return{x:r,y:n}},Q=function(r){return 1*r},G=function(r){return 1*r.join("")},_=/^[01]/,B=fr(["0","1"],!1,!1),D=function(r){return"1"==r},I=function(){return""},J=",",K=lr(",",!1),N=function(r){return r.join("")},O=".",P=lr(".",!1),W=/^[eE]/,X=fr(["e","E"],!1,!1),Y=/^[+\-]/,$=fr(["+","-"],!1,!1),rr=/^[0-9]/,nr=fr([["0","9"]],!1,!1),tr=function(r){return r.join("")},er=/^[ \t\n\r]/,ur=fr([" ","\t","\n","\r"],!1,!1),or=0,cr=[{line:1,column:1}],ar=0,ir=[];if("startRule"in t){if(!(t.startRule in o))throw new Error("Can't start parsing from rule \""+t.startRule+'".');c=o[t.startRule]}function lr(r,n){return{type:"literal",text:r,ignoreCase:n}}function fr(r,n,t){return{type:"class",parts:r,inverted:n,ignoreCase:t}}function sr(r){var t,e=cr[r];if(e)return e;for(t=r-1;!cr[t];)t--;for(e={line:(e=cr[t]).line,column:e.column};t<r;)10===n.charCodeAt(t)?(e.line++,e.column=1):e.column++,t++;return cr[r]=e,e}function hr(r,n){var t=sr(r),e=sr(n);return{start:{offset:r,line:t.line,column:t.column},end:{offset:n,line:e.line,column:e.column}}}function pr(r){or<ar||(or>ar&&(ar=or,ir=[]),ir.push(r))}function vr(){var r,n,t,e,o;for(r=or,n=[],t=Tr();t!==u;)n.push(t),t=Tr();if(n!==u)if(t=function(){var r,n,t,e,o,c;if(r=or,n=xr(),n!==u){for(t=[],e=or,o=[],c=Tr();c!==u;)o.push(c),c=Tr();for(o!==u&&(c=xr())!==u?e=o=[o,c]:(or=e,e=u);e!==u;){for(t.push(e),e=or,o=[],c=Tr();c!==u;)o.push(c),c=Tr();o!==u&&(c=xr())!==u?e=o=[o,c]:(or=e,e=u)}t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}(),t===u&&(t=null),t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?r=n=a(t):(or=r,r=u)}else or=r,r=u;else or=r,r=u;return r}function xr(){var r,t,e,o,c,a;if(r=or,t=function(){var r,t,e,o,c,a,i;r=or,l.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(f));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u&&(o=Er())!==u?(c=or,(a=qr())===u&&(a=null),a!==u&&(i=Ar())!==u?c=a=[a,i]:(or=c,c=u),c===u&&(c=null),c!==u?r=t=s(t,o,c):(or=r,r=u)):(or=r,r=u)}else or=r,r=u;return r}(),t!==u){for(e=[],o=or,c=[],a=Tr();a!==u;)c.push(a),a=Tr();for(c!==u&&(a=yr())!==u?o=c=[c,a]:(or=o,o=u);o!==u;){for(e.push(o),o=or,c=[],a=Tr();a!==u;)c.push(a),a=Tr();c!==u&&(a=yr())!==u?o=c=[c,a]:(or=o,o=u)}e!==u?r=t=i(t,e):(or=r,r=u)}else or=r,r=u;return r}function yr(){var r;return(r=function(){var r,t;r=or,h.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(p));t!==u&&(t=v());return r=t,r}())===u&&(r=function(){var r,t,e,o;r=or,x.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(y));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u&&(o=Ar())!==u?r=t=A(t,o):(or=r,r=u)}else or=r,r=u;return r}())===u&&(r=function(){var r,t,e,o;r=or,g.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(d));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u&&(o=gr())!==u?r=t=m(t,o):(or=r,r=u)}else or=r,r=u;return r}())===u&&(r=function(){var r,t,e,o;r=or,C.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(w));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u&&(o=gr())!==u?r=t=E(t,o):(or=r,r=u)}else or=r,r=u;return r}())===u&&(r=function(){var r,t,e,o;r=or,F.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(S));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?(o=function(){var r,n,t,e,o,c;if(r=or,n=dr(),n!==u){for(t=[],e=or,(o=qr())===u&&(o=null),o!==u&&(c=dr())!==u?e=o=[o,c]:(or=e,e=u);e!==u;)t.push(e),e=or,(o=qr())===u&&(o=null),o!==u&&(c=dr())!==u?e=o=[o,c]:(or=e,e=u);t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}(),o!==u?r=t=A(t,o):(or=r,r=u)):(or=r,r=u)}else or=r,r=u;return r}())===u&&(r=function(){var r,t,e,o;r=or,q.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(R));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?(o=function(){var r,n,t,e,o,c;if(r=or,n=mr(),n!==u){for(t=[],e=or,(o=qr())===u&&(o=null),o!==u&&(c=mr())!==u?e=o=[o,c]:(or=e,e=u);e!==u;)t.push(e),e=or,(o=qr())===u&&(o=null),o!==u&&(c=mr())!==u?e=o=[o,c]:(or=e,e=u);t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}(),o!==u?r=t=A(t,o):(or=r,r=u)):(or=r,r=u)}else or=r,r=u;return r}())===u&&(r=function(){var r,t,e,o;r=or,j.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(z));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?(o=function(){var r,n,t,e,o,c;if(r=or,n=Cr(),n!==u){for(t=[],e=or,(o=qr())===u&&(o=null),o!==u&&(c=Cr())!==u?e=o=[o,c]:(or=e,e=u);e!==u;)t.push(e),e=or,(o=qr())===u&&(o=null),o!==u&&(c=Cr())!==u?e=o=[o,c]:(or=e,e=u);t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}(),o!==u?r=t=A(t,o):(or=r,r=u)):(or=r,r=u)}else or=r,r=u;return r}())===u&&(r=function(){var r,t,e,o;r=or,T.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(k));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?(o=function(){var r,n,t,e,o,c;if(r=or,n=Er(),n!==u){for(t=[],e=or,(o=qr())===u&&(o=null),o!==u&&(c=Er())!==u?e=o=[o,c]:(or=e,e=u);e!==u;)t.push(e),e=or,(o=qr())===u&&(o=null),o!==u&&(c=Er())!==u?e=o=[o,c]:(or=e,e=u);t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}(),o!==u?r=t=A(t,o):(or=r,r=u)):(or=r,r=u)}else or=r,r=u;return r}())===u&&(r=function(){var r,t,e,o;r=or,U.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(V));if(t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?(o=function(){var r,n,t,e,o,c;if(r=or,n=wr(),n!==u){for(t=[],e=or,(o=qr())===u&&(o=null),o!==u&&(c=wr())!==u?e=o=[o,c]:(or=e,e=u);e!==u;)t.push(e),e=or,(o=qr())===u&&(o=null),o!==u&&(c=wr())!==u?e=o=[o,c]:(or=e,e=u);t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}(),o!==u?r=t=A(t,o):(or=r,r=u)):(or=r,r=u)}else or=r,r=u;return r}()),r}function Ar(){var r,n,t,e,o,c;if(r=or,(n=Er())!==u){for(t=[],e=or,(o=qr())===u&&(o=null),o!==u&&(c=Er())!==u?e=o=[o,c]:(or=e,e=u);e!==u;)t.push(e),e=or,(o=qr())===u&&(o=null),o!==u&&(c=Er())!==u?e=o=[o,c]:(or=e,e=u);t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}function gr(){var r,n,t,e,o,c;if(r=or,(n=Sr())!==u){for(t=[],e=or,(o=qr())===u&&(o=null),o!==u&&(c=Sr())!==u?e=o=[o,c]:(or=e,e=u);e!==u;)t.push(e),e=or,(o=qr())===u&&(o=null),o!==u&&(c=Sr())!==u?e=o=[o,c]:(or=e,e=u);t!==u?r=n=i(n,t):(or=r,r=u)}else or=r,r=u;return r}function dr(){var r,n,t,e,o,c;return r=or,(n=Er())!==u?((t=qr())===u&&(t=null),t!==u&&(e=Er())!==u?((o=qr())===u&&(o=null),o!==u&&(c=Er())!==u?r=n=M(n,e,c):(or=r,r=u)):(or=r,r=u)):(or=r,r=u),r}function mr(){var r,n,t,e;return r=or,(n=Er())!==u?((t=qr())===u&&(t=null),t!==u&&(e=Er())!==u?r=n=b(n,e):(or=r,r=u)):(or=r,r=u),r}function Cr(){var r,n,t,e;return r=or,(n=Er())!==u?((t=qr())===u&&(t=null),t!==u&&(e=Er())!==u?r=n=L(n,e):(or=r,r=u)):(or=r,r=u),r}function wr(){var r,n,t,e,o,c,a,i,l,f,s;return r=or,(n=Fr())!==u?((t=qr())===u&&(t=null),t!==u&&(e=Fr())!==u?((o=qr())===u&&(o=null),o!==u&&(c=Sr())!==u&&qr()!==u&&(a=Mr())!==u?((i=qr())===u&&(i=null),i!==u&&(l=Mr())!==u?((f=qr())===u&&(f=null),f!==u&&(s=Er())!==u?r=n=Z(n,e,c,a,l,s):(or=r,r=u)):(or=r,r=u)):(or=r,r=u)):(or=r,r=u)):(or=r,r=u),r}function Er(){var r,n,t,e;return r=or,(n=Sr())!==u?((t=qr())===u&&(t=null),t!==u&&(e=Sr())!==u?r=n=H(n,e):(or=r,r=u)):(or=r,r=u),r}function Fr(){var r;return or,(r=br())===u&&(r=Lr()),r!==u&&(r=Q(r)),r}function Sr(){var r,n,t;return or,r=or,(n=zr())===u&&(n=null),n!==u&&(t=br())!==u?r=n=[n,t]:(or=r,r=u),r===u&&(r=or,(n=zr())===u&&(n=null),n!==u&&(t=Lr())!==u?r=n=[n,t]:(or=r,r=u)),r!==u&&(r=G(r)),r}function Mr(){var r;return or,_.test(n.charAt(or))?(r=n.charAt(or),or++):(r=u,pr(B)),r!==u&&(r=D(r)),r}function qr(){var r,n,t,e,o;if(r=or,n=[],(t=Tr())!==u)for(;t!==u;)n.push(t),t=Tr();else n=u;if(n!==u)if((t=Rr())===u&&(t=null),t!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?r=n=[n,t,e]:(or=r,r=u)}else or=r,r=u;else or=r,r=u;if(r===u){if(r=or,n=or,(t=Rr())!==u){for(e=[],o=Tr();o!==u;)e.push(o),o=Tr();e!==u?n=t=[t,e]:(or=n,n=u)}else or=n,n=u;n!==u&&(n=I()),r=n}return r}function Rr(){var r;return 44===n.charCodeAt(or)?(r=J,or++):(r=u,pr(K)),r}function br(){var r,t,e;return or,r=or,t=function(){var r,t,e,o,c;r=or,t=or,e=Lr(),e===u&&(e=null);e!==u?(46===n.charCodeAt(or)?(o=O,or++):(o=u,pr(P)),o!==u&&(c=Lr())!==u?t=e=[e,o,c]:(or=t,t=u)):(or=t,t=u);t===u&&(t=or,(e=Lr())!==u?(46===n.charCodeAt(or)?(o=O,or++):(o=u,pr(P)),o!==u?t=e=[e,o]:(or=t,t=u)):(or=t,t=u));t!==u&&(t=N(t));return r=t,r}(),t!==u?((e=jr())===u&&(e=null),e!==u?r=t=[t,e]:(or=r,r=u)):(or=r,r=u),r===u&&(r=or,(t=Lr())!==u&&(e=jr())!==u?r=t=[t,e]:(or=r,r=u)),r!==u&&(r=N(r)),r}function jr(){var r,t,e,o;return or,r=or,W.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(X)),t!==u?((e=zr())===u&&(e=null),e!==u&&(o=Lr())!==u?r=t=[t,e,o]:(or=r,r=u)):(or=r,r=u),r!==u&&(r=N(r)),r}function zr(){var r;return Y.test(n.charAt(or))?(r=n.charAt(or),or++):(r=u,pr($)),r}function Lr(){var r,t;if(or,r=[],rr.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(nr)),t!==u)for(;t!==u;)r.push(t),rr.test(n.charAt(or))?(t=n.charAt(or),or++):(t=u,pr(nr));else r=u;return r!==u&&(r=tr(r)),r}function Tr(){var r;return or,er.test(n.charAt(or))?(r=n.charAt(or),or++):(r=u,pr(ur)),r!==u&&(r=I()),r}var kr,Ur,Vr,Zr={m:"moveto",l:"lineto",h:"horizontal lineto",v:"vertical lineto",c:"curveto",s:"smooth curveto",q:"quadratic curveto",t:"smooth quadratic curveto",a:"elliptical arc",z:"closepath"};for(var Hr in Zr)Zr[Hr.toUpperCase()]=Zr[Hr];function Qr(r,n){n||(n=[{}]);for(var t=n.length;t--;){var e={code:r,command:Zr[r]};for(var u in r==r.toLowerCase()&&(e.relative=!0),n[t])e[u]=n[t][u];n[t]=e}return n}if((e=c())!==u&&or===n.length)return e;throw e!==u&&or<n.length&&pr({type:"end"}),kr=ir,Ur=ar<n.length?n.charAt(ar):null,Vr=ar<n.length?hr(ar,ar+1):hr(ar,ar),new r(r.buildMessage(kr,Ur),kr,Ur,Vr)};n.parseSVG=n,n.makeAbsolute=function(r){var n,t={x:0,y:0},e={x:"x0",y:"y0",x1:"x0",y1:"y0",x2:"x0",y2:"y0"};return r.forEach((function(r){for(var u in"moveto"===r.command&&(n=r),r.x0=t.x,r.y0=t.y,e)u in r&&(r[u]+=r.relative?r[e[u]]:0);"x"in r||(r.x=t.x),"y"in r||(r.y=t.y),r.relative=!1,r.code=r.code.toUpperCase(),"closepath"==r.command&&(r.x=n.x,r.y=n.y),t=r})),r};var t=n;export{t as default};
