(function(e,t){"use strict";var n=function(){var t=e.createElement("dummy").style,n="Webkit Moz O ms Khtml".split(" "),r={};return function(e){if(typeof r[e]=="undefined"){var i=e.charAt(0).toUpperCase()+e.substr(1),s=(e+" "+n.join(i+" ")+i).split(" ");r[e]=null;for(var o in s)if(t[s[o]]!==undefined){r[e]=s[o];break}}return r[e]}}(),r=function(e){return[].slice.call(e)},i=function(e,t){var r,i;for(r in t)t.hasOwnProperty(r)&&(i=n(r),i!==null&&(e.style[i]=t[r]));return e},s=function(e,t){return isNaN(e)?t||0:Number(e)},o=function(t){return e.getElementById(t)},u=function(t,n){return n=n||e,n.querySelector(t)},a=function(t,n){return n=n||e,r(n.querySelectorAll(t))},f=function(t,n,r){var i=e.createEvent("CustomEvent");i.initCustomEvent(n,!0,!0,r),t.dispatchEvent(i)},l=function(e){return" translate3d("+e.x+"px,"+e.y+"px,"+e.z+"px) "},c=function(e,t){var n=" rotateX("+e.x+"deg) ",r=" rotateY("+e.y+"deg) ",i=" rotateZ("+e.z+"deg) ";return t?i+r+n:n+r+i},h=function(e){return" scale("+e+") "},p=function(e){return" perspective("+e+"px) "},d=function(){return o(t.location.hash.replace(/^#\/?/,""))},v=function(e){var n=t.innerHeight/e.height,r=t.innerWidth/e.width,i=n>r?r:n;return e.maxScale&&i>e.maxScale&&(i=e.maxScale),e.minScale&&i<e.minScale&&(i=e.minScale),i},m=e.body,g=navigator.userAgent.toLowerCase(),y=n("perspective")!==null&&m.classList&&m.dataset&&g.search(/(iphone)|(ipod)|(android)/)===-1;y?(m.classList.remove("impress-not-supported"),m.classList.add("impress-supported")):m.className+=" impress-not-supported ";var b={},w={width:1024,height:768,maxScale:1,minScale:0,perspective:1e3,transitionDuration:1e3},E=function(){return!1},S=t.impress=function(n){if(!y)return{init:E,"goto":E,prev:E,next:E};n=n||"impress";if(b["impress-root-"+n])return b["impress-root-"+n];var g={},S=null,x=null,T=null,N=null,C=null,k=o(n),L=e.createElement("div"),A=!1,O=null,M=function(e){O!==e&&(f(e,"impress:stepenter"),O=e)},_=function(e){O===e&&(f(e,"impress:stepleave"),O=null)},D=function(e,t){var n=e.dataset,r={translate:{x:s(n.x),y:s(n.y),z:s(n.z)},rotate:{x:s(n.rotateX),y:s(n.rotateY),z:s(n.rotateZ||n.rotate)},scale:s(n.scale,1),el:e};e.id||(e.id="step-"+(t+1)),g["impress-"+e.id]=r,i(e,{position:"absolute",transform:"translate(-50%,-50%)"+l(r.translate)+c(r.rotate)+h(r.scale),transformStyle:"preserve-3d"})},P=function(){if(A)return;var t=u("meta[name='viewport']")||e.createElement("meta");t.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",t.parentNode!==e.head&&(t.name="viewport",e.head.appendChild(t));var o=k.dataset;N={width:s(o.width,w.width),height:s(o.height,w.height),maxScale:s(o.maxScale,w.maxScale),minScale:s(o.minScale,w.minScale),perspective:s(o.perspective,w.perspective),transitionDuration:s(o.transitionDuration,w.transitionDuration)},C=v(N),r(k.childNodes).forEach(function(e){L.appendChild(e)}),k.appendChild(L),e.documentElement.style.height="100%",i(m,{height:"100%",overflow:"hidden"});var l={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};i(k,l),i(k,{top:"50%",left:"50%",transform:p(N.perspective/C)+h(C)}),i(L,l),m.classList.remove("impress-disabled"),m.classList.add("impress-enabled"),T=a(".step",k),T.forEach(D),x={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},A=!0,f(k,"impress:init",{api:b["impress-root-"+n]})},H=function(e){return typeof e=="number"?e=e<0?T[T.length+e]:T[e]:typeof e=="string"&&(e=o(e)),e&&e.id&&g["impress-"+e.id]?e:null},B=null,j=function(e,n){if(!A||!(e=H(e)))return!1;t.scrollTo(0,0);var r=g["impress-"+e.id];S&&(S.classList.remove("active"),m.classList.remove("impress-on-"+S.id)),e.classList.add("active"),m.classList.add("impress-on-"+e.id);var o={rotate:{x:-r.rotate.x,y:-r.rotate.y,z:-r.rotate.z},translate:{x:-r.translate.x,y:-r.translate.y,z:-r.translate.z},scale:1/r.scale},u=o.scale>=x.scale;n=s(n,N.transitionDuration);var a=n/2;e===S&&(C=v(N));var f=o.scale*C;S&&S!==e&&_(S),i(k,{transform:p(N.perspective/f)+h(f),transitionDuration:n+"ms",transitionDelay:(u?a:0)+"ms"}),i(L,{transform:c(o.rotate,!0)+l(o.translate),transitionDuration:n+"ms",transitionDelay:(u?0:a)+"ms"});if(x.scale===o.scale||x.rotate.x===o.rotate.x&&x.rotate.y===o.rotate.y&&x.rotate.z===o.rotate.z&&x.translate.x===o.translate.x&&x.translate.y===o.translate.y&&x.translate.z===o.translate.z)a=0;return x=o,S=e,t.clearTimeout(B),B=t.setTimeout(function(){M(S)},n+a),e},F=function(){var e=T.indexOf(S)-1;return e=e>=0?T[e]:T[T.length-1],j(e)},I=function(){var e=T.indexOf(S)+1;return e=e<T.length?T[e]:T[0],j(e)};return k.addEventListener("impress:init",function(){T.forEach(function(e){e.classList.add("future")}),k.addEventListener("impress:stepenter",function(e){e.target.classList.remove("past"),e.target.classList.remove("future"),e.target.classList.add("present")},!1),k.addEventListener("impress:stepleave",function(e){e.target.classList.remove("present"),e.target.classList.add("past")},!1)},!1),k.addEventListener("impress:init",function(){var e="";k.addEventListener("impress:stepenter",function(n){t.location.hash=e="#/"+n.target.id},!1),t.addEventListener("hashchange",function(){t.location.hash!==e&&j(d())},!1),j(d()||T[0],0)},!1),m.classList.add("impress-disabled"),b["impress-root-"+n]={init:P,"goto":j,next:I,prev:F}};S.supported=y})(document,window),function(e,t){"use strict";var n=function(e,t){var n=null;return function(){var r=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(r,i)},t)}};e.addEventListener("impress:init",function(r){var i=r.detail.api;e.addEventListener("keydown",function(e){(e.keyCode===9||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40)&&e.preventDefault()},!1),e.addEventListener("keyup",function(e){if(e.keyCode===9||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40){switch(e.keyCode){case 33:case 37:case 38:i.prev();break;case 9:case 32:case 34:case 39:case 40:i.next()}e.preventDefault()}},!1),e.addEventListener("click",function(t){var n=t.target;while(n.tagName!=="A"&&n!==e.documentElement)n=n.parentNode;if(n.tagName==="A"){var r=n.getAttribute("href");r&&r[0]==="#"&&(n=e.getElementById(r.slice(1)))}i.goto(n)&&(t.stopImmediatePropagation(),t.preventDefault())},!1),e.addEventListener("click",function(t){var n=t.target;while((!n.classList.contains("step")||!!n.classList.contains("active"))&&n!==e.documentElement)n=n.parentNode;i.goto(n)&&t.preventDefault()},!1),e.addEventListener("touchstart",function(e){if(e.touches.length===1){var n=e.touches[0].clientX,r=t.innerWidth*.3,s=null;n<r?s=i.prev():n>t.innerWidth-r&&(s=i.next()),s&&e.preventDefault()}},!1),t.addEventListener("resize",n(function(){i.goto(e.querySelector(".active"),500)},250),!1)},!1)}(document,window);