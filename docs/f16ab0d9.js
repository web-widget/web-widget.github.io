function e(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function t(t){return t instanceof e(t).Element||t instanceof Element}function n(t){return t instanceof e(t).HTMLElement||t instanceof HTMLElement}function r(t){return"undefined"!=typeof ShadowRoot&&(t instanceof e(t).ShadowRoot||t instanceof ShadowRoot)}var o=Math.max,i=Math.min,a=Math.round;function s(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),o=1,i=1;if(n(e)&&t){var s=e.offsetHeight,f=e.offsetWidth;f>0&&(o=a(r.width)/f||1),s>0&&(i=a(r.height)/s||1)}return{width:r.width/o,height:r.height/i,top:r.top/i,right:r.right/o,bottom:r.bottom/i,left:r.left/o,x:r.left/o,y:r.top/i}}function f(t){var n=e(t);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function c(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((t(e)?e.ownerDocument:e.document)||window.document).documentElement}function u(e){return s(p(e)).left+f(e).scrollLeft}function l(t){return e(t).getComputedStyle(t)}function d(e){var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function h(t,r,o){void 0===o&&(o=!1);var i,l,h=n(r),m=n(r)&&function(e){var t=e.getBoundingClientRect(),n=a(t.width)/e.offsetWidth||1,r=a(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(r),v=p(r),g=s(t,m),y={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(h||!h&&!o)&&(("body"!==c(r)||d(v))&&(y=(i=r)!==e(i)&&n(i)?{scrollLeft:(l=i).scrollLeft,scrollTop:l.scrollTop}:f(i)),n(r)?((b=s(r,!0)).x+=r.clientLeft,b.y+=r.clientTop):v&&(b.x=u(v))),{x:g.left+y.scrollLeft-b.x,y:g.top+y.scrollTop-b.y,width:g.width,height:g.height}}function m(e){var t=s(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||(r(e)?e.host:null)||p(e)}function g(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:n(e)&&d(e)?e:g(v(e))}function y(t,n){var r;void 0===n&&(n=[]);var o=g(t),i=o===(null==(r=t.ownerDocument)?void 0:r.body),a=e(o),s=i?[a].concat(a.visualViewport||[],d(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(y(v(s)))}function b(e){return["table","td","th"].indexOf(c(e))>=0}function w(e){return n(e)&&"fixed"!==l(e).position?e.offsetParent:null}function x(t){for(var r=e(t),o=w(t);o&&b(o)&&"static"===l(o).position;)o=w(o);return o&&("html"===c(o)||"body"===c(o)&&"static"===l(o).position)?r:o||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&n(e)&&"fixed"===l(e).position)return null;for(var r=v(e);n(r)&&["html","body"].indexOf(c(r))<0;){var o=l(r);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return r;r=r.parentNode}return null}(t)||r}var O="top",j="bottom",E="right",D="left",A=[O,j,E,D],L=A.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),k=[].concat(A,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),M=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function P(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function W(e){return e.split("-")[0]}function B(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&r(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function H(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function R(n,r){return"viewport"===r?H(function(t){var n=e(t),r=p(t),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,f=o.offsetTop)),{width:i,height:a,x:s+u(t),y:f}}(n)):t(r)?function(e){var t=s(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(r):H(function(e){var t,n=p(e),r=f(e),i=null==(t=e.ownerDocument)?void 0:t.body,a=o(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=o(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),c=-r.scrollLeft+u(e),d=-r.scrollTop;return"rtl"===l(i||n).direction&&(c+=o(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:s,x:c,y:d}}(p(n)))}function S(e,r,a){var s="clippingParents"===r?function(e){var r=y(v(e)),o=["absolute","fixed"].indexOf(l(e).position)>=0,i=o&&n(e)?x(e):e;return t(i)?r.filter((function(e){return t(e)&&B(e,i)&&"body"!==c(e)&&(!o||"static"!==l(e).position)})):[]}(e):[].concat(r),f=[].concat(s,[a]),p=f[0],u=f.reduce((function(t,n){var r=R(e,n);return t.top=o(r.top,t.top),t.right=i(r.right,t.right),t.bottom=i(r.bottom,t.bottom),t.left=o(r.left,t.left),t}),R(e,p));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function T(e){return e.split("-")[1]}function C(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function q(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?W(o):null,a=o?T(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case O:t={x:s,y:n.y-r.height};break;case j:t={x:s,y:n.y+n.height};break;case E:t={x:n.x+n.width,y:f};break;case D:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?C(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case"start":t[c]=t[c]-(n[p]/2-r[p]/2);break;case"end":t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function V(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function N(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function I(e,n){void 0===n&&(n={});var r=n,o=r.placement,i=void 0===o?e.placement:o,a=r.boundary,f=void 0===a?"clippingParents":a,c=r.rootBoundary,u=void 0===c?"viewport":c,l=r.elementContext,d=void 0===l?"popper":l,h=r.altBoundary,m=void 0!==h&&h,v=r.padding,g=void 0===v?0:v,y=V("number"!=typeof g?g:N(g,A)),b="popper"===d?"reference":"popper",w=e.rects.popper,x=e.elements[m?b:d],D=S(t(x)?x:x.contextElement||p(e.elements.popper),f,u),L=s(e.elements.reference),k=q({reference:L,element:w,strategy:"absolute",placement:i}),M=H(Object.assign({},w,k)),P="popper"===d?M:L,W={top:D.top-P.top+y.top,bottom:P.bottom-D.bottom+y.bottom,left:D.left-P.left+y.left,right:P.right-D.right+y.right},B=e.modifiersData.offset;if("popper"===d&&B){var R=B[i];Object.keys(W).forEach((function(e){var t=[E,j].indexOf(e)>=0?1:-1,n=[O,j].indexOf(e)>=0?"y":"x";W[e]+=R[n]*t}))}return W}var F={placement:"bottom",modifiers:[],strategy:"absolute"};function U(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function z(e){void 0===e&&(e={});var n=e,r=n.defaultModifiers,o=void 0===r?[]:r,i=n.defaultOptions,a=void 0===i?F:i;return function(e,n,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,a),modifiersData:{},elements:{reference:e,popper:n},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:t(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(n)};var s,p,d=function(e){var t=P(e);return M.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(U(t,n)){f.rects={reference:h(t,x(n),"fixed"===f.options.strategy),popper:m(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!U(e,n))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var _={passive:!0};var X={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var n=t.state,r=t.instance,o=t.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=e(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,_)})),f&&c.addEventListener("resize",r.update,_),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,_)})),f&&c.removeEventListener("resize",r.update,_)}},data:{}};var Y={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=q({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(t){var n,r=t.popper,o=t.popperRect,i=t.placement,s=t.variation,f=t.offsets,c=t.position,u=t.gpuAcceleration,d=t.adaptive,h=t.roundOffsets,m=t.isFixed,v=!0===h?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:a(t*r)/r||0,y:a(n*r)/r||0}}(f):"function"==typeof h?h(f):f,g=v.x,y=void 0===g?0:g,b=v.y,w=void 0===b?0:b,A=f.hasOwnProperty("x"),L=f.hasOwnProperty("y"),k=D,M=O,P=window;if(d){var W=x(r),B="clientHeight",H="clientWidth";if(W===e(r)&&"static"!==l(W=p(r)).position&&"absolute"===c&&(B="scrollHeight",H="scrollWidth"),W=W,i===O||(i===D||i===E)&&"end"===s)M=j,w-=(m&&P.visualViewport?P.visualViewport.height:W[B])-o.height,w*=u?1:-1;if(i===D||(i===O||i===j)&&"end"===s)k=E,y-=(m&&P.visualViewport?P.visualViewport.width:W[H])-o.width,y*=u?1:-1}var R,S=Object.assign({position:c},d&&G);return u?Object.assign({},S,((R={})[M]=L?"0":"",R[k]=A?"0":"",R.transform=(P.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",R)):Object.assign({},S,((n={})[M]=L?w+"px":"",n[k]=A?y+"px":"",n.transform="",n))}var K={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:W(t.placement),variation:T(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var Q={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];n(i)&&c(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});n(o)&&c(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=k.reduce((function(e,n){return e[n]=function(e,t,n){var r=W(e),o=[D,O].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[D,E].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},$={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return $[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?k:f,p=T(r),u=p?s?L:L.filter((function(e){return T(e)===p})):A,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=I(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[W(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var oe={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,g=W(v),y=f||(g===v||!h?[ee(v)]:function(e){if("auto"===W(e))return[];var t=ee(e);return[ne(e),t,ne(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat("auto"===W(n)?re(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,A=new Map,L=!0,k=b[0],M=0;M<b.length;M++){var P=b[M],B=W(P),H="start"===T(P),R=[O,j].indexOf(B)>=0,S=R?"width":"height",C=I(t,{placement:P,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?H?E:D:H?j:O;w[S]>x[S]&&(q=ee(q));var V=ee(q),N=[];if(i&&N.push(C[B]<=0),s&&N.push(C[q]<=0,C[V]<=0),N.every((function(e){return e}))){k=P,L=!1;break}A.set(P,N)}if(L)for(var F=function(e){var t=b.find((function(t){var n=A.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},U=h?3:1;U>0;U--){if("break"===F(U))break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ie(e,t,n){return o(e,i(t,n))}var ae={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,s=void 0===a||a,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,v=void 0===h||h,g=n.tetherOffset,y=void 0===g?0:g,b=I(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),w=W(t.placement),A=T(t.placement),L=!A,k=C(w),M="x"===k?"y":"x",P=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,R="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,S="number"==typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(P){if(s){var N,F="y"===k?O:D,U="y"===k?j:E,z="y"===k?"height":"width",_=P[k],X=_+b[F],Y=_-b[U],G=v?-H[z]/2:0,J="start"===A?B[z]:H[z],K="start"===A?-H[z]:-B[z],Q=t.elements.arrow,Z=v&&Q?m(Q):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[F],te=$[U],ne=ie(0,B[z],Z[z]),re=L?B[z]/2-G-ne-ee-S.mainAxis:J-ne-ee-S.mainAxis,oe=L?-B[z]/2+G+ne+te+S.mainAxis:K+ne+te+S.mainAxis,ae=t.elements.arrow&&x(t.elements.arrow),se=ae?"y"===k?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(N=null==q?void 0:q[k])?N:0,ce=_+oe-fe,pe=ie(v?i(X,_+re-fe-se):X,_,v?o(Y,ce):Y);P[k]=pe,V[k]=pe-_}if(c){var ue,le="x"===k?O:D,de="x"===k?j:E,he=P[M],me="y"===M?"height":"width",ve=he+b[le],ge=he-b[de],ye=-1!==[O,D].indexOf(w),be=null!=(ue=null==q?void 0:q[M])?ue:0,we=ye?ve:he-B[me]-H[me]-be+S.altAxis,xe=ye?he+B[me]+H[me]-be-S.altAxis:ge,Oe=v&&ye?function(e,t,n){var r=ie(e,t,n);return r>n?n:r}(we,he,xe):ie(v?we:ve,he,v?xe:ge);P[M]=Oe,V[M]=Oe-he}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var se={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=W(n.placement),f=C(s),c=[D,E].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return V("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:N(e,A))}(o.padding,n),u=m(i),l="y"===f?O:D,d="y"===f?j:E,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],v=a[f]-n.rects.reference[f],g=x(i),y=g?"y"===f?g.clientHeight||0:g.clientWidth||0:0,b=h/2-v/2,w=p[l],L=y-u[c]-p[d],k=y/2-u[c]/2+b,M=ie(w,k,L),P=f;n.modifiersData[r]=((t={})[P]=M,t.centerOffset=M-k,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&B(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function fe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ce(e){return[O,E,j,D].some((function(t){return e[t]>=0}))}var pe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=I(t,{elementContext:"reference"}),s=I(t,{altBoundary:!0}),f=fe(a,r),c=fe(s,o,i),p=ce(f),u=ce(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},ue=z({defaultModifiers:[X,Y,K,Q]}),le=[X,Y,K,Q,Z,oe,ae,se,pe],de=z({defaultModifiers:le});export{Q as applyStyles,se as arrow,K as computeStyles,de as createPopper,ue as createPopperLite,le as defaultModifiers,I as detectOverflow,X as eventListeners,oe as flip,pe as hide,Z as offset,z as popperGenerator,Y as popperOffsets,ae as preventOverflow};
