/**** alpinejs-3.8.1.min.js****/
(()=>{var Ve=!1,He=!1,ee=[];function Rt(e){Xr(e)}function Xr(e){ee.includes(e)||ee.push(e),en()}function en(){!He&&!Ve&&(Ve=!0,queueMicrotask(tn))}function tn(){Ve=!1,He=!0;for(let e=0;e<ee.length;e++)ee[e]();ee.length=0,He=!1}var O,k,G,qe,Ue=!0;function Mt(e){Ue=!1,e(),Ue=!0}function Nt(e){O=e.reactive,G=e.release,k=t=>e.effect(t,{scheduler:r=>{Ue?Rt(r):r()}}),qe=e.raw}function We(e){k=e}function kt(e){let t=()=>{};return[n=>{let i=k(n);e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(o=>o())}),e._x_effects.add(i),t=()=>{i!==void 0&&(e._x_effects.delete(i),G(i))}},()=>{t()}]}var Pt=[],It=[],Dt=[];function $t(e){Dt.push(e)}function Lt(e){It.push(e)}function jt(e){Pt.push(e)}function Ft(e,t,r){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(r)}function Ge(e,t){!e._x_attributeCleanups||Object.entries(e._x_attributeCleanups).forEach(([r,n])=>{(t===void 0||t.includes(r))&&(n.forEach(i=>i()),delete e._x_attributeCleanups[r])})}var Je=new MutationObserver(Ye),Ze=!1;function Qe(){Je.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ze=!0}function nn(){rn(),Je.disconnect(),Ze=!1}var te=[],Xe=!1;function rn(){te=te.concat(Je.takeRecords()),te.length&&!Xe&&(Xe=!0,queueMicrotask(()=>{on(),Xe=!1}))}function on(){Ye(te),te.length=0}function m(e){if(!Ze)return e();nn();let t=e();return Qe(),t}var et=!1,he=[];function Kt(){et=!0}function zt(){et=!1,Ye(he),he=[]}function Ye(e){if(et){he=he.concat(e);return}let t=[],r=[],n=new Map,i=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].addedNodes.forEach(s=>s.nodeType===1&&t.push(s)),e[o].removedNodes.forEach(s=>s.nodeType===1&&r.push(s))),e[o].type==="attributes")){let s=e[o].target,a=e[o].attributeName,c=e[o].oldValue,l=()=>{n.has(s)||n.set(s,[]),n.get(s).push({name:a,value:s.getAttribute(a)})},u=()=>{i.has(s)||i.set(s,[]),i.get(s).push(a)};s.hasAttribute(a)&&c===null?l():s.hasAttribute(a)?(u(),l()):u()}i.forEach((o,s)=>{Ge(s,o)}),n.forEach((o,s)=>{Pt.forEach(a=>a(s,o))});for(let o of r)t.includes(o)||It.forEach(s=>s(o));t.forEach(o=>{o._x_ignoreSelf=!0,o._x_ignore=!0});for(let o of t)r.includes(o)||!o.isConnected||(delete o._x_ignoreSelf,delete o._x_ignore,Dt.forEach(s=>s(o)),o._x_ignore=!0,o._x_ignoreSelf=!0);t.forEach(o=>{delete o._x_ignoreSelf,delete o._x_ignore}),t=null,r=null,n=null,i=null}function _e(e){return I(P(e))}function C(e,t,r){return e._x_dataStack=[t,...P(r||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function tt(e,t){let r=e._x_dataStack[0];Object.entries(t).forEach(([n,i])=>{r[n]=i})}function P(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?P(e.host):e.parentNode?P(e.parentNode):[]}function I(e){let t=new Proxy({},{ownKeys:()=>Array.from(new Set(e.flatMap(r=>Object.keys(r)))),has:(r,n)=>e.some(i=>i.hasOwnProperty(n)),get:(r,n)=>(e.find(i=>{if(i.hasOwnProperty(n)){let o=Object.getOwnPropertyDescriptor(i,n);if(o.get&&o.get._x_alreadyBound||o.set&&o.set._x_alreadyBound)return!0;if((o.get||o.set)&&o.enumerable){let s=o.get,a=o.set,c=o;s=s&&s.bind(t),a=a&&a.bind(t),s&&(s._x_alreadyBound=!0),a&&(a._x_alreadyBound=!0),Object.defineProperty(i,n,{...c,get:s,set:a})}return!0}return!1})||{})[n],set:(r,n,i)=>{let o=e.find(s=>s.hasOwnProperty(n));return o?o[n]=i:e[e.length-1][n]=i,!0}});return t}function ge(e){let t=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,r=(n,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([o,{value:s,enumerable:a}])=>{if(a===!1||s===void 0)return;let c=i===""?o:`${i}.${o}`;typeof s=="object"&&s!==null&&s._x_interceptor?n[o]=s.initialize(e,c,o):t(s)&&s!==n&&!(s instanceof Element)&&r(s,c)})};return r(e)}function xe(e,t=()=>{}){let r={initialValue:void 0,_x_interceptor:!0,initialize(n,i,o){return e(this.initialValue,()=>sn(n,i),s=>rt(n,i,s),i,o)}};return t(r),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=r.initialize.bind(r);r.initialize=(o,s,a)=>{let c=n.initialize(o,s,a);return r.initialValue=c,i(o,s,a)}}else r.initialValue=n;return r}}function sn(e,t){return t.split(".").reduce((r,n)=>r[n],e)}function rt(e,t,r){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=r;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),rt(e[t[0]],t.slice(1),r)}}var Bt={};function y(e,t){Bt[e]=t}function re(e,t){return Object.entries(Bt).forEach(([r,n])=>{Object.defineProperty(e,`$${r}`,{get(){return n(t,{Alpine:R,interceptor:xe})},enumerable:!1})}),e}function Vt(e,t,r,...n){try{return r(...n)}catch(i){Y(i,e,t)}}function Y(e,t,r=void 0){Object.assign(e,{el:t,expression:r}),console.warn(`Alpine Expression Error: ${e.message}

${r?'Expression: "'+r+`"

`:""}`,t),setTimeout(()=>{throw e},0)}function w(e,t,r={}){let n;return h(e,t)(i=>n=i,r),n}function h(...e){return Ht(...e)}var Ht=nt;function qt(e){Ht=e}function nt(e,t){let r={};re(r,e);let n=[r,...P(e)];if(typeof t=="function")return an(n,t);let i=cn(n,t,e);return Vt.bind(null,e,t,i)}function an(e,t){return(r=()=>{},{scope:n={},params:i=[]}={})=>{let o=t.apply(I([n,...e]),i);ye(r,o)}}var it={};function ln(e,t){if(it[e])return it[e];let r=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e)||/^(let|const)\s/.test(e)?`(() => { ${e} })()`:e,o=(()=>{try{return new r(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`)}catch(s){return Y(s,t,e),Promise.resolve()}})();return it[e]=o,o}function cn(e,t,r){let n=ln(t,r);return(i=()=>{},{scope:o={},params:s=[]}={})=>{n.result=void 0,n.finished=!1;let a=I([o,...e]);if(typeof n=="function"){let c=n(n,a).catch(l=>Y(l,r,t));n.finished?(ye(i,n.result,a,s,r),n.result=void 0):c.then(l=>{ye(i,l,a,s,r)}).catch(l=>Y(l,r,t)).finally(()=>n.result=void 0)}}}function ye(e,t,r,n,i){if(typeof t=="function"){let o=t.apply(r,n);o instanceof Promise?o.then(s=>ye(e,s,r,n)).catch(s=>Y(s,i,t)):e(o)}else e(t)}var ot="x-";function E(e=""){return ot+e}function Ut(e){ot=e}var Wt={};function p(e,t){Wt[e]=t}function ne(e,t,r){let n={};return Array.from(t).map(Gt((o,s)=>n[o]=s)).filter(Yt).map(fn(n,r)).sort(dn).map(o=>un(e,o))}function Jt(e){return Array.from(e).map(Gt()).filter(t=>!Yt(t))}var st=!1,ie=new Map,Zt=Symbol();function Qt(e){st=!0;let t=Symbol();Zt=t,ie.set(t,[]);let r=()=>{for(;ie.get(t).length;)ie.get(t).shift()();ie.delete(t)},n=()=>{st=!1,r()};e(r),n()}function un(e,t){let r=()=>{},n=Wt[t.type]||r,i=[],o=d=>i.push(d),[s,a]=kt(e);i.push(a);let c={Alpine:R,effect:s,cleanup:o,evaluateLater:h.bind(h,e),evaluate:w.bind(w,e)},l=()=>i.forEach(d=>d());Ft(e,t.original,l);let u=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,c),n=n.bind(n,e,t,c),st?ie.get(Zt).push(n):n())};return u.runCleanups=l,u}var be=(e,t)=>({name:r,value:n})=>(r.startsWith(e)&&(r=r.replace(e,t)),{name:r,value:n}),ve=e=>e;function Gt(e=()=>{}){return({name:t,value:r})=>{let{name:n,value:i}=Xt.reduce((o,s)=>s(o),{name:t,value:r});return n!==t&&e(n,t),{name:n,value:i}}}var Xt=[];function J(e){Xt.push(e)}function Yt({name:e}){return er().test(e)}var er=()=>new RegExp(`^${ot}([^:^.]+)\\b`);function fn(e,t){return({name:r,value:n})=>{let i=r.match(er()),o=r.match(/:([a-zA-Z0-9\-:]+)/),s=r.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[r]||r;return{type:i?i[1]:null,value:o?o[1]:null,modifiers:s.map(c=>c.replace(".","")),expression:n,original:a}}}var at="DEFAULT",we=["ignore","ref","data","id","bind","init","for","model","transition","show","if",at,"teleport","element"];function dn(e,t){let r=we.indexOf(e.type)===-1?at:e.type,n=we.indexOf(t.type)===-1?at:t.type;return we.indexOf(r)-we.indexOf(n)}function K(e,t,r={}){e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0,cancelable:!0}))}var ct=[],lt=!1;function Se(e){ct.push(e),queueMicrotask(()=>{lt||setTimeout(()=>{Ee()})})}function Ee(){for(lt=!1;ct.length;)ct.shift()()}function tr(){lt=!0}function D(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>D(i,t));return}let r=!1;if(t(e,()=>r=!0),r)return;let n=e.firstElementChild;for(;n;)D(n,t,!1),n=n.nextElementSibling}function z(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}function nr(){document.body||z("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),K(document,"alpine:init"),K(document,"alpine:initializing"),Qe(),$t(t=>S(t,D)),Lt(t=>pn(t)),jt((t,r)=>{ne(t,r).forEach(n=>n())});let e=t=>!B(t.parentElement,!0);Array.from(document.querySelectorAll(rr())).filter(e).forEach(t=>{S(t)}),K(document,"alpine:initialized")}var ut=[],ir=[];function or(){return ut.map(e=>e())}function rr(){return ut.concat(ir).map(e=>e())}function Ae(e){ut.push(e)}function Oe(e){ir.push(e)}function B(e,t=!1){return Z(e,r=>{if((t?rr():or()).some(i=>r.matches(i)))return!0})}function Z(e,t){if(!!e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),!!e.parentElement)return Z(e.parentElement,t)}}function sr(e){return or().some(t=>e.matches(t))}function S(e,t=D){Qt(()=>{t(e,(r,n)=>{ne(r,r.attributes).forEach(i=>i()),r._x_ignore&&n()})})}function pn(e){D(e,t=>Ge(t))}function oe(e,t){return Array.isArray(t)?ar(e,t.join(" ")):typeof t=="object"&&t!==null?mn(e,t):typeof t=="function"?oe(e,t()):ar(e,t)}function ar(e,t){let r=o=>o.split(" ").filter(Boolean),n=o=>o.split(" ").filter(s=>!e.classList.contains(s)).filter(Boolean),i=o=>(e.classList.add(...o),()=>{e.classList.remove(...o)});return t=t===!0?t="":t||"",i(n(t))}function mn(e,t){let r=a=>a.split(" ").filter(Boolean),n=Object.entries(t).flatMap(([a,c])=>c?r(a):!1).filter(Boolean),i=Object.entries(t).flatMap(([a,c])=>c?!1:r(a)).filter(Boolean),o=[],s=[];return i.forEach(a=>{e.classList.contains(a)&&(e.classList.remove(a),s.push(a))}),n.forEach(a=>{e.classList.contains(a)||(e.classList.add(a),o.push(a))}),()=>{s.forEach(a=>e.classList.add(a)),o.forEach(a=>e.classList.remove(a))}}function V(e,t){return typeof t=="object"&&t!==null?hn(e,t):_n(e,t)}function hn(e,t){let r={};return Object.entries(t).forEach(([n,i])=>{r[n]=e.style[n],e.style.setProperty(gn(n),i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{V(e,r)}}function _n(e,t){let r=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",r||"")}}function gn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function se(e,t=()=>{}){let r=!1;return function(){r?t.apply(this,arguments):(r=!0,e.apply(this,arguments))}}p("transition",(e,{value:t,modifiers:r,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n?xn(e,n,t):yn(e,r,t)});function xn(e,t,r){cr(e,oe,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[r](t)}function yn(e,t,r){cr(e,V);let n=!t.includes("in")&&!t.includes("out")&&!r,i=n||t.includes("in")||["enter"].includes(r),o=n||t.includes("out")||["leave"].includes(r);t.includes("in")&&!n&&(t=t.filter((g,b)=>b<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((g,b)=>b>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),c=s||t.includes("scale"),l=a?0:1,u=c?ae(t,"scale",95)/100:1,d=ae(t,"delay",0),x=ae(t,"origin","center"),N="opacity, transform",U=ae(t,"duration",150)/1e3,pe=ae(t,"duration",75)/1e3,f="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:x,transitionDelay:d,transitionProperty:N,transitionDuration:`${U}s`,transitionTimingFunction:f},e._x_transition.enter.start={opacity:l,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:x,transitionDelay:d,transitionProperty:N,transitionDuration:`${pe}s`,transitionTimingFunction:f},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${u})`})}function cr(e,t,r={}){e._x_transition||(e._x_transition={enter:{during:r,start:r,end:r},leave:{during:r,start:r,end:r},in(n=()=>{},i=()=>{}){Te(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){Te(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,r,n){let i=()=>{document.visibilityState==="visible"?requestAnimationFrame(r):setTimeout(r)};if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(r):i():e._x_transition?e._x_transition.in(r):i();return}e._x_hidePromise=e._x_transition?new Promise((o,s)=>{e._x_transition.out(()=>{},()=>o(n)),e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let o=lr(e);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(e)):queueMicrotask(()=>{let s=a=>{let c=Promise.all([a._x_hidePromise,...(a._x_hideChildren||[]).map(s)]).then(([l])=>l());return delete a._x_hidePromise,delete a._x_hideChildren,c};s(e).catch(a=>{if(!a.isFromCancelledTransition)throw a})})})};function lr(e){let t=e.parentNode;if(!!t)return t._x_hidePromise?t:lr(t)}function Te(e,t,{during:r,start:n,end:i}={},o=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(r).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){o(),s();return}let a,c,l;bn(e,{start(){a=t(e,n)},during(){c=t(e,r)},before:o,end(){a(),l=t(e,i)},after:s,cleanup(){c(),l()}})}function bn(e,t){let r,n,i,o=se(()=>{m(()=>{r=!0,n||t.before(),i||(t.end(),Ee()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:se(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},m(()=>{t.start(),t.during()}),tr(),requestAnimationFrame(()=>{if(r)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),m(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{r||(m(()=>{t.end()}),Ee(),setTimeout(e._x_transitioning.finish,s+a),i=!0)})})}function ae(e,t,r){if(e.indexOf(t)===-1)return r;let n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return r;if(t==="duration"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}var ft=!1;function $(e,t=()=>{}){return(...r)=>ft?t(...r):e(...r)}function ur(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),ft=!0,wn(()=>{vn(t)}),ft=!1}function vn(e){let t=!1;S(e,(n,i)=>{D(n,(o,s)=>{if(t&&sr(o))return s();t=!0,i(o,s)})})}function wn(e){let t=k;We((r,n)=>{let i=t(r);return G(i),()=>{}}),e(),We(t)}function ce(e,t,r,n=[]){switch(e._x_bindings||(e._x_bindings=O({})),e._x_bindings[t]=r,t=n.includes("camel")?Tn(t):t,t){case"value":En(e,r);break;case"style":An(e,r);break;case"class":Sn(e,r);break;default:On(e,t,r);break}}function En(e,t){if(e.type==="radio")e.attributes.value===void 0&&(e.value=t),window.fromModel&&(e.checked=fr(e.value,t));else if(e.type==="checkbox")Number.isInteger(t)?e.value=t:!Number.isInteger(t)&&!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(r=>fr(r,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Cn(e,t);else{if(e.value===t)return;e.value=t}}function Sn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=oe(e,t)}function An(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=V(e,t)}function On(e,t,r){[null,void 0,!1].includes(r)&&Mn(t)?e.removeAttribute(t):(dr(t)&&(r=t),Rn(e,t,r))}function Rn(e,t,r){e.getAttribute(t)!=r&&e.setAttribute(t,r)}function Cn(e,t){let r=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=r.includes(n.value)})}function Tn(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function fr(e,t){return e==t}function dr(e){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}function Mn(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function pr(e,t,r){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];let n=e.getAttribute(t);return n===null?typeof r=="function"?r():r:dr(t)?!![t,"true"].includes(n):n===""?!0:n}function Ce(e,t){var r;return function(){var n=this,i=arguments,o=function(){r=null,e.apply(n,i)};clearTimeout(r),r=setTimeout(o,t)}}function Re(e,t){let r;return function(){let n=this,i=arguments;r||(e.apply(n,i),r=!0,setTimeout(()=>r=!1,t))}}function mr(e){e(R)}var H={},hr=!1;function _r(e,t){if(hr||(H=O(H),hr=!0),t===void 0)return H[e];H[e]=t,typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&H[e].init(),ge(H[e])}function gr(){return H}var xr={};function yr(e,t){xr[e]=typeof t!="function"?()=>t:t}function br(e){return Object.entries(xr).forEach(([t,r])=>{Object.defineProperty(e,t,{get(){return(...n)=>r(...n)}})}),e}var vr={};function wr(e,t){vr[e]=t}function Er(e,t){return Object.entries(vr).forEach(([r,n])=>{Object.defineProperty(e,r,{get(){return(...i)=>n.bind(t)(...i)},enumerable:!1})}),e}var Nn={get reactive(){return O},get release(){return G},get effect(){return k},get raw(){return qe},version:"3.8.1",flushAndStopDeferringMutations:zt,disableEffectScheduling:Mt,setReactivityEngine:Nt,closestDataStack:P,skipDuringClone:$,addRootSelector:Ae,addInitSelector:Oe,addScopeToNode:C,deferMutations:Kt,mapAttributes:J,evaluateLater:h,setEvaluator:qt,mergeProxies:I,findClosest:Z,closestRoot:B,interceptor:xe,transition:Te,setStyles:V,mutateDom:m,directive:p,throttle:Re,debounce:Ce,evaluate:w,initTree:S,nextTick:Se,prefixed:E,prefix:Ut,plugin:mr,magic:y,store:_r,start:nr,clone:ur,bound:pr,$data:_e,data:wr,bind:yr},R=Nn;function dt(e,t){let r=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)r[n[i]]=!0;return t?i=>!!r[i.toLowerCase()]:i=>!!r[i]}var Wo={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"HYDRATE_EVENTS",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},Go={[1]:"STABLE",[2]:"DYNAMIC",[3]:"FORWARDED"};var kn="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";var Yo=dt(kn+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");var Sr=Object.freeze({}),Jo=Object.freeze([]);var pt=Object.assign;var Pn=Object.prototype.hasOwnProperty,le=(e,t)=>Pn.call(e,t),L=Array.isArray,Q=e=>Ar(e)==="[object Map]";var In=e=>typeof e=="string",Me=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object";var Dn=Object.prototype.toString,Ar=e=>Dn.call(e),mt=e=>Ar(e).slice(8,-1);var Ne=e=>In(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e;var ke=e=>{let t=Object.create(null);return r=>t[r]||(t[r]=e(r))},$n=/-(\w)/g,Zo=ke(e=>e.replace($n,(t,r)=>r?r.toUpperCase():"")),Ln=/\B([A-Z])/g,Qo=ke(e=>e.replace(Ln,"-$1").toLowerCase()),ht=ke(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xo=ke(e=>e?`on${ht(e)}`:""),_t=(e,t)=>e!==t&&(e===e||t===t);var gt=new WeakMap,fe=[],M,q=Symbol("iterate"),xt=Symbol("Map key iterate");function jn(e){return e&&e._isEffect===!0}function Or(e,t=Sr){jn(e)&&(e=e.raw);let r=Fn(e,t);return t.lazy||r(),r}function Cr(e){e.active&&(Tr(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var Kn=0;function Fn(e,t){let r=function(){if(!r.active)return e();if(!fe.includes(r)){Tr(r);try{return zn(),fe.push(r),M=r,e()}finally{fe.pop(),Rr(),M=fe[fe.length-1]}}};return r.id=Kn++,r.allowRecurse=!!t.allowRecurse,r._isEffect=!0,r.active=!0,r.raw=e,r.deps=[],r.options=t,r}function Tr(e){let{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}var X=!0,yt=[];function Bn(){yt.push(X),X=!1}function zn(){yt.push(X),X=!0}function Rr(){let e=yt.pop();X=e===void 0?!0:e}function T(e,t,r){if(!X||M===void 0)return;let n=gt.get(e);n||gt.set(e,n=new Map);let i=n.get(r);i||n.set(r,i=new Set),i.has(M)||(i.add(M),M.deps.push(i),M.options.onTrack&&M.options.onTrack({effect:M,target:e,type:t,key:r}))}function j(e,t,r,n,i,o){let s=gt.get(e);if(!s)return;let a=new Set,c=u=>{u&&u.forEach(d=>{(d!==M||d.allowRecurse)&&a.add(d)})};if(t==="clear")s.forEach(c);else if(r==="length"&&L(e))s.forEach((u,d)=>{(d==="length"||d>=n)&&c(u)});else switch(r!==void 0&&c(s.get(r)),t){case"add":L(e)?Ne(r)&&c(s.get("length")):(c(s.get(q)),Q(e)&&c(s.get(xt)));break;case"delete":L(e)||(c(s.get(q)),Q(e)&&c(s.get(xt)));break;case"set":Q(e)&&c(s.get(q));break}let l=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:e,key:r,type:t,newValue:n,oldValue:i,oldTarget:o}),u.options.scheduler?u.options.scheduler(u):u()};a.forEach(l)}var Vn=dt("__proto__,__v_isRef,__isVue"),Mr=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Me)),Hn=Pe(),qn=Pe(!1,!0),Un=Pe(!0),Wn=Pe(!0,!0),Ie={};["includes","indexOf","lastIndexOf"].forEach(e=>{let t=Array.prototype[e];Ie[e]=function(...r){let n=_(this);for(let o=0,s=this.length;o<s;o++)T(n,"get",o+"");let i=t.apply(n,r);return i===-1||i===!1?t.apply(n,r.map(_)):i}});["push","pop","shift","unshift","splice"].forEach(e=>{let t=Array.prototype[e];Ie[e]=function(...r){Bn();let n=t.apply(this,r);return Rr(),n}});function Pe(e=!1,t=!1){return function(n,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_raw"&&o===(e?t?Yn:kr:t?Gn:Nr).get(n))return n;let s=L(n);if(!e&&s&&le(Ie,i))return Reflect.get(Ie,i,o);let a=Reflect.get(n,i,o);return(Me(i)?Mr.has(i):Vn(i))||(e||T(n,"get",i),t)?a:bt(a)?!s||!Ne(i)?a.value:a:ue(a)?e?Pr(a):De(a):a}}var Jn=Ir(),Zn=Ir(!0);function Ir(e=!1){return function(r,n,i,o){let s=r[n];if(!e&&(i=_(i),s=_(s),!L(r)&&bt(s)&&!bt(i)))return s.value=i,!0;let a=L(r)&&Ne(n)?Number(n)<r.length:le(r,n),c=Reflect.set(r,n,i,o);return r===_(o)&&(a?_t(i,s)&&j(r,"set",n,i,s):j(r,"add",n,i)),c}}function Qn(e,t){let r=le(e,t),n=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&j(e,"delete",t,void 0,n),i}function Xn(e,t){let r=Reflect.has(e,t);return(!Me(t)||!Mr.has(t))&&T(e,"has",t),r}function ei(e){return T(e,"iterate",L(e)?"length":q),Reflect.ownKeys(e)}var Dr={get:Hn,set:Jn,deleteProperty:Qn,has:Xn,ownKeys:ei},$r={get:Un,set(e,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},os=pt({},Dr,{get:qn,set:Zn}),ss=pt({},$r,{get:Wn}),vt=e=>ue(e)?De(e):e,wt=e=>ue(e)?Pr(e):e,Et=e=>e,$e=e=>Reflect.getPrototypeOf(e);function Le(e,t,r=!1,n=!1){e=e.__v_raw;let i=_(e),o=_(t);t!==o&&!r&&T(i,"get",t),!r&&T(i,"get",o);let{has:s}=$e(i),a=n?Et:r?wt:vt;if(s.call(i,t))return a(e.get(t));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function je(e,t=!1){let r=this.__v_raw,n=_(r),i=_(e);return e!==i&&!t&&T(n,"has",e),!t&&T(n,"has",i),e===i?r.has(e):r.has(e)||r.has(i)}function Fe(e,t=!1){return e=e.__v_raw,!t&&T(_(e),"iterate",q),Reflect.get(e,"size",e)}function Lr(e){e=_(e);let t=_(this);return $e(t).has.call(t,e)||(t.add(e),j(t,"add",e,e)),this}function Fr(e,t){t=_(t);let r=_(this),{has:n,get:i}=$e(r),o=n.call(r,e);o?jr(r,n,e):(e=_(e),o=n.call(r,e));let s=i.call(r,e);return r.set(e,t),o?_t(t,s)&&j(r,"set",e,t,s):j(r,"add",e,t),this}function Kr(e){let t=_(this),{has:r,get:n}=$e(t),i=r.call(t,e);i?jr(t,r,e):(e=_(e),i=r.call(t,e));let o=n?n.call(t,e):void 0,s=t.delete(e);return i&&j(t,"delete",e,void 0,o),s}function zr(){let e=_(this),t=e.size!==0,r=Q(e)?new Map(e):new Set(e),n=e.clear();return t&&j(e,"clear",void 0,void 0,r),n}function Ke(e,t){return function(n,i){let o=this,s=o.__v_raw,a=_(s),c=t?Et:e?wt:vt;return!e&&T(a,"iterate",q),s.forEach((l,u)=>n.call(i,c(l),c(u),o))}}function ze(e,t,r){return function(...n){let i=this.__v_raw,o=_(i),s=Q(o),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,l=i[e](...n),u=r?Et:t?wt:vt;return!t&&T(o,"iterate",c?xt:q),{next(){let{value:d,done:x}=l.next();return x?{value:d,done:x}:{value:a?[u(d[0]),u(d[1])]:u(d),done:x}},[Symbol.iterator](){return this}}}}function F(e){return function(...t){{let r=t[0]?`on key "${t[0]}" `:"";console.warn(`${ht(e)} operation ${r}failed: target is readonly.`,_(this))}return e==="delete"?!1:this}}var Br={get(e){return Le(this,e)},get size(){return Fe(this)},has:je,add:Lr,set:Fr,delete:Kr,clear:zr,forEach:Ke(!1,!1)},Vr={get(e){return Le(this,e,!1,!0)},get size(){return Fe(this)},has:je,add:Lr,set:Fr,delete:Kr,clear:zr,forEach:Ke(!1,!0)},Hr={get(e){return Le(this,e,!0)},get size(){return Fe(this,!0)},has(e){return je.call(this,e,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:Ke(!0,!1)},qr={get(e){return Le(this,e,!0,!0)},get size(){return Fe(this,!0)},has(e){return je.call(this,e,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:Ke(!0,!0)},ti=["keys","values","entries",Symbol.iterator];ti.forEach(e=>{Br[e]=ze(e,!1,!1),Hr[e]=ze(e,!0,!1),Vr[e]=ze(e,!1,!0),qr[e]=ze(e,!0,!0)});function Be(e,t){let r=t?e?qr:Vr:e?Hr:Br;return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(le(r,i)&&i in n?r:n,i,o)}var ri={get:Be(!1,!1)},as={get:Be(!1,!0)},ni={get:Be(!0,!1)},cs={get:Be(!0,!0)};function jr(e,t,r){let n=_(r);if(n!==r&&t.call(e,n)){let i=mt(e);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Nr=new WeakMap,Gn=new WeakMap,kr=new WeakMap,Yn=new WeakMap;function ii(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oi(e){return e.__v_skip||!Object.isExtensible(e)?0:ii(mt(e))}function De(e){return e&&e.__v_isReadonly?e:Ur(e,!1,Dr,ri,Nr)}function Pr(e){return Ur(e,!0,$r,ni,kr)}function Ur(e,t,r,n,i){if(!ue(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;let o=i.get(e);if(o)return o;let s=oi(e);if(s===0)return e;let a=new Proxy(e,s===2?n:r);return i.set(e,a),a}function _(e){return e&&_(e.__v_raw)||e}function bt(e){return Boolean(e&&e.__v_isRef===!0)}y("nextTick",()=>Se);y("dispatch",e=>K.bind(K,e));y("watch",e=>(t,r)=>{let n=h(e,t),i=!0,o;k(()=>n(s=>{JSON.stringify(s),i?o=s:queueMicrotask(()=>{r(s,o),o=s}),i=!1}))});y("store",gr);y("data",e=>_e(e));y("root",e=>B(e));y("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=I(si(e))),e._x_refs_proxy));function si(e){let t=[],r=e;for(;r;)r._x_refs&&t.push(r._x_refs),r=r.parentNode;return t}var St={};function At(e){return St[e]||(St[e]=0),++St[e]}function Wr(e,t){return Z(e,r=>{if(r._x_ids&&r._x_ids[t])return!0})}function Gr(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=At(t))}y("id",e=>(t,r=null)=>{let n=Wr(e,t),i=n?n._x_ids[t]:At(t);return r?`${t}-${i}-${r}`:`${t}-${i}`});y("el",e=>e);p("teleport",(e,{expression:t},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&z("x-teleport can only be used on a <template> tag",e);let n=document.querySelector(t);n||z(`Cannot find x-teleport element for selector: "${t}"`);let i=e.content.cloneNode(!0).firstElementChild;e._x_teleport=i,i._x_teleportBack=e,e._x_forwardEvents&&e._x_forwardEvents.forEach(o=>{i.addEventListener(o,s=>{s.stopPropagation(),e.dispatchEvent(new s.constructor(s.type,s))})}),C(i,{},e),m(()=>{n.appendChild(i),S(i),i._x_ignore=!0}),r(()=>i.remove())});var Yr=()=>{};Yr.inline=(e,{modifiers:t},{cleanup:r})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,r(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};p("ignore",Yr);p("effect",(e,{expression:t},{effect:r})=>r(h(e,t)));function de(e,t,r,n){let i=e,o=c=>n(c),s={},a=(c,l)=>u=>l(c,u);if(r.includes("dot")&&(t=ai(t)),r.includes("camel")&&(t=ci(t)),r.includes("passive")&&(s.passive=!0),r.includes("capture")&&(s.capture=!0),r.includes("window")&&(i=window),r.includes("document")&&(i=document),r.includes("prevent")&&(o=a(o,(c,l)=>{l.preventDefault(),c(l)})),r.includes("stop")&&(o=a(o,(c,l)=>{l.stopPropagation(),c(l)})),r.includes("self")&&(o=a(o,(c,l)=>{l.target===e&&c(l)})),(r.includes("away")||r.includes("outside"))&&(i=document,o=a(o,(c,l)=>{e.contains(l.target)||e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l)})),o=a(o,(c,l)=>{li(t)&&ui(l,r)||c(l)}),r.includes("debounce")){let c=r[r.indexOf("debounce")+1]||"invalid-wait",l=Ot(c.split("ms")[0])?Number(c.split("ms")[0]):250;o=Ce(o,l)}if(r.includes("throttle")){let c=r[r.indexOf("throttle")+1]||"invalid-wait",l=Ot(c.split("ms")[0])?Number(c.split("ms")[0]):250;o=Re(o,l)}return r.includes("once")&&(o=a(o,(c,l)=>{c(l),i.removeEventListener(t,o,s)})),i.addEventListener(t,o,s),()=>{i.removeEventListener(t,o,s)}}function ai(e){return e.replace(/-/g,".")}function ci(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function Ot(e){return!Array.isArray(e)&&!isNaN(e)}function fi(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function li(e){return["keydown","keyup"].includes(e)}function ui(e,t){let r=t.filter(o=>!["window","document","prevent","stop","once"].includes(o));if(r.includes("debounce")){let o=r.indexOf("debounce");r.splice(o,Ot((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.length===0||r.length===1&&Jr(e.key).includes(r[0]))return!1;let i=["ctrl","shift","alt","meta","cmd","super"].filter(o=>r.includes(o));return r=r.filter(o=>!i.includes(o)),!(i.length>0&&i.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===i.length&&Jr(e.key).includes(r[0]))}function Jr(e){if(!e)return[];e=fi(e);let t={ctrl:"control",slash:"/",space:"-",spacebar:"-",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"="};return t[e]=e,Object.keys(t).map(r=>{if(t[r]===e)return r}).filter(r=>r)}p("model",(e,{modifiers:t,expression:r},{effect:n,cleanup:i})=>{let o=h(e,r),s=`${r} = rightSideOfExpression($event, ${r})`,a=h(e,s);var c=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)||t.includes("lazy")?"change":"input";let l=di(e,t,r),u=de(e,c,t,x=>{a(()=>{},{scope:{$event:x,rightSideOfExpression:l}})});i(()=>u());let d=h(e,`${r} = __placeholder`);e._x_model={get(){let x;return o(N=>x=N),x},set(x){d(()=>{},{scope:{__placeholder:x}})}},e._x_forceModelUpdate=()=>{o(x=>{x===void 0&&r.match(/\./)&&(x=""),window.fromModel=!0,m(()=>ce(e,"value",x)),delete window.fromModel})},n(()=>{t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate()})});function di(e,t,r){return e.type==="radio"&&m(()=>{e.hasAttribute("name")||e.setAttribute("name",r)}),(n,i)=>m(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail||n.target.value;if(e.type==="checkbox")if(Array.isArray(i)){let o=t.includes("number")?Tt(n.target.value):n.target.value;return n.target.checked?i.concat([o]):i.filter(s=>!pi(s,o))}else return n.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(o=>{let s=o.value||o.text;return Tt(s)}):Array.from(n.target.selectedOptions).map(o=>o.value||o.text);{let o=n.target.value;return t.includes("number")?Tt(o):t.includes("trim")?o.trim():o}}})}function Tt(e){let t=e?parseFloat(e):null;return mi(t)?t:e}function pi(e,t){return e==t}function mi(e){return!Array.isArray(e)&&!isNaN(e)}p("cloak",e=>queueMicrotask(()=>m(()=>e.removeAttribute(E("cloak")))));Oe(()=>`[${E("init")}]`);p("init",$((e,{expression:t})=>typeof t=="string"?!!t.trim()&&w(e,t,{},!1):w(e,t,{},!1)));p("text",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{m(()=>{e.textContent=o})})})});p("html",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{e.innerHTML=o})})});J(be(":",ve(E("bind:"))));p("bind",(e,{value:t,modifiers:r,expression:n,original:i},{effect:o})=>{if(!t)return hi(e,n,i,o);if(t==="key")return _i(e,n);let s=h(e,n);o(()=>s(a=>{a===void 0&&n.match(/\./)&&(a=""),m(()=>ce(e,t,a,r))}))});function hi(e,t,r,n){let i={};br(i);let o=h(e,t),s=[];for(;s.length;)s.pop()();o(a=>{let c=Object.entries(a).map(([u,d])=>({name:u,value:d})),l=Jt(c);c=c.map(u=>l.find(d=>d.name===u.name)?{name:`x-bind:${u.name}`,value:`"${u.value}"`}:u),ne(e,c,r).map(u=>{s.push(u.runCleanups),u()})},{scope:i})}function _i(e,t){e._x_keyExpression=t}Ae(()=>`[${E("data")}]`);p("data",$((e,{expression:t},{cleanup:r})=>{t=t===""?"{}":t;let n={};re(n,e);let i={};Er(i,n);let o=w(e,t,{scope:i});o===void 0&&(o={}),re(o,e);let s=O(o);ge(s);let a=C(e,s);s.init&&w(e,s.init),r(()=>{a(),s.destroy&&w(e,s.destroy)})}));p("show",(e,{modifiers:t,expression:r},{effect:n})=>{let i=h(e,r),o=()=>m(()=>{e.style.display="none",e._x_isShown=!1}),s=()=>m(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display"),e._x_isShown=!0}),a=()=>setTimeout(s),c=se(d=>d?s():o(),d=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,d,s,o):d?a():o()}),l,u=!0;n(()=>i(d=>{!u&&d===l||(t.includes("immediate")&&(d?a():o()),c(d),l=d,u=!1)}))});p("for",(e,{expression:t},{effect:r,cleanup:n})=>{let i=xi(t),o=h(e,i.items),s=h(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},r(()=>gi(e,i,o,s)),n(()=>{Object.values(e._x_lookup).forEach(a=>a.remove()),delete e._x_prevKeys,delete e._x_lookup})});function gi(e,t,r,n){let i=s=>typeof s=="object"&&!Array.isArray(s),o=e;r(s=>{yi(s)&&s>=0&&(s=Array.from(Array(s).keys(),f=>f+1)),s===void 0&&(s=[]);let a=e._x_lookup,c=e._x_prevKeys,l=[],u=[];if(i(s))s=Object.entries(s).map(([f,g])=>{let b=Zr(t,g,f,s);n(v=>u.push(v),{scope:{index:f,...b}}),l.push(b)});else for(let f=0;f<s.length;f++){let g=Zr(t,s[f],f,s);n(b=>u.push(b),{scope:{index:f,...g}}),l.push(g)}let d=[],x=[],N=[],U=[];for(let f=0;f<c.length;f++){let g=c[f];u.indexOf(g)===-1&&N.push(g)}c=c.filter(f=>!N.includes(f));let pe="template";for(let f=0;f<u.length;f++){let g=u[f],b=c.indexOf(g);if(b===-1)c.splice(f,0,g),d.push([pe,f]);else if(b!==f){let v=c.splice(f,1)[0],A=c.splice(b-1,1)[0];c.splice(f,0,A),c.splice(b,0,v),x.push([v,A])}else U.push(g);pe=g}for(let f=0;f<N.length;f++){let g=N[f];a[g].remove(),a[g]=null,delete a[g]}for(let f=0;f<x.length;f++){let[g,b]=x[f],v=a[g],A=a[b],W=document.createElement("div");m(()=>{A.after(W),v.after(A),A._x_currentIfEl&&A.after(A._x_currentIfEl),W.before(v),v._x_currentIfEl&&v.after(v._x_currentIfEl),W.remove()}),tt(A,l[u.indexOf(b)])}for(let f=0;f<d.length;f++){let[g,b]=d[f],v=g==="template"?o:a[g];v._x_currentIfEl&&(v=v._x_currentIfEl);let A=l[b],W=u[b],me=document.importNode(o.content,!0).firstElementChild;C(me,O(A),o),m(()=>{v.after(me),S(me)}),typeof W=="object"&&z("x-for key cannot be an object, it must be a string or an integer",o),a[W]=me}for(let f=0;f<U.length;f++)tt(a[U[f]],l[u.indexOf(U[f])]);o._x_prevKeys=u})}function xi(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=e.match(n);if(!i)return;let o={};o.items=i[2].trim();let s=i[1].replace(r,"").trim(),a=s.match(t);return a?(o.item=s.replace(t,"").trim(),o.index=a[1].trim(),a[2]&&(o.collection=a[2].trim())):o.item=s,o}function Zr(e,t,r,n){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{i[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{i[s]=t[s]}):i[e.item]=t,e.index&&(i[e.index]=r),e.collection&&(i[e.collection]=n),i}function yi(e){return!Array.isArray(e)&&!isNaN(e)}function Qr(){}Qr.inline=(e,{expression:t},{cleanup:r})=>{let n=B(e);n._x_refs||(n._x_refs={}),n._x_refs[t]=e,r(()=>delete n._x_refs[t])};p("ref",Qr);p("if",(e,{expression:t},{effect:r,cleanup:n})=>{let i=h(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return C(a,{},e),m(()=>{e.after(a),S(a)}),e._x_currentIfEl=a,e._x_undoIf=()=>{a.remove(),delete e._x_currentIfEl},a},s=()=>{!e._x_undoIf||(e._x_undoIf(),delete e._x_undoIf)};r(()=>i(a=>{a?o():s()})),n(()=>e._x_undoIf&&e._x_undoIf())});p("id",(e,{expression:t},{evaluate:r})=>{r(t).forEach(i=>Gr(e,i))});J(be("@",ve(E("on:"))));p("on",$((e,{value:t,modifiers:r,expression:n},{cleanup:i})=>{let o=n?h(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=de(e,t,r,a=>{o(()=>{},{scope:{$event:a},params:[a]})});i(()=>s())}));R.setEvaluator(nt);R.setReactivityEngine({reactive:De,effect:Or,release:Cr,raw:_});var Ct=R;window.Alpine=Ct;queueMicrotask(()=>{Ct.start()});})();

/**** apexcharts.js****/
/*!
 * ApexCharts v3.35.4
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ApexCharts=e()}(this,(function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function e(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=l(t);if(e){var s=l(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return c(this,i)}}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var a,s,r=[],o=!0,n=!1;try{for(i=i.call(t);!(o=(a=i.next()).done)&&(r.push(a.value),!e||r.length!==e);o=!0);}catch(t){n=!0,s=t}finally{try{o||null==i.return||i.return()}finally{if(n)throw s}}return r}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return p(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var x=function(){function t(){a(this,t)}return r(t,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),a=t<0?0:255,s=t<0?-1*t:t,r=parseInt(i[0].slice(4),10),o=parseInt(i[1],10),n=parseInt(i[2],10);return"rgb("+(Math.round((a-r)*s)+r)+","+(Math.round((a-o)*s)+o)+","+(Math.round((a-n)*s)+n)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),a=t<0?0:255,s=t<0?-1*t:t,r=i>>16,o=i>>8&255,n=255&i;return"#"+(16777216+65536*(Math.round((a-r)*s)+r)+256*(Math.round((a-o)*s)+o)+(Math.round((a-n)*s)+n)).toString(16).slice(1)}},{key:"shadeColor",value:function(e,i){return t.isColorHex(i)?this.shadeHexColor(e,i):this.shadeRGBColor(e,i)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(t){return t&&"object"===i(t)&&!Array.isArray(t)&&null!=t}},{key:"is",value:function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"}},{key:"listToArray",value:function(t){var e,i=[];for(e=0;e<t.length;e++)i[e]=t[e];return i}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e});var a=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(s){i.isObject(e[s])&&s in t?a[s]=i.extend(t[s],e[s]):Object.assign(a,o({},s,e[s]))})),a}},{key:"extendArray",value:function(e,i){var a=[];return e.map((function(e){a.push(t.extend(i,e))})),e=a}},{key:"monthMod",value:function(t){return t%12}},{key:"clone",value:function(e){if(t.is("Array",e)){for(var a=[],s=0;s<e.length;s++)a[s]=this.clone(e[s]);return a}if(t.is("Null",e))return null;if(t.is("Date",e))return e;if("object"===i(e)){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]=this.clone(e[o]));return r}return e}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(t){var e=String(t).split(/[eE]/);if(1===e.length)return e[0];var i="",a=t<0?"-":"",s=e[0].replace(".",""),r=Number(e[1])+1;if(r<0){for(i=a+"0.";r++;)i+="0";return i+s.replace(/^-/,"")}for(r-=s.length;r--;)i+="0";return s+i}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t,null),i=t.clientHeight,a=t.clientWidth;return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),[a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i]}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:t.clientWidth,height:t.clientHeight,x:e.left,y:e.top}}},{key:"getLargestStringFromArr",value:function(t){return t.reduce((function(t,e){return Array.isArray(e)&&(e=e.reduce((function(t,e){return t.length>e.length?t:e}))),t.length>e.length?t:e}),0)}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(1===i[a].length?i[a]+i[a]:i[a],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return parseFloat(t.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)}},{key:"getPolygonPos",value:function(t,e){for(var i=[],a=2*Math.PI/e,s=0;s<e;s++){var r={};r.x=t*Math.sin(s*a),r.y=-t*Math.cos(s*a),i.push(r)}return i}},{key:"polarToCartesian",value:function(t,e,i,a){var s=(a-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:e+i*Math.sin(s)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var a=i-t.length+1;a--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var a=t.indexOf("Edge/");return a>0&&parseInt(t.substring(a+5,t.indexOf(".",a)),10)}}]),t}(),b=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.setEasingFunctions()}return r(t,[{key:"setEasingFunctions",value:function(){var t;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":t="-";break;case"easein":t="<";break;case"easeout":t=">";break;case"easeinout":t="<>";break;case"swing":t=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1};break;case"bounce":t=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":t=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1};break;default:t="<>"}this.w.globals.easing=t}}},{key:"animateLine",value:function(t,e,i,a){t.attr(e).animate(a).attr(i)}},{key:"animateMarker",value:function(t,e,i,a,s,r){e||(e=0),t.attr({r:e,width:e,height:e}).animate(a,s).attr({r:i,width:i.width,height:i.height}).afterAll((function(){r()}))}},{key:"animateCircle",value:function(t,e,i,a,s){t.attr({r:e.r,cx:e.cx,cy:e.cy}).animate(a,s).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(t,e,i,a,s){t.attr(e).animate(a).attr(i).afterAll((function(){return s()}))}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.realIndex,a=t.j,s=t.fill,r=t.pathFrom,o=t.pathTo,n=t.speed,l=t.delay,h=this.w,c=0;h.config.chart.animations.animateGradually.enabled&&(c=h.config.chart.animations.animateGradually.delay),h.config.chart.animations.dynamicAnimation.enabled&&h.globals.dataChanged&&"bar"!==h.config.chart.type&&(c=0),this.morphSVG(e,i,a,"line"!==h.config.chart.type||h.globals.comboCharts?s:"stroke",r,o,n,l*c)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach((function(t){t.el.classList.remove("apexcharts-element-hidden")}))}},{key:"animationCompleted",value:function(t){var e=this.w;e.globals.animationEnded||(e.globals.animationEnded=!0,this.showDelayedElements(),"function"==typeof e.config.chart.events.animationEnd&&e.config.chart.events.animationEnd(this.ctx,{el:t,w:e}))}},{key:"morphSVG",value:function(t,e,i,a,s,r,o,n){var l=this,h=this.w;s||(s=t.attr("pathFrom")),r||(r=t.attr("pathTo"));var c=function(t){return"radar"===h.config.chart.type&&(o=1),"M 0 ".concat(h.globals.gridHeight)};(!s||s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s=c()),(!r||r.indexOf("undefined")>-1||r.indexOf("NaN")>-1)&&(r=c()),h.globals.shouldAnimate||(o=1),t.plot(s).animate(1,h.globals.easing,n).plot(s).animate(o,h.globals.easing,n).plot(r).afterAll((function(){x.isNumber(i)?i===h.globals.series[h.globals.maxValsInArrayIndex].length-2&&h.globals.shouldAnimate&&l.animationCompleted(t):"none"!==a&&h.globals.shouldAnimate&&(!h.globals.comboCharts&&e===h.globals.series.length-1||h.globals.comboCharts)&&l.animationCompleted(t),l.showDelayedElements()}))}}]),t}(),v=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getDefaultFilter",value:function(t,e){var i=this.w;t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),"none"!==i.config.states.normal.filter?this.applyFilter(t,e,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addNormalFilter",value:function(t,e){var i=this.w;i.config.chart.dropShadow.enabled&&!t.node.classList.contains("apexcharts-marker")&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addLightenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"addDarkenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"applyFilter",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(t,e);break;case"lighten":this.addLightenFilter(t,e,{intensity:a});break;case"darken":this.addDarkenFilter(t,e,{intensity:a})}}},{key:"addShadow",value:function(t,e,i){var a=i.blur,s=i.top,r=i.left,o=i.color,n=i.opacity,l=t.flood(Array.isArray(o)?o[e]:o,n).composite(t.sourceAlpha,"in").offset(r,s).gaussianBlur(a).merge(t.source);return t.blend(t.source,l)}},{key:"dropShadow",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.top,s=e.left,r=e.blur,o=e.color,n=e.opacity,l=e.noUserSpaceOnUse,h=this.w;return t.unfilter(!0),x.isIE()&&"radialBar"===h.config.chart.type||(o=Array.isArray(o)?o[i]:o,t.filter((function(t){var e=null;e=x.isSafari()||x.isFirefox()||x.isIE()?t.flood(o,n).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r):t.flood(o,n).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r).merge(t.source),t.blend(t.source,e)})),l||t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)),t}},{key:"setSelectionFilter",value:function(t,e,i){var a=this.w;if(void 0!==a.globals.selectedDataPoints[e]&&a.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var s=a.config.states.active.filter;"none"!==s&&this.applyFilter(t,e,s.type,s.value)}}},{key:"_scaleFilterSize",value:function(t){!function(e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),t}(),m=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawLine",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"butt",l=this.w,h=l.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:a,stroke:s,"stroke-dasharray":r,"stroke-width":o,"stroke-linecap":n});return h}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w,d=c.globals.dom.Paper.rect();return d.attr({x:t,y:e,width:i>0?i:0,height:a>0?a:0,rx:s,ry:s,opacity:o,"stroke-width":null!==n?n:0,stroke:null!==l?l:"none","stroke-dasharray":h}),d.node.setAttribute("fill",r),d}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none",s=this.w,r=s.globals.dom.Paper.polygon(t).attr({fill:a,stroke:e,"stroke-width":i});return r}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;t<0&&(t=0);var a=i.globals.dom.Paper.circle(2*t);return null!==e&&a.attr(e),a}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,a=t.stroke,s=void 0===a?"#a8a8a8":a,r=t.strokeWidth,o=void 0===r?1:r,n=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,g=t.classes,u=t.strokeLinecap,f=void 0===u?null:u,p=t.strokeDashArray,x=void 0===p?0:p,b=this.w;return null===f&&(f=b.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(b.globals.gridHeight)),b.globals.dom.Paper.path(i).attr({fill:n,"fill-opacity":h,stroke:s,"stroke-opacity":d,"stroke-linecap":f,"stroke-width":o,"stroke-dasharray":x,class:g})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=e.globals.dom.Paper.group();return null!==t&&i.attr(t),i}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=null;return null===i?a=["L",t,e].join(" "):"H"===i?a=["H",t].join(" "):"V"===i&&(a=["V",e].join(" ")),a}},{key:"curve",value:function(t,e,i,a,s,r){var o=["C",t,e,i,a,s,r].join(" ");return o}},{key:"quadraticCurve",value:function(t,e,i,a){return["Q",t,e,i,a].join(" ")}},{key:"arc",value:function(t,e,i,a,s,r,o){var n=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l="A";n&&(l="a");var h=[l,t,e,i,a,s,r,o].join(" ");return h}},{key:"renderPaths",value:function(t){var i,a=t.j,s=t.realIndex,r=t.pathFrom,o=t.pathTo,n=t.stroke,l=t.strokeWidth,h=t.strokeLinecap,c=t.fill,d=t.animationDelay,g=t.initialSpeed,u=t.dataChangeSpeed,f=t.className,p=t.shouldClipToGrid,x=void 0===p||p,m=t.bindEventsOnPaths,y=void 0===m||m,w=t.drawShadow,k=void 0===w||w,A=this.w,S=new v(this.ctx),C=new b(this.ctx),L=this.w.config.chart.animations.enabled,P=L&&this.w.config.chart.animations.dynamicAnimation.enabled,M=!!(L&&!A.globals.resized||P&&A.globals.dataChanged&&A.globals.shouldAnimate);M?i=r:(i=o,A.globals.animationEnded=!0);var T=A.config.stroke.dashArray,I=0;I=Array.isArray(T)?T[s]:A.config.stroke.dashArray;var z=this.drawPath({d:i,stroke:n,strokeWidth:l,fill:c,fillOpacity:1,classes:f,strokeLinecap:h,strokeDashArray:I});if(z.attr("index",s),x&&z.attr({"clip-path":"url(#gridRectMask".concat(A.globals.cuid,")")}),"none"!==A.config.states.normal.filter.type)S.getDefaultFilter(z,s);else if(A.config.chart.dropShadow.enabled&&k&&(!A.config.chart.dropShadow.enabledOnSeries||A.config.chart.dropShadow.enabledOnSeries&&-1!==A.config.chart.dropShadow.enabledOnSeries.indexOf(s))){var X=A.config.chart.dropShadow;S.dropShadow(z,X,s)}y&&(z.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,z)),z.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,z)),z.node.addEventListener("mousedown",this.pathMouseDown.bind(this,z))),z.attr({pathTo:o,pathFrom:r});var E={el:z,j:a,realIndex:s,pathFrom:r,pathTo:o,fill:c,strokeWidth:l,delay:d};return!L||A.globals.resized||A.globals.dataChanged?!A.globals.resized&&A.globals.dataChanged||C.showDelayedElements():C.animatePathsGradually(e(e({},E),{},{speed:g})),A.globals.dataChanged&&P&&M&&C.animatePathsGradually(e(e({},E),{},{speed:u})),z}},{key:"drawPattern",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=this.w,o=r.globals.dom.Paper.pattern(e,i,(function(r){"horizontalLines"===t?r.line(0,0,i,0).stroke({color:a,width:s+1}):"verticalLines"===t?r.line(0,0,0,e).stroke({color:a,width:s+1}):"slantedLines"===t?r.line(0,0,e,i).stroke({color:a,width:s}):"squares"===t?r.rect(e,i).fill("none").stroke({color:a,width:s}):"circles"===t&&r.circle(e).fill("none").stroke({color:a,width:s})}));return o}},{key:"drawGradient",value:function(t,e,i,a,s){var r,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e.length<9&&0===e.indexOf("#")&&(e=x.hexToRgba(e,a)),i.length<9&&0===i.indexOf("#")&&(i=x.hexToRgba(i,s));var d=0,g=1,u=1,f=null;null!==n&&(d=void 0!==n[0]?n[0]/100:0,g=void 0!==n[1]?n[1]/100:1,u=void 0!==n[2]?n[2]/100:1,f=void 0!==n[3]?n[3]/100:null);var p=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"polarArea"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(r=null===l||0===l.length?c.globals.dom.Paper.gradient(p?"radial":"linear",(function(t){t.at(d,e,a),t.at(g,i,s),t.at(u,i,s),null!==f&&t.at(f,e,a)})):c.globals.dom.Paper.gradient(p?"radial":"linear",(function(t){(Array.isArray(l[h])?l[h]:l).forEach((function(e){t.at(e.offset/100,e.color,e.opacity)}))})),p){var b=c.globals.gridWidth/2,v=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?r.attr({gradientUnits:"userSpaceOnUse",cx:b,cy:v,r:o}):r.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?r.from(0,0).to(0,1):"diagonal"===t?r.from(0,0).to(1,1):"horizontal"===t?r.from(0,1).to(1,1):"diagonal2"===t&&r.from(1,0).to(0,1);return r}},{key:"getTextBasedOnMaxWidth",value:function(t){var e=t.text,i=t.maxWidth,a=t.fontSize,s=t.fontFamily,r=this.getTextRects(e,a,s),o=r.width/e.length,n=Math.floor(i/o);return i<r.width?e.slice(0,n-3)+"...":e}},{key:"drawText",value:function(t){var i=this,a=t.x,s=t.y,r=t.text,o=t.textAnchor,n=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.foreColor,d=t.opacity,g=t.maxWidth,u=t.cssClass,f=void 0===u?"":u,p=t.isPlainText,x=void 0===p||p,b=this.w;void 0===r&&(r="");var v=r;o||(o="start"),c&&c.length||(c=b.config.chart.foreColor),l=l||b.config.chart.fontFamily,h=h||"regular";var m,y={maxWidth:g,fontSize:n=n||"11px",fontFamily:l};return Array.isArray(r)?m=b.globals.dom.Paper.text((function(t){for(var a=0;a<r.length;a++)v=r[a],g&&(v=i.getTextBasedOnMaxWidth(e({text:r[a]},y))),0===a?t.tspan(v):t.tspan(v).newLine()})):(g&&(v=this.getTextBasedOnMaxWidth(e({text:r},y))),m=x?b.globals.dom.Paper.plain(r):b.globals.dom.Paper.text((function(t){return t.tspan(v)}))),m.attr({x:a,y:s,"text-anchor":o,"dominant-baseline":"auto","font-size":n,"font-family":l,"font-weight":h,fill:c,class:"apexcharts-text "+f}),m.node.style.fontFamily=l,m.node.style.opacity=d,m}},{key:"drawMarker",value:function(t,e,i){t=t||0;var a=i.pSize||0,s=null;if("square"===i.shape||"rect"===i.shape){var r=void 0===i.pRadius?a/2:i.pRadius;null!==e&&a||(a=0,r=0);var o=1.2*a+r,n=this.drawRect(o,o,o,o,r);n.attr({x:t-o/2,y:e-o/2,cx:t,cy:e,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),s=n}else"circle"!==i.shape&&i.shape||(x.isNumber(e)||(a=0,e=0),s=this.drawCircle(a,{cx:t,cy:e,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return s}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&!i.globals.isTouchDevice){var o=i.config.states.hover.filter;a.applyFilter(t,s,o.type,o.value)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&a.getDefaultFilter(t,s)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10),o="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[s].indexOf(r)>-1){var n=i.globals.selectedDataPoints[s].indexOf(r);i.globals.selectedDataPoints[s].splice(n,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.select(".apexcharts-series path").members,h=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,c=function(t){Array.prototype.forEach.call(t,(function(t){t.node.setAttribute("selected","false"),a.getDefaultFilter(t,s)}))};c(l),c(h)}t.node.setAttribute("selected","true"),o="true",void 0===i.globals.selectedDataPoints[s]&&(i.globals.selectedDataPoints[s]=[]),i.globals.selectedDataPoints[s].push(r)}if("true"===o){var d=i.config.states.active.filter;if("none"!==d)a.applyFilter(t,s,d.type,d.value);else if("none"!==i.config.states.hover.filter&&!i.globals.isTouchDevice){var g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}}else if("none"!==i.config.states.active.filter.type)if("none"===i.config.states.hover.filter.type||i.globals.isTouchDevice)a.getDefaultFilter(t,s);else{g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}),e&&this.ctx.events.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e={};return t&&"function"==typeof t.getBBox&&(e=t.getBBox()),{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,a){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w,o=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});a&&o.attr("transform",a),r.globals.dom.Paper.add(o);var n=o.bbox();return s||(n=o.node.getBoundingClientRect()),o.remove(),{width:n.width,height:n.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if("function"==typeof t.getComputedTextLength&&(t.textContent=e,e.length>0&&t.getComputedTextLength()>=i/1.1)){for(var a=e.length-3;a>0;a-=3)if(t.getSubStringLength(0,a)<=i/1.1)return void(t.textContent=e.substring(0,a)+"...");t.textContent="."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}(),y=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getStackedSeriesTotals",value:function(){var t=this.w,e=[];if(0===t.globals.series.length)return e;for(var i=0;i<t.globals.series[t.globals.maxValsInArrayIndex].length;i++){for(var a=0,s=0;s<t.globals.series.length;s++)void 0!==t.globals.series[s][i]&&(a+=t.globals.series[s][i]);e.push(a)}return t.globals.stackedSeriesTotals=e,e}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce((function(t,e){return t+e}),0):this.w.globals.series[t].reduce((function(t,e){return t+e}),0)}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter((function(t){return null!==t})):this.w.config.series[t].data.filter((function(t){return null!==t}))).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every((function(t,e,i){return t===i[0]}))}},{key:"getCategoryLabels",value:function(t){var e=this.w,i=t.slice();return e.config.xaxis.convertedCatToNumeric&&(i=t.map((function(t,i){return e.config.xaxis.labels.formatter(t-e.globals.minX+1)}))),i}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map((function(t){return t.length})).indexOf(Math.max.apply(Math,t.globals.series.map((function(t){return t.length}))))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach((function(t){e=Math.max(e,t)})),t.config.markers.discrete&&t.config.markers.discrete.length&&t.config.markers.discrete.forEach((function(t){e=Math.max(e,t.size)})),e>0&&(e+=t.config.markers.hover.sizeOffset+1),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map((function(t,e){var i=0;if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=t[a];else i+=t;return i}))}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map((function(a,s){for(var r=0,o=0;o<a.length;o++)i.globals.seriesX[s][o]>t&&i.globals.seriesX[s][o]<e&&(r+=a[o]);return r}))}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map((function(e,i){var a=[];if(Array.isArray(e))for(var s=0;s<e.length;s++){var r=t.globals.stackedSeriesTotals[s],o=0;r&&(o=100*e[s]/r),a.push(o)}else{var n=100*e/t.globals.seriesTotals.reduce((function(t,e){return t+e}),0);a.push(n)}return a}))}},{key:"getCalculatedRatios",value:function(){var t,e,i,a,s=this.w.globals,r=[],o=0,n=[],l=.1,h=0;if(s.yRange=[],s.isMultipleYAxis)for(var c=0;c<s.minYArr.length;c++)s.yRange.push(Math.abs(s.minYArr[c]-s.maxYArr[c])),n.push(0);else s.yRange.push(Math.abs(s.minY-s.maxY));s.xRange=Math.abs(s.maxX-s.minX),s.zRange=Math.abs(s.maxZ-s.minZ);for(var d=0;d<s.yRange.length;d++)r.push(s.yRange[d]/s.gridHeight);if(e=s.xRange/s.gridWidth,i=Math.abs(s.initialMaxX-s.initialMinX)/s.gridWidth,t=s.yRange/s.gridWidth,a=s.xRange/s.gridHeight,(o=s.zRange/s.gridHeight*16)||(o=1),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(s.hasNegs=!0),s.isMultipleYAxis){n=[];for(var g=0;g<r.length;g++)n.push(-s.minYArr[g]/r[g])}else n.push(-s.minY/r[0]),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(l=-s.minY/t,h=s.minX/e);return{yRatio:r,invertedYRatio:t,zRatio:o,xRatio:e,initialXRatio:i,invertedXRatio:a,baseLineInvertedY:l,baseLineY:n,baseLineX:h}}},{key:"getLogSeries",value:function(t){var e=this,i=this.w;return i.globals.seriesLog=t.map((function(t,a){return i.config.yaxis[a]&&i.config.yaxis[a].logarithmic?t.map((function(t){return null===t?null:e.getLogVal(i.config.yaxis[a].logBase,t,a)})):t})),i.globals.invalidLogScale?t:i.globals.seriesLog}},{key:"getBaseLog",value:function(t,e){return Math.log(e)/Math.log(t)}},{key:"getLogVal",value:function(t,e,i){if(0===e)return 0;var a=this.w,s=0===a.globals.minYArr[i]?-1:this.getBaseLog(t,a.globals.minYArr[i]),r=(0===a.globals.maxYArr[i]?0:this.getBaseLog(t,a.globals.maxYArr[i]))-s;return e<1?e/r:(this.getBaseLog(t,e)-s)/r}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,a=this.w.globals;return a.yLogRatio=t.slice(),a.logYRange=a.yRange.map((function(t,s){if(i.config.yaxis[s]&&e.w.config.yaxis[s].logarithmic){var r,o=-Number.MAX_VALUE,n=Number.MIN_VALUE;return a.seriesLog.forEach((function(t,e){t.forEach((function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(o=Math.max(t,o),n=Math.min(t,n))}))})),r=Math.pow(a.yRange[s],Math.abs(n-o)/a.yRange[s]),a.yLogRatio[s]=r/a.gridHeight,r}})),a.invalidLogScale?t.slice():a.yLogRatio}}],[{key:"checkComboSeries",value:function(t){var e=!1,i=0,a=0;return t.length&&void 0!==t[0].type&&t.forEach((function(t){"bar"!==t.type&&"column"!==t.type&&"candlestick"!==t.type&&"boxPlot"!==t.type||i++,void 0!==t.type&&a++})),a>0&&(e=!0),{comboBarCount:i,comboCharts:e}}},{key:"extendArrayProps",value:function(t,e,i){return e.yaxis&&(e=t.extendYAxis(e,i)),e.annotations&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),e.annotations.xaxis&&(e=t.extendXAxisAnnotations(e)),e.annotations.points&&(e=t.extendPointAnnotations(e))),e}}]),t}(),w=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e}return r(t,[{key:"setOrientations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;if("vertical"===t.label.orientation){var a=null!==e?e:0,s=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(null!==s){var r=s.getBoundingClientRect();s.setAttribute("x",parseFloat(s.getAttribute("x"))-r.height+4),"top"===t.label.position?s.setAttribute("y",parseFloat(s.getAttribute("y"))+r.width):s.setAttribute("y",parseFloat(s.getAttribute("y"))-r.width);var o=this.annoCtx.graphics.rotateAroundCenter(s),n=o.x,l=o.y;s.setAttribute("transform","rotate(-90 ".concat(n," ").concat(l,")"))}}}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w;if(!t||void 0===e.label.text||void 0!==e.label.text&&!String(e.label.text).trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),s=t.getBoundingClientRect(),r=e.label.style.padding.left,o=e.label.style.padding.right,n=e.label.style.padding.top,l=e.label.style.padding.bottom;"vertical"===e.label.orientation&&(n=e.label.style.padding.left,l=e.label.style.padding.right,r=e.label.style.padding.top,o=e.label.style.padding.bottom);var h=s.left-a.left-r,c=s.top-a.top-n,d=this.annoCtx.graphics.drawRect(h-i.globals.barPadForNumericAxis,c,s.width+r+o,s.height+n+l,e.label.borderRadius,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0);return e.id&&d.node.classList.add(e.id),d}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,a,s){var r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(a,"']"));if(r){var o=r.parentNode,n=t.addBackgroundToAnno(r,i);n&&(o.insertBefore(n.node,r),i.label.mouseEnter&&n.node.addEventListener("mouseenter",i.label.mouseEnter.bind(t,i)),i.label.mouseLeave&&n.node.addEventListener("mouseleave",i.label.mouseLeave.bind(t,i)),i.label.click&&n.node.addEventListener("click",i.label.click.bind(t,i)))}};e.config.annotations.xaxis.map((function(t,e){i(t,e,"xaxis")})),e.config.annotations.yaxis.map((function(t,e){i(t,e,"yaxis")})),e.config.annotations.points.map((function(t,e){i(t,e,"point")}))}},{key:"getY1Y2",value:function(t,e){var i,a="y1"===t?e.y:e.y2,s=this.w;if(this.annoCtx.invertAxis){var r=s.globals.labels.indexOf(a);s.config.xaxis.convertedCatToNumeric&&(r=s.globals.categoryLabels.indexOf(a));var o=s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(r+1)+")");o&&(i=parseFloat(o.getAttribute("y")))}else{var n;if(s.config.yaxis[e.yAxisIndex].logarithmic)n=(a=new y(this.annoCtx.ctx).getLogVal(a,e.yAxisIndex))/s.globals.yLogRatio[e.yAxisIndex];else n=(a-s.globals.minYArr[e.yAxisIndex])/(s.globals.yRange[e.yAxisIndex]/s.globals.gridHeight);i=s.globals.gridHeight-n,!e.marker||void 0!==e.y&&null!==e.y||(i=0),s.config.yaxis[e.yAxisIndex]&&s.config.yaxis[e.yAxisIndex].reversed&&(i=n)}return i}},{key:"getX1X2",value:function(t,e){var i=this.w,a=this.annoCtx.invertAxis?i.globals.minY:i.globals.minX,s=this.annoCtx.invertAxis?i.globals.maxY:i.globals.maxX,r=this.annoCtx.invertAxis?i.globals.yRange[0]:i.globals.xRange,o=(e.x-a)/(r/i.globals.gridWidth);this.annoCtx.inversedReversedAxis&&(o=(s-e.x)/(r/i.globals.gridWidth)),"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(o=this.getStringX(e.x));var n=(e.x2-a)/(r/i.globals.gridWidth);return this.annoCtx.inversedReversedAxis&&(n=(s-e.x2)/(r/i.globals.gridWidth)),"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(n=this.getStringX(e.x2)),void 0!==e.x&&null!==e.x||!e.marker||(o=i.globals.gridWidth),"x1"===t?o:n}},{key:"getStringX",value:function(t){var e=this.w,i=t;e.config.xaxis.convertedCatToNumeric&&e.globals.categoryLabels.length&&(t=e.globals.categoryLabels.indexOf(t)+1);var a=e.globals.labels.indexOf(t),s=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(a+1)+")");return s&&(i=parseFloat(s.getAttribute("x"))),i}}]),t}(),k=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.invertAxis=this.annoCtx.invertAxis,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addXaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=this.helpers.getX1X2("x1",t),o=t.label.text,n=t.strokeDashArray;if(x.isNumber(r)){if(null===t.x2||void 0===t.x2){var l=this.annoCtx.graphics.drawLine(r+t.offsetX,0+t.offsetY,r+t.offsetX,s.globals.gridHeight+t.offsetY,t.borderColor,n,t.borderWidth);e.appendChild(l.node),t.id&&l.node.classList.add(t.id)}else{if((a=this.helpers.getX1X2("x2",t))<r){var h=r;r=a,a=h}var c=this.annoCtx.graphics.drawRect(r+t.offsetX,0+t.offsetY,a-r,s.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,n);c.node.classList.add("apexcharts-annotation-rect"),c.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}var d="top"===t.label.position?4:s.globals.gridHeight,g=this.annoCtx.graphics.getTextRects(o,parseFloat(t.label.style.fontSize)),u=this.annoCtx.graphics.drawText({x:r+t.label.offsetX,y:d+t.label.offsetY-("vertical"===t.label.orientation?"top"===t.label.position?g.width/2-12:-g.width/2:0),text:o,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});u.attr({rel:i}),e.appendChild(u.node),this.annoCtx.helpers.setOrientations(t,i)}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map((function(e,a){t.addXaxisAnnotation(e,i.node,a)})),i}}]),t}(),A=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addYaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=t.strokeDashArray,o=this.helpers.getY1Y2("y1",t),n=t.label.text;if(null===t.y2||void 0===t.y2){var l=this.annoCtx.graphics.drawLine(0+t.offsetX,o+t.offsetY,this._getYAxisAnnotationWidth(t),o+t.offsetY,t.borderColor,r,t.borderWidth);e.appendChild(l.node),t.id&&l.node.classList.add(t.id)}else{if((a=this.helpers.getY1Y2("y2",t))>o){var h=o;o=a,a=h}var c=this.annoCtx.graphics.drawRect(0+t.offsetX,a+t.offsetY,this._getYAxisAnnotationWidth(t),o-a,0,t.fillColor,t.opacity,1,t.borderColor,r);c.node.classList.add("apexcharts-annotation-rect"),c.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}var d="right"===t.label.position?s.globals.gridWidth:0,g=this.annoCtx.graphics.drawText({x:d+t.label.offsetX,y:(null!=a?a:o)+t.label.offsetY-3,text:n,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});g.attr({rel:i}),e.appendChild(g.node)}},{key:"_getYAxisAnnotationWidth",value:function(t){var e=this.w;e.globals.gridWidth;return(t.width.indexOf("%")>-1?e.globals.gridWidth*parseInt(t.width,10)/100:parseInt(t.width,10))+t.offsetX}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.map((function(e,a){t.addYaxisAnnotation(e,i.node,a)})),i}}]),t}(),S=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addPointAnnotation",value:function(t,e,i){this.w;var a=this.helpers.getX1X2("x1",t),s=this.helpers.getY1Y2("y1",t);if(x.isNumber(a)){var r={pSize:t.marker.size,pointStrokeWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,pRadius:t.marker.radius,class:"apexcharts-point-annotation-marker ".concat(t.marker.cssClass," ").concat(t.id?t.id:"")},o=this.annoCtx.graphics.drawMarker(a+t.marker.offsetX,s+t.marker.offsetY,r);e.appendChild(o.node);var n=t.label.text?t.label.text:"",l=this.annoCtx.graphics.drawText({x:a+t.label.offsetX,y:s+t.label.offsetY-t.marker.size-parseFloat(t.label.style.fontSize)/1.6,text:n,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});if(l.attr({rel:i}),e.appendChild(l.node),t.customSVG.SVG){var h=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});h.attr({transform:"translate(".concat(a+t.customSVG.offsetX,", ").concat(s+t.customSVG.offsetY,")")}),h.node.innerHTML=t.customSVG.SVG,e.appendChild(h.node)}if(t.image.path){var c=t.image.width?t.image.width:20,d=t.image.height?t.image.height:20;o=this.annoCtx.addImage({x:a+t.image.offsetX-c/2,y:s+t.image.offsetY-d/2,width:c,height:d,path:t.image.path,appendTo:".apexcharts-point-annotations"})}t.mouseEnter&&o.node.addEventListener("mouseenter",t.mouseEnter.bind(this,t)),t.mouseLeave&&o.node.addEventListener("mouseleave",t.mouseLeave.bind(this,t)),t.click&&o.node.addEventListener("click",t.click.bind(this,t))}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map((function(e,a){t.addPointAnnotation(e,i.node,a)})),i}}]),t}();var C={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},L=function(){function t(){a(this,t),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={id:void 0,x:0,y:null,yAxisIndex:0,seriesIndex:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={id:void 0,y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={id:void 0,x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return r(t,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[C],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter:function(t){return new Date(t).toDateString()}},png:{filename:void 0},svg:{filename:void 0}},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,rangeBarOverlap:!0,rangeBarGroupRows:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal"}},bubble:{minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(t){return t}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)/t.globals.series.length+"%"}}}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(t){return t}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return null!==t?t:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,fillColors:void 0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",width:8,height:8,radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0,fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",cssClass:"",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t?t+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},group:{groups:[],style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),P=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.graphics=new m(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new w(this),this.xAxisAnnotations=new k(this),this.yAxisAnnotations=new A(this),this.pointsAnnotations=new S(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return r(t,[{key:"drawAxesAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts){for(var e=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),s=t.config.chart.animations.enabled,r=[e,i,a],o=[i.node,e.node,a.node],n=0;n<3;n++)t.globals.dom.elGraphical.add(r[n]),!s||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&t.globals.dataPoints>1&&o[n].classList.add("apexcharts-element-hidden"),t.globals.delayedElements.push({el:o[n],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var t=this;this.w.config.annotations.images.map((function(e,i){t.addImage(e,i)}))}},{key:"drawTextAnnos",value:function(){var t=this;this.w.config.annotations.texts.map((function(e,i){t.addText(e,i)}))}},{key:"addXaxisAnnotation",value:function(t,e,i){this.xAxisAnnotations.addXaxisAnnotation(t,e,i)}},{key:"addYaxisAnnotation",value:function(t,e,i){this.yAxisAnnotations.addYaxisAnnotation(t,e,i)}},{key:"addPointAnnotation",value:function(t,e,i){this.pointsAnnotations.addPointAnnotation(t,e,i)}},{key:"addText",value:function(t,e){var i=t.x,a=t.y,s=t.text,r=t.textAnchor,o=t.foreColor,n=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.cssClass,d=t.backgroundColor,g=t.borderWidth,u=t.strokeDashArray,f=t.borderRadius,p=t.borderColor,x=t.appendTo,b=void 0===x?".apexcharts-annotations":x,v=t.paddingLeft,m=void 0===v?4:v,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,S=t.paddingTop,C=void 0===S?2:S,L=this.w,P=this.graphics.drawText({x:i,y:a,text:s,textAnchor:r||"start",fontSize:n||"12px",fontWeight:h||"regular",fontFamily:l||L.config.chart.fontFamily,foreColor:o||L.config.chart.foreColor,cssClass:c}),M=L.globals.dom.baseEl.querySelector(b);M&&M.appendChild(P.node);var T=P.bbox();if(s){var I=this.graphics.drawRect(T.x-m,T.y-C,T.width+m+w,T.height+A+C,f,d||"transparent",1,g,p,u);M.insertBefore(I.node,P.node)}}},{key:"addImage",value:function(t,e){var i=this.w,a=t.path,s=t.x,r=void 0===s?0:s,o=t.y,n=void 0===o?0:o,l=t.width,h=void 0===l?20:l,c=t.height,d=void 0===c?20:c,g=t.appendTo,u=void 0===g?".apexcharts-annotations":g,f=i.globals.dom.Paper.image(a);f.size(h,d).move(r,n);var p=i.globals.dom.baseEl.querySelector(u);return p&&p.appendChild(f.node),f}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,a=t.context,s=t.type,r=t.contextMethod,o=a,n=o.w,l=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations")),h=l.childNodes.length+1,c=new L,d=Object.assign({},"xaxis"===s?c.xAxisAnnotation:"yaxis"===s?c.yAxisAnnotation:c.pointAnnotation),g=x.extend(d,e);switch(s){case"xaxis":this.addXaxisAnnotation(g,l,h);break;case"yaxis":this.addYaxisAnnotation(g,l,h);break;case"point":this.addPointAnnotation(g,l,h)}var u=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(h,"']")),f=this.helpers.addBackgroundToAnno(u,g);return f&&l.insertBefore(f.node,u),i&&n.globals.memory.methodsToExec.push({context:o,id:g.id?g.id:x.randomId(),method:r,label:"addAnnotation",params:e}),a}},{key:"clearAnnotations",value:function(t){var e=t.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");e.globals.memory.methodsToExec.map((function(t,i){"addText"!==t.label&&"addAnnotation"!==t.label||e.globals.memory.methodsToExec.splice(i,1)})),i=x.listToArray(i),Array.prototype.forEach.call(i,(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}))}},{key:"removeAnnotation",value:function(t,e){var i=t.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(e));a&&(i.globals.memory.methodsToExec.map((function(t,a){t.id===e&&i.globals.memory.methodsToExec.splice(a,1)})),Array.prototype.forEach.call(a,(function(t){t.parentElement.removeChild(t)})))}}]),t}(),M=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0}return r(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,a=parseInt(e.globals.gridWidth,10),s=parseInt(e.globals.gridHeight,10),r=a>s?a:s,o=t.image,n=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(n=i.fill.image.width+1,l=i.fill.image.height):(n=r+1,l=r):(n=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");m.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:n+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS(window.SVG.xlink,"href",o),m.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:n+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w;return("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||"heatmap"===e.config.chart.type||"treemap"===e.config.chart.type?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(t){var e=this.w;this.opts=t;var i,a,s,r=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var o=this.getFillColors()[this.seriesIndex];void 0!==e.globals.seriesColors[this.seriesIndex]&&(o=e.globals.seriesColors[this.seriesIndex]),"function"==typeof o&&(o=o({seriesIndex:this.seriesIndex,dataPointIndex:t.dataPointIndex,value:t.value,w:e}));var n=this.getFillType(this.seriesIndex),l=Array.isArray(r.fill.opacity)?r.fill.opacity[this.seriesIndex]:r.fill.opacity;t.color&&(o=t.color);var h=o;if(-1===o.indexOf("rgb")?o.length<9&&(h=x.hexToRgba(o,l)):o.indexOf("rgba")>-1&&(l=x.getOpacityFromRGBA(o)),t.opacity&&(l=t.opacity),"pattern"===n&&(a=this.handlePatternFill(a,o,l,h)),"gradient"===n&&(s=this.handleGradientFill(o,l,this.seriesIndex)),"image"===n){var c=r.fill.image.src,d=t.patternID?t.patternID:"";this.clippedImgArea({opacity:l,image:Array.isArray(c)?t.seriesNumber<c.length?c[t.seriesNumber]:c[0]:c,width:t.width?t.width:void 0,height:t.height?t.height:void 0,patternUnits:t.patternUnits,patternID:"pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d)}),i="url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d,")")}else i="gradient"===n?s:"pattern"===n?a:h;return t.solid&&(i=h),i}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,a=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors):"line"===e.chart.type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors),void 0!==i.fillColors&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(t,e,i,a){var s=this.w.config,r=this.opts,o=new m(this.ctx),n=void 0===s.fill.pattern.strokeWidth?Array.isArray(s.stroke.width)?s.stroke.width[this.seriesIndex]:s.stroke.width:Array.isArray(s.fill.pattern.strokeWidth)?s.fill.pattern.strokeWidth[this.seriesIndex]:s.fill.pattern.strokeWidth,l=e;Array.isArray(s.fill.pattern.style)?t=void 0!==s.fill.pattern.style[r.seriesNumber]?o.drawPattern(s.fill.pattern.style[r.seriesNumber],s.fill.pattern.width,s.fill.pattern.height,l,n,i):a:t=o.drawPattern(s.fill.pattern.style,s.fill.pattern.width,s.fill.pattern.height,l,n,i);return t}},{key:"handleGradientFill",value:function(t,e,i){var a,s=this.w.config,r=this.opts,o=new m(this.ctx),n=new x,l=s.fill.gradient.type,h=t,c=void 0===s.fill.gradient.opacityFrom?e:Array.isArray(s.fill.gradient.opacityFrom)?s.fill.gradient.opacityFrom[i]:s.fill.gradient.opacityFrom;h.indexOf("rgba")>-1&&(c=x.getOpacityFromRGBA(h));var d=void 0===s.fill.gradient.opacityTo?e:Array.isArray(s.fill.gradient.opacityTo)?s.fill.gradient.opacityTo[i]:s.fill.gradient.opacityTo;if(void 0===s.fill.gradient.gradientToColors||0===s.fill.gradient.gradientToColors.length)a="dark"===s.fill.gradient.shade?n.shadeColor(-1*parseFloat(s.fill.gradient.shadeIntensity),t.indexOf("rgb")>-1?x.rgb2hex(t):t):n.shadeColor(parseFloat(s.fill.gradient.shadeIntensity),t.indexOf("rgb")>-1?x.rgb2hex(t):t);else if(s.fill.gradient.gradientToColors[r.seriesNumber]){var g=s.fill.gradient.gradientToColors[r.seriesNumber];a=g,g.indexOf("rgba")>-1&&(d=x.getOpacityFromRGBA(g))}else a=t;if(s.fill.gradient.inverseColors){var u=h;h=a,a=u}return h.indexOf("rgb")>-1&&(h=x.rgb2hex(h)),a.indexOf("rgb")>-1&&(a=x.rgb2hex(a)),o.drawGradient(l,h,a,c,d,r.size,s.fill.gradient.stops,s.fill.gradient.colorStops,i)}}]),t}(),T=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map((function(e){return t.config.markers.size}))}},{key:"plotChartMarkers",value:function(t,e,i,a){var s,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=this.w,n=e,l=t,h=null,c=new m(this.ctx),d=o.config.markers.discrete&&o.config.markers.discrete.length;if((o.globals.markers.size[e]>0||r||d)&&(h=c.group({class:r||d?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(o.globals.cuid,")")),Array.isArray(l.x))for(var g=0;g<l.x.length;g++){var u=i;1===i&&0===g&&(u=0),1===i&&1===g&&(u=1);var f="apexcharts-marker";"line"!==o.config.chart.type&&"area"!==o.config.chart.type||o.globals.comboCharts||o.config.tooltip.intersect||(f+=" no-pointer-events");var p=Array.isArray(o.config.markers.size)?o.globals.markers.size[e]>0:o.config.markers.size>0;if(p||r||d){x.isNumber(l.y[g])?f+=" w".concat(x.randomId()):f="apexcharts-nullpoint";var b=this.getMarkerConfig({cssClass:f,seriesIndex:e,dataPointIndex:u});o.config.series[n].data[u]&&(o.config.series[n].data[u].fillColor&&(b.pointFillColor=o.config.series[n].data[u].fillColor),o.config.series[n].data[u].strokeColor&&(b.pointStrokeColor=o.config.series[n].data[u].strokeColor)),a&&(b.pSize=a),(s=c.drawMarker(l.x[g],l.y[g],b)).attr("rel",u),s.attr("j",u),s.attr("index",e),s.node.setAttribute("default-marker-size",b.pSize);var y=new v(this.ctx);y.setSelectionFilter(s,e,u),this.addEvents(s),h&&h.add(s)}else void 0===o.globals.pointsArray[e]&&(o.globals.pointsArray[e]=[]),o.globals.pointsArray[e].push([l.x[g],l.y[g]])}return h}},{key:"getMarkerConfig",value:function(t){var e=t.cssClass,i=t.seriesIndex,a=t.dataPointIndex,s=void 0===a?null:a,r=t.finishRadius,o=void 0===r?null:r,n=this.w,l=this.getMarkerStyle(i),h=n.globals.markers.size[i],c=n.config.markers;return null!==s&&c.discrete.length&&c.discrete.map((function(t){t.seriesIndex===i&&t.dataPointIndex===s&&(l.pointStrokeColor=t.strokeColor,l.pointFillColor=t.fillColor,h=t.size,l.pointShape=t.shape)})),{pSize:null===o?h:o,pRadius:c.radius,width:Array.isArray(c.width)?c.width[i]:c.width,height:Array.isArray(c.height)?c.height[i]:c.height,pointStrokeWidth:Array.isArray(c.strokeWidth)?c.strokeWidth[i]:c.strokeWidth,pointStrokeColor:l.pointStrokeColor,pointFillColor:l.pointFillColor,shape:l.pointShape||(Array.isArray(c.shape)?c.shape[i]:c.shape),class:e,pointStrokeOpacity:Array.isArray(c.strokeOpacity)?c.strokeOpacity[i]:c.strokeOpacity,pointStrokeDashArray:Array.isArray(c.strokeDashArray)?c.strokeDashArray[i]:c.strokeDashArray,pointFillOpacity:Array.isArray(c.fillOpacity)?c.fillOpacity[i]:c.fillOpacity,seriesIndex:i}}},{key:"addEvents",value:function(t){var e=this.w,i=new m(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("click",e.config.markers.onClick),t.node.addEventListener("dblclick",e.config.markers.onDblClick),t.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,a=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[t]:a,pointFillColor:Array.isArray(i)?i[t]:i}}}]),t}(),I=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled}return r(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new m(this.ctx),r=i.realIndex,o=i.pointsPos,n=i.zRatio,l=i.elParent,h=s.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(o.x))for(var c=0;c<o.x.length;c++){var d=e+1,g=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var u=0,f=a.globals.markers.size[r];if(n!==1/0){f=a.globals.seriesZ[r][d]/n;var p=a.config.plotOptions.bubble;p.minBubbleRadius&&f<p.minBubbleRadius&&(f=p.minBubbleRadius),p.maxBubbleRadius&&f>p.maxBubbleRadius&&(f=p.maxBubbleRadius)}a.config.chart.animations.enabled||(u=f);var x=o.x[c],b=o.y[c];if(u=u||0,null!==b&&void 0!==a.globals.series[r][d]||(g=!1),g){var v=this.drawPoint(x,b,u,f,r,d,e);h.add(v)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,a,s,r,o){var n=this.w,l=s,h=new b(this.ctx),c=new v(this.ctx),d=new M(this.ctx),g=new T(this.ctx),u=new m(this.ctx),f=g.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:l,dataPointIndex:r,finishRadius:"bubble"===n.config.chart.type||n.globals.comboCharts&&n.config.series[s]&&"bubble"===n.config.series[s].type?a:null});a=f.pSize;var p,x=d.fillPath({seriesNumber:s,dataPointIndex:r,color:f.pointFillColor,patternUnits:"objectBoundingBox",value:n.globals.series[s][o]});if("circle"===f.shape?p=u.drawCircle(i):"square"!==f.shape&&"rect"!==f.shape||(p=u.drawRect(0,0,f.width-f.pointStrokeWidth/2,f.height-f.pointStrokeWidth/2,f.pRadius)),n.config.series[l].data[r]&&n.config.series[l].data[r].fillColor&&(x=n.config.series[l].data[r].fillColor),p.attr({x:t-f.width/2-f.pointStrokeWidth/2,y:e-f.height/2-f.pointStrokeWidth/2,cx:t,cy:e,fill:x,"fill-opacity":f.pointFillOpacity,stroke:f.pointStrokeColor,r:a,"stroke-width":f.pointStrokeWidth,"stroke-dasharray":f.pointStrokeDashArray,"stroke-opacity":f.pointStrokeOpacity}),n.config.chart.dropShadow.enabled){var y=n.config.chart.dropShadow;c.dropShadow(p,y,s)}if(!this.initialAnim||n.globals.dataChanged||n.globals.resized)n.globals.animationEnded=!0;else{var w=n.config.chart.animations.speed;h.animateMarker(p,0,"circle"===f.shape?a:{width:f.width,height:f.height},w,n.globals.easing,(function(){window.setTimeout((function(){h.animationCompleted(p)}),100)}))}if(n.globals.dataChanged&&"circle"===f.shape)if(this.dynamicAnim){var k,A,S,C,L=n.config.chart.animations.dynamicAnimation.speed;null!=(C=n.globals.previousPaths[s]&&n.globals.previousPaths[s][o])&&(k=C.x,A=C.y,S=void 0!==C.r?C.r:a);for(var P=0;P<n.globals.collapsedSeries.length;P++)n.globals.collapsedSeries[P].index===s&&(L=1,a=0);0===t&&0===e&&(a=0),h.animateCircle(p,{cx:k,cy:A,r:S},{cx:t,cy:e,r:a},L,n.globals.easing)}else p.attr({r:a});return p.attr({rel:r,j:r,index:s,"default-marker-size":a}),c.setSelectionFilter(p,s,r),g.addEvents(p),p.node.classList.add("apexcharts-marker"),p}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize,10)/4}}}]),t}(),z=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"dataLabelsCorrection",value:function(t,e,i,a,s,r,o){var n=this.w,l=!1,h=new m(this.ctx).getTextRects(i,o),c=h.width,d=h.height;e<0&&(e=0),e>n.globals.gridHeight+d&&(e=n.globals.gridHeight+d/2),void 0===n.globals.dataLabelsRects[a]&&(n.globals.dataLabelsRects[a]=[]),n.globals.dataLabelsRects[a].push({x:t,y:e,width:c,height:d});var g=n.globals.dataLabelsRects[a].length-2,u=void 0!==n.globals.lastDrawnDataLabelsIndexes[a]?n.globals.lastDrawnDataLabelsIndexes[a][n.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(void 0!==n.globals.dataLabelsRects[a][g]){var f=n.globals.dataLabelsRects[a][u];(t>f.x+f.width+2||e>f.y+f.height+2||t+c<f.x)&&(l=!0)}return(0===s||r)&&(l=!0),{x:t,y:e,textRects:h,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t,e,i){var a=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,r=this.w,o=new m(this.ctx),n=r.config.dataLabels,l=0,h=0,c=i,d=null;if(!n.enabled||!Array.isArray(t.x))return d;d=o.group({class:"apexcharts-data-labels"});for(var g=0;g<t.x.length;g++)if(l=t.x[g]+n.offsetX,h=t.y[g]+n.offsetY+s,!isNaN(l)){1===i&&0===g&&(c=0),1===i&&1===g&&(c=1);var u=r.globals.series[e][c],f="",p=function(t){return r.config.dataLabels.formatter(t,{ctx:a.ctx,seriesIndex:e,dataPointIndex:c,w:r})};if("bubble"===r.config.chart.type){f=p(u=r.globals.seriesZ[e][c]),h=t.y[g];var x=new I(this.ctx),b=x.centerTextInBubble(h,e,c);h=b.y}else void 0!==u&&(f=p(u));this.plotDataLabelsText({x:l,y:h,text:f,i:e,j:c,parent:d,offsetCorrection:!0,dataLabelsConfig:r.config.dataLabels})}return d}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new m(this.ctx),a=t.x,s=t.y,r=t.i,o=t.j,n=t.text,l=t.textAnchor,h=t.fontSize,c=t.parent,d=t.dataLabelsConfig,g=t.color,u=t.alwaysDrawDataLabel,f=t.offsetCorrection;if(!(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(r)<0)){var p={x:a,y:s,drawnextLabel:!0,textRects:null};f&&(p=this.dataLabelsCorrection(a,s,n,r,o,u,parseInt(d.style.fontSize,10))),e.globals.zoomed||(a=p.x,s=p.y),p.textRects&&(a<-10-p.textRects.width||a>e.globals.gridWidth+p.textRects.width+10)&&(n="");var x=e.globals.dataLabels.style.colors[r];(("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||e.config.dataLabels.distributed)&&(x=e.globals.dataLabels.style.colors[o]),"function"==typeof x&&(x=x({series:e.globals.series,seriesIndex:r,dataPointIndex:o,w:e})),g&&(x=g);var b=d.offsetX,y=d.offsetY;if("bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||(b=0,y=0),p.drawnextLabel){var w=i.drawText({width:100,height:parseInt(d.style.fontSize,10),x:a+b,y:s+y,foreColor:x,textAnchor:l||d.textAnchor,text:n,fontSize:h||d.style.fontSize,fontFamily:d.style.fontFamily,fontWeight:d.style.fontWeight||"normal"});if(w.attr({class:"apexcharts-datalabel",cx:a,cy:s}),d.dropShadow.enabled){var k=d.dropShadow;new v(this.ctx).dropShadow(w,k)}c.add(w),void 0===e.globals.lastDrawnDataLabelsIndexes[r]&&(e.globals.lastDrawnDataLabelsIndexes[r]=[]),e.globals.lastDrawnDataLabelsIndexes[r].push(o)}}}},{key:"addBackgroundToDataLabel",value:function(t,e){var i=this.w,a=i.config.dataLabels.background,s=a.padding,r=a.padding/2,o=e.width,n=e.height,l=new m(this.ctx).drawRect(e.x-s,e.y-r/2,o+2*s,n+r,a.borderRadius,"transparent"===i.config.chart.background?"#fff":i.config.chart.background,a.opacity,a.borderWidth,a.borderColor);a.dropShadow.enabled&&new v(this.ctx).dropShadow(l,a.dropShadow);return l}},{key:"dataLabelsBackground",value:function(){var t=this.w;if("bubble"!==t.config.chart.type)for(var e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<e.length;i++){var a=e[i],s=a.getBBox(),r=null;if(s.width&&s.height&&(r=this.addBackgroundToDataLabel(a,s)),r){a.parentNode.insertBefore(r.node,a);var o=a.getAttribute("fill");t.config.chart.animations.enabled&&!t.globals.resized&&!t.globals.dataChanged?r.animate().attr({fill:o}):r.attr({fill:o}),a.setAttribute("fill",t.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var t=this.w,e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<e.length;a++)i&&i.insertBefore(e[a],i.nextSibling)}}]),t}(),X=function(){function t(e){a(this,t),this.w=e.w,this.barCtx=e}return r(t,[{key:"handleBarDataLabels",value:function(t){var e=t.x,i=t.y,a=t.y1,s=t.y2,r=t.i,o=t.j,n=t.realIndex,l=t.series,h=t.barHeight,c=t.barWidth,d=t.barYPosition,g=t.visibleSeries,u=t.renderedPath,f=this.w,p=new m(this.barCtx.ctx),x=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[n]:this.barCtx.strokeWidth,b=e+parseFloat(c*g),v=i+parseFloat(h*g);f.globals.isXNumeric&&!f.globals.isBarHorizontal&&(b=e+parseFloat(c*(g+1)),v=i+parseFloat(h*(g+1))-x);var y=e,w=i,k={},A=f.config.dataLabels,S=this.barCtx.barOptions.dataLabels;void 0!==d&&this.barCtx.isRangeBar&&(v=d,w=d);var C=A.offsetX,L=A.offsetY,P={width:0,height:0};if(f.config.dataLabels.enabled){var M=this.barCtx.series[r][o];P=p.getTextRects(f.globals.yLabelFormatters[0](M),parseFloat(A.style.fontSize))}var T={x:e,y:i,i:r,j:o,renderedPath:u,bcx:b,bcy:v,barHeight:h,barWidth:c,textRects:P,strokeWidth:x,dataLabelsX:y,dataLabelsY:w,barDataLabelsConfig:S,offX:C,offY:L};return k=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(T):this.calculateColumnsDataLabelsPosition(T),u.attr({cy:k.bcy,cx:k.bcx,j:o,val:l[r][o],barHeight:h,barWidth:c}),this.drawCalculatedDataLabels({x:k.dataLabelsX,y:k.dataLabelsY,val:this.barCtx.isRangeBar?[a,s]:l[r][o],i:n,j:o,barWidth:c,barHeight:h,textRects:P,dataLabelsConfig:A})}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e,i=this.w,a=t.i,s=t.j,r=t.y,o=t.bcx,n=t.barWidth,l=t.barHeight,h=t.textRects,c=t.dataLabelsY,d=t.barDataLabelsConfig,g=t.strokeWidth,u=t.offX,f=t.offY;l=Math.abs(l);var p="vertical"===i.config.plotOptions.bar.dataLabels.orientation;o-=g/2;var x=i.globals.gridWidth/i.globals.dataPoints;if(e=i.globals.isXNumeric?o-n/2+u:o-x+n/2+u,p){e=e+h.height/2-g/2-2}var b=this.barCtx.series[a][s]<0,v=r;switch(this.barCtx.isReversed&&(v=r-l+(b?2*l:0),r-=l),d.position){case"center":c=p?b?v+l/2+f:v+l/2-f:b?v-l/2+h.height/2+f:v+l/2+h.height/2-f;break;case"bottom":c=p?b?v+l+f:v+l-f:b?v-l+h.height+g+f:v+l-h.height/2+g-f;break;case"top":c=p?b?v+f:v-f:b?v-h.height/2-f:v+h.height+f}return i.config.chart.stacked||(c<0?c=0+g:c+h.height/3>i.globals.gridHeight&&(c=i.globals.gridHeight-g)),{bcx:o,bcy:r,dataLabelsX:e,dataLabelsY:c}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,a=t.i,s=t.j,r=t.bcy,o=t.barHeight,n=t.barWidth,l=t.textRects,h=t.dataLabelsX,c=t.strokeWidth,d=t.barDataLabelsConfig,g=t.offX,u=t.offY,f=e.globals.gridHeight/e.globals.dataPoints;n=Math.abs(n);var p=r-(this.barCtx.isRangeBar?0:f)+o/2+l.height/2+u-3,x=this.barCtx.series[a][s]<0,b=i;switch(this.barCtx.isReversed&&(b=i+n-(x?2*n:0),i=e.globals.gridWidth-n),d.position){case"center":h=x?b+n/2-g:Math.max(l.width/2,b-n/2)+g;break;case"bottom":h=x?b+n-c-Math.round(l.width/2)-g:b-n+c+Math.round(l.width/2)+g;break;case"top":h=x?b-c+Math.round(l.width/2)-g:b-c-Math.round(l.width/2)+g}return e.config.chart.stacked||(h<0?h=h+l.width+c:h+l.width/2>e.globals.gridWidth&&(h=e.globals.gridWidth-l.width-c)),{bcx:i,bcy:r,dataLabelsX:h,dataLabelsY:p}}},{key:"drawCalculatedDataLabels",value:function(t){var i=t.x,a=t.y,s=t.val,r=t.i,o=t.j,n=t.textRects,l=t.barHeight,h=t.barWidth,c=t.dataLabelsConfig,d=this.w,g="rotate(0)";"vertical"===d.config.plotOptions.bar.dataLabels.orientation&&(g="rotate(-90, ".concat(i,", ").concat(a,")"));var u=new z(this.barCtx.ctx),f=new m(this.barCtx.ctx),p=c.formatter,x=null,b=d.globals.collapsedSeriesIndices.indexOf(r)>-1;if(c.enabled&&!b){x=f.group({class:"apexcharts-data-labels",transform:g});var v="";void 0!==s&&(v=p(s,{seriesIndex:r,dataPointIndex:o,w:d}));var y=d.globals.series[r][o]<0,w=d.config.plotOptions.bar.dataLabels.position;if("vertical"===d.config.plotOptions.bar.dataLabels.orientation&&("top"===w&&(c.textAnchor=y?"end":"start"),"center"===w&&(c.textAnchor="middle"),"bottom"===w&&(c.textAnchor=y?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels)h<f.getTextRects(v,parseFloat(c.style.fontSize)).width&&(v="");d.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?n.width/1.6>Math.abs(h)&&(v=""):n.height/1.6>Math.abs(l)&&(v=""));var k=e({},c);this.barCtx.isHorizontal&&s<0&&("start"===c.textAnchor?k.textAnchor="end":"end"===c.textAnchor&&(k.textAnchor="start")),u.plotDataLabelsText({x:i,y:a,text:v,i:r,j:o,parent:x,dataLabelsConfig:k,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return x}}]),t}(),E=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.legendInactiveClass="legend-mouseover-inactive"}return r(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(x.escapeString(t),"']"))}},{key:"isSeriesHidden",value:function(t){var e=this.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex"),10);return{isHidden:e.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(t,e){var i=this.w;function a(i){for(var a=0;a<i.length;a++)i[a].index===e&&t.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(t){var e=this.isSeriesHidden(t);return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,e.isHidden),e.isHidden}},{key:"showSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!0)}},{key:"hideSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!1)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w,s=x.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):s=this.emptyCollapsedSeries(s),a.config.series=s,t&&(e&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(t){for(var e=this.w,i=0;i<t.length;i++)e.globals.collapsedSeriesIndices.indexOf(i)>-1&&(t[i].data=[]);return t}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w;e||(e=t.target);var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if("mousemove"===t.type){var s=parseInt(e.getAttribute("rel"),10)-1,r=null,o=null;i.globals.axisCharts||"radialBar"===i.config.chart.type?i.globals.axisCharts?(r=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s,"']")),o=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s,"']"))):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"']")):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"'] path"));for(var n=0;n<a.length;n++)a[n].classList.add(this.legendInactiveClass);null!==r&&(i.globals.axisCharts||r.parentNode.classList.remove(this.legendInactiveClass),r.classList.remove(this.legendInactiveClass),null!==o&&o.classList.remove(this.legendInactiveClass))}else if("mouseout"===t.type)for(var l=0;l<a.length;l++)a[l].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(t,e){var i=this,a=this.w,s=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),r=function(t){for(var e=0;e<s.length;e++)s[e].classList[t](i.legendInactiveClass)};if("mousemove"===t.type){var o=parseInt(e.getAttribute("rel"),10)-1;r("add"),function(t){for(var e=0;e<s.length;e++){var a=parseInt(s[e].getAttribute("val"),10);a>=t.from&&a<=t.to&&s[e].classList.remove(i.legendInactiveClass)}}(a.config.plotOptions.heatmap.colorScale.ranges[o])}else"mouseout"===t.type&&r("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",i=this.w,a=0;if(i.config.series.length>1)for(var s=i.config.series.map((function(e,a){var s=!1;return t&&(s="bar"===i.config.series[a].type||"column"===i.config.series[a].type),e.data&&e.data.length>0&&!s?a:-1})),r="asc"===e?0:s.length-1;"asc"===e?r<s.length:r>=0;"asc"===e?r++:r--)if(-1!==s[r]){a=s[r];break}return a}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,a){for(var s=e[i].childNodes,r={type:a,paths:[],realIndex:e[i].getAttribute("data:realIndex")},o=0;o<s.length;o++)if(s[o].hasAttribute("pathTo")){var n=s[o].getAttribute("pathTo");r.paths.push({d:n})}t.globals.previousPaths.push(r)}t.globals.previousPaths=[];["line","area","bar","rangebar","candlestick","radar"].forEach((function(i){for(var a,s=(a=i,t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a,"-series .apexcharts-series"))),r=0;r<s.length;r++)e(s,r,i)})),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(e){for(var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(e,"'] rect")),a=[],s=function(t){var e=function(e){return i[t].getAttribute(e)},s={x:parseFloat(e("x")),y:parseFloat(e("y")),width:parseFloat(e("width")),height:parseFloat(e("height"))};a.push({rect:s,color:i[t].getAttribute("color")})},r=0;r<i.length;r++)s(r);t.globals.previousPaths.push(a)},s=0;s<i.length;s++)a(s);t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(t){var e=this.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series"));if(i.length>0)for(var a=0;a<i.length;a++){for(var s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series[data\\:realIndex='").concat(a,"'] circle")),r=[],o=0;o<s.length;o++)r.push({x:s[o].getAttribute("cx"),y:s[o].getAttribute("cy"),r:s[o].getAttribute("r")});e.globals.previousPaths.push(r)}}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new m(this.ctx),a=t.globals.svgWidth/2,s=t.globals.svgHeight/2,r="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(a=10,r="start"):"right"===e.align&&(a=t.globals.svgWidth-10,r="end"),"top"===e.verticalAlign?s=50:"bottom"===e.verticalAlign&&(s=t.globals.svgHeight-50),a+=e.offsetX,s=s+parseInt(e.style.fontSize,10)+2+e.offsetY,void 0!==e.text&&""!==e.text){var o=i.drawText({x:a,y:s,text:e.text,textAnchor:r,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});t.globals.dom.Paper.add(o)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var a=0;a<t[e.globals.maxValsInArrayIndex].length;a++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map((function(t){return t.length>0?t:[]}));return t}}]),t}(),Y=function(){function t(e){a(this,t),this.w=e.w,this.barCtx=e}return r(t,[{key:"initVariables",value:function(t){var e=this.w;this.barCtx.series=t,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<t.length;i++)if(t[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=t[i].length),e.globals.isXNumeric)for(var a=0;a<t[i].length;a++)e.globals.seriesX[i][a]>e.globals.minX&&e.globals.seriesX[i][a]<e.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=e.globals.dataPoints;0===this.barCtx.seriesLen&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],this.barCtx.radiusOnSeriesNumber=t.length-1,e.globals.comboCharts||this.checkZeroSeries({series:t})}},{key:"initialPositions",value:function(){var t,e,i,a,s,r,o,n,l=this.w,h=l.globals.dataPoints;this.barCtx.isRangeBar&&(h=l.globals.labels.length);var c=this.barCtx.seriesLen;if(l.config.plotOptions.bar.rangeBarGroupRows&&(c=1),this.barCtx.isHorizontal)s=(i=l.globals.gridHeight/h)/c,l.globals.isXNumeric&&(s=(i=l.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),s=s*parseInt(this.barCtx.barOptions.barHeight,10)/100,n=this.barCtx.baseLineInvertedY+l.globals.padHorizontal+(this.barCtx.isReversed?l.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),e=(i-s*this.barCtx.seriesLen)/2;else{if(a=l.globals.gridWidth/this.barCtx.visibleItems,l.config.xaxis.convertedCatToNumeric&&(a=l.globals.gridWidth/l.globals.dataPoints),r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100,l.globals.isXNumeric){var d=this.barCtx.xRatio;l.config.xaxis.convertedCatToNumeric&&(d=this.barCtx.initialXRatio),l.globals.minXDiff&&.5!==l.globals.minXDiff&&l.globals.minXDiff/d>0&&(a=l.globals.minXDiff/d),(r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(r=1)}o=l.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?l.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0),t=l.globals.padHorizontal+(a-r*this.barCtx.seriesLen)/2}return{x:t,y:e,yDivision:i,xDivision:a,barHeight:s,barWidth:r,zeroH:o,zeroW:n}}},{key:"getPathFillColor",value:function(t,e,i,a){var s=this.w,r=new M(this.barCtx.ctx),o=null,n=this.barCtx.barOptions.distributed?i:e;this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map((function(a){t[e][i]>=a.from&&t[e][i]<=a.to&&(o=a.color)}));return s.config.series[e].data[i]&&s.config.series[e].data[i].fillColor&&(o=s.config.series[e].data[i].fillColor),r.fillPath({seriesNumber:this.barCtx.barOptions.distributed?n:a,dataPointIndex:i,color:o,value:t[e][i]})}},{key:"getStrokeWidth",value:function(t,e,i){var a=0,s=this.w;return void 0===this.barCtx.series[t][e]||null===this.barCtx.series[t][e]?this.barCtx.isNullValue=!0:this.barCtx.isNullValue=!1,s.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"barBackground",value:function(t){var e=t.j,i=t.i,a=t.x1,s=t.x2,r=t.y1,o=t.y2,n=t.elSeries,l=this.w,h=new m(this.barCtx.ctx),c=new E(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&c===i){e>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(e%=this.barCtx.barOptions.colors.backgroundBarColors.length);var d=this.barCtx.barOptions.colors.backgroundBarColors[e],g=h.drawRect(void 0!==a?a:0,void 0!==r?r:0,void 0!==s?s:l.globals.gridWidth,void 0!==o?o:l.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,d,this.barCtx.barOptions.colors.backgroundBarOpacity);n.add(g),g.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(t){var e=t.barWidth,i=t.barXPosition,a=t.yRatio,s=t.y1,r=t.y2,o=t.strokeWidth,n=t.series,l=t.realIndex,h=t.i,c=t.j,d=t.w,g=new m(this.barCtx.ctx);(o=Array.isArray(o)?o[l]:o)||(o=0);var u={barWidth:e,strokeWidth:o,yRatio:a,barXPosition:i,y1:s,y2:r},f=this.getRoundedBars(d,u,n,h,c),p=i,x=i+e,b=g.move(p,s),v=g.move(p,s),y=g.line(x-o,s);return d.globals.previousPaths.length>0&&(v=this.barCtx.getPreviousPath(l,c,!1)),b=b+g.line(p,f.y2)+f.pathWithRadius+g.line(x-o,f.y2)+y+y+"z",v=v+g.line(p,s)+y+y+y+y+y+g.line(p,s),d.config.chart.stacked&&(this.barCtx.yArrj.push(f.y2WithRadius),this.barCtx.yArrjF.push(Math.abs(s-f.y2WithRadius)),this.barCtx.yArrjVal.push(this.barCtx.series[h][c])),{pathTo:b,pathFrom:v}}},{key:"getBarpaths",value:function(t){var e=t.barYPosition,i=t.barHeight,a=t.x1,s=t.x2,r=t.strokeWidth,o=t.series,n=t.realIndex,l=t.i,h=t.j,c=t.w,d=new m(this.barCtx.ctx);(r=Array.isArray(r)?r[n]:r)||(r=0);var g={barHeight:i,strokeWidth:r,barYPosition:e,x2:s,x1:a},u=this.getRoundedBars(c,g,o,l,h),f=d.move(a,e),p=d.move(a,e);c.globals.previousPaths.length>0&&(p=this.barCtx.getPreviousPath(n,h,!1));var x=e,b=e+i,v=d.line(a,b-r);return f=f+d.line(u.x2,x)+u.pathWithRadius+d.line(u.x2,b-r)+v+v+"z",p=p+d.line(a,x)+v+v+v+v+v+d.line(a,x),c.config.chart.stacked&&(this.barCtx.xArrj.push(u.x2WithRadius),this.barCtx.xArrjF.push(Math.abs(a-u.x2WithRadius)),this.barCtx.xArrjVal.push(this.barCtx.series[l][h])),{pathTo:f,pathFrom:p}}},{key:"getRoundedBars",value:function(t,e,i,a,s){var r=new m(this.barCtx.ctx),o=0,n=t.config.plotOptions.bar.borderRadius,l=Array.isArray(n);l?o=n[a>n.length-1?n.length-1:a]:o=n;if(t.config.chart.stacked&&i.length>1&&a!==this.barCtx.radiusOnSeriesNumber&&!l&&(o=0),this.barCtx.isHorizontal){var h="",c=e.x2;if(Math.abs(e.x1-e.x2)<o&&(o=Math.abs(e.x1-e.x2)),void 0!==i[a][s]||null!==i[a][s]){var d=this.barCtx.isReversed?i[a][s]>0:i[a][s]<0;d&&(o*=-1),c-=o,h=r.quadraticCurve(c+o,e.barYPosition,c+o,e.barYPosition+(d?-1*o:o))+r.line(c+o,e.barYPosition+e.barHeight-e.strokeWidth-(d?-1*o:o))+r.quadraticCurve(c+o,e.barYPosition+e.barHeight-e.strokeWidth,c,e.barYPosition+e.barHeight-e.strokeWidth)}return{pathWithRadius:h,x2WithRadius:c+o,x2:c}}var g="",u=e.y2;if(Math.abs(e.y1-e.y2)<o&&(o=Math.abs(e.y1-e.y2)),void 0!==i[a][s]||null!==i[a][s]){var f=i[a][s]<0;f&&(o*=-1),u+=o,g=r.quadraticCurve(e.barXPosition,u-o,e.barXPosition+(f?-1*o:o),u-o)+r.line(e.barXPosition+e.barWidth-e.strokeWidth-(f?-1*o:o),u-o)+r.quadraticCurve(e.barXPosition+e.barWidth-e.strokeWidth,u-o,e.barXPosition+e.barWidth-e.strokeWidth,u)}return{pathWithRadius:g,y2WithRadius:u-o,y2:u}}},{key:"checkZeroSeries",value:function(t){for(var e=t.series,i=this.w,a=0;a<e.length;a++){for(var s=0,r=0;r<e[i.globals.maxValsInArrayIndex].length;r++)s+=e[a][r];0===s&&this.barCtx.zeroSerieses.push(a)}for(var o=e.length-1;o>=0;o--)this.barCtx.zeroSerieses.indexOf(o)>-1&&o===this.radiusOnSeriesNumber&&(this.barCtx.radiusOnSeriesNumber-=1);for(var n=e.length-1;n>=0;n--)i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber)>-1&&(this.barCtx.radiusOnSeriesNumber-=1)}},{key:"getXForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=i?e:null;return null!=t&&(a=e+t/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?t/this.barCtx.invertedYRatio:0)),a}},{key:"getYForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=i?e:null;return null!=t&&(a=e-t/this.barCtx.yRatio[this.barCtx.yaxisIndex]+2*(this.barCtx.isReversed?t/this.barCtx.yRatio[this.barCtx.yaxisIndex]:0)),a}},{key:"getGoalValues",value:function(t,e,i,a,s){var r=this,n=this.w,l=[];return n.globals.seriesGoals[a]&&n.globals.seriesGoals[a][s]&&Array.isArray(n.globals.seriesGoals[a][s])&&n.globals.seriesGoals[a][s].forEach((function(a){var s;l.push((o(s={},t,"x"===t?r.getXForValue(a.value,e,!1):r.getYForValue(a.value,i,!1)),o(s,"attrs",a),s))})),l}},{key:"drawGoalLine",value:function(t){var e=t.barXPosition,i=t.barYPosition,a=t.goalX,s=t.goalY,r=t.barWidth,o=t.barHeight,n=new m(this.barCtx.ctx),l=n.group({className:"apexcharts-bar-goals-groups"}),h=null;return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach((function(t){var e=void 0!==t.attrs.strokeHeight?t.attrs.strokeHeight:o/2,a=i+e+o/2;h=n.drawLine(t.x,a-2*e,t.x,a,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeWidth?t.attrs.strokeWidth:2,t.attrs.strokeLineCap),l.add(h)})):Array.isArray(s)&&s.forEach((function(t){var i=void 0!==t.attrs.strokeWidth?t.attrs.strokeWidth:r/2,a=e+i+r/2;h=n.drawLine(a-2*i,t.y,a,t.y,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeHeight?t.attrs.strokeHeight:2,t.attrs.strokeLineCap),l.add(h)})),l}}]),t}(),F=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w;var s=this.w;this.barOptions=s.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=s.config.stroke.width,this.isNullValue=!1,this.isRangeBar=s.globals.seriesRangeBar.length&&this.isHorizontal,this.xyRatios=i,null!==this.xyRatios&&(this.xRatio=i.xRatio,this.initialXRatio=i.initialXRatio,this.yRatio=i.yRatio,this.invertedXRatio=i.invertedXRatio,this.invertedYRatio=i.invertedYRatio,this.baseLineY=i.baseLineY,this.baseLineInvertedY=i.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0,this.barHelpers=new Y(this)}return r(t,[{key:"draw",value:function(t,i){var a=this.w,s=new m(this.ctx),r=new y(this.ctx,a);t=r.getLogSeries(t),this.series=t,this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);var o=s.group({class:"apexcharts-bar-series apexcharts-plot-series"});a.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var n=0,l=0;n<t.length;n++,l++){var h,c,d,g,u=void 0,f=void 0,p=[],b=[],v=a.globals.comboCharts?i[n]:n,w=s.group({class:"apexcharts-series",rel:n+1,seriesName:x.escapeString(a.globals.seriesNames[v]),"data:realIndex":v});this.ctx.series.addCollapsedClassToSeries(w,v),t[n].length>0&&(this.visibleI=this.visibleI+1);var k=0,A=0;this.yRatio.length>1&&(this.yaxisIndex=v),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed;var S=this.barHelpers.initialPositions();f=S.y,k=S.barHeight,c=S.yDivision,g=S.zeroW,u=S.x,A=S.barWidth,h=S.xDivision,d=S.zeroH,this.horizontal||b.push(u+A/2);for(var C=s.group({class:"apexcharts-datalabels","data:realIndex":v}),L=s.group({class:"apexcharts-bar-goals-markers",style:"pointer-events: none"}),P=0;P<a.globals.dataPoints;P++){var M=this.barHelpers.getStrokeWidth(n,P,v),T=null,I={indexes:{i:n,j:P,realIndex:v,bc:l},x:u,y:f,strokeWidth:M,elSeries:w};this.isHorizontal?(T=this.drawBarPaths(e(e({},I),{},{barHeight:k,zeroW:g,yDivision:c})),A=this.series[n][P]/this.invertedYRatio):(T=this.drawColumnPaths(e(e({},I),{},{xDivision:h,barWidth:A,zeroH:d})),k=this.series[n][P]/this.yRatio[this.yaxisIndex]);var z=this.barHelpers.drawGoalLine({barXPosition:T.barXPosition,barYPosition:T.barYPosition,goalX:T.goalX,goalY:T.goalY,barHeight:k,barWidth:A});z&&L.add(z),f=T.y,u=T.x,P>0&&b.push(u+A/2),p.push(f);var X=this.barHelpers.getPathFillColor(t,n,P,v);this.renderSeries({realIndex:v,pathFill:X,j:P,i:n,pathFrom:T.pathFrom,pathTo:T.pathTo,strokeWidth:M,elSeries:w,x:u,y:f,series:t,barHeight:k,barWidth:A,elDataLabelsWrap:C,elGoalsMarkers:L,visibleSeries:this.visibleI,type:"bar"})}a.globals.seriesXvalues[v]=b,a.globals.seriesYvalues[v]=p,o.add(w)}return o}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,a=t.lineFill,s=t.j,r=t.i,o=t.pathFrom,n=t.pathTo,l=t.strokeWidth,h=t.elSeries,c=t.x,d=t.y,g=t.y1,u=t.y2,f=t.series,p=t.barHeight,x=t.barWidth,b=t.barYPosition,y=t.elDataLabelsWrap,w=t.elGoalsMarkers,k=t.visibleSeries,A=t.type,S=this.w,C=new m(this.ctx);a||(a=this.barOptions.distributed?S.globals.stroke.colors[s]:S.globals.stroke.colors[e]),S.config.series[r].data[s]&&S.config.series[r].data[s].strokeColor&&(a=S.config.series[r].data[s].strokeColor),this.isNullValue&&(i="none");var L=s/S.config.chart.animations.animateGradually.delay*(S.config.chart.animations.speed/S.globals.dataPoints)/2.4,P=C.renderPaths({i:r,j:s,realIndex:e,pathFrom:o,pathTo:n,stroke:a,strokeWidth:l,strokeLineCap:S.config.stroke.lineCap,fill:i,animationDelay:L,initialSpeed:S.config.chart.animations.speed,dataChangeSpeed:S.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(A,"-area")});P.attr("clip-path","url(#gridRectMask".concat(S.globals.cuid,")"));var M=S.config.forecastDataPoints;M.count>0&&s>=S.globals.dataPoints-M.count&&(P.node.setAttribute("stroke-dasharray",M.dashArray),P.node.setAttribute("stroke-width",M.strokeWidth),P.node.setAttribute("fill-opacity",M.fillOpacity)),void 0!==g&&void 0!==u&&(P.attr("data-range-y1",g),P.attr("data-range-y2",u)),new v(this.ctx).setSelectionFilter(P,e,s),h.add(P);var T=new X(this).handleBarDataLabels({x:c,y:d,y1:g,y2:u,i:r,j:s,series:f,realIndex:e,barHeight:p,barWidth:x,barYPosition:b,renderedPath:P,visibleSeries:k});return null!==T&&y.add(T),h.add(y),w&&h.add(w),h}},{key:"drawBarPaths",value:function(t){var e=t.indexes,i=t.barHeight,a=t.strokeWidth,s=t.zeroW,r=t.x,o=t.y,n=t.yDivision,l=t.elSeries,h=this.w,c=e.i,d=e.j;h.globals.isXNumeric&&(o=(h.globals.seriesX[c][d]-h.globals.minX)/this.invertedXRatio-i);var g=o+i*this.visibleI;r=this.barHelpers.getXForValue(this.series[c][d],s);var u=this.barHelpers.getBarpaths({barYPosition:g,barHeight:i,x1:s,x2:r,strokeWidth:a,series:this.series,realIndex:e.realIndex,i:c,j:d,w:h});return h.globals.isXNumeric||(o+=n),this.barHelpers.barBackground({j:d,i:c,y1:g-i*this.visibleI,y2:i*this.seriesLen,elSeries:l}),{pathTo:u.pathTo,pathFrom:u.pathFrom,x:r,y:o,goalX:this.barHelpers.getGoalValues("x",s,null,c,d),barYPosition:g}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,o=t.zeroH,n=t.strokeWidth,l=t.elSeries,h=this.w,c=e.realIndex,d=e.i,g=e.j,u=e.bc;if(h.globals.isXNumeric){var f=c;h.globals.seriesX[c].length||(f=h.globals.maxValsInArrayIndex),i=(h.globals.seriesX[f][g]-h.globals.minX)/this.xRatio-r*this.seriesLen/2}var p=i+r*this.visibleI;a=this.barHelpers.getYForValue(this.series[d][g],o);var x=this.barHelpers.getColumnPaths({barXPosition:p,barWidth:r,y1:o,y2:a,strokeWidth:n,series:this.series,realIndex:e.realIndex,i:d,j:g,w:h});return h.globals.isXNumeric||(i+=s),this.barHelpers.barBackground({bc:u,j:g,i:d,x1:p-n/2-r*this.visibleI,x2:r*this.seriesLen+n/2,elSeries:l}),{pathTo:x.pathTo,pathFrom:x.pathFrom,x:i,y:a,goalY:this.barHelpers.getGoalValues("y",null,o,d,g),barXPosition:p}}},{key:"getPreviousPath",value:function(t,e){for(var i,a=this.w,s=0;s<a.globals.previousPaths.length;s++){var r=a.globals.previousPaths[s];r.paths&&r.paths.length>0&&parseInt(r.realIndex,10)===parseInt(t,10)&&void 0!==a.globals.previousPaths[s].paths[e]&&(i=a.globals.previousPaths[s].paths[e].d)}return i}}]),t}(),R=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return r(t,[{key:"isValidDate",value:function(t){return!isNaN(this.parseDate(t))}},{key:"getTimeStamp",value:function(t){return Date.parse(t)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toISOString().substr(0,25)).getTime():new Date(t).getTime():t}},{key:"getDate",value:function(t){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toUTCString()):new Date(t)}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(t){return Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(t,e){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,s=["\0"].concat(u(i.months)),r=["\x01"].concat(u(i.shortMonths)),o=["\x02"].concat(u(i.days)),n=["\x03"].concat(u(i.shortDays));function l(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}var h=a?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+h)).replace(/(^|[^\\])yy/g,"$1"+h.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+h);var c=(a?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+s[0])).replace(/(^|[^\\])MMM/g,"$1"+r[0])).replace(/(^|[^\\])MM/g,"$1"+l(c))).replace(/(^|[^\\])M/g,"$1"+c);var d=a?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+n[0])).replace(/(^|[^\\])dd/g,"$1"+l(d))).replace(/(^|[^\\])d/g,"$1"+d);var g=a?t.getUTCHours():t.getHours(),f=g>12?g-12:0===g?12:g;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+l(g))).replace(/(^|[^\\])H/g,"$1"+g)).replace(/(^|[^\\])hh+/g,"$1"+l(f))).replace(/(^|[^\\])h/g,"$1"+f);var p=a?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+l(p))).replace(/(^|[^\\])m/g,"$1"+p);var x=a?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+l(x))).replace(/(^|[^\\])s/g,"$1"+x);var b=a?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+l(b,3)),b=Math.round(b/10),e=e.replace(/(^|[^\\])ff/g,"$1"+l(b)),b=Math.round(b/10);var v=g<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+b)).replace(/(^|[^\\])TT+/g,"$1"+v)).replace(/(^|[^\\])T/g,"$1"+v.charAt(0));var m=v.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+m)).replace(/(^|[^\\])t/g,"$1"+m.charAt(0));var y=-t.getTimezoneOffset(),w=a||!y?"Z":y>0?"+":"-";if(!a){var k=(y=Math.abs(y))%60;w+=l(Math.floor(y/60))+":"+l(k)}e=e.replace(/(^|[^\\])K/g,"$1"+w);var A=(a?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(o[0],"g"),o[A])).replace(new RegExp(n[0],"g"),n[A])).replace(new RegExp(s[0],"g"),s[c])).replace(new RegExp(r[0],"g"),r[c])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e,i){var a=this.w;void 0!==a.config.xaxis.min&&(t=a.config.xaxis.min),void 0!==a.config.xaxis.max&&(e=a.config.xaxis.max);var s=this.getDate(t),r=this.getDate(e),o=this.formatDate(s,"yyyy MM dd HH mm ss fff").split(" "),n=this.formatDate(r,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(o[6],10),maxMillisecond:parseInt(n[6],10),minSecond:parseInt(o[5],10),maxSecond:parseInt(n[5],10),minMinute:parseInt(o[4],10),maxMinute:parseInt(n[4],10),minHour:parseInt(o[3],10),maxHour:parseInt(n[3],10),minDate:parseInt(o[2],10),maxDate:parseInt(n[2],10),minMonth:parseInt(o[1],10)-1,maxMonth:parseInt(n[1],10)-1,minYear:parseInt(o[0],10),maxYear:parseInt(n[0],10)}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var a=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=x.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),H=function(t){n(s,t);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this.w,s=new m(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=t,this.seriesRangeStart=a.globals.seriesRangeStart,this.seriesRangeEnd=a.globals.seriesRangeEnd,this.barHelpers.initVariables(t);for(var r=s.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),o=0;o<t.length;o++){var n,l,h,c=void 0,d=void 0,g=void 0,u=a.globals.comboCharts?i[o]:o,f=s.group({class:"apexcharts-series",seriesName:x.escapeString(a.globals.seriesNames[u]),rel:o+1,"data:realIndex":u});this.ctx.series.addCollapsedClassToSeries(f,u),t[o].length>0&&(this.visibleI=this.visibleI+1);var p=0,b=0;this.yRatio.length>1&&(this.yaxisIndex=u);var v=this.barHelpers.initialPositions();d=v.y,h=v.zeroW,c=v.x,b=v.barWidth,n=v.xDivision,l=v.zeroH;for(var y=s.group({class:"apexcharts-datalabels","data:realIndex":u}),w=s.group({class:"apexcharts-rangebar-goals-markers",style:"pointer-events: none"}),k=0;k<a.globals.dataPoints;k++){var A=this.barHelpers.getStrokeWidth(o,k,u),S=this.seriesRangeStart[o][k],C=this.seriesRangeEnd[o][k],L=null,P=null,M={x:c,y:d,strokeWidth:A,elSeries:f};if(g=v.yDivision,p=v.barHeight,this.isHorizontal){P=d+p*this.visibleI;var T=this.seriesLen;a.config.plotOptions.bar.rangeBarGroupRows&&(T=1);var I=(g-p*T)/2;if(void 0===a.config.series[o].data[k])break;if(a.config.series[o].data[k].x){var z=this.detectOverlappingBars({i:o,j:k,barYPosition:P,srty:I,barHeight:p,yDivision:g,initPositions:v});p=z.barHeight,P=z.barYPosition}b=(L=this.drawRangeBarPaths(e({indexes:{i:o,j:k,realIndex:u},barHeight:p,barYPosition:P,zeroW:h,yDivision:g,y1:S,y2:C},M))).barWidth}else p=(L=this.drawRangeColumnPaths(e({indexes:{i:o,j:k,realIndex:u},zeroH:l,barWidth:b,xDivision:n},M))).barHeight;var X=this.barHelpers.drawGoalLine({barXPosition:L.barXPosition,barYPosition:P,goalX:L.goalX,goalY:L.goalY,barHeight:p,barWidth:b});X&&w.add(X),d=L.y,c=L.x;var E=this.barHelpers.getPathFillColor(t,o,k,u),Y=a.globals.stroke.colors[u];this.renderSeries({realIndex:u,pathFill:E,lineFill:Y,j:k,i:o,x:c,y:d,y1:S,y2:C,pathFrom:L.pathFrom,pathTo:L.pathTo,strokeWidth:A,elSeries:f,series:t,barHeight:p,barYPosition:P,barWidth:b,elDataLabelsWrap:y,elGoalsMarkers:w,visibleSeries:this.visibleI,type:"rangebar"})}r.add(f)}return r}},{key:"detectOverlappingBars",value:function(t){var e=t.i,i=t.j,a=t.barYPosition,s=t.srty,r=t.barHeight,o=t.yDivision,n=t.initPositions,l=this.w,h=[],c=l.config.series[e].data[i].rangeName,d=l.config.series[e].data[i].x,g=l.globals.labels.indexOf(d),u=l.globals.seriesRangeBar[e].findIndex((function(t){return t.x===d&&t.overlaps.length>0}));return a=l.config.plotOptions.bar.rangeBarGroupRows?s+o*g:s+r*this.visibleI+o*g,u>-1&&!l.config.plotOptions.bar.rangeBarOverlap&&(h=l.globals.seriesRangeBar[e][u].overlaps).indexOf(c)>-1&&(a=(r=n.barHeight/h.length)*this.visibleI+o*(100-parseInt(this.barOptions.barHeight,10))/100/2+r*(this.visibleI+h.indexOf(c))+o*g),{barYPosition:a,barHeight:r}}},{key:"drawRangeColumnPaths",value:function(t){var e=t.indexes,i=t.x;t.strokeWidth;var a=t.xDivision,s=t.barWidth,r=t.zeroH,o=this.w,n=e.i,l=e.j,h=this.yRatio[this.yaxisIndex],c=e.realIndex,d=this.getRangeValue(c,l),g=Math.min(d.start,d.end),u=Math.max(d.start,d.end);o.globals.isXNumeric&&(i=(o.globals.seriesX[n][l]-o.globals.minX)/this.xRatio-s/2);var f=i+s*this.visibleI;void 0===this.series[n][l]||null===this.series[n][l]?g=r:(g=r-g/h,u=r-u/h);var p=Math.abs(u-g),x=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:s,y1:g,y2:u,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:e.realIndex,i:c,j:l,w:o});return o.globals.isXNumeric||(i+=a),{pathTo:x.pathTo,pathFrom:x.pathFrom,barHeight:p,x:i,y:u,goalY:this.barHelpers.getGoalValues("y",null,r,n,l),barXPosition:f}}},{key:"drawRangeBarPaths",value:function(t){var e=t.indexes,i=t.y,a=t.y1,s=t.y2,r=t.yDivision,o=t.barHeight,n=t.barYPosition,l=t.zeroW,h=this.w,c=l+a/this.invertedYRatio,d=l+s/this.invertedYRatio,g=Math.abs(d-c),u=this.barHelpers.getBarpaths({barYPosition:n,barHeight:o,x1:c,x2:d,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:e.realIndex,realIndex:e.realIndex,j:e.j,w:h});return h.globals.isXNumeric||(i+=r),{pathTo:u.pathTo,pathFrom:u.pathFrom,barWidth:g,x:d,goalX:this.barHelpers.getGoalValues("x",l,null,e.realIndex,e.j),y:i}}},{key:"getRangeValue",value:function(t,e){var i=this.w;return{start:i.globals.seriesRangeStart[t][e],end:i.globals.seriesRangeEnd[t][e]}}},{key:"getTooltipValues",value:function(t){var e=t.ctx,i=t.seriesIndex,a=t.dataPointIndex,s=t.y1,r=t.y2,o=t.w,n=o.globals.seriesRangeStart[i][a],l=o.globals.seriesRangeEnd[i][a],h=o.globals.labels[a],c=o.config.series[i].name?o.config.series[i].name:"",d=o.config.tooltip.y.formatter,g=o.config.tooltip.y.title.formatter,u={w:o,seriesIndex:i,dataPointIndex:a,start:n,end:l};"function"==typeof g&&(c=g(c,u)),Number.isFinite(s)&&Number.isFinite(r)&&(n=s,l=r,o.config.series[i].data[a].x&&(h=o.config.series[i].data[a].x+":"),"function"==typeof d&&(h=d(h,u)));var f="",p="",x=o.globals.colors[i];if(void 0===o.config.tooltip.x.formatter)if("datetime"===o.config.xaxis.type){var b=new R(e);f=b.formatDate(b.getDate(n),o.config.tooltip.x.format),p=b.formatDate(b.getDate(l),o.config.tooltip.x.format)}else f=n,p=l;else f=o.config.tooltip.x.formatter(n),p=o.config.tooltip.x.formatter(l);return{start:n,end:l,startVal:f,endVal:p,ylabel:h,color:x,seriesName:c}}},{key:"buildCustomTooltipHTML",value:function(t){var e=t.color,i=t.seriesName;return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+e+'">'+(i||"")+'</span></div><div> <span class="category">'+t.ylabel+' </span> <span class="value start-value">'+t.start+'</span> <span class="separator">-</span> <span class="value end-value">'+t.end+"</span></div></div>"}}]),s}(F),D=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0;return x.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){var t=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var t=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:5,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(t,e){e.ctx;var i=e.seriesIndex,a=e.dataPointIndex,s=e.w,r=s.globals.seriesRangeStart[i][a];return s.globals.seriesRangeEnd[i][a]-r},background:{enabled:!1},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(t){return t.w.config.plotOptions&&t.w.config.plotOptions.bar&&t.w.config.plotOptions.bar.horizontal?function(t){var e=new H(t.ctx,null),i=e.getTooltipValues(t),a=i.color,s=i.seriesName,r=i.ylabel,o=i.startVal,n=i.endVal;return e.buildCustomTooltipHTML({color:a,seriesName:s,ylabel:r,start:o,end:n})}(t):function(t){var e=new H(t.ctx,null),i=e.getTooltipValues(t),a=i.color,s=i.seriesName,r=i.ylabel,o=i.start,n=i.end;return e.buildCustomTooltipHTML({color:a,seriesName:s,ylabel:r,start:o,end:n})}(t)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4,fill:{type:"solid",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}}},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(t){return x.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(t){t.dataLabels=t.dataLabels||{},t.dataLabels.formatter=t.dataLabels.formatter||void 0;var e=t.dataLabels.formatter;return t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})),"bar"===t.chart.type&&(t.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t}),t}},{key:"convertCatToNumeric",value:function(t){return t.xaxis.convertedCatToNumeric=!0,t}},{key:"convertCatToNumericXaxis",value:function(t,e,i){t.xaxis.type="numeric",t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return x.isNumber(t)?Math.floor(t):t};var a=t.xaxis.labels.formatter,s=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(s=i.map((function(t){return Array.isArray(t)?t:String(t)}))),s&&s.length&&(t.xaxis.labels.formatter=function(t){return x.isNumber(t)?a(s[Math.floor(t)-1]):a(t)}),t.xaxis.categories=[],t.labels=[],t.xaxis.tickAmount=t.xaxis.tickAmount||"dataPoints",t}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"polarArea",value:function(){return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount:6,{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{labels:{formatter:function(t){return t},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}},{key:"_getBoxTooltip",value:function(t,e,i,a,s){var r=t.globals.seriesCandleO[e][i],o=t.globals.seriesCandleH[e][i],n=t.globals.seriesCandleM[e][i],l=t.globals.seriesCandleL[e][i],h=t.globals.seriesCandleC[e][i];return t.config.series[e].type&&t.config.series[e].type!==s?'<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name?t.config.series[e].name:"series-"+(e+1),": <strong>").concat(t.globals.series[e][i],"</strong>\n        </div>"):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type,'">')+"<div>".concat(a[0],': <span class="value">')+r+"</span></div>"+"<div>".concat(a[1],': <span class="value">')+o+"</span></div>"+(n?"<div>".concat(a[2],': <span class="value">')+n+"</span></div>":"")+"<div>".concat(a[3],': <span class="value">')+l+"</span></div>"+"<div>".concat(a[4],': <span class="value">')+h+"</span></div></div>"}}]),t}(),N=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"init",value:function(t){var e=t.responsiveOverride,a=this.opts,s=new L,r=new D(a);this.chartType=a.chart.type,"histogram"===this.chartType&&(a.chart.type="bar",a=x.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},a)),a=this.extendYAxis(a),a=this.extendAnnotations(a);var o=s.init(),n={};if(a&&"object"===i(a)){var l={};l=-1!==["line","area","bar","candlestick","boxPlot","rangeBar","histogram","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(a.chart.type)?r[a.chart.type]():r.line(),a.chart.brush&&a.chart.brush.enabled&&(l=r.brush(l)),a.chart.stacked&&"100%"===a.chart.stackType&&(a=r.stacked100(a)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(a),a.xaxis=a.xaxis||window.Apex.xaxis||{},e||(a.xaxis.convertedCatToNumeric=!1),((a=this.checkForCatToNumericXAxis(this.chartType,l,a)).chart.sparkline&&a.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(l=r.sparkline(l)),n=x.extend(o,l)}var h=x.extend(n,window.Apex);return o=x.extend(h,a),o=this.handleUserInputErrors(o)}},{key:"checkForCatToNumericXAxis",value:function(t,e,i){var a=new D(i),s=("bar"===t||"boxPlot"===t)&&i.plotOptions&&i.plotOptions.bar&&i.plotOptions.bar.horizontal,r="pie"===t||"polarArea"===t||"donut"===t||"radar"===t||"radialBar"===t||"heatmap"===t,o="datetime"!==i.xaxis.type&&"numeric"!==i.xaxis.type,n=i.xaxis.tickPlacement?i.xaxis.tickPlacement:e.xaxis&&e.xaxis.tickPlacement;return s||r||!o||"between"===n||(i=a.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(t,e){var i=new L;(void 0===t.yaxis||!t.yaxis||Array.isArray(t.yaxis)&&0===t.yaxis.length)&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=x.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[x.extend(i.yAxis,t.yaxis)]:t.yaxis=x.extendArray(t.yaxis,i.yAxis);var a=!1;t.yaxis.forEach((function(t){t.logarithmic&&(a=!0)}));var s=t.series;return e&&!s&&(s=e.config.series),a&&s.length!==t.yaxis.length&&s.length&&(t.yaxis=s.map((function(e,a){if(e.name||(s[a].name="series-".concat(a+1)),t.yaxis[a])return t.yaxis[a].seriesName=s[a].name,t.yaxis[a];var r=x.extend(i.yAxis,t.yaxis[0]);return r.show=!1,r}))),a&&s.length>1&&s.length!==t.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new L;return t.annotations.yaxis=x.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new L;return t.annotations.xaxis=x.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new L;return t.annotations.points=x.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkForDarkTheme",value:function(t){t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip={}),"light"!==t.tooltip.theme&&(t.tooltip.theme="dark"),t.chart.foreColor||(t.chart.foreColor="#f6f7f8"),t.chart.background||(t.chart.background="#424242"),t.theme.palette||(t.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if("bar"===e.chart.type&&e.plotOptions.bar.horizontal){if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&"barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(e.xaxis.crosshairs.width="tickWidth"),"candlestick"!==e.chart.type&&"boxPlot"!==e.chart.type||e.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(e.chart.type," chart is not supported.")),e.yaxis[0].reversed=!1),e}}]),t}(),O=function(){function t(){a(this,t)}return r(t,[{key:"initGlobalVars",value:function(t){t.series=[],t.seriesCandleO=[],t.seriesCandleH=[],t.seriesCandleM=[],t.seriesCandleL=[],t.seriesCandleC=[],t.seriesRangeStart=[],t.seriesRangeEnd=[],t.seriesRangeBar=[],t.seriesPercent=[],t.seriesGoals=[],t.seriesX=[],t.seriesZ=[],t.seriesNames=[],t.seriesTotals=[],t.seriesLog=[],t.seriesColors=[],t.stackedSeriesTotals=[],t.seriesXvalues=[],t.seriesYvalues=[],t.labels=[],t.hasGroups=!1,t.groups=[],t.categoryLabels=[],t.timescaleLabels=[],t.noLabelsProvided=!1,t.resizeTimer=null,t.selectionResizeTimer=null,t.delayedElements=[],t.pointsArray=[],t.dataLabelsRects=[],t.isXNumeric=!1,t.xaxisLabelsCount=0,t.skipLastTimelinelabel=!1,t.skipFirstTimelinelabel=!1,t.isDataXYZ=!1,t.isMultiLineX=!1,t.isMultipleYAxis=!1,t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE,t.minYArr=[],t.maxYArr=[],t.maxX=-Number.MAX_VALUE,t.minX=Number.MAX_VALUE,t.initialMaxX=-Number.MAX_VALUE,t.initialMinX=Number.MAX_VALUE,t.maxDate=0,t.minDate=Number.MAX_VALUE,t.minZ=Number.MAX_VALUE,t.maxZ=-Number.MAX_VALUE,t.minXDiff=Number.MAX_VALUE,t.yAxisScale=[],t.xAxisScale=null,t.xAxisTicksPositions=[],t.yLabelsCoords=[],t.yTitleCoords=[],t.barPadForNumericAxis=0,t.padHorizontal=0,t.xRange=0,t.yRange=[],t.zRange=0,t.dataPoints=0,t.xTickAmount=0}},{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,invalidLogScale:!1,ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null}}},{key:"init",value:function(t){var e=this.globalVars(t);return this.initGlobalVars(e),e.initialConfig=x.extend({},t),e.initialSeries=x.clone(t.series),e.lastXAxis=x.clone(e.initialConfig.xaxis),e.lastYAxis=x.clone(e.initialConfig.yaxis),e}}]),t}(),W=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"init",value:function(){var t=new N(this.opts).init({responsiveOverride:!1});return{config:t,globals:(new O).init(t)}}}]),t}(),B=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new y(this.ctx)}return r(t,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new E(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new E(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){for(var i=this.w.config,a=this.w.globals,s="boxPlot"===i.chart.type||"boxPlot"===i.series[e].type,r=0;r<t[e].data.length;r++)if(void 0!==t[e].data[r][1]&&(Array.isArray(t[e].data[r][1])&&4===t[e].data[r][1].length&&!s?this.twoDSeries.push(x.parseNumber(t[e].data[r][1][3])):t[e].data[r].length>=5?this.twoDSeries.push(x.parseNumber(t[e].data[r][4])):this.twoDSeries.push(x.parseNumber(t[e].data[r][1])),a.dataFormatXNumeric=!0),"datetime"===i.xaxis.type){var o=new Date(t[e].data[r][0]);o=new Date(o).getTime(),this.twoDSeriesX.push(o)}else this.twoDSeriesX.push(t[e].data[r][0]);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n][2]&&(this.threeDSeries.push(t[e].data[n][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,a=this.w.globals,s=new R(this.ctx),r=e;a.collapsedSeriesIndices.indexOf(e)>-1&&(r=this.activeSeriesIndex);for(var o=0;o<t[e].data.length;o++)void 0!==t[e].data[o].y&&(Array.isArray(t[e].data[o].y)?this.twoDSeries.push(x.parseNumber(t[e].data[o].y[t[e].data[o].y.length-1])):this.twoDSeries.push(x.parseNumber(t[e].data[o].y))),void 0!==t[e].data[o].goals&&Array.isArray(t[e].data[o].goals)?(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(t[e].data[o].goals)):(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(null));for(var n=0;n<t[r].data.length;n++){var l="string"==typeof t[r].data[n].x,h=Array.isArray(t[r].data[n].x),c=!h&&!!s.isValidDate(t[r].data[n].x.toString());if(l||c)if(l||i.xaxis.convertedCatToNumeric){var d=a.isBarHorizontal&&a.isRangeData;"datetime"!==i.xaxis.type||d?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x)):this.twoDSeriesX.push(s.parseDate(t[r].data[n].x))}else"datetime"===i.xaxis.type?this.twoDSeriesX.push(s.parseDate(t[r].data[n].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(t[r].data[n].x)));else h?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(t[r].data[n].x))}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var g=0;g<t[e].data.length;g++)this.threeDSeries.push(t[e].data[g].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleRangeDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleRangeDataFormat("xy",t,e)),i.seriesRangeStart.push(a.start),i.seriesRangeEnd.push(a.end),i.seriesRangeBar.push(a.rangeUniques),i.seriesRangeBar.forEach((function(t,e){t&&t.forEach((function(t,e){t.y.forEach((function(e,i){for(var a=0;a<t.y.length;a++)if(i!==a){var s=e.y1,r=e.y2,o=t.y[a].y1;s<=t.y[a].y2&&o<=r&&(t.overlaps.indexOf(e.rangeName)<0&&t.overlaps.push(e.rangeName),t.overlaps.indexOf(t.y[a].rangeName)<0&&t.overlaps.push(t.y[a].rangeName))}}))}))})),a}},{key:"handleCandleStickBoxData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy",t,e)),i.seriesCandleO[e]=a.o,i.seriesCandleH[e]=a.h,i.seriesCandleM[e]=a.m,i.seriesCandleL[e]=a.l,i.seriesCandleC[e]=a.c,a}},{key:"handleRangeDataFormat",value:function(t,e,i){var a=[],s=[],r=e[i].data.filter((function(t,e,i){return e===i.findIndex((function(e){return e.x===t.x}))})).map((function(t,e){return{x:t.x,overlaps:[],y:[]}})),o="Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",n=new E(this.ctx).getActiveConfigSeriesIndex();if("array"===t){if(2!==e[n].data[0][1].length)throw new Error(o);for(var l=0;l<e[i].data.length;l++)a.push(e[i].data[l][1][0]),s.push(e[i].data[l][1][1])}else if("xy"===t){if(2!==e[n].data[0].y.length)throw new Error(o);for(var h=function(t){var o=x.randomId(),n=e[i].data[t].x,l={y1:e[i].data[t].y[0],y2:e[i].data[t].y[1],rangeName:o};e[i].data[t].rangeName=o;var h=r.findIndex((function(t){return t.x===n}));r[h].y.push(l),a.push(l.y1),s.push(l.y2)},c=0;c<e[i].data.length;c++)h(c)}return{start:a,end:s,rangeUniques:r}}},{key:"handleCandleStickBoxDataFormat",value:function(t,e,i){var a=this.w,s="boxPlot"===a.config.chart.type||"boxPlot"===a.config.series[i].type,r=[],o=[],n=[],l=[],h=[];if("array"===t)if(s&&6===e[i].data[0].length||!s&&5===e[i].data[0].length)for(var c=0;c<e[i].data.length;c++)r.push(e[i].data[c][1]),o.push(e[i].data[c][2]),s?(n.push(e[i].data[c][3]),l.push(e[i].data[c][4]),h.push(e[i].data[c][5])):(l.push(e[i].data[c][3]),h.push(e[i].data[c][4]));else for(var d=0;d<e[i].data.length;d++)Array.isArray(e[i].data[d][1])&&(r.push(e[i].data[d][1][0]),o.push(e[i].data[d][1][1]),s?(n.push(e[i].data[d][1][2]),l.push(e[i].data[d][1][3]),h.push(e[i].data[d][1][4])):(l.push(e[i].data[d][1][2]),h.push(e[i].data[d][1][3])));else if("xy"===t)for(var g=0;g<e[i].data.length;g++)Array.isArray(e[i].data[g].y)&&(r.push(e[i].data[g].y[0]),o.push(e[i].data[g].y[1]),s?(n.push(e[i].data[g].y[2]),l.push(e[i].data[g].y[3]),h.push(e[i].data[g].y[4])):(l.push(e[i].data[g].y[2]),h.push(e[i].data[g].y[3])));return{o:r,h:o,m:n,l:l,c:h}}},{key:"parseDataAxisCharts",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,a=this.w.config,s=this.w.globals,r=new R(i),o=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();s.isRangeBar="rangeBar"===a.chart.type&&s.isBarHorizontal,s.hasGroups="category"===a.xaxis.type&&a.xaxis.group.groups.length>0,s.hasGroups&&(s.groups=a.xaxis.group.groups);for(var n=function(){for(var t=0;t<o.length;t++)if("string"==typeof o[t]){if(!r.isValidDate(o[t]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");e.twoDSeriesX.push(r.parseDate(o[t]))}else e.twoDSeriesX.push(o[t])},l=0;l<t.length;l++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[l].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if("rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type&&"rangeBar"!==t[l].type&&"rangeArea"!==t[l].type||(s.isRangeData=!0,this.handleRangeData(t,l)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,l):this.isFormatXY()&&this.handleFormatXY(t,l),"candlestick"!==a.chart.type&&"candlestick"!==t[l].type&&"boxPlot"!==a.chart.type&&"boxPlot"!==t[l].type||this.handleCandleStickBoxData(t,l),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),s.seriesGoals=this.seriesGoals,l!==this.activeSeriesIndex||this.fallbackToCategory||(s.isXNumeric=!0);else{"datetime"===a.xaxis.type?(s.isXNumeric=!0,n(),s.seriesX.push(this.twoDSeriesX)):"numeric"===a.xaxis.type&&(s.isXNumeric=!0,o.length>0&&(this.twoDSeriesX=o,s.seriesX.push(this.twoDSeriesX))),s.labels.push(this.twoDSeriesX);var h=t[l].data.map((function(t){return x.parseNumber(t)}));s.series.push(h)}s.seriesZ.push(this.threeDSeries),void 0!==t[l].name?s.seriesNames.push(t[l].name):s.seriesNames.push("series-"+parseInt(l+1,10)),void 0!==t[l].color?s.seriesColors.push(t[l].color):s.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var a=0;a<e.series.length;a++)void 0===e.seriesNames[a]&&e.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory){if(i.labels=i.labels[0],i.seriesRangeBar.length&&(i.seriesRangeBar.map((function(t){t.forEach((function(t){i.labels.indexOf(t.x)<0&&t.x&&i.labels.push(t.x)}))})),i.labels=i.labels.filter((function(t,e,i){return i.indexOf(t)===e}))),e.xaxis.convertedCatToNumeric)new D(e).convertCatToNumericXaxis(e,this.ctx,i.seriesX[0]),this._generateExternalLabels(t)}else this._generateExternalLabels(t)}},{key:"_generateExternalLabels",value:function(t){var e=this.w.globals,i=this.w.config,a=[];if(e.axisCharts){if(e.series.length>0)if(this.isFormatXY())for(var s=i.series.map((function(t,e){return t.data.filter((function(t,e,i){return i.findIndex((function(e){return e.x===t.x}))===e}))})),r=s.reduce((function(t,e,i,a){return a[t].length>e.length?t:i}),0),o=0;o<s[r].length;o++)a.push(o+1);else for(var n=0;n<e.series[e.maxValsInArrayIndex].length;n++)a.push(n+1);e.seriesX=[];for(var l=0;l<t.length;l++)e.seriesX.push(a);e.isXNumeric=!0}if(0===a.length){a=e.axisCharts?[]:e.series.map((function(t,e){return e+1}));for(var h=0;h<t.length;h++)e.seriesX.push(a)}e.labels=a,i.xaxis.convertedCatToNumeric&&(e.categoryLabels=a.map((function(t){return i.xaxis.labels.formatter(t)}))),e.noLabelsProvided=!0}},{key:"parseData",value:function(t){var e=this.w,i=e.config,a=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?this.parseDataAxisCharts(t):this.parseDataNonAxisCharts(t),this.coreUtils.getLargestSeries(),"bar"===i.chart.type&&i.chart.stacked){var s=new E(this.ctx);a.series=s.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t);for(var r=this.coreUtils.getCategoryLabels(a.labels),o=0;o<r.length;o++)if(Array.isArray(r[o])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this,e=this.w;e.globals.ignoreYAxisIndexes=e.globals.collapsedSeries.map((function(i,a){if(t.w.globals.isMultipleYAxis&&!e.config.chart.stacked)return i.index}))}}]),t}(),V=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return r(t,[{key:"xLabelFormat",value:function(t,e,i,a){var s=this.w;if("datetime"===s.config.xaxis.type&&void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter){var r=new R(this.ctx);return r.formatDate(r.getDate(e),s.config.tooltip.x.format)}return t(e,i,a)}},{key:"defaultGeneralFormatter",value:function(t){return Array.isArray(t)?t.map((function(t){return t})):t}},{key:"defaultYFormatter",value:function(t,e,i){var a=this.w;return x.isNumber(t)&&(t=0!==a.globals.yValueDecimal?t.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat:a.globals.yValueDecimal):a.globals.maxYArr[i]-a.globals.minYArr[i]<5?t.toFixed(1):t.toFixed(0)),t}},{key:"setLabelFormatters",value:function(){var t=this,e=this.w;return e.globals.xaxisTooltipFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttKeyFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttZFormatter=function(t){return t},e.globals.legendFormatter=function(e){return t.defaultGeneralFormatter(e)},void 0!==e.config.xaxis.labels.formatter?e.globals.xLabelFormatter=e.config.xaxis.labels.formatter:e.globals.xLabelFormatter=function(t){if(x.isNumber(t)){if(!e.config.xaxis.convertedCatToNumeric&&"numeric"===e.config.xaxis.type){if(x.isNumber(e.config.xaxis.decimalsInFloat))return t.toFixed(e.config.xaxis.decimalsInFloat);var i=e.globals.maxX-e.globals.minX;return i>0&&i<100?t.toFixed(1):t.toFixed(0)}if(e.globals.isBarHorizontal)if(e.globals.maxY-e.globals.minYArr<4)return t.toFixed(1);return t.toFixed(0)}return t},"function"==typeof e.config.tooltip.x.formatter?e.globals.ttKeyFormatter=e.config.tooltip.x.formatter:e.globals.ttKeyFormatter=e.globals.xLabelFormatter,"function"==typeof e.config.xaxis.tooltip.formatter&&(e.globals.xaxisTooltipFormatter=e.config.xaxis.tooltip.formatter),(Array.isArray(e.config.tooltip.y)||void 0!==e.config.tooltip.y.formatter)&&(e.globals.ttVal=e.config.tooltip.y),void 0!==e.config.tooltip.z.formatter&&(e.globals.ttZFormatter=e.config.tooltip.z.formatter),void 0!==e.config.legend.formatter&&(e.globals.legendFormatter=e.config.legend.formatter),e.config.yaxis.forEach((function(i,a){void 0!==i.labels.formatter?e.globals.yLabelFormatters[a]=i.labels.formatter:e.globals.yLabelFormatters[a]=function(s){return e.globals.xyCharts?Array.isArray(s)?s.map((function(e){return t.defaultYFormatter(e,i,a)})):t.defaultYFormatter(s,i,a):s}})),e.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce((function(t,e){return t.length>e.length?t:e}),0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),G=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getLabel",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"12px",o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],n=this.w,l=void 0===t[a]?"":t[a],h=l,c=n.globals.xLabelFormatter,d=n.config.xaxis.labels.formatter,g=!1,u=new V(this.ctx),f=l;o&&(h=u.xLabelFormat(c,l,f,{i:a,dateFormatter:new R(this.ctx).formatDate,w:n}),void 0!==d&&(h=d(l,t[a],{i:a,dateFormatter:new R(this.ctx).formatDate,w:n})));var p=function(t){var i=null;return e.forEach((function(t){"month"===t.unit?i="year":"day"===t.unit?i="month":"hour"===t.unit?i="day":"minute"===t.unit&&(i="hour")})),i===t};e.length>0?(g=p(e[a].unit),i=e[a].position,h=e[a].value):"datetime"===n.config.xaxis.type&&void 0===d&&(h=""),void 0===h&&(h=""),h=Array.isArray(h)?h:h.toString();var x=new m(this.ctx),b={};b=n.globals.rotateXLabels&&o?x.getTextRects(h,parseInt(r,10),null,"rotate(".concat(n.config.xaxis.labels.rotate," 0 0)"),!1):x.getTextRects(h,parseInt(r,10));var v=!n.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(h)&&(0===h.indexOf("NaN")||0===h.toLowerCase().indexOf("invalid")||h.toLowerCase().indexOf("infinity")>=0||s.indexOf(h)>=0&&v)&&(h=""),{x:i,text:h,textRect:b,isBold:g}}},{key:"checkLabelBasedOnTickamount",value:function(t,e,i){var a=this.w,s=a.config.xaxis.tickAmount;return"dataPoints"===s&&(s=Math.round(a.globals.gridWidth/120)),s>i||t%Math.round(i/(s+1))==0||(e.text=""),e}},{key:"checkForOverflowingLabels",value:function(t,e,i,a,s){var r=this.w;if(0===t&&r.globals.skipFirstTimelinelabel&&(e.text=""),t===i-1&&r.globals.skipLastTimelinelabel&&(e.text=""),r.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var o=s[s.length-1];e.x<o.textRect.width/(r.globals.rotateXLabels?Math.abs(r.config.xaxis.labels.rotate)/12:1.01)+o.x&&(e.text="")}return e}},{key:"checkForReversedLabels",value:function(t,e){var i=this.w;return i.config.yaxis[t]&&i.config.yaxis[t].reversed&&e.reverse(),e}},{key:"isYAxisHidden",value:function(t){var e=this.w,i=new y(this.ctx);return!e.config.yaxis[t].show||!e.config.yaxis[t].showForNullSeries&&i.isSeriesNull(t)&&-1===e.globals.collapsedSeriesIndices.indexOf(t)}},{key:"getYAxisForeColor",value:function(t,e){var i=this.w;return Array.isArray(t)&&i.globals.yAxisScale[e]&&this.ctx.theme.pushExtraColors(t,i.globals.yAxisScale[e].result.length,!1),t}},{key:"drawYAxisTicks",value:function(t,e,i,a,s,r,o){var n=this.w,l=new m(this.ctx),h=n.globals.translateY;if(a.show&&e>0){!0===n.config.yaxis[s].opposite&&(t+=a.width);for(var c=e;c>=0;c--){var d=h+e/10+n.config.yaxis[s].labels.offsetY-1;n.globals.isBarHorizontal&&(d=r*c),"heatmap"===n.config.chart.type&&(d+=r/2);var g=l.drawLine(t+i.offsetX-a.width+a.offsetX,d+a.offsetY,t+i.offsetX+a.offsetX,d+a.offsetY,a.color);o.add(g),h+=r}}}}]),t}(),j=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"scaleSvgNode",value:function(t,e){var i=parseFloat(t.getAttributeNS(null,"width")),a=parseFloat(t.getAttributeNS(null,"height"));t.setAttributeNS(null,"width",i*e),t.setAttributeNS(null,"height",a*e),t.setAttributeNS(null,"viewBox","0 0 "+i+" "+a)}},{key:"fixSvgStringForIe11",value:function(t){if(!x.isIE11())return t.replace(/&nbsp;/g,"&#160;");var e=0,i=t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,(function(t){return 2===++e?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':t}));return i=(i=i.replace(/xmlns:NS\d+=""/g,"")).replace(/NS\d+:(\w+:\w+=")/g,"$1")}},{key:"getSvgString",value:function(t){null==t&&(t=1);var e=this.w.globals.dom.Paper.svg();if(1!==t){var i=this.w.globals.dom.Paper.node.cloneNode(!0);this.scaleSvgNode(i,t),e=(new XMLSerializer).serializeToString(i)}return this.fixSvgStringForIe11(e)}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,(function(t){t.setAttribute("width",0)})),e&&e[0]&&(e[0].setAttribute("x",-500),e[0].setAttribute("x1",-500),e[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var t=this.getSvgString(),e=new Blob([t],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(e)}},{key:"dataURI",value:function(t){var e=this;return new Promise((function(i){var a=e.w,s=t?t.scale||t.width/a.globals.svgWidth:1;e.cleanup();var r=document.createElement("canvas");r.width=a.globals.svgWidth*s,r.height=parseInt(a.globals.dom.elWrap.style.height,10)*s;var o="transparent"===a.config.chart.background?"#fff":a.config.chart.background,n=r.getContext("2d");n.fillStyle=o,n.fillRect(0,0,r.width*s,r.height*s);var l=e.getSvgString(s);if(window.canvg&&x.isIE11()){var h=window.canvg.Canvg.fromString(n,l,{ignoreClear:!0,ignoreDimensions:!0});h.start();var c=r.msToBlob();h.stop(),i({blob:c})}else{var d="data:image/svg+xml,"+encodeURIComponent(l),g=new Image;g.crossOrigin="anonymous",g.onload=function(){if(n.drawImage(g,0,0),r.msToBlob){var t=r.msToBlob();i({blob:t})}else{var e=r.toDataURL("image/png");i({imgURI:e})}},g.src=d}}))}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,".svg")}},{key:"exportToPng",value:function(){var t=this;this.dataURI().then((function(e){var i=e.imgURI,a=e.blob;a?navigator.msSaveOrOpenBlob(a,t.w.globals.chartID+".png"):t.triggerDownload(i,t.w.config.chart.toolbar.export.png.filename,".png")}))}},{key:"exportToCSV",value:function(t){var e=this,i=t.series,a=t.columnDelimiter,s=void 0===a?",":a,r=t.lineDelimiter,o=void 0===r?"\n":r,n=this.w;i||(i=n.config.series);var l=[],h=[],c="",d=new B(this.ctx),g=new G(this.ctx),u=function(t){var i="";if(n.globals.axisCharts){if("category"===n.config.xaxis.type||n.config.xaxis.convertedCatToNumeric)if(n.globals.isBarHorizontal){var a=n.globals.yLabelFormatters[0],r=new E(e.ctx).getActiveConfigSeriesIndex();i=a(n.globals.labels[t],{seriesIndex:r,dataPointIndex:t,w:n})}else i=g.getLabel(n.globals.labels,n.globals.timescaleLabels,0,t).text;"datetime"===n.config.xaxis.type&&(n.config.xaxis.categories.length?i=n.config.xaxis.categories[t]:n.config.labels.length&&(i=n.config.labels[t]))}else i=n.config.labels[t];return Array.isArray(i)&&(i=i.join(" ")),x.isNumber(i)?i:i.split(s).join("")};l.push(n.config.chart.toolbar.export.csv.headerCategory),i.map((function(t,e){var i=t.name?t.name:"series-".concat(e);n.globals.axisCharts&&l.push(i.split(s).join("")?i.split(s).join(""):"series-".concat(e))})),n.globals.axisCharts||(l.push(n.config.chart.toolbar.export.csv.headerValue),h.push(l.join(s))),i.map((function(t,e){n.globals.axisCharts?function(t,e){if(l.length&&0===e&&h.push(l.join(s)),t.data&&t.data.length)for(var a=0;a<t.data.length;a++){l=[];var r=u(a);if(r||(d.isFormatXY()?r=i[e].data[a].x:d.isFormat2DArray()&&(r=i[e].data[a]?i[e].data[a][0]:"")),0===e){l.push((c=r,"datetime"===n.config.xaxis.type&&String(c).length>=10?n.config.chart.toolbar.export.csv.dateFormatter(r):x.isNumber(r)?r:r.split(s).join("")));for(var o=0;o<n.globals.series.length;o++)d.isFormatXY()?l.push(i[o].data[a].y):l.push(n.globals.series[o][a])}("candlestick"===n.config.chart.type||t.type&&"candlestick"===t.type)&&(l.pop(),l.push(n.globals.seriesCandleO[e][a]),l.push(n.globals.seriesCandleH[e][a]),l.push(n.globals.seriesCandleL[e][a]),l.push(n.globals.seriesCandleC[e][a])),("boxPlot"===n.config.chart.type||t.type&&"boxPlot"===t.type)&&(l.pop(),l.push(n.globals.seriesCandleO[e][a]),l.push(n.globals.seriesCandleH[e][a]),l.push(n.globals.seriesCandleM[e][a]),l.push(n.globals.seriesCandleL[e][a]),l.push(n.globals.seriesCandleC[e][a])),"rangeBar"===n.config.chart.type&&(l.pop(),l.push(n.globals.seriesRangeStart[e][a]),l.push(n.globals.seriesRangeEnd[e][a])),l.length&&h.push(l.join(s))}var c}(t,e):((l=[]).push(n.globals.labels[e].split(s).join("")),l.push(n.globals.series[e]),h.push(l.join(s)))})),c+=h.join(o),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\ufeff"+c),n.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(t,e,i){var a=document.createElement("a");a.href=t,a.download=(e||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),t}(),_=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.axesUtils=new G(e),this.xaxisLabels=i.globals.labels.slice(),i.globals.timescaleLabels.length>0&&!i.globals.isBarHorizontal&&(this.xaxisLabels=i.globals.timescaleLabels.slice()),i.config.xaxis.overwriteCategories&&(this.xaxisLabels=i.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],"top"===i.config.xaxis.position?this.offY=0:this.offY=i.globals.gridHeight+1,this.offY=this.offY+i.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal="bar"===i.config.chart.type&&i.config.plotOptions.bar.horizontal,this.xaxisFontSize=i.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=i.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=i.config.xaxis.labels.style.colors,this.xaxisBorderWidth=i.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=i.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=i.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=i.config.xaxis.axisBorder.height,this.yaxis=i.config.yaxis[0]}return r(t,[{key:"drawXaxis",value:function(){var t=this.w,e=new m(this.ctx),i=e.group({class:"apexcharts-xaxis",transform:"translate(".concat(t.config.xaxis.offsetX,", ").concat(t.config.xaxis.offsetY,")")}),a=e.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(t.globals.translateXAxisX,", ").concat(t.globals.translateXAxisY,")")});i.add(a);for(var s=[],r=0;r<this.xaxisLabels.length;r++)s.push(this.xaxisLabels[r]);if(this.drawXAxisLabelAndGroup(!0,e,a,s,t.globals.isXNumeric,(function(t,e){return e})),t.globals.hasGroups){var o=t.globals.groups;s=[];for(var n=0;n<o.length;n++)s.push(o[n].title);var l={};t.config.xaxis.group.style&&(l.xaxisFontSize=t.config.xaxis.group.style.fontSize,l.xaxisFontFamily=t.config.xaxis.group.style.fontFamily,l.xaxisForeColors=t.config.xaxis.group.style.colors,l.fontWeight=t.config.xaxis.group.style.fontWeight,l.cssClass=t.config.xaxis.group.style.cssClass),this.drawXAxisLabelAndGroup(!1,e,a,s,!1,(function(t,e){return o[t].cols*e}),l)}if(void 0!==t.config.xaxis.title.text){var h=e.group({class:"apexcharts-xaxis-title"}),c=e.drawText({x:t.globals.gridWidth/2+t.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+t.globals.xAxisLabelsHeight+t.config.xaxis.title.offsetY,text:t.config.xaxis.title.text,textAnchor:"middle",fontSize:t.config.xaxis.title.style.fontSize,fontFamily:t.config.xaxis.title.style.fontFamily,fontWeight:t.config.xaxis.title.style.fontWeight,foreColor:t.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+t.config.xaxis.title.style.cssClass});h.add(c),i.add(h)}if(t.config.xaxis.axisBorder.show){var d=t.globals.barPadForNumericAxis,g=e.drawLine(t.globals.padHorizontal+t.config.xaxis.axisBorder.offsetX-d,this.offY,this.xaxisBorderWidth+d,this.offY,t.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);i.add(g)}return i}},{key:"drawXAxisLabelAndGroup",value:function(t,e,i,a,s,r){var o,n=this,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},h=[],c=[],d=this.w,g=l.xaxisFontSize||this.xaxisFontSize,u=l.xaxisFontFamily||this.xaxisFontFamily,f=l.xaxisForeColors||this.xaxisForeColors,p=l.fontWeight||d.config.xaxis.labels.style.fontWeight,x=l.cssClass||d.config.xaxis.labels.style.cssClass,b=d.globals.padHorizontal,v=a.length,m="category"===d.config.xaxis.type?d.globals.dataPoints:v;if(s){var y=m>1?m-1:m;o=d.globals.gridWidth/y,b=b+r(0,o)/2+d.config.xaxis.labels.offsetX}else o=d.globals.gridWidth/m,b=b+r(0,o)+d.config.xaxis.labels.offsetX;for(var w=function(s){var l=b-r(s,o)/2+d.config.xaxis.labels.offsetX;0===s&&1===v&&o/2===b&&1===m&&(l=d.globals.gridWidth/2);var y=n.axesUtils.getLabel(a,d.globals.timescaleLabels,l,s,h,g,t),w=28;d.globals.rotateXLabels&&t&&(w=22),t||(w=w+parseFloat(g)+(d.globals.xAxisLabelsHeight-d.globals.xAxisGroupLabelsHeight)+(d.globals.rotateXLabels?10:0)),y=void 0!==d.config.xaxis.tickAmount&&"dataPoints"!==d.config.xaxis.tickAmount&&"datetime"!==d.config.xaxis.type?n.axesUtils.checkLabelBasedOnTickamount(s,y,v):n.axesUtils.checkForOverflowingLabels(s,y,v,h,c);if(t&&y.text&&d.globals.xaxisLabelsCount++,d.config.xaxis.labels.show){var k=e.drawText({x:y.x,y:n.offY+d.config.xaxis.labels.offsetY+w-("top"===d.config.xaxis.position?d.globals.xAxisHeight+d.config.xaxis.axisTicks.height-2:0),text:y.text,textAnchor:"middle",fontWeight:y.isBold?600:p,fontSize:g,fontFamily:u,foreColor:Array.isArray(f)?t&&d.config.xaxis.convertedCatToNumeric?f[d.globals.minX+s-1]:f[s]:f,isPlainText:!1,cssClass:(t?"apexcharts-xaxis-label ":"apexcharts-xaxis-group-label ")+x});if(i.add(k),t){var A=document.createElementNS(d.globals.SVGNS,"title");A.textContent=Array.isArray(y.text)?y.text.join(" "):y.text,k.node.appendChild(A),""!==y.text&&(h.push(y.text),c.push(y))}}s<v-1&&(b+=r(s+1,o))},k=0;k<=v-1;k++)w(k)}},{key:"drawXaxisInversed",value:function(t){var e,i,a=this,s=this.w,r=new m(this.ctx),o=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,n=r.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),l=r.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+o+", 0)"});n.add(l);var h=[];if(s.config.yaxis[t].show)for(var c=0;c<this.xaxisLabels.length;c++)h.push(this.xaxisLabels[c]);e=s.globals.gridHeight/h.length,i=-e/2.2;var d=s.globals.yLabelFormatters[0],g=s.config.yaxis[0].labels;if(g.show)for(var u=function(o){var n=void 0===h[o]?"":h[o];n=d(n,{seriesIndex:t,dataPointIndex:o,w:s});var c=a.axesUtils.getYAxisForeColor(g.style.colors,t),u=0;Array.isArray(n)&&(u=n.length/2*parseInt(g.style.fontSize,10));var f=r.drawText({x:g.offsetX-15,y:i+e+g.offsetY-u,text:n,textAnchor:a.yaxis.opposite?"start":"end",foreColor:Array.isArray(c)?c[o]:c,fontSize:g.style.fontSize,fontFamily:g.style.fontFamily,fontWeight:g.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+g.style.cssClass,maxWidth:g.maxWidth});l.add(f);var p=document.createElementNS(s.globals.SVGNS,"title");if(p.textContent=Array.isArray(n)?n.join(" "):n,f.node.appendChild(p),0!==s.config.yaxis[t].labels.rotate){var x=r.rotateAroundCenter(f.node);f.node.setAttribute("transform","rotate(".concat(s.config.yaxis[t].labels.rotate," 0 ").concat(x.y,")"))}i+=e},f=0;f<=h.length-1;f++)u(f);if(void 0!==s.config.yaxis[0].title.text){var p=r.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+o+", 0)"}),x=r.drawText({x:0,y:s.globals.gridHeight/2,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontWeight:s.config.yaxis[0].title.style.fontWeight,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});p.add(x),n.add(p)}var b=0;this.isCategoryBarHorizontal&&s.config.yaxis[0].opposite&&(b=s.globals.gridWidth);var v=s.config.xaxis.axisBorder;if(v.show){var y=r.drawLine(s.globals.padHorizontal+v.offsetX+b,1+v.offsetY,s.globals.padHorizontal+v.offsetX+b,s.globals.gridHeight+v.offsetY,v.color,0);n.add(y)}return s.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(b,h.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,n),n}},{key:"drawXaxisTicks",value:function(t,e,i){var a=this.w,s=t;if(!(t<0||t-2>a.globals.gridWidth)){var r=this.offY+a.config.xaxis.axisTicks.offsetY;if(e=e+r+a.config.xaxis.axisTicks.height,"top"===a.config.xaxis.position&&(e=r-a.config.xaxis.axisTicks.height),a.config.xaxis.axisTicks.show){var o=new m(this.ctx).drawLine(t+a.config.xaxis.axisTicks.offsetX,r+a.config.xaxis.offsetY,s+a.config.xaxis.axisTicks.offsetX,e+a.config.xaxis.offsetY,a.config.xaxis.axisTicks.color);i.add(o),o.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,a=t.globals.padHorizontal;if(t.globals.timescaleLabels.length>0)for(var s=0;s<i;s++)a=this.xaxisLabels[s].position,e.push(a);else for(var r=i,o=0;o<r;o++){var n=r;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(n-=1),a+=t.globals.gridWidth/n,e.push(a)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new m(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var o=0;o<a.length;o++){var n=e.rotateAroundCenter(a[o]);n.y=n.y-1,n.x=n.x+1,a[o].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(n.x," ").concat(n.y,")")),a[o].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=a[o].childNodes;t.config.xaxis.labels.trim&&Array.prototype.forEach.call(l,(function(i){e.placeTextWithEllipsis(i,i.textContent,t.globals.xAxisLabelsHeight-("bottom"===t.config.legend.position?20:10))}))}else!function(){for(var i=t.globals.gridWidth/(t.globals.labels.length+1),s=0;s<a.length;s++){var r=a[s].childNodes;t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&Array.prototype.forEach.call(r,(function(t){e.placeTextWithEllipsis(t,t.textContent,i)}))}}();if(s.length>0){var h=s[s.length-1].getBBox(),c=s[0].getBBox();h.x<-20&&s[s.length-1].parentNode.removeChild(s[s.length-1]),c.x+c.width>t.globals.gridWidth&&!t.globals.isBarHorizontal&&s[0].parentNode.removeChild(s[0]);for(var d=0;d<r.length;d++)e.placeTextWithEllipsis(r[d],r[d].textContent,t.config.yaxis[0].labels.maxWidth-(t.config.yaxis[0].title.text?2*parseFloat(t.config.yaxis[0].title.style.fontSize):0)-15)}}}]),t}(),U=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.xaxisLabels=i.globals.labels.slice(),this.axesUtils=new G(e),this.isRangeBar=i.globals.seriesRangeBar.length,i.globals.timescaleLabels.length>0&&(this.xaxisLabels=i.globals.timescaleLabels.slice())}return r(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new m(this.ctx);null===t&&(t=i.group({class:"apexcharts-grid"}));var a=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),s=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(s),t.add(a),t}},{key:"drawGrid",value:function(){var t=null;return this.w.globals.axisCharts&&(t=this.renderGrid(),this.drawGridArea(t.el)),t}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new m(this.ctx),a=Array.isArray(t.config.stroke.width)?0:t.config.stroke.width;if(Array.isArray(t.config.stroke.width)){var s=0;t.config.stroke.width.forEach((function(t){s=Math.max(s,t)})),a=s}e.dom.elGridRectMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(e.cuid)),e.dom.elForecastMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elForecastMask.setAttribute("id","forecastMask".concat(e.cuid)),e.dom.elNonForecastMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elNonForecastMask.setAttribute("id","nonForecastMask".concat(e.cuid));var r=t.config.chart.type,o=0,n=0;("bar"===r||"rangeBar"===r||"candlestick"===r||"boxPlot"===r||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&(o=t.config.grid.padding.left,n=t.config.grid.padding.right,e.barPadForNumericAxis>o&&(o=e.barPadForNumericAxis,n=e.barPadForNumericAxis)),e.dom.elGridRect=i.drawRect(-a/2-o-2,-a/2,e.gridWidth+a+n+o+4,e.gridHeight+a,0,"#fff");var l=t.globals.markers.largestSize+1;e.dom.elGridRectMarker=i.drawRect(2*-l,2*-l,e.gridWidth+4*l,e.gridHeight+4*l,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var h=e.dom.baseEl.querySelector("defs");h.appendChild(e.dom.elGridRectMask),h.appendChild(e.dom.elForecastMask),h.appendChild(e.dom.elNonForecastMask),h.appendChild(e.dom.elGridRectMarkerMask)}},{key:"_drawGridLines",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.xCount,n=t.parent,l=this.w;if(!(0===e&&l.globals.skipFirstTimelinelabel||e===o-1&&l.globals.skipLastTimelinelabel&&!l.config.xaxis.labels.formatter||"radar"===l.config.chart.type)){l.config.grid.xaxis.lines.show&&this._drawGridLine({x1:i,y1:a,x2:s,y2:r,parent:n});var h=0;if(l.globals.hasGroups&&"between"===l.config.xaxis.tickPlacement){var c=l.globals.groups;if(c){for(var d=0,g=0;d<e&&g<c.length;g++)d+=c[g].cols;d===e&&(h=.6*l.globals.xAxisLabelsHeight)}}new _(this.ctx).drawXaxisTicks(i,h,this.elg)}}},{key:"_drawGridLine",value:function(t){var e=t.x1,i=t.y1,a=t.x2,s=t.y2,r=t.parent,o=this.w,n=r.node.classList.contains("apexcharts-gridlines-horizontal"),l=o.config.grid.strokeDashArray,h=o.globals.barPadForNumericAxis,c=new m(this).drawLine(e-(n?h:0),i,a+(n?h:0),s,o.config.grid.borderColor,l);c.node.classList.add("apexcharts-gridline"),r.add(c)}},{key:"_drawGridBandRect",value:function(t){var e=t.c,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.type,n=this.w,l=new m(this.ctx),h=n.globals.barPadForNumericAxis;if("column"!==o||"datetime"!==n.config.xaxis.type){var c=n.config.grid[o].colors[e],d=l.drawRect(i-("row"===o?h:0),a,s+("row"===o?2*h:0),r,0,c,n.config.grid[o].opacity);this.elg.add(d),d.attr("clip-path","url(#gridRectMask".concat(n.globals.cuid,")")),d.node.classList.add("apexcharts-grid-".concat(o))}}},{key:"_drawXYLines",value:function(t){var e=this,i=t.xCount,a=t.tickAmount,s=this.w;if(s.config.grid.xaxis.lines.show||s.config.xaxis.axisTicks.show){var r,o=s.globals.padHorizontal,n=s.globals.gridHeight;s.globals.timescaleLabels.length?function(t){for(var a=t.xC,s=t.x1,r=t.y1,o=t.x2,n=t.y2,l=0;l<a;l++)s=e.xaxisLabels[l].position,o=e.xaxisLabels[l].position,e._drawGridLines({i:l,x1:s,y1:r,x2:o,y2:n,xCount:i,parent:e.elgridLinesV})}({xC:i,x1:o,y1:0,x2:r,y2:n}):(s.globals.isXNumeric&&(i=s.globals.xAxisScale.result.length),s.config.xaxis.convertedCatToNumeric&&(i=s.globals.xaxisLabelsCount),function(t){var a=t.xC,r=t.x1,o=t.y1,n=t.x2,l=t.y2;if(void 0!==s.config.xaxis.tickAmount&&"dataPoints"!==s.config.xaxis.tickAmount&&"on"===s.config.xaxis.tickPlacement)s.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach((function(t,a){var s=t.getBBox();e._drawGridLines({i:a,x1:s.x+s.width/2,y1:o,x2:s.x+s.width/2,y2:l,xCount:i,parent:e.elgridLinesV})}));else for(var h=0;h<a+(s.globals.isXNumeric?0:1);h++)0===h&&1===a&&1===s.globals.dataPoints&&(n=r=s.globals.gridWidth/2),e._drawGridLines({i:h,x1:r,y1:o,x2:n,y2:l,xCount:i,parent:e.elgridLinesV}),n=r+=s.globals.gridWidth/(s.globals.isXNumeric?a-1:a)}({xC:i,x1:o,y1:0,x2:r,y2:n}))}if(s.config.grid.yaxis.lines.show){var l=0,h=0,c=s.globals.gridWidth,d=a+1;this.isRangeBar&&(d=s.globals.labels.length);for(var g=0;g<d+(this.isRangeBar?1:0);g++)this._drawGridLine({x1:0,y1:l,x2:c,y2:h,parent:this.elgridLinesH}),h=l+=s.globals.gridHeight/(this.isRangeBar?d:a)}}},{key:"_drawInvertedXYLines",value:function(t){var e=t.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,s=i.globals.padHorizontal,r=i.globals.gridHeight,o=0;o<e+1;o++){i.config.grid.xaxis.lines.show&&this._drawGridLine({x1:s,y1:0,x2:a,y2:r,parent:this.elgridLinesV}),new _(this.ctx).drawXaxisTicks(s,0,this.elg),a=s=s+i.globals.gridWidth/e+.3}if(i.config.grid.yaxis.lines.show)for(var n=0,l=0,h=i.globals.gridWidth,c=0;c<i.globals.dataPoints+1;c++)this._drawGridLine({x1:0,y1:n,x2:h,y2:l,parent:this.elgridLinesH}),l=n+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var t=this.w,e=new m(this.ctx);this.elg=e.group({class:"apexcharts-grid"}),this.elgridLinesH=e.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=e.group({class:"apexcharts-gridlines-vertical"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),t.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide());for(var i,a=t.globals.yAxisScale.length?t.globals.yAxisScale[0].result.length-1:5,s=0;s<t.globals.series.length&&(void 0!==t.globals.yAxisScale[s]&&(a=t.globals.yAxisScale[s].result.length-1),!(a>2));s++);return!t.globals.isBarHorizontal||this.isRangeBar?(i=this.xaxisLabels.length,this.isRangeBar&&(a=t.globals.labels.length,t.config.xaxis.tickAmount&&t.config.xaxis.labels.formatter&&(i=t.config.xaxis.tickAmount)),this._drawXYLines({xCount:i,tickAmount:a})):(i=a,a=t.globals.xTickAmount,this._drawInvertedXYLines({xCount:i,tickAmount:a})),this.drawGridBands(i,a),{el:this.elg,xAxisTickWidth:t.globals.gridWidth/i}}},{key:"drawGridBands",value:function(t,e){var i=this.w;if(void 0!==i.config.grid.row.colors&&i.config.grid.row.colors.length>0)for(var a=0,s=i.globals.gridHeight/e,r=i.globals.gridWidth,o=0,n=0;o<e;o++,n++)n>=i.config.grid.row.colors.length&&(n=0),this._drawGridBandRect({c:n,x1:0,y1:a,x2:r,y2:s,type:"row"}),a+=i.globals.gridHeight/e;if(void 0!==i.config.grid.column.colors&&i.config.grid.column.colors.length>0)for(var l=i.globals.isBarHorizontal||"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric?t:t-1,h=i.globals.padHorizontal,c=i.globals.padHorizontal+i.globals.gridWidth/l,d=i.globals.gridHeight,g=0,u=0;g<t;g++,u++)u>=i.config.grid.column.colors.length&&(u=0),this._drawGridBandRect({c:u,x1:h,y1:0,x2:c,y2:d,type:"column"}),h+=i.globals.gridWidth/l}}]),t}(),q=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"niceScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4?arguments[4]:void 0,r=this.w,o=Math.abs(e-t);if("dataPoints"===(i=this._adjustTicksForSmallRange(i,a,o))&&(i=r.globals.dataPoints-1),t===Number.MIN_VALUE&&0===e||!x.isNumber(t)&&!x.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE){t=0,e=i;var n=this.linearScale(t,e,i);return n}t>e?(console.warn("axis.min cannot be greater than axis.max"),e=t+.1):t===e&&(t=0===t?0:t-.5,e=0===e?2:e+.5);var l=[];o<1&&s&&("candlestick"===r.config.chart.type||"candlestick"===r.config.series[a].type||"boxPlot"===r.config.chart.type||"boxPlot"===r.config.series[a].type||r.globals.isRangeData)&&(e*=1.01);var h=i+1;h<2?h=2:h>2&&(h-=2);var c=o/h,d=Math.floor(x.log10(c)),g=Math.pow(10,d),u=Math.round(c/g);u<1&&(u=1);var f=u*g,p=f*Math.floor(t/f),b=f*Math.ceil(e/f),v=p;if(s&&o>2){for(;l.push(v),!((v+=f)>b););return{result:l,niceMin:l[0],niceMax:l[l.length-1]}}var m=t;(l=[]).push(m);for(var y=Math.abs(e-t)/i,w=0;w<=i;w++)m+=y,l.push(m);return l[l.length-2]>=e&&l.pop(),{result:l,niceMin:l[0],niceMax:l[l.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3?arguments[3]:void 0,s=Math.abs(e-t);"dataPoints"===(i=this._adjustTicksForSmallRange(i,a,s))&&(i=this.w.globals.dataPoints-1);var r=s/i;i===Number.MAX_VALUE&&(i=10,r=1);for(var o=[],n=t;i>=0;)o.push(n),n+=r,i-=1;return{result:o,niceMin:o[0],niceMax:o[o.length-1]}}},{key:"logarithmicScaleNice",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.ceil(Math.log(e)/Math.log(i)+1),r=Math.floor(Math.log(t)/Math.log(i));r<s;r++)a.push(Math.pow(i,r));return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.log(e)/Math.log(i),r=Math.log(t)/Math.log(i),o=s-r,n=Math.round(o),l=o/n,h=0,c=r;h<n;h++,c+=l)a.push(Math.pow(i,c));return a.push(Math.pow(i,s)),{result:a,niceMin:t,niceMax:e}}},{key:"_adjustTicksForSmallRange",value:function(t,e,i){var a=t;if(void 0!==e&&this.w.config.yaxis[e].labels.formatter&&void 0===this.w.config.yaxis[e].tickAmount){var s=this.w.config.yaxis[e].labels.formatter(1);x.isNumber(Number(s))&&!x.isFloat(s)&&(a=Math.ceil(i))}return a<t?a:t}},{key:"setYScaleForIndex",value:function(t,e,i){var a=this.w.globals,s=this.w.config,r=a.isBarHorizontal?s.xaxis:s.yaxis[t];void 0===a.yAxisScale[t]&&(a.yAxisScale[t]=[]);var o=Math.abs(i-e);if(r.logarithmic&&o<=5&&(a.invalidLogScale=!0),r.logarithmic&&o>5)a.allSeriesCollapsed=!1,a.yAxisScale[t]=this.logarithmicScale(e,i,r.logBase),a.yAxisScale[t]=r.forceNiceScale?this.logarithmicScaleNice(e,i,r.logBase):this.logarithmicScale(e,i,r.logBase);else if(i!==-Number.MAX_VALUE&&x.isNumber(i))if(a.allSeriesCollapsed=!1,void 0===r.min&&void 0===r.max||r.forceNiceScale){var n=void 0===s.yaxis[t].max&&void 0===s.yaxis[t].min||s.yaxis[t].forceNiceScale;a.yAxisScale[t]=this.niceScale(e,i,r.tickAmount?r.tickAmount:o<5&&o>1?o+1:5,t,n)}else a.yAxisScale[t]=this.linearScale(e,i,r.tickAmount,t);else a.yAxisScale[t]=this.linearScale(0,5,5)}},{key:"setXScale",value:function(t,e){var i=this.w,a=i.globals,s=i.config.xaxis,r=Math.abs(e-t);return e!==-Number.MAX_VALUE&&x.isNumber(e)?a.xAxisScale=this.linearScale(t,e,s.tickAmount?s.tickAmount:r<5&&r>1?r+1:5,0):a.xAxisScale=this.linearScale(0,5,5),a.xAxisScale}},{key:"setMultipleYScales",value:function(){var t=this,e=this.w.globals,i=this.w.config,a=e.minYArr.concat([]),s=e.maxYArr.concat([]),r=[];i.yaxis.forEach((function(e,o){var n=o;i.series.forEach((function(t,i){t.name===e.seriesName&&(n=i,o!==i?r.push({index:i,similarIndex:o,alreadyExists:!0}):r.push({index:i}))}));var l=a[n],h=s[n];t.setYScaleForIndex(o,l,h)})),this.sameScaleInMultipleAxes(a,s,r)}},{key:"sameScaleInMultipleAxes",value:function(t,e,i){var a=this,s=this.w.config,r=this.w.globals,o=[];i.forEach((function(t){t.alreadyExists&&(void 0===o[t.index]&&(o[t.index]=[]),o[t.index].push(t.index),o[t.index].push(t.similarIndex))})),r.yAxisSameScaleIndices=o,o.forEach((function(t,e){o.forEach((function(i,a){var s,r;e!==a&&(s=t,r=i,s.filter((function(t){return-1!==r.indexOf(t)}))).length>0&&(o[e]=o[e].concat(o[a]))}))}));var n=o.map((function(t){return t.filter((function(e,i){return t.indexOf(e)===i}))})).map((function(t){return t.sort()}));o=o.filter((function(t){return!!t}));var l=n.slice(),h=l.map((function(t){return JSON.stringify(t)}));l=l.filter((function(t,e){return h.indexOf(JSON.stringify(t))===e}));var c=[],d=[];t.forEach((function(t,i){l.forEach((function(a,s){a.indexOf(i)>-1&&(void 0===c[s]&&(c[s]=[],d[s]=[]),c[s].push({key:i,value:t}),d[s].push({key:i,value:e[i]}))}))}));var g=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),u=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);c.forEach((function(t,e){t.forEach((function(t,i){g[e]=Math.min(t.value,g[e])}))})),d.forEach((function(t,e){t.forEach((function(t,i){u[e]=Math.max(t.value,u[e])}))})),t.forEach((function(t,e){d.forEach((function(t,i){var o=g[i],n=u[i];s.chart.stacked&&(n=0,t.forEach((function(t,e){t.value!==-Number.MAX_VALUE&&(n+=t.value),o!==Number.MIN_VALUE&&(o+=c[i][e].value)}))),t.forEach((function(i,l){t[l].key===e&&(void 0!==s.yaxis[e].min&&(o="function"==typeof s.yaxis[e].min?s.yaxis[e].min(r.minY):s.yaxis[e].min),void 0!==s.yaxis[e].max&&(n="function"==typeof s.yaxis[e].max?s.yaxis[e].max(r.maxY):s.yaxis[e].max),a.setYScaleForIndex(e,o,n))}))}))}))}},{key:"autoScaleY",value:function(t,e,i){t||(t=this);var a=t.w;if(a.globals.isMultipleYAxis||a.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."),e;var s=a.globals.seriesX[0],r=a.config.chart.stacked;return e.forEach((function(t,o){for(var n=0,l=0;l<s.length;l++)if(s[l]>=i.xaxis.min){n=l;break}var h,c,d=a.globals.minYArr[o],g=a.globals.maxYArr[o],u=a.globals.stackedSeriesTotals;a.globals.series.forEach((function(o,l){var f=o[n];r?(f=u[n],h=c=f,u.forEach((function(t,e){s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min&&(t>c&&null!==t&&(c=t),o[e]<h&&null!==o[e]&&(h=o[e]))}))):(h=c=f,o.forEach((function(t,e){if(s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min){var r=t,o=t;a.globals.series.forEach((function(i,a){null!==t&&(r=Math.min(i[e],r),o=Math.max(i[e],o))})),o>c&&null!==o&&(c=o),r<h&&null!==r&&(h=r)}}))),void 0===h&&void 0===c&&(h=d,c=g),c*=c<0?.9:1.1,0===(h*=h<0?1.1:.9)&&0===c&&(h=-1,c=1),c<0&&c<g&&(c=g),h<0&&h>d&&(h=d),e.length>1?(e[l].min=void 0===t.min?h:t.min,e[l].max=void 0===t.max?c:t.max):(e[0].min=void 0===t.min?h:t.min,e[0].max=void 0===t.max?c:t.max)}))})),e}}]),t}(),Z=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.scales=new q(e)}return r(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w.config,r=this.w.globals,o=-Number.MAX_VALUE,n=Number.MIN_VALUE;null===a&&(a=t+1);var l=r.series,h=l,c=l;"candlestick"===s.chart.type?(h=r.seriesCandleL,c=r.seriesCandleH):"boxPlot"===s.chart.type?(h=r.seriesCandleO,c=r.seriesCandleC):r.isRangeData&&(h=r.seriesRangeStart,c=r.seriesRangeEnd);for(var d=t;d<a;d++){r.dataPoints=Math.max(r.dataPoints,l[d].length),r.categoryLabels.length&&(r.dataPoints=r.categoryLabels.filter((function(t){return void 0!==t})).length);for(var g=0;g<r.series[d].length;g++){var u=l[d][g];null!==u&&x.isNumber(u)?(void 0!==c[d][g]&&(o=Math.max(o,c[d][g]),e=Math.min(e,c[d][g])),void 0!==h[d][g]&&(e=Math.min(e,h[d][g]),i=Math.max(i,h[d][g])),"candlestick"!==this.w.config.chart.type&&"boxPlot"!==this.w.config.chart.type||(void 0!==r.seriesCandleC[d][g]&&(o=Math.max(o,r.seriesCandleO[d][g]),o=Math.max(o,r.seriesCandleH[d][g]),o=Math.max(o,r.seriesCandleL[d][g]),o=Math.max(o,r.seriesCandleC[d][g]),"boxPlot"===this.w.config.chart.type&&(o=Math.max(o,r.seriesCandleM[d][g]))),!s.series[d].type||"candlestick"===s.series[d].type&&"boxPlot"===s.series[d].type||(o=Math.max(o,r.series[d][g]),e=Math.min(e,r.series[d][g])),i=o),r.seriesGoals[d]&&r.seriesGoals[d][g]&&Array.isArray(r.seriesGoals[d][g])&&r.seriesGoals[d][g].forEach((function(t){n!==Number.MIN_VALUE&&(n=Math.min(n,t.value),e=n),o=Math.max(o,t.value),i=o})),x.isFloat(u)&&(u=x.noExponents(u),r.yValueDecimal=Math.max(r.yValueDecimal,u.toString().split(".")[1].length)),n>h[d][g]&&h[d][g]<0&&(n=h[d][g])):r.hasNullValues=!0}}return"rangeBar"===s.chart.type&&r.seriesRangeStart.length&&r.isBarHorizontal&&(n=e),"bar"===s.chart.type&&(n<0&&o<0&&(o=0),n===Number.MIN_VALUE&&(n=0)),{minY:n,maxY:o,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(t.isMultipleYAxis)for(var a=0;a<t.series.length;a++){var s=this.getMinYMaxY(a,i,null,a+1);t.minYArr.push(s.minY),t.maxYArr.push(s.maxY),i=s.lowestY}var r=this.getMinYMaxY(0,i,null,t.series.length);if(t.minY=r.minY,t.maxY=r.maxY,i=r.lowestY,e.chart.stacked&&this._setStackedMinMax(),("line"===e.chart.type||"area"===e.chart.type||"candlestick"===e.chart.type||"boxPlot"===e.chart.type||"rangeBar"===e.chart.type&&!t.isBarHorizontal)&&t.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==t.maxY){var o=t.maxY-i;(i>=0&&i<=10||void 0!==e.yaxis[0].min||void 0!==e.yaxis[0].max)&&(o=0),t.minY=i-5*o/100,i>0&&t.minY<0&&(t.minY=0),t.maxY=t.maxY+5*o/100}if(e.yaxis.forEach((function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.isMultipleYAxis?t.maxYArr[i]:t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.isMultipleYAxis?t.minYArr[i]===Number.MIN_VALUE?0:t.minYArr[i]:t.minY)),t.minY=t.minYArr[i])})),t.isBarHorizontal){["min","max"].forEach((function(i){void 0!==e.xaxis[i]&&"number"==typeof e.xaxis[i]&&("min"===i?t.minY=e.xaxis[i]:t.maxY=e.xaxis[i])}))}return t.isMultipleYAxis?(this.scales.setMultipleYScales(),t.minY=i,t.yAxisScale.forEach((function(e,i){t.minYArr[i]=e.niceMin,t.maxYArr[i]=e.niceMax}))):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.yAxisScale[0].niceMin,t.maxYArr[0]=t.yAxisScale[0].niceMax),{minY:t.minY,maxY:t.maxY,minYArr:t.minYArr,maxYArr:t.maxYArr,yAxisScale:t.yAxisScale}}},{key:"setXRange",value:function(){var t=this.w.globals,e=this.w.config,i="numeric"===e.xaxis.type||"datetime"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided||t.noLabelsProvided||t.isXNumeric;if(t.isXNumeric&&function(){for(var e=0;e<t.series.length;e++)if(t.labels[e])for(var i=0;i<t.labels[e].length;i++)null!==t.labels[e][i]&&x.isNumber(t.labels[e][i])&&(t.maxX=Math.max(t.maxX,t.labels[e][i]),t.initialMaxX=Math.max(t.maxX,t.labels[e][i]),t.minX=Math.min(t.minX,t.labels[e][i]),t.initialMinX=Math.min(t.minX,t.labels[e][i]))}(),t.noLabelsProvided&&0===e.xaxis.categories.length&&(t.maxX=t.labels[t.labels.length-1],t.initialMaxX=t.labels[t.labels.length-1],t.minX=1,t.initialMinX=1),t.isXNumeric||t.noLabelsProvided||t.dataFormatXNumeric){var a;if(void 0===e.xaxis.tickAmount?(a=Math.round(t.svgWidth/150),"numeric"===e.xaxis.type&&t.dataPoints<30&&(a=t.dataPoints-1),a>t.dataPoints&&0!==t.dataPoints&&(a=t.dataPoints-1)):"dataPoints"===e.xaxis.tickAmount?(t.series.length>1&&(a=t.series[t.maxValsInArrayIndex].length-1),t.isXNumeric&&(a=t.maxX-t.minX-1)):a=e.xaxis.tickAmount,t.xTickAmount=a,void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxX=e.xaxis.max),void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minX=e.xaxis.min),void 0!==e.xaxis.range&&(t.minX=t.maxX-e.xaxis.range),t.minX!==Number.MAX_VALUE&&t.maxX!==-Number.MAX_VALUE)if(e.xaxis.convertedCatToNumeric&&!t.dataFormatXNumeric){for(var s=[],r=t.minX-1;r<t.maxX;r++)s.push(r+1);t.xAxisScale={result:s,niceMin:s[0],niceMax:s[s.length-1]}}else t.xAxisScale=this.scales.setXScale(t.minX,t.maxX);else t.xAxisScale=this.scales.linearScale(1,a,a),t.noLabelsProvided&&t.labels.length>0&&(t.xAxisScale=this.scales.linearScale(1,t.labels.length,a-1),t.seriesX=t.labels.slice());i&&(t.labels=t.xAxisScale.result.slice())}return t.isBarHorizontal&&t.labels.length&&(t.xTickAmount=t.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:t.minX,maxX:t.maxX}}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&x.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}},{key:"_handleSingleDataPoint",value:function(){var t=this.w.globals,e=this.w.config;if(t.minX===t.maxX){var i=new R(this.ctx);if("datetime"===e.xaxis.type){var a=i.getDate(t.minX);e.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2):a.setDate(a.getDate()-2),t.minX=new Date(a).getTime();var s=i.getDate(t.maxX);e.xaxis.labels.datetimeUTC?s.setUTCDate(s.getUTCDate()+2):s.setDate(s.getDate()+2),t.maxX=new Date(s).getTime()}else("numeric"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided)&&(t.minX=t.minX-2,t.initialMinX=t.minX,t.maxX=t.maxX+2,t.initialMaxX=t.maxX)}}},{key:"_getMinXDiff",value:function(){var t=this.w.globals;t.isXNumeric&&t.seriesX.forEach((function(e,i){1===e.length&&e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length-1]);var a=e.slice();a.sort((function(t,e){return t-e})),a.forEach((function(e,i){if(i>0){var s=e-a[i-1];s>0&&(t.minXDiff=Math.min(s,t.minXDiff))}})),1!==t.dataPoints&&t.minXDiff!==Number.MAX_VALUE||(t.minXDiff=.5)}))}},{key:"_setStackedMinMax",value:function(){var t=this.w.globals,e=[],i=[];if(t.series.length)for(var a=0;a<t.series[t.maxValsInArrayIndex].length;a++)for(var s=0,r=0,o=0;o<t.series.length;o++)null!==t.series[o][a]&&x.isNumber(t.series[o][a])&&(t.series[o][a]>0?s=s+parseFloat(t.series[o][a])+1e-4:r+=parseFloat(t.series[o][a])),o===t.series.length-1&&(e.push(s),i.push(r));for(var n=0;n<e.length;n++)t.maxY=Math.max(t.maxY,e[n]),t.minY=Math.min(t.minY,i[n])}}]),t}(),$=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.xaxisFontSize=i.config.xaxis.labels.style.fontSize,this.axisFontFamily=i.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=i.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal="bar"===i.config.chart.type&&i.config.plotOptions.bar.horizontal,this.xAxisoffX=0,"bottom"===i.config.xaxis.position&&(this.xAxisoffX=i.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new G(e)}return r(t,[{key:"drawYaxis",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=i.config.yaxis[t].labels.style,r=s.fontSize,o=s.fontFamily,n=s.fontWeight,l=a.group({class:"apexcharts-yaxis",rel:t,transform:"translate("+i.globals.translateYAxisX[t]+", 0)"});if(this.axesUtils.isYAxisHidden(t))return l;var h=a.group({class:"apexcharts-yaxis-texts-g"});l.add(h);var c=i.globals.yAxisScale[t].result.length-1,d=i.globals.gridHeight/c,g=i.globals.translateY,u=i.globals.yLabelFormatters[t],f=i.globals.yAxisScale[t].result.slice();f=this.axesUtils.checkForReversedLabels(t,f);var p="";if(i.config.yaxis[t].labels.show)for(var x=function(l){var x=f[l];x=u(x,l,i);var b=i.config.yaxis[t].labels.padding;i.config.yaxis[t].opposite&&0!==i.config.yaxis.length&&(b*=-1);var v=e.axesUtils.getYAxisForeColor(s.colors,t),m=a.drawText({x:b,y:g+c/10+i.config.yaxis[t].labels.offsetY+1,text:x,textAnchor:i.config.yaxis[t].opposite?"start":"end",fontSize:r,fontFamily:o,fontWeight:n,maxWidth:i.config.yaxis[t].labels.maxWidth,foreColor:Array.isArray(v)?v[l]:v,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+s.cssClass});l===c&&(p=m),h.add(m);var y=document.createElementNS(i.globals.SVGNS,"title");if(y.textContent=Array.isArray(x)?x.join(" "):x,m.node.appendChild(y),0!==i.config.yaxis[t].labels.rotate){var w=a.rotateAroundCenter(p.node),k=a.rotateAroundCenter(m.node);m.node.setAttribute("transform","rotate(".concat(i.config.yaxis[t].labels.rotate," ").concat(w.x," ").concat(k.y,")"))}g+=d},b=c;b>=0;b--)x(b);if(void 0!==i.config.yaxis[t].title.text){var v=a.group({class:"apexcharts-yaxis-title"}),y=0;i.config.yaxis[t].opposite&&(y=i.globals.translateYAxisX[t]);var w=a.drawText({x:y,y:i.globals.gridHeight/2+i.globals.translateY+i.config.yaxis[t].title.offsetY,text:i.config.yaxis[t].title.text,textAnchor:"end",foreColor:i.config.yaxis[t].title.style.color,fontSize:i.config.yaxis[t].title.style.fontSize,fontWeight:i.config.yaxis[t].title.style.fontWeight,fontFamily:i.config.yaxis[t].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+i.config.yaxis[t].title.style.cssClass});v.add(w),l.add(v)}var k=i.config.yaxis[t].axisBorder,A=31+k.offsetX;if(i.config.yaxis[t].opposite&&(A=-31-k.offsetX),k.show){var S=a.drawLine(A,i.globals.translateY+k.offsetY-2,A,i.globals.gridHeight+i.globals.translateY+k.offsetY+2,k.color,0,k.width);l.add(S)}return i.config.yaxis[t].axisTicks.show&&this.axesUtils.drawYAxisTicks(A,c,k,i.config.yaxis[t].axisTicks,t,d,l),l}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),s=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});a.add(s);var r=e.globals.yAxisScale[t].result.length-1,o=e.globals.gridWidth/r+.1,n=o+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=e.globals.yAxisScale[t].result.slice(),c=e.globals.timescaleLabels;c.length>0&&(this.xaxisLabels=c.slice(),r=(h=c.slice()).length),h=this.axesUtils.checkForReversedLabels(t,h);var d=c.length;if(e.config.xaxis.labels.show)for(var g=d?0:r;d?g<d:g>=0;d?g++:g--){var u=h[g];u=l(u,g,e);var f=e.globals.gridWidth+e.globals.padHorizontal-(n-o+e.config.xaxis.labels.offsetX);if(c.length){var p=this.axesUtils.getLabel(h,c,f,g,this.drawnLabels,this.xaxisFontSize);f=p.x,u=p.text,this.drawnLabels.push(p.text),0===g&&e.globals.skipFirstTimelinelabel&&(u=""),g===h.length-1&&e.globals.skipLastTimelinelabel&&(u="")}var x=i.drawText({x:f,y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30-("top"===e.config.xaxis.position?e.globals.xAxisHeight+e.config.xaxis.axisTicks.height-2:0),text:u,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:e.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});s.add(x),x.tspan(u);var b=document.createElementNS(e.globals.SVGNS,"title");b.textContent=u,x.node.appendChild(b),n+=o}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(t){var e=this.w,i=new m(this.ctx),a=e.config.xaxis.axisBorder;if(a.show){var s=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(s-=15);var r=i.drawLine(e.globals.padHorizontal+s+a.offsetX,this.xAxisoffX,e.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);t.add(r)}}},{key:"inversedYAxisTitleText",value:function(t){var e=this.w,i=new m(this.ctx);if(void 0!==e.config.xaxis.title.text){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),s=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(e.config.xaxis.title.style.fontSize)+e.config.xaxis.title.offsetY+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});a.add(s),t.add(a)}}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,a=new m(this.ctx),s={width:0,height:0},r={width:0,height:0},o=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g"));null!==o&&(s=o.getBoundingClientRect());var n=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text"));if(null!==n&&(r=n.getBoundingClientRect()),null!==n){var l=this.xPaddingForYAxisTitle(t,s,r,e);n.setAttribute("x",l.xPos-(e?10:0))}if(null!==n){var h=a.rotateAroundCenter(n);n.setAttribute("transform","rotate(".concat(e?-1*i.config.yaxis[t].title.rotate:i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,a){var s=this.w,r=0,o=0,n=10;return void 0===s.config.yaxis[t].title.text||t<0?{xPos:o,padd:0}:(a?(o=e.width+s.config.yaxis[t].title.offsetX+i.width/2+n/2,0===(r+=1)&&(o-=n/2)):(o=-1*e.width+s.config.yaxis[t].title.offsetX+n/2+i.width/2,s.globals.isBarHorizontal&&(n=25,o=-1*e.width-s.config.yaxis[t].title.offsetX-n)),{xPos:o,padd:n})}},{key:"setYAxisXPosition",value:function(t,e){var i=this.w,a=0,s=0,r=18,o=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.map((function(n,l){var h=i.globals.ignoreYAxisIndexes.indexOf(l)>-1||!n.show||n.floating||0===t[l].width,c=t[l].width+e[l].width;n.opposite?i.globals.isBarHorizontal?(s=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[l]=s-n.labels.offsetX):(s=i.globals.gridWidth+i.globals.translateX+o,h||(o=o+c+20),i.globals.translateYAxisX[l]=s-n.labels.offsetX+20):(a=i.globals.translateX-r,h||(r=r+c+20),i.globals.translateYAxisX[l]=a+n.labels.offsetX)}))}},{key:"setYAxisTextAlignments",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");(e=x.listToArray(e)).forEach((function(e,i){var a=t.config.yaxis[i];if(a&&void 0!==a.labels.align){var s=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-texts-g")),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-label"));r=x.listToArray(r);var o=s.getBoundingClientRect();"left"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","start")})),a.opposite||s.setAttribute("transform","translate(-".concat(o.width,", 0)"))):"center"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","middle")})),s.setAttribute("transform","translate(".concat(o.width/2*(a.opposite?1:-1),", 0)"))):"right"===a.labels.align&&(r.forEach((function(t,e){t.setAttribute("text-anchor","end")})),a.opposite&&s.setAttribute("transform","translate(".concat(o.width,", 0)")))}}))}}]),t}(),J=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.documentEvent=x.bind(this.documentEvent,this)}return r(t,[{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var a=i.globals.events[t].indexOf(e);-1!==a&&i.globals.events[t].splice(a,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var a=i.globals.events[t],s=a.length,r=0;r<s;r++)a[r].apply(null,e)}}},{key:"setupEventHandlers",value:function(){var t=this,e=this.w,i=this.ctx,a=e.globals.dom.baseEl.querySelector(e.globals.chartClass);this.ctx.eventList.forEach((function(t){a.addEventListener(t,(function(t){var a=Object.assign({},e,{seriesIndex:e.globals.capturedSeriesIndex,dataPointIndex:e.globals.capturedDataPointIndex});"mousemove"===t.type||"touchmove"===t.type?"function"==typeof e.config.chart.events.mouseMove&&e.config.chart.events.mouseMove(t,i,a):"mouseleave"===t.type||"touchleave"===t.type?"function"==typeof e.config.chart.events.mouseLeave&&e.config.chart.events.mouseLeave(t,i,a):("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t,i,a),i.ctx.events.fireEvent("click",[t,i,a]))}),{capture:!1,passive:!0})})),this.ctx.eventList.forEach((function(i){e.globals.dom.baseEl.addEventListener(i,t.documentEvent,{passive:!0})})),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(t){var e=this.w,i=t.target.className;if("click"===t.type){var a=e.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&"apexcharts-menu-icon"!==i&&a.classList.remove("apexcharts-menu-open")}e.globals.clientX="touchmove"===t.type?t.touches[0].clientX:t.clientX,e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY}}]),t}(),Q=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter((function(e){return e.name===t}))[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=x.extend(C,i);this.w.globals.locale=a.options}}]),t}(),K=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawAxis",value:function(t,e){var i,a,s=this.w.globals,r=this.w.config,o=new _(this.ctx),n=new $(this.ctx);s.axisCharts&&"radar"!==t&&(s.isBarHorizontal?(a=n.drawYaxisInversed(0),i=o.drawXaxisInversed(0),s.dom.elGraphical.add(i),s.dom.elGraphical.add(a)):(i=o.drawXaxis(),s.dom.elGraphical.add(i),r.yaxis.map((function(t,e){-1===s.ignoreYAxisIndexes.indexOf(e)&&(a=n.drawYaxis(e),s.dom.Paper.add(a))}))))}}]),t}(),tt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new m(this.ctx),i=new v(this.ctx),a=t.config.xaxis.crosshairs.fill.gradient,s=t.config.xaxis.crosshairs.dropShadow,r=t.config.xaxis.crosshairs.fill.type,o=a.colorFrom,n=a.colorTo,l=a.opacityFrom,h=a.opacityTo,c=a.stops,d=s.enabled,g=s.left,u=s.top,f=s.blur,p=s.color,b=s.opacity,y=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===r&&(y=e.drawGradient("vertical",o,n,l,h,null,c,null));var w=e.drawRect();1===t.config.xaxis.crosshairs.width&&(w=e.drawLine());var k=t.globals.gridHeight;(!x.isNumber(k)||k<0)&&(k=0);var A=t.config.xaxis.crosshairs.width;(!x.isNumber(A)||A<0)&&(A=0),w.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:k,width:A,height:k,fill:y,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),d&&(w=i.dropShadow(w,{left:g,top:u,blur:f,color:p,opacity:b})),t.globals.dom.elGraphical.add(w)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new m(this.ctx),i=t.config.yaxis[0].crosshairs,a=t.globals.barPadForNumericAxis;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var r=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,0,0);r.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(r)}}]),t}(),et=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,a=i.config;if(0!==a.responsive.length){var s=a.responsive.slice();s.sort((function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0})).reverse();var r=new N({}),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=s[0].breakpoint,o=window.innerWidth>0?window.innerWidth:screen.width;if(o>a){var n=y.extendArrayProps(r,i.globals.initialConfig,i);t=x.extend(n,t),t=x.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var l=0;l<s.length;l++)o<s[l].breakpoint&&(t=y.extendArrayProps(r,s[l].options,i),t=x.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var n=y.extendArrayProps(r,t,i);n=x.extend(i.config,n),o(n=x.extend(n,t))}else o({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new N(t).init({responsiveOverride:!0});this.w.config=e}}]),t}(),it=function(){function t(e){a(this,t),this.ctx=e,this.colors=[],this.w=e.w;var i=this.w;this.isColorFn=!1,this.isHeatmapDistributed="treemap"===i.config.chart.type&&i.config.plotOptions.treemap.distributed||"heatmap"===i.config.chart.type&&i.config.plotOptions.heatmap.distributed,this.isBarDistributed=i.config.plotOptions.bar.distributed&&("bar"===i.config.chart.type||"rangeBar"===i.config.chart.type)}return r(t,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this,e=this.w,i=new x;if(e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode)),void 0===e.config.colors?e.globals.colors=this.predefined():(e.globals.colors=e.config.colors,Array.isArray(e.config.colors)&&e.config.colors.length>0&&"function"==typeof e.config.colors[0]&&(e.globals.colors=e.config.series.map((function(i,a){var s=e.config.colors[a];return s||(s=e.config.colors[0]),"function"==typeof s?(t.isColorFn=!0,s({value:e.globals.axisCharts?e.globals.series[a][0]?e.globals.series[a][0]:0:e.globals.series[a],seriesIndex:a,dataPointIndex:a,w:e})):s})))),e.globals.seriesColors.map((function(t,i){t&&(e.globals.colors[i]=t)})),e.config.theme.monochrome.enabled){var a=[],s=e.globals.series.length;(this.isBarDistributed||this.isHeatmapDistributed)&&(s=e.globals.series[0].length*e.globals.series.length);for(var r=e.config.theme.monochrome.color,o=1/(s/e.config.theme.monochrome.shadeIntensity),n=e.config.theme.monochrome.shadeTo,l=0,h=0;h<s;h++){var c=void 0;"dark"===n?(c=i.shadeColor(-1*l,r),l+=o):(c=i.shadeColor(l,r),l+=o),a.push(c)}e.globals.colors=a.slice()}var d=e.globals.colors.slice();this.pushExtraColors(e.globals.colors);["fill","stroke"].forEach((function(i){void 0===e.config[i].colors?e.globals[i].colors=t.isColorFn?e.config.colors:d:e.globals[i].colors=e.config[i].colors.slice(),t.pushExtraColors(e.globals[i].colors)})),void 0===e.config.dataLabels.style.colors?e.globals.dataLabels.style.colors=d:e.globals.dataLabels.style.colors=e.config.dataLabels.style.colors.slice(),this.pushExtraColors(e.globals.dataLabels.style.colors,50),void 0===e.config.plotOptions.radar.polygons.fill.colors?e.globals.radarPolygons.fill.colors=["dark"===e.config.theme.mode?"#424242":"none"]:e.globals.radarPolygons.fill.colors=e.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(e.globals.radarPolygons.fill.colors,20),void 0===e.config.markers.colors?e.globals.markers.colors=d:e.globals.markers.colors=e.config.markers.colors.slice(),this.pushExtraColors(e.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=e||a.globals.series.length;if(null===i&&(i=this.isBarDistributed||this.isHeatmapDistributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(s=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),t.length<s)for(var r=s-t.length,o=0;o<r;o++)t.push(t[o])}},{key:"updateThemeOptions",value:function(t){t.chart=t.chart||{},t.tooltip=t.tooltip||{};var e=t.theme.mode||"light",i=t.theme.palette?t.theme.palette:"dark"===e?"palette4":"palette1",a=t.chart.foreColor?t.chart.foreColor:"dark"===e?"#f6f7f8":"#373d3f";return t.tooltip.theme=e,t.chart.foreColor=a,t.theme.palette=i,t}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),t}(),at=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,a=e.globals.svgWidth/2,s=i.offsetY,r="middle";if("left"===i.align?(a=10,r="start"):"right"===i.align&&(a=e.globals.svgWidth-10,r="end"),a+=i.offsetX,s=s+parseInt(i.style.fontSize,10)+i.margin/2,void 0!==i.text){var o=new m(this.ctx).drawText({x:a,y:s,text:i.text,textAnchor:r,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});o.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(o)}}}]),t}(),st=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,a=0,s="title"===t?e.config.title.floating:e.config.subtitle.floating,r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==r&&!s){var o=r.getBoundingClientRect();i=o.width,a=e.globals.axisCharts?o.height+5:o.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-legend");t.config.legend.height||"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(e.style.maxHeight=t.globals.svgHeight/2+"px");var i=Object.assign({},x.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},"left"!==t.config.legend.position&&"right"!==t.config.legend.position||1.5*this.dCtx.lgRect.width>t.globals.svgWidth&&(this.dCtx.lgRect.width=t.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getLargestStringFromMultiArr",value:function(t,e){var i=t;if(this.w.globals.isMultiLineX){var a=e.map((function(t,e){return Array.isArray(t)?t.length:1})),s=Math.max.apply(Math,u(a));i=e[a.indexOf(s)]}return i}}]),t}(),rt=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.config.xaxis.convertedCatToNumeric&&0===i.length&&(i=e.globals.categoryLabels),e.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();t={width:a.width,height:a.height},e.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends="left"!==e.config.legend.position&&"right"!==e.config.legend.position||e.config.legend.floating?0:this.dCtx.lgRect.width;var s=e.globals.xLabelFormatter,r=x.getLargestStringFromArr(i),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,i);e.globals.isBarHorizontal&&(o=r=e.globals.yAxisScale[0].result.reduce((function(t,e){return t.length>e.length?t:e}),0));var n=new V(this.dCtx.ctx),l=r;r=n.xLabelFormat(s,r,l,{i:void 0,dateFormatter:new R(this.dCtx.ctx).formatDate,w:e}),o=n.xLabelFormat(s,o,l,{i:void 0,dateFormatter:new R(this.dCtx.ctx).formatDate,w:e}),(e.config.xaxis.convertedCatToNumeric&&void 0===r||""===String(r).trim())&&(o=r="1");var h=new m(this.dCtx.ctx),c=h.getTextRects(r,e.config.xaxis.labels.style.fontSize),d=c;if(r!==o&&(d=h.getTextRects(o,e.config.xaxis.labels.style.fontSize)),(t={width:c.width>=d.width?c.width:d.width,height:c.height>=d.height?c.height:d.height}).width*i.length>e.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&0!==e.config.xaxis.labels.rotate||e.config.xaxis.labels.rotateAlways){if(!e.globals.isBarHorizontal){e.globals.rotateXLabels=!0;var g=function(t){return h.getTextRects(t,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1)};c=g(r),r!==o&&(d=g(o)),t.height=(c.height>d.height?c.height:d.height)/1.5,t.width=c.width>d.width?c.width:d.width}}else e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getxAxisGroupLabelsCoords",value:function(){var t,e=this.w;if(!e.globals.hasGroups)return{width:0,height:0};var i,a=(null===(t=e.config.xaxis.group.style)||void 0===t?void 0:t.fontSize)||e.config.xaxis.labels.style.fontSize,s=e.globals.groups.map((function(t){return t.title})),r=x.getLargestStringFromArr(s),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,s),n=new m(this.dCtx.ctx),l=n.getTextRects(r,a),h=l;return r!==o&&(h=n.getTextRects(o,a)),i={width:l.width>=h.width?l.width:h.width,height:l.height>=h.height?l.height:h.height},e.config.xaxis.labels.show||(i={width:0,height:0}),{width:i.width,height:i.height}}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var a=new m(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=a.width,i=a.height}return{width:e,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w;this.dCtx.timescaleLabels=e.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map((function(t){return t.value})),a=i.reduce((function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e}),0);return 1.05*(t=new m(this.dCtx.ctx).getTextRects(a,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w,a=i.globals,s=i.config,r=s.xaxis.type,o=t.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var n=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,l=function(t,n){(function(t){return-1!==a.collapsedSeriesIndices.indexOf(t)})(n)||function(t){if(e.dCtx.timescaleLabels&&e.dCtx.timescaleLabels.length){var n=e.dCtx.timescaleLabels[0],l=e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length-1].position+o/1.75-e.dCtx.yAxisWidthRight,h=n.position-o/1.75+e.dCtx.yAxisWidthLeft,c="right"===i.config.legend.position&&e.dCtx.lgRect.width>0?e.dCtx.lgRect.width:0;l>a.svgWidth-a.translateX-c&&(a.skipLastTimelinelabel=!0),h<-(t.show&&!t.floating||"bar"!==s.chart.type&&"candlestick"!==s.chart.type&&"rangeBar"!==s.chart.type&&"boxPlot"!==s.chart.type?10:o/1.75)&&(a.skipFirstTimelinelabel=!0)}else"datetime"===r?e.dCtx.gridPad.right<o&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):"datetime"!==r&&e.dCtx.gridPad.right<o/2-e.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&("between"!==i.config.xaxis.tickPlacement||i.globals.isBarHorizontal)&&(e.dCtx.xPadRight=o/2+1)}(t)};s.yaxis.forEach((function(t,i){n?(e.dCtx.gridPad.left<o&&(e.dCtx.xPadLeft=o/2+1),e.dCtx.xPadRight=o/2+1):l(t,i)}))}}]),t}(),ot=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],a=10,s=new G(this.dCtx.ctx);return e.config.yaxis.map((function(r,o){var n=e.globals.yAxisScale[o],l=0;if(!s.isYAxisHidden(o)&&r.labels.show&&void 0!==r.labels.minWidth&&(l=r.labels.minWidth),!s.isYAxisHidden(o)&&r.labels.show&&n.result.length){var h=e.globals.yLabelFormatters[o],c=n.niceMin===Number.MIN_VALUE?0:n.niceMin,d=String(c).length>String(n.niceMax).length?c:n.niceMax,g=h(d,{seriesIndex:o,dataPointIndex:-1,w:e}),u=g;if(void 0!==g&&0!==g.length||(g=d),e.globals.isBarHorizontal){a=0;var f=e.globals.labels.slice();g=h(g=x.getLargestStringFromArr(f),{seriesIndex:o,dataPointIndex:-1,w:e}),u=t.dCtx.dimHelpers.getLargestStringFromMultiArr(g,f)}var p=new m(t.dCtx.ctx),b="rotate(".concat(r.labels.rotate," 0 0)"),v=p.getTextRects(g,r.labels.style.fontSize,r.labels.style.fontFamily,b,!1),y=v;g!==u&&(y=p.getTextRects(u,r.labels.style.fontSize,r.labels.style.fontFamily,b,!1)),i.push({width:(l>y.width||l>v.width?l:y.width>v.width?y.width:v.width)+a,height:y.height>v.height?y.height:v.height})}else i.push({width:0,height:0})})),i}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map((function(e,a){if(e.show&&void 0!==e.title.text){var s=new m(t.dCtx.ctx),r="rotate(".concat(e.title.rotate," 0 0)"),o=s.getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,r,!1);i.push({width:o.width,height:o.height})}else i.push({width:0,height:0})})),i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=0,a=0,s=t.globals.yAxisScale.length>1?10:0,r=new G(this.dCtx.ctx),o=function(o,n){var l=t.config.yaxis[n].floating,h=0;o.width>0&&!l?(h=o.width+s,function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1}(n)&&(h=h-o.width-s)):h=l||r.isYAxisHidden(n)?0:5,t.config.yaxis[n].opposite?a+=h:i+=h,e+=h};return t.globals.yLabelsCoords.map((function(t,e){o(t,e)})),t.globals.yTitleCoords.map((function(t,e){o(t,e)})),t.globals.isBarHorizontal&&!t.config.yaxis[0].floating&&(e=t.globals.yLabelsCoords[0].width+t.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,e}}]),t}(),nt=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"gridPadForColumnsInNumericAxis",value:function(t){var e=this.w;if(e.globals.noData||e.globals.allSeriesCollapsed)return 0;var i=function(t){return"bar"===t||"rangeBar"===t||"candlestick"===t||"boxPlot"===t},a=e.config.chart.type,s=0,r=i(a)?e.config.series.length:1;if(e.globals.comboBarCount>0&&(r=e.globals.comboBarCount),e.globals.collapsedSeries.forEach((function(t){i(t.type)&&(r-=1)})),e.config.chart.stacked&&(r=1),(i(a)||e.globals.comboBarCount>0)&&e.globals.isXNumeric&&!e.globals.isBarHorizontal&&r>0){var o,n,l=Math.abs(e.globals.initialMaxX-e.globals.initialMinX);l<=3&&(l=e.globals.dataPoints),o=l/t,e.globals.minXDiff&&e.globals.minXDiff/o>0&&(n=e.globals.minXDiff/o),n>t/2&&(n/=2),(s=n/r*parseInt(e.config.plotOptions.bar.columnWidth,10)/100)<1&&(s=1),s=s/(r>1?1:1.5)+5,e.globals.barPadForNumericAxis=s}return s}},{key:"gridPadFortitleSubtitle",value:function(){var t=this,e=this.w,i=e.globals,a=this.dCtx.isSparkline||!e.globals.axisCharts?0:10;["title","subtitle"].forEach((function(i){void 0!==e.config[i].text?a+=e.config[i].margin:a+=t.dCtx.isSparkline||!e.globals.axisCharts?0:5})),!e.config.legend.show||"bottom"!==e.config.legend.position||e.config.legend.floating||e.globals.axisCharts||(a+=10);var s=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),r=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight=i.gridHeight-s.height-r.height-a,i.translateY=i.translateY+s.height+r.height+a}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w,a=new G(this.dCtx.ctx);i.config.yaxis.map((function(s,r){-1!==i.globals.ignoreYAxisIndexes.indexOf(r)||s.floating||a.isYAxisHidden(r)||(s.opposite&&(i.globals.translateX=i.globals.translateX-(e[r].width+t[r].width)-parseInt(i.config.yaxis[r].labels.style.fontSize,10)/1.2-12),i.globals.translateX<2&&(i.globals.translateX=2))}))}}]),t}(),lt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new st(this),this.dimYAxis=new ot(this),this.dimXAxis=new rt(this),this.dimGrid=new nt(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return r(t,[{key:"plotCoords",value:function(){var t=this,e=this.w,i=e.globals;this.lgRect=this.dimHelpers.getLegendsRect(),this.isSparkline&&(e.config.markers.discrete.length>0||e.config.markers.size>0)&&Object.entries(this.gridPad).forEach((function(e){var i=g(e,2),a=i[0],s=i[1];t.gridPad[a]=Math.max(s,t.w.globals.markers.largestSize/1.5)})),i.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),i.gridHeight=i.gridHeight-this.gridPad.top-this.gridPad.bottom,i.gridWidth=i.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var a=this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);i.gridWidth=i.gridWidth-2*a,i.translateX=i.translateX+this.gridPad.left+this.xPadLeft+(a>0?a+4:0),i.translateY=i.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var t=this,e=this.w,i=e.globals,a=this.dimYAxis.getyAxisLabelsCoords(),s=this.dimYAxis.getyAxisTitleCoords();e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map((function(t,i){e.globals.yLabelsCoords.push({width:a[i].width,index:i}),e.globals.yTitleCoords.push({width:s[i].width,index:i})})),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var r=this.dimXAxis.getxAxisLabelsCoords(),o=this.dimXAxis.getxAxisGroupLabelsCoords(),n=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(r,n,o),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,e.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var l=this.yAxisWidth,h=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight-n.height,i.xAxisGroupLabelsHeight=i.xAxisLabelsHeight-r.height,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var c=10;("radar"===e.config.chart.type||this.isSparkline)&&(l=0,h=i.goldenPadding),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||"treemap"===e.config.chart.type)&&(l=0,h=0,c=0),this.isSparkline||this.dimXAxis.additionalPaddingXLabels(r);var d=function(){i.translateX=l,i.gridHeight=i.svgHeight-t.lgRect.height-h-(t.isSparkline||"treemap"===e.config.chart.type?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-l};switch("top"===e.config.xaxis.position&&(c=i.xAxisHeight-e.config.xaxis.axisTicks.height-5),e.config.legend.position){case"bottom":i.translateY=c,d();break;case"top":i.translateY=this.lgRect.height+c,d();break;case"left":i.translateY=c,i.translateX=this.lgRect.width+l,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l;break;case"right":i.translateY=c,i.translateX=l,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(s,a),new $(this.ctx).setYAxisXPosition(a,s)}},{key:"setDimensionsForNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=t.config,a=0;t.config.legend.show&&!t.config.legend.floating&&(a=20);var s="pie"===i.chart.type||"polarArea"===i.chart.type||"donut"===i.chart.type?"pie":"radialBar",r=i.plotOptions[s].offsetY,o=i.plotOptions[s].offsetX;if(!i.legend.show||i.legend.floating)return e.gridHeight=e.svgHeight-i.grid.padding.left+i.grid.padding.right,e.gridWidth=e.gridHeight,e.translateY=r,void(e.translateX=o+(e.svgWidth-e.gridWidth)/2);switch(i.legend.position){case"bottom":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=r-10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"top":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=this.lgRect.height+r+10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"left":e.gridWidth=e.svgWidth-this.lgRect.width-a,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+this.lgRect.width+a;break;case"right":e.gridWidth=e.svgWidth-this.lgRect.width-a-5,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(t,e,i){var a=this.w,s=a.globals.hasGroups?2:1,r=i.height+t.height+e.height,o=a.globals.isMultiLineX?1.2:a.globals.LINE_HEIGHT_RATIO,n=a.globals.rotateXLabels?22:10,l=a.globals.rotateXLabels&&"bottom"===a.config.legend.position?10:0;this.xAxisHeight=r*o+s*n+l,this.xAxisWidth=t.width,this.xAxisHeight-e.height>a.config.xaxis.labels.maxHeight&&(this.xAxisHeight=a.config.xaxis.labels.maxHeight),a.config.xaxis.labels.minHeight&&this.xAxisHeight<a.config.xaxis.labels.minHeight&&(this.xAxisHeight=a.config.xaxis.labels.minHeight),a.config.xaxis.floating&&(this.xAxisHeight=0);var h=0,c=0;a.config.yaxis.forEach((function(t){h+=t.labels.minWidth,c+=t.labels.maxWidth})),this.yAxisWidth<h&&(this.yAxisWidth=h),this.yAxisWidth>c&&(this.yAxisWidth=c)}}]),t}(),ht=function(){function t(e){a(this,t),this.w=e.w,this.lgCtx=e}return r(t,[{key:"getLegendStyles",value:function(){var t=document.createElement("style");t.setAttribute("type","text/css");var e=document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }");return t.appendChild(e),t}},{key:"getLegendBBox",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"appendToForeignObject",value:function(){var t=this.w.globals;t.dom.elLegendForeign=document.createElementNS(t.SVGNS,"foreignObject");var e=t.dom.elLegendForeign;e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("width",t.svgWidth),e.setAttribute("height",t.svgHeight),t.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.appendChild(t.dom.elLegendWrap),e.appendChild(this.getLegendStyles()),t.dom.Paper.node.insertBefore(e,t.dom.elGraphical.node)}},{key:"toggleDataSeries",value:function(t,e){var i=this,a=this.w;if(a.globals.axisCharts||"radialBar"===a.config.chart.type){a.globals.resized=!0;var s=null,r=null;if(a.globals.risingSeries=[],a.globals.axisCharts?(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),r=parseInt(s.getAttribute("data:realIndex"),10)):(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),r=parseInt(s.getAttribute("rel"),10)-1),e)[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach((function(t){i.riseCollapsedSeries(t.cs,t.csi,r)}));else this.hideSeries({seriesEl:s,realIndex:r})}else{var o=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1,"'] path")),n=a.config.chart.type;if("pie"===n||"polarArea"===n||"donut"===n){var l=a.config.plotOptions.pie.donut.labels;new m(this.lgCtx.ctx).pathMouseDown(o.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node,l)}o.fire("click")}}},{key:"hideSeries",value:function(t){var e=t.seriesEl,i=t.realIndex,a=this.w,s=x.clone(a.config.series);if(a.globals.axisCharts){var r=!1;if(a.config.yaxis[i]&&a.config.yaxis[i].show&&a.config.yaxis[i].showAlways&&(r=!0,a.globals.ancillaryCollapsedSeriesIndices.indexOf(i)<0&&(a.globals.ancillaryCollapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.ancillaryCollapsedSeriesIndices.push(i))),!r){a.globals.collapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.collapsedSeriesIndices.push(i);var o=a.globals.risingSeries.indexOf(i);a.globals.risingSeries.splice(o,1)}}else a.globals.collapsedSeries.push({index:i,data:s[i]}),a.globals.collapsedSeriesIndices.push(i);for(var n=e.childNodes,l=0;l<n.length;l++)n[l].classList.contains("apexcharts-series-markers-wrap")&&(n[l].classList.contains("apexcharts-hide")?n[l].classList.remove("apexcharts-hide"):n[l].classList.add("apexcharts-hide"));a.globals.allSeriesCollapsed=a.globals.collapsedSeries.length===a.config.series.length,s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(t,e,i){var a=this.w,s=x.clone(a.config.series);if(t.length>0){for(var r=0;r<t.length;r++)t[r].index===i&&(a.globals.axisCharts?(s[i].data=t[r].data.slice(),t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)):(s[i]=t[r].data,t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)));s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(t){var e=this.w;return e.globals.axisCharts?t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a].data=[])})):t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a]=0)})),t}}]),t}(),ct=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed="bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.distributed&&1===this.w.config.series.length,this.legendHelpers=new ht(this)}return r(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config;if((i.legend.showForSingleSeries&&1===e.series.length||this.isBarsDistributed||e.series.length>1||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),x.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()):this.legendHelpers.appendToForeignObject(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"drawLegends",value:function(){var t=this,e=this.w,i=e.config.legend.fontFamily,a=e.globals.seriesNames,s=e.globals.colors.slice();if("heatmap"===e.config.chart.type){var r=e.config.plotOptions.heatmap.colorScale.ranges;a=r.map((function(t){return t.name?t.name:t.from+" - "+t.to})),s=r.map((function(t){return t.color}))}else this.isBarsDistributed&&(a=e.globals.labels.slice());e.config.legend.customLegendItems.length&&(a=e.config.legend.customLegendItems);for(var o=e.globals.legendFormatter,n=e.config.legend.inverseOrder,l=n?a.length-1:0;n?l>=0:l<=a.length-1;n?l--:l++){var h=o(a[l],{seriesIndex:l,w:e}),c=!1,d=!1;if(e.globals.collapsedSeries.length>0)for(var g=0;g<e.globals.collapsedSeries.length;g++)e.globals.collapsedSeries[g].index===l&&(c=!0);if(e.globals.ancillaryCollapsedSeriesIndices.length>0)for(var u=0;u<e.globals.ancillaryCollapsedSeriesIndices.length;u++)e.globals.ancillaryCollapsedSeriesIndices[u]===l&&(d=!0);var f=document.createElement("span");f.classList.add("apexcharts-legend-marker");var p=e.config.legend.markers.offsetX,b=e.config.legend.markers.offsetY,v=e.config.legend.markers.height,w=e.config.legend.markers.width,k=e.config.legend.markers.strokeWidth,A=e.config.legend.markers.strokeColor,S=e.config.legend.markers.radius,C=f.style;C.background=s[l],C.color=s[l],C.setProperty("background",s[l],"important"),e.config.legend.markers.fillColors&&e.config.legend.markers.fillColors[l]&&(C.background=e.config.legend.markers.fillColors[l]),void 0!==e.globals.seriesColors[l]&&(C.background=e.globals.seriesColors[l],C.color=e.globals.seriesColors[l]),C.height=Array.isArray(v)?parseFloat(v[l])+"px":parseFloat(v)+"px",C.width=Array.isArray(w)?parseFloat(w[l])+"px":parseFloat(w)+"px",C.left=(Array.isArray(p)?parseFloat(p[l]):parseFloat(p))+"px",C.top=(Array.isArray(b)?parseFloat(b[l]):parseFloat(b))+"px",C.borderWidth=Array.isArray(k)?k[l]:k,C.borderColor=Array.isArray(A)?A[l]:A,C.borderRadius=Array.isArray(S)?parseFloat(S[l])+"px":parseFloat(S)+"px",e.config.legend.markers.customHTML&&(Array.isArray(e.config.legend.markers.customHTML)?e.config.legend.markers.customHTML[l]&&(f.innerHTML=e.config.legend.markers.customHTML[l]()):f.innerHTML=e.config.legend.markers.customHTML()),m.setAttrs(f,{rel:l+1,"data:collapsed":c||d}),(c||d)&&f.classList.add("apexcharts-inactive-legend");var L=document.createElement("div"),P=document.createElement("span");P.classList.add("apexcharts-legend-text"),P.innerHTML=Array.isArray(h)?h.join(" "):h;var M=e.config.legend.labels.useSeriesColors?e.globals.colors[l]:e.config.legend.labels.colors;M||(M=e.config.chart.foreColor),P.style.color=M,P.style.fontSize=parseFloat(e.config.legend.fontSize)+"px",P.style.fontWeight=e.config.legend.fontWeight,P.style.fontFamily=i||e.config.chart.fontFamily,m.setAttrs(P,{rel:l+1,i:l,"data:default-text":encodeURIComponent(h),"data:collapsed":c||d}),L.appendChild(f),L.appendChild(P);var T=new y(this.ctx);if(!e.config.legend.showForZeroSeries)0===T.getSeriesTotalByIndex(l)&&T.seriesHaveSameValues(l)&&!T.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-zero-series");e.config.legend.showForNullSeries||T.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-null-series"),e.globals.dom.elLegendWrap.appendChild(L),e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)),e.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+e.config.legend.position),L.classList.add("apexcharts-legend-series"),L.style.margin="".concat(e.config.legend.itemMargin.vertical,"px ").concat(e.config.legend.itemMargin.horizontal,"px"),e.globals.dom.elLegendWrap.style.width=e.config.legend.width?e.config.legend.width+"px":"",e.globals.dom.elLegendWrap.style.height=e.config.legend.height?e.config.legend.height+"px":"",m.setAttrs(L,{rel:l+1,seriesName:x.escapeString(a[l]),"data:collapsed":c||d}),(c||d)&&L.classList.add("apexcharts-inactive-legend"),e.config.legend.onItemClick.toggleDataSeries||L.classList.add("apexcharts-no-click")}e.globals.dom.elWrap.addEventListener("click",t.onLegendClick,!0),e.config.legend.onItemHover.highlightDataSeries&&0===e.config.legend.customLegendItems.length&&(e.globals.dom.elWrap.addEventListener("mousemove",t.onLegendHovered,!0),e.globals.dom.elWrap.addEventListener("mouseout",t.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,a=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),s=a.getBoundingClientRect(),r=0,o=0;if("bottom"===i.config.legend.position)o+=i.globals.svgHeight-s.height/2;else if("top"===i.config.legend.position){var n=new lt(this.ctx),l=n.dimHelpers.getTitleSubtitleCoords("title").height,h=n.dimHelpers.getTitleSubtitleCoords("subtitle").height;o=o+(l>0?l-10:0)+(h>0?h-10:0)}a.style.position="absolute",r=r+t+i.config.legend.offsetX,o=o+e+i.config.legend.offsetY,a.style.left=r+"px",a.style.top=o+"px","bottom"===i.config.legend.position?(a.style.top="auto",a.style.bottom=5-i.config.legend.offsetY+"px"):"right"===i.config.legend.position&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px");["width","height"].forEach((function(t){a.style[t]&&(a.style[t]=parseInt(i.config.legend[t],10)+"px")}))}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var e=this.legendHelpers.getLegendBBox(),i=new lt(this.ctx),a=i.dimHelpers.getTitleSubtitleCoords("title"),s=i.dimHelpers.getTitleSubtitleCoords("subtitle"),r=0;"bottom"===t.config.legend.position?r=-e.clwh/1.8:"top"===t.config.legend.position&&(r=a.height+s.height+t.config.title.margin+t.config.subtitle.margin-10),this.setLegendWrapXY(20,r)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.legendHelpers.getLegendBBox(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"===e.config.chart.type||this.isBarsDistributed){if(i){var a=parseInt(t.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new E(this.ctx).highlightRangeInSeries(t,t.target)}}else!t.target.classList.contains("apexcharts-inactive-legend")&&i&&new E(this.ctx).toggleSeriesOnHover(t,t.target)}},{key:"onLegendClick",value:function(t){var e=this.w;if(!e.config.legend.customLegendItems.length&&(t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker"))){var i=parseInt(t.target.getAttribute("rel"),10)-1,a="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var r=this.w.config.legend.markers.onClick;"function"==typeof r&&t.target.classList.contains("apexcharts-legend-marker")&&(r(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),"treemap"!==e.config.chart.type&&"heatmap"!==e.config.chart.type&&!this.isBarsDistributed&&e.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),t}(),dt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=i.globals.minX,this.maxX=i.globals.maxX}return r(t,[{key:"createToolbar",value:function(){var t=this,e=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=e.config.chart.toolbar.offsetY+"px",a.style.right=3-e.config.chart.toolbar.offsetX+"px",e.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=e.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var s=0;s<this.t.customIcons.length;s++)this.elCustomIcons.push(i());var r=[],o=function(i,a,s){var o=i.toLowerCase();t.t[o]&&e.config.chart.zoom.enabled&&r.push({el:a,icon:"string"==typeof t.t[o]?t.t[o]:s,title:t.localeValues[i],class:"apexcharts-".concat(o,"-icon")})};o("zoomIn",this.elZoomIn,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'),o("zoomOut",this.elZoomOut,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');var n=function(i){t.t[i]&&e.config.chart[i].enabled&&r.push({el:"zoom"===i?t.elZoom:t.elSelection,icon:"string"==typeof t.t[i]?t.t[i]:"zoom"===i?'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>':'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',title:t.localeValues["zoom"===i?"selectionZoom":"selection"],class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(i,"-icon")})};n("zoom"),n("selection"),this.t.pan&&e.config.chart.zoom.enabled&&r.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',title:this.localeValues.pan,class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),o("reset",this.elZoomReset,'<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'),this.t.download&&r.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var l=0;l<this.elCustomIcons.length;l++)r.push({el:this.elCustomIcons[l],icon:this.t.customIcons[l].icon,title:this.t.customIcons[l].title,index:this.t.customIcons[l].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[l].class});r.forEach((function(t,e){t.index&&x.moveIndexInArray(r,e,t.index)}));for(var h=0;h<r.length;h++)m.setAttrs(r[h].el,{class:r[h].class,title:r[h].title}),r[h].el.innerHTML=r[h].icon,a.appendChild(r[h].el);this._createHamburgerMenu(a),e.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):e.globals.panEnabled?this.elPan.classList.add(this.selectedClass):e.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(t){this.elMenuItems=[],t.appendChild(this.elMenu),m.setAttrs(this.elMenu,{class:"apexcharts-menu"});var e=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}];this.w.globals.allSeriesHasEqualX||e.splice(2,1);for(var i=0;i<e.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=e[i].title,m.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(e[i].name),title:e[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach((function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.handleDownload.bind(t,"svg")):e.classList.contains("exportPNG")?e.addEventListener("click",t.handleDownload.bind(t,"png")):e.classList.contains("exportCSV")&&e.addEventListener("click",t.handleDownload.bind(t,"csv"))}));for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(t){this.ctx.getSyncedCharts().forEach((function(e){e.ctx.toolbar.toggleOtherControls();var i="selection"===t?e.ctx.toolbar.elSelection:e.ctx.toolbar.elZoom,a="selection"===t?"selectionEnabled":"zoomEnabled";e.w.globals[a]=!e.w.globals[a],i.classList.contains(e.ctx.toolbar.selectedClass)?i.classList.remove(e.ctx.toolbar.selectedClass):i.classList.add(e.ctx.toolbar.selectedClass)}))}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(t){this.toggleOtherControls(),"pan"===t?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var e="pan"===t?this.elPan:this.elZoom,i="pan"===t?this.elZoom:this.elPan;e&&e.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach((function(t){t.ctx.toolbar.toggleOtherControls(),t.w.globals.panEnabled=!t.w.globals.panEnabled,t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass)?t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass):t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)}))}},{key:"toggleOtherControls",value:function(){var t=this,e=this.w;e.globals.panEnabled=!1,e.globals.zoomEnabled=!1,e.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach((function(e){e&&e.classList.remove(t.selectedClass)}))}},{key:"handleZoomIn",value:function(){var t=this.w;t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY);var e=(this.minX+this.maxX)/2,i=(this.minX+e)/2,a=(this.maxX+e)/2,s=this._getNewMinXMaxX(i,a);t.globals.disableZoomIn||this.zoomUpdateOptions(s.minX,s.maxX)}},{key:"handleZoomOut",value:function(){var t=this.w;if(t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY),!("datetime"===t.config.xaxis.type&&new Date(this.minX).getUTCFullYear()<1e3)){var e=(this.minX+this.maxX)/2,i=this.minX-(e-this.minX),a=this.maxX-(e-this.maxX),s=this._getNewMinXMaxX(i,a);t.globals.disableZoomOut||this.zoomUpdateOptions(s.minX,s.maxX)}}},{key:"_getNewMinXMaxX",value:function(t,e){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(t):t,maxX:i?Math.floor(e):e}}},{key:"zoomUpdateOptions",value:function(t,e){var i=this.w;if(void 0!==t||void 0!==e){if(!(i.config.xaxis.convertedCatToNumeric&&(t<1&&(t=1,e=i.globals.dataPoints),e-t<2))){var a={min:t,max:e},s=this.getBeforeZoomRange(a);s&&(a=s.xaxis);var r={xaxis:a},o=x.clone(i.globals.initialConfig.yaxis);if(i.config.chart.zoom.autoScaleYaxis)o=new q(this.ctx).autoScaleY(this.ctx,o,{xaxis:a});i.config.chart.group||(r.yaxis=o),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(r,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,o)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){var t=this;window.setTimeout((function(){t.elMenu.classList.contains("apexcharts-menu-open")?t.elMenu.classList.remove("apexcharts-menu-open"):t.elMenu.classList.add("apexcharts-menu-open")}),0)}},{key:"handleDownload",value:function(t){var e=this.w,i=new j(this.ctx);switch(t){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:e.config.series,columnDelimiter:e.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(t){this.ctx.getSyncedCharts().forEach((function(t){var e=t.w;if(e.globals.lastXAxis.min=void 0,e.globals.lastXAxis.max=void 0,t.updateHelpers.revertDefaultAxisMinMax(),"function"==typeof e.config.chart.events.beforeResetZoom){var i=e.config.chart.events.beforeResetZoom(t,e);i&&t.updateHelpers.revertDefaultAxisMinMax(i)}"function"==typeof e.config.chart.events.zoomed&&t.ctx.toolbar.zoomCallback({min:e.config.xaxis.min,max:e.config.xaxis.max}),e.globals.zoomed=!1;var a=t.ctx.series.emptyCollapsedSeries(x.clone(e.globals.initialSeries));t.updateHelpers._updateSeries(a,e.config.chart.animations.dynamicAnimation.enabled)}))}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),gt=function(t){n(i,t);var e=d(i);function i(t){var s;return a(this,i),(s=e.call(this,t)).ctx=t,s.w=t.w,s.dragged=!1,s.graphics=new m(s.ctx),s.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],s.clientX=0,s.clientY=0,s.startX=0,s.endX=0,s.dragX=0,s.startY=0,s.endY=0,s.dragY=0,s.moveDirection="none",s}return r(i,[{key:"init",value:function(t){var e=this,i=t.xyRatios,a=this.w,s=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=a.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),a.globals.dom.elGraphical.add(this.zoomRect),a.globals.dom.elGraphical.add(this.selectionRect),"x"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:a.globals.gridWidth,maxY:a.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):"y"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:a.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach((function(t){e.hoverArea.addEventListener(t,s.svgMouseEvents.bind(s,i),{capture:!1,passive:!0})}))}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,a=this,s=this.ctx.toolbar,r=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type,o=i.config.chart.toolbar.autoSelected;if(e.shiftKey?(this.shiftWasPressed=!0,s.enableZoomPanFromToolbar("pan"===o?"zoom":"pan")):this.shiftWasPressed&&(s.enableZoomPanFromToolbar(o),this.shiftWasPressed=!1),e.target){var n,l=e.target.classList;if(e.target.parentNode&&null!==e.target.parentNode&&(n=e.target.parentNode.classList),!(l.contains("apexcharts-selection-rect")||l.contains("apexcharts-legend-marker")||l.contains("apexcharts-legend-text")||n&&n.contains("apexcharts-toolbar"))){if(a.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,a.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which){var h=a.gridRect.getBoundingClientRect();a.startX=a.clientX-h.left,a.startY=a.clientY-h.top,a.dragged=!1,a.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(a.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,a.w.globals.mousedown&&a.panDragging({context:a,zoomtype:r,xyRatios:t})):(a.w.globals.mousedown&&i.globals.zoomEnabled||a.w.globals.mousedown&&i.globals.selectionEnabled)&&(a.selection=a.selectionDrawing({context:a,zoomtype:r}))),"mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type){var c=a.gridRect.getBoundingClientRect();a.w.globals.mousedown&&(a.endX=a.clientX-c.left,a.endY=a.clientY-c.top,a.dragX=Math.abs(a.endX-a.startX),a.dragY=Math.abs(a.endY-a.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&a.selectionDrawn({context:a,zoomtype:r}),i.globals.panEnabled&&i.config.xaxis.convertedCatToNumeric&&a.delayedPanScrolled()),i.globals.zoomEnabled&&a.hideSelectionRect(this.selectionRect),a.dragged=!1,a.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"makeSelectionRectDraggable",value:function(){var t=this.w;if(this.selectionRect){var e=this.selectionRect.node.getBoundingClientRect();e.width>0&&e.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:t.globals.gridWidth,maxY:t.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,a={x:i,y:0,width:t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i,height:t.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(a),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,a=t.width,s=t.height,r=t.translateX,o=void 0===r?0:r,n=t.translateY,l=void 0===n?0:n,h=this.w,c=this.zoomRect,d=this.selectionRect;if(this.dragged||null!==h.globals.selection){var g={transform:"translate("+o+", "+l+")"};h.globals.zoomEnabled&&this.dragged&&(a<0&&(a=1),c.attr({x:e,y:i,width:a,height:s,fill:h.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":h.config.chart.zoom.zoomedArea.fill.opacity,stroke:h.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":h.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":h.config.chart.zoom.zoomedArea.stroke.opacity}),m.setAttrs(c.node,g)),h.globals.selectionEnabled&&(d.attr({x:e,y:i,width:a>0?a:0,height:s>0?s:0,fill:h.config.chart.selection.fill.color,"fill-opacity":h.config.chart.selection.fill.opacity,stroke:h.config.chart.selection.stroke.color,"stroke-width":h.config.chart.selection.stroke.width,"stroke-dasharray":h.config.chart.selection.stroke.dashArray,"stroke-opacity":h.config.chart.selection.stroke.opacity}),m.setAttrs(d.node,g))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.gridRect.getBoundingClientRect(),o=s.startX-1,n=s.startY,l=!1,h=!1,c=s.clientX-r.left-o,d=s.clientY-r.top-n,g={};return Math.abs(c+o)>a.globals.gridWidth?c=a.globals.gridWidth-o:s.clientX-r.left<0&&(c=o),o>s.clientX-r.left&&(l=!0,c=Math.abs(c)),n>s.clientY-r.top&&(h=!0,d=Math.abs(d)),g="x"===i?{x:l?o-c:o,y:0,width:c,height:a.globals.gridHeight}:"y"===i?{x:0,y:h?n-d:n,width:a.globals.gridWidth,height:d}:{x:l?o-c:o,y:h?n-d:n,width:c,height:d},s.drawSelectionRect(g),s.selectionDragging("resizing"),g}},{key:"selectionDragging",value:function(t,e){var i=this,a=this.w,s=this.xyRatios,r=this.selectionRect,o=0;"resizing"===t&&(o=30);var n=function(t){return parseFloat(r.node.getAttribute(t))},l={x:n("x"),y:n("y"),width:n("width"),height:n("height")};a.globals.selection=l,"function"==typeof a.config.chart.events.selection&&a.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout((function(){var t=i.gridRect.getBoundingClientRect(),e=r.node.getBoundingClientRect(),o={xaxis:{min:a.globals.xAxisScale.niceMin+(e.left-t.left)*s.xRatio,max:a.globals.xAxisScale.niceMin+(e.right-t.left)*s.xRatio},yaxis:{min:a.globals.yAxisScale[0].niceMin+(t.bottom-e.bottom)*s.yRatio[0],max:a.globals.yAxisScale[0].niceMax-(e.top-t.top)*s.yRatio[0]}};a.config.chart.events.selection(i.ctx,o),a.config.chart.brush.enabled&&void 0!==a.config.chart.events.brushScrolled&&a.config.chart.events.brushScrolled(i.ctx,o)}),o))}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.xyRatios,o=this.ctx.toolbar;if(s.startX>s.endX){var n=s.startX;s.startX=s.endX,s.endX=n}if(s.startY>s.endY){var l=s.startY;s.startY=s.endY,s.endY=l}var h=void 0,c=void 0;a.globals.isRangeBar?(h=a.globals.yAxisScale[0].niceMin+s.startX*r.invertedYRatio,c=a.globals.yAxisScale[0].niceMin+s.endX*r.invertedYRatio):(h=a.globals.xAxisScale.niceMin+s.startX*r.xRatio,c=a.globals.xAxisScale.niceMin+s.endX*r.xRatio);var d=[],g=[];if(a.config.yaxis.forEach((function(t,e){d.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.startY),g.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.endY)})),s.dragged&&(s.dragX>10||s.dragY>10)&&h!==c)if(a.globals.zoomEnabled){var u=x.clone(a.globals.initialConfig.yaxis),f=x.clone(a.globals.initialConfig.xaxis);if(a.globals.zoomed=!0,a.config.xaxis.convertedCatToNumeric&&(h=Math.floor(h),c=Math.floor(c),h<1&&(h=1,c=a.globals.dataPoints),c-h<2&&(c=h+1)),"xy"!==i&&"x"!==i||(f={min:h,max:c}),"xy"!==i&&"y"!==i||u.forEach((function(t,e){u[e].min=g[e],u[e].max=d[e]})),a.config.chart.zoom.autoScaleYaxis){var p=new q(s.ctx);u=p.autoScaleY(s.ctx,u,{xaxis:f})}if(o){var b=o.getBeforeZoomRange(f,u);b&&(f=b.xaxis?b.xaxis:f,u=b.yaxis?b.yaxis:u)}var v={xaxis:f};a.config.chart.group||(v.yaxis=u),s.ctx.updateHelpers._updateOptions(v,!1,s.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof a.config.chart.events.zoomed&&o.zoomCallback(f,u)}else if(a.globals.selectionEnabled){var m,y=null;m={min:h,max:c},"xy"!==i&&"y"!==i||(y=x.clone(a.config.yaxis)).forEach((function(t,e){y[e].min=g[e],y[e].max=d[e]})),a.globals.selection=s.selection,"function"==typeof a.config.chart.events.selection&&a.config.chart.events.selection(s.ctx,{xaxis:m,yaxis:y})}}},{key:"panDragging",value:function(t){var e=t.context,i=this.w,a=e;if(void 0!==i.globals.lastClientPosition.x){var s=i.globals.lastClientPosition.x-a.clientX,r=i.globals.lastClientPosition.y-a.clientY;Math.abs(s)>Math.abs(r)&&s>0?this.moveDirection="left":Math.abs(s)>Math.abs(r)&&s<0?this.moveDirection="right":Math.abs(r)>Math.abs(s)&&r>0?this.moveDirection="up":Math.abs(r)>Math.abs(s)&&r<0&&(this.moveDirection="down")}i.globals.lastClientPosition={x:a.clientX,y:a.clientY};var o=i.globals.isRangeBar?i.globals.minY:i.globals.minX,n=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;i.config.xaxis.convertedCatToNumeric||a.panScrolled(o,n)}},{key:"delayedPanScrolled",value:function(){var t=this.w,e=t.globals.minX,i=t.globals.maxX,a=(t.globals.maxX-t.globals.minX)/2;"left"===this.moveDirection?(e=t.globals.minX+a,i=t.globals.maxX+a):"right"===this.moveDirection&&(e=t.globals.minX-a,i=t.globals.maxX-a),e=Math.floor(e),i=Math.floor(i),this.updateScrolledChart({xaxis:{min:e,max:i}},e,i)}},{key:"panScrolled",value:function(t,e){var i=this.w,a=this.xyRatios,s=x.clone(i.globals.initialConfig.yaxis),r=a.xRatio,o=i.globals.minX,n=i.globals.maxX;i.globals.isRangeBar&&(r=a.invertedYRatio,o=i.globals.minY,n=i.globals.maxY),"left"===this.moveDirection?(t=o+i.globals.gridWidth/15*r,e=n+i.globals.gridWidth/15*r):"right"===this.moveDirection&&(t=o-i.globals.gridWidth/15*r,e=n-i.globals.gridWidth/15*r),i.globals.isRangeBar||(t<i.globals.initialMinX||e>i.globals.initialMaxX)&&(t=o,e=n);var l={min:t,max:e};i.config.chart.zoom.autoScaleYaxis&&(s=new q(this.ctx).autoScaleY(this.ctx,s,{xaxis:l}));var h={xaxis:{min:t,max:e}};i.config.chart.group||(h.yaxis=s),this.updateScrolledChart(h,t,e)}},{key:"updateScrolledChart",value:function(t,e,i){var a=this.w;this.ctx.updateHelpers._updateOptions(t,!1,!1),"function"==typeof a.config.chart.events.scrolled&&a.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),i}(dt),ut=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return r(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,a=t.clientX,s=t.clientY,r=this.w,o=i.getBoundingClientRect(),n=o.width,l=o.height,h=n/(r.globals.dataPoints-1),c=l/r.globals.dataPoints,d=this.hasBars();!r.globals.comboCharts&&!d||r.config.xaxis.convertedCatToNumeric||(h=n/r.globals.dataPoints);var g=a-o.left-r.globals.barPadForNumericAxis,u=s-o.top;g<0||u<0||g>n||u>l?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):r.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):r.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var f=Math.round(g/h),p=Math.floor(u/c);d&&!r.config.xaxis.convertedCatToNumeric&&(f=Math.ceil(g/h),f-=1);var b=null,v=null,m=[],y=[];if(r.globals.seriesXvalues.forEach((function(t){m.push([t[0]+1e-6].concat(t))})),r.globals.seriesYvalues.forEach((function(t){y.push([t[0]+1e-6].concat(t))})),m=m.map((function(t){return t.filter((function(t){return x.isNumber(t)}))})),y=y.map((function(t){return t.filter((function(t){return x.isNumber(t)}))})),r.globals.isXNumeric){var w=this.ttCtx.getElGrid().getBoundingClientRect(),k=g*(w.width/n),A=u*(w.height/l);b=(v=this.closestInMultiArray(k,A,m,y)).index,f=v.j,null!==b&&(m=r.globals.seriesXvalues[b],f=(v=this.closestInArray(k,m)).index)}return r.globals.capturedSeriesIndex=null===b?-1:b,(!f||f<1)&&(f=0),r.globals.isBarHorizontal?r.globals.capturedDataPointIndex=p:r.globals.capturedDataPointIndex=f,{capturedSeries:b,j:r.globals.isBarHorizontal?p:f,hoverX:g,hoverY:u}}},{key:"closestInMultiArray",value:function(t,e,i,a){var s=this.w,r=0,o=null,n=-1;s.globals.series.length>1?r=this.getFirstActiveXArray(i):o=0;var l=i[r][0],h=Math.abs(t-l);if(i.forEach((function(e){e.forEach((function(e,i){var a=Math.abs(t-e);a<h&&(h=a,n=i)}))})),-1!==n){var c=a[r][n],d=Math.abs(e-c);o=r,a.forEach((function(t,i){var a=Math.abs(e-t[n]);a<d&&(d=a,o=i)}))}return{index:o,j:n}}},{key:"getFirstActiveXArray",value:function(t){for(var e=this.w,i=0,a=t.map((function(t,e){return t.length>0?e:-1})),s=0;s<a.length;s++)if(-1!==a[s]&&-1===e.globals.collapsedSeriesIndices.indexOf(s)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)){i=a[s];break}return i}},{key:"closestInArray",value:function(t,e){for(var i=e[0],a=null,s=Math.abs(t-i),r=0;r<e.length;r++){var o=Math.abs(t-e[r]);o<s&&(s=o,a=r)}return{index:a}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter((function(t){return void 0!==t[0]}));if(i.length>0)for(var a=0;a<i.length-1;a++)void 0!==i[a][t]&&void 0!==i[a+1][t]&&i[a][t]!==i[a+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isInitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return u(t).reduce((function(t,e){return t+e.getBBox().height}),0)}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(t=u(t)).sort((function(t,e){var i=Number(t.getAttribute("data:realIndex")),a=Number(e.getAttribute("data:realIndex"));return a<i?1:a>i?-1:0}));var e=[];return t.forEach((function(t){e.push(t.querySelector(".apexcharts-marker"))})),e}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(t){var e=this.w,i=e.config.markers.hover.size;return void 0===i&&(i=e.globals.markers.size[t]+e.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,s=0;s<a.length;s++)"enable"===t?(a[s].classList.add("apexcharts-active"),a[s].style.display=e.config.tooltip.items.display):(a[s].classList.remove("apexcharts-active"),a[s].style.display="none")}}]),t}(),ft=function(){function t(e){a(this,t),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new ut(e)}return r(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,a=t.ttItems,s=t.i,r=void 0===s?0:s,o=t.j,n=void 0===o?null:o,l=t.y1,h=t.y2,c=t.e,d=this.w;void 0!==d.config.tooltip.custom?this.handleCustomTooltip({i:r,j:n,y1:l,y2:h,w:d}):this.toggleActiveInactiveSeries(i);var g=this.getValuesToPrint({i:r,j:n});this.printLabels({i:r,j:n,values:g,ttItems:a,shared:i,e:c});var u=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=u.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=u.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var i,a=this,s=t.i,r=t.j,o=t.values,n=t.ttItems,l=t.shared,h=t.e,c=this.w,d=[],g=function(t){return c.globals.seriesGoals[t]&&c.globals.seriesGoals[t][r]&&Array.isArray(c.globals.seriesGoals[t][r])},u=o.xVal,f=o.zVal,p=o.xAxisTTVal,x="",b=c.globals.colors[s];null!==r&&c.config.plotOptions.bar.distributed&&(b=c.globals.colors[r]);for(var v=function(t,o){var v=a.getFormatters(s);x=a.getSeriesName({fn:v.yLbTitleFormatter,index:s,seriesIndex:s,j:r}),"treemap"===c.config.chart.type&&(x=v.yLbTitleFormatter(String(c.config.series[s].data[r].x),{series:c.globals.series,seriesIndex:s,dataPointIndex:r,w:c}));var m=c.config.tooltip.inverseOrder?o:t;if(c.globals.axisCharts){var y=function(t){return v.yLbFormatter(c.globals.series[t][r],{series:c.globals.series,seriesIndex:t,dataPointIndex:r,w:c})};if(l)v=a.getFormatters(m),x=a.getSeriesName({fn:v.yLbTitleFormatter,index:m,seriesIndex:s,j:r}),b=c.globals.colors[m],i=y(m),g(m)&&(d=c.globals.seriesGoals[m][r].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:m,dataPointIndex:r,w:c})}})));else{var w,k=null==h||null===(w=h.target)||void 0===w?void 0:w.getAttribute("fill");k&&(b=-1!==k.indexOf("url")?document.querySelector(k.substr(4).slice(0,-1)).childNodes[0].getAttribute("stroke"):k),i=y(s),g(s)&&Array.isArray(c.globals.seriesGoals[s][r])&&(d=c.globals.seriesGoals[s][r].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:s,dataPointIndex:r,w:c})}})))}}null===r&&(i=v.yLbFormatter(c.globals.series[s],e(e({},c),{},{seriesIndex:s,dataPointIndex:s}))),a.DOMHandling({i:s,t:m,j:r,ttItems:n,values:{val:i,goalVals:d,xVal:u,xAxisTTVal:p,zVal:f},seriesName:x,shared:l,pColor:b})},m=0,y=c.globals.series.length-1;m<c.globals.series.length;m++,y--)v(m,y)}},{key:"getFormatters",value:function(t){var e,i=this.w,a=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(a=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof a&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t}),{yLbFormatter:a,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,a=t.seriesIndex,s=t.j,r=this.w;return e(String(r.globals.seriesNames[i]),{series:r.globals.series,seriesIndex:a,dataPointIndex:s,w:r})}},{key:"DOMHandling",value:function(t){t.i;var e=t.t,i=t.j,a=t.ttItems,s=t.values,r=t.seriesName,o=t.shared,n=t.pColor,l=this.w,h=this.ttCtx,c=s.val,d=s.goalVals,g=s.xVal,u=s.xAxisTTVal,f=s.zVal,p=null;p=a[e].children,l.config.tooltip.fillSeriesColor&&(a[e].style.backgroundColor=n,p[0].style.display="none"),h.showTooltipTitle&&(null===h.tooltipTitle&&(h.tooltipTitle=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),h.tooltipTitle.innerHTML=g),h.isXAxisTooltipEnabled&&(h.xaxisTooltipText.innerHTML=""!==u?u:g);var x=a[e].querySelector(".apexcharts-tooltip-text-y-label");x&&(x.innerHTML=r||"");var b=a[e].querySelector(".apexcharts-tooltip-text-y-value");b&&(b.innerHTML=void 0!==c?c:""),p[0]&&p[0].classList.contains("apexcharts-tooltip-marker")&&(l.config.tooltip.marker.fillColors&&Array.isArray(l.config.tooltip.marker.fillColors)&&(n=l.config.tooltip.marker.fillColors[e]),p[0].style.backgroundColor=n),l.config.tooltip.marker.show||(p[0].style.display="none");var v=a[e].querySelector(".apexcharts-tooltip-text-goals-label"),m=a[e].querySelector(".apexcharts-tooltip-text-goals-value");if(d.length&&l.globals.seriesGoals[e]){var y=function(){var t="<div >",e="<div>";d.forEach((function(i,a){t+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i.attrs.name,"</div>"),e+="<div>".concat(i.val,"</div>")})),v.innerHTML=t+"</div>",m.innerHTML=e+"</div>"};o?l.globals.seriesGoals[e][i]&&Array.isArray(l.globals.seriesGoals[e][i])?y():(v.innerHTML="",m.innerHTML=""):y()}else v.innerHTML="",m.innerHTML="";null!==f&&(a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=l.config.tooltip.z.title,a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=void 0!==f?f:"");o&&p[0]&&(null==c||l.globals.ancillaryCollapsedSeriesIndices.indexOf(e)>-1||l.globals.collapsedSeriesIndices.indexOf(e)>-1?p[0].parentNode.style.display="none":p[0].parentNode.style.display=l.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(t){var e=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("apexcharts-active"),i.style.display=e.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,a=this.w,s=this.ctx.series.filteredSeriesX(),r="",o="",n=null,l=null,h={series:a.globals.series,seriesIndex:e,dataPointIndex:i,w:a},c=a.globals.ttZFormatter;null===i?l=a.globals.series[e]:a.globals.isXNumeric&&"treemap"!==a.config.chart.type?(r=s[e][i],0===s[e].length&&(r=s[this.tooltipUtil.getFirstActiveXArray(s)][i])):r=void 0!==a.globals.labels[i]?a.globals.labels[i]:"";var d=r;a.globals.isXNumeric&&"datetime"===a.config.xaxis.type?r=new V(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new R(this.ctx).formatDate,w:this.w}):r=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](d,h):a.globals.xLabelFormatter(d,h);return void 0!==a.config.tooltip.x.formatter&&(r=a.globals.ttKeyFormatter(d,h)),a.globals.seriesZ.length>0&&a.globals.seriesZ[e].length>0&&(n=c(a.globals.seriesZ[e][i],a)),o="function"==typeof a.config.xaxis.tooltip.formatter?a.globals.xaxisTooltipFormatter(d,h):r,{val:Array.isArray(l)?l.join(" "):l,xVal:Array.isArray(r)?r.join(" "):r,xAxisTTVal:Array.isArray(o)?o.join(" "):o,zVal:n}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,a=t.y1,s=t.y2,r=t.w,o=this.ttCtx.getElTooltip(),n=r.config.tooltip.custom;Array.isArray(n)&&n[e]&&(n=n[e]),o.innerHTML=n({ctx:this.ctx,series:r.globals.series,seriesIndex:e,dataPointIndex:i,y1:a,y2:s,w:r})}}]),t}(),pt=function(){function t(e){a(this,t),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return r(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,a=this.w,s=i.getElXCrosshairs(),r=t-i.xcrosshairsWidth/2,o=a.globals.labels.slice().length;if(null!==e&&(r=a.globals.gridWidth/o*e),null===s||a.globals.isBarHorizontal||(s.setAttribute("x",r),s.setAttribute("x1",r),s.setAttribute("x2",r),s.setAttribute("y2",a.globals.gridHeight),s.classList.add("apexcharts-active")),r<0&&(r=0),r>a.globals.gridWidth&&(r=a.globals.gridWidth),i.isXAxisTooltipEnabled){var n=r;"tickWidth"!==a.config.xaxis.crosshairs.width&&"barWidth"!==a.config.xaxis.crosshairs.width||(n=r+i.xcrosshairsWidth/2),this.moveXAxisTooltip(n)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&m.setAttrs(e.ycrosshairs,{y1:t,y2:t}),null!==e.ycrosshairsHidden&&m.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t})}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip&&0!==i.xcrosshairsWidth){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var s;s=new m(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=s.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),s=e.globals.translateY+a,r=i.yaxisTTEls[t].getBoundingClientRect().height,o=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(o-=26),s-=r/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("apexcharts-active"),i.yaxisTTEls[t].style.top=s+"px",i.yaxisTTEls[t].style.left=o+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=this.ttCtx,r=s.getElTooltip(),o=s.tooltipRect,n=null!==i?parseFloat(i):1,l=parseFloat(t)+n+5,h=parseFloat(e)+n/2;if(l>a.globals.gridWidth/2&&(l=l-o.ttWidth-n-10),l>a.globals.gridWidth-o.ttWidth-10&&(l=a.globals.gridWidth-o.ttWidth),l<-20&&(l=-20),a.config.tooltip.followCursor){var c=s.getElGrid(),d=c.getBoundingClientRect();h=s.e.clientY+a.globals.translateY-d.top-o.ttHeight/2}else a.globals.isBarHorizontal||(o.ttHeight/2+h>a.globals.gridHeight&&(h=a.globals.gridHeight-o.ttHeight+a.globals.translateY),h<0&&(h=0));isNaN(l)||(l+=a.globals.translateX,r.style.left=l+"px",r.style.top=h+"px")}},{key:"moveMarkers",value:function(t,e){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[t]>0)for(var s=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),r=0;r<s.length;r++)parseInt(s[r].getAttribute("rel"),10)===e&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(e,s[r]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,a,s=this.w,r=this.ttCtx,o=s.globals.pointsArray,n=r.tooltipUtil.getHoverMarkerSize(e),l=s.config.series[e].type;if(!l||"column"!==l&&"candlestick"!==l&&"boxPlot"!==l){i=o[e][t][0],a=o[e][t][1]?o[e][t][1]:0;var h=s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers circle"));h&&a<s.globals.gridHeight&&a>0&&(h.setAttribute("r",n),h.setAttribute("cx",i),h.setAttribute("cy",a)),this.moveXCrosshairs(i),r.fixedTooltip||this.moveTooltip(i,a,n)}}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,a=i.w,s=0,r=0,o=a.globals.pointsArray;e=new E(this.ctx).getActiveConfigSeriesIndex(!0);var n=i.tooltipUtil.getHoverMarkerSize(e);o[e]&&(s=o[e][t][0],r=o[e][t][1]);var l=i.tooltipUtil.getAllMarkers();if(null!==l)for(var h=0;h<a.globals.series.length;h++){var c=o[h];if(a.globals.comboCharts&&void 0===c&&l.splice(h,0,null),c&&c.length){var d=o[h][t][1];l[h].setAttribute("cx",s),null!==d&&!isNaN(d)&&d<a.globals.gridHeight+n&&d+n>0?(l[h]&&l[h].setAttribute("r",n),l[h]&&l[h].setAttribute("cy",d)):l[h]&&l[h].setAttribute("r",0)}}if(this.moveXCrosshairs(s),!i.fixedTooltip){var g=r||a.globals.gridHeight;this.moveTooltip(s,g,n)}}},{key:"moveStickyTooltipOverBars",value:function(t){var e=this.w,i=this.ttCtx,a=e.globals.columnSeries?e.globals.columnSeries.length:e.globals.series.length,s=a>=2&&a%2==0?Math.floor(a/2):Math.floor(a/2)+1;e.globals.isBarHorizontal&&(s=new E(this.ctx).getActiveConfigSeriesIndex(!1,"desc")+1);var r=e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s,"'] path[j='").concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"']")),o=r?parseFloat(r.getAttribute("cx")):0,n=r?parseFloat(r.getAttribute("cy")):0,l=r?parseFloat(r.getAttribute("barWidth")):0,h=r?parseFloat(r.getAttribute("barHeight")):0,c=i.getElGrid().getBoundingClientRect(),d=r.classList.contains("apexcharts-candlestick-area")||r.classList.contains("apexcharts-boxPlot-area");if(e.globals.isXNumeric?(r&&!d&&(o-=a%2!=0?l/2:0),r&&d&&e.globals.comboCharts&&(o-=l/2)):e.globals.isBarHorizontal||(o=i.xAxisTicksPositions[t-1]+i.dataPointsDividedWidth/2,isNaN(o)&&(o=i.xAxisTicksPositions[t]-i.dataPointsDividedWidth/2)),e.globals.isBarHorizontal?(n>e.globals.gridHeight/2&&(n-=i.tooltipRect.ttHeight),(n=n+e.config.grid.padding.top+h/3)+h>e.globals.gridHeight&&(n=e.globals.gridHeight-h)):e.config.tooltip.followCursor?n=i.e.clientY-c.top-i.tooltipRect.ttHeight/2:n+i.tooltipRect.ttHeight+15>e.globals.gridHeight&&(n=e.globals.gridHeight),n<-10&&(n=-10),e.globals.isBarHorizontal||this.moveXCrosshairs(o),!i.fixedTooltip){var g=n||e.globals.gridHeight;this.moveTooltip(o,g)}}}]),t}(),xt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new pt(e)}return r(t,[{key:"drawDynamicPoints",value:function(){var t=this.w,e=new m(this.ctx),i=new T(this.ctx),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=u(a),t.config.chart.stacked&&a.sort((function(t,e){return parseFloat(t.getAttribute("data:realIndex"))-parseFloat(e.getAttribute("data:realIndex"))}));for(var s=0;s<a.length;s++){var r=a[s].querySelector(".apexcharts-series-markers-wrap");if(null!==r){var o=void 0,n="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(n+=" no-pointer-events");var l=i.getMarkerConfig({cssClass:n,seriesIndex:Number(r.getAttribute("data:realIndex"))});(o=e.drawMarker(0,0,l)).node.setAttribute("default-marker-size",0);var h=document.createElementNS(t.globals.SVGNS,"g");h.classList.add("apexcharts-series-markers"),h.appendChild(o.node),r.appendChild(h)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w;"bubble"!==s.config.chart.type&&this.newPointSize(t,e);var r=e.getAttribute("cx"),o=e.getAttribute("cy");if(null!==i&&null!==a&&(r=i,o=a),this.tooltipPosition.moveXCrosshairs(r),!this.fixedTooltip){if("radar"===s.config.chart.type){var n=this.ttCtx.getElGrid(),l=n.getBoundingClientRect();r=this.ttCtx.e.clientX-l.left}this.tooltipPosition.moveTooltip(r,o,s.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this,a=this.ttCtx,s=t,r=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),o=e.config.markers.hover.size,n=0;n<r.length;n++){var l=r[n].getAttribute("rel"),h=r[n].getAttribute("index");if(void 0===o&&(o=e.globals.markers.size[h]+e.config.markers.hover.sizeOffset),s===parseInt(l,10)){i.newPointSize(s,r[n]);var c=r[n].getAttribute("cx"),d=r[n].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(c),a.fixedTooltip||i.tooltipPosition.moveTooltip(c,d,o)}else i.oldPointSize(r[n])}}},{key:"newPointSize",value:function(t,e){var i=this.w,a=i.config.markers.hover.size,s=0===t?e.parentNode.firstChild:e.parentNode.lastChild;if("0"!==s.getAttribute("default-marker-size")){var r=parseInt(s.getAttribute("index"),10);void 0===a&&(a=i.globals.markers.size[r]+i.config.markers.hover.sizeOffset),a<0&&(a=0),s.setAttribute("r",a)}}},{key:"oldPointSize",value:function(t){var e=parseFloat(t.getAttribute("default-marker-size"));t.setAttribute("r",e)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseFloat(t[e].getAttribute("default-marker-size"));x.isNumber(i)&&i>=0?t[e].setAttribute("r",i):t[e].setAttribute("r",0)}}}]),t}(),bt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e}return r(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTreeTooltip",value:function(t){var e=t.e,i=t.opt,a=t.x,s=t.y,r=t.type,o=this.ttCtx,n=this.w;if(e.target.classList.contains("apexcharts-".concat(r,"-rect"))){var l=this.getAttr(e,"i"),h=this.getAttr(e,"j"),c=this.getAttr(e,"cx"),d=this.getAttr(e,"cy"),g=this.getAttr(e,"width"),u=this.getAttr(e,"height");if(o.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:l,j:h,shared:!1,e:e}),n.globals.capturedSeriesIndex=l,n.globals.capturedDataPointIndex=h,a=c+o.tooltipRect.ttWidth/2+g,s=d+o.tooltipRect.ttHeight/2-u/2,o.tooltipPosition.moveXCrosshairs(c+g/2),a>n.globals.gridWidth/2&&(a=c-o.tooltipRect.ttWidth/2+g),o.w.config.tooltip.followCursor){var f=n.globals.dom.elWrap.getBoundingClientRect();a=n.globals.clientX-f.left-(a>n.globals.gridWidth/2?o.tooltipRect.ttWidth:0),s=n.globals.clientY-f.top-(s>n.globals.gridHeight/2?o.tooltipRect.ttHeight:0)}}return{x:a,y:s}}},{key:"handleMarkerTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=t.x,o=t.y,n=this.w,l=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var h=parseInt(s.paths.getAttribute("cx"),10),c=parseInt(s.paths.getAttribute("cy"),10),d=parseFloat(s.paths.getAttribute("val"));if(i=parseInt(s.paths.getAttribute("rel"),10),e=parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,l.intersect){var g=x.findAncestor(s.paths,"apexcharts-series");g&&(e=parseInt(g.getAttribute("data:realIndex"),10))}if(l.tooltipLabels.drawSeriesTexts({ttItems:s.ttItems,i:e,j:i,shared:!l.showOnIntersect&&n.config.tooltip.shared,e:a}),"mouseup"===a.type&&l.markerClick(a,e,i),n.globals.capturedSeriesIndex=e,n.globals.capturedDataPointIndex=i,r=h,o=c+n.globals.translateY-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var u=l.getElGrid().getBoundingClientRect();o=l.e.clientY+n.globals.translateY-u.top}d<0&&(o=c),l.marker.enlargeCurrentPoint(i,s.paths,r,o)}return{x:r,y:o}}},{key:"handleBarTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=this.ttCtx,n=o.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:a,opt:s});e=d.i;var g=d.barHeight,u=d.j;r.globals.capturedSeriesIndex=e,r.globals.capturedDataPointIndex=u,r.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||!r.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(r.config.stroke.width)?r.config.stroke.width[e]:r.config.stroke.width,l=h):r.globals.comboCharts||r.config.tooltip.shared||(l/=2),isNaN(c)?c=r.globals.svgHeight-o.tooltipRect.ttHeight:c<0&&(c=0);var f=parseInt(s.paths.parentNode.getAttribute("data:realIndex"),10),p=r.globals.isMultipleYAxis?r.config.yaxis[f]&&r.config.yaxis[f].reversed:r.config.yaxis[0].reversed;if(h+o.tooltipRect.ttWidth>r.globals.gridWidth&&!p?h-=o.tooltipRect.ttWidth:h<0&&(h=0),o.w.config.tooltip.followCursor){var x=o.getElGrid().getBoundingClientRect();c=o.e.clientY-x.top}null===o.tooltip&&(o.tooltip=r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),r.config.tooltip.shared||(r.globals.comboBarCount>0?o.tooltipPosition.moveXCrosshairs(l+i/2):o.tooltipPosition.moveXCrosshairs(l)),!o.fixedTooltip&&(!r.config.tooltip.shared||r.globals.isBarHorizontal&&o.tooltipUtil.hasBars())&&(p&&(h-=o.tooltipRect.ttWidth)<0&&(h=0),!p||r.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||(c=c+g-2*(r.globals.series[e][u]<0?g:0)),o.tooltipRect.ttHeight+c>r.globals.gridHeight?c=r.globals.gridHeight-o.tooltipRect.ttHeight+r.globals.translateY:(c=c+r.globals.translateY-o.tooltipRect.ttHeight/2)<0&&(c=0),n.style.left=h+r.globals.translateX+"px",n.style.top=c+"px")}},{key:"getBarTooltipXY",value:function(t){var e=t.e,i=t.opt,a=this.w,s=null,r=this.ttCtx,o=0,n=0,l=0,h=0,c=0,d=e.target.classList;if(d.contains("apexcharts-bar-area")||d.contains("apexcharts-candlestick-area")||d.contains("apexcharts-boxPlot-area")||d.contains("apexcharts-rangebar-area")){var g=e.target,u=g.getBoundingClientRect(),f=i.elGrid.getBoundingClientRect(),p=u.height;c=u.height;var x=u.width,b=parseInt(g.getAttribute("cx"),10),v=parseInt(g.getAttribute("cy"),10);h=parseFloat(g.getAttribute("barWidth"));var m="touchmove"===e.type?e.touches[0].clientX:e.clientX;s=parseInt(g.getAttribute("j"),10),o=parseInt(g.parentNode.getAttribute("rel"),10)-1;var y=g.getAttribute("data-range-y1"),w=g.getAttribute("data-range-y2");a.globals.comboCharts&&(o=parseInt(g.parentNode.getAttribute("data:realIndex"),10)),r.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:o,j:s,y1:y?parseInt(y,10):null,y2:w?parseInt(w,10):null,shared:!r.showOnIntersect&&a.config.tooltip.shared,e:e}),a.config.tooltip.followCursor?a.globals.isBarHorizontal?(n=m-f.left+15,l=v-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(n=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=e.clientY-f.top-r.tooltipRect.ttHeight/2-15):a.globals.isBarHorizontal?((n=b)<r.xyRatios.baseLineInvertedY&&(n=b-r.tooltipRect.ttWidth),l=v-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(n=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=v)}return{x:n,y:l,barHeight:c,barWidth:h,i:o,j:s}}}]),t}(),vt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e}return r(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:-t.globals.xAxisHeight-t.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",s=t.globals.dom.elWrap;e.isXAxisTooltipEnabled&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+t.config.tooltip.theme),s.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=function(i){var a=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=a?t.globals.gridWidth+1:1;var s="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,a?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");t.globals.yAxisSameScaleIndices.map((function(e,a){e.map((function(e,a){a===i&&(s+=t.config.yaxis[a].show?" ":" apexcharts-yaxistooltip-hidden")}))}));var r=t.globals.dom.elWrap;null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",s+" apexcharts-theme-"+t.config.tooltip.theme),r.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText[i]=document.createElement("div"),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))},a=0;a<t.config.yaxis.length;a++)i(a)}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width,10),t.globals.comboCharts){var a=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==a&&"barWidth"===t.config.xaxis.crosshairs.width){var s=parseFloat(a.getAttribute("barWidth"));e.xcrosshairsWidth=s}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/o}else if("barWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==n){var l=parseFloat(n.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var a=this.ttCtx,s=this.w,r=s.globals.yLabelFormatters[t];if(a.yaxisTooltips[t]){var o=a.getElGrid().getBoundingClientRect(),n=(e-o.top)*i.yRatio[t],l=s.globals.maxYArr[t]-s.globals.minYArr[t],h=s.globals.minYArr[t]+(l-n);a.tooltipPosition.moveYCrosshairs(e-o.top),a.yaxisTooltipText[t].innerHTML=r(h),a.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),mt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.tConfig=i.config.tooltip,this.tooltipUtil=new ut(this),this.tooltipLabels=new ft(this),this.tooltipPosition=new pt(this),this.marker=new xt(this),this.intersect=new bt(this),this.axesTooltip=new vt(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!i.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return r(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl?t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"):null}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.isXAxisTooltipEnabled=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.yaxisTooltips=e.config.yaxis.map((function(t,i){return!!(t.show&&t.tooltip.enabled&&e.globals.axisCharts)})),this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),e.config.tooltip.cssClass&&i.classList.add(e.config.tooltip.cssClass),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new _(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!e.globals.comboCharts&&!this.tConfig.intersect&&"rangeBar"!==e.config.chart.type||this.tConfig.shared||(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var s=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(s=this.showOnIntersect?1:e.globals.series.length),this.legendLabels=e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(s),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this,i=this.w,a=[],s=this.getElTooltip(),r=function(r){var o=document.createElement("div");o.classList.add("apexcharts-tooltip-series-group"),o.style.order=i.config.tooltip.inverseOrder?t-r:r+1,e.tConfig.shared&&e.tConfig.enabledOnSeries&&Array.isArray(e.tConfig.enabledOnSeries)&&e.tConfig.enabledOnSeries.indexOf(r)<0&&o.classList.add("apexcharts-tooltip-series-group-hidden");var n=document.createElement("span");n.classList.add("apexcharts-tooltip-marker"),n.style.backgroundColor=i.globals.colors[r],o.appendChild(n);var l=document.createElement("div");l.classList.add("apexcharts-tooltip-text"),l.style.fontFamily=e.tConfig.style.fontFamily||i.config.chart.fontFamily,l.style.fontSize=e.tConfig.style.fontSize,["y","goals","z"].forEach((function(t){var e=document.createElement("div");e.classList.add("apexcharts-tooltip-".concat(t,"-group"));var i=document.createElement("span");i.classList.add("apexcharts-tooltip-text-".concat(t,"-label")),e.appendChild(i);var a=document.createElement("span");a.classList.add("apexcharts-tooltip-text-".concat(t,"-value")),e.appendChild(a),l.appendChild(e)})),o.appendChild(l),s.appendChild(o),a.push(o)},o=0;o<t;o++)r(o);return a}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),a=!("bar"!==e&&"candlestick"!==e&&"boxPlot"!==e&&"rangeBar"!==e),s="area"===e||"line"===e||"scatter"===e||"bubble"===e||"radar"===e,r=t.globals.dom.Paper.node,o=this.getElGrid();o&&(this.seriesBound=o.getBoundingClientRect());var n,l=[],h=[],c={hoverArea:r,elGrid:o,tooltipEl:i,tooltipY:l,tooltipX:h,ttItems:this.ttItems};if(t.globals.axisCharts&&(s?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):"heatmap"!==e&&"treemap"!==e||(n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),n&&n.length))for(var d=0;d<n.length;d++)l.push(n[d].getAttribute("cy")),h.push(n[d].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([r],c);else if(a&&!t.globals.comboCharts||s&&this.showOnIntersect)this.addDatapointEventsListeners(c);else if(!t.globals.axisCharts||"heatmap"===e||"treemap"===e){var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(g,c)}if(this.showOnIntersect){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");u.length>0&&this.addPathsEventListeners(u,c),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(c)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),a=i.width+10,s=i.height+10,r=this.tConfig.fixed.offsetX,o=this.tConfig.fixed.offsetY,n=this.tConfig.fixed.position.toLowerCase();return n.indexOf("right")>-1&&(r=r+t.globals.svgWidth-a+10),n.indexOf("bottom")>-1&&(o=o+t.globals.svgHeight-s-10),e.style.left=r+"px",e.style.top=o+"px",{x:r,y:o,ttWidth:a,ttHeight:s}}},{key:"addDatapointEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,a=function(a){var s={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map((function(e){return t[a].addEventListener(e,i.onSeriesHover.bind(i,s),{capture:!1,passive:!0})}))},s=0;s<t.length;s++)a(s)}},{key:"onSeriesHover",value:function(t,e){var i=this,a=Date.now()-this.lastHoverTime;a>=100?this.seriesHover(t,e):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout((function(){i.seriesHover(t,e)}),100-a))}},{key:"seriesHover",value:function(t,e){var i=this;this.lastHoverTime=Date.now();var a=[],s=this.w;s.config.chart.group&&(a=this.ctx.getGroupedCharts()),s.globals.axisCharts&&(s.globals.minX===-1/0&&s.globals.maxX===1/0||0===s.globals.dataPoints)||(a.length?a.forEach((function(a){var s=i.getElTooltip(a),r={paths:t.paths,tooltipEl:s,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:a.w.globals.tooltip.ttItems};a.w.globals.minX===i.w.globals.minX&&a.w.globals.maxX===i.w.globals.maxX&&a.w.globals.tooltip.seriesHoverByContext({chartCtx:a,ttCtx:a.w.globals.tooltip,opt:r,e:e})})):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,a=t.opt,s=t.e,r=e.w,o=this.getElTooltip();if(o){if(i.tooltipRect={x:0,y:0,ttWidth:o.getBoundingClientRect().width,ttHeight:o.getBoundingClientRect().height},i.e=s,i.tooltipUtil.hasBars()&&!r.globals.comboCharts&&!i.isBarShared)if(this.tConfig.onDatasetHover.highlightDataSeries)new E(e).toggleSeriesOnHover(s,s.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),r.globals.axisCharts?i.axisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect})}}},{key:"axisChartsTooltips",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=s.elGrid.getBoundingClientRect(),n="touchmove"===a.type?a.touches[0].clientX:a.clientX,l="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=l,this.clientX=n,r.globals.capturedSeriesIndex=-1,r.globals.capturedDataPointIndex=-1,l<o.top||l>o.top+o.height)this.handleMouseOut(s);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!r.config.tooltip.shared){var h=parseInt(s.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(h)<0)return void this.handleMouseOut(s)}var c=this.getElTooltip(),d=this.getElXCrosshairs(),g=r.globals.xyCharts||"bar"===r.config.chart.type&&!r.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||r.globals.comboCharts&&this.tooltipUtil.hasBars();if("mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type){if(r.globals.collapsedSeries.length+r.globals.ancillaryCollapsedSeries.length===r.globals.series.length)return;null!==d&&d.classList.add("apexcharts-active");var u=this.yaxisTooltips.filter((function(t){return!0===t}));if(null!==this.ycrosshairs&&u.length&&this.ycrosshairs.classList.add("apexcharts-active"),g&&!this.showOnIntersect)this.handleStickyTooltip(a,n,l,s);else if("heatmap"===r.config.chart.type||"treemap"===r.config.chart.type){var f=this.intersect.handleHeatTreeTooltip({e:a,opt:s,x:e,y:i,type:r.config.chart.type});e=f.x,i=f.y,c.style.left=e+"px",c.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:s}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:s,x:e,y:i});if(this.yaxisTooltips.length)for(var p=0;p<r.config.yaxis.length;p++)this.axesTooltip.drawYaxisTooltipText(p,l,this.xyRatios);s.tooltipEl.classList.add("apexcharts-active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(s)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,a=t.tooltipRect,s=this.w,r=i.paths.getAttribute("rel"),o=this.getElTooltip(),n=s.globals.dom.elWrap.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){o.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(r,10)-1,shared:!1});var l=s.globals.clientX-n.left-a.ttWidth/2,h=s.globals.clientY-n.top-a.ttHeight-10;if(o.style.left=l+"px",o.style.top=h+"px",s.config.legend.tooltipHoverFormatter){var c=r-1,d=(0,s.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"),{seriesIndex:c,dataPointIndex:c,w:s});this.legendLabels[c].innerHTML=d}}else"mouseout"!==e.type&&"touchend"!==e.type||(o.classList.remove("apexcharts-active"),s.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)})))}},{key:"handleStickyTooltip",value:function(t,e,i,a){var s=this.w,r=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:e,clientY:i}),o=r.j,n=r.capturedSeries,l=a.elGrid.getBoundingClientRect();r.hoverX<0||r.hoverX>l.width?this.handleMouseOut(a):null!==n?this.handleStickyCapturedSeries(t,n,a,o):(this.tooltipUtil.isXoverlap(o)||s.globals.isBarHorizontal)&&this.create(t,this,0,o,a.ttItems)}},{key:"handleStickyCapturedSeries",value:function(t,e,i,a){var s=this.w;if(!this.tConfig.shared&&null===s.globals.series[e][a])return void this.handleMouseOut(i);void 0!==s.globals.series[e][a]?this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(t,this,e,a,i.ttItems):this.create(t,this,e,a,i.ttItems,!1):this.tooltipUtil.isXoverlap(a)&&this.create(t,this,0,a,i.ttItems)}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new m(this.ctx),i=t.globals.dom.Paper.select(".apexcharts-bar-area"),a=0;a<i.length;a++)e.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(t.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("apexcharts-active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("apexcharts-active"),this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}e.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}))}},{key:"markerClick",value:function(t,e,i){var a=this.w;"function"==typeof a.config.chart.events.markerClick&&a.config.chart.events.markerClick(t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}])}},{key:"create",value:function(t,e,i,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=this.w,n=e;"mouseup"===t.type&&this.markerClick(t,i,a),null===r&&(r=this.tConfig.shared);var l=this.tooltipUtil.hasMarkers(),h=this.tooltipUtil.getElBars();if(o.config.legend.tooltipHoverFormatter){var c=o.config.legend.tooltipHoverFormatter,d=Array.from(this.legendLabels);d.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}));for(var g=0;g<d.length;g++){var u=d[g],f=parseInt(u.getAttribute("i"),10),p=decodeURIComponent(u.getAttribute("data:default-text")),x=c(p,{seriesIndex:r?f:i,dataPointIndex:a,w:o});if(r)u.innerHTML=o.globals.collapsedSeriesIndices.indexOf(f)<0?x:p;else if(u.innerHTML=f===i?x:p,i===f)break}}if(r){if(n.tooltipLabels.drawSeriesTexts({ttItems:s,i:i,j:a,shared:!this.showOnIntersect&&this.tConfig.shared}),l&&(o.globals.markers.largestSize>0?n.marker.enlargePoints(a):n.tooltipPosition.moveDynamicPointsOnHover(a)),this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(h),this.barSeriesHeight>0)){var b=new m(this.ctx),v=o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a);for(var y=0;y<v.length;y++)b.pathMouseEnter(v[y])}}else n.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:s,i:i,j:a}),this.tooltipUtil.hasBars()&&n.tooltipPosition.moveStickyTooltipOverBars(a),l&&n.tooltipPosition.moveMarkers(i,a)}}]),t}(),yt=function(t){n(s,t);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this,s=this.w;this.graphics=new m(this.ctx),this.bar=new F(this.ctx,this.xyRatios);var r=new y(this.ctx,s);t=r.getLogSeries(t),this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t),"100%"===s.config.chart.stackType&&(t=s.globals.seriesPercent.slice()),this.series=t,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var o=0;o<t.length;o++)t[o].length>0&&(this.totalItems+=t[o].length);for(var n=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),l=0,h=0,c=function(r,o){var c=void 0,d=void 0,g=void 0,u=void 0,f=[],p=[],b=s.globals.comboCharts?i[r]:r;a.yRatio.length>1&&(a.yaxisIndex=b),a.isReversed=s.config.yaxis[a.yaxisIndex]&&s.config.yaxis[a.yaxisIndex].reversed;var v=a.graphics.group({class:"apexcharts-series",seriesName:x.escapeString(s.globals.seriesNames[b]),rel:r+1,"data:realIndex":b});a.ctx.series.addCollapsedClassToSeries(v,b);var m=a.graphics.group({class:"apexcharts-datalabels","data:realIndex":b}),y=0,w=0,k=a.initialPositions(l,h,c,d,g,u);h=k.y,y=k.barHeight,d=k.yDivision,u=k.zeroW,l=k.x,w=k.barWidth,c=k.xDivision,g=k.zeroH,a.yArrj=[],a.yArrjF=[],a.yArrjVal=[],a.xArrj=[],a.xArrjF=[],a.xArrjVal=[],1===a.prevY.length&&a.prevY[0].every((function(t){return isNaN(t)}))&&(a.prevY[0]=a.prevY[0].map((function(t){return g})),a.prevYF[0]=a.prevYF[0].map((function(t){return 0})));for(var A=0;A<s.globals.dataPoints;A++){var S=a.barHelpers.getStrokeWidth(r,A,b),C={indexes:{i:r,j:A,realIndex:b,bc:o},strokeWidth:S,x:l,y:h,elSeries:v},L=null;a.isHorizontal?(L=a.drawStackedBarPaths(e(e({},C),{},{zeroW:u,barHeight:y,yDivision:d})),w=a.series[r][A]/a.invertedYRatio):(L=a.drawStackedColumnPaths(e(e({},C),{},{xDivision:c,barWidth:w,zeroH:g})),y=a.series[r][A]/a.yRatio[a.yaxisIndex]),h=L.y,l=L.x,f.push(l),p.push(h);var P=a.barHelpers.getPathFillColor(t,r,A,b);v=a.renderSeries({realIndex:b,pathFill:P,j:A,i:r,pathFrom:L.pathFrom,pathTo:L.pathTo,strokeWidth:S,elSeries:v,x:l,y:h,series:t,barHeight:y,barWidth:w,elDataLabelsWrap:m,type:"bar",visibleSeries:0})}s.globals.seriesXvalues[b]=f,s.globals.seriesYvalues[b]=p,a.prevY.push(a.yArrj),a.prevYF.push(a.yArrjF),a.prevYVal.push(a.yArrjVal),a.prevX.push(a.xArrj),a.prevXF.push(a.xArrjF),a.prevXVal.push(a.xArrjVal),n.add(v)},d=0,g=0;d<t.length;d++,g++)c(d,g);return n}},{key:"initialPositions",value:function(t,e,i,a,s,r){var o,n,l=this.w;return this.isHorizontal?(o=(o=a=l.globals.gridHeight/l.globals.dataPoints)*parseInt(l.config.plotOptions.bar.barHeight,10)/100,r=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(a-o)/2):(n=i=l.globals.gridWidth/l.globals.dataPoints,n=l.globals.isXNumeric&&l.globals.dataPoints>1?(i=l.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:n*parseInt(l.config.plotOptions.bar.columnWidth,10)/100,s=this.baseLineY[this.yaxisIndex]+(this.isReversed?l.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(i-n)/2),{x:t,y:e,yDivision:a,xDivision:i,barHeight:o,barWidth:n,zeroH:s,zeroW:r}}},{key:"drawStackedBarPaths",value:function(t){for(var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,o=t.x,n=t.y,l=t.yDivision,h=t.elSeries,c=this.w,d=n,g=i.i,u=i.j,f=0,p=0;p<this.prevXF.length;p++)f+=this.prevXF[p][u];if(g>0){var x=r;this.prevXVal[g-1][u]<0?x=this.series[g][u]>=0?this.prevX[g-1][u]+f-2*(this.isReversed?f:0):this.prevX[g-1][u]:this.prevXVal[g-1][u]>=0&&(x=this.series[g][u]>=0?this.prevX[g-1][u]:this.prevX[g-1][u]-f+2*(this.isReversed?f:0)),e=x}else e=r;o=null===this.series[g][u]?e:e+this.series[g][u]/this.invertedYRatio-2*(this.isReversed?this.series[g][u]/this.invertedYRatio:0);var b=this.barHelpers.getBarpaths({barYPosition:d,barHeight:a,x1:e,x2:o,strokeWidth:s,series:this.series,realIndex:i.realIndex,i:g,j:u,w:c});return this.barHelpers.barBackground({j:u,i:g,y1:d,y2:a,elSeries:h}),n+=l,{pathTo:b.pathTo,pathFrom:b.pathFrom,x:o,y:n}}},{key:"drawStackedColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,o=t.zeroH;t.strokeWidth;var n=t.elSeries,l=this.w,h=e.i,c=e.j,d=e.bc;if(l.globals.isXNumeric){var g=l.globals.seriesX[h][c];g||(g=0),i=(g-l.globals.minX)/this.xRatio-r/2}for(var u,f=i,p=0,x=0;x<this.prevYF.length;x++)p+=isNaN(this.prevYF[x][c])?0:this.prevYF[x][c];if(h>0&&!l.globals.isXNumeric||h>0&&l.globals.isXNumeric&&l.globals.seriesX[h-1][c]===l.globals.seriesX[h][c]){var b,v,m=Math.min(this.yRatio.length+1,h+1);if(void 0!==this.prevY[h-1])for(var y=1;y<m;y++)if(!isNaN(this.prevY[h-y][c])){v=this.prevY[h-y][c];break}for(var w=1;w<m;w++){if(this.prevYVal[h-w][c]<0){b=this.series[h][c]>=0?v-p+2*(this.isReversed?p:0):v;break}if(this.prevYVal[h-w][c]>=0){b=this.series[h][c]>=0?v:v+p-2*(this.isReversed?p:0);break}}void 0===b&&(b=l.globals.gridHeight),u=this.prevYF[0].every((function(t){return 0===t}))&&this.prevYF.slice(1,h).every((function(t){return t.every((function(t){return isNaN(t)}))}))?l.globals.gridHeight-o:b}else u=l.globals.gridHeight-o;a=u-this.series[h][c]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[h][c]/this.yRatio[this.yaxisIndex]:0);var k=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:r,y1:u,y2:a,yRatio:this.yRatio[this.yaxisIndex],strokeWidth:this.strokeWidth,series:this.series,realIndex:e.realIndex,i:h,j:c,w:l});return this.barHelpers.barBackground({bc:d,j:c,i:h,x1:f,x2:r,elSeries:n}),i+=s,{pathTo:k.pathTo,pathFrom:k.pathFrom,x:l.globals.isXNumeric?i-s:i,y:a}}}]),s}(F),wt=function(t){n(s,t);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this,s=this.w,r=new m(this.ctx),o=new M(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot,this.isHorizontal=s.config.plotOptions.bar.horizontal;var n=new y(this.ctx,s);t=n.getLogSeries(t),this.series=t,this.yRatio=n.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);for(var l=r.group({class:"apexcharts-".concat(s.config.chart.type,"-series apexcharts-plot-series")}),h=function(n){a.isBoxPlot="boxPlot"===s.config.chart.type||"boxPlot"===s.config.series[n].type;var h,c,d,g,u=void 0,f=void 0,p=[],b=[],v=s.globals.comboCharts?i[n]:n,m=r.group({class:"apexcharts-series",seriesName:x.escapeString(s.globals.seriesNames[v]),rel:n+1,"data:realIndex":v});a.ctx.series.addCollapsedClassToSeries(m,v),t[n].length>0&&(a.visibleI=a.visibleI+1);var y,w;a.yRatio.length>1&&(a.yaxisIndex=v);var k=a.barHelpers.initialPositions();f=k.y,y=k.barHeight,c=k.yDivision,g=k.zeroW,u=k.x,w=k.barWidth,h=k.xDivision,d=k.zeroH,b.push(u+w/2);for(var A=r.group({class:"apexcharts-datalabels","data:realIndex":v}),S=function(i){var r=a.barHelpers.getStrokeWidth(n,i,v),l=null,x={indexes:{i:n,j:i,realIndex:v},x:u,y:f,strokeWidth:r,elSeries:m};l=a.isHorizontal?a.drawHorizontalBoxPaths(e(e({},x),{},{yDivision:c,barHeight:y,zeroW:g})):a.drawVerticalBoxPaths(e(e({},x),{},{xDivision:h,barWidth:w,zeroH:d})),f=l.y,u=l.x,i>0&&b.push(u+w/2),p.push(f),l.pathTo.forEach((function(e,h){var c=!a.isBoxPlot&&a.candlestickOptions.wick.useFillColor?l.color[h]:s.globals.stroke.colors[n],d=o.fillPath({seriesNumber:v,dataPointIndex:i,color:l.color[h],value:t[n][i]});a.renderSeries({realIndex:v,pathFill:d,lineFill:c,j:i,i:n,pathFrom:l.pathFrom,pathTo:e,strokeWidth:r,elSeries:m,x:u,y:f,series:t,barHeight:y,barWidth:w,elDataLabelsWrap:A,visibleSeries:a.visibleI,type:s.config.chart.type})}))},C=0;C<s.globals.dataPoints;C++)S(C);s.globals.seriesXvalues[v]=b,s.globals.seriesYvalues[v]=p,l.add(m)},c=0;c<t.length;c++)h(c);return l}},{key:"drawVerticalBoxPaths",value:function(t){var e=t.indexes,i=t.x;t.y;var a=t.xDivision,s=t.barWidth,r=t.zeroH,o=t.strokeWidth,n=this.w,l=new m(this.ctx),h=e.i,c=e.j,d=!0,g=n.config.plotOptions.candlestick.colors.upward,u=n.config.plotOptions.candlestick.colors.downward,f="";this.isBoxPlot&&(f=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var p=this.yRatio[this.yaxisIndex],x=e.realIndex,b=this.getOHLCValue(x,c),v=r,y=r;b.o>b.c&&(d=!1);var w=Math.min(b.o,b.c),k=Math.max(b.o,b.c),A=b.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[x][c]-n.globals.minX)/this.xRatio-s/2);var S=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(w=r,k=r):(w=r-w/p,k=r-k/p,v=r-b.h/p,y=r-b.l/p,A=r-b.m/p);var C=l.move(S,r),L=l.move(S+s/2,w);return n.globals.previousPaths.length>0&&(L=this.getPreviousPath(x,c,!0)),C=this.isBoxPlot?[l.move(S,w)+l.line(S+s/2,w)+l.line(S+s/2,v)+l.line(S+s/4,v)+l.line(S+s-s/4,v)+l.line(S+s/2,v)+l.line(S+s/2,w)+l.line(S+s,w)+l.line(S+s,A)+l.line(S,A)+l.line(S,w+o/2),l.move(S,A)+l.line(S+s,A)+l.line(S+s,k)+l.line(S+s/2,k)+l.line(S+s/2,y)+l.line(S+s-s/4,y)+l.line(S+s/4,y)+l.line(S+s/2,y)+l.line(S+s/2,k)+l.line(S,k)+l.line(S,A)+"z"]:[l.move(S,k)+l.line(S+s/2,k)+l.line(S+s/2,v)+l.line(S+s/2,k)+l.line(S+s,k)+l.line(S+s,w)+l.line(S+s/2,w)+l.line(S+s/2,y)+l.line(S+s/2,w)+l.line(S,w)+l.line(S,k-o/2)],L+=l.move(S,w),n.globals.isXNumeric||(i+=a),{pathTo:C,pathFrom:L,x:i,y:k,barXPosition:S,color:this.isBoxPlot?f:d?[g]:[u]}}},{key:"drawHorizontalBoxPaths",value:function(t){var e=t.indexes;t.x;var i=t.y,a=t.yDivision,s=t.barHeight,r=t.zeroW,o=t.strokeWidth,n=this.w,l=new m(this.ctx),h=e.i,c=e.j,d=this.boxOptions.colors.lower;this.isBoxPlot&&(d=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var g=this.invertedYRatio,u=e.realIndex,f=this.getOHLCValue(u,c),p=r,x=r,b=Math.min(f.o,f.c),v=Math.max(f.o,f.c),y=f.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[u][c]-n.globals.minX)/this.invertedXRatio-s/2);var w=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(b=r,v=r):(b=r+b/g,v=r+v/g,p=r+f.h/g,x=r+f.l/g,y=r+f.m/g);var k=l.move(r,w),A=l.move(b,w+s/2);return n.globals.previousPaths.length>0&&(A=this.getPreviousPath(u,c,!0)),k=[l.move(b,w)+l.line(b,w+s/2)+l.line(p,w+s/2)+l.line(p,w+s/2-s/4)+l.line(p,w+s/2+s/4)+l.line(p,w+s/2)+l.line(b,w+s/2)+l.line(b,w+s)+l.line(y,w+s)+l.line(y,w)+l.line(b+o/2,w),l.move(y,w)+l.line(y,w+s)+l.line(v,w+s)+l.line(v,w+s/2)+l.line(x,w+s/2)+l.line(x,w+s-s/4)+l.line(x,w+s/4)+l.line(x,w+s/2)+l.line(v,w+s/2)+l.line(v,w)+l.line(y,w)+"z"],A+=l.move(b,w),n.globals.isXNumeric||(i+=a),{pathTo:k,pathFrom:A,x:v,y:i,barYPosition:w,color:d}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:this.isBoxPlot?i.globals.seriesCandleH[t][e]:i.globals.seriesCandleO[t][e],h:this.isBoxPlot?i.globals.seriesCandleO[t][e]:i.globals.seriesCandleH[t][e],m:i.globals.seriesCandleM[t][e],l:this.isBoxPlot?i.globals.seriesCandleC[t][e]:i.globals.seriesCandleL[t][e],c:this.isBoxPlot?i.globals.seriesCandleL[t][e]:i.globals.seriesCandleC[t][e]}}}]),s}(F),kt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"checkColorRange",value:function(){var t=this.w,e=!1,i=t.config.plotOptions[t.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map((function(t,i){t.from<=0&&(e=!0)})),e}},{key:"getShadeColor",value:function(t,e,i,a){var s=this.w,r=1,o=s.config.plotOptions[t].shadeIntensity,n=this.determineColor(t,e,i);s.globals.hasNegs||a?r=s.config.plotOptions[t].reverseNegativeShade?n.percent<0?n.percent/100*(1.25*o):(1-n.percent/100)*(1.25*o):n.percent<=0?1-(1+n.percent/100)*o:(1-n.percent/100)*o:(r=1-n.percent/100,"treemap"===t&&(r=(1-n.percent/100)*(1.25*o)));var l=n.color,h=new x;return s.config.plotOptions[t].enableShades&&(l="dark"===this.w.config.theme.mode?x.hexToRgba(h.shadeColor(-1*r,n.color),s.config.fill.opacity):x.hexToRgba(h.shadeColor(r,n.color),s.config.fill.opacity)),{color:l,colorProps:n}}},{key:"determineColor",value:function(t,e,i){var a=this.w,s=a.globals.series[e][i],r=a.config.plotOptions[t],o=r.colorScale.inverse?i:e;r.distributed&&"treemap"===a.config.chart.type&&(o=i);var n=a.globals.colors[o],l=null,h=Math.min.apply(Math,u(a.globals.series[e])),c=Math.max.apply(Math,u(a.globals.series[e]));r.distributed||"heatmap"!==t||(h=a.globals.minY,c=a.globals.maxY),void 0!==r.colorScale.min&&(h=r.colorScale.min<a.globals.minY?r.colorScale.min:a.globals.minY,c=r.colorScale.max>a.globals.maxY?r.colorScale.max:a.globals.maxY);var d=Math.abs(c)+Math.abs(h),g=100*s/(0===d?d-1e-6:d);r.colorScale.ranges.length>0&&r.colorScale.ranges.map((function(t,e){if(s>=t.from&&s<=t.to){n=t.color,l=t.foreColor?t.foreColor:null,h=t.from,c=t.to;var i=Math.abs(c)+Math.abs(h);g=100*s/(0===i?i-1e-6:i)}}));return{color:n,foreColor:l,percent:g}}},{key:"calculateDataLabels",value:function(t){var e=t.text,i=t.x,a=t.y,s=t.i,r=t.j,o=t.colorProps,n=t.fontSize,l=this.w.config.dataLabels,h=new m(this.ctx),c=new z(this.ctx),d=null;if(l.enabled){d=h.group({class:"apexcharts-data-labels"});var g=l.offsetX,u=l.offsetY,f=i+g,p=a+parseFloat(l.style.fontSize)/3+u;c.plotDataLabelsText({x:f,y:p,text:e,i:s,j:r,color:o.foreColor,parent:d,fontSize:n,dataLabelsConfig:l})}return d}},{key:"addListeners",value:function(t){var e=new m(this.ctx);t.node.addEventListener("mouseenter",e.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",e.pathMouseLeave.bind(this,t)),t.node.addEventListener("mousedown",e.pathMouseDown.bind(this,t))}}]),t}(),At=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.xRatio=i.xRatio,this.yRatio=i.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new kt(e),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return r(t,[{key:"draw",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var s=e.globals.gridWidth/e.globals.dataPoints,r=e.globals.gridHeight/e.globals.series.length,o=0,n=!1;this.negRange=this.helpers.checkColorRange();var l=t.slice();e.config.yaxis[0].reversed&&(n=!0,l.reverse());for(var h=n?0:l.length-1;n?h<l.length:h>=0;n?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:x.escapeString(e.globals.seriesNames[h]),rel:h+1,"data:realIndex":h});if(this.ctx.series.addCollapsedClassToSeries(c,h),e.config.chart.dropShadow.enabled){var d=e.config.chart.dropShadow;new v(this.ctx).dropShadow(c,d,h)}for(var g=0,u=e.config.plotOptions.heatmap.shadeIntensity,f=0;f<l[h].length;f++){var p=this.helpers.getShadeColor(e.config.chart.type,h,f,this.negRange),b=p.color,y=p.colorProps;if("image"===e.config.fill.type)b=new M(this.ctx).fillPath({seriesNumber:h,dataPointIndex:f,opacity:e.globals.hasNegs?y.percent<0?1-(1+y.percent/100):u+y.percent/100:y.percent/100,patternID:x.randomId(),width:e.config.fill.image.width?e.config.fill.image.width:s,height:e.config.fill.image.height?e.config.fill.image.height:r});var w=this.rectRadius,k=i.drawRect(g,o,s,r,w);if(k.attr({cx:g,cy:o}),k.node.classList.add("apexcharts-heatmap-rect"),c.add(k),k.attr({fill:b,i:h,index:h,j:f,val:l[h][f],"stroke-width":this.strokeWidth,stroke:e.config.plotOptions.heatmap.useFillColorAsStroke?b:e.globals.stroke.colors[0],color:b}),this.helpers.addListeners(k),e.config.chart.animations.enabled&&!e.globals.dataChanged){var A=1;e.globals.resized||(A=e.config.chart.animations.speed),this.animateHeatMap(k,g,o,s,r,A)}if(e.globals.dataChanged){var S=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){S=this.dynamicAnim.speed;var C=e.globals.previousPaths[h]&&e.globals.previousPaths[h][f]&&e.globals.previousPaths[h][f].color;C||(C="rgba(255, 255, 255, 0)"),this.animateHeatColor(k,x.isColorHex(C)?C:x.rgb2hex(C),x.isColorHex(b)?b:x.rgb2hex(b),S)}}var L=(0,e.config.dataLabels.formatter)(e.globals.series[h][f],{value:e.globals.series[h][f],seriesIndex:h,dataPointIndex:f,w:e}),P=this.helpers.calculateDataLabels({text:L,x:g+s/2,y:o+r/2,i:h,j:f,colorProps:y,series:l});null!==P&&c.add(P),g+=s}o+=r,a.add(c)}var T=e.globals.yAxisScale[0].result.slice();e.config.yaxis[0].reversed?T.unshift(""):T.push(""),e.globals.yAxisScale[0].result=T;var I=e.globals.gridHeight/e.globals.series.length;return e.config.yaxis[0].labels.offsetY=-I/2,a}},{key:"animateHeatMap",value:function(t,e,i,a,s,r){var o=new b(this.ctx);o.animateRect(t,{x:e+a/2,y:i+s/2,width:0,height:0},{x:e,y:i,width:a,height:s},r,(function(){o.animationCompleted(t)}))}},{key:"animateHeatColor",value:function(t,e,i,a){t.attr({fill:e}).animate(a).attr({fill:i})}}]),t}(),St=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawYAxisTexts",value:function(t,e,i,a){var s=this.w,r=s.config.yaxis[0],o=s.globals.yLabelFormatters[0];return new m(this.ctx).drawText({x:t+r.labels.offsetX,y:e+r.labels.offsetY,text:o(a,i),textAnchor:"middle",fontSize:r.labels.style.fontSize,fontFamily:r.labels.style.fontFamily,foreColor:Array.isArray(r.labels.style.colors)?r.labels.style.colors[i]:r.labels.style.colors})}}]),t}(),Ct=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=Math.min(i.globals.gridWidth,i.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=i.globals.gridWidth/2,"radialBar"===i.config.chart.type?this.fullAngle=360:this.fullAngle=Math.abs(i.config.plotOptions.pie.endAngle-i.config.plotOptions.pie.startAngle),this.initialAngle=i.config.plotOptions.pie.startAngle%this.fullAngle,i.globals.radialSize=this.defaultSize/2.05-i.config.stroke.width-(i.config.chart.sparkline.enabled?0:i.config.chart.dropShadow.blur),this.donutSize=i.globals.radialSize*parseInt(i.config.plotOptions.pie.donut.size,10)/100,this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return r(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new m(this.ctx);if(this.ret=a.group({class:"apexcharts-pie"}),i.globals.noData)return this.ret;for(var s=0,r=0;r<t.length;r++)s+=x.negToZero(t[r]);var o=[],n=a.group();0===s&&(s=1e-5),t.forEach((function(t){e.maxY=Math.max(e.maxY,t)})),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),"back"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret);for(var l=0;l<t.length;l++){var h=this.fullAngle*x.negToZero(t[l])/s;o.push(h),"polarArea"===this.chartType?(o[l]=this.fullAngle/t.length,this.sliceSizes.push(i.globals.radialSize*t[l]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var c,d=0,g=0;g<i.globals.previousPaths.length;g++)d+=x.negToZero(i.globals.previousPaths[g]);for(var u=0;u<i.globals.previousPaths.length;u++)c=this.fullAngle*x.negToZero(i.globals.previousPaths[u])/d,this.prevSectorAngleArr.push(c)}this.donutSize<0&&(this.donutSize=0);var f=i.config.plotOptions.pie.customScale,p=i.globals.gridWidth/2,b=i.globals.gridHeight/2,v=p-i.globals.gridWidth/2*f,y=b-i.globals.gridHeight/2*f;if("donut"===this.chartType){var w=a.drawCircle(this.donutSize);w.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),n.add(w)}var k=this.drawArcs(o,t);if(this.sliceLabels.forEach((function(t){k.add(t)})),n.attr({transform:"translate(".concat(v,", ").concat(y,") scale(").concat(f,")")}),n.add(k),this.ret.add(n),this.donutDataLabels.show){var A=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:v,translateY:y});this.ret.add(A)}return"front"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret),this.ret}},{key:"drawArcs",value:function(t,e){var i=this.w,a=new v(this.ctx),s=new m(this.ctx),r=new M(this.ctx),o=s.group({class:"apexcharts-slices"}),n=this.initialAngle,l=this.initialAngle,h=this.initialAngle,c=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var d=0;d<t.length;d++){var g=s.group({class:"apexcharts-series apexcharts-pie-series",seriesName:x.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});o.add(g),l=c,h=(n=h)+t[d],c=l+this.prevSectorAngleArr[d];var u=h<n?this.fullAngle+h-n:h-n,f=r.fillPath({seriesNumber:d,size:this.sliceSizes[d],value:e[d]}),p=this.getChangedPath(l,c),b=s.drawPath({d:p,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[d]:this.lineColorArr,strokeWidth:0,fill:f,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(d)});if(b.attr({index:0,j:d}),a.setSelectionFilter(b,0,d),i.config.chart.dropShadow.enabled){var y=i.config.chart.dropShadow;a.dropShadow(b,y,d)}this.addListeners(b,this.donutDataLabels),m.setAttrs(b.node,{"data:angle":u,"data:startAngle":n,"data:strokeWidth":this.strokeWidth,"data:value":e[d]});var w={x:0,y:0};"pie"===this.chartType||"polarArea"===this.chartType?w=x.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle):"donut"===this.chartType&&(w=x.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle)),g.add(b);var k=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(0===(k=u/this.fullAngle*i.config.chart.animations.speed)&&(k=1),this.animDur=k+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(b,{size:this.sliceSizes[d],endAngle:h,startAngle:n,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:d,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(b,{size:this.sliceSizes[d],endAngle:h,startAngle:n,i:d,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:k}),i.config.plotOptions.pie.expandOnClick&&"polarArea"!==this.chartType&&b.click(this.pieClicked.bind(this,d)),void 0!==i.globals.selectedDataPoints[0]&&i.globals.selectedDataPoints[0].indexOf(d)>-1&&this.pieClicked(d),i.config.dataLabels.enabled){var A=w.x,S=w.y,C=100*u/this.fullAngle+"%";if(0!==u&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]){var L=i.config.dataLabels.formatter;void 0!==L&&(C=L(i.globals.seriesPercent[d][0],{seriesIndex:d,w:i}));var P=i.globals.dataLabels.style.colors[d],T=s.group({class:"apexcharts-datalabels"}),I=s.drawText({x:A,y:S,text:C,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:P});if(T.add(I),i.config.dataLabels.dropShadow.enabled){var z=i.config.dataLabels.dropShadow;a.dropShadow(I,z)}I.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(I.node.classList.add("apexcharts-pie-label-delay"),I.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(T)}}}return o}},{key:"addListeners",value:function(t,e){var i=new m(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),this.donutDataLabels.total.showAlways||(t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e)))}},{key:"animatePaths",value:function(t,e){var i=this.w,a=e.endAngle<e.startAngle?this.fullAngle+e.endAngle-e.startAngle:e.endAngle-e.startAngle,s=a,r=e.startAngle,o=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(r=e.prevEndAngle,s=e.prevEndAngle<e.prevStartAngle?this.fullAngle+e.prevEndAngle-e.prevStartAngle:e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(a+o>this.fullAngle?e.endAngle=e.endAngle-(a+o):a+o<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(a+o)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(t,r,o,a,s,e)}},{key:"animateArc",value:function(t,e,i,a,s,r){var o,n=this,l=this.w,h=new b(this.ctx),c=r.size;(isNaN(e)||isNaN(s))&&(e=i,s=a,r.dur=0);var d=a,g=i,u=e<i?this.fullAngle+e-i:e-i;l.globals.dataChanged&&r.shouldSetPrevPaths&&r.prevEndAngle&&(o=n.getPiePath({me:n,startAngle:r.prevStartAngle,angle:r.prevEndAngle<r.prevStartAngle?this.fullAngle+r.prevEndAngle-r.prevStartAngle:r.prevEndAngle-r.prevStartAngle,size:c}),t.attr({d:o})),0!==r.dur?t.animate(r.dur,l.globals.easing,r.animBeginArr[r.i]).afterAll((function(){"pie"!==n.chartType&&"donut"!==n.chartType&&"polarArea"!==n.chartType||this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":n.strokeWidth}),r.i===l.config.series.length-1&&h.animationCompleted(t)})).during((function(l){d=u+(a-u)*l,r.animateStartingPos&&(d=s+(a-s)*l,g=e-s+(i-(e-s))*l),o=n.getPiePath({me:n,startAngle:g,angle:d,size:c}),t.node.setAttribute("data:pathOrig",o),t.attr({d:o})})):(o=n.getPiePath({me:n,startAngle:g,angle:a,size:c}),r.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",o),t.attr({d:o,"stroke-width":n.strokeWidth}))}},{key:"pieClicked",value:function(t){var e,i=this.w,a=this,s=a.sliceSizes[t]+(i.config.plotOptions.pie.expandOnClick?4:0),r=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(t)).members[0];if("true"!==r.attr("data:pieClicked")){var o=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(o,(function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");t.setAttribute("d",e)})),r.attr("data:pieClicked","true");var n=parseInt(r.attr("data:startAngle"),10),l=parseInt(r.attr("data:angle"),10);e=a.getPiePath({me:a,startAngle:n,angle:l,size:s}),360!==l&&r.plot(e)}else{r.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(r.node,this.donutDataLabels);var h=r.attr("data:pathOrig");r.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e=t.me,i=t.startAngle,a=t.angle,s=t.size,r=i,o=Math.PI*(r-90)/180,n=a+i;Math.ceil(n)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(n=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(n)>this.fullAngle&&(n-=this.fullAngle);var l=Math.PI*(n-90)/180,h=e.centerX+s*Math.cos(o),c=e.centerY+s*Math.sin(o),d=e.centerX+s*Math.cos(l),g=e.centerY+s*Math.sin(l),u=x.polarToCartesian(e.centerX,e.centerY,e.donutSize,n),f=x.polarToCartesian(e.centerX,e.centerY,e.donutSize,r),p=a>180?1:0,b=["M",h,c,"A",s,s,0,p,1,d,g];return"donut"===e.chartType?[].concat(b,["L",u.x,u.y,"A",e.donutSize,e.donutSize,0,p,0,f.x,f.y,"L",h,c,"z"]).join(" "):"pie"===e.chartType||"polarArea"===e.chartType?[].concat(b,["L",e.centerX,e.centerY,"L",h,c]).join(" "):[].concat(b).join(" ")}},{key:"drawPolarElements",value:function(t){var e=this.w,i=new q(this.ctx),a=new m(this.ctx),s=new St(this.ctx),r=a.group(),o=a.group(),n=i.niceScale(0,Math.ceil(this.maxY),e.config.yaxis[0].tickAmount,0,!0),l=n.result.reverse(),h=n.result.length;this.maxY=n.niceMax;for(var c=e.globals.radialSize,d=c/(h-1),g=0;g<h-1;g++){var u=a.drawCircle(c);if(u.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":e.config.plotOptions.polarArea.rings.strokeWidth,stroke:e.config.plotOptions.polarArea.rings.strokeColor}),e.config.yaxis[0].show){var f=s.drawYAxisTexts(this.centerX,this.centerY-c+parseInt(e.config.yaxis[0].labels.style.fontSize,10)/2,g,l[g]);o.add(f)}r.add(u),c-=d}this.drawSpokes(t),t.add(r),t.add(o)}},{key:"renderInnerDataLabels",value:function(t,e){var i=this.w,a=new m(this.ctx),s=a.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(e.translateX?e.translateX:0,", ").concat(e.translateY?e.translateY:0,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),r=t.total.show;s.node.style.opacity=e.opacity;var o,n,l=e.centerX,h=e.centerY;o=void 0===t.name.color?i.globals.colors[0]:t.name.color;var c=t.name.fontSize,d=t.name.fontFamily,g=t.name.fontWeight;n=void 0===t.value.color?i.config.chart.foreColor:t.value.color;var u=t.value.formatter,f="",p="";if(r?(o=t.total.color,c=t.total.fontSize,d=t.total.fontFamily,g=t.total.fontWeight,p=t.total.label,f=t.total.formatter(i)):1===i.globals.series.length&&(f=u(i.globals.series[0],i),p=i.globals.seriesNames[0]),p&&(p=t.name.formatter(p,t.total.show,i)),t.name.show){var x=a.drawText({x:l,y:h+parseFloat(t.name.offsetY),text:p,textAnchor:"middle",foreColor:o,fontSize:c,fontWeight:g,fontFamily:d});x.node.classList.add("apexcharts-datalabel-label"),s.add(x)}if(t.value.show){var b=t.name.show?parseFloat(t.value.offsetY)+16:t.value.offsetY,v=a.drawText({x:l,y:h+b,text:f,textAnchor:"middle",foreColor:n,fontWeight:t.value.fontWeight,fontSize:t.value.fontSize,fontFamily:t.value.fontFamily});v.node.classList.add("apexcharts-datalabel-value"),s.add(v)}return s}},{key:"printInnerLabels",value:function(t,e,i,a){var s,r=this.w;a?s=void 0===t.name.color?r.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:t.name.color:r.globals.series.length>1&&t.total.show&&(s=t.total.color);var o=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,r),a||"function"!=typeof t.total.formatter||(i=t.total.formatter(r));var l=e===t.total.label;e=t.name.formatter(e,l,r),null!==o&&(o.textContent=e),null!==n&&(n.textContent=i),null!==o&&(o.style.fill=s)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,a=t.getAttribute("data:value"),s=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(e,s,a,t);var r=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==r&&(r.style.opacity=1)}},{key:"drawSpokes",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=i.config.plotOptions.polarArea.spokes;if(0!==s.strokeWidth){for(var r=[],o=360/i.globals.series.length,n=0;n<i.globals.series.length;n++)r.push(x.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize,i.config.plotOptions.pie.startAngle+o*n));r.forEach((function(i,r){var o=a.drawLine(i.x,i.y,e.centerX,e.centerY,Array.isArray(s.connectorColors)?s.connectorColors[r]:s.connectorColors);t.add(o)}))}}},{key:"revertDataLabelsInner",value:function(t,e,i){var a=this,s=this.w,r=s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),o=!1,n=s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),l=function(t){var i=t.makeSliceOut,s=t.printLabel;Array.prototype.forEach.call(n,(function(t){"true"===t.getAttribute("data:pieClicked")&&(i&&(o=!0),s&&a.printDataLabelsInner(t,e))}))};if(l({makeSliceOut:!0,printLabel:!1}),e.total.show&&s.globals.series.length>1)o&&!e.total.showAlways?l({makeSliceOut:!1,printLabel:!0}):this.printInnerLabels(e,e.total.label,e.total.formatter(s));else if(l({makeSliceOut:!1,printLabel:!0}),!o)if(s.globals.selectedDataPoints.length&&s.globals.series.length>1)if(s.globals.selectedDataPoints[0].length>0){var h=s.globals.selectedDataPoints[0],c=s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(h));this.printDataLabelsInner(c,e)}else r&&s.globals.selectedDataPoints.length&&0===s.globals.selectedDataPoints[0].length&&(r.style.opacity=0);else r&&s.globals.series.length>1&&(r.style.opacity=0)}}]),t}(),Lt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var i=this.w;this.graphics=new m(this.ctx),this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=i.globals.svgHeight<i.globals.svgWidth?i.globals.gridHeight+1.5*i.globals.goldenPadding:i.globals.gridWidth,this.isLog=i.config.yaxis[0].logarithmic,this.coreUtils=new y(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(i.globals.maxY,0):i.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY,0):i.globals.minY,this.polygons=i.config.plotOptions.radar.polygons,this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-i.config.chart.dropShadow.blur,i.config.xaxis.labels.show&&(this.size=this.size-i.globals.xAxisLabelsWidth/1.75),void 0!==i.config.plotOptions.radar.size&&(this.size=i.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return r(t,[{key:"draw",value:function(t){var i=this,a=this.w,s=new M(this.ctx),r=[],o=new z(this.ctx);t.length&&(this.dataPointsLen=t[a.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var n=a.globals.gridWidth/2,l=a.globals.gridHeight/2,h=n+a.config.plotOptions.radar.offsetX,c=l+a.config.plotOptions.radar.offsetY,d=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(h||0,", ").concat(c||0,")")}),g=[],u=null,f=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach((function(t,n){var l=t.length===a.globals.dataPoints,h=i.graphics.group().attr({class:"apexcharts-series","data:longestSeries":l,seriesName:x.escapeString(a.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});i.dataRadiusOfPercent[n]=[],i.dataRadius[n]=[],i.angleArr[n]=[],t.forEach((function(t,e){var a=Math.abs(i.maxValue-i.minValue);t+=Math.abs(i.minValue),i.isLog&&(t=i.coreUtils.getLogVal(t,0)),i.dataRadiusOfPercent[n][e]=t/a,i.dataRadius[n][e]=i.dataRadiusOfPercent[n][e]*i.size,i.angleArr[n][e]=e*i.disAngle})),g=i.getDataPointsPos(i.dataRadius[n],i.angleArr[n]);var c=i.createPaths(g,{x:0,y:0});u=i.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),f=i.graphics.group({class:"apexcharts-datalabels","data:realIndex":n}),a.globals.delayedElements.push({el:u.node,index:n});var d={i:n,realIndex:n,animationDelay:n,initialSpeed:a.config.chart.animations.speed,dataChangeSpeed:a.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:a.globals.stroke.colors[n],strokeLineCap:a.config.stroke.lineCap},p=null;a.globals.previousPaths.length>0&&(p=i.getPreviousPath(n));for(var b=0;b<c.linePathsTo.length;b++){var m=i.graphics.renderPaths(e(e({},d),{},{pathFrom:null===p?c.linePathsFrom[b]:p,pathTo:c.linePathsTo[b],strokeWidth:Array.isArray(i.strokeWidth)?i.strokeWidth[n]:i.strokeWidth,fill:"none",drawShadow:!1}));h.add(m);var y=s.fillPath({seriesNumber:n}),w=i.graphics.renderPaths(e(e({},d),{},{pathFrom:null===p?c.areaPathsFrom[b]:p,pathTo:c.areaPathsTo[b],strokeWidth:0,fill:y,drawShadow:!1}));if(a.config.chart.dropShadow.enabled){var k=new v(i.ctx),A=a.config.chart.dropShadow;k.dropShadow(w,Object.assign({},A,{noUserSpaceOnUse:!0}),n)}h.add(w)}t.forEach((function(t,s){var r=new T(i.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:n,dataPointIndex:s}),l=i.graphics.drawMarker(g[s].x,g[s].y,r);l.attr("rel",s),l.attr("j",s),l.attr("index",n),l.node.setAttribute("default-marker-size",r.pSize);var c=i.graphics.group({class:"apexcharts-series-markers"});c&&c.add(l),u.add(c),h.add(u);var d=a.config.dataLabels;if(d.enabled){var p=d.formatter(a.globals.series[n][s],{seriesIndex:n,dataPointIndex:s,w:a});o.plotDataLabelsText({x:g[s].x,y:g[s].y,text:p,textAnchor:"middle",i:n,j:n,parent:f,offsetCorrection:!1,dataLabelsConfig:e({},d)})}h.add(f)})),r.push(h)})),this.drawPolygons({parent:d}),a.config.xaxis.labels.show){var p=this.drawXAxisTexts();d.add(p)}return r.forEach((function(t){d.add(t)})),d.add(this.yaxisLabels),d}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,a=t.parent,s=new St(this.ctx),r=i.globals.yAxisScale[0].result.reverse(),o=r.length,n=[],l=this.size/(o-1),h=0;h<o;h++)n[h]=l*h;n.reverse();var c=[],d=[];n.forEach((function(t,i){var a=x.getPolygonPos(t,e.dataPointsLen),s="";a.forEach((function(t,a){if(0===i){var r=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[a]:e.polygons.connectorColors);d.push(r)}0===a&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),s+=t.x+","+t.y+" "})),c.push(s)})),c.forEach((function(t,s){var r=e.polygons.strokeColors,o=e.polygons.strokeWidth,n=e.graphics.drawPolygon(t,Array.isArray(r)?r[s]:r,Array.isArray(o)?o[s]:o,i.globals.radarPolygons.fill.colors[s]);a.add(n)})),d.forEach((function(t){a.add(t)})),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach((function(t,i){var a=s.drawYAxisTexts(t.x,t.y,i,r[i]);e.yaxisLabels.add(a)}))}},{key:"drawXAxisTexts",value:function(){var t=this,i=this.w,a=i.config.xaxis.labels,s=this.graphics.group({class:"apexcharts-xaxis"}),r=x.getPolygonPos(this.size,this.dataPointsLen);return i.globals.labels.forEach((function(o,n){var l=i.config.xaxis.labels.formatter,h=new z(t.ctx);if(r[n]){var c=t.getTextPos(r[n],t.size),d=l(o,{seriesIndex:-1,dataPointIndex:n,w:i});h.plotDataLabelsText({x:c.newX,y:c.newY,text:d,textAnchor:c.textAnchor,i:n,j:n,parent:s,color:Array.isArray(a.style.colors)&&a.style.colors[n]?a.style.colors[n]:"#a8a8a8",dataLabelsConfig:e({textAnchor:c.textAnchor,dropShadow:{enabled:!1}},a),offsetCorrection:!1})}})),s}},{key:"createPaths",value:function(t,e){var i=this,a=[],s=[],r=[],o=[];if(t.length){s=[this.graphics.move(e.x,e.y)],o=[this.graphics.move(e.x,e.y)];var n=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach((function(e,a){n+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),a===t.length-1&&(n+="Z",l+="Z")})),a.push(n),r.push(l)}return{linePathsFrom:s,linePathsTo:a,areaPathsFrom:o,areaPathsTo:r}}},{key:"getTextPos",value:function(t,e){var i="middle",a=t.x,s=t.y;return Math.abs(t.x)>=10?t.x>0?(i="start",a+=10):t.x<0&&(i="end",a-=10):i="middle",Math.abs(t.y)>=e-10&&(t.y<0?s-=10:t.y>0&&(s+=10)),{textAnchor:i,newX:a,newY:s}}},{key:"getPreviousPath",value:function(t){for(var e=this.w,i=null,a=0;a<e.globals.previousPaths.length;a++){var s=e.globals.previousPaths[a];s.paths.length>0&&parseInt(s.realIndex,10)===parseInt(t,10)&&void 0!==e.globals.previousPaths[a].paths[0]&&(i=e.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var a=[],s=0;s<i;s++){var r={};r.x=t[s]*Math.sin(e[s]),r.y=-t[s]*Math.cos(e[s]),a.push(r)}return a}}]),t}(),Pt=function(t){n(i,t);var e=d(i);function i(t){var s;a(this,i),(s=e.call(this,t)).ctx=t,s.w=t.w,s.animBeginArr=[0],s.animDur=0;var r=s.w;return s.startAngle=r.config.plotOptions.radialBar.startAngle,s.endAngle=r.config.plotOptions.radialBar.endAngle,s.totalAngle=Math.abs(r.config.plotOptions.radialBar.endAngle-r.config.plotOptions.radialBar.startAngle),s.trackStartAngle=r.config.plotOptions.radialBar.track.startAngle,s.trackEndAngle=r.config.plotOptions.radialBar.track.endAngle,s.donutDataLabels=s.w.config.plotOptions.radialBar.dataLabels,s.radialDataLabels=s.donutDataLabels,s.trackStartAngle||(s.trackStartAngle=s.startAngle),s.trackEndAngle||(s.trackEndAngle=s.endAngle),360===s.endAngle&&(s.endAngle=359.99),s.margin=parseInt(r.config.plotOptions.radialBar.track.margin,10),s}return r(i,[{key:"draw",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-radialbar"});if(e.globals.noData)return a;var s=i.group(),r=this.defaultSize/2,o=e.globals.gridWidth/2,n=this.defaultSize/2.05;e.config.chart.sparkline.enabled||(n=n-e.config.stroke.width-e.config.chart.dropShadow.blur);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:n,centerX:o,centerY:r,colorArr:l,series:t});s.add(h)}var c=this.drawArcs({size:n,centerX:o,centerY:r,colorArr:l,series:t}),d=360;e.config.plotOptions.radialBar.startAngle<0&&(d=this.totalAngle);var g=(360-d)/360;if(e.globals.radialSize=n-n*g,this.radialDataLabels.value.show){var u=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);e.globals.radialSize+=u*g}return s.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),a.add(s),a}},{key:"drawTracks",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-tracks"}),s=new v(this.ctx),r=new M(this.ctx),o=this.getStrokeWidth(t);t.size=t.size-o/2;for(var n=0;n<t.series.length;n++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});a.add(l),l.attr({rel:n+1}),t.size=t.size-o-this.margin;var h=e.config.plotOptions.radialBar.track,c=r.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[n]:h.background,solid:!0}),d=this.trackStartAngle,g=this.trackEndAngle;Math.abs(g)+Math.abs(d)>=360&&(g=360-Math.abs(this.startAngle)-.1);var u=i.drawPath({d:"",stroke:c,strokeWidth:o*parseInt(h.strokeWidth,10)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var f=h.dropShadow;s.dropShadow(u,f)}l.add(u),u.attr("id","apexcharts-radialbarTrack-"+n),this.animatePaths(u,{centerX:t.centerX,centerY:t.centerY,endAngle:g,startAngle:d,size:t.size,i:n,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:e.globals.easing})}return a}},{key:"drawArcs",value:function(t){var e=this.w,i=new m(this.ctx),a=new M(this.ctx),s=new v(this.ctx),r=i.group(),o=this.getStrokeWidth(t);t.size=t.size-o/2;var n=e.config.plotOptions.radialBar.hollow.background,l=t.size-o*t.series.length-this.margin*t.series.length-o*parseInt(e.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(n=this.drawHollowImage(t,r,l,n));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:n||"transparent"});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var d=e.config.plotOptions.radialBar.hollow.dropShadow;s.dropShadow(c,d)}var g=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(g=0);var u=null;this.radialDataLabels.show&&(u=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:g})),"back"===e.config.plotOptions.radialBar.hollow.position&&(r.add(c),u&&r.add(u));var f=!1;e.config.plotOptions.radialBar.inverseOrder&&(f=!0);for(var p=f?t.series.length-1:0;f?p>=0:p<t.series.length;f?p--:p++){var b=i.group({class:"apexcharts-series apexcharts-radial-series",seriesName:x.escapeString(e.globals.seriesNames[p])});r.add(b),b.attr({rel:p+1,"data:realIndex":p}),this.ctx.series.addCollapsedClassToSeries(b,p),t.size=t.size-o-this.margin;var y=a.fillPath({seriesNumber:p,size:t.size,value:t.series[p]}),w=this.startAngle,k=void 0,A=x.negToZero(t.series[p]>100?100:t.series[p])/100,S=Math.round(this.totalAngle*A)+this.startAngle,C=void 0;e.globals.dataChanged&&(k=this.startAngle,C=Math.round(this.totalAngle*x.negToZero(e.globals.previousPaths[p])/100)+k),Math.abs(S)+Math.abs(w)>=360&&(S-=.01),Math.abs(C)+Math.abs(k)>=360&&(C-=.01);var L=S-w,P=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[p]:e.config.stroke.dashArray,T=i.drawPath({d:"",stroke:y,strokeWidth:o,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+p,strokeDashArray:P});if(m.setAttrs(T.node,{"data:angle":L,"data:value":t.series[p]}),e.config.chart.dropShadow.enabled){var I=e.config.chart.dropShadow;s.dropShadow(T,I,p)}s.setSelectionFilter(T,0,p),this.addListeners(T,this.radialDataLabels),b.add(T),T.attr({index:0,j:p});var z=0;!this.initialAnim||e.globals.resized||e.globals.dataChanged||(z=e.config.chart.animations.speed),e.globals.dataChanged&&(z=e.config.chart.animations.dynamicAnimation.speed),this.animDur=z/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur),this.animatePaths(T,{centerX:t.centerX,centerY:t.centerY,endAngle:S,startAngle:w,prevEndAngle:C,prevStartAngle:k,size:t.size,i:p,totalItems:2,animBeginArr:this.animBeginArr,dur:z,shouldSetPrevPaths:!0,easing:e.globals.easing})}return{g:r,elHollow:c,dataLabels:u}}},{key:"drawHollow",value:function(t){var e=new m(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,a){var s=this.w,r=new M(this.ctx),o=x.randomId(),n=s.config.plotOptions.radialBar.hollow.image;if(s.config.plotOptions.radialBar.hollow.imageClipped)r.clippedImgArea({width:i,height:i,image:n,patternID:"pattern".concat(s.globals.cuid).concat(o)}),a="url(#pattern".concat(s.globals.cuid).concat(o,")");else{var l=s.config.plotOptions.radialBar.hollow.imageWidth,h=s.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-e.width/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+s.config.plotOptions.radialBar.hollow.imageOffsetY)}));e.add(c)}else{var d=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-l/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+s.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)}));e.add(d)}}return a}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size,10))/100/(t.series.length+1)-this.margin}}]),i}(Ct),Mt=function(){function t(e){a(this,t),this.w=e.w,this.lineCtx=e}return r(t,[{key:"sameValueSeriesFix",value:function(t,e){var i=this.w;if("line"===i.config.chart.type&&("gradient"===i.config.fill.type||"gradient"===i.config.fill.type[t])&&new y(this.lineCtx.ctx,i).seriesHaveSameValues(t)){var a=e[t].slice();a[a.length-1]=a[a.length-1]+1e-6,e[t]=a}return e}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,a=t.x,s=t.y,r=t.i,o=t.j,n=t.prevY,l=this.w,h=[],c=[];if(0===o){var d=this.lineCtx.categoryAxisCorrection+l.config.markers.offsetX;l.globals.isXNumeric&&(d=(l.globals.seriesX[i][0]-l.globals.minX)/this.lineCtx.xRatio+l.config.markers.offsetX),h.push(d),c.push(x.isNumber(e[r][0])?n+l.config.markers.offsetY:null),h.push(a+l.config.markers.offsetX),c.push(x.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null)}else h.push(a+l.config.markers.offsetX),c.push(x.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null);return{x:h,y:c}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,a=t.realIndex,s=this.w,r=0;r<s.globals.previousPaths.length;r++){var o=s.globals.previousPaths[r];("line"===o.type||"area"===o.type)&&o.paths.length>0&&parseInt(o.realIndex,10)===parseInt(a,10)&&("line"===o.type?(this.lineCtx.appendPathFrom=!1,e=s.globals.previousPaths[r].paths[0].d):"area"===o.type&&(this.lineCtx.appendPathFrom=!1,i=s.globals.previousPaths[r].paths[0].d,s.config.stroke.show&&s.globals.previousPaths[r].paths[1]&&(e=s.globals.previousPaths[r].paths[1].d)))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e=t.i,i=t.series,a=t.prevY,s=t.lineYPosition,r=this.w;if(void 0!==i[e][0])a=(s=r.config.chart.stacked&&e>0?this.lineCtx.prevSeriesY[e-1][0]:this.lineCtx.zeroY)-i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);else if(r.config.chart.stacked&&e>0&&void 0===i[e][0])for(var o=e-1;o>=0;o--)if(null!==i[o][0]&&void 0!==i[o][0]){a=s=this.lineCtx.prevSeriesY[o][0];break}return{prevY:a,lineYPosition:s}}}]),t}(),Tt=function(){function t(e,i,s){a(this,t),this.ctx=e,this.w=e.w,this.xyRatios=i,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||s,this.scatter=new I(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Mt(this),this.markers=new T(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return r(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new m(this.ctx),r=a.globals.comboCharts?e:a.config.chart.type,o=s.group({class:"apexcharts-".concat(r,"-series apexcharts-plot-series")}),n=new y(this.ctx,a);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,t=n.getLogSeries(t),this.yRatio=n.getLogYRatios(this.yRatio);for(var l=[],h=0;h<t.length;h++){t=this.lineHelpers.sameValueSeriesFix(h,t);var c=a.globals.comboCharts?i[h]:h;this._initSerieVariables(t,h,c);var d=[],g=[],u=a.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,c),a.globals.isXNumeric&&a.globals.seriesX.length>0&&(u=(a.globals.seriesX[c][0]-a.globals.minX)/this.xRatio),g.push(u);var f,p=u,x=p,b=this.zeroY;b=this.lineHelpers.determineFirstPrevY({i:h,series:t,prevY:b,lineYPosition:0}).prevY,d.push(b),f=b;var v=this._calculatePathsFrom({series:t,i:h,realIndex:c,prevX:x,prevY:b}),w=this._iterateOverDataPoints({series:t,realIndex:c,i:h,x:u,y:1,pX:p,pY:f,pathsFrom:v,linePaths:[],areaPaths:[],seriesIndex:i,lineYPosition:0,xArrj:g,yArrj:d});this._handlePaths({type:r,realIndex:c,i:h,paths:w}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),l.push(this.elSeries)}if(a.config.chart.stacked)for(var k=l.length;k>0;k--)o.add(l[k-1]);else for(var A=0;A<l.length;A++)o.add(l[A]);return o}},{key:"_initSerieVariables",value:function(t,e,i){var a=this.w,s=new m(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-("on"===a.config.xaxis.tickPlacement?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width,this.yRatio.length>1&&(this.yaxisIndex=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||"end"===a.config.plotOptions.area.fillTo)&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=s.group({class:"apexcharts-series",seriesName:x.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=s.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=s.group({class:"apexcharts-datalabels","data:realIndex":i});var r=t[e].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":r,rel:e+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(t){var e,i,a,s,r=t.series,o=t.i,n=t.realIndex,l=t.prevX,h=t.prevY,c=this.w,d=new m(this.ctx);if(null===r[o][0]){for(var g=0;g<r[o].length;g++)if(null!==r[o][g]){l=this.xDivision*g,h=this.zeroY-r[o][g]/this.yRatio[this.yaxisIndex],e=d.move(l,h),i=d.move(l,this.areaBottomY);break}}else e=d.move(l,h),i=d.move(l,this.areaBottomY)+d.line(l,h);if(a=d.move(-1,this.zeroY)+d.line(-1,this.zeroY),s=d.move(-1,this.zeroY)+d.line(-1,this.zeroY),c.globals.previousPaths.length>0){var u=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:s,realIndex:n});a=u.pathFromLine,s=u.pathFromArea}return{prevX:l,prevY:h,linePath:e,areaPath:i,pathFromLine:a,pathFromArea:s}}},{key:"_handlePaths",value:function(t){var i=t.type,a=t.realIndex,s=t.i,r=t.paths,o=this.w,n=new m(this.ctx),l=new M(this.ctx);this.prevSeriesY.push(r.yArrj),o.globals.seriesXvalues[a]=r.xArrj,o.globals.seriesYvalues[a]=r.yArrj;var h=o.config.forecastDataPoints;if(h.count>0){var c=o.globals.seriesXvalues[a][o.globals.seriesXvalues[a].length-h.count-1],d=n.drawRect(c,0,o.globals.gridWidth,o.globals.gridHeight,0);o.globals.dom.elForecastMask.appendChild(d.node);var g=n.drawRect(0,0,c,o.globals.gridHeight,0);o.globals.dom.elNonForecastMask.appendChild(g.node)}this.pointsChart||o.globals.delayedElements.push({el:this.elPointsMain.node,index:a});var u={i:s,realIndex:a,animationDelay:s,initialSpeed:o.config.chart.animations.speed,dataChangeSpeed:o.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(i)};if("area"===i)for(var f=l.fillPath({seriesNumber:a}),p=0;p<r.areaPaths.length;p++){var x=n.renderPaths(e(e({},u),{},{pathFrom:r.pathFromArea,pathTo:r.areaPaths[p],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:f}));this.elSeries.add(x)}if(o.config.stroke.show&&!this.pointsChart){var b=null;if("line"===i)b=l.fillPath({seriesNumber:a,i:s});else if("solid"===o.config.stroke.fill.type)b=o.globals.stroke.colors[a];else{var v=o.config.fill;o.config.fill=o.config.stroke.fill,b=l.fillPath({seriesNumber:a,i:s}),o.config.fill=v}for(var y=0;y<r.linePaths.length;y++){var w=e(e({},u),{},{pathFrom:r.pathFromLine,pathTo:r.linePaths[y],stroke:b,strokeWidth:this.strokeWidth,strokeLineCap:o.config.stroke.lineCap,fill:"none"}),k=n.renderPaths(w);if(this.elSeries.add(k),h.count>0){var A=n.renderPaths(w);A.node.setAttribute("stroke-dasharray",h.dashArray),h.strokeWidth&&A.node.setAttribute("stroke-width",h.strokeWidth),this.elSeries.add(A),A.attr("clip-path","url(#forecastMask".concat(o.globals.cuid,")")),k.attr("clip-path","url(#nonForecastMask".concat(o.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(t){for(var e=t.series,i=t.realIndex,a=t.i,s=t.x,r=t.y,o=t.pX,n=t.pY,l=t.pathsFrom,h=t.linePaths,c=t.areaPaths,d=t.seriesIndex,g=t.lineYPosition,u=t.xArrj,f=t.yArrj,p=this.w,b=new m(this.ctx),v=this.yRatio,y=l.prevY,w=l.linePath,k=l.areaPath,A=l.pathFromLine,S=l.pathFromArea,C=x.isNumber(p.globals.minYArr[i])?p.globals.minYArr[i]:p.globals.minY,L=p.globals.dataPoints>1?p.globals.dataPoints-1:p.globals.dataPoints,P=0;P<L;P++){var M=void 0===e[a][P+1]||null===e[a][P+1];if(p.globals.isXNumeric){var T=p.globals.seriesX[i][P+1];void 0===p.globals.seriesX[i][P+1]&&(T=p.globals.seriesX[i][L-1]),s=(T-p.globals.minX)/this.xRatio}else s+=this.xDivision;if(p.config.chart.stacked)if(a>0&&p.globals.collapsedSeries.length<p.config.series.length-1){g=this.prevSeriesY[function(t){for(var e=t,i=0;i<p.globals.series.length;i++)if(p.globals.collapsedSeriesIndices.indexOf(t)>-1){e--;break}return e>=0?e:0}(a-1)][P+1]}else g=this.zeroY;else g=this.zeroY;r=M?g-C/v[this.yaxisIndex]+2*(this.isReversed?C/v[this.yaxisIndex]:0):g-e[a][P+1]/v[this.yaxisIndex]+2*(this.isReversed?e[a][P+1]/v[this.yaxisIndex]:0),u.push(s),f.push(r);var I=this.lineHelpers.calculatePoints({series:e,x:s,y:r,realIndex:i,i:a,j:P,prevY:y}),z=this._createPaths({series:e,i:a,realIndex:i,j:P,x:s,y:r,pX:o,pY:n,linePath:w,areaPath:k,linePaths:h,areaPaths:c,seriesIndex:d});c=z.areaPaths,h=z.linePaths,o=z.pX,n=z.pY,k=z.areaPath,w=z.linePath,this.appendPathFrom&&(A+=b.line(s,this.zeroY),S+=b.line(s,this.zeroY)),this.handleNullDataPoints(e,I,a,P,i),this._handleMarkersAndLabels({pointsPos:I,series:e,x:s,y:r,prevY:y,i:a,j:P,realIndex:i})}return{yArrj:f,xArrj:u,pathFromArea:S,areaPaths:c,pathFromLine:A,linePaths:h}}},{key:"_handleMarkersAndLabels",value:function(t){var e=t.pointsPos;t.series,t.x,t.y,t.prevY;var i=t.i,a=t.j,s=t.realIndex,r=this.w,o=new z(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,a,{realIndex:s,pointsPos:e,zRatio:this.zRatio,elParent:this.elPointsMain});else{r.globals.series[i].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var n=this.markers.plotChartMarkers(e,s,a+1);null!==n&&this.elPointsMain.add(n)}var l=o.drawDataLabel(e,s,a+1,null);null!==l&&this.elDataLabelsWrap.add(l)}},{key:"_createPaths",value:function(t){var e=t.series,i=t.i,a=t.realIndex,s=t.j,r=t.x,o=t.y,n=t.pX,l=t.pY,h=t.linePath,c=t.areaPath,d=t.linePaths,g=t.areaPaths,u=t.seriesIndex,f=this.w,p=new m(this.ctx),x=f.config.stroke.curve,b=this.areaBottomY;if(Array.isArray(f.config.stroke.curve)&&(x=Array.isArray(u)?f.config.stroke.curve[u[i]]:f.config.stroke.curve[i]),"smooth"===x){var v=.35*(r-n);f.globals.hasNullValues?(null!==e[i][s]&&(null!==e[i][s+1]?(h=p.move(n,l)+p.curve(n+v,l,r-v,o,r+1,o),c=p.move(n+1,l)+p.curve(n+v,l,r-v,o,r+1,o)+p.line(r,b)+p.line(n,b)+"z"):(h=p.move(n,l),c=p.move(n,l)+"z")),d.push(h),g.push(c)):(h+=p.curve(n+v,l,r-v,o,r,o),c+=p.curve(n+v,l,r-v,o,r,o)),n=r,l=o,s===e[i].length-2&&(c=c+p.curve(n,l,r,o,r,b)+p.move(r,o)+"z",f.globals.hasNullValues||(d.push(h),g.push(c)))}else{if(null===e[i][s+1]){h+=p.move(r,o);var y=f.globals.isXNumeric?(f.globals.seriesX[a][s]-f.globals.minX)/this.xRatio:r-this.xDivision;c=c+p.line(y,b)+p.move(r,o)+"z"}null===e[i][s]&&(h+=p.move(r,o),c+=p.move(r,b)),"stepline"===x?(h=h+p.line(r,null,"H")+p.line(null,o,"V"),c=c+p.line(r,null,"H")+p.line(null,o,"V")):"straight"===x&&(h+=p.line(r,o),c+=p.line(r,o)),s===e[i].length-2&&(c=c+p.line(r,b)+p.move(r,o)+"z",d.push(h),g.push(c))}return{linePaths:d,areaPaths:g,pX:n,pY:l,linePath:h,areaPath:c}}},{key:"handleNullDataPoints",value:function(t,e,i,a,s){var r=this.w;if(null===t[i][a]&&r.config.markers.showNullDataPoints||1===t[i].length){var o=this.markers.plotChartMarkers(e,s,a+1,this.strokeWidth-r.config.markers.strokeWidth/2,!0);null!==o&&this.elPointsMain.add(o)}}}]),t}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function t(e,i,a,s){this.xoffset=e,this.yoffset=i,this.height=s,this.width=a,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(t){var e,i=[],a=this.xoffset,s=this.yoffset,o=r(t)/this.height,n=r(t)/this.width;if(this.width>=this.height)for(e=0;e<t.length;e++)i.push([a,s,a+o,s+t[e]/o]),s+=t[e]/o;else for(e=0;e<t.length;e++)i.push([a,s,a+t[e]/n,s+n]),a+=t[e]/n;return i},this.cutArea=function(e){var i;if(this.width>=this.height){var a=e/this.height,s=this.width-a;i=new t(this.xoffset+a,this.yoffset,s,this.height)}else{var r=e/this.width,o=this.height-r;i=new t(this.xoffset,this.yoffset+r,this.width,o)}return i}}function e(e,a,s,o,n){return o=void 0===o?0:o,n=void 0===n?0:n,function(t){var e,i,a=[];for(e=0;e<t.length;e++)for(i=0;i<t[e].length;i++)a.push(t[e][i]);return a}(i(function(t,e){var i,a=[],s=e/r(t);for(i=0;i<t.length;i++)a[i]=t[i]*s;return a}(e,a*s),[],new t(o,n,a,s),[]))}function i(t,e,s,o){var n,l,h;if(0!==t.length)return n=s.shortestEdge(),function(t,e,i){var s;if(0===t.length)return!0;(s=t.slice()).push(e);var r=a(t,i),o=a(s,i);return r>=o}(e,l=t[0],n)?(e.push(l),i(t.slice(1),e,s,o)):(h=s.cutArea(r(e),o),o.push(s.getCoordinates(e)),i(t,[],h,o)),o;o.push(s.getCoordinates(e))}function a(t,e){var i=Math.min.apply(Math,t),a=Math.max.apply(Math,t),s=r(t);return Math.max(Math.pow(e,2)*a/Math.pow(s,2),Math.pow(s,2)/(Math.pow(e,2)*i))}function s(t){return t&&t.constructor===Array}function r(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e];return i}function o(t){var e,i=0;if(s(t[0]))for(e=0;e<t.length;e++)i+=o(t[e]);else i=r(t);return i}return function t(i,a,r,n,l){n=void 0===n?0:n,l=void 0===l?0:l;var h,c,d=[],g=[];if(s(i[0])){for(c=0;c<i.length;c++)d[c]=o(i[c]);for(h=e(d,a,r,n,l),c=0;c<i.length;c++)g.push(t(i[c],h[c][2]-h[c][0],h[c][3]-h[c][1],h[c][0],h[c][1]))}else g=e(i,a,r,n,l);return g}}();var It,zt,Xt=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new kt(e),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return r(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=new M(this.ctx),r=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return r;var o=[];return t.forEach((function(t){var e=t.map((function(t){return Math.abs(t)}));o.push(e)})),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach((function(t,i){t.data.forEach((function(t){Array.isArray(e.labels[i])||(e.labels[i]=[]),e.labels[i].push(t.x)}))})),window.TreemapSquared.generate(o,i.globals.gridWidth,i.globals.gridHeight).forEach((function(o,n){var l=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:x.escapeString(i.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});if(i.config.chart.dropShadow.enabled){var h=i.config.chart.dropShadow;new v(e.ctx).dropShadow(r,h,n)}var c=a.group({class:"apexcharts-data-labels"});o.forEach((function(r,o){var h=r[0],c=r[1],d=r[2],g=r[3],u=a.drawRect(h,c,d-h,g-c,0,"#fff",1,e.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?p:i.globals.stroke.colors[n]);u.attr({cx:h,cy:c,index:n,i:n,j:o,width:d-h,height:g-c});var f=e.helpers.getShadeColor(i.config.chart.type,n,o,e.negRange),p=f.color;void 0!==i.config.series[n].data[o]&&i.config.series[n].data[o].fillColor&&(p=i.config.series[n].data[o].fillColor);var x=s.fillPath({color:p,seriesNumber:n,dataPointIndex:o});u.node.classList.add("apexcharts-treemap-rect"),u.attr({fill:x}),e.helpers.addListeners(u);var b={x:h+(d-h)/2,y:c+(g-c)/2,width:0,height:0},v={x:h,y:c,width:d-h,height:g-c};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var m=1;i.globals.resized||(m=i.config.chart.animations.speed),e.animateTreemap(u,b,v,m)}if(i.globals.dataChanged){var y=1;e.dynamicAnim.enabled&&i.globals.shouldAnimate&&(y=e.dynamicAnim.speed,i.globals.previousPaths[n]&&i.globals.previousPaths[n][o]&&i.globals.previousPaths[n][o].rect&&(b=i.globals.previousPaths[n][o].rect),e.animateTreemap(u,b,v,y))}var w=e.getFontSize(r),k=i.config.dataLabels.formatter(e.labels[n][o],{value:i.globals.series[n][o],seriesIndex:n,dataPointIndex:o,w:i}),A=e.helpers.calculateDataLabels({text:k,x:(h+d)/2,y:(c+g)/2+e.strokeWidth/2+w/3,i:n,j:o,colorProps:f,fontSize:w,series:t});i.config.dataLabels.enabled&&A&&e.rotateToFitLabel(A,w,k,h,c,d,g),l.add(u),null!==A&&l.add(A)})),l.add(c),r.add(l)})),r}},{key:"getFontSize",value:function(t){var e=this.w;var i,a,s,r,o=function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=e[i].length;return a}(this.labels)/function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=1;return a}(this.labels);return i=t[2]-t[0],a=t[3]-t[1],s=i*a,r=Math.pow(s,.5),Math.min(r/o,parseInt(e.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(t,e,i,a,s,r,o){var n=new m(this.ctx),l=n.getTextRects(i,e);if(l.width+this.w.config.stroke.width+5>r-a&&l.width<=o-s){var h=n.rotateAroundCenter(t.node);t.node.setAttribute("transform","rotate(-90 ".concat(h.x," ").concat(h.y,")"))}}},{key:"animateTreemap",value:function(t,e,i,a){var s=new b(this.ctx);s.animateRect(t,{x:e.x,y:e.y,width:e.width,height:e.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,(function(){s.animationCompleted(t)}))}}]),t}(),Et=86400,Yt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return r(t,[{key:"calculateTimeScaleTicks",value:function(t,i){var a=this,s=this.w;if(s.globals.allSeriesCollapsed)return s.globals.labels=[],s.globals.timescaleLabels=[],[];var r=new R(this.ctx),o=(i-t)/864e5;this.determineInterval(o),s.globals.disableZoomIn=!1,s.globals.disableZoomOut=!1,o<.00011574074074074075?s.globals.disableZoomIn=!0:o>5e4&&(s.globals.disableZoomOut=!0);var n=r.getTimeUnitsfromTimestamp(t,i,this.utc),l=s.globals.gridWidth/o,h=l/24,c=h/60,d=c/60,g=Math.floor(24*o),u=Math.floor(1440*o),f=Math.floor(o*Et),p=Math.floor(o),x=Math.floor(o/30),b=Math.floor(o/365),v={minMillisecond:n.minMillisecond,minSecond:n.minSecond,minMinute:n.minMinute,minHour:n.minHour,minDate:n.minDate,minMonth:n.minMonth,minYear:n.minYear},m={firstVal:v,currentMillisecond:v.minMillisecond,currentSecond:v.minSecond,currentMinute:v.minMinute,currentHour:v.minHour,currentMonthDate:v.minDate,currentDate:v.minDate,currentMonth:v.minMonth,currentYear:v.minYear,daysWidthOnXAxis:l,hoursWidthOnXAxis:h,minutesWidthOnXAxis:c,secondsWidthOnXAxis:d,numberOfSeconds:f,numberOfMinutes:u,numberOfHours:g,numberOfDays:p,numberOfMonths:x,numberOfYears:b};switch(this.tickInterval){case"years":this.generateYearScale(m);break;case"months":case"half_year":this.generateMonthScale(m);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(m);break;case"hours":this.generateHourScale(m);break;case"minutes_fives":case"minutes":this.generateMinuteScale(m);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(m)}var y=this.timeScaleArray.map((function(t){var i={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?e(e({},i),{},{day:1,value:t.value+1}):"day"===t.unit||"hour"===t.unit?e(e({},i),{},{value:t.value}):"minute"===t.unit?e(e({},i),{},{value:t.value,minute:t.value}):"second"===t.unit?e(e({},i),{},{value:t.value,minute:t.minute,second:t.second}):t}));return y.filter((function(t){var e=1,i=Math.ceil(s.globals.gridWidth/120),r=t.value;void 0!==s.config.xaxis.tickAmount&&(i=s.config.xaxis.tickAmount),y.length>i&&(e=Math.floor(y.length/i));var o=!1,n=!1;switch(a.tickInterval){case"years":"year"===t.unit&&(o=!0);break;case"half_year":e=7,"year"===t.unit&&(o=!0);break;case"months":e=1,"year"===t.unit&&(o=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(o=!0),30===r&&(n=!0);break;case"months_days":e=10,"month"===t.unit&&(o=!0),30===r&&(n=!0);break;case"week_days":e=8,"month"===t.unit&&(o=!0);break;case"days":e=1,"month"===t.unit&&(o=!0);break;case"hours":"day"===t.unit&&(o=!0);break;case"minutes_fives":r%5!=0&&(n=!0);break;case"seconds_tens":r%10!=0&&(n=!0);break;case"seconds_fives":r%5!=0&&(n=!0)}if("hours"===a.tickInterval||"minutes_fives"===a.tickInterval||"seconds_tens"===a.tickInterval||"seconds_fives"===a.tickInterval){if(!n)return!0}else if((r%e==0||o)&&!n)return!0}))}},{key:"recalcDimensionsBasedOnFormat",value:function(t,e){var i=this.w,a=this.formatDates(t),s=this.removeOverlappingTS(a);i.globals.timescaleLabels=s.slice(),new lt(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){var e=24*t,i=60*e;switch(!0){case t/365>5:this.tickInterval="years";break;case t>800:this.tickInterval="half_year";break;case t>180:this.tickInterval="months";break;case t>90:this.tickInterval="months_fortnight";break;case t>60:this.tickInterval="months_days";break;case t>30:this.tickInterval="week_days";break;case t>2:this.tickInterval="days";break;case e>2.4:this.tickInterval="hours";break;case i>15:this.tickInterval="minutes_fives";break;case i>5:this.tickInterval="minutes";break;case i>1:this.tickInterval="seconds_tens";break;case 60*i>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.daysWidthOnXAxis,r=t.numberOfYears,o=e.minYear,n=0,l=new R(this.ctx),h="year";if(e.minDate>1||e.minMonth>0){var c=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);n=(l.determineDaysOfYear(e.minYear)-c+1)*s,o=e.minYear+1,this.timeScaleArray.push({position:n,value:o,unit:h,year:o,month:x.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:n,value:o,unit:h,year:a,month:x.monthMod(i+1)});for(var d=o,g=n,u=0;u<r;u++)d++,g=l.determineDaysOfYear(d-1)*s+g,this.timeScaleArray.push({position:g,value:d,unit:h,year:d,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,a=t.currentMonth,s=t.currentYear,r=t.daysWidthOnXAxis,o=t.numberOfMonths,n=a,l=0,h=new R(this.ctx),c="month",d=0;if(e.minDate>1){l=(h.determineDaysOfMonths(a+1,e.minYear)-i+1)*r,n=x.monthMod(a+1);var g=s+d,u=x.monthMod(n),f=n;0===n&&(c="year",f=g,u=1,g+=d+=1),this.timeScaleArray.push({position:l,value:f,unit:c,year:g,month:u})}else this.timeScaleArray.push({position:l,value:n,unit:c,year:s,month:x.monthMod(a)});for(var p=n+1,b=l,v=0,m=1;v<o;v++,m++){0===(p=x.monthMod(p))?(c="year",d+=1):c="month";var y=this._getYear(s,p,d);b=h.determineDaysOfMonths(p,y)*r+b;var w=0===p?y:p;this.timeScaleArray.push({position:b,value:w,unit:c,year:y,month:0===p?1:p}),p++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.hoursWidthOnXAxis,r=t.numberOfDays,o=new R(this.ctx),n="day",l=e.minDate+1,h=l,c=function(t,e,i){return t>o.determineDaysOfMonths(e+1,i)?(h=1,n="month",g=e+=1,e):e},d=(24-e.minHour)*s,g=l,u=c(h,i,a);0===e.minHour&&1===e.minDate?(d=0,g=x.monthMod(e.minMonth),n="month",h=e.minDate,r++):1!==e.minDate&&0===e.minHour&&0===e.minMinute&&(d=0,l=e.minDate,g=l,u=c(h=l,i,a)),this.timeScaleArray.push({position:d,value:g,unit:n,year:this._getYear(a,u,0),month:x.monthMod(u),day:h});for(var f=d,p=0;p<r;p++){n="day",u=c(h+=1,u,this._getYear(a,u,0));var b=this._getYear(a,u,0);f=24*s+f;var v=1===h?x.monthMod(u):h;this.timeScaleArray.push({position:f,value:v,unit:n,year:b,month:x.monthMod(u),day:v})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,a=t.currentMonth,s=t.currentYear,r=t.minutesWidthOnXAxis,o=t.numberOfHours,n=new R(this.ctx),l="hour",h=function(t,e){return t>n.determineDaysOfMonths(e+1,s)&&(p=1,e+=1),{month:e,date:p}},c=function(t,e){return t>n.determineDaysOfMonths(e+1,s)?e+=1:e},d=60-(e.minMinute+e.minSecond/60),g=d*r,u=e.minHour+1,f=u+1;60===d&&(g=0,f=(u=e.minHour)+1);var p=i,b=c(p,a);this.timeScaleArray.push({position:g,value:u,unit:l,day:p,hour:f,year:s,month:x.monthMod(b)});for(var v=g,m=0;m<o;m++){if(l="hour",f>=24)f=0,l="day",b=h(p+=1,b).month,b=c(p,b);var y=this._getYear(s,b,0);v=0===f&&0===m?d*r:60*r+v;var w=0===f?p:f;this.timeScaleArray.push({position:v,value:w,unit:l,hour:f,day:p,year:y,month:x.monthMod(b)}),f++}}},{key:"generateMinuteScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.minutesWidthOnXAxis,h=t.secondsWidthOnXAxis,c=t.numberOfMinutes,d=a+1,g=r,u=o,f=n,p=s,b=(60-i-e/1e3)*h,v=0;v<c;v++)d>=60&&(d=0,24===(p+=1)&&(p=0)),this.timeScaleArray.push({position:b,value:d,unit:"minute",hour:p,minute:d,day:g,year:this._getYear(f,u,0),month:x.monthMod(u)}),b+=l,d++}},{key:"generateSecondScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.secondsWidthOnXAxis,h=t.numberOfSeconds,c=i+1,d=a,g=r,u=o,f=n,p=s,b=(1e3-e)/1e3*l,v=0;v<h;v++)c>=60&&(c=0,++d>=60&&(d=0,24===++p&&(p=0))),this.timeScaleArray.push({position:b,value:c,unit:"second",hour:p,minute:d,second:c,day:g,year:this._getYear(f,u,0),month:x.monthMod(u)}),b+=l,c++}},{key:"createRawDateString",value:function(t,e){var i=t.year;return 0===t.month&&(t.month=1),i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),"minute"===t.unit?i+=":"+("0"+e).slice(-2):i+=":"+(t.minute?("0"+t.minute).slice(-2):"00"),"second"===t.unit?i+=":"+("0"+e).slice(-2):i+=":00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map((function(t){var a=t.value.toString(),s=new R(e.ctx),r=e.createRawDateString(t,a),o=s.getDate(s.parseDate(r));if(e.utc||(o=s.getDate(s.parseDateWithTimezone(r))),void 0===i.config.xaxis.labels.format){var n="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(n=l.year),"month"===t.unit&&(n=l.month),"day"===t.unit&&(n=l.day),"hour"===t.unit&&(n=l.hour),"minute"===t.unit&&(n=l.minute),"second"===t.unit&&(n=l.second),a=s.formatDate(o,n)}else a=s.formatDate(o,i.config.xaxis.labels.format);return{dateString:r,position:t.position,value:a,unit:t.unit,year:t.year,month:t.month}}))}},{key:"removeOverlappingTS",value:function(t){var e,i=this,a=new m(this.ctx),s=!1;t.length>0&&t[0].value&&t.every((function(e){return e.value.length===t[0].value.length}))&&(s=!0,e=a.getTextRects(t[0].value).width);var r=0,o=t.map((function(o,n){if(n>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var l=s?e:a.getTextRects(t[r].value).width,h=t[r].position;return o.position>h+l+10?(r=n,o):null}return o}));return o=o.filter((function(t){return null!==t}))}},{key:"_getYear",value:function(t,e,i){return t+Math.floor(e/12)+i}}]),t}(),Ft=function(){function t(e,i){a(this,t),this.ctx=i,this.w=i.w,this.el=e}return r(t,[{key:"setupElements",value:function(){var t=this.w.globals,e=this.w.config,i=e.chart.type;t.axisCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].indexOf(i)>-1,t.xyCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble"].indexOf(i)>-1,t.isBarHorizontal=("bar"===e.chart.type||"rangeBar"===e.chart.type||"boxPlot"===e.chart.type)&&e.plotOptions.bar.horizontal,t.chartClass=".apexcharts"+t.chartID,t.dom.baseEl=this.el,t.dom.elWrap=document.createElement("div"),m.setAttrs(t.dom.elWrap,{id:t.chartClass.substring(1),class:"apexcharts-canvas "+t.chartClass.substring(1)}),this.el.appendChild(t.dom.elWrap),t.dom.Paper=new window.SVG.Doc(t.dom.elWrap),t.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(e.chart.offsetX,", ").concat(e.chart.offsetY,")")}),t.dom.Paper.node.style.background=e.chart.background,this.setSVGDimensions(),t.dom.elGraphical=t.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),t.dom.elAnnotations=t.dom.Paper.group().attr({class:"apexcharts-annotations"}),t.dom.elDefs=t.dom.Paper.defs(),t.dom.elLegendWrap=document.createElement("div"),t.dom.elLegendWrap.classList.add("apexcharts-legend"),t.dom.elWrap.appendChild(t.dom.elLegendWrap),t.dom.Paper.add(t.dom.elGraphical),t.dom.elGraphical.add(t.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,a=i.config,s=i.globals,r={series:[],i:[]},o={series:[],i:[]},n={series:[],i:[]},l={series:[],i:[]},h={series:[],i:[]},c={series:[],i:[]},d={series:[],i:[]};s.series.map((function(e,g){var u=0;void 0!==t[g].type?("column"===t[g].type||"bar"===t[g].type?(s.series.length>1&&a.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"),h.series.push(e),h.i.push(g),u++,i.globals.columnSeries=h.series):"area"===t[g].type?(o.series.push(e),o.i.push(g),u++):"line"===t[g].type?(r.series.push(e),r.i.push(g),u++):"scatter"===t[g].type?(n.series.push(e),n.i.push(g)):"bubble"===t[g].type?(l.series.push(e),l.i.push(g),u++):"candlestick"===t[g].type?(c.series.push(e),c.i.push(g),u++):"boxPlot"===t[g].type?(d.series.push(e),d.i.push(g),u++):console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"),u>1&&(s.comboCharts=!0)):(r.series.push(e),r.i.push(g))}));var g=new Tt(this.ctx,e),u=new wt(this.ctx,e);this.ctx.pie=new Ct(this.ctx);var f=new Pt(this.ctx);this.ctx.rangeBar=new H(this.ctx,e);var p=new Lt(this.ctx),x=[];if(s.comboCharts){if(o.series.length>0&&x.push(g.draw(o.series,"area",o.i)),h.series.length>0)if(i.config.chart.stacked){var b=new yt(this.ctx,e);x.push(b.draw(h.series,h.i))}else this.ctx.bar=new F(this.ctx,e),x.push(this.ctx.bar.draw(h.series,h.i));if(r.series.length>0&&x.push(g.draw(r.series,"line",r.i)),c.series.length>0&&x.push(u.draw(c.series,c.i)),d.series.length>0&&x.push(u.draw(d.series,d.i)),n.series.length>0){var v=new Tt(this.ctx,e,!0);x.push(v.draw(n.series,"scatter",n.i))}if(l.series.length>0){var m=new Tt(this.ctx,e,!0);x.push(m.draw(l.series,"bubble",l.i))}}else switch(a.chart.type){case"line":x=g.draw(s.series,"line");break;case"area":x=g.draw(s.series,"area");break;case"bar":if(a.chart.stacked)x=new yt(this.ctx,e).draw(s.series);else this.ctx.bar=new F(this.ctx,e),x=this.ctx.bar.draw(s.series);break;case"candlestick":x=new wt(this.ctx,e).draw(s.series);break;case"boxPlot":x=new wt(this.ctx,e).draw(s.series);break;case"rangeBar":x=this.ctx.rangeBar.draw(s.series);break;case"heatmap":x=new At(this.ctx,e).draw(s.series);break;case"treemap":x=new Xt(this.ctx,e).draw(s.series);break;case"pie":case"donut":case"polarArea":x=this.ctx.pie.draw(s.series);break;case"radialBar":x=f.draw(s.series);break;case"radar":x=p.draw(s.series);break;default:x=g.draw(s.series)}return x}},{key:"setSVGDimensions",value:function(){var t=this.w.globals,e=this.w.config;t.svgWidth=e.chart.width,t.svgHeight=e.chart.height;var i=x.getDimensions(this.el),a=e.chart.width.toString().split(/[0-9]+/g).pop();"%"===a?x.isNumber(i[0])&&(0===i[0].width&&(i=x.getDimensions(this.el.parentNode)),t.svgWidth=i[0]*parseInt(e.chart.width,10)/100):"px"!==a&&""!==a||(t.svgWidth=parseInt(e.chart.width,10));var s=e.chart.height.toString().split(/[0-9]+/g).pop();if("auto"!==t.svgHeight&&""!==t.svgHeight)if("%"===s){var r=x.getDimensions(this.el.parentNode);t.svgHeight=r[1]*parseInt(e.chart.height,10)/100}else t.svgHeight=parseInt(e.chart.height,10);else t.axisCharts?t.svgHeight=t.svgWidth/1.61:t.svgHeight=t.svgWidth/1.2;if(t.svgWidth<0&&(t.svgWidth=0),t.svgHeight<0&&(t.svgHeight=0),m.setAttrs(t.dom.Paper.node,{width:t.svgWidth,height:t.svgHeight}),"%"!==s){var o=e.chart.sparkline.enabled?0:t.axisCharts?e.chart.parentHeightOffset:0;t.dom.Paper.node.parentNode.parentNode.style.minHeight=t.svgHeight+o+"px"}t.dom.elWrap.style.width=t.svgWidth+"px",t.dom.elWrap.style.height=t.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i={transform:"translate("+t.translateX+", "+e+")"};m.setAttrs(t.dom.elGraphical.node,i)}},{key:"resizeNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=0,a=t.config.chart.sparkline.enabled?1:15;a+=t.config.grid.padding.bottom,"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||!t.config.legend.show||t.config.legend.floating||(i=new ct(this.ctx).legendHelpers.getLegendBBox().clwh+10);var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),r=2.05*t.globals.radialSize;if(s&&!t.config.chart.sparkline.enabled&&0!==t.config.plotOptions.radialBar.startAngle){var o=x.getBoundingClientRect(s);r=o.bottom;var n=o.bottom-o.top;r=Math.max(2.05*t.globals.radialSize,n)}var l=r+e.translateY+i+a;e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height",l),t.config.chart.height&&String(t.config.chart.height).indexOf("%")>0||(e.dom.elWrap.style.height=l+"px",m.setAttrs(e.dom.Paper.node,{height:l}),e.dom.Paper.node.parentNode.parentNode.style.minHeight=l+"px")}},{key:"coreCalculations",value:function(){new Z(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=function(){return t.w.config.series.map((function(t){return[]}))},i=new O,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=e(),a.seriesYvalues=e()}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"xySettings",value:function(){var t=null,e=this.w;if(e.globals.axisCharts){if("back"===e.config.xaxis.crosshairs.position)new tt(this.ctx).drawXCrosshairs();if("back"===e.config.yaxis[0].crosshairs.position)new tt(this.ctx).drawYCrosshairs();if("datetime"===e.config.xaxis.type&&void 0===e.config.xaxis.labels.formatter){this.ctx.timeScale=new Yt(this.ctx);var i=[];isFinite(e.globals.minX)&&isFinite(e.globals.maxX)&&!e.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX,e.globals.maxX):e.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY,e.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}t=new y(this.ctx).getCalculatedRatios()}return t}},{key:"updateSourceChart",value:function(t){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:t.w.globals.minX,max:t.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var t=this,i=this.w;if(i.config.chart.brush.enabled&&"function"!=typeof i.config.chart.events.selection){var a=i.config.chart.brush.targets||[i.config.chart.brush.target];a.forEach((function(e){var i=ApexCharts.getChartByID(e);i.w.globals.brushSource=t.ctx,"function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function(){t.updateSourceChart(i)}),"function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function(){t.updateSourceChart(i)})})),i.config.chart.events.selection=function(t,s){a.forEach((function(t){var a=ApexCharts.getChartByID(t),r=x.clone(i.config.yaxis);if(i.config.chart.brush.autoScaleYaxis&&1===a.w.globals.series.length){var o=new q(a);r=o.autoScaleY(a,r,s)}var n=a.w.config.yaxis.reduce((function(t,i,s){return[].concat(u(t),[e(e({},a.w.config.yaxis[s]),{},{min:r[0].min,max:r[0].max})])}),[]);a.ctx.updateHelpers._updateOptions({xaxis:{min:s.xaxis.min,max:s.xaxis.max},yaxis:n},!1,!1,!1,!1)}))}}}}]),t}(),Rt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"_updateOptions",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return new Promise((function(n){var l=[e.ctx];r&&(l=e.ctx.getSyncedCharts()),e.ctx.w.globals.isExecCalled&&(l=[e.ctx],e.ctx.w.globals.isExecCalled=!1),l.forEach((function(r,h){var c=r.w;if(c.globals.shouldAnimate=s,a||(c.globals.resized=!0,c.globals.dataChanged=!0,s&&r.series.getPreviousPaths()),t&&"object"===i(t)&&(r.config=new N(t),t=y.extendArrayProps(r.config,t,c),r.w.globals.chartID!==e.ctx.w.globals.chartID&&delete t.series,c.config=x.extend(c.config,t),o&&(c.globals.lastXAxis=t.xaxis?x.clone(t.xaxis):[],c.globals.lastYAxis=t.yaxis?x.clone(t.yaxis):[],c.globals.initialConfig=x.extend({},c.config),c.globals.initialSeries=x.clone(c.config.series),t.series))){for(var d=0;d<c.globals.collapsedSeriesIndices.length;d++){var g=c.config.series[c.globals.collapsedSeriesIndices[d]];c.globals.collapsedSeries[d].data=c.globals.axisCharts?g.data.slice():g}for(var u=0;u<c.globals.ancillaryCollapsedSeriesIndices.length;u++){var f=c.config.series[c.globals.ancillaryCollapsedSeriesIndices[u]];c.globals.ancillaryCollapsedSeries[u].data=c.globals.axisCharts?f.data.slice():f}r.series.emptyCollapsedSeries(c.config.series)}return r.update(t).then((function(){h===l.length-1&&n(r)}))}))}))}},{key:"_updateSeries",value:function(t,e){var i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(s){var r,o=i.w;return o.globals.shouldAnimate=e,o.globals.dataChanged=!0,e&&i.ctx.series.getPreviousPaths(),o.globals.axisCharts?(0===(r=t.map((function(t,e){return i._extendSeries(t,e)}))).length&&(r=[{data:[]}]),o.config.series=r):o.config.series=t.slice(),a&&(o.globals.initialSeries=x.clone(o.config.series)),i.ctx.update().then((function(){s(i.ctx)}))}))}},{key:"_extendSeries",value:function(t,i){var a=this.w,s=a.config.series[i];return e(e({},a.config.series[i]),{},{name:t.name?t.name:s&&s.name,color:t.color?t.color:s&&s.color,type:t.type?t.type:s&&s.type,data:t.data?t.data:s&&s.data})}},{key:"toggleDataPointSelection",value:function(t,e){var i=this.w,a=null,s=".apexcharts-series[data\\:realIndex='".concat(t,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(e,"'], ").concat(s," circle[j='").concat(e,"'], ").concat(s," rect[j='").concat(e,"']")).members[0]:void 0===e&&(a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(t,"']")).members[0],"pie"!==i.config.chart.type&&"polarArea"!==i.config.chart.type&&"donut"!==i.config.chart.type||this.ctx.pie.pieClicked(t)),a?(new m(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;if(["min","max"].forEach((function(i){void 0!==t.xaxis[i]&&(e.config.xaxis[i]=t.xaxis[i],e.globals.lastXAxis[i]=t.xaxis[i])})),t.xaxis.categories&&t.xaxis.categories.length&&(e.config.xaxis.categories=t.xaxis.categories),e.config.xaxis.convertedCatToNumeric){var i=new D(t);t=i.convertCatToNumericXaxis(t,this.ctx)}return t}},{key:"forceYAxisUpdate",value:function(t){return t.chart&&t.chart.stacked&&"100%"===t.chart.stackType&&(Array.isArray(t.yaxis)?t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})):(t.yaxis.min=0,t.yaxis.max=100)),t}},{key:"revertDefaultAxisMinMax",value:function(t){var e=this,i=this.w,a=i.globals.lastXAxis,s=i.globals.lastYAxis;t&&t.xaxis&&(a=t.xaxis),t&&t.yaxis&&(s=t.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var r=function(t){void 0!==s[t]&&(i.config.yaxis[t].min=s[t].min,i.config.yaxis[t].max=s[t].max)};i.config.yaxis.map((function(t,a){i.globals.zoomed||void 0!==s[a]?r(a):void 0!==e.ctx.opts.yaxis[a]&&(t.min=e.ctx.opts.yaxis[a].min,t.max=e.ctx.opts.yaxis[a].max)}))}}]),t}();It="undefined"!=typeof window?window:void 0,zt=function(t,e){var a=(void 0!==this?this:t).SVG=function(t){if(a.supported)return t=new a.Doc(t),a.parser.draw||a.prepare(),t};if(a.ns="http://www.w3.org/2000/svg",a.xmlns="http://www.w3.org/2000/xmlns/",a.xlink="http://www.w3.org/1999/xlink",a.svgjs="http://svgjs.dev",a.supported=!0,!a.supported)return!1;a.did=1e3,a.eid=function(t){return"Svgjs"+d(t)+a.did++},a.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},a.extend=function(){var t,e;e=(t=[].slice.call(arguments)).pop();for(var i=t.length-1;i>=0;i--)if(t[i])for(var s in e)t[i].prototype[s]=e[s];a.Set&&a.Set.inherit&&a.Set.inherit()},a.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,a.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&a.extend(e,t.extend),t.construct&&a.extend(t.parent||a.Container,t.construct),e},a.adopt=function(e){return e?e.instance?e.instance:((i="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new a.Nested:new a.Doc:"linearGradient"==e.nodeName?new a.Gradient("linear"):"radialGradient"==e.nodeName?new a.Gradient("radial"):a[d(e.nodeName)]?new(a[d(e.nodeName)]):new a.Element(e)).type=e.nodeName,i.node=e,e.instance=i,i instanceof a.Doc&&i.namespace().defs(),i.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),i):null;var i},a.prepare=function(){var t=e.getElementsByTagName("body")[0],i=(t?new a.Doc(t):a.adopt(e.documentElement).nested()).size(2,0);a.parser={body:t||e.documentElement,draw:i.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:i.polyline().node,path:i.path().node,native:a.create("svg")}},a.parser={native:a.create("svg")},e.addEventListener("DOMContentLoaded",(function(){a.parser.draw||a.prepare()}),!1),a.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},a.utils={map:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)a.push(e(t[s]));return a},filter:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)e(t[s])&&a.push(t[s]);return a},filterSVGElements:function(e){return this.filter(e,(function(e){return e instanceof t.SVGElement}))}},a.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},a.Color=function(t){var e,s;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?a.regex.isRgb.test(t)?(e=a.regex.rgb.exec(t.replace(a.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):a.regex.isHex.test(t)&&(e=a.regex.hex.exec(4==(s=t).length?["#",s.substring(1,2),s.substring(1,2),s.substring(2,3),s.substring(2,3),s.substring(3,4),s.substring(3,4)].join(""):s),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"===i(t)&&(this.r=t.r,this.g=t.g,this.b=t.b))},a.extend(a.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+g(this.r)+g(this.g)+g(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new a.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new a.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),a.Color.test=function(t){return t+="",a.regex.isHex.test(t)||a.regex.isRgb.test(t)},a.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},a.Color.isColor=function(t){return a.Color.isRgb(t)||a.Color.test(t)},a.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},a.extend(a.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)}}),a.PointArray=function(t,e){a.Array.call(this,t,e||[[0,0]])},a.PointArray.prototype=new a.Array,a.PointArray.prototype.constructor=a.PointArray;for(var s={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]}},r="mlhvqtcsaz".split(""),o=0,n=r.length;o<n;++o)s[r[o]]=function(t){return function(e,i,a){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,o=e.length;r<o;++r)e[r]=e[r]+(r%2?i.y:i.x);if(s&&"function"==typeof s[t])return s[t](e,i,a)}}(r[o].toUpperCase());a.PathArray=function(t,e){a.Array.call(this,t,e||[["M",0,0]])},a.PathArray.prototype=new a.Array,a.PathArray.prototype.constructor=a.PathArray,a.extend(a.PathArray,{toString:function(){return function(t){for(var e=0,i=t.length,a="";e<i;e++)a+=t[e][0],null!=t[e][1]&&(a+=t[e][1],null!=t[e][2]&&(a+=" ",a+=t[e][2],null!=t[e][3]&&(a+=" ",a+=t[e][3],a+=" ",a+=t[e][4],null!=t[e][5]&&(a+=" ",a+=t[e][5],a+=" ",a+=t[e][6],null!=t[e][7]&&(a+=" ",a+=t[e][7])))));return a+" "}(this.value)},move:function(t,e){var i=this.bbox();return i.x,i.y,this},at:function(t){if(!this.destination)return this;for(var e=this.value,i=this.destination.value,s=[],r=new a.PathArray,o=0,n=e.length;o<n;o++){s[o]=[e[o][0]];for(var l=1,h=e[o].length;l<h;l++)s[o][l]=e[o][l]+(i[o][l]-e[o][l])*t;"A"===s[o][0]&&(s[o][4]=+(0!=s[o][4]),s[o][5]=+(0!=s[o][5]))}return r.value=s,r},parse:function(t){if(t instanceof a.PathArray)return t.valueOf();var e,i={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(a.regex.numbersWithDots,h).replace(a.regex.pathLetters," $& ").replace(a.regex.hyphen,"$1 -").trim().split(a.regex.delimiter):t.reduce((function(t,e){return[].concat.call(t,e)}),[]);var r=[],o=new a.Point,n=new a.Point,l=0,c=t.length;do{a.regex.isPathLetter.test(t[l])?(e=t[l],++l):"M"==e?e="L":"m"==e&&(e="l"),r.push(s[e].call(null,t.slice(l,l+=i[e.toUpperCase()]).map(parseFloat),o,n))}while(c>l);return r},bbox:function(){return a.parser.draw||a.prepare(),a.parser.path.setAttribute("d",this.toString()),a.parser.path.getBBox()}}),a.Number=a.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(a.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof a.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new a.Number(t),new a.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new a.Number(t),new a.Number(this-t,this.unit||t.unit)},times:function(t){return t=new a.Number(t),new a.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new a.Number(t),new a.Number(this/t,this.unit||t.unit)},to:function(t){var e=new a.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new a.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new a.Number(this.destination).minus(this).times(t).plus(this):this}}}),a.Element=a.invent({create:function(t){this._stroke=a.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=u(this,t,e);return this.width(new a.Number(i.width)).height(new a.Number(i.height))},clone:function(t){this.writeDataToDom();var e=x(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(a.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter((function(e){return e!=t})).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return a.get(this.attr(t))},parent:function(e){var i=this;if(!i.node.parentNode)return null;if(i=a.adopt(i.node.parentNode),!e)return i;for(;i&&i.node instanceof t.SVGElement;){if("string"==typeof e?i.matches(e):i instanceof e)return i;if(!i.node.parentNode||"#document"==i.node.parentNode.nodeName)return null;i=a.adopt(i.node.parentNode)}},doc:function(){return this instanceof a.Doc?this:this.parent(a.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof a.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var s=0,r=i.firstChild.childNodes.length;s<r;s++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each((function(){this.writeDataToDom()})),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),a.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},a.morph=function(t){return function(e,i){return new a.MorphObj(e,i).at(t)}},a.Situation=a.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new a.Number(t.duration).valueOf(),this.delay=new a.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),a.FX=a.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,s){"object"===i(t)&&(e=t.ease,s=t.delay,t=t.duration);var r=new a.Situation({duration:t||1e3,delay:s||0,ease:a.easing[e||"-"]||e});return this.queue(r),this},target:function(t){return t&&t instanceof a.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof a.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof a.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e=this.situation;if(e.init)return this;for(var i in e.animations){t=this.target()[i](),Array.isArray(t)||(t=[t]),Array.isArray(e.animations[i])||(e.animations[i]=[e.animations[i]]);for(var s=t.length;s--;)e.animations[i][s]instanceof a.Number&&(t[s]=new a.Number(t[s])),e.animations[i][s]=t[s].morph(e.animations[i][s])}for(var i in e.attrs)e.attrs[i]=new a.MorphObj(this.target().attr(i),e.attrs[i]);for(var i in e.styles)e.styles[i]=new a.MorphObj(this.target().style(i),e.styles[i]);return e.initialTransformation=this.target().matrixify(),e.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(t){var e=this.last();return this.target().on("finished.fx",(function i(a){a.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))})),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,a.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after((function(){this.off("during.fx",i)})),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){var e,i,a;t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops?(e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,a=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,a=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-a)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var s=this.situation.ease(this.pos);for(var r in this.situation.once)r>this.lastPos&&r<=s&&(this.situation.once[r].call(this.target(),this.pos,s),delete this.situation.once[r]);return this.active&&this.target().fire("during",{pos:this.pos,eased:s,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=s,this):this},eachAt:function(){var t,e=this,i=this.target(),s=this.situation;for(var r in s.animations)t=[].concat(s.animations[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i[r].apply(i,t);for(var r in s.attrs)t=[r].concat(s.attrs[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.attr.apply(i,t);for(var r in s.styles)t=[r].concat(s.styles[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.style.apply(i,t);if(s.transforms.length){t=s.initialTransformation,r=0;for(var o=s.transforms.length;r<o;r++){var n=s.transforms[r];n instanceof a.Matrix?t=n.relative?t.multiply((new a.Matrix).morph(n).at(s.ease(this.pos))):t.morph(n).at(s.ease(this.pos)):(n.relative||n.undo(t.extract()),t=t.multiply(n.at(s.ease(this.pos))))}i.matrix(t)}return this},once:function(t,e,i){var a=this.last();return i||(t=a.ease(t)),a.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:a.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new a.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new a.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),a.MorphObj=a.invent({create:function(t,e){return a.Color.isColor(e)?new a.Color(t).morph(e):a.regex.delimiter.test(t)?a.regex.pathLetters.test(t)?new a.PathArray(t).morph(e):new a.Array(t).morph(e):a.regex.numberAndUnit.test(e)?new a.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),a.extend(a.FX,{attr:function(t,e,a){if("object"===i(t))for(var s in t)this.attr(s,t[s]);else this.add(t,e,"attrs");return this},plot:function(t,e,i,a){return 4==arguments.length?this.plot([t,e,i,a]):this.add("plot",new(this.target().morphArray)(t))}}),a.Box=a.invent({create:function(t,e,s,r){if(!("object"!==i(t)||t instanceof a.Element))return a.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);4==arguments.length&&(this.x=t,this.y=e,this.width=s,this.height=r),b(this)}}),a.BBox=a.invent({create:function(t){if(a.Box.apply(this,[].slice.call(arguments)),t instanceof a.Element){var i;try{if(!e.documentElement.contains){for(var s=t.node;s.parentNode;)s=s.parentNode;if(s!=e)throw new Error("Element not in the dom")}i=t.node.getBBox()}catch(e){if(t instanceof a.Shape){a.parser.draw||a.prepare();var r=t.clone(a.parser.draw.instance).show();r&&r.node&&"function"==typeof r.node.getBBox&&(i=r.node.getBBox()),r&&"function"==typeof r.remove&&r.remove()}else i={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}a.Box.call(this,i)}},inherit:a.Box,parent:a.Element,construct:{bbox:function(){return new a.BBox(this)}}}),a.BBox.prototype.constructor=a.BBox,a.Matrix=a.invent({create:function(t){var e=p([1,0,0,1,0,0]);t=null===t?e:t instanceof a.Element?t.matrixify():"string"==typeof t?p(t.split(a.regex.delimiter).map(parseFloat)):6==arguments.length?p([].slice.call(arguments)):Array.isArray(t)?p(t):t&&"object"===i(t)?t:e;for(var s=m.length-1;s>=0;--s)this[m[s]]=null!=t[m[s]]?t[m[s]]:e[m[s]]},extend:{extract:function(){var t=f(this,0,1);f(this,1,0);var e=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(e*Math.PI/180)+this.f*Math.sin(e*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(e*Math.PI/180)+this.e*Math.sin(-e*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:e,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new a.Matrix(this)}},clone:function(){return new a.Matrix(this)},morph:function(t){return this.destination=new a.Matrix(t),this},multiply:function(t){return new a.Matrix(this.native().multiply(function(t){return t instanceof a.Matrix||(t=new a.Matrix(t)),t}(t).native()))},inverse:function(){return new a.Matrix(this.native().inverse())},translate:function(t,e){return new a.Matrix(this.native().translate(t||0,e||0))},native:function(){for(var t=a.parser.native.createSVGMatrix(),e=m.length-1;e>=0;e--)t[m[e]]=this[m[e]];return t},toString:function(){return"matrix("+v(this.a)+","+v(this.b)+","+v(this.c)+","+v(this.d)+","+v(this.e)+","+v(this.f)+")"}},parent:a.Element,construct:{ctm:function(){return new a.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof a.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new a.Matrix(e)}return new a.Matrix(this.node.getScreenCTM())}}}),a.Point=a.invent({create:function(t,e){var a;a=Array.isArray(t)?{x:t[0],y:t[1]}:"object"===i(t)?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:{x:0,y:0},this.x=a.x,this.y=a.y},extend:{clone:function(){return new a.Point(this)},morph:function(t,e){return this.destination=new a.Point(t,e),this}}}),a.extend(a.Element,{point:function(t,e){return new a.Point(t,e).transform(this.screenCTM().inverse())}}),a.extend(a.Element,{attr:function(t,e,s){if(null==t){for(t={},s=(e=this.node.attributes).length-1;s>=0;s--)t[e[s].nodeName]=a.regex.isNumber.test(e[s].nodeValue)?parseFloat(e[s].nodeValue):e[s].nodeValue;return t}if("object"===i(t))for(var r in t)this.attr(r,t[r]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return null==(e=this.node.getAttribute(t))?a.defaults.attrs[t]:a.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(a.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof a.Image&&(e=this.doc().defs().pattern(0,0,(function(){this.add(e)})))),"number"==typeof e?e=new a.Number(e):a.Color.isColor(e)?e=new a.Color(e):Array.isArray(e)&&(e=new a.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof s?this.node.setAttributeNS(s,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),a.extend(a.Element,{transform:function(t,e){var s;return"object"!==i(t)?(s=new a.Matrix(this).extract(),"string"==typeof t?s[t]:s):(s=new a.Matrix(this),e=!!e||!!t.relative,null!=t.a&&(s=e?s.multiply(new a.Matrix(t)):new a.Matrix(t)),this.attr("transform",s))}}),a.extend(a.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(a.regex.transforms).slice(0,-1).map((function(t){var e=t.trim().split("(");return[e[0],e[1].split(a.regex.delimiter).map((function(t){return parseFloat(t)}))]})).reduce((function(t,e){return"matrix"==e[0]?t.multiply(p(e[1])):t[e[0]].apply(t,e[1])}),new a.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),a.Transformation=a.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=t[a];else if(t&&"object"===i(t))for(a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=t[this.arguments[a]];this.inversed=!1,!0===e&&(this.inversed=!0)}}),a.Translate=a.invent({parent:a.Matrix,inherit:a.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),a.extend(a.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"===i(t))for(var s in t)this.style(s,t[s]);else{if(!a.regex.isCss.test(t))return this.node.style[c(t)];for(t=t.split(/\s*;\s*/).filter((function(t){return!!t})).map((function(t){return t.split(/\s*:\s*/)}));e=t.pop();)this.style(e[0],e[1])}else this.node.style[c(t)]=null===e||a.regex.isBlank.test(e)?"":e;return this}}),a.Parent=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element,extend:{children:function(){return a.utils.map(a.utils.filterSVGElements(this.node.childNodes),(function(t){return a.adopt(t)}))},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return a.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){for(var i=this.children(),s=0,r=i.length;s<r;s++)i[s]instanceof a.Element&&t.apply(i[s],[s,i]),e&&i[s]instanceof a.Container&&i[s].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),a.extend(a.Parent,{ungroup:function(t,e){return 0===e||this instanceof a.Defs||this.node==a.parser.draw||(t=t||(this instanceof a.Doc?this:this.parent(a.Parent)),e=e||1/0,this.each((function(){return this instanceof a.Defs?this:this instanceof a.Parent?this.ungroup(t,e-1):this.toParent(t)})),this.node.firstChild||this.remove()),this},flatten:function(t,e){return this.ungroup(t,e)}}),a.Container=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Parent}),a.ViewBox=a.invent({parent:a.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach((function(t){a.Element.prototype[t]=function(e){return a.on(this.node,t,e),this}})),a.listeners=[],a.handlerMap=[],a.listenerId=0,a.on=function(t,e,i,s,r){var o=i.bind(s||t.instance||t),n=(a.handlerMap.indexOf(t)+1||a.handlerMap.push(t))-1,l=e.split(".")[0],h=e.split(".")[1]||"*";a.listeners[n]=a.listeners[n]||{},a.listeners[n][l]=a.listeners[n][l]||{},a.listeners[n][l][h]=a.listeners[n][l][h]||{},i._svgjsListenerId||(i._svgjsListenerId=++a.listenerId),a.listeners[n][l][h][i._svgjsListenerId]=o,t.addEventListener(l,o,r||{passive:!0})},a.off=function(t,e,i){var s=a.handlerMap.indexOf(t),r=e&&e.split(".")[0],o=e&&e.split(".")[1],n="";if(-1!=s)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;a.listeners[s][r]&&a.listeners[s][r][o||"*"]&&(t.removeEventListener(r,a.listeners[s][r][o||"*"][i],!1),delete a.listeners[s][r][o||"*"][i])}else if(o&&r){if(a.listeners[s][r]&&a.listeners[s][r][o]){for(var l in a.listeners[s][r][o])a.off(t,[r,o].join("."),l);delete a.listeners[s][r][o]}}else if(o)for(var h in a.listeners[s])for(var n in a.listeners[s][h])o===n&&a.off(t,[h,o].join("."));else if(r){if(a.listeners[s][r]){for(var n in a.listeners[s][r])a.off(t,[r,n].join("."));delete a.listeners[s][r]}}else{for(var h in a.listeners[s])a.off(t,h);delete a.listeners[s],delete a.handlerMap[s]}},a.extend(a.Element,{on:function(t,e,i,s){return a.on(this.node,t,e,i,s),this},off:function(t,e){return a.off(this.node,t,e),this},fire:function(e,i){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new a.CustomEvent(e,{detail:i,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),a.Defs=a.invent({create:"defs",inherit:a.Container}),a.G=a.invent({create:"g",inherit:a.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)}},construct:{group:function(){return this.put(new a.G)}}}),a.Doc=a.invent({create:function(t){t&&("svg"==(t="string"==typeof t?e.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,a.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:a.Container,extend:{namespace:function(){return this.attr({xmlns:a.ns,version:"1.1"}).attr("xmlns:xlink",a.xlink,a.xmlns).attr("xmlns:svgjs",a.svgjs,a.xmlns)},defs:function(){var t;return this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=a.adopt(t):this._defs=new a.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,a.parser.draw&&!a.parser.draw.parentNode&&this.node.appendChild(a.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=x(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),a.extend(a.Element,{}),a.Gradient=a.invent({create:function(t){this.constructor.call(this,a.create(t+"Gradient")),this.type=t},inherit:a.Container,extend:{at:function(t,e,i){return this.put(new a.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),a.extend(a.Gradient,a.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new a.Number(t),fy:new a.Number(e)}):this.attr({x1:new a.Number(t),y1:new a.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new a.Number(t),cy:new a.Number(e)}):this.attr({x2:new a.Number(t),y2:new a.Number(e)})}}),a.extend(a.Defs,{gradient:function(t,e){return this.put(new a.Gradient(t)).update(e)}}),a.Stop=a.invent({create:"stop",inherit:a.Element,extend:{update:function(t){return("number"==typeof t||t instanceof a.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new a.Number(t.offset)),this}}}),a.Pattern=a.invent({create:"pattern",inherit:a.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),a.extend(a.Defs,{pattern:function(t,e,i){return this.put(new a.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),a.Shape=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element}),a.Symbol=a.invent({create:"symbol",inherit:a.Container,construct:{symbol:function(){return this.put(new a.Symbol)}}}),a.Use=a.invent({create:"use",inherit:a.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,a.xlink)}},construct:{use:function(t,e){return this.put(new a.Use).element(t,e)}}}),a.Rect=a.invent({create:"rect",inherit:a.Shape,construct:{rect:function(t,e){return this.put(new a.Rect).size(t,e)}}}),a.Circle=a.invent({create:"circle",inherit:a.Shape,construct:{circle:function(t){return this.put(new a.Circle).rx(new a.Number(t).divide(2)).move(0,0)}}}),a.extend(a.Circle,a.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),a.Ellipse=a.invent({create:"ellipse",inherit:a.Shape,construct:{ellipse:function(t,e){return this.put(new a.Ellipse).size(t,e).move(0,0)}}}),a.extend(a.Ellipse,a.Rect,a.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),a.extend(a.Circle,a.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new a.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new a.Number(t).divide(2))},size:function(t,e){var i=u(this,t,e);return this.rx(new a.Number(i.width).divide(2)).ry(new a.Number(i.height).divide(2))}}),a.Line=a.invent({create:"line",inherit:a.Shape,extend:{array:function(){return new a.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,s){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:s}:new a.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=u(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,s){return a.Line.prototype.plot.apply(this.put(new a.Line),null!=t?[t,e,i,s]:[0,0,0,0])}}}),a.Polyline=a.invent({create:"polyline",inherit:a.Shape,construct:{polyline:function(t){return this.put(new a.Polyline).plot(t||new a.PointArray)}}}),a.Polygon=a.invent({create:"polygon",inherit:a.Shape,construct:{polygon:function(t){return this.put(new a.Polygon).plot(t||new a.PointArray)}}}),a.extend(a.Polyline,a.Polygon,{array:function(){return this._array||(this._array=new a.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new a.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=u(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),a.extend(a.Line,a.Polyline,a.Polygon,{morphArray:a.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),a.Path=a.invent({create:"path",inherit:a.Shape,extend:{morphArray:a.PathArray,array:function(){return this._array||(this._array=new a.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new a.PathArray(t))},clear:function(){return delete this._array,this}},construct:{path:function(t){return this.put(new a.Path).plot(t||new a.PathArray)}}}),a.Image=a.invent({create:"image",inherit:a.Shape,extend:{load:function(e){if(!e)return this;var i=this,s=new t.Image;return a.on(s,"load",(function(){a.off(s);var t=i.parent(a.Pattern);null!==t&&(0==i.width()&&0==i.height()&&i.size(s.width,s.height),t&&0==t.width()&&0==t.height()&&t.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:s.width,height:s.height,ratio:s.width/s.height,url:e}))})),a.on(s,"error",(function(t){a.off(s),"function"==typeof i._error&&i._error.call(i,t)})),this.attr("href",s.src=this.src=e,a.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new a.Image).load(t).size(e||0,i||e||0)}}}),a.Text=a.invent({create:function(){this.constructor.call(this,a.create("text")),this.dom.leading=new a.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",a.defaults.attrs["font-family"])},inherit:a.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},text:function(t){if(void 0===t){t="";for(var e=this.node.childNodes,i=0,s=e.length;i<s;++i)0!=i&&3!=e[i].nodeType&&1==a.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{i=0;for(var r=(t=t.split("\n")).length;i<r;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new a.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=a.utils.map(a.utils.filterSVGElements(t.childNodes),(function(t){return a.adopt(t)}));return new a.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,s=this.dom.leading*new a.Number(this.attr("font-size"));this.lines().each((function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=s:(this.attr("dy",s+i),i=0))})),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new a.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new a.Text).text(t)},plain:function(t){return this.put(new a.Text).plain(t)}}}),a.Tspan=a.invent({create:"tspan",inherit:a.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(a.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),a.extend(a.Text,a.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new a.Tspan;return!1===this._build&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),a.TextPath=a.invent({create:"textPath",inherit:a.Parent,parent:a.Text,construct:{morphArray:a.PathArray,array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return a.adopt(this.node.firstChild)}}}),a.Nested=a.invent({create:function(){this.constructor.call(this,a.create("svg")),this.style("overflow","visible")},inherit:a.Container,construct:{nested:function(){return this.put(new a.Nested)}}});var l={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function h(t,e,i,s){return i+s.replace(a.regex.dots," .")}function c(t){return t.toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()}))}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function g(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function u(t,e,i){if(null==e||null==i){var a=t.bbox();null==e?e=a.width/a.height*i:null==i&&(i=a.height/a.width*e)}return{width:e,height:i}}function f(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function p(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function x(e){for(var i=e.childNodes.length-1;i>=0;i--)e.childNodes[i]instanceof t.SVGElement&&x(e.childNodes[i]);return a.adopt(e).id(a.eid(e.nodeName))}function b(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function v(t){return Math.abs(t)>1e-37?t:0}["fill","stroke"].forEach((function(t){var e={};e[t]=function(e){if(void 0===e)return this;if("string"==typeof e||a.Color.isRgb(e)||e&&"function"==typeof e.fill)this.attr(t,e);else for(var i=l[t].length-1;i>=0;i--)null!=e[l[t][i]]&&this.attr(l.prefix(t,l[t][i]),e[l[t][i]]);return this},a.extend(a.Element,a.FX,e)})),a.extend(a.Element,a.FX,{translate:function(t,e){return this.transform({x:t,y:e})},matrix:function(t){return this.attr("transform",new a.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new a.Number(t).plus(this instanceof a.FX?0:this.x()),!0)},dy:function(t){return this.y(new a.Number(t).plus(this instanceof a.FX?0:this.y()),!0)}}),a.extend(a.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),a.Set=a.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){for(var t=[].slice.call(arguments),e=0,i=t.length;e<i;e++)this.members.push(t[e]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(t){return new a.Set(t)}}}),a.FX.Set=a.invent({create:function(t){this.set=t}}),a.Set.inherit=function(){var t=[];for(var e in a.Shape.prototype)"function"==typeof a.Shape.prototype[e]&&"function"!=typeof a.Set.prototype[e]&&t.push(e);for(var e in t.forEach((function(t){a.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new a.FX.Set(this)):this}})),t=[],a.FX.prototype)"function"==typeof a.FX.prototype[e]&&"function"!=typeof a.FX.Set.prototype[e]&&t.push(e);t.forEach((function(t){a.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}}))},a.extend(a.Element,{}),a.extend(a.Element,{remember:function(t,e){if("object"===i(arguments[0]))for(var a in t)this.remember(a,t[a]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),a.get=function(t){var i=e.getElementById(function(t){var e=(t||"").toString().match(a.regex.reference);if(e)return e[1]}(t)||t);return a.adopt(i)},a.select=function(t,i){return new a.Set(a.utils.map((i||e).querySelectorAll(t),(function(t){return a.adopt(t)})))},a.extend(a.Parent,{select:function(t){return a.select(t,this.node)}});var m="abcdef".split("");if("function"!=typeof t.CustomEvent){var y=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),a};y.prototype=t.Event.prototype,a.CustomEvent=y}else a.CustomEvent=t.CustomEvent;return a},"function"==typeof define&&define.amd?define((function(){return zt(It,It.document)})):"object"===("undefined"==typeof exports?"undefined":i(exports))&&"undefined"!=typeof module?module.exports=It.document?zt(It,It.document):function(t){return zt(t,t.document)}:It.SVG=zt(It,It.document),
/*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,a,s){return this.put(new SVG.DisplacementMapEffect(t,e,i,a,s))},specularLighting:function(t,e,i,a){return this.put(new SVG.SpecularLightingEffect(t,e,i,a))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,a,s){return this.put(new SVG.TurbulenceEffect(t,e,i,a,s))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,a){return this.parent()&&this.parent().displacementMap(this,t,e,i,a)},specularLighting:function(t,e,i,a){return this.parent()&&this.parent().specularLighting(t,e,i,a).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,a,s){return this.parent()&&this.parent().turbulence(t,e,i,a,s).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=s(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=s(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,a,s){this.attr({in:t,in2:e,scale:i,xChannelSelector:a,yChannelSelector:s})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",r(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,a,s){this.attr({numOctaves:e,seed:i,stitchTiles:a,baseFrequency:t,type:s})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each((function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))}))}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,a){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:a})}},a={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,a,s,r){this.attr({x:t,y:e,z:i,pointsAtX:a,pointsAtY:s,pointsAtZ:r})},mergeNode:function(t){this.attr("in",t)}};function s(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,a=[];e<i;e++)a.push(t[e]);return a.join(" ")}function o(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach((function(t){a["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}})),o(e,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})})),o(i,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})})),o(a,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})})),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,s,r,o,n,l,h){for(var c=t.slice(s,r||h),d=o.slice(n,l||h),g=0,u={pos:[0,0],start:[0,0]},f={pos:[0,0],start:[0,0]};;){if(c[g]=e.call(u,c[g]),d[g]=e.call(f,d[g]),c[g][0]!=d[g][0]||"M"==c[g][0]||"A"==c[g][0]&&(c[g][4]!=d[g][4]||c[g][5]!=d[g][5])?(Array.prototype.splice.apply(c,[g,1].concat(a.call(u,c[g]))),Array.prototype.splice.apply(d,[g,1].concat(a.call(f,d[g])))):(c[g]=i.call(u,c[g]),d[g]=i.call(f,d[g])),++g==c.length&&g==d.length)break;g==c.length&&c.push(["C",u.pos[0],u.pos[1],u.pos[0],u.pos[1],u.pos[0],u.pos[1]]),g==d.length&&d.push(["C",f.pos[0],f.pos[1],f.pos[0],f.pos[1],f.pos[0],f.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function a(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":t=(e=function(t,e){var i,a,s,r,o,n,l,h,c,d,g,u,f,p,x,b,v,m,y,w,k,A,S,C,L,P,M=Math.abs(e[1]),T=Math.abs(e[2]),I=e[3]%360,z=e[4],X=e[5],E=e[6],Y=e[7],F=new SVG.Point(t),R=new SVG.Point(E,Y),H=[];if(0===M||0===T||F.x===R.x&&F.y===R.y)return[["C",F.x,F.y,R.x,R.y,R.x,R.y]];i=new SVG.Point((F.x-R.x)/2,(F.y-R.y)/2).transform((new SVG.Matrix).rotate(I)),(a=i.x*i.x/(M*M)+i.y*i.y/(T*T))>1&&(M*=a=Math.sqrt(a),T*=a);s=(new SVG.Matrix).rotate(I).scale(1/M,1/T).rotate(-I),F=F.transform(s),R=R.transform(s),r=[R.x-F.x,R.y-F.y],n=r[0]*r[0]+r[1]*r[1],o=Math.sqrt(n),r[0]/=o,r[1]/=o,l=n<4?Math.sqrt(1-n/4):0,z===X&&(l*=-1);h=new SVG.Point((R.x+F.x)/2+l*-r[1],(R.y+F.y)/2+l*r[0]),c=new SVG.Point(F.x-h.x,F.y-h.y),d=new SVG.Point(R.x-h.x,R.y-h.y),g=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(g*=-1);u=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(u*=-1);X&&g>u&&(u+=2*Math.PI);!X&&g<u&&(u-=2*Math.PI);for(p=Math.ceil(2*Math.abs(g-u)/Math.PI),b=[],v=g,f=(u-g)/p,x=4*Math.tan(f/4)/3,k=0;k<=p;k++)y=Math.cos(v),m=Math.sin(v),w=new SVG.Point(h.x+y,h.y+m),b[k]=[new SVG.Point(w.x+x*m,w.y-x*y),w,new SVG.Point(w.x-x*m,w.y+x*y)],v+=f;for(b[0][0]=b[0][1].clone(),b[b.length-1][2]=b[b.length-1][1].clone(),s=(new SVG.Matrix).rotate(I).scale(M,T).rotate(-I),k=0,A=b.length;k<A;k++)b[k][0]=b[k][0].transform(s),b[k][1]=b[k][1].transform(s),b[k][2]=b[k][2].transform(s);for(k=1,A=b.length;k<A;k++)S=(w=b[k-1][2]).x,C=w.y,L=(w=b[k][0]).x,P=w.y,E=(w=b[k][1]).x,Y=w.y,H.push(["C",S,C,L,P,E,Y]);return H}(this.pos,t))[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function s(t,e){if(!1===e)return!1;for(var i=e,a=t.length;i<a;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,a=this.parse(e),r=0,o=0,n=!1,l=!1;!1!==r||!1!==o;){var h;n=s(i,!1!==r&&r+1),l=s(a,!1!==o&&o+1),!1===r&&(r=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===o&&(o=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?a.push(a[0])-1:a.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,r,n,a,o,l);i=i.slice(0,r).concat(c.start,!1===n?[]:i.slice(n)),a=a.slice(0,o).concat(c.dest,!1===l?[]:a.slice(l)),r=!1!==n&&r+c.start.length,o=!1!==l&&o+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=a,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
function(){function t(t){t.remember("_draggable",this),this.el=t}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",(function(t){i.start(t)})),this.el.on("touchstart.drag",(function(t){i.start(t)}))},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.clientX-(e||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;if(this.el.fire("beforedrag",{event:t,handler:this}),!this.el.event().defaultPrevented){t.preventDefault(),t.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(t,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",(function(t){e.drag(t)})),SVG.on(window,"touchmove.drag",(function(t){e.drag(t)})),SVG.on(window,"mouseup.drag",(function(t){e.end(t)})),SVG.on(window,"touchend.drag",(function(t){e.end(t)})),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this})}}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),a=this.startPoints.box.x+i.x-this.startPoints.point.x,s=this.startPoints.box.y+i.y-this.startPoints.point.y,r=this.constraint,o=i.x-this.startPoints.point.x,n=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:t,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if("function"==typeof r){var l=r.call(this.el,a,s,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(a):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(s):!1!==l.y&&this.el.y(l.y)}else"object"==typeof r&&(null!=r.minX&&a<r.minX?o=(a=r.minX)-this.startPoints.box.x:null!=r.maxX&&a>r.maxX-e.width&&(o=(a=r.maxX-e.width)-this.startPoints.box.x),null!=r.minY&&s<r.minY?n=(s=r.minY)-this.startPoints.box.y:null!=r.maxY&&s>r.maxY-e.height&&(n=(s=r.maxY-e.height)-this.startPoints.box.y),null!=r.snapToGrid&&(a-=a%r.snapToGrid,s-=s%r.snapToGrid,o-=o%r.snapToGrid,n-=n%r.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:n},!0):this.el.move(a,s));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var a=this.remember("_draggable")||new t(this);return(e=void 0===e||e)?a.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,e,i){var a="string"!=typeof t?t:e[t];return i?a/2:a},this.pointCoords=function(t,e){var i=this.pointsList[t];return{x:this.pointCoord(i[0],e,"t"===t||"b"===t),y:this.pointCoord(i[1],e,"r"===t||"l"===t)}}}t.prototype.init=function(t,e){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var s in this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);var r=["points","pointsExclude"];for(var s in r){var o=this.options[r[s]];"string"==typeof o?o=o.length>0?o.split(/\s*,\s*/i):[]:"boolean"==typeof o&&"points"===r[s]&&(o=o?a:[]),this.options[r[s]]=o}this.options.points=[a,this.options.points].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)>-1}))})),this.options.points=[this.options.points,this.options.pointsExclude].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)<0}))})),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup()},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map((function(e){return[e[0]-t.x,e[1]-t.y]}))},t.prototype.drawPoints=function(){for(var t=this,e=this.getPointArray(),i=0,a=e.length;i<a;++i){var s=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:a,y:s,i:e,event:i})}}(i),r=this.drawPoint(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",s).on("mousedown",s);this.pointSelection.set.add(r)}},t.prototype.drawPoint=function(t,e){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(t,e);case"rect":return this.drawRect(t,e);default:if("function"==typeof i)return i.call(this,t,e);throw new Error("Unknown "+i+" point type!")}},t.prototype.drawCircle=function(t,e){return this.nested.circle(this.options.pointSize).center(t,e)},t.prototype.drawRect=function(t,e){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(t,e)},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each((function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1])}))},t.prototype.updateRectSelection=function(){var t=this,e=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:e.width,height:e.height}),this.options.points.length&&this.options.points.map((function(i,a){var s=t.pointCoords(i,e);t.rectSelection.set.get(a+1).center(s.x,s.y)})),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(e.width/2,20)}},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function a(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:a,y:s,event:i})}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2){this.options.points.map((function(t,s){var r=e.pointCoords(t,i),o=e.drawPoint(r.x,r.y).attr("class",e.options.classPoints+"_"+t).on("mousedown",a(t)).on("touchstart",a(t));e.rectSelection.set.add(o)})),this.rectSelection.set.each((function(){this.addClass(e.options.classPoints)}))}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var s=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,a=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:a,event:t})},r=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",s).on("mousedown",s);this.rectSelection.set.add(r)}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function(){t.handler()})),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",(function(){t.handler()}))},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function(){this.remove()})),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function(){this.remove()})),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,i){return"object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint()}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return{x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rb.resize",(function(t){e.resize(t||window.event)})),this.el.on("lb.resize",(function(t){e.resize(t||window.event)})),this.el.on("t.resize",(function(t){e.resize(t||window.event)})),this.el.on("r.resize",(function(t){e.resize(t||window.event)})),this.el.on("b.resize",(function(t){e.resize(t||window.event)})),this.el.on("l.resize",(function(t){e.resize(t||window.event)})),this.el.on("rot.resize",(function(t){e.resize(t||window.event)})),this.el.on("point.resize",(function(t){e.resize(t||window.event)})),this.update()}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var a=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[a[t.detail.i][0],a[t.detail.i][1]]}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1])}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1])}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1])}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1])}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1])}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0])}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1])}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0])}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,a=e+this.parameters.p.y,s=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),r=Math.atan2(a-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2),o=this.parameters.rotation+180*(r-s)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(o-o%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),a=this.el.array().valueOf();a[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],a[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(a)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"touchend.resize",(function(){e.done()})),SVG.on(window,"mousemove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"mouseup.resize",(function(){e.done()}))},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),a=i.x-this.parameters.p.x,s=i.y-this.parameters.p.y;this.lastUpdateCall=[a,s],this.calc(a,s),this.el.fire("resizing",{dx:a,dy:s,event:t})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},t.prototype.snapToGrid=function(t,e,i,a){var s;return void 0!==a?s=[(i+t)%this.options.snapToGrid,(a+e)%this.options.snapToGrid]:(i=null==i?3:i,s=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t<0&&(s[0]-=this.options.snapToGrid),e<0&&(s[1]-=this.options.snapToGrid),t-=Math.abs(s[0])<this.options.snapToGrid/2?s[0]:s[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(s[1])<this.options.snapToGrid/2?s[1]:s[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,a)},t.prototype.constraintToBox=function(t,e,i,a){var s,r,o=this.options.constraint||{};return void 0!==a?(s=i,r=a):(s=this.parameters.box.x+(1&i?0:this.parameters.box.width),r=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==o.minX&&s+t<o.minX&&(t=o.minX-s),void 0!==o.maxX&&s+t>o.maxX&&(t=o.maxX-s),void 0!==o.minY&&r+e<o.minY&&(e=o.minY-r),void 0!==o.maxY&&r+e>o.maxY&&(e=o.maxY-r),[t,e]},t.prototype.checkAspectRatio=function(t,e){if(!this.options.saveAspectRatio)return t;var i=t.slice(),a=this.parameters.box.width/this.parameters.box.height,s=this.parameters.box.width+t[0],r=this.parameters.box.height-t[1],o=s/r;return o<a?(i[1]=s/a-this.parameters.box.height,e&&(i[1]=-i[1])):o>a&&(i[0]=this.parameters.box.width-r*a,e&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),void 0===window.Apex&&(window.Apex={});var Ht=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new b(this.ctx),this.ctx.axes=new K(this.ctx),this.ctx.core=new Ft(this.ctx.el,this.ctx),this.ctx.config=new N({}),this.ctx.data=new B(this.ctx),this.ctx.grid=new U(this.ctx),this.ctx.graphics=new m(this.ctx),this.ctx.coreUtils=new y(this.ctx),this.ctx.crosshairs=new tt(this.ctx),this.ctx.events=new J(this.ctx),this.ctx.exports=new j(this.ctx),this.ctx.localization=new Q(this.ctx),this.ctx.options=new L,this.ctx.responsive=new et(this.ctx),this.ctx.series=new E(this.ctx),this.ctx.theme=new it(this.ctx),this.ctx.formatters=new V(this.ctx),this.ctx.titleSubtitle=new at(this.ctx),this.ctx.legend=new ct(this.ctx),this.ctx.toolbar=new dt(this.ctx),this.ctx.dimensions=new lt(this.ctx),this.ctx.updateHelpers=new Rt(this.ctx),this.ctx.zoomPanSelection=new gt(this.ctx),this.ctx.w.globals.tooltip=new mt(this.ctx)}}]),t}(),Dt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"clear",value:function(t){var e=t.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:e})}},{key:"killSVG",value:function(t){t.each((function(t,e){this.removeClass("*"),this.off(),this.stop()}),!0),t.ungroup(),t.clear()}},{key:"clearDomElements",value:function(t){var e=this,i=t.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var s=this.w.globals.dom.baseEl;s&&this.ctx.eventList.forEach((function(t){s.removeEventListener(t,e.ctx.events.documentEvent)}));var r=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(r.Paper),r.Paper.remove(),r.elWrap=null,r.elGraphical=null,r.elAnnotations=null,r.elLegendWrap=null,r.baseEl=null,r.elGridRect=null,r.elGridRectMask=null,r.elGridRectMarkerMask=null,r.elForecastMask=null,r.elNonForecastMask=null,r.elDefs=null}}]),t}(),Nt=new WeakMap;return function(){function t(e,i){a(this,t),this.opts=i,this.ctx=this,this.w=new W(i).init(),this.el=e,this.w.globals.cuid=x.randomId(),this.w.globals.chartID=this.w.config.chart.id?x.escapeString(this.w.config.chart.id):this.w.globals.cuid,new Ht(this).initModules(),this.create=x.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return r(t,[{key:"render",value:function(){var t=this;return new Promise((function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var a=t.w.config.chart.events.beforeMount;if("function"==typeof a&&a(t,t.w),t.events.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),function(t,e){var i=!1;if(t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var a=t.getBoundingClientRect();"none"!==t.style.display&&0!==a.width||(i=!0)}var s=new ResizeObserver((function(a){i&&e.call(t,a),i=!0}));t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(t.children).forEach((function(t){return s.observe(t)})):s.observe(t),Nt.set(e,s)}(t.el.parentNode,t.parentResizeHandler),!t.css){var s=t.el.getRootNode&&t.el.getRootNode(),r=x.is("ShadowRoot",s),o=t.el.ownerDocument,n=o.getElementById("apexcharts-css");!r&&n||(t.css=document.createElement("style"),t.css.id="apexcharts-css",t.css.textContent='.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-title:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-goals-group, \n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  display: flex;\n}\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-box, .apexcharts-custom-tooltip {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-point-annotation-label,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}',r?s.prepend(t.css):o.head.appendChild(t.css))}var l=t.create(t.w.config.series,{});if(!l)return e(t);t.mount(l).then((function(){"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.events.fireEvent("mounted",[t,t.w]),e(l)})).catch((function(t){i(t)}))}else i(new Error("Element not found"))}))}},{key:"create",value:function(t,e){var i=this.w;new Ht(this).initModules();var a=this.w.globals;(a.noData=!1,a.animationEnded=!1,this.responsive.checkResponsiveConfig(e),i.config.xaxis.convertedCatToNumeric)&&new D(i.config).convertCatToNumericXaxis(i.config,this.ctx);if(null===this.el)return a.animationEnded=!0,null;if(this.core.setupElements(),"treemap"===i.config.chart.type&&(i.config.grid.show=!1,i.config.yaxis[0].show=!1),0===a.svgWidth)return a.animationEnded=!0,null;var s=y.checkComboSeries(t);a.comboCharts=s.comboCharts,a.comboBarCount=s.comboBarCount;var r=t.every((function(t){return t.data&&0===t.data.length}));(0===t.length||r)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(t),this.theme.init(),new T(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),a.axisCharts&&(this.core.coreCalculations(),"category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=i.globals.minX,this.ctx.toolbar.maxX=i.globals.maxX),this.formatters.heatmapLabelFormatters(),new y(this).getLargestMarkerSize(),this.dimensions.plotCoords();var o=this.core.xySettings();this.grid.createGridMask();var n=this.core.plotChartType(t,o),l=new z(this);l.bringForward(),i.config.dataLabels.background.enabled&&l.dataLabelsBackground(),this.core.shiftGraphPosition();var h={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:n,xyRatios:o,elInner:i.globals.dom.elGraphical,dimensions:h}}},{key:"mount",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,a=i.w;return new Promise((function(s,r){if(null===i.el)return r(new Error("Not enough data to display or target element not found"));(null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),"treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type,e.xyRatios),i.grid=new U(i);var o=i.grid.drawGrid();i.annotations=new P(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),"back"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el);var n=new _(t.ctx),l=new $(t.ctx);if(null!==o&&(n.xAxisLabelCorrections(o.xAxisTickWidth),l.setYAxisTextAlignments(),a.config.yaxis.map((function(t,e){-1===a.globals.ignoreYAxisIndexes.indexOf(e)&&l.yAxisTitleRotate(e,t.opposite)}))),"back"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),Array.isArray(e.elGraph))for(var h=0;h<e.elGraph.length;h++)a.globals.dom.elGraphical.add(e.elGraph[h]);else a.globals.dom.elGraphical.add(e.elGraph);if("front"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el),"front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(),"front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(),"front"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:e.xyRatios});else{var c=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(t){c[t]=!1}))}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t){t.method(t.params,!1,t.context)})),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),s(i)}))}},{key:"destroy",value:function(){var t,e;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,t=this.parentResizeHandler,(e=Nt.get(t))&&(e.disconnect(),Nt.delete(t));var i=this.w.config.chart.id;i&&Apex._chartInstances.forEach((function(t,e){t.id===x.escapeString(i)&&Apex._chartInstances.splice(e,1)})),new Dt(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.w;return o.globals.selection=void 0,t.series&&(this.series.resetSeries(!1,!0,!1),t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t,i){return e.updateHelpers._extendSeries(t,i)}))),this.updateHelpers.revertDefaultAxisMinMax()),t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)),t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this.updateHelpers._updateOptions(t,i,a,s,r)}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w.config.series.slice();return a.push(t),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,e,i)}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),s=0;s<a.length;s++)if(null!==t[s]&&void 0!==t[s])for(var r=0;r<t[s].data.length;r++)a[s].data.push(t[s].data[r]);return i.w.config.series=a,e&&(i.w.globals.initialSeries=x.clone(i.w.config.series)),this.update()}},{key:"update",value:function(t){var e=this;return new Promise((function(i,a){new Dt(e.ctx).clear({isUpdating:!0});var s=e.create(e.w.config.series,t);if(!s)return i(e);e.mount(s).then((function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.events.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)})).catch((function(t){a(t)}))}))}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach((function(t){e.push(t)}))),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter((function(t){if(t.group)return!0})).map((function(e){return t.w.config.chart.group===e.group?e.chart:t}))}},{key:"toggleSeries",value:function(t){return this.series.toggleSeries(t)}},{key:"highlightSeriesOnLegendHover",value:function(t,e){return this.series.toggleSeriesOnHover(t,e)}},{key:"showSeries",value:function(t){this.series.showSeries(t)}},{key:"hideSeries",value:function(t){this.series.hideSeries(t)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(t,e)}},{key:"addEventListener",value:function(t,e){this.events.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.events.removeEventListener(t,e)}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(t,e,a)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(t,e,a)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(t,e,a)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"removeAnnotation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=this;e&&(i=e),i.annotations.removeAnnotation(i,t)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Z(this.ctx);return e.getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Z(this.ctx);return e.getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(t,e){return this.updateHelpers.toggleDataPointSelection(t,e)}},{key:"zoomX",value:function(t,e){this.ctx.toolbar.zoomUpdateOptions(t,e)}},{key:"setLocale",value:function(t){this.localization.setCurrentLocaleValues(t)}},{key:"dataURI",value:function(t){return new j(this.ctx).dataURI(t)}},{key:"exportToCSV",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new j(this.ctx);return e.exportToCSV(t)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.ctx.update()}),150)}},{key:"_windowResizeHandler",value:function(){var t=this.w.config.chart.redrawOnWindowResize;"function"==typeof t&&(t=t()),t&&this._windowResize()}}],[{key:"getChartByID",value:function(t){var e=x.escapeString(t),i=Apex._chartInstances.filter((function(t){return t.id===e}))[0];return i&&i.chart}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;var a=null;if(-1!==i.publicMethods.indexOf(e)){for(var s=arguments.length,r=new Array(s>2?s-2:0),o=2;o<s;o++)r[o-2]=arguments[o];a=i[e].apply(i,r)}return a}}},{key:"merge",value:function(t,e){return x.extend(t,e)}}]),t}()}));

/**** chart.min.js****/
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Chart=e()}(this,(function(){"use strict";function t(){}const e=function(){let t=0;return function(){return t++}}();function i(t){return null==t}function s(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function n(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const o=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function a(t,e){return o(t)?t:e}function r(t,e){return void 0===t?e:t}const l=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,h=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function c(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function d(t,e,i,o){let a,r,l;if(s(t))if(r=t.length,o)for(a=r-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<r;a++)e.call(i,t[a],a);else if(n(t))for(l=Object.keys(t),r=l.length,a=0;a<r;a++)e.call(i,t[l[a]],l[a])}function u(t,e){let i,s,n,o;if(!t||!e||t.length!==e.length)return!1;for(i=0,s=t.length;i<s;++i)if(n=t[i],o=e[i],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function f(t){if(s(t))return t.map(f);if(n(t)){const e=Object.create(null),i=Object.keys(t),s=i.length;let n=0;for(;n<s;++n)e[i[n]]=f(t[i[n]]);return e}return t}function g(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function p(t,e,i,s){if(!g(t))return;const o=e[t],a=i[t];n(o)&&n(a)?m(o,a,s):e[t]=f(a)}function m(t,e,i){const o=s(e)?e:[e],a=o.length;if(!n(t))return t;const r=(i=i||{}).merger||p;for(let s=0;s<a;++s){if(!n(e=o[s]))continue;const a=Object.keys(e);for(let s=0,n=a.length;s<n;++s)r(a[s],t,e,i)}return t}function b(t,e){return m(t,e,{merger:x})}function x(t,e,i){if(!g(t))return;const s=e[t],o=i[t];n(s)&&n(o)?b(s,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=f(o))}const _={"":t=>t,x:t=>t.x,y:t=>t.y};function y(t,e){const i=_[e]||(_[e]=function(t){const e=v(t);return t=>{for(const i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}function v(t){const e=t.split("."),i=[];let s="";for(const t of e)s+=t,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}function w(t){return t.charAt(0).toUpperCase()+t.slice(1)}const M=t=>void 0!==t,k=t=>"function"==typeof t,S=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};function P(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const D=Math.PI,O=2*D,C=O+D,A=Number.POSITIVE_INFINITY,T=D/180,L=D/2,E=D/4,R=2*D/3,I=Math.log10,z=Math.sign;function F(t){const e=Math.round(t);t=N(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(I(t))),s=t/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function V(t){const e=[],i=Math.sqrt(t);let s;for(s=1;s<i;s++)t%s==0&&(e.push(s),e.push(t/s));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}function B(t){return!isNaN(parseFloat(t))&&isFinite(t)}function N(t,e,i){return Math.abs(t-e)<i}function W(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}function j(t,e,i){let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s][i],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function H(t){return t*(D/180)}function $(t){return t*(180/D)}function Y(t){if(!o(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function U(t,e){const i=e.x-t.x,s=e.y-t.y,n=Math.sqrt(i*i+s*s);let o=Math.atan2(s,i);return o<-.5*D&&(o+=O),{angle:o,distance:n}}function X(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function q(t,e){return(t-e+C)%O-D}function K(t){return(t%O+O)%O}function G(t,e,i,s){const n=K(t),o=K(e),a=K(i),r=K(o-n),l=K(a-n),h=K(n-o),c=K(n-a);return n===o||n===a||s&&o===a||r>l&&h<c}function Z(t,e,i){return Math.max(e,Math.min(i,t))}function J(t){return Z(t,-32768,32767)}function Q(t,e,i,s=1e-6){return t>=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function tt(t,e,i){i=i||(i=>t[i]<e);let s,n=t.length-1,o=0;for(;n-o>1;)s=o+n>>1,i(s)?o=s:n=s;return{lo:o,hi:n}}const et=(t,e,i,s)=>tt(t,i,s?s=>t[s][e]<=i:s=>t[s][e]<i),it=(t,e,i)=>tt(t,i,(s=>t[s][e]>=i));function st(t,e,i){let s=0,n=t.length;for(;s<n&&t[s]<e;)s++;for(;n>s&&t[n-1]>i;)n--;return s>0||n<t.length?t.slice(s,n):t}const nt=["push","pop","shift","splice","unshift"];function ot(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),nt.forEach((e=>{const i="_onData"+w(e),s=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const n=s.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"==typeof t[i]&&t[i](...e)})),n}})})))}function at(t,e){const i=t._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(e);-1!==n&&s.splice(n,1),s.length>0||(nt.forEach((e=>{delete t[e]})),delete t._chartjs)}function rt(t){const e=new Set;let i,s;for(i=0,s=t.length;i<s;++i)e.add(t[i]);return e.size===s?t:Array.from(e)}const lt="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function ht(t,e,i){const s=i||(t=>Array.prototype.slice.call(t));let n=!1,o=[];return function(...i){o=s(i),n||(n=!0,lt.call(window,(()=>{n=!1,t.apply(e,o)})))}}function ct(t,e){let i;return function(...s){return e?(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}const dt=t=>"start"===t?"left":"end"===t?"right":"center",ut=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,ft=(t,e,i,s)=>t===(s?"left":"right")?i:"center"===t?(e+i)/2:e;function gt(t,e,i){const s=e.length;let n=0,o=s;if(t._sorted){const{iScale:a,_parsed:r}=t,l=a.axis,{min:h,max:c,minDefined:d,maxDefined:u}=a.getUserBounds();d&&(n=Z(Math.min(et(r,a.axis,h).lo,i?s:et(e,l,a.getPixelForValue(h)).lo),0,s-1)),o=u?Z(Math.max(et(r,a.axis,c,!0).hi+1,i?0:et(e,l,a.getPixelForValue(c),!0).hi+1),n,s)-n:s-n}return{start:n,count:o}}function pt(t){const{xScale:e,yScale:i,_scaleRanges:s}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!s)return t._scaleRanges=n,!0;const o=s.xmin!==e.min||s.xmax!==e.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),o}var mt=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const n=e.listeners[s],o=e.duration;n.forEach((s=>s({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)})))}_refresh(){this._request||(this._running=!0,this._request=lt.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,s)=>{if(!i.running||!i.items.length)return;const n=i.items;let o,a=n.length-1,r=!1;for(;a>=0;--a)o=n[a],o._active?(o._total>i.duration&&(i.duration=o._total),o.tick(t),r=!0):(n[a]=n[n.length-1],n.pop());r&&(s.draw(),this._notify(s,i,t,"progress")),n.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=n.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function bt(t){return t+.5|0}const xt=(t,e,i)=>Math.max(Math.min(t,i),e);function _t(t){return xt(bt(2.55*t),0,255)}function yt(t){return xt(bt(255*t),0,255)}function vt(t){return xt(bt(t/2.55)/100,0,1)}function wt(t){return xt(bt(100*t),0,100)}const Mt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},kt=[..."0123456789ABCDEF"],St=t=>kt[15&t],Pt=t=>kt[(240&t)>>4]+kt[15&t],Dt=t=>(240&t)>>4==(15&t);function Ot(t){var e=(t=>Dt(t.r)&&Dt(t.g)&&Dt(t.b)&&Dt(t.a))(t)?St:Pt;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const Ct=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function At(t,e,i){const s=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-s*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function Tt(t,e,i){const s=(s,n=(s+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[s(5),s(3),s(1)]}function Lt(t,e,i){const s=At(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)s[n]*=1-e-i,s[n]+=e;return s}function Et(t){const e=t.r/255,i=t.g/255,s=t.b/255,n=Math.max(e,i,s),o=Math.min(e,i,s),a=(n+o)/2;let r,l,h;return n!==o&&(h=n-o,l=a>.5?h/(2-n-o):h/(n+o),r=function(t,e,i,s,n){return t===n?(e-i)/s+(e<i?6:0):e===n?(i-t)/s+2:(t-e)/s+4}(e,i,s,h,n),r=60*r+.5),[0|r,l||0,a]}function Rt(t,e,i,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,s)).map(yt)}function It(t,e,i){return Rt(At,t,e,i)}function zt(t){return(t%360+360)%360}function Ft(t){const e=Ct.exec(t);let i,s=255;if(!e)return;e[5]!==i&&(s=e[6]?_t(+e[5]):yt(+e[5]));const n=zt(+e[2]),o=+e[3]/100,a=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return Rt(Lt,t,e,i)}(n,o,a):"hsv"===e[1]?function(t,e,i){return Rt(Tt,t,e,i)}(n,o,a):It(n,o,a),{r:i[0],g:i[1],b:i[2],a:s}}const Vt={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Bt={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Nt;function Wt(t){Nt||(Nt=function(){const t={},e=Object.keys(Bt),i=Object.keys(Vt);let s,n,o,a,r;for(s=0;s<e.length;s++){for(a=r=e[s],n=0;n<i.length;n++)o=i[n],r=r.replace(o,Vt[o]);o=parseInt(Bt[a],16),t[r]=[o>>16&255,o>>8&255,255&o]}return t}(),Nt.transparent=[0,0,0,0]);const e=Nt[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const jt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const Ht=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,$t=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Yt(t,e,i){if(t){let s=Et(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,0===e?360:1)),s=It(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function Ut(t,e){return t?Object.assign(e||{},t):t}function Xt(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=yt(t[3]))):(e=Ut(t,{r:0,g:0,b:0,a:1})).a=yt(e.a),e}function qt(t){return"r"===t.charAt(0)?function(t){const e=jt.exec(t);let i,s,n,o=255;if(e){if(e[7]!==i){const t=+e[7];o=e[8]?_t(t):xt(255*t,0,255)}return i=+e[1],s=+e[3],n=+e[5],i=255&(e[2]?_t(i):xt(i,0,255)),s=255&(e[4]?_t(s):xt(s,0,255)),n=255&(e[6]?_t(n):xt(n,0,255)),{r:i,g:s,b:n,a:o}}}(t):Ft(t)}class Kt{constructor(t){if(t instanceof Kt)return t;const e=typeof t;let i;var s,n,o;"object"===e?i=Xt(t):"string"===e&&(o=(s=t).length,"#"===s[0]&&(4===o||5===o?n={r:255&17*Mt[s[1]],g:255&17*Mt[s[2]],b:255&17*Mt[s[3]],a:5===o?17*Mt[s[4]]:255}:7!==o&&9!==o||(n={r:Mt[s[1]]<<4|Mt[s[2]],g:Mt[s[3]]<<4|Mt[s[4]],b:Mt[s[5]]<<4|Mt[s[6]],a:9===o?Mt[s[7]]<<4|Mt[s[8]]:255})),i=n||Wt(t)||qt(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Ut(this._rgb);return t&&(t.a=vt(t.a)),t}set rgb(t){this._rgb=Xt(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${vt(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0;var t}hexString(){return this._valid?Ot(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=Et(t),i=e[0],s=wt(e[1]),n=wt(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${n}%, ${vt(t.a)})`:`hsl(${i}, ${s}%, ${n}%)`}(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let n;const o=e===n?.5:e,a=2*o-1,r=i.a-s.a,l=((a*r==-1?a:(a+r)/(1+a*r))+1)/2;n=1-l,i.r=255&l*i.r+n*s.r+.5,i.g=255&l*i.g+n*s.g+.5,i.b=255&l*i.b+n*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){const s=$t(vt(t.r)),n=$t(vt(t.g)),o=$t(vt(t.b));return{r:yt(Ht(s+i*($t(vt(e.r))-s))),g:yt(Ht(n+i*($t(vt(e.g))-n))),b:yt(Ht(o+i*($t(vt(e.b))-o))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new Kt(this.rgb)}alpha(t){return this._rgb.a=yt(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=bt(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Yt(this._rgb,2,t),this}darken(t){return Yt(this._rgb,2,-t),this}saturate(t){return Yt(this._rgb,1,t),this}desaturate(t){return Yt(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=Et(t);i[0]=zt(i[0]+e),i=It(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function Gt(t){return new Kt(t)}function Zt(t){if(t&&"object"==typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function Jt(t){return Zt(t)?t:Gt(t)}function Qt(t){return Zt(t)?t:Gt(t).saturate(.5).darken(.1).hexString()}const te=Object.create(null),ee=Object.create(null);function ie(t,e){if(!e)return t;const i=e.split(".");for(let e=0,s=i.length;e<s;++e){const s=i[e];t=t[s]||(t[s]=Object.create(null))}return t}function se(t,e,i){return"string"==typeof e?m(ie(t,e),i):m(ie(t,""),e)}var ne=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Qt(e.backgroundColor),this.hoverBorderColor=(t,e)=>Qt(e.borderColor),this.hoverColor=(t,e)=>Qt(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return se(this,t,e)}get(t){return ie(this,t)}describe(t,e){return se(ee,t,e)}override(t,e){return se(te,t,e)}route(t,e,i,s){const o=ie(this,t),a=ie(this,i),l="_"+e;Object.defineProperties(o,{[l]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[l],e=a[s];return n(t)?Object.assign({},e,t):r(t,e)},set(t){this[l]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function oe(){return"undefined"!=typeof window&&"undefined"!=typeof document}function ae(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function re(t,e,i){let s;return"string"==typeof t?(s=parseInt(t,10),-1!==t.indexOf("%")&&(s=s/100*e.parentNode[i])):s=t,s}const le=t=>window.getComputedStyle(t,null);function he(t,e){return le(t).getPropertyValue(e)}const ce=["top","right","bottom","left"];function de(t,e,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const o=ce[n];s[o]=parseFloat(t[e+"-"+o+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}function ue(t,e){if("native"in t)return t;const{canvas:i,currentDevicePixelRatio:s}=e,n=le(i),o="border-box"===n.boxSizing,a=de(n,"padding"),r=de(n,"border","width"),{x:l,y:h,box:c}=function(t,e){const i=t.touches,s=i&&i.length?i[0]:t,{offsetX:n,offsetY:o}=s;let a,r,l=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(n,o,t.target))a=n,r=o;else{const t=e.getBoundingClientRect();a=s.clientX-t.left,r=s.clientY-t.top,l=!0}return{x:a,y:r,box:l}}(t,i),d=a.left+(c&&r.left),u=a.top+(c&&r.top);let{width:f,height:g}=e;return o&&(f-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-d)/f*i.width/s),y:Math.round((h-u)/g*i.height/s)}}const fe=t=>Math.round(10*t)/10;function ge(t,e,i,s){const n=le(t),o=de(n,"margin"),a=re(n.maxWidth,t,"clientWidth")||A,r=re(n.maxHeight,t,"clientHeight")||A,l=function(t,e,i){let s,n;if(void 0===e||void 0===i){const o=ae(t);if(o){const t=o.getBoundingClientRect(),a=le(o),r=de(a,"border","width"),l=de(a,"padding");e=t.width-l.width-r.width,i=t.height-l.height-r.height,s=re(a.maxWidth,o,"clientWidth"),n=re(a.maxHeight,o,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:s||A,maxHeight:n||A}}(t,e,i);let{width:h,height:c}=l;if("content-box"===n.boxSizing){const t=de(n,"border","width"),e=de(n,"padding");h-=e.width+t.width,c-=e.height+t.height}return h=Math.max(0,h-o.width),c=Math.max(0,s?Math.floor(h/s):c-o.height),h=fe(Math.min(h,a,l.maxWidth)),c=fe(Math.min(c,r,l.maxHeight)),h&&!c&&(c=fe(h/2)),{width:h,height:c}}function pe(t,e,i){const s=e||1,n=Math.floor(t.height*s),o=Math.floor(t.width*s);t.height=n/s,t.width=o/s;const a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==s||a.height!==n||a.width!==o)&&(t.currentDevicePixelRatio=s,a.height=n,a.width=o,t.ctx.setTransform(s,0,0,s,0,0),!0)}const me=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function be(t,e){const i=he(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function xe(t){return!t||i(t.size)||i(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function _e(t,e,i,s,n){let o=e[n];return o||(o=e[n]=t.measureText(n).width,i.push(n)),o>s&&(s=o),s}function ye(t,e,i,n){let o=(n=n||{}).data=n.data||{},a=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(o=n.data={},a=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let r=0;const l=i.length;let h,c,d,u,f;for(h=0;h<l;h++)if(u=i[h],null!=u&&!0!==s(u))r=_e(t,o,a,r,u);else if(s(u))for(c=0,d=u.length;c<d;c++)f=u[c],null==f||s(f)||(r=_e(t,o,a,r,f));t.restore();const g=a.length/2;if(g>i.length){for(h=0;h<g;h++)delete o[a[h]];a.splice(0,g)}return r}function ve(t,e,i){const s=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*s)/s+n}function we(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Me(t,e,i,s){ke(t,e,i,s,null)}function ke(t,e,i,s,n){let o,a,r,l,h,c;const d=e.pointStyle,u=e.rotation,f=e.radius;let g=(u||0)*T;if(d&&"object"==typeof d&&(o=d.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,s),t.rotate(g),t.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),void t.restore();if(!(isNaN(f)||f<=0)){switch(t.beginPath(),d){default:n?t.ellipse(i,s,n/2,f,0,0,O):t.arc(i,s,f,0,O),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(g)*f,s-Math.cos(g)*f),g+=R,t.lineTo(i+Math.sin(g)*f,s-Math.cos(g)*f),g+=R,t.lineTo(i+Math.sin(g)*f,s-Math.cos(g)*f),t.closePath();break;case"rectRounded":h=.516*f,l=f-h,a=Math.cos(g+E)*l,r=Math.sin(g+E)*l,t.arc(i-a,s-r,h,g-D,g-L),t.arc(i+r,s-a,h,g-L,g),t.arc(i+a,s+r,h,g,g+L),t.arc(i-r,s+a,h,g+L,g+D),t.closePath();break;case"rect":if(!u){l=Math.SQRT1_2*f,c=n?n/2:l,t.rect(i-c,s-l,2*c,2*l);break}g+=E;case"rectRot":a=Math.cos(g)*f,r=Math.sin(g)*f,t.moveTo(i-a,s-r),t.lineTo(i+r,s-a),t.lineTo(i+a,s+r),t.lineTo(i-r,s+a),t.closePath();break;case"crossRot":g+=E;case"cross":a=Math.cos(g)*f,r=Math.sin(g)*f,t.moveTo(i-a,s-r),t.lineTo(i+a,s+r),t.moveTo(i+r,s-a),t.lineTo(i-r,s+a);break;case"star":a=Math.cos(g)*f,r=Math.sin(g)*f,t.moveTo(i-a,s-r),t.lineTo(i+a,s+r),t.moveTo(i+r,s-a),t.lineTo(i-r,s+a),g+=E,a=Math.cos(g)*f,r=Math.sin(g)*f,t.moveTo(i-a,s-r),t.lineTo(i+a,s+r),t.moveTo(i+r,s-a),t.lineTo(i-r,s+a);break;case"line":a=n?n/2:Math.cos(g)*f,r=Math.sin(g)*f,t.moveTo(i-a,s-r),t.lineTo(i+a,s+r);break;case"dash":t.moveTo(i,s),t.lineTo(i+Math.cos(g)*f,s+Math.sin(g)*f)}t.fill(),e.borderWidth>0&&t.stroke()}}function Se(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Pe(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function De(t){t.restore()}function Oe(t,e,i,s,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const s=(e.x+i.x)/2;t.lineTo(s,e.y),t.lineTo(s,i.y)}else"after"===n!=!!s?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function Ce(t,e,i,s){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(s?e.cp1x:e.cp2x,s?e.cp1y:e.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function Ae(t,e,n,o,a,r={}){const l=s(e)?e:[e],h=r.strokeWidth>0&&""!==r.strokeColor;let c,d;for(t.save(),t.font=a.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);i(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,r),c=0;c<l.length;++c)d=l[c],h&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),i(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(d,n,o,r.maxWidth)),t.fillText(d,n,o,r.maxWidth),Te(t,n,o,d,r),o+=a.lineHeight;t.restore()}function Te(t,e,i,s,n){if(n.strikethrough||n.underline){const o=t.measureText(s),a=e-o.actualBoundingBoxLeft,r=e+o.actualBoundingBoxRight,l=i-o.actualBoundingBoxAscent,h=i+o.actualBoundingBoxDescent,c=n.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(a,c),t.lineTo(r,c),t.stroke()}}function Le(t,e){const{x:i,y:s,w:n,h:o,radius:a}=e;t.arc(i+a.topLeft,s+a.topLeft,a.topLeft,-L,D,!0),t.lineTo(i,s+o-a.bottomLeft),t.arc(i+a.bottomLeft,s+o-a.bottomLeft,a.bottomLeft,D,L,!0),t.lineTo(i+n-a.bottomRight,s+o),t.arc(i+n-a.bottomRight,s+o-a.bottomRight,a.bottomRight,L,0,!0),t.lineTo(i+n,s+a.topRight),t.arc(i+n-a.topRight,s+a.topRight,a.topRight,0,-L,!0),t.lineTo(i+a.topLeft,s)}function Ee(t,e=[""],i=t,s,n=(()=>t[0])){M(s)||(s=$e("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:s,_getTarget:n,override:n=>Ee([n,...t],e,i,s)};return new Proxy(o,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,s)=>Ve(i,s,(()=>function(t,e,i,s){let n;for(const o of e)if(n=$e(ze(o,t),i),M(n))return Fe(t,n)?je(i,s,t,n):n}(s,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Ye(t).includes(e),ownKeys:t=>Ye(t),set(t,e,i){const s=t._storage||(t._storage=n());return t[e]=s[e]=i,delete t._keys,!0}})}function Re(t,e,i,o){const a={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:Ie(t,o),setContext:e=>Re(t,e,i,o),override:s=>Re(t.override(s),e,i,o)};return new Proxy(a,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Ve(t,e,(()=>function(t,e,i){const{_proxy:o,_context:a,_subProxy:r,_descriptors:l}=t;let h=o[e];k(h)&&l.isScriptable(e)&&(h=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_stack:r}=i;if(r.has(t))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+t);r.add(t),e=e(o,a||s),r.delete(t),Fe(t,e)&&(e=je(n._scopes,n,t,e));return e}(e,h,t,i));s(h)&&h.length&&(h=function(t,e,i,s){const{_proxy:o,_context:a,_subProxy:r,_descriptors:l}=i;if(M(a.index)&&s(t))e=e[a.index%e.length];else if(n(e[0])){const i=e,s=o._scopes.filter((t=>t!==i));e=[];for(const n of i){const i=je(s,o,t,n);e.push(Re(i,a,r&&r[t],l))}}return e}(e,h,t,l.isIndexable));Fe(e,h)&&(h=Re(h,a,r&&r[e],l));return h}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,s)=>(t[i]=s,delete e[i],!0)})}function Ie(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:s,isScriptable:k(i)?i:()=>i,isIndexable:k(s)?s:()=>s}}const ze=(t,e)=>t?t+w(e):e,Fe=(t,e)=>n(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Ve(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const s=i();return t[e]=s,s}function Be(t,e,i){return k(t)?t(e,i):t}const Ne=(t,e)=>!0===t?e:"string"==typeof t?y(e,t):void 0;function We(t,e,i,s,n){for(const o of e){const e=Ne(i,o);if(e){t.add(e);const o=Be(e._fallback,i,n);if(M(o)&&o!==i&&o!==s)return o}else if(!1===e&&M(s)&&i!==s)return null}return!1}function je(t,e,i,o){const a=e._rootScopes,r=Be(e._fallback,i,o),l=[...t,...a],h=new Set;h.add(o);let c=He(h,l,i,r||i,o);return null!==c&&((!M(r)||r===i||(c=He(h,l,r,c,o),null!==c))&&Ee(Array.from(h),[""],a,r,(()=>function(t,e,i){const o=t._getTarget();e in o||(o[e]={});const a=o[e];if(s(a)&&n(i))return i;return a}(e,i,o))))}function He(t,e,i,s,n){for(;i;)i=We(t,e,i,s,n);return i}function $e(t,e){for(const i of e){if(!i)continue;const e=i[t];if(M(e))return e}}function Ye(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function Ue(t,e,i,s){const{iScale:n}=t,{key:o="r"}=this._parsing,a=new Array(s);let r,l,h,c;for(r=0,l=s;r<l;++r)h=r+i,c=e[h],a[r]={r:n.parse(y(c,o),h)};return a}const Xe=Number.EPSILON||1e-14,qe=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ke=t=>"x"===t?"y":"x";function Ge(t,e,i,s){const n=t.skip?e:t,o=e,a=i.skip?e:i,r=X(o,n),l=X(a,o);let h=r/(r+l),c=l/(r+l);h=isNaN(h)?0:h,c=isNaN(c)?0:c;const d=s*h,u=s*c;return{previous:{x:o.x-d*(a.x-n.x),y:o.y-d*(a.y-n.y)},next:{x:o.x+u*(a.x-n.x),y:o.y+u*(a.y-n.y)}}}function Ze(t,e="x"){const i=Ke(e),s=t.length,n=Array(s).fill(0),o=Array(s);let a,r,l,h=qe(t,0);for(a=0;a<s;++a)if(r=l,l=h,h=qe(t,a+1),l){if(h){const t=h[e]-l[e];n[a]=0!==t?(h[i]-l[i])/t:0}o[a]=r?h?z(n[a-1])!==z(n[a])?0:(n[a-1]+n[a])/2:n[a-1]:n[a]}!function(t,e,i){const s=t.length;let n,o,a,r,l,h=qe(t,0);for(let c=0;c<s-1;++c)l=h,h=qe(t,c+1),l&&h&&(N(e[c],0,Xe)?i[c]=i[c+1]=0:(n=i[c]/e[c],o=i[c+1]/e[c],r=Math.pow(n,2)+Math.pow(o,2),r<=9||(a=3/Math.sqrt(r),i[c]=n*a*e[c],i[c+1]=o*a*e[c])))}(t,n,o),function(t,e,i="x"){const s=Ke(i),n=t.length;let o,a,r,l=qe(t,0);for(let h=0;h<n;++h){if(a=r,r=l,l=qe(t,h+1),!r)continue;const n=r[i],c=r[s];a&&(o=(n-a[i])/3,r[`cp1${i}`]=n-o,r[`cp1${s}`]=c-o*e[h]),l&&(o=(l[i]-n)/3,r[`cp2${i}`]=n+o,r[`cp2${s}`]=c+o*e[h])}}(t,o,e)}function Je(t,e,i){return Math.max(Math.min(t,i),e)}function Qe(t,e,i,s,n){let o,a,r,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Ze(t,n);else{let i=s?t[t.length-1]:t[0];for(o=0,a=t.length;o<a;++o)r=t[o],l=Ge(i,r,t[Math.min(o+1,a-(s?0:1))%a],e.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,i=r}e.capBezierPoints&&function(t,e){let i,s,n,o,a,r=Se(t[0],e);for(i=0,s=t.length;i<s;++i)a=o,o=r,r=i<s-1&&Se(t[i+1],e),o&&(n=t[i],a&&(n.cp1x=Je(n.cp1x,e.left,e.right),n.cp1y=Je(n.cp1y,e.top,e.bottom)),r&&(n.cp2x=Je(n.cp2x,e.left,e.right),n.cp2y=Je(n.cp2y,e.top,e.bottom)))}(t,i)}const ti=t=>0===t||1===t,ei=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*O/i),ii=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*O/i)+1,si={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*L),easeOutSine:t=>Math.sin(t*L),easeInOutSine:t=>-.5*(Math.cos(D*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>ti(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>ti(t)?t:ei(t,.075,.3),easeOutElastic:t=>ti(t)?t:ii(t,.075,.3),easeInOutElastic(t){const e=.1125;return ti(t)?t:t<.5?.5*ei(2*t,e,.45):.5+.5*ii(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-si.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*si.easeInBounce(2*t):.5*si.easeOutBounce(2*t-1)+.5};function ni(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function oi(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:"middle"===s?i<.5?t.y:e.y:"after"===s?i<1?t.y:e.y:i>0?e.y:t.y}}function ai(t,e,i,s){const n={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},a=ni(t,n,i),r=ni(n,o,i),l=ni(o,e,i),h=ni(a,r,i),c=ni(r,l,i);return ni(h,c,i)}const ri=new Map;function li(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let s=ri.get(i);return s||(s=new Intl.NumberFormat(t,e),ri.set(i,s)),s}(e,i).format(t)}const hi=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),ci=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function di(t,e){const i=(""+t).match(hi);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}function ui(t,e){const i={},s=n(e),o=s?Object.keys(e):e,a=n(t)?s?i=>r(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of o)i[t]=+a(t)||0;return i}function fi(t){return ui(t,{top:"y",right:"x",bottom:"y",left:"x"})}function gi(t){return ui(t,["topLeft","topRight","bottomLeft","bottomRight"])}function pi(t){const e=fi(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function mi(t,e){t=t||{},e=e||ne.font;let i=r(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let s=r(t.style,e.style);s&&!(""+s).match(ci)&&(console.warn('Invalid font style specified: "'+s+'"'),s="");const n={family:r(t.family,e.family),lineHeight:di(r(t.lineHeight,e.lineHeight),i),size:i,style:s,weight:r(t.weight,e.weight),string:""};return n.string=xe(n),n}function bi(t,e,i,n){let o,a,r,l=!0;for(o=0,a=t.length;o<a;++o)if(r=t[o],void 0!==r&&(void 0!==e&&"function"==typeof r&&(r=r(e),l=!1),void 0!==i&&s(r)&&(r=r[i%r.length],l=!1),void 0!==r))return n&&!l&&(n.cacheable=!1),r}function xi(t,e,i){const{min:s,max:n}=t,o=h(e,(n-s)/2),a=(t,e)=>i&&0===t?0:t+e;return{min:a(s,-Math.abs(o)),max:a(n,o)}}function _i(t,e){return Object.assign(Object.create(t),e)}function yi(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function vi(t,e){let i,s;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=s)}function wi(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Mi(t){return"angle"===t?{between:G,compare:q,normalize:K}:{between:Q,compare:(t,e)=>t-e,normalize:t=>t}}function ki({start:t,end:e,count:i,loop:s,style:n}){return{start:t%i,end:e%i,loop:s&&(e-t+1)%i==0,style:n}}function Si(t,e,i){if(!i)return[t];const{property:s,start:n,end:o}=i,a=e.length,{compare:r,between:l,normalize:h}=Mi(s),{start:c,end:d,loop:u,style:f}=function(t,e,i){const{property:s,start:n,end:o}=i,{between:a,normalize:r}=Mi(s),l=e.length;let h,c,{start:d,end:u,loop:f}=t;if(f){for(d+=l,u+=l,h=0,c=l;h<c&&a(r(e[d%l][s]),n,o);++h)d--,u--;d%=l,u%=l}return u<d&&(u+=l),{start:d,end:u,loop:f,style:t.style}}(t,e,i),g=[];let p,m,b,x=!1,_=null;const y=()=>x||l(n,b,p)&&0!==r(n,b),v=()=>!x||0===r(o,p)||l(o,b,p);for(let t=c,i=c;t<=d;++t)m=e[t%a],m.skip||(p=h(m[s]),p!==b&&(x=l(p,n,o),null===_&&y()&&(_=0===r(p,n)?t:i),null!==_&&v()&&(g.push(ki({start:_,end:t,loop:u,count:a,style:f})),_=null),i=t,b=p));return null!==_&&g.push(ki({start:_,end:d,loop:u,count:a,style:f})),g}function Pi(t,e){const i=[],s=t.segments;for(let n=0;n<s.length;n++){const o=Si(s[n],t.points,e);o.length&&i.push(...o)}return i}function Di(t,e){const i=t.points,s=t.options.spanGaps,n=i.length;if(!n)return[];const o=!!t._loop,{start:a,end:r}=function(t,e,i,s){let n=0,o=e-1;if(i&&!s)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(o+=n);o>n&&t[o%e].skip;)o--;return o%=e,{start:n,end:o}}(i,n,o,s);if(!0===s)return Oi(t,[{start:a,end:r,loop:o}],i,e);return Oi(t,function(t,e,i,s){const n=t.length,o=[];let a,r=e,l=t[e];for(a=e+1;a<=i;++a){const i=t[a%n];i.skip||i.stop?l.skip||(s=!1,o.push({start:e%n,end:(a-1)%n,loop:s}),e=r=i.stop?a:null):(r=a,l.skip&&(e=a)),l=i}return null!==r&&o.push({start:e%n,end:r%n,loop:s}),o}(i,a,r<a?r+n:r,!!t._fullLoop&&0===a&&r===n-1),i,e)}function Oi(t,e,i,s){return s&&s.setContext&&i?function(t,e,i,s){const n=t._chart.getContext(),o=Ci(t.options),{_datasetIndex:a,options:{spanGaps:r}}=t,l=i.length,h=[];let c=o,d=e[0].start,u=d;function f(t,e,s,n){const o=r?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=o;for(;i[e%l].skip;)e+=o;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:s,style:n}),c=n,d=e%l)}}for(const t of e){d=r?d:t.start;let e,o=i[d%l];for(u=d+1;u<=t.end;u++){const r=i[u%l];e=Ci(s.setContext(_i(n,{type:"segment",p0:o,p1:r,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:a}))),Ai(e,c)&&f(d,u-1,t.loop,c),o=r,c=e}d<u-1&&f(d,u-1,t.loop,c)}return h}(t,e,i,s):e}function Ci(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Ai(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var Ti=Object.freeze({__proto__:null,easingEffects:si,isPatternOrGradient:Zt,color:Jt,getHoverColor:Qt,noop:t,uid:e,isNullOrUndef:i,isArray:s,isObject:n,isFinite:o,finiteOrDefault:a,valueOrDefault:r,toPercentage:l,toDimension:h,callback:c,each:d,_elementsEqual:u,clone:f,_merger:p,merge:m,mergeIf:b,_mergerIf:x,_deprecated:function(t,e,i,s){void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+s+'" instead')},resolveObjectKey:y,_splitKey:v,_capitalize:w,defined:M,isFunction:k,setsEqual:S,_isClickEvent:P,toFontString:xe,_measureText:_e,_longestText:ye,_alignPixel:ve,clearCanvas:we,drawPoint:Me,drawPointLegend:ke,_isPointInArea:Se,clipArea:Pe,unclipArea:De,_steppedLineTo:Oe,_bezierCurveTo:Ce,renderText:Ae,addRoundedRectPath:Le,_lookup:tt,_lookupByKey:et,_rlookupByKey:it,_filterBetween:st,listenArrayEvents:ot,unlistenArrayEvents:at,_arrayUnique:rt,_createResolver:Ee,_attachContext:Re,_descriptors:Ie,_parseObjectDataRadialScale:Ue,splineCurve:Ge,splineCurveMonotone:Ze,_updateBezierControlPoints:Qe,_isDomSupported:oe,_getParentNode:ae,getStyle:he,getRelativePosition:ue,getMaximumSize:ge,retinaScale:pe,supportsEventListenerOptions:me,readUsedSize:be,fontString:function(t,e,i){return e+" "+t+"px "+i},requestAnimFrame:lt,throttled:ht,debounce:ct,_toLeftRightCenter:dt,_alignStartEnd:ut,_textX:ft,_getStartAndCountOfVisiblePoints:gt,_scaleRangesChanged:pt,_pointInLine:ni,_steppedInterpolation:oi,_bezierInterpolation:ai,formatNumber:li,toLineHeight:di,_readValueToProps:ui,toTRBL:fi,toTRBLCorners:gi,toPadding:pi,toFont:mi,resolve:bi,_addGrace:xi,createContext:_i,PI:D,TAU:O,PITAU:C,INFINITY:A,RAD_PER_DEG:T,HALF_PI:L,QUARTER_PI:E,TWO_THIRDS_PI:R,log10:I,sign:z,niceNum:F,_factorize:V,isNumber:B,almostEquals:N,almostWhole:W,_setMinAndMaxByKey:j,toRadians:H,toDegrees:$,_decimalPlaces:Y,getAngleFromPoint:U,distanceBetweenPoints:X,_angleDiff:q,_normalizeAngle:K,_angleBetween:G,_limitValue:Z,_int16Range:J,_isBetween:Q,getRtlAdapter:yi,overrideTextDirection:vi,restoreTextDirection:wi,_boundSegment:Si,_boundSegments:Pi,_computeSegments:Di});function Li(t,e,i,s){const{controller:n,data:o,_sorted:a}=t,r=n._cachedMeta.iScale;if(r&&e===r.axis&&"r"!==e&&a&&o.length){const t=r._reversePixels?it:et;if(!s)return t(o,e,i);if(n._sharedOptions){const s=o[0],n="function"==typeof s.getRange&&s.getRange(e);if(n){const s=t(o,e,i-n),a=t(o,e,i+n);return{lo:s.lo,hi:a.hi}}}}return{lo:0,hi:o.length-1}}function Ei(t,e,i,s,n){const o=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=o.length;t<i;++t){const{index:i,data:r}=o[t],{lo:l,hi:h}=Li(o[t],e,a,n);for(let t=l;t<=h;++t){const e=r[t];e.skip||s(e,i,t)}}}function Ri(t,e,i,s,n){const o=[];if(!n&&!t.isPointInArea(e))return o;return Ei(t,i,e,(function(i,a,r){(n||Se(i,t.chartArea,0))&&i.inRange(e.x,e.y,s)&&o.push({element:i,datasetIndex:a,index:r})}),!0),o}function Ii(t,e,i,s,n,o){let a=[];const r=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,s){const n=e?Math.abs(t.x-s.x):0,o=i?Math.abs(t.y-s.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}}(i);let l=Number.POSITIVE_INFINITY;return Ei(t,i,e,(function(i,h,c){const d=i.inRange(e.x,e.y,n);if(s&&!d)return;const u=i.getCenterPoint(n);if(!(!!o||t.isPointInArea(u))&&!d)return;const f=r(e,u);f<l?(a=[{element:i,datasetIndex:h,index:c}],l=f):f===l&&a.push({element:i,datasetIndex:h,index:c})})),a}function zi(t,e,i,s,n,o){return o||t.isPointInArea(e)?"r"!==i||s?Ii(t,e,i,s,n,o):function(t,e,i,s){let n=[];return Ei(t,i,e,(function(t,i,o){const{startAngle:a,endAngle:r}=t.getProps(["startAngle","endAngle"],s),{angle:l}=U(t,{x:e.x,y:e.y});G(l,a,r)&&n.push({element:t,datasetIndex:i,index:o})})),n}(t,e,i,n):[]}function Fi(t,e,i,s,n){const o=[],a="x"===i?"inXRange":"inYRange";let r=!1;return Ei(t,i,e,((t,s,l)=>{t[a](e[i],n)&&(o.push({element:t,datasetIndex:s,index:l}),r=r||t.inRange(e.x,e.y,n))})),s&&!r?[]:o}var Vi={evaluateInteractionItems:Ei,modes:{index(t,e,i,s){const n=ue(e,t),o=i.axis||"x",a=i.includeInvisible||!1,r=i.intersect?Ri(t,n,o,s,a):zi(t,n,o,!1,s,a),l=[];return r.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=r[0].index,i=t.data[e];i&&!i.skip&&l.push({element:i,datasetIndex:t.index,index:e})})),l):[]},dataset(t,e,i,s){const n=ue(e,t),o=i.axis||"xy",a=i.includeInvisible||!1;let r=i.intersect?Ri(t,n,o,s,a):zi(t,n,o,!1,s,a);if(r.length>0){const e=r[0].datasetIndex,i=t.getDatasetMeta(e).data;r=[];for(let t=0;t<i.length;++t)r.push({element:i[t],datasetIndex:e,index:t})}return r},point:(t,e,i,s)=>Ri(t,ue(e,t),i.axis||"xy",s,i.includeInvisible||!1),nearest(t,e,i,s){const n=ue(e,t),o=i.axis||"xy",a=i.includeInvisible||!1;return zi(t,n,o,i.intersect,s,a)},x:(t,e,i,s)=>Fi(t,ue(e,t),"x",i.intersect,s),y:(t,e,i,s)=>Fi(t,ue(e,t),"y",i.intersect,s)}};const Bi=["left","top","right","bottom"];function Ni(t,e){return t.filter((t=>t.pos===e))}function Wi(t,e){return t.filter((t=>-1===Bi.indexOf(t.pos)&&t.box.axis===e))}function ji(t,e){return t.sort(((t,i)=>{const s=e?i:t,n=e?t:i;return s.weight===n.weight?s.index-n.index:s.weight-n.weight}))}function Hi(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:s,stackWeight:n}=i;if(!t||!Bi.includes(s))continue;const o=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=n}return e}(t),{vBoxMaxWidth:s,hBoxMaxHeight:n}=e;let o,a,r;for(o=0,a=t.length;o<a;++o){r=t[o];const{fullSize:a}=r.box,l=i[r.stack],h=l&&r.stackWeight/l.weight;r.horizontal?(r.width=h?h*s:a&&e.availableWidth,r.height=n):(r.width=s,r.height=h?h*n:a&&e.availableHeight)}return i}function $i(t,e,i,s){return Math.max(t[i],e[i])+Math.max(t[s],e[s])}function Yi(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Ui(t,e,i,s){const{pos:o,box:a}=i,r=t.maxPadding;if(!n(o)){i.size&&(t[o]-=i.size);const e=s[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?a.height:a.width),i.size=e.size/e.count,t[o]+=i.size}a.getPadding&&Yi(r,a.getPadding());const l=Math.max(0,e.outerWidth-$i(r,t,"left","right")),h=Math.max(0,e.outerHeight-$i(r,t,"top","bottom")),c=l!==t.w,d=h!==t.h;return t.w=l,t.h=h,i.horizontal?{same:c,other:d}:{same:d,other:c}}function Xi(t,e){const i=e.maxPadding;function s(t){const s={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{s[t]=Math.max(e[t],i[t])})),s}return s(t?["left","right"]:["top","bottom"])}function qi(t,e,i,s){const n=[];let o,a,r,l,h,c;for(o=0,a=t.length,h=0;o<a;++o){r=t[o],l=r.box,l.update(r.width||e.w,r.height||e.h,Xi(r.horizontal,e));const{same:a,other:d}=Ui(e,i,r,s);h|=a&&n.length,c=c||d,l.fullSize||n.push(r)}return h&&qi(n,e,i,s)||c}function Ki(t,e,i,s,n){t.top=i,t.left=e,t.right=e+s,t.bottom=i+n,t.width=s,t.height=n}function Gi(t,e,i,s){const n=i.padding;let{x:o,y:a}=e;for(const r of t){const t=r.box,l=s[r.stack]||{count:1,placed:0,weight:1},h=r.stackWeight/l.weight||1;if(r.horizontal){const s=e.w*h,o=l.size||t.height;M(l.start)&&(a=l.start),t.fullSize?Ki(t,n.left,a,i.outerWidth-n.right-n.left,o):Ki(t,e.left+l.placed,a,s,o),l.start=a,l.placed+=s,a=t.bottom}else{const s=e.h*h,a=l.size||t.width;M(l.start)&&(o=l.start),t.fullSize?Ki(t,o,n.top,a,i.outerHeight-n.bottom-n.top):Ki(t,o,e.top+l.placed,a,s),l.start=o,l.placed+=s,o=t.right}}e.x=o,e.y=a}ne.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var Zi={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,s){if(!t)return;const n=pi(t.options.layout.padding),o=Math.max(e-n.width,0),a=Math.max(i-n.height,0),r=function(t){const e=function(t){const e=[];let i,s,n,o,a,r;for(i=0,s=(t||[]).length;i<s;++i)n=t[i],({position:o,options:{stack:a,stackWeight:r=1}}=n),e.push({index:i,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:a&&o+a,stackWeight:r});return e}(t),i=ji(e.filter((t=>t.box.fullSize)),!0),s=ji(Ni(e,"left"),!0),n=ji(Ni(e,"right")),o=ji(Ni(e,"top"),!0),a=ji(Ni(e,"bottom")),r=Wi(e,"x"),l=Wi(e,"y");return{fullSize:i,leftAndTop:s.concat(o),rightAndBottom:n.concat(l).concat(a).concat(r),chartArea:Ni(e,"chartArea"),vertical:s.concat(n).concat(l),horizontal:o.concat(a).concat(r)}}(t.boxes),l=r.vertical,h=r.horizontal;d(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const c=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,u=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),f=Object.assign({},n);Yi(f,pi(s));const g=Object.assign({maxPadding:f,w:o,h:a,x:n.left,y:n.top},n),p=Hi(l.concat(h),u);qi(r.fullSize,g,u,p),qi(l,g,u,p),qi(h,g,u,p)&&qi(l,g,u,p),function(t){const e=t.maxPadding;function i(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(g),Gi(r.leftAndTop,g,u,p),g.x+=g.w,g.y+=g.h,Gi(r.rightAndBottom,g,u,p),t.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},d(r.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})}))}};class Ji{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class Qi extends Ji{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ts={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},es=t=>null===t||""===t;const is=!!me&&{passive:!0};function ss(t,e,i){t.canvas.removeEventListener(e,i,is)}function ns(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function os(t,e,i){const s=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||ns(i.addedNodes,s),e=e&&!ns(i.removedNodes,s);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}function as(t,e,i){const s=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||ns(i.removedNodes,s),e=e&&!ns(i.addedNodes,s);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}const rs=new Map;let ls=0;function hs(){const t=window.devicePixelRatio;t!==ls&&(ls=t,rs.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function cs(t,e,i){const s=t.canvas,n=s&&ae(s);if(!n)return;const o=ht(((t,e)=>{const s=n.clientWidth;i(t,e),s<n.clientWidth&&i()}),window),a=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,s=e.contentRect.height;0===i&&0===s||o(i,s)}));return a.observe(n),function(t,e){rs.size||window.addEventListener("resize",hs),rs.set(t,e)}(t,o),a}function ds(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){rs.delete(t),rs.size||window.removeEventListener("resize",hs)}(t)}function us(t,e,i){const s=t.canvas,n=ht((e=>{null!==t.ctx&&i(function(t,e){const i=ts[t.type]||t.type,{x:s,y:n}=ue(t,e);return{type:i,chart:e,native:t,x:void 0!==s?s:null,y:void 0!==n?n:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,is)}(s,e,n),n}class fs extends Ji{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,s=t.getAttribute("height"),n=t.getAttribute("width");if(t.$chartjs={initial:{height:s,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",es(n)){const e=be(t,"width");void 0!==e&&(t.width=e)}if(es(s))if(""===t.style.height)t.height=t.width/(e||2);else{const e=be(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const s=e.$chartjs.initial;["height","width"].forEach((t=>{const n=s[t];i(n)?e.removeAttribute(t):e.setAttribute(t,n)}));const n=s.style||{};return Object.keys(n).forEach((t=>{e.style[t]=n[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),n={attach:os,detach:as,resize:cs}[e]||us;s[e]=n(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:ds,detach:ds,resize:ds}[e]||ss)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return ge(t,e,i,s)}isAttached(t){const e=ae(t);return!(!e||!e.isConnected)}}function gs(t){return!oe()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?Qi:fs}var ps=Object.freeze({__proto__:null,_detectPlatform:gs,BasePlatform:Ji,BasicPlatform:Qi,DomPlatform:fs});const ms="transparent",bs={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const s=Jt(t||ms),n=s.valid&&Jt(e||ms);return n&&n.valid?n.mix(s,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class xs{constructor(t,e,i,s){const n=e[i];s=bi([t.to,s,n,t.from]);const o=bi([t.from,n,s]);this._active=!0,this._fn=t.fn||bs[t.type||typeof o],this._easing=si[t.easing]||si.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],n=i-this._start,o=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=bi([t.to,e,s,t.from]),this._from=bi([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,n=this._from,o=this._loop,a=this._to;let r;if(this._active=n!==a&&(o||e<i),!this._active)return this._target[s]=a,void this._notify(!0);e<0?this._target[s]=n:(r=e/i%2,r=o&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[s]=this._fn(n,a,r))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}ne.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const _s=Object.keys(ne.animation);ne.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),ne.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),ne.describe("animations",{_fallback:"animation"}),ne.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class ys{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!n(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const o=t[i];if(!n(o))return;const a={};for(const t of _s)a[t]=o[t];(s(o.properties)&&o.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,a)}))}))}_animateOptions(t,e){const i=e.options,s=function(t,e){if(!e)return;let i=t.options;if(!i)return void(t.options=e);i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}}));return i}(t,i);if(!s)return[];const n=this._createAnimations(s,i);return i.$shared&&function(t,e){const i=[],s=Object.keys(e);for(let e=0;e<s.length;e++){const n=t[s[e]];n&&n.active()&&i.push(n.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),n}_createAnimations(t,e){const i=this._properties,s=[],n=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let r;for(r=o.length-1;r>=0;--r){const l=o[r];if("$"===l.charAt(0))continue;if("options"===l){s.push(...this._animateOptions(t,e));continue}const h=e[l];let c=n[l];const d=i.get(l);if(c){if(d&&c.active()){c.update(d,h,a);continue}c.cancel()}d&&d.duration?(n[l]=c=new xs(d,t,l,h),s.push(c)):t[l]=h}return s}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(mt.add(this._chart,i),!0):void 0}}function vs(t,e){const i=t&&t.options||{},s=i.reverse,n=void 0===i.min?e:0,o=void 0===i.max?e:0;return{start:s?o:n,end:s?n:o}}function ws(t,e){const i=[],s=t._getSortedDatasetMetas(e);let n,o;for(n=0,o=s.length;n<o;++n)i.push(s[n].index);return i}function Ms(t,e,i,s={}){const n=t.keys,a="single"===s.mode;let r,l,h,c;if(null!==e){for(r=0,l=n.length;r<l;++r){if(h=+n[r],h===i){if(s.all)continue;break}c=t.values[h],o(c)&&(a||0===e||z(e)===z(c))&&(e+=c)}return e}}function ks(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function Ss(t,e,i){const s=t[e]||(t[e]={});return s[i]||(s[i]={})}function Ps(t,e,i,s){for(const n of e.getMatchingVisibleMetas(s).reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function Ds(t,e){const{chart:i,_cachedMeta:s}=t,n=i._stacks||(i._stacks={}),{iScale:o,vScale:a,index:r}=s,l=o.axis,h=a.axis,c=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(o,a,s),d=e.length;let u;for(let t=0;t<d;++t){const i=e[t],{[l]:o,[h]:d}=i;u=(i._stacks||(i._stacks={}))[h]=Ss(n,c,o),u[r]=d,u._top=Ps(u,a,!0,s.type),u._bottom=Ps(u,a,!1,s.type)}}function Os(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Cs(t,e){const i=t.controller.index,s=t.vScale&&t.vScale.axis;if(s){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[s]||void 0===e[s][i])return;delete e[s][i]}}}const As=t=>"reset"===t||"none"===t,Ts=(t,e)=>e?t:Object.assign({},t);class Ls{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ks(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&Cs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(t,e,i,s)=>"x"===t?e:"r"===t?s:i,n=e.xAxisID=r(i.xAxisID,Os(t,"x")),o=e.yAxisID=r(i.yAxisID,Os(t,"y")),a=e.rAxisID=r(i.rAxisID,Os(t,"r")),l=e.indexAxis,h=e.iAxisID=s(l,n,o,a),c=e.vAxisID=s(l,o,n,a);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(h),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&at(this._data,this),t._stacked&&Cs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(n(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let s,n,o;for(s=0,n=e.length;s<n;++s)o=e[s],i[s]={x:o,y:t[o]};return i}(e);else if(i!==e){if(i){at(i,this);const t=this._cachedMeta;Cs(t),t._parsed=[]}e&&Object.isExtensible(e)&&ot(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const n=e._stacked;e._stacked=ks(e.vScale,e),e.stack!==i.stack&&(s=!0,Cs(e),e.stack=i.stack),this._resyncElements(t),(s||n!==e._stacked)&&Ds(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:r}=i,l=a.axis;let h,c,d,u=0===t&&e===o.length||i._sorted,f=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=o,i._sorted=!0,d=o;else{d=s(o[t])?this.parseArrayData(i,o,t,e):n(o[t])?this.parseObjectData(i,o,t,e):this.parsePrimitiveData(i,o,t,e);const a=()=>null===c[l]||f&&c[l]<f[l];for(h=0;h<e;++h)i._parsed[h+t]=c=d[h],u&&(a()&&(u=!1),f=c);i._sorted=u}r&&Ds(this,d)}parsePrimitiveData(t,e,i,s){const{iScale:n,vScale:o}=t,a=n.axis,r=o.axis,l=n.getLabels(),h=n===o,c=new Array(s);let d,u,f;for(d=0,u=s;d<u;++d)f=d+i,c[d]={[a]:h||n.parse(l[f],f),[r]:o.parse(e[f],f)};return c}parseArrayData(t,e,i,s){const{xScale:n,yScale:o}=t,a=new Array(s);let r,l,h,c;for(r=0,l=s;r<l;++r)h=r+i,c=e[h],a[r]={x:n.parse(c[0],h),y:o.parse(c[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:n,yScale:o}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l=new Array(s);let h,c,d,u;for(h=0,c=s;h<c;++h)d=h+i,u=e[d],l[h]={x:n.parse(y(u,a),d),y:o.parse(y(u,r),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,n=this._cachedMeta,o=e[t.axis];return Ms({keys:ws(s,!0),values:e._stacks[t.axis]},o,n.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const n=i[e.axis];let o=null===n?NaN:n;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Ms(s,n,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,n=i._sorted&&t===i.iScale,a=s.length,r=this._getOtherScale(t),l=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:ws(i,!0),values:null})(e,i,this.chart),h={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=function(t){const{min:e,max:i,minDefined:s,maxDefined:n}=t.getUserBounds();return{min:s?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(r);let u,f;function g(){f=s[u];const e=f[r.axis];return!o(f[t.axis])||c>e||d<e}for(u=0;u<a&&(g()||(this.updateRangeFromParsed(h,t,f,l),!n));++u);if(n)for(u=a-1;u>=0;--u)if(!g()){this.updateRangeFromParsed(h,t,f,l);break}return h}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,n,a;for(s=0,n=e.length;s<n;++s)a=e[s][t.axis],o(a)&&i.push(a);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,n=this.getParsed(t);return{label:i?""+i.getLabelForValue(n[i.axis]):"",value:s?""+s.getLabelForValue(n[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,s,o;return n(t)?(e=t.top,i=t.right,s=t.bottom,o=t.left):e=i=s=o=t,{top:e,right:i,bottom:s,left:o,disabled:!1===t}}(r(this.options.clip,function(t,e,i){if(!1===i)return!1;const s=vs(t,i),n=vs(e,i);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],n=e.chartArea,o=[],a=this._drawStart||0,r=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,n,a,r),h=a;h<a+r;++h){const e=s[h];e.hidden||(e.active&&l?o.push(e):e.draw(t,n))}for(h=0;h<o.length;++h)o[h].draw(t,n)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];n=e.$context||(e.$context=function(t,e,i){return _i(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),n.parsed=this.getParsed(t),n.raw=s.data[t],n.index=n.dataIndex=t}else n=this.$context||(this.$context=function(t,e){return _i(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),n.dataset=s,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s="active"===e,n=this._cachedDataOpts,o=t+"-"+e,a=n[o],r=this.enableOptionSharing&&M(i);if(a)return Ts(a,r);const l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),c=s?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),h),u=Object.keys(ne.elements[t]),f=l.resolveNamedOptions(d,u,(()=>this.getContext(i,s)),c);return f.$shared&&(f.$shared=r,n[o]=Object.freeze(Ts(f,r))),f}_resolveAnimations(t,e,i){const s=this.chart,n=this._cachedDataOpts,o=`animation-${e}`,a=n[o];if(a)return a;let r;if(!1!==s.options.animation){const s=this.chart.config,n=s.datasetAnimationScopeKeys(this._type,e),o=s.getOptionScopes(this.getDataset(),n);r=s.createResolver(o,this.getContext(t,i,e))}const l=new ys(s,r&&r.animations);return r&&r._cacheable&&(n[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||As(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,n=this.getSharedOptions(i),o=this.includeOptions(e,n)||n!==s;return this.updateSharedOptions(n,e,i),{sharedOptions:n,includeOptions:o}}updateElement(t,e,i,s){As(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!As(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const n=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const s=i.length,n=e.length,o=Math.min(n,s);o&&this.parse(0,o),n>s?this._insertElements(s,n-s,t):n<s&&this._removeElements(n,s-n)}_insertElements(t,e,i=!0){const s=this._cachedMeta,n=s.data,o=t+e;let a;const r=t=>{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[a-e]};for(r(n),a=t;a<o;++a)n[a]=new this.dataElementType;this._parsing&&r(s._parsed),this.parse(t,e),i&&this.updateElements(n,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Cs(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}Ls.defaults={},Ls.prototype.datasetElementType=null,Ls.prototype.dataElementType=null;class Es{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return B(this.x)&&B(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach((t=>{s[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),s}}Es.defaults={},Es.defaultRoutes=void 0;const Rs={values:t=>s(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const s=this.chart.options.locale;let n,o=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(n="scientific"),o=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t));return i}(t,i)}const a=I(Math.abs(o)),r=Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),li(t,s,l)},logarithmic(t,e,i){if(0===t)return"0";const s=t/Math.pow(10,Math.floor(I(t)));return 1===s||2===s||5===s?Rs.numeric.call(this,t,e,i):""}};var Is={formatters:Rs};function zs(t,e){const s=t.options.ticks,n=s.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),s=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(s,n))}(t),o=s.major.enabled?function(t){const e=[];let i,s;for(i=0,s=t.length;i<s;i++)t[i].major&&e.push(i);return e}(e):[],a=o.length,r=o[0],l=o[a-1],h=[];if(a>n)return function(t,e,i,s){let n,o=0,a=i[0];for(s=Math.ceil(s),n=0;n<t.length;n++)n===a&&(e.push(t[n]),o++,a=i[o*s])}(e,h,o,a/n),h;const c=function(t,e,i){const s=function(t){const e=t.length;let i,s;if(e<2)return!1;for(s=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==s)return!1;return s}(t),n=e.length/i;if(!s)return Math.max(n,1);const o=V(s);for(let t=0,e=o.length-1;t<e;t++){const e=o[t];if(e>n)return e}return Math.max(n,1)}(o,e,n);if(a>0){let t,s;const n=a>1?Math.round((l-r)/(a-1)):null;for(Fs(e,h,c,i(n)?0:r-n,r),t=0,s=a-1;t<s;t++)Fs(e,h,c,o[t],o[t+1]);return Fs(e,h,c,l,i(n)?e.length:l+n),h}return Fs(e,h,c),h}function Fs(t,e,i,s,n){const o=r(s,0),a=Math.min(r(n,t.length),t.length);let l,h,c,d=0;for(i=Math.ceil(i),n&&(l=n-s,i=l/Math.floor(l/i)),c=o;c<0;)d++,c=Math.round(o+d*i);for(h=Math.max(o,0);h<a;h++)h===c&&(e.push(t[h]),d++,c=Math.round(o+d*i))}ne.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Is.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),ne.route("scale.ticks","color","","color"),ne.route("scale.grid","color","","borderColor"),ne.route("scale.grid","borderColor","","borderColor"),ne.route("scale.title","color","","color"),ne.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),ne.describe("scales",{_fallback:"scale"}),ne.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Vs=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Bs(t,e){const i=[],s=t.length/e,n=t.length;let o=0;for(;o<n;o+=s)i.push(t[Math.floor(o)]);return i}function Ns(t,e,i){const s=t.ticks.length,n=Math.min(e,s-1),o=t._startPixel,a=t._endPixel,r=1e-6;let l,h=t.getPixelForTick(n);if(!(i&&(l=1===s?Math.max(h-o,a-h):0===e?(t.getPixelForTick(1)-h)/2:(h-t.getPixelForTick(n-1))/2,h+=n<e?l:-l,h<o-r||h>a+r)))return h}function Ws(t){return t.drawTicks?t.tickLength:0}function js(t,e){if(!t.display)return 0;const i=mi(t.font,e),n=pi(t.padding);return(s(t.text)?t.text.length:1)*i.lineHeight+n.height}function Hs(t,e,i){let s=dt(t);return(i&&"right"!==e||!i&&"right"===e)&&(s=(t=>"left"===t?"right":"right"===t?"left":t)(s)),s}class $s extends Es{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=a(t,Number.POSITIVE_INFINITY),e=a(e,Number.NEGATIVE_INFINITY),i=a(i,Number.POSITIVE_INFINITY),s=a(s,Number.NEGATIVE_INFINITY),{min:a(t,i),max:a(e,s),minDefined:o(t),maxDefined:o(e)}}getMinMax(t){let e,{min:i,max:s,minDefined:n,maxDefined:o}=this.getUserBounds();if(n&&o)return{min:i,max:s};const r=this.getMatchingVisibleMetas();for(let a=0,l=r.length;a<l;++a)e=r[a].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),o||(s=Math.max(s,e.max));return i=o&&i>s?s:i,s=n&&i>s?i:s,{min:a(i,a(s,i)),max:a(s,a(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){c(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:n,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=xi(this,n,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=a<this.ticks.length;this._convertTicksToLabels(r?Bs(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(this.ticks=zs(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){c(this.options.afterUpdate,[this])}beforeSetDimensions(){c(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){c(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),c(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){c(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,n;for(i=0,s=t.length;i<s;i++)n=t[i],n.label=c(e.callback,[n.value,i,t],this)}afterTickToLabelConversion(){c(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){c(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,s=e.minRotation||0,n=e.maxRotation;let o,a,r,l=s;if(!this._isVisible()||!e.display||s>=n||i<=1||!this.isHorizontal())return void(this.labelRotation=s);const h=this._getLabelSizes(),c=h.widest.width,d=h.highest.height,u=Z(this.chart.width-c,0,this.maxWidth);o=t.offset?this.maxWidth/i:u/(i-1),c+6>o&&(o=u/(i-(t.offset?.5:1)),a=this.maxHeight-Ws(t.grid)-e.padding-js(t.title,this.chart.options.font),r=Math.sqrt(c*c+d*d),l=$(Math.min(Math.asin(Z((h.highest.height+6)/o,-1,1)),Math.asin(Z(a/r,-1,1))-Math.asin(Z(d/r,-1,1)))),l=Math.max(s,Math.min(n,l))),this.labelRotation=l}afterCalculateLabelRotation(){c(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){c(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:n}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=js(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ws(n)+o):(t.height=this.maxHeight,t.width=Ws(n)+o),i.display&&this.ticks.length){const{first:e,last:s,widest:n,highest:o}=this._getLabelSizes(),r=2*i.padding,l=H(this.labelRotation),h=Math.cos(l),c=Math.sin(l);if(a){const e=i.mirror?0:c*n.width+h*o.height;t.height=Math.min(this.maxHeight,t.height+e+r)}else{const e=i.mirror?0:h*n.width+c*o.height;t.width=Math.min(this.maxWidth,t.width+e+r)}this._calculatePadding(e,s,c,h)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:n,padding:o},position:a}=this.options,r=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){const a=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let c=0,d=0;r?l?(c=s*t.width,d=i*e.height):(c=i*t.height,d=s*e.width):"start"===n?d=e.width:"end"===n?c=t.width:"inner"!==n&&(c=t.width/2,d=e.width/2),this.paddingLeft=Math.max((c-a+o)*this.width/(this.width-a),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let i=e.height/2,s=t.height/2;"start"===n?(i=0,s=t.height):"end"===n&&(i=e.height,s=0),this.paddingTop=i+o,this.paddingBottom=s+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){c(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,s;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,s=t.length;e<s;e++)i(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Bs(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:n,_longestTextCache:o}=this,a=[],r=[];let l,h,c,u,f,g,p,m,b,x,_,y=0,v=0;for(l=0;l<e;++l){if(u=t[l].label,f=this._resolveTickFontOptions(l),n.font=g=f.string,p=o[g]=o[g]||{data:{},gc:[]},m=f.lineHeight,b=x=0,i(u)||s(u)){if(s(u))for(h=0,c=u.length;h<c;++h)_=u[h],i(_)||s(_)||(b=_e(n,p.data,p.gc,b,_),x+=m)}else b=_e(n,p.data,p.gc,b,u),x=m;a.push(b),r.push(x),y=Math.max(b,y),v=Math.max(x,v)}!function(t,e){d(t,(t=>{const i=t.gc,s=i.length/2;let n;if(s>e){for(n=0;n<s;++n)delete t.data[i[n]];i.splice(0,s)}}))}(o,e);const w=a.indexOf(y),M=r.indexOf(v),k=t=>({width:a[t]||0,height:r[t]||0});return{first:k(0),last:k(e-1),widest:k(w),highest:k(M),widths:a,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return J(this._alignToPixels?ve(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return _i(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=_i(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=H(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),n=this._getLabelSizes(),o=t.autoSkipPadding||0,a=n?n.widest.width+o:0,r=n?n.highest.height+o:0;return this.isHorizontal()?r*i>a*s?a/i:r/s:r*s<a*i?r/i:a/s}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:o,position:a}=s,l=o.offset,h=this.isHorizontal(),c=this.ticks.length+(l?1:0),d=Ws(o),u=[],f=o.setContext(this.getContext()),g=f.drawBorder?f.borderWidth:0,p=g/2,m=function(t){return ve(i,t,g)};let b,x,_,y,v,w,M,k,S,P,D,O;if("top"===a)b=m(this.bottom),w=this.bottom-d,k=b-p,P=m(t.top)+p,O=t.bottom;else if("bottom"===a)b=m(this.top),P=t.top,O=m(t.bottom)-p,w=b+p,k=this.top+d;else if("left"===a)b=m(this.right),v=this.right-d,M=b-p,S=m(t.left)+p,D=t.right;else if("right"===a)b=m(this.left),S=t.left,D=m(t.right)-p,v=b+p,M=this.left+d;else if("x"===e){if("center"===a)b=m((t.top+t.bottom)/2+.5);else if(n(a)){const t=Object.keys(a)[0],e=a[t];b=m(this.chart.scales[t].getPixelForValue(e))}P=t.top,O=t.bottom,w=b+p,k=w+d}else if("y"===e){if("center"===a)b=m((t.left+t.right)/2);else if(n(a)){const t=Object.keys(a)[0],e=a[t];b=m(this.chart.scales[t].getPixelForValue(e))}v=b-p,M=v-d,S=t.left,D=t.right}const C=r(s.ticks.maxTicksLimit,c),A=Math.max(1,Math.ceil(c/C));for(x=0;x<c;x+=A){const t=o.setContext(this.getContext(x)),e=t.lineWidth,s=t.color,n=t.borderDash||[],a=t.borderDashOffset,r=t.tickWidth,c=t.tickColor,d=t.tickBorderDash||[],f=t.tickBorderDashOffset;_=Ns(this,x,l),void 0!==_&&(y=ve(i,_,e),h?v=M=S=D=y:w=k=P=O=y,u.push({tx1:v,ty1:w,tx2:M,ty2:k,x1:S,y1:P,x2:D,y2:O,width:e,color:s,borderDash:n,borderDashOffset:a,tickWidth:r,tickColor:c,tickBorderDash:d,tickBorderDashOffset:f}))}return this._ticksLength=c,this._borderValue=b,u}_computeLabelItems(t){const e=this.axis,i=this.options,{position:o,ticks:a}=i,r=this.isHorizontal(),l=this.ticks,{align:h,crossAlign:c,padding:d,mirror:u}=a,f=Ws(i.grid),g=f+d,p=u?-d:g,m=-H(this.labelRotation),b=[];let x,_,y,v,w,M,k,S,P,D,O,C,A="middle";if("top"===o)M=this.bottom-p,k=this._getXAxisLabelAlignment();else if("bottom"===o)M=this.top+p,k=this._getXAxisLabelAlignment();else if("left"===o){const t=this._getYAxisLabelAlignment(f);k=t.textAlign,w=t.x}else if("right"===o){const t=this._getYAxisLabelAlignment(f);k=t.textAlign,w=t.x}else if("x"===e){if("center"===o)M=(t.top+t.bottom)/2+g;else if(n(o)){const t=Object.keys(o)[0],e=o[t];M=this.chart.scales[t].getPixelForValue(e)+g}k=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===o)w=(t.left+t.right)/2-g;else if(n(o)){const t=Object.keys(o)[0],e=o[t];w=this.chart.scales[t].getPixelForValue(e)}k=this._getYAxisLabelAlignment(f).textAlign}"y"===e&&("start"===h?A="top":"end"===h&&(A="bottom"));const T=this._getLabelSizes();for(x=0,_=l.length;x<_;++x){y=l[x],v=y.label;const t=a.setContext(this.getContext(x));S=this.getPixelForTick(x)+a.labelOffset,P=this._resolveTickFontOptions(x),D=P.lineHeight,O=s(v)?v.length:1;const e=O/2,i=t.color,n=t.textStrokeColor,h=t.textStrokeWidth;let d,f=k;if(r?(w=S,"inner"===k&&(f=x===_-1?this.options.reverse?"left":"right":0===x?this.options.reverse?"right":"left":"center"),C="top"===o?"near"===c||0!==m?-O*D+D/2:"center"===c?-T.highest.height/2-e*D+D:-T.highest.height+D/2:"near"===c||0!==m?D/2:"center"===c?T.highest.height/2-e*D:T.highest.height-O*D,u&&(C*=-1)):(M=S,C=(1-O)*D/2),t.showLabelBackdrop){const e=pi(t.backdropPadding),i=T.heights[x],s=T.widths[x];let n=M+C-e.top,o=w-e.left;switch(A){case"middle":n-=i/2;break;case"bottom":n-=i}switch(k){case"center":o-=s/2;break;case"right":o-=s}d={left:o,top:n,width:s+e.width,height:i+e.height,color:t.backdropColor}}b.push({rotation:m,label:v,font:P,color:i,strokeColor:n,strokeWidth:h,textOffset:C,textAlign:f,textBaseline:A,translation:[w,M],backdrop:d})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-H(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align?i="right":"inner"===e.align&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:n}}=this.options,o=t+n,a=this._getLabelSizes().widest.width;let r,l;return"left"===e?s?(l=this.right+n,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l+=a)):(l=this.right-o,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l=this.left)):"right"===e?s?(l=this.left+n,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l-=a)):(l=this.left+o,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l=this.right)):r="right",{textAlign:r,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:n,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,n,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));if(i>=0){return e.setContext(this.getContext(i)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,o;const a=(t,e,s)=>{s.width&&s.color&&(i.save(),i.lineWidth=s.width,i.strokeStyle=s.color,i.setLineDash(s.borderDash||[]),i.lineDashOffset=s.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(n=0,o=s.length;n<o;++n){const t=s[n];e.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:i}}=this,s=i.setContext(this.getContext()),n=i.drawBorder?s.borderWidth:0;if(!n)return;const o=i.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let r,l,h,c;this.isHorizontal()?(r=ve(t,this.left,n)-n/2,l=ve(t,this.right,o)+o/2,h=c=a):(h=ve(t,this.top,n)-n/2,c=ve(t,this.bottom,o)+o/2,r=l=a),e.save(),e.lineWidth=s.borderWidth,e.strokeStyle=s.borderColor,e.beginPath(),e.moveTo(r,h),e.lineTo(l,c),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&Pe(e,i);const s=this._labelItems||(this._labelItems=this._computeLabelItems(t));let n,o;for(n=0,o=s.length;n<o;++n){const t=s[n],i=t.font,o=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),Ae(e,o,0,t.textOffset,i,t)}i&&De(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;const a=mi(i.font),r=pi(i.padding),l=i.align;let h=a.lineHeight/2;"bottom"===e||"center"===e||n(e)?(h+=r.bottom,s(i.text)&&(h+=a.lineHeight*(i.text.length-1))):h+=r.top;const{titleX:c,titleY:d,maxWidth:u,rotation:f}=function(t,e,i,s){const{top:o,left:a,bottom:r,right:l,chart:h}=t,{chartArea:c,scales:d}=h;let u,f,g,p=0;const m=r-o,b=l-a;if(t.isHorizontal()){if(f=ut(s,a,l),n(i)){const t=Object.keys(i)[0],s=i[t];g=d[t].getPixelForValue(s)+m-e}else g="center"===i?(c.bottom+c.top)/2+m-e:Vs(t,i,e);u=l-a}else{if(n(i)){const t=Object.keys(i)[0],s=i[t];f=d[t].getPixelForValue(s)-b+e}else f="center"===i?(c.left+c.right)/2-b+e:Vs(t,i,e);g=ut(s,r,o),p="left"===i?-L:L}return{titleX:f,titleY:g,maxWidth:u,rotation:p}}(this,h,e,l);Ae(t,i.text,0,0,a,{color:i.color,maxWidth:u,rotation:f,textAlign:Hs(l,e,o),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=r(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===$s.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let n,o;for(n=0,o=e.length;n<o;++n){const o=e[n];o[i]!==this.id||t&&o.type!==t||s.push(o)}return s}_resolveTickFontOptions(t){return mi(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ys{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const s=this.items,n=t.id,o=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in s||(s[n]=t,function(t,e,i){const s=m(Object.create(null),[i?ne.get(i):{},ne.get(e),t.defaults]);ne.set(e,s),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const s=i.split("."),n=s.pop(),o=[t].concat(s).join("."),a=e[i].split("."),r=a.pop(),l=a.join(".");ne.route(o,n,l,r)}))}(e,t.defaultRoutes);t.descriptors&&ne.describe(e,t.descriptors)}(t,o,i),this.override&&ne.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in ne[s]&&(delete ne[s][i],this.override&&delete te[i])}}var Us=new class{constructor(){this.controllers=new Ys(Ls,"datasets",!0),this.elements=new Ys(Es,"elements"),this.plugins=new Ys(Object,"plugins"),this.scales=new Ys($s,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const s=i||this._getRegistryForType(e);i||s.isForType(e)||s===this.plugins&&e.id?this._exec(t,s,e):d(e,(e=>{const s=i||this._getRegistryForType(e);this._exec(t,s,e)}))}))}_exec(t,e,i){const s=w(t);c(i["before"+s],[],i),e[t](i),c(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(void 0===s)throw new Error('"'+t+'" is not a registered '+i+".");return s}};class Xs{constructor(){this._init=[]}notify(t,e,i,s){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const n=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(n,t,e,i);return"afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,i,s){s=s||{};for(const n of t){const t=n.plugin;if(!1===c(t[i],[e,s,n.options],t)&&s.cancelable)return!1}return!0}invalidate(){i(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=r(i.options&&i.options.plugins,{}),n=function(t){const e={},i=[],s=Object.keys(Us.plugins.items);for(let t=0;t<s.length;t++)i.push(Us.getPlugin(s[t]));const n=t.plugins||[];for(let t=0;t<n.length;t++){const s=n[t];-1===i.indexOf(s)&&(i.push(s),e[s.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==s||e?function(t,{plugins:e,localIds:i},s,n){const o=[],a=t.getContext();for(const r of e){const e=r.id,l=qs(s[e],n);null!==l&&o.push({plugin:r,options:Ks(t.config,{plugin:r,local:i[e]},l,a)})}return o}(t,n,s,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function qs(t,e){return e||!1!==t?!0===t?{}:t:null}function Ks(t,{plugin:e,local:i},s,n){const o=t.pluginScopeKeys(e),a=t.getOptionScopes(s,o);return i&&e.defaults&&a.push(e.defaults),t.createResolver(a,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Gs(t,e){const i=ne.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Zs(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function Js(t){const e=t.options||(t.options={});e.plugins=r(e.plugins,{}),e.scales=function(t,e){const i=te[t.type]||{scales:{}},s=e.scales||{},o=Gs(t.type,e),a=Object.create(null),r=Object.create(null);return Object.keys(s).forEach((t=>{const e=s[t];if(!n(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const l=Zs(t,e),h=function(t,e){return t===e?"_index_":"_value_"}(l,o),c=i.scales||{};a[l]=a[l]||t,r[t]=b(Object.create(null),[{axis:l},e,c[l],c[h]])})),t.data.datasets.forEach((i=>{const n=i.type||t.type,o=i.indexAxis||Gs(n,e),l=(te[n]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,o),n=i[e+"AxisID"]||a[e]||e;r[n]=r[n]||Object.create(null),b(r[n],[{axis:e},s[n],l[t]])}))})),Object.keys(r).forEach((t=>{const e=r[t];b(e,[ne.scales[e.type],ne.scale])})),r}(t,e)}function Qs(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const tn=new Map,en=new Set;function sn(t,e){let i=tn.get(t);return i||(i=e(),tn.set(t,i),en.add(i)),i}const nn=(t,e,i)=>{const s=y(e,i);void 0!==s&&t.add(s)};class on{constructor(t){this._config=function(t){return(t=t||{}).data=Qs(t.data),Js(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Qs(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Js(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return sn(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return sn(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return sn(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return sn(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return s&&!e||(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:n}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const r=new Set;e.forEach((e=>{t&&(r.add(t),e.forEach((e=>nn(r,t,e)))),e.forEach((t=>nn(r,s,t))),e.forEach((t=>nn(r,te[n]||{},t))),e.forEach((t=>nn(r,ne,t))),e.forEach((t=>nn(r,ee,t)))}));const l=Array.from(r);return 0===l.length&&l.push(Object.create(null)),en.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,te[e]||{},ne.datasets[e]||{},{type:e},ne,ee]}resolveNamedOptions(t,e,i,n=[""]){const o={$shared:!0},{resolver:a,subPrefixes:r}=an(this._resolverCache,t,n);let l=a;if(function(t,e){const{isScriptable:i,isIndexable:n}=Ie(t);for(const o of e){const e=i(o),a=n(o),r=(a||e)&&t[o];if(e&&(k(r)||rn(r))||a&&s(r))return!0}return!1}(a,e)){o.$shared=!1;l=Re(a,i=k(i)?i():i,this.createResolver(t,i,r))}for(const t of e)o[t]=l[t];return o}createResolver(t,e,i=[""],s){const{resolver:o}=an(this._resolverCache,t,i);return n(e)?Re(o,e,void 0,s):o}}function an(t,e,i){let s=t.get(e);s||(s=new Map,t.set(e,s));const n=i.join();let o=s.get(n);if(!o){o={resolver:Ee(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},s.set(n,o)}return o}const rn=t=>n(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||k(t[i])),!1);const ln=["top","bottom","left","right","chartArea"];function hn(t,e){return"top"===t||"bottom"===t||-1===ln.indexOf(t)&&"x"===e}function cn(t,e){return function(i,s){return i[t]===s[t]?i[e]-s[e]:i[t]-s[t]}}function dn(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),c(i&&i.onComplete,[t],e)}function un(t){const e=t.chart,i=e.options.animation;c(i&&i.onProgress,[t],e)}function fn(t){return oe()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const gn={},pn=t=>{const e=fn(t);return Object.values(gn).filter((t=>t.canvas===e)).pop()};function mn(t,e,i){const s=Object.keys(t);for(const n of s){const s=+n;if(s>=e){const o=t[n];delete t[n],(i>0||s>e)&&(t[s+i]=o)}}}class bn{constructor(t,i){const s=this.config=new on(i),n=fn(t),o=pn(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||gs(n)),this.platform.updateConfig(s);const r=this.platform.acquireContext(n,a.aspectRatio),l=r&&r.canvas,h=l&&l.height,c=l&&l.width;this.id=e(),this.ctx=r,this.canvas=l,this.width=c,this.height=h,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Xs,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ct((t=>this.update(t)),a.resizeDelay||0),this._dataChanges=[],gn[this.id]=this,r&&l?(mt.listen(this,"complete",dn),mt.listen(this,"progress",un),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:n,_aspectRatio:o}=this;return i(t)?e&&o?o:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():pe(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return we(this.canvas,this.ctx),this}stop(){return mt.stop(this),this}resize(t,e){mt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,n),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,pe(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),c(i.onResize,[this,o],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){d(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let n=[];e&&(n=n.concat(Object.keys(e).map((t=>{const i=e[t],s=Zs(t,i),n="r"===s,o="x"===s;return{options:i,dposition:n?"chartArea":o?"bottom":"left",dtype:n?"radialLinear":o?"category":"linear"}})))),d(n,(e=>{const n=e.options,o=n.id,a=Zs(o,n),l=r(n.type,e.dtype);void 0!==n.position&&hn(n.position,a)===hn(e.dposition)||(n.position=e.dposition),s[o]=!0;let h=null;if(o in i&&i[o].type===l)h=i[o];else{h=new(Us.getScale(l))({id:o,type:l,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(n,t)})),d(s,((t,e)=>{t||delete i[e]})),d(i,(t=>{Zi.configure(this,t,t.options),Zi.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(cn("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const s=e[i];let n=this.getDatasetMeta(i);const o=s.type||this.config.type;if(n.type&&n.type!==o&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=o,n.indexAxis=s.indexAxis||Gs(o,this.options),n.order=s.order||0,n.index=i,n.label=""+s.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{const e=Us.getController(o),{datasetElementType:s,dataElementType:a}=ne.datasets[o];Object.assign(e.prototype,{dataElementType:Us.getElement(a),datasetElementType:s&&Us.getElement(s)}),n.controller=new e(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){d(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!s&&-1===n.indexOf(e);e.buildOrUpdateElements(i),o=Math.max(+e.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||d(n,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(cn("z","_idx"));const{_active:a,_lastEvent:r}=this;r?this._eventHandler(r,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){d(this.scales,(t=>{Zi.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);S(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:n}of e){mn(t,s,"_removeElements"===i?-n:n)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),s=i(0);for(let t=1;t<e;t++)if(!S(s,i(t)))return;return Array.from(s).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;Zi.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],d(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,k(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",s)&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(mt.has(this)?this.attached&&!mt.running(this)&&mt.start(this):(this.draw(),dn({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,n;for(s=0,n=e.length;s<n;++s){const n=e[s];t&&!n.visible||i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,s=!i.disabled,n=this.chartArea,o={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",o)&&(s&&Pe(e,{left:!1===i.left?0:n.left-i.left,right:!1===i.right?this.width:n.right+i.right,top:!1===i.top?0:n.top-i.top,bottom:!1===i.bottom?this.height:n.bottom+i.bottom}),t.controller.draw(),s&&De(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return Se(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const n=Vi.modes[e];return"function"==typeof n?n(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter((t=>t&&t._dataset===e)).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=_i(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",n=this.getDatasetMeta(t),o=n.controller._resolveAnimations(void 0,s);M(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(n,{visible:i}),this.update((e=>e.datasetIndex===t?s:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),mt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),we(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete gn[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};d(this.options.events,(t=>i(t,s)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(i,s)=>{t[i]&&(e.removeEventListener(this,i,s),delete t[i])},n=(t,e)=>{this.canvas&&this.resize(t,e)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",n),i("detach",o)};o=()=>{this.attached=!1,s("resize",n),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){d(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},d(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let n,o,a,r;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+s+"DatasetHoverStyle"]()),a=0,r=t.length;a<r;++a){o=t[a];const e=o&&this.getDatasetMeta(o.datasetIndex).controller;e&&e[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!u(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const s=this.options.hover,n=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),o=n(e,t),a=i?t:n(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,s))return;const n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:n}=this,o=e,a=this._getActiveElements(t,s,i,o),r=P(t),l=function(t,e,i,s){return i&&"mouseout"!==t.type?s?e:t:null}(t,this._lastEvent,i,r);i&&(this._lastEvent=null,c(n.onHover,[t,a,this],this),r&&c(n.onClick,[t,a,this],this));const h=!u(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,s){if("mouseout"===t.type)return[];if(!i)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,s)}}const xn=()=>d(bn.instances,(t=>t._plugins.invalidate())),_n=!0;function yn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}Object.defineProperties(bn,{defaults:{enumerable:_n,value:ne},instances:{enumerable:_n,value:gn},overrides:{enumerable:_n,value:te},registry:{enumerable:_n,value:Us},version:{enumerable:_n,value:"3.9.1"},getChart:{enumerable:_n,value:pn},register:{enumerable:_n,value:(...t)=>{Us.add(...t),xn()}},unregister:{enumerable:_n,value:(...t)=>{Us.remove(...t),xn()}}});class vn{constructor(t){this.options=t||{}}init(t){}formats(){return yn()}parse(t,e){return yn()}format(t,e){return yn()}add(t,e,i){return yn()}diff(t,e,i){return yn()}startOf(t,e,i){return yn()}endOf(t,e){return yn()}}vn.override=function(t){Object.assign(vn.prototype,t)};var wn={_date:vn};function Mn(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let s=[];for(let e=0,n=i.length;e<n;e++)s=s.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=rt(s.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let s,n,o,a,r=e._length;const l=()=>{32767!==o&&-32768!==o&&(M(a)&&(r=Math.min(r,Math.abs(o-a)||r)),a=o)};for(s=0,n=i.length;s<n;++s)o=e.getPixelForValue(i[s]),l();for(a=void 0,s=0,n=e.ticks.length;s<n;++s)o=e.getPixelForTick(s),l();return r}function kn(t,e,i,n){return s(t)?function(t,e,i,s){const n=i.parse(t[0],s),o=i.parse(t[1],s),a=Math.min(n,o),r=Math.max(n,o);let l=a,h=r;Math.abs(a)>Math.abs(r)&&(l=r,h=a),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:n,end:o,min:a,max:r}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function Sn(t,e,i,s){const n=t.iScale,o=t.vScale,a=n.getLabels(),r=n===o,l=[];let h,c,d,u;for(h=i,c=i+s;h<c;++h)u=e[h],d={},d[n.axis]=r||n.parse(a[h],h),l.push(kn(u,d,o,h));return l}function Pn(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function Dn(t,e,i,s){let n=e.borderSkipped;const o={};if(!n)return void(t.borderSkipped=o);if(!0===n)return void(t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0});const{start:a,end:r,reverse:l,top:h,bottom:c}=function(t){let e,i,s,n,o;return t.horizontal?(e=t.base>t.x,i="left",s="right"):(e=t.base<t.y,i="bottom",s="top"),e?(n="end",o="start"):(n="start",o="end"),{start:i,end:s,reverse:e,top:n,bottom:o}}(t);"middle"===n&&i&&(t.enableBorderRadius=!0,(i._top||0)===s?n=h:(i._bottom||0)===s?n=c:(o[On(c,a,r,l)]=!0,n=h)),o[On(n,a,r,l)]=!0,t.borderSkipped=o}function On(t,e,i,s){var n,o,a;return s?(a=i,t=Cn(t=(n=t)===(o=e)?a:n===a?o:n,i,e)):t=Cn(t,e,i),t}function Cn(t,e,i){return"start"===t?e:"end"===t?i:t}function An(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}class Tn extends Ls{parsePrimitiveData(t,e,i,s){return Sn(t,e,i,s)}parseArrayData(t,e,i,s){return Sn(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:n,vScale:o}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l="x"===n.axis?a:r,h="x"===o.axis?a:r,c=[];let d,u,f,g;for(d=i,u=i+s;d<u;++d)g=e[d],f={},f[n.axis]=n.parse(y(g,l),d),c.push(kn(y(g,h),f,o,d));return c}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const n=i._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,n=this.getParsed(t),o=n._custom,a=Pn(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(n[s.axis]);return{label:""+i.getLabelForValue(n[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,n){const o="reset"===n,{index:a,_cachedMeta:{vScale:r}}=this,l=r.getBasePixel(),h=r.isHorizontal(),c=this._getRuler(),{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,n);for(let f=e;f<e+s;f++){const e=this.getParsed(f),s=o||i(e[r.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),g=this._calculateBarIndexPixels(f,c),p=(e._stacks||{})[r.axis],m={horizontal:h,base:s.base,enableBorderRadius:!p||Pn(e._custom)||a===p._top||a===p._bottom,x:h?s.head:g.center,y:h?g.center:s.head,height:h?g.size:Math.abs(s.size),width:h?Math.abs(s.size):g.size};u&&(m.options=d||this.resolveDataElementOptions(f,t[f].active?"active":n));const b=m.options||t[f].options;Dn(m,b,p,a),An(m,b,c.ratio),this.updateElement(t[f],f,m,n)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter((t=>t.controller.options.grouped)),o=s.options.stacked,a=[],r=t=>{const s=t.controller.getParsed(e),n=s&&s[t.vScale.axis];if(i(n)||isNaN(n))return!0};for(const i of n)if((void 0===e||!r(i))&&((!1===o||-1===a.indexOf(i.stack)||void 0===o&&void 0===i.stack)&&a.push(i.stack),i.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const s=this._getStacks(t,i),n=void 0!==e?s.indexOf(e):-1;return-1===n?s.length-1:n}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let n,o;for(n=0,o=e.data.length;n<o;++n)s.push(i.getPixelForValue(this.getParsed(n)[i.axis],n));const a=t.barThickness;return{min:a||Mn(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s},options:{base:n,minBarLength:o}}=this,a=n||0,r=this.getParsed(t),l=r._custom,h=Pn(l);let c,d,u=r[e.axis],f=0,g=s?this.applyStack(e,r,s):u;g!==u&&(f=g-u,g=u),h&&(u=l.barStart,g=l.barEnd-l.barStart,0!==u&&z(u)!==z(l.barEnd)&&(f=0),f+=u);const p=i(n)||h?f:n;let m=e.getPixelForValue(p);if(c=this.chart.getDataVisibility(t)?e.getPixelForValue(f+g):m,d=c-m,Math.abs(d)<o){d=function(t,e,i){return 0!==t?z(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(d,e,a)*o,u===a&&(m-=d/2);const t=e.getPixelForDecimal(0),i=e.getPixelForDecimal(1),s=Math.min(t,i),n=Math.max(t,i);m=Math.max(Math.min(m,n),s),c=m+d}if(m===e.getPixelForValue(a)){const t=z(d)*e.getLineWidthForValue(a)/2;m+=t,d-=t}return{size:d,base:m,head:c,center:c+d/2}}_calculateBarIndexPixels(t,e){const s=e.scale,n=this.options,o=n.skipNull,a=r(n.maxBarThickness,1/0);let l,h;if(e.grouped){const s=o?this._getStackCount(t):e.stackCount,r="flex"===n.barThickness?function(t,e,i,s){const n=e.pixels,o=n[t];let a=t>0?n[t-1]:null,r=t<n.length-1?n[t+1]:null;const l=i.categoryPercentage;null===a&&(a=o-(null===r?e.end-e.start:r-o)),null===r&&(r=o+o-a);const h=o-(o-Math.min(a,r))/2*l;return{chunk:Math.abs(r-a)/2*l/s,ratio:i.barPercentage,start:h}}(t,e,n,s):function(t,e,s,n){const o=s.barThickness;let a,r;return i(o)?(a=e.min*s.categoryPercentage,r=s.barPercentage):(a=o*n,r=1),{chunk:a/n,ratio:r,start:e.pixels[t]-a/2}}(t,e,n,s),c=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);l=r.start+r.chunk*c+r.chunk/2,h=Math.min(a,r.chunk*r.ratio)}else l=s.getPixelForValue(this.getParsed(t)[s.axis],t),h=Math.min(a,e.min*e.ratio);return{base:l-h/2,head:l+h/2,center:l,size:h}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let n=0;for(;n<s;++n)null!==this.getParsed(n)[e.axis]&&i[n].draw(this._ctx)}}Tn.id="bar",Tn.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},Tn.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Ln extends Ls{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const n=super.parsePrimitiveData(t,e,i,s);for(let t=0;t<n.length;t++)n[t]._custom=this.resolveDataElementOptions(t+i).radius;return n}parseArrayData(t,e,i,s){const n=super.parseArrayData(t,e,i,s);for(let t=0;t<n.length;t++){const s=e[i+t];n[t]._custom=r(s[2],this.resolveDataElementOptions(t+i).radius)}return n}parseObjectData(t,e,i,s){const n=super.parseObjectData(t,e,i,s);for(let t=0;t<n.length;t++){const s=e[i+t];n[t]._custom=r(s&&s.r&&+s.r,this.resolveDataElementOptions(t+i).radius)}return n}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:s}=e,n=this.getParsed(t),o=i.getLabelForValue(n.x),a=s.getLabelForValue(n.y),r=n._custom;return{label:e.label,value:"("+o+", "+a+(r?", "+r:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const n="reset"===s,{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:r,includeOptions:l}=this._getSharedOptions(e,s),h=o.axis,c=a.axis;for(let d=e;d<e+i;d++){const e=t[d],i=!n&&this.getParsed(d),u={},f=u[h]=n?o.getPixelForDecimal(.5):o.getPixelForValue(i[h]),g=u[c]=n?a.getBasePixel():a.getPixelForValue(i[c]);u.skip=isNaN(f)||isNaN(g),l&&(u.options=r||this.resolveDataElementOptions(d,e.active?"active":s),n&&(u.options.radius=0)),this.updateElement(e,d,u,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const n=s.radius;return"active"!==e&&(s.radius=0),s.radius+=r(i&&i._custom,n),s}}Ln.id="bubble",Ln.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},Ln.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class En extends Ls{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(!1===this._parsing)s._parsed=i;else{let o,a,r=t=>+i[t];if(n(i[t])){const{key:t="value"}=this._parsing;r=e=>+y(i[e],t)}for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return H(this.options.rotation-90)}_getCircumference(){return H(this.options.circumference)}_getRotationExtents(){let t=O,e=-O;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const s=this.chart.getDatasetMeta(i).controller,n=s._getRotation(),o=s._getCircumference();t=Math.min(t,n),e=Math.max(e,n+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,n=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),r=Math.min(l(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:d,rotation:u}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:p,offsetY:m}=function(t,e,i){let s=1,n=1,o=0,a=0;if(e<O){const r=t,l=r+e,h=Math.cos(r),c=Math.sin(r),d=Math.cos(l),u=Math.sin(l),f=(t,e,s)=>G(t,r,l,!0)?1:Math.max(e,e*i,s,s*i),g=(t,e,s)=>G(t,r,l,!0)?-1:Math.min(e,e*i,s,s*i),p=f(0,h,d),m=f(L,c,u),b=g(D,h,d),x=g(D+L,c,u);s=(p-b)/2,n=(m-x)/2,o=-(p+b)/2,a=-(m+x)/2}return{ratioX:s,ratioY:n,offsetX:o,offsetY:a}}(u,d,r),b=(i.width-o)/f,x=(i.height-o)/g,_=Math.max(Math.min(b,x)/2,0),y=h(this.options.radius,_),v=(y-Math.max(y*r,0))/this._getVisibleDatasetWeightTotal();this.offsetX=p*y,this.offsetY=m*y,s.total=this.calculateTotal(),this.outerRadius=y-v*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-v*c,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,n=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===s._parsed[t]||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*n/O)}updateElements(t,e,i,s){const n="reset"===s,o=this.chart,a=o.chartArea,r=o.options.animation,l=(a.left+a.right)/2,h=(a.top+a.bottom)/2,c=n&&r.animateScale,d=c?0:this.innerRadius,u=c?0:this.outerRadius,{sharedOptions:f,includeOptions:g}=this._getSharedOptions(e,s);let p,m=this._getRotation();for(p=0;p<e;++p)m+=this._circumference(p,n);for(p=e;p<e+i;++p){const e=this._circumference(p,n),i=t[p],o={x:l+this.offsetX,y:h+this.offsetY,startAngle:m,endAngle:m+e,circumference:e,outerRadius:u,innerRadius:d};g&&(o.options=f||this.resolveDataElementOptions(p,i.active?"active":s)),m+=e,this.updateElement(i,p,o,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,s=0;for(i=0;i<e.length;i++){const n=t._parsed[i];null===n||isNaN(n)||!this.chart.getDataVisibility(i)||e[i].hidden||(s+=Math.abs(n))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?O*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],n=li(e._parsed[t],i.options.locale);return{label:s[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,n,o,a,r;if(!t)for(s=0,n=i.data.datasets.length;s<n;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}if(!t)return 0;for(s=0,n=t.length;s<n;++s)r=a.resolveDataElementOptions(s),"inner"!==r.borderAlign&&(e=Math.max(e,r.borderWidth||0,r.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(r(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}En.id="doughnut",En.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},En.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},En.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,s)=>{const n=t.getDatasetMeta(0).controller.getStyle(s);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(s),index:s}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return s(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class Rn extends Ls{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:n}=e,o=this.chart._animationsDisabled;let{start:a,count:r}=gt(e,s,o);this._drawStart=a,this._drawCount=r,pt(e)&&(a=0,r=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,r,t)}updateElements(t,e,s,n){const o="reset"===n,{iScale:a,vScale:r,_stacked:l,_dataset:h}=this._cachedMeta,{sharedOptions:c,includeOptions:d}=this._getSharedOptions(e,n),u=a.axis,f=r.axis,{spanGaps:g,segment:p}=this.options,m=B(g)?g:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||"none"===n;let x=e>0&&this.getParsed(e-1);for(let g=e;g<e+s;++g){const e=t[g],s=this.getParsed(g),_=b?e:{},y=i(s[f]),v=_[u]=a.getPixelForValue(s[u],g),w=_[f]=o||y?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,s,l):s[f],g);_.skip=isNaN(v)||isNaN(w)||y,_.stop=g>0&&Math.abs(s[u]-x[u])>m,p&&(_.parsed=s,_.raw=h.data[g]),d&&(_.options=c||this.resolveDataElementOptions(g,e.active?"active":n)),b||this.updateElement(e,g,_,n),x=s}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const n=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,n,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Rn.id="line",Rn.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},Rn.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class In extends Ls{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],n=li(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:n}}parseObjectData(t,e,i,s){return Ue.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach(((t,i)=>{const s=this.getParsed(i).r;!isNaN(s)&&this.chart.getDataVisibility(i)&&(s<e.min&&(e.min=s),s>e.max&&(e.max=s))})),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(s/2,0),o=(n-Math.max(i.cutoutPercentage?n/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=n-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,i,s){const n="reset"===s,o=this.chart,a=o.options.animation,r=this._cachedMeta.rScale,l=r.xCenter,h=r.yCenter,c=r.getIndexAngle(0)-.5*D;let d,u=c;const f=360/this.countVisibleElements();for(d=0;d<e;++d)u+=this._computeAngle(d,s,f);for(d=e;d<e+i;d++){const e=t[d];let i=u,g=u+this._computeAngle(d,s,f),p=o.getDataVisibility(d)?r.getDistanceFromCenterForValue(this.getParsed(d).r):0;u=g,n&&(a.animateScale&&(p=0),a.animateRotate&&(i=g=c));const m={x:l,y:h,innerRadius:0,outerRadius:p,startAngle:i,endAngle:g,options:this.resolveDataElementOptions(d,e.active?"active":s)};this.updateElement(e,d,m,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach(((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++})),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?H(this.resolveDataElementOptions(t,e).angle||i):0}}In.id="polarArea",In.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},In.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,s)=>{const n=t.getDatasetMeta(0).controller.getStyle(s);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(s),index:s}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class zn extends En{}zn.id="pie",zn.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Fn extends Ls{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return Ue.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],n=e.iScale.getLabels();if(i.points=s,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const o={_loop:!0,_fullLoop:n.length===s.length,options:e};this.updateElement(i,void 0,o,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const n=this._cachedMeta.rScale,o="reset"===s;for(let a=e;a<e+i;a++){const e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":s),r=n.getPointPositionForValue(a,this.getParsed(a).r),l=o?n.xCenter:r.x,h=o?n.yCenter:r.y,c={x:l,y:h,angle:r.angle,skip:isNaN(l)||isNaN(h),options:i};this.updateElement(e,a,c,s)}}}Fn.id="radar",Fn.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},Fn.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Vn extends Ls{update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:n,count:o}=gt(e,i,s);if(this._drawStart=n,this._drawCount=o,pt(e)&&(n=0,o=i.length),this.options.showLine){const{dataset:n,_dataset:o}=e;n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!o._decimated,n.points=i;const a=this.resolveDatasetElementOptions(t);a.segment=this.options.segment,this.updateElement(n,void 0,{animated:!s,options:a},t)}this.updateElements(i,n,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=Us.getElement("line")),super.addElements()}updateElements(t,e,s,n){const o="reset"===n,{iScale:a,vScale:r,_stacked:l,_dataset:h}=this._cachedMeta,c=this.resolveDataElementOptions(e,n),d=this.getSharedOptions(c),u=this.includeOptions(n,d),f=a.axis,g=r.axis,{spanGaps:p,segment:m}=this.options,b=B(p)?p:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||"none"===n;let _=e>0&&this.getParsed(e-1);for(let c=e;c<e+s;++c){const e=t[c],s=this.getParsed(c),p=x?e:{},y=i(s[g]),v=p[f]=a.getPixelForValue(s[f],c),w=p[g]=o||y?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,s,l):s[g],c);p.skip=isNaN(v)||isNaN(w)||y,p.stop=c>0&&Math.abs(s[f]-_[f])>b,m&&(p.parsed=s,p.raw=h.data[c]),u&&(p.options=d||this.resolveDataElementOptions(c,e.active?"active":n)),x||this.updateElement(e,c,p,n),_=s}this.updateSharedOptions(d,n,c)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const n=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,n,o)/2}}Vn.id="scatter",Vn.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1},Vn.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Bn=Object.freeze({__proto__:null,BarController:Tn,BubbleController:Ln,DoughnutController:En,LineController:Rn,PolarAreaController:In,PieController:zn,RadarController:Fn,ScatterController:Vn});function Nn(t,e,i){const{startAngle:s,pixelMargin:n,x:o,y:a,outerRadius:r,innerRadius:l}=e;let h=n/r;t.beginPath(),t.arc(o,a,r,s-h,i+h),l>n?(h=n/l,t.arc(o,a,l,i+h,s-h,!0)):t.arc(o,a,n,i+L,s-L),t.closePath(),t.clip()}function Wn(t,e,i,s){const n=ui(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]);const o=(i-e)/2,a=Math.min(o,s*e/2),r=t=>{const e=(i-Math.min(o,t))*s/2;return Z(t,0,Math.min(o,e))};return{outerStart:r(n.outerStart),outerEnd:r(n.outerEnd),innerStart:Z(n.innerStart,0,a),innerEnd:Z(n.innerEnd,0,a)}}function jn(t,e,i,s){return{x:i+t*Math.cos(e),y:s+t*Math.sin(e)}}function Hn(t,e,i,s,n,o){const{x:a,y:r,startAngle:l,pixelMargin:h,innerRadius:c}=e,d=Math.max(e.outerRadius+s+i-h,0),u=c>0?c+s+i+h:0;let f=0;const g=n-l;if(s){const t=((c>0?c-s:0)+(d>0?d-s:0))/2;f=(g-(0!==t?g*t/(t+s):g))/2}const p=(g-Math.max(.001,g*d-i/D)/d)/2,m=l+p+f,b=n-p-f,{outerStart:x,outerEnd:_,innerStart:y,innerEnd:v}=Wn(e,u,d,b-m),w=d-x,M=d-_,k=m+x/w,S=b-_/M,P=u+y,O=u+v,C=m+y/P,A=b-v/O;if(t.beginPath(),o){if(t.arc(a,r,d,k,S),_>0){const e=jn(M,S,a,r);t.arc(e.x,e.y,_,S,b+L)}const e=jn(O,b,a,r);if(t.lineTo(e.x,e.y),v>0){const e=jn(O,A,a,r);t.arc(e.x,e.y,v,b+L,A+Math.PI)}if(t.arc(a,r,u,b-v/u,m+y/u,!0),y>0){const e=jn(P,C,a,r);t.arc(e.x,e.y,y,C+Math.PI,m-L)}const i=jn(w,m,a,r);if(t.lineTo(i.x,i.y),x>0){const e=jn(w,k,a,r);t.arc(e.x,e.y,x,m-L,k)}}else{t.moveTo(a,r);const e=Math.cos(k)*d+a,i=Math.sin(k)*d+r;t.lineTo(e,i);const s=Math.cos(S)*d+a,n=Math.sin(S)*d+r;t.lineTo(s,n)}t.closePath()}function $n(t,e,i,s,n,o){const{options:a}=e,{borderWidth:r,borderJoinStyle:l}=a,h="inner"===a.borderAlign;r&&(h?(t.lineWidth=2*r,t.lineJoin=l||"round"):(t.lineWidth=r,t.lineJoin=l||"bevel"),e.fullCircles&&function(t,e,i){const{x:s,y:n,startAngle:o,pixelMargin:a,fullCircles:r}=e,l=Math.max(e.outerRadius-a,0),h=e.innerRadius+a;let c;for(i&&Nn(t,e,o+O),t.beginPath(),t.arc(s,n,h,o+O,o,!0),c=0;c<r;++c)t.stroke();for(t.beginPath(),t.arc(s,n,l,o,o+O),c=0;c<r;++c)t.stroke()}(t,e,h),h&&Nn(t,e,n),Hn(t,e,i,s,n,o),t.stroke())}class Yn extends Es{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.getProps(["x","y"],i),{angle:n,distance:o}=U(s,{x:t,y:e}),{startAngle:a,endAngle:l,innerRadius:h,outerRadius:c,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),u=this.options.spacing/2,f=r(d,l-a)>=O||G(n,a,l),g=Q(o,h+u,c+u);return f&&g}getCenterPoint(t){const{x:e,y:i,startAngle:s,endAngle:n,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:r,spacing:l}=this.options,h=(s+n)/2,c=(o+a+l+r)/2;return{x:e+Math.cos(h)*c,y:i+Math.sin(h)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,s=(e.offset||0)/2,n=(e.spacing||0)/2,o=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>O?Math.floor(i/O):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=0;if(s){a=s/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*a,Math.sin(e)*a),this.circumference>=D&&(a=s)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const r=function(t,e,i,s,n){const{fullCircles:o,startAngle:a,circumference:r}=e;let l=e.endAngle;if(o){Hn(t,e,i,s,a+O,n);for(let e=0;e<o;++e)t.fill();isNaN(r)||(l=a+r%O,r%O==0&&(l+=O))}return Hn(t,e,i,s,l,n),t.fill(),l}(t,this,a,n,o);$n(t,this,a,n,r,o),t.restore()}}function Un(t,e,i=e){t.lineCap=r(i.borderCapStyle,e.borderCapStyle),t.setLineDash(r(i.borderDash,e.borderDash)),t.lineDashOffset=r(i.borderDashOffset,e.borderDashOffset),t.lineJoin=r(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=r(i.borderWidth,e.borderWidth),t.strokeStyle=r(i.borderColor,e.borderColor)}function Xn(t,e,i){t.lineTo(i.x,i.y)}function qn(t,e,i={}){const s=t.length,{start:n=0,end:o=s-1}=i,{start:a,end:r}=e,l=Math.max(n,a),h=Math.min(o,r),c=n<a&&o<a||n>r&&o>r;return{count:s,start:l,loop:e.loop,ilen:h<l&&!c?s+h-l:h-l}}function Kn(t,e,i,s){const{points:n,options:o}=e,{count:a,start:r,loop:l,ilen:h}=qn(n,i,s),c=function(t){return t.stepped?Oe:t.tension||"monotone"===t.cubicInterpolationMode?Ce:Xn}(o);let d,u,f,{move:g=!0,reverse:p}=s||{};for(d=0;d<=h;++d)u=n[(r+(p?h-d:d))%a],u.skip||(g?(t.moveTo(u.x,u.y),g=!1):c(t,f,u,p,o.stepped),f=u);return l&&(u=n[(r+(p?h:0))%a],c(t,f,u,p,o.stepped)),!!l}function Gn(t,e,i,s){const n=e.points,{count:o,start:a,ilen:r}=qn(n,i,s),{move:l=!0,reverse:h}=s||{};let c,d,u,f,g,p,m=0,b=0;const x=t=>(a+(h?r-t:t))%o,_=()=>{f!==g&&(t.lineTo(m,g),t.lineTo(m,f),t.lineTo(m,p))};for(l&&(d=n[x(0)],t.moveTo(d.x,d.y)),c=0;c<=r;++c){if(d=n[x(c)],d.skip)continue;const e=d.x,i=d.y,s=0|e;s===u?(i<f?f=i:i>g&&(g=i),m=(b*m+e)/++b):(_(),t.lineTo(e,i),u=s,b=0,f=g=i),p=i}_()}function Zn(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return!(t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i)?Gn:Kn}Yn.id="arc",Yn.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0},Yn.defaultRoutes={backgroundColor:"backgroundColor"};const Jn="function"==typeof Path2D;function Qn(t,e,i,s){Jn&&!e.options.segment?function(t,e,i,s){let n=e._path;n||(n=e._path=new Path2D,e.path(n,i,s)&&n.closePath()),Un(t,e.options),t.stroke(n)}(t,e,i,s):function(t,e,i,s){const{segments:n,options:o}=e,a=Zn(e);for(const r of n)Un(t,o,r.style),t.beginPath(),a(t,e,r,{start:i,end:i+s-1})&&t.closePath(),t.stroke()}(t,e,i,s)}class to extends Es{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;Qe(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Di(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],n=this.points,o=Pi(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],r=function(t){return t.stepped?oi:t.tension||"monotone"===t.cubicInterpolationMode?ai:ni}(i);let l,h;for(l=0,h=o.length;l<h;++l){const{start:h,end:c}=o[l],d=n[h],u=n[c];if(d===u){a.push(d);continue}const f=r(d,u,Math.abs((s-d[e])/(u[e]-d[e])),i.stepped);f[e]=t[e],a.push(f)}return 1===a.length?a[0]:a}pathSegment(t,e,i){return Zn(this)(t,this,e,i)}path(t,e,i){const s=this.segments,n=Zn(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=n(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),Qn(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function eo(t,e,i,s){const n=t.options,{[i]:o}=t.getProps([i],s);return Math.abs(e-o)<n.radius+n.hitRadius}to.id="line",to.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},to.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},to.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class io extends Es{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.options,{x:n,y:o}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return eo(this,t,"x",e)}inYRange(t,e){return eo(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!Se(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Me(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function so(t,e){const{x:i,y:s,base:n,width:o,height:a}=t.getProps(["x","y","base","width","height"],e);let r,l,h,c,d;return t.horizontal?(d=a/2,r=Math.min(i,n),l=Math.max(i,n),h=s-d,c=s+d):(d=o/2,r=i-d,l=i+d,h=Math.min(s,n),c=Math.max(s,n)),{left:r,top:h,right:l,bottom:c}}function no(t,e,i,s){return t?0:Z(e,i,s)}function oo(t){const e=so(t),i=e.right-e.left,s=e.bottom-e.top,o=function(t,e,i){const s=t.options.borderWidth,n=t.borderSkipped,o=fi(s);return{t:no(n.top,o.top,0,i),r:no(n.right,o.right,0,e),b:no(n.bottom,o.bottom,0,i),l:no(n.left,o.left,0,e)}}(t,i/2,s/2),a=function(t,e,i){const{enableBorderRadius:s}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,a=gi(o),r=Math.min(e,i),l=t.borderSkipped,h=s||n(o);return{topLeft:no(!h||l.top||l.left,a.topLeft,0,r),topRight:no(!h||l.top||l.right,a.topRight,0,r),bottomLeft:no(!h||l.bottom||l.left,a.bottomLeft,0,r),bottomRight:no(!h||l.bottom||l.right,a.bottomRight,0,r)}}(t,i/2,s/2);return{outer:{x:e.left,y:e.top,w:i,h:s,radius:a},inner:{x:e.left+o.l,y:e.top+o.t,w:i-o.l-o.r,h:s-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function ao(t,e,i,s){const n=null===e,o=null===i,a=t&&!(n&&o)&&so(t,s);return a&&(n||Q(e,a.left,a.right))&&(o||Q(i,a.top,a.bottom))}function ro(t,e){t.rect(e.x,e.y,e.w,e.h)}function lo(t,e,i={}){const s=t.x!==i.x?-e:0,n=t.y!==i.y?-e:0,o=(t.x+t.w!==i.x+i.w?e:0)-s,a=(t.y+t.h!==i.y+i.h?e:0)-n;return{x:t.x+s,y:t.y+n,w:t.w+o,h:t.h+a,radius:t.radius}}io.id="point",io.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},io.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class ho extends Es{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:n,outer:o}=oo(this),a=(r=o.radius).topLeft||r.topRight||r.bottomLeft||r.bottomRight?Le:ro;var r;t.save(),o.w===n.w&&o.h===n.h||(t.beginPath(),a(t,lo(o,e,n)),t.clip(),a(t,lo(n,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,lo(n,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return ao(this,t,e,i)}inXRange(t,e){return ao(this,t,null,e)}inYRange(t,e){return ao(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return{x:n?(e+s)/2:e,y:n?i:(i+s)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}ho.id="bar",ho.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},ho.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var co=Object.freeze({__proto__:null,ArcElement:Yn,LineElement:to,PointElement:io,BarElement:ho});function uo(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function fo(t){t.data.datasets.forEach((t=>{uo(t)}))}var go={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,s)=>{if(!s.enabled)return void fo(t);const n=t.width;t.data.datasets.forEach(((e,o)=>{const{_data:a,indexAxis:r}=e,l=t.getDatasetMeta(o),h=a||e.data;if("y"===bi([r,t.options.indexAxis]))return;if(!l.controller.supportsDecimation)return;const c=t.scales[l.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let{start:d,count:u}=function(t,e){const i=e.length;let s,n=0;const{iScale:o}=t,{min:a,max:r,minDefined:l,maxDefined:h}=o.getUserBounds();return l&&(n=Z(et(e,o.axis,a).lo,0,i-1)),s=h?Z(et(e,o.axis,r).hi+1,n,i)-n:i-n,{start:n,count:s}}(l,h);if(u<=(s.threshold||4*n))return void uo(e);let f;switch(i(a)&&(e._data=h,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),s.algorithm){case"lttb":f=function(t,e,i,s,n){const o=n.samples||s;if(o>=i)return t.slice(e,e+i);const a=[],r=(i-2)/(o-2);let l=0;const h=e+i-1;let c,d,u,f,g,p=e;for(a[l++]=t[p],c=0;c<o-2;c++){let s,n=0,o=0;const h=Math.floor((c+1)*r)+1+e,m=Math.min(Math.floor((c+2)*r)+1,i)+e,b=m-h;for(s=h;s<m;s++)n+=t[s].x,o+=t[s].y;n/=b,o/=b;const x=Math.floor(c*r)+1+e,_=Math.min(Math.floor((c+1)*r)+1,i)+e,{x:y,y:v}=t[p];for(u=f=-1,s=x;s<_;s++)f=.5*Math.abs((y-n)*(t[s].y-v)-(y-t[s].x)*(o-v)),f>u&&(u=f,d=t[s],g=s);a[l++]=d,p=g}return a[l++]=t[h],a}(h,d,u,n,s);break;case"min-max":f=function(t,e,s,n){let o,a,r,l,h,c,d,u,f,g,p=0,m=0;const b=[],x=e+s-1,_=t[e].x,y=t[x].x-_;for(o=e;o<e+s;++o){a=t[o],r=(a.x-_)/y*n,l=a.y;const e=0|r;if(e===h)l<f?(f=l,c=o):l>g&&(g=l,d=o),p=(m*p+a.x)/++m;else{const s=o-1;if(!i(c)&&!i(d)){const e=Math.min(c,d),i=Math.max(c,d);e!==u&&e!==s&&b.push({...t[e],x:p}),i!==u&&i!==s&&b.push({...t[i],x:p})}o>0&&s!==u&&b.push(t[s]),b.push(a),h=e,m=0,f=g=l,c=d=u=o}}return b}(h,d,u,n);break;default:throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`)}e._decimated=f}))},destroy(t){fo(t)}};function po(t,e,i,s){if(s)return;let n=e[t],o=i[t];return"angle"===t&&(n=K(n),o=K(o)),{property:t,start:n,end:o}}function mo(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function bo(t,e,i,s){return t&&e?s(t[i],e[i]):t?t[i]:e?e[i]:0}function xo(t,e){let i=[],n=!1;return s(t)?(n=!0,i=t):i=function(t,e){const{x:i=null,y:s=null}=t||{},n=e.points,o=[];return e.segments.forEach((({start:t,end:e})=>{e=mo(t,e,n);const a=n[t],r=n[e];null!==s?(o.push({x:a.x,y:s}),o.push({x:r.x,y:s})):null!==i&&(o.push({x:i,y:a.y}),o.push({x:i,y:r.y}))})),o}(t,e),i.length?new to({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function _o(t){return t&&!1!==t.fill}function yo(t,e,i){let s=t[e].fill;const n=[e];let a;if(!i)return s;for(;!1!==s&&-1===n.indexOf(s);){if(!o(s))return s;if(a=t[s],!a)return!1;if(a.visible)return s;n.push(s),s=a.fill}return!1}function vo(t,e,i){const s=function(t){const e=t.options,i=e.fill;let s=r(i&&i.target,i);void 0===s&&(s=!!e.backgroundColor);if(!1===s||null===s)return!1;if(!0===s)return"origin";return s}(t);if(n(s))return!isNaN(s.value)&&s;let a=parseFloat(s);return o(a)&&Math.floor(a)===a?function(t,e,i,s){"-"!==t&&"+"!==t||(i=e+i);if(i===e||i<0||i>=s)return!1;return i}(s[0],e,a,i):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function wo(t,e,i){const s=[];for(let n=0;n<i.length;n++){const o=i[n],{first:a,last:r,point:l}=Mo(o,e,"x");if(!(!l||a&&r))if(a)s.unshift(l);else if(t.push(l),!r)break}t.push(...s)}function Mo(t,e,i){const s=t.interpolate(e,i);if(!s)return{};const n=s[i],o=t.segments,a=t.points;let r=!1,l=!1;for(let t=0;t<o.length;t++){const e=o[t],s=a[e.start][i],h=a[e.end][i];if(Q(n,s,h)){r=n===s,l=n===h;break}}return{first:r,last:l,point:s}}class ko{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:n,radius:o}=this;return e=e||{start:0,end:O},t.arc(s,n,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,n=t.angle;return{x:e+Math.cos(n)*s,y:i+Math.sin(n)*s,angle:n}}}function So(t){const{chart:e,fill:i,line:s}=t;if(o(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:s}=t,n=[],o=s.segments,a=s.points,r=function(t,e){const i=[],s=t.getMatchingVisibleMetas("line");for(let t=0;t<s.length;t++){const n=s[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset)}return i}(e,i);r.push(xo({x:null,y:e.bottom},s));for(let t=0;t<o.length;t++){const e=o[t];for(let t=e.start;t<=e.end;t++)wo(n,a[t],r)}return new to({points:n,options:{}})}(t);if("shape"===i)return!0;const a=function(t){if((t.scale||{}).getPointPositionForValue)return function(t){const{scale:e,fill:i}=t,s=e.options,o=e.getLabels().length,a=s.reverse?e.max:e.min,r=function(t,e,i){let s;return s="start"===t?i:"end"===t?e.options.reverse?e.min:e.max:n(t)?t.value:e.getBaseValue(),s}(i,e,a),l=[];if(s.grid.circular){const t=e.getPointPositionForValue(0,a);return new ko({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(r)})}for(let t=0;t<o;++t)l.push(e.getPointPositionForValue(t,r));return l}(t);return function(t){const{scale:e={},fill:i}=t,s=function(t,e){let i=null;return"start"===t?i=e.bottom:"end"===t?i=e.top:n(t)?i=e.getPixelForValue(t.value):e.getBasePixel&&(i=e.getBasePixel()),i}(i,e);if(o(s)){const t=e.isHorizontal();return{x:t?s:null,y:t?null:s}}return null}(t)}(t);return a instanceof ko?a:xo(a,s)}function Po(t,e,i){const s=So(e),{line:n,scale:o,axis:a}=e,r=n.options,l=r.fill,h=r.backgroundColor,{above:c=h,below:d=h}=l||{};s&&n.points.length&&(Pe(t,i),function(t,e){const{line:i,target:s,above:n,below:o,area:a,scale:r}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&o!==n&&(Do(t,s,a.top),Oo(t,{line:i,target:s,color:n,scale:r,property:l}),t.restore(),t.save(),Do(t,s,a.bottom));Oo(t,{line:i,target:s,color:o,scale:r,property:l}),t.restore()}(t,{line:n,target:s,above:c,below:d,area:i,scale:o,axis:a}),De(t))}function Do(t,e,i){const{segments:s,points:n}=e;let o=!0,a=!1;t.beginPath();for(const r of s){const{start:s,end:l}=r,h=n[s],c=n[mo(s,l,n)];o?(t.moveTo(h.x,h.y),o=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),a=!!e.pathSegment(t,r,{move:a}),a?t.closePath():t.lineTo(c.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function Oo(t,e){const{line:i,target:s,property:n,color:o,scale:a}=e,r=function(t,e,i){const s=t.segments,n=t.points,o=e.points,a=[];for(const t of s){let{start:s,end:r}=t;r=mo(s,r,n);const l=po(i,n[s],n[r],t.loop);if(!e.segments){a.push({source:t,target:l,start:n[s],end:n[r]});continue}const h=Pi(e,l);for(const e of h){const s=po(i,o[e.start],o[e.end],e.loop),r=Si(t,n,s);for(const t of r)a.push({source:t,target:e,start:{[i]:bo(l,s,"start",Math.max)},end:{[i]:bo(l,s,"end",Math.min)}})}}return a}(i,s,n);for(const{source:e,target:l,start:h,end:c}of r){const{style:{backgroundColor:r=o}={}}=e,d=!0!==s;t.save(),t.fillStyle=r,Co(t,a,d&&po(n,h,c)),t.beginPath();const u=!!i.pathSegment(t,e);let f;if(d){u?t.closePath():Ao(t,s,c,n);const e=!!s.pathSegment(t,l,{move:u,reverse:!0});f=u&&e,f||Ao(t,s,h,n)}t.closePath(),t.fill(f?"evenodd":"nonzero"),t.restore()}}function Co(t,e,i){const{top:s,bottom:n}=e.chart.chartArea,{property:o,start:a,end:r}=i||{};"x"===o&&(t.beginPath(),t.rect(a,s,r-a,n-s),t.clip())}function Ao(t,e,i,s){const n=e.interpolate(i,s);n&&t.lineTo(n.x,n.y)}var To={id:"filler",afterDatasetsUpdate(t,e,i){const s=(t.data.datasets||[]).length,n=[];let o,a,r,l;for(a=0;a<s;++a)o=t.getDatasetMeta(a),r=o.dataset,l=null,r&&r.options&&r instanceof to&&(l={visible:t.isDatasetVisible(a),index:a,fill:vo(r,a,s),chart:t,axis:o.controller.options.indexAxis,scale:o.vScale,line:r}),o.$filler=l,n.push(l);for(a=0;a<s;++a)l=n[a],l&&!1!==l.fill&&(l.fill=yo(n,a,i.propagate))},beforeDraw(t,e,i){const s="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),o=t.chartArea;for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(o,i.axis),s&&i.fill&&Po(t.ctx,i,o))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const s=t.getSortedVisibleDatasetMetas();for(let e=s.length-1;e>=0;--e){const i=s[e].$filler;_o(i)&&Po(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const s=e.meta.$filler;_o(s)&&"beforeDatasetDraw"===i.drawTime&&Po(t.ctx,s,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Lo=(t,e)=>{let{boxHeight:i=e,boxWidth:s=e}=t;return t.usePointStyle&&(i=Math.min(i,e),s=t.pointStyleWidth||Math.min(s,e)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(e,i)}};class Eo extends Es{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=c(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,s=mi(i.font),n=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:r}=Lo(i,n);let l,h;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,h=this._fitRows(o,n,a,r)+10):(h=this.maxHeight,l=this._fitCols(o,n,a,r)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:n,maxWidth:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.lineWidths=[0],h=s+a;let c=t;n.textAlign="left",n.textBaseline="middle";let d=-1,u=-h;return this.legendItems.forEach(((t,f)=>{const g=i+e/2+n.measureText(t.text).width;(0===f||l[l.length-1]+g+2*a>o)&&(c+=h,l[l.length-(f>0?0:1)]=0,u+=h,d++),r[f]={left:0,top:u,row:d,width:g,height:s},l[l.length-1]+=g+a})),c}_fitCols(t,e,i,s){const{ctx:n,maxHeight:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.columnSizes=[],h=o-t;let c=a,d=0,u=0,f=0,g=0;return this.legendItems.forEach(((t,o)=>{const p=i+e/2+n.measureText(t.text).width;o>0&&u+s+2*a>h&&(c+=d+a,l.push({width:d,height:u}),f+=d+a,g++,d=u=0),r[o]={left:f,top:u,col:g,width:p,height:s},d=Math.max(d,p),u+=s+a})),c+=d,l.push({width:d,height:u}),c}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:n}}=this,o=yi(n,this.left,this.width);if(this.isHorizontal()){let n=0,a=ut(i,this.left+s,this.right-this.lineWidths[n]);for(const r of e)n!==r.row&&(n=r.row,a=ut(i,this.left+s,this.right-this.lineWidths[n])),r.top+=this.top+t+s,r.left=o.leftForLtr(o.x(a),r.width),a+=r.width+s}else{let n=0,a=ut(i,this.top+t+s,this.bottom-this.columnSizes[n].height);for(const r of e)r.col!==n&&(n=r.col,a=ut(i,this.top+t+s,this.bottom-this.columnSizes[n].height)),r.top=a,r.left+=this.left+s,r.left=o.leftForLtr(o.x(r.left),r.width),a+=r.height+s}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;Pe(t,this),this._draw(),De(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:n,labels:o}=t,a=ne.color,l=yi(t.rtl,this.left,this.width),h=mi(o.font),{color:c,padding:d}=o,u=h.size,f=u/2;let g;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=h.string;const{boxWidth:p,boxHeight:m,itemHeight:b}=Lo(o,u),x=this.isHorizontal(),_=this._computeTitleHeight();g=x?{x:ut(n,this.left+d,this.right-i[0]),y:this.top+d+_,line:0}:{x:this.left+d,y:ut(n,this.top+_+d,this.bottom-e[0].height),line:0},vi(this.ctx,t.textDirection);const y=b+d;this.legendItems.forEach(((v,w)=>{s.strokeStyle=v.fontColor||c,s.fillStyle=v.fontColor||c;const M=s.measureText(v.text).width,k=l.textAlign(v.textAlign||(v.textAlign=o.textAlign)),S=p+f+M;let P=g.x,D=g.y;l.setWidth(this.width),x?w>0&&P+S+d>this.right&&(D=g.y+=y,g.line++,P=g.x=ut(n,this.left+d,this.right-i[g.line])):w>0&&D+y>this.bottom&&(P=g.x=P+e[g.line].width+d,g.line++,D=g.y=ut(n,this.top+_+d,this.bottom-e[g.line].height));!function(t,e,i){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;s.save();const n=r(i.lineWidth,1);if(s.fillStyle=r(i.fillStyle,a),s.lineCap=r(i.lineCap,"butt"),s.lineDashOffset=r(i.lineDashOffset,0),s.lineJoin=r(i.lineJoin,"miter"),s.lineWidth=n,s.strokeStyle=r(i.strokeStyle,a),s.setLineDash(r(i.lineDash,[])),o.usePointStyle){const a={radius:m*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},r=l.xPlus(t,p/2);ke(s,a,r,e+f,o.pointStyleWidth&&p)}else{const o=e+Math.max((u-m)/2,0),a=l.leftForLtr(t,p),r=gi(i.borderRadius);s.beginPath(),Object.values(r).some((t=>0!==t))?Le(s,{x:a,y:o,w:p,h:m,radius:r}):s.rect(a,o,p,m),s.fill(),0!==n&&s.stroke()}s.restore()}(l.x(P),D,v),P=ft(k,P+p+f,x?P+S:this.right,t.rtl),function(t,e,i){Ae(s,i.text,t,e+b/2,h,{strikethrough:i.hidden,textAlign:l.textAlign(i.textAlign)})}(l.x(P),D,v),x?g.x+=S+d:g.y+=y})),wi(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=mi(e.font),s=pi(e.padding);if(!e.display)return;const n=yi(t.rtl,this.left,this.width),o=this.ctx,a=e.position,r=i.size/2,l=s.top+r;let h,c=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+l,c=ut(t.align,c,this.right-d);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);h=l+ut(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const u=ut(a,c,c+d);o.textAlign=n.textAlign(dt(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Ae(o,e.text,u,h,i)}_computeTitleHeight(){const t=this.options.title,e=mi(t.font),i=pi(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,n;if(Q(t,this.left,this.right)&&Q(e,this.top,this.bottom))for(n=this.legendHitBoxes,i=0;i<n.length;++i)if(s=n[i],Q(t,s.left,s.left+s.width)&&Q(e,s.top,s.top+s.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){if(("mousemove"===t||"mouseout"===t)&&(e.onHover||e.onLeave))return!0;if(e.onClick&&("click"===t||"mouseup"===t))return!0;return!1}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){const o=this._hoveredItem,a=(n=i,null!==(s=o)&&null!==n&&s.datasetIndex===n.datasetIndex&&s.index===n.index);o&&!a&&c(e.onLeave,[t,o,this],this),this._hoveredItem=i,i&&!a&&c(e.onHover,[t,i,this],this)}else i&&c(e.onClick,[t,i,this],this);var s,n}}var Ro={id:"legend",_element:Eo,start(t,e,i){const s=t.legend=new Eo({ctx:t.ctx,options:i,chart:t});Zi.configure(t,s,i),Zi.addBox(t,s)},stop(t){Zi.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const s=t.legend;Zi.configure(t,s,i),s.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const s=e.datasetIndex,n=i.chart;n.isDatasetVisible(s)?(n.hide(s),e.hidden=!0):(n.show(s),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:n,color:o}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const a=t.controller.getStyle(i?0:void 0),r=pi(a.borderWidth);return{text:e[t.index].label,fillStyle:a.backgroundColor,fontColor:o,hidden:!t.visible,lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:(r.width+r.height)/4,strokeStyle:a.borderColor,pointStyle:s||a.pointStyle,rotation:a.rotation,textAlign:n||a.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Io extends Es{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const n=s(i.text)?i.text.length:1;this._padding=pi(i.padding);const o=n*mi(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:s,right:n,options:o}=this,a=o.align;let r,l,h,c=0;return this.isHorizontal()?(l=ut(a,i,n),h=e+t,r=n-i):("left"===o.position?(l=i+t,h=ut(a,s,e),c=-.5*D):(l=n-t,h=ut(a,e,s),c=.5*D),r=s-e),{titleX:l,titleY:h,maxWidth:r,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=mi(e.font),s=i.lineHeight/2+this._padding.top,{titleX:n,titleY:o,maxWidth:a,rotation:r}=this._drawArgs(s);Ae(t,e.text,0,0,i,{color:e.color,maxWidth:a,rotation:r,textAlign:dt(e.align),textBaseline:"middle",translation:[n,o]})}}var zo={id:"title",_element:Io,start(t,e,i){!function(t,e){const i=new Io({ctx:t.ctx,options:e,chart:t});Zi.configure(t,i,e),Zi.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;Zi.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const s=t.titleBlock;Zi.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Fo=new WeakMap;var Vo={id:"subtitle",start(t,e,i){const s=new Io({ctx:t.ctx,options:i,chart:t});Zi.configure(t,s,i),Zi.addBox(t,s),Fo.set(t,s)},stop(t){Zi.removeBox(t,Fo.get(t)),Fo.delete(t)},beforeUpdate(t,e,i){const s=Fo.get(t);Zi.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Bo={average(t){if(!t.length)return!1;let e,i,s=0,n=0,o=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();s+=t.x,n+=t.y,++o}}return{x:s/o,y:n/o}},nearest(t,e){if(!t.length)return!1;let i,s,n,o=e.x,a=e.y,r=Number.POSITIVE_INFINITY;for(i=0,s=t.length;i<s;++i){const s=t[i].element;if(s&&s.hasValue()){const t=X(e,s.getCenterPoint());t<r&&(r=t,n=s)}}if(n){const t=n.tooltipPosition();o=t.x,a=t.y}return{x:o,y:a}}};function No(t,e){return e&&(s(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Wo(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function jo(t,e){const{element:i,datasetIndex:s,index:n}=e,o=t.getDatasetMeta(s).controller,{label:a,value:r}=o.getLabelAndValue(n);return{chart:t,label:a,parsed:o.getParsed(n),raw:t.data.datasets[s].data[n],formattedValue:r,dataset:o.getDataset(),dataIndex:n,datasetIndex:s,element:i}}function Ho(t,e){const i=t.chart.ctx,{body:s,footer:n,title:o}=t,{boxWidth:a,boxHeight:r}=e,l=mi(e.bodyFont),h=mi(e.titleFont),c=mi(e.footerFont),u=o.length,f=n.length,g=s.length,p=pi(e.padding);let m=p.height,b=0,x=s.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(x+=t.beforeBody.length+t.afterBody.length,u&&(m+=u*h.lineHeight+(u-1)*e.titleSpacing+e.titleMarginBottom),x){m+=g*(e.displayColors?Math.max(r,l.lineHeight):l.lineHeight)+(x-g)*l.lineHeight+(x-1)*e.bodySpacing}f&&(m+=e.footerMarginTop+f*c.lineHeight+(f-1)*e.footerSpacing);let _=0;const y=function(t){b=Math.max(b,i.measureText(t).width+_)};return i.save(),i.font=h.string,d(t.title,y),i.font=l.string,d(t.beforeBody.concat(t.afterBody),y),_=e.displayColors?a+2+e.boxPadding:0,d(s,(t=>{d(t.before,y),d(t.lines,y),d(t.after,y)})),_=0,i.font=c.string,d(t.footer,y),i.restore(),b+=p.width,{width:b,height:m}}function $o(t,e,i,s){const{x:n,width:o}=i,{width:a,chartArea:{left:r,right:l}}=t;let h="center";return"center"===s?h=n<=(r+l)/2?"left":"right":n<=o/2?h="left":n>=a-o/2&&(h="right"),function(t,e,i,s){const{x:n,width:o}=s,a=i.caretSize+i.caretPadding;return"left"===t&&n+o+a>e.width||"right"===t&&n-o-a<0||void 0}(h,t,e,i)&&(h="center"),h}function Yo(t,e,i){const s=i.yAlign||e.yAlign||function(t,e){const{y:i,height:s}=e;return i<s/2?"top":i>t.height-s/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||$o(t,e,i,s),yAlign:s}}function Uo(t,e,i,s){const{caretSize:n,caretPadding:o,cornerRadius:a}=t,{xAlign:r,yAlign:l}=i,h=n+o,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=gi(a);let g=function(t,e){let{x:i,width:s}=t;return"right"===e?i-=s:"center"===e&&(i-=s/2),i}(e,r);const p=function(t,e,i){let{y:s,height:n}=t;return"top"===e?s+=i:s-="bottom"===e?n+i:n/2,s}(e,l,h);return"center"===l?"left"===r?g+=h:"right"===r&&(g-=h):"left"===r?g-=Math.max(c,u)+n:"right"===r&&(g+=Math.max(d,f)+n),{x:Z(g,0,s.width-e.width),y:Z(p,0,s.height-e.height)}}function Xo(t,e,i){const s=pi(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-s.right:t.x+s.left}function qo(t){return No([],Wo(t))}function Ko(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class Go extends Es{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,n=new ys(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=(t=this.chart.getContext(),e=this,i=this._tooltipItems,_i(t,{tooltip:e,tooltipItems:i,type:"tooltip"})));var t,e,i}getTitle(t,e){const{callbacks:i}=e,s=i.beforeTitle.apply(this,[t]),n=i.title.apply(this,[t]),o=i.afterTitle.apply(this,[t]);let a=[];return a=No(a,Wo(s)),a=No(a,Wo(n)),a=No(a,Wo(o)),a}getBeforeBody(t,e){return qo(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:i}=e,s=[];return d(t,(t=>{const e={before:[],lines:[],after:[]},n=Ko(i,t);No(e.before,Wo(n.beforeLabel.call(this,t))),No(e.lines,n.label.call(this,t)),No(e.after,Wo(n.afterLabel.call(this,t))),s.push(e)})),s}getAfterBody(t,e){return qo(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,s=i.beforeFooter.apply(this,[t]),n=i.footer.apply(this,[t]),o=i.afterFooter.apply(this,[t]);let a=[];return a=No(a,Wo(s)),a=No(a,Wo(n)),a=No(a,Wo(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],n=[],o=[];let a,r,l=[];for(a=0,r=e.length;a<r;++a)l.push(jo(this.chart,e[a]));return t.filter&&(l=l.filter(((e,s,n)=>t.filter(e,s,n,i)))),t.itemSort&&(l=l.sort(((e,s)=>t.itemSort(e,s,i)))),d(l,(e=>{const i=Ko(t.callbacks,e);s.push(i.labelColor.call(this,e)),n.push(i.labelPointStyle.call(this,e)),o.push(i.labelTextColor.call(this,e))})),this.labelColors=s,this.labelPointStyles=n,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let n,o=[];if(s.length){const t=Bo[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const e=this._size=Ho(this,i),a=Object.assign({},t,e),r=Yo(this.chart,i,a),l=Uo(i,a,r,this.chart);this.xAlign=r.xAlign,this.yAlign=r.yAlign,n={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(n={opacity:0});this._tooltipItems=o,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const n=this.getCaretPosition(t,i,s);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:n}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:r,topRight:l,bottomLeft:h,bottomRight:c}=gi(a),{x:d,y:u}=t,{width:f,height:g}=e;let p,m,b,x,_,y;return"center"===n?(_=u+g/2,"left"===s?(p=d,m=p-o,x=_+o,y=_-o):(p=d+f,m=p+o,x=_-o,y=_+o),b=p):(m="left"===s?d+Math.max(r,h)+o:"right"===s?d+f-Math.max(l,c)-o:this.caretX,"top"===n?(x=u,_=x-o,p=m-o,b=m+o):(x=u+g,_=x+o,p=m+o,b=m-o),y=x),{x1:p,x2:m,x3:b,y1:x,y2:_,y3:y}}drawTitle(t,e,i){const s=this.title,n=s.length;let o,a,r;if(n){const l=yi(i.rtl,this.x,this.width);for(t.x=Xo(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=mi(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,r=0;r<n;++r)e.fillText(s[r],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,r+1===n&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,o){const a=this.labelColors[i],r=this.labelPointStyles[i],{boxHeight:l,boxWidth:h,boxPadding:c}=o,d=mi(o.bodyFont),u=Xo(this,"left",o),f=s.x(u),g=l<d.lineHeight?(d.lineHeight-l)/2:0,p=e.y+g;if(o.usePointStyle){const e={radius:Math.min(h,l)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},i=s.leftForLtr(f,h)+h/2,n=p+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Me(t,e,i,n),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,Me(t,e,i,n)}else{t.lineWidth=n(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const e=s.leftForLtr(f,h-c),i=s.leftForLtr(s.xPlus(f,1),h-c-2),r=gi(a.borderRadius);Object.values(r).some((t=>0!==t))?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Le(t,{x:e,y:p,w:h,h:l,radius:r}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),Le(t,{x:i,y:p+1,w:h-2,h:l-2,radius:r}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(e,p,h,l),t.strokeRect(e,p,h,l),t.fillStyle=a.backgroundColor,t.fillRect(i,p+1,h-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:n,bodyAlign:o,displayColors:a,boxHeight:r,boxWidth:l,boxPadding:h}=i,c=mi(i.bodyFont);let u=c.lineHeight,f=0;const g=yi(i.rtl,this.x,this.width),p=function(i){e.fillText(i,g.x(t.x+f),t.y+u/2),t.y+=u+n},m=g.textAlign(o);let b,x,_,y,v,w,M;for(e.textAlign=o,e.textBaseline="middle",e.font=c.string,t.x=Xo(this,m,i),e.fillStyle=i.bodyColor,d(this.beforeBody,p),f=a&&"right"!==m?"center"===o?l/2+h:l+2+h:0,y=0,w=s.length;y<w;++y){for(b=s[y],x=this.labelTextColors[y],e.fillStyle=x,d(b.before,p),_=b.lines,a&&_.length&&(this._drawColorBox(e,t,y,g,i),u=Math.max(c.lineHeight,r)),v=0,M=_.length;v<M;++v)p(_[v]),u=c.lineHeight;d(b.after,p)}f=0,u=c.lineHeight,d(this.afterBody,p),t.y-=n}drawFooter(t,e,i){const s=this.footer,n=s.length;let o,a;if(n){const r=yi(i.rtl,this.x,this.width);for(t.x=Xo(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=r.textAlign(i.footerAlign),e.textBaseline="middle",o=mi(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<n;++a)e.fillText(s[a],r.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:n,yAlign:o}=this,{x:a,y:r}=t,{width:l,height:h}=i,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=gi(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+c,r),"top"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+l-d,r),e.quadraticCurveTo(a+l,r,a+l,r+d),"center"===o&&"right"===n&&this.drawCaret(t,e,i,s),e.lineTo(a+l,r+h-f),e.quadraticCurveTo(a+l,r+h,a+l-f,r+h),"bottom"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+u,r+h),e.quadraticCurveTo(a,r+h,a,r+h-u),"center"===o&&"left"===n&&this.drawCaret(t,e,i,s),e.lineTo(a,r+c),e.quadraticCurveTo(a,r,a+c,r),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,n=i&&i.y;if(s||n){const i=Bo[t.position].call(this,this._active,this._eventPosition);if(!i)return;const o=this._size=Ho(this,t),a=Object.assign({},i,this._size),r=Yo(e,t,a),l=Uo(t,a,r,e);s._to===l.x&&n._to===l.y||(this.xAlign=r.xAlign,this.yAlign=r.yAlign,this.width=o.width,this.height=o.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=pi(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,s,e),vi(t,e.textDirection),n.y+=o.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),wi(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),n=!u(i,s),o=this._positionChanged(s,e);(n||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,n=this._active||[],o=this._getActiveElements(t,n,e,i),a=this._positionChanged(o,t),r=e||!u(o,n)||a;return r&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),r}_getActiveElements(t,e,i,s){const n=this.options;if("mouseout"===t.type)return[];if(!s)return e;const o=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:n}=this,o=Bo[n.position].call(this,t,e);return!1!==o&&(i!==o.x||s!==o.y)}}Go.positioners=Bo;var Zo={id:"tooltip",_element:Go,positioners:Bo,afterInit(t,e,i){i&&(t.tooltip=new Go({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",i))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:t,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,s=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(s>0&&e.dataIndex<s)return i[e.dataIndex]}return""},afterTitle:t,beforeBody:t,beforeLabel:t,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const s=t.formattedValue;return i(s)||(e+=s),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:t,afterBody:t,beforeFooter:t,footer:t,afterFooter:t}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Jo=Object.freeze({__proto__:null,Decimation:go,Filler:To,Legend:Ro,SubTitle:Vo,Title:zo,Tooltip:Zo});function Qo(t,e,i,s){const n=t.indexOf(e);if(-1===n)return((t,e,i,s)=>("string"==typeof e?(i=t.push(e)-1,s.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,s);return n!==t.lastIndexOf(e)?i:n}class ta extends $s{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:s}of e)t[i]===s&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(i(t))return null;const s=this.getLabels();return((t,e)=>null===t?null:Z(Math.round(t),0,e))(e=isFinite(e)&&s[e]===t?e:Qo(s,t,r(e,t),this._addedLabels),s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)s.push({value:i});return s}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function ea(t,e,{horizontal:i,minRotation:s}){const n=H(s),o=(i?Math.sin(n):Math.cos(n))||.001,a=.75*e*(""+t).length;return Math.min(e/o,a)}ta.id="category",ta.defaults={ticks:{callback:ta.prototype.getLabelForValue}};class ia extends $s{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return i(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this;const o=t=>s=e?s:t,a=t=>n=i?n:t;if(t){const t=z(s),e=z(n);t<0&&e<0?a(0):t>0&&e>0&&o(0)}if(s===n){let e=1;(n>=Number.MAX_SAFE_INTEGER||s<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*n)),a(n+e),t||o(s-e)}this.min=s,this.max=n}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:s}=t;return s?(e=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n=function(t,e){const s=[],{bounds:n,step:o,min:a,max:r,precision:l,count:h,maxTicks:c,maxDigits:d,includeBounds:u}=t,f=o||1,g=c-1,{min:p,max:m}=e,b=!i(a),x=!i(r),_=!i(h),y=(m-p)/(d+1);let v,w,M,k,S=F((m-p)/g/f)*f;if(S<1e-14&&!b&&!x)return[{value:p},{value:m}];k=Math.ceil(m/S)-Math.floor(p/S),k>g&&(S=F(k*S/g/f)*f),i(l)||(v=Math.pow(10,l),S=Math.ceil(S*v)/v),"ticks"===n?(w=Math.floor(p/S)*S,M=Math.ceil(m/S)*S):(w=p,M=m),b&&x&&o&&W((r-a)/o,S/1e3)?(k=Math.round(Math.min((r-a)/S,c)),S=(r-a)/k,w=a,M=r):_?(w=b?a:w,M=x?r:M,k=h-1,S=(M-w)/k):(k=(M-w)/S,k=N(k,Math.round(k),S/1e3)?Math.round(k):Math.ceil(k));const P=Math.max(Y(S),Y(w));v=Math.pow(10,i(l)?P:l),w=Math.round(w*v)/v,M=Math.round(M*v)/v;let D=0;for(b&&(u&&w!==a?(s.push({value:a}),w<a&&D++,N(Math.round((w+D*S)*v)/v,a,ea(a,y,t))&&D++):w<a&&D++);D<k;++D)s.push({value:Math.round((w+D*S)*v)/v});return x&&u&&M!==r?s.length&&N(s[s.length-1].value,r,ea(r,y,t))?s[s.length-1].value=r:s.push({value:r}):x&&M!==r||s.push({value:M}),s}({maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&j(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return li(t,this.chart.options.locale,this.options.ticks.format)}}class sa extends ia{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=o(t)?t:0,this.max=o(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=H(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/s))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function na(t){return 1===t/Math.pow(10,Math.floor(I(t)))}sa.id="linear",sa.defaults={ticks:{callback:Is.formatters.numeric}};class oa extends $s{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=ia.prototype.parse.apply(this,[t,e]);if(0!==i)return o(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=o(t)?Math.max(0,t):null,this.max=o(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const n=e=>i=t?i:e,o=t=>s=e?s:t,a=(t,e)=>Math.pow(10,Math.floor(I(t))+e);i===s&&(i<=0?(n(1),o(10)):(n(a(i,-1)),o(a(s,1)))),i<=0&&n(a(s,-1)),s<=0&&o(a(i,1)),this._zero&&this.min!==this._suggestedMin&&i===a(this.min,0)&&n(a(i,-1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e=function(t,e){const i=Math.floor(I(e.max)),s=Math.ceil(e.max/Math.pow(10,i)),n=[];let o=a(t.min,Math.pow(10,Math.floor(I(e.min)))),r=Math.floor(I(o)),l=Math.floor(o/Math.pow(10,r)),h=r<0?Math.pow(10,Math.abs(r)):1;do{n.push({value:o,major:na(o)}),++l,10===l&&(l=1,++r,h=r>=0?1:h),o=Math.round(l*Math.pow(10,r)*h)/h}while(r<i||r===i&&l<s);const c=a(t.max,o);return n.push({value:c,major:na(o)}),n}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&j(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":li(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=I(t),this._valueRange=I(this.max)-I(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(I(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function aa(t){const e=t.ticks;if(e.display&&t.display){const t=pi(e.backdropPadding);return r(e.font&&e.font.size,ne.font.size)+t.height}return 0}function ra(t,e,i,s,n){return t===s||t===n?{start:e-i/2,end:e+i/2}:t<s||t>n?{start:e-i,end:e}:{start:e,end:e+i}}function la(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],o=[],a=t._pointLabels.length,r=t.options.pointLabels,l=r.centerPointLabels?D/a:0;for(let u=0;u<a;u++){const a=r.setContext(t.getPointLabelContext(u));o[u]=a.padding;const f=t.getPointPosition(u,t.drawingArea+o[u],l),g=mi(a.font),p=(h=t.ctx,c=g,d=s(d=t._pointLabels[u])?d:[d],{w:ye(h,c.string,d),h:d.length*c.lineHeight});n[u]=p;const m=K(t.getIndexAngle(u)+l),b=Math.round($(m));ha(i,e,m,ra(b,f.x,p.w,0,180),ra(b,f.y,p.h,90,270))}var h,c,d;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const s=[],n=t._pointLabels.length,o=t.options,a=aa(o)/2,r=t.drawingArea,l=o.pointLabels.centerPointLabels?D/n:0;for(let o=0;o<n;o++){const n=t.getPointPosition(o,r+a+i[o],l),h=Math.round($(K(n.angle+L))),c=e[o],d=ua(n.y,c.h,h),u=ca(h),f=da(n.x,c.w,u);s.push({x:n.x,y:d,textAlign:u,left:f,top:d,right:f+c.w,bottom:d+c.h})}return s}(t,n,o)}function ha(t,e,i,s,n){const o=Math.abs(Math.sin(i)),a=Math.abs(Math.cos(i));let r=0,l=0;s.start<e.l?(r=(e.l-s.start)/o,t.l=Math.min(t.l,e.l-r)):s.end>e.r&&(r=(s.end-e.r)/o,t.r=Math.max(t.r,e.r+r)),n.start<e.t?(l=(e.t-n.start)/a,t.t=Math.min(t.t,e.t-l)):n.end>e.b&&(l=(n.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}function ca(t){return 0===t||180===t?"center":t<180?"left":"right"}function da(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function ua(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function fa(t,e,i,s){const{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,O);else{let i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let o=1;o<s;o++)i=t.getPointPosition(o,e),n.lineTo(i.x,i.y)}}oa.id="logarithmic",oa.defaults={ticks:{callback:Is.formatters.logarithmic,major:{enabled:!0}}};class ga extends ia{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=pi(aa(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=o(t)&&!isNaN(t)?t:0,this.max=o(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/aa(this.options))}generateTickLabels(t){ia.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=c(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?la(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){return K(t*(O/(this._pointLabels.length||1))+H(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(i(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(i(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return _i(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-L+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:n}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:n}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),fa(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:n}=e,o=this._pointLabels.length;let a,r,l;if(e.pointLabels.display&&function(t,e){const{ctx:s,options:{pointLabels:n}}=t;for(let o=e-1;o>=0;o--){const e=n.setContext(t.getPointLabelContext(o)),a=mi(e.font),{x:r,y:l,textAlign:h,left:c,top:d,right:u,bottom:f}=t._pointLabelItems[o],{backdropColor:g}=e;if(!i(g)){const t=gi(e.borderRadius),i=pi(e.backdropPadding);s.fillStyle=g;const n=c-i.left,o=d-i.top,a=u-c+i.width,r=f-d+i.height;Object.values(t).some((t=>0!==t))?(s.beginPath(),Le(s,{x:n,y:o,w:a,h:r,radius:t}),s.fill()):s.fillRect(n,o,a,r)}Ae(s,t._pointLabels[o],r,l+a.lineHeight/2,a,{color:e.color,textAlign:h,textBaseline:"middle"})}}(this,o),n.display&&this.ticks.forEach(((t,e)=>{if(0!==e){r=this.getDistanceFromCenterForValue(t.value);!function(t,e,i,s){const n=t.ctx,o=e.circular,{color:a,lineWidth:r}=e;!o&&!s||!a||!r||i<0||(n.save(),n.strokeStyle=a,n.lineWidth=r,n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),fa(t,i,o,s),n.closePath(),n.stroke(),n.restore())}(this,n.setContext(this.getContext(e-1)),r,o)}})),s.display){for(t.save(),a=o-1;a>=0;a--){const i=s.setContext(this.getPointLabelContext(a)),{color:n,lineWidth:o}=i;o&&n&&(t.lineWidth=o,t.strokeStyle=n,t.setLineDash(i.borderDash),t.lineDashOffset=i.borderDashOffset,r=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),l=this.getPointPosition(a,r),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let n,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((s,a)=>{if(0===a&&!e.reverse)return;const r=i.setContext(this.getContext(a)),l=mi(r.font);if(n=this.getDistanceFromCenterForValue(this.ticks[a].value),r.showLabelBackdrop){t.font=l.string,o=t.measureText(s.label).width,t.fillStyle=r.backdropColor;const e=pi(r.backdropPadding);t.fillRect(-o/2-e.left,-n-l.size/2-e.top,o+e.width,l.size+e.height)}Ae(t,s.label,0,-n,l,{color:r.color})})),t.restore()}drawTitle(){}}ga.id="radialLinear",ga.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Is.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},ga.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},ga.descriptors={angleLines:{_fallback:"grid"}};const pa={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ma=Object.keys(pa);function ba(t,e){return t-e}function xa(t,e){if(i(e))return null;const s=t._adapter,{parser:n,round:a,isoWeekday:r}=t._parseOpts;let l=e;return"function"==typeof n&&(l=n(l)),o(l)||(l="string"==typeof n?s.parse(l,n):s.parse(l)),null===l?null:(a&&(l="week"!==a||!B(r)&&!0!==r?s.startOf(l,a):s.startOf(l,"isoWeek",r)),+l)}function _a(t,e,i,s){const n=ma.length;for(let o=ma.indexOf(t);o<n-1;++o){const t=pa[ma[o]],n=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(n*t.size))<=s)return ma[o]}return ma[n-1]}function ya(t,e,i){if(i){if(i.length){const{lo:s,hi:n}=tt(i,e);t[i[s]>=e?i[s]:i[n]]=!0}}else t[e]=!0}function va(t,e,i){const s=[],n={},o=e.length;let a,r;for(a=0;a<o;++a)r=e[a],n[r]=a,s.push({value:r,major:!1});return 0!==o&&i?function(t,e,i,s){const n=t._adapter,o=+n.startOf(e[0].value,s),a=e[e.length-1].value;let r,l;for(r=o;r<=a;r=+n.add(r,1,s))l=i[r],l>=0&&(e[l].major=!0);return e}(t,s,n,i):s}class wa extends $s{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),s=this._adapter=new wn._date(t.adapters.date);s.init(e),b(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:xa(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:n,minDefined:a,maxDefined:r}=this.getUserBounds();function l(t){a||isNaN(t.min)||(s=Math.min(s,t.min)),r||isNaN(t.max)||(n=Math.max(n,t.max))}a&&r||(l(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||l(this.getMinMax(!1))),s=o(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),n=o(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,n-1),this.max=Math.max(s+1,n)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const n=this.min,o=st(s,n,this.max);return this._unit=e.unit||(i.autoSkip?_a(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,s,n){for(let o=ma.length-1;o>=ma.indexOf(i);o--){const i=ma[o];if(pa[i].common&&t._adapter.diff(n,s,i)>=e-1)return i}return ma[i?ma.indexOf(i):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=ma.indexOf(t)+1,i=ma.length;e<i;++e)if(pa[ma[e]].common)return ma[e]}(this._unit):void 0,this.initOffsets(s),t.reverse&&o.reverse(),va(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map((t=>+t.value)))}initOffsets(t){let e,i,s=0,n=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),s=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),n=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;s=Z(s,0,o),n=Z(n,0,o),this._offsets={start:s,end:n,factor:1/(s+1+n)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,n=s.time,o=n.unit||_a(n.minUnit,e,i,this._getLabelCapacity(e)),a=r(n.stepSize,1),l="week"===o&&n.isoWeekday,h=B(l)||!0===l,c={};let d,u,f=e;if(h&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,h?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const g="data"===s.ticks.source&&this.getDataTimestamps();for(d=f,u=0;d<i;d=+t.add(d,a,o),u++)ya(c,d,g);return d!==i&&"ticks"!==s.bounds&&1!==u||ya(c,d,g),Object.keys(c).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,s){const n=this.options,o=n.time.displayFormats,a=this._unit,r=this._majorUnit,l=a&&o[a],h=r&&o[r],d=i[e],u=r&&h&&d&&d.major,f=this._adapter.format(t,s||(u?h:l)),g=n.ticks.callback;return g?c(g,[f,e,i],this):f}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=H(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*n+a*o,h:i*o+a*n}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,n=this._tickFormatFunction(t,0,va(this,[t],this._majorUnit),s),o=this._getLabelSize(n),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,e=s.length;t<e;++t)i=i.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(xa(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return rt(t.sort(ba))}}function Ma(t,e,i){let s,n,o,a,r=0,l=t.length-1;i?(e>=t[r].pos&&e<=t[l].pos&&({lo:r,hi:l}=et(t,"pos",e)),({pos:s,time:o}=t[r]),({pos:n,time:a}=t[l])):(e>=t[r].time&&e<=t[l].time&&({lo:r,hi:l}=et(t,"time",e)),({time:s,pos:o}=t[r]),({time:n,pos:a}=t[l]));const h=n-s;return h?o+(a-o)*(e-s)/h:o}wa.id="time",wa.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class ka extends wa{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Ma(e,this.min),this._tableRange=Ma(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],n=[];let o,a,r,l,h;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],r=s[o-1],l=s[o],Math.round((h+r)/2)!==l&&n.push({time:l,pos:o/(a-1)});return n}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Ma(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Ma(this._table,i*this._tableRange+this._minPos,!0)}}ka.id="timeseries",ka.defaults=wa.defaults;var Sa=Object.freeze({__proto__:null,CategoryScale:ta,LinearScale:sa,LogarithmicScale:oa,RadialLinearScale:ga,TimeScale:wa,TimeSeriesScale:ka});return bn.register(Bn,Sa,co,Jo),bn.helpers={...Ti},bn._adapters=wn,bn.Animation=xs,bn.Animations=ys,bn.animator=mt,bn.controllers=Us.controllers.items,bn.DatasetController=Ls,bn.Element=Es,bn.elements=co,bn.Interaction=Vi,bn.layouts=Zi,bn.platforms=ps,bn.Scale=$s,bn.Ticks=Is,Object.assign(bn,Bn,Sa,co,Jo,ps),bn.Chart=bn,"undefined"!=typeof window&&(window.Chart=bn),bn}));

/**** contextmenu-menus.js****/
var contextMenus = {};
const copyIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
const cutIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`;
const pasteIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px; position: relative; top: -1px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`;
const downloadIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px; position: relative; top: -1px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;
const deleteIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none" style="margin-right: 7px" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;
const infoIcon = `<span class="icon icon-info-circle" style="padding-right:0.5rem"></span>`;
const addIcon = `<span class="icon icon-plus" style="padding-right:0.5rem"></span>`;
const editIcon = `<span class="icon icon-edit" style="padding-right:0.5rem"></span>`;
const dashboardIcon = `<span class="icon icon-home" style="padding-right:0.5rem"></span>`;
const terminalIcon = `<span class="icon icon-globe" style="padding-right:0.5rem"></span>`;

function openDefaultContextMenu(event) {
    event?.preventDefault();
    event?.stopPropagation();
    if(!contextMenus['DEFAULT'])
    {
        let dashboardUid = document.querySelector('.dashboard').getAttribute('x-uid');

        const menuItems = [
            {
                content: `${dashboardIcon}Edit Dashboard`,
                events: {
                    click: (e) => {
                        document.location = '/settings/dashboards/' + dashboardUid                
                    }
                }
            },
            {
                content: `${terminalIcon}Terminal`,
                events: {
                    click: (e) => openTerminal()
                }
            }

            ];
            
            let menu = new ContextMenu({
                menuItems
            });
              
            menu.init();
            contextMenus['DEFAULT'] = menu;
        }
    
        contextMenus['DEFAULT'].open(event);
}

function openContextMenu(event, app){
    event?.preventDefault();
    event?.stopPropagation();
    if(typeof(app) === 'string')
        app = JSON.parse(app);

        
    let uid = app.Uid;
    let ele = document.getElementById(uid);
    let groupUid = ele.closest('.db-group').getAttribute('id');
    let dashboardUid = ele.closest('.dashboard').getAttribute('x-uid');
    let ssh = ele.getAttribute('x-ssh') === '1';
    let docker = ele.getAttribute('x-docker');
    if(!contextMenus[uid])
    {
        let menuItems = [];
        if(app._Type !== 'DashboardTerminal'){
            menuItems.push(
            {
                content: `${infoIcon}Up-Time`,
                events: {
                    click: (e) => openUpTime(app)                
                }
            });
        }

        menuItems = menuItems.concat([
        {
          content: `${deleteIcon}Delete`
        },
        {
            content: `${editIcon}Edit Group`,
            divider: "top", // top, bottom, top-bottom
            events: {
                click: (e) => {
                    document.location = '/settings/groups/' + groupUid                
                }
            }
        },
        {
            content: `${dashboardIcon}Edit Dashboard`,
            events: {
                click: (e) => {
                    document.location = '/settings/dashboards/' + dashboardUid                
                }
            }
        }
        ]);
        if(ssh){
            menuItems.push(
            {
                divider: "top",
                content: `${terminalIcon}Terminal`,
                events: {
                    click: (e) => openTerminal(1, uid)
                }
            });
        }
        else if(docker){
            menuItems.push(
            {
                divider: "top",
                content: `${terminalIcon}Terminal`,
                events: {
                    click: (e) => openTerminal(2, uid)
                }
            });
        }
        
        let menu = new ContextMenu({
            menuItems
        });
          
        menu.init();
        contextMenus[uid] = menu;
    }

    contextMenus[uid].open(event);
}

/**** contextmenu.js****/
class ContextMenu {
    contextMenu;
    static otherMenus = [];

    constructor({ target = null, menuItems = [], mode = "dark" }) {
      this.target = target;
      this.menuItems = menuItems;
      this.mode = mode;
      this.menuItemsNode = this.getMenuItemsNode();
      this.isOpened = false;
      ContextMenu.otherMenus.push(this);
    }
  
    getMenuItemsNode() {
      const nodes = [];
  
      if (!this.menuItems) {
        console.error("getMenuItemsNode :: Please enter menu items");
        return [];
      }
  
      this.menuItems.forEach((data, index) => {
        const item = this.createItemMarkup(data);
        item.firstChild.setAttribute(
          "style",
          `animation-delay: ${index * 0.08}s`
        );
        nodes.push(item);
      });
  
      return nodes;
    }
  
    createItemMarkup(data) {
      const button = document.createElement("BUTTON");
      const item = document.createElement("LI");
  
      button.innerHTML = data.content;
      button.classList.add("contextMenu-button");
      item.classList.add("contextMenu-item");
  
      if (data.divider) item.setAttribute("data-divider", data.divider);
      item.appendChild(button);
  
      if (data.events && data.events.length !== 0) {
        Object.entries(data.events).forEach((event) => {
          const [key, value] = event;
          button.addEventListener(key, value);
        });
      }
  
      return item;
    }
  
    renderMenu() {
      const menuContainer = document.createElement("UL");
  
      menuContainer.classList.add("contextMenu");
      menuContainer.setAttribute("data-theme", this.mode);
  
      this.menuItemsNode.forEach((item) => menuContainer.appendChild(item));
  
      return menuContainer;
    }
  
    closeMenu() {
      if (this.isOpened) {
        this.isOpened = false;
        this.contextMenu.remove();
      }
    }

    open(event){        
        for(let other of ContextMenu.otherMenus)
            other.closeMenu();
        event.preventDefault();
        this.isOpened = true;

        const { clientX, clientY } = event;
        document.body.appendChild(this.contextMenu);

        const positionY =
          clientY + this.contextMenu.scrollHeight >= window.innerHeight
            ? window.innerHeight - this.contextMenu.scrollHeight - 20
            : clientY;
        const positionX =
          clientX + this.contextMenu.scrollWidth >= window.innerWidth
            ? window.innerWidth - this.contextMenu.scrollWidth - 20
            : clientX;

        this.contextMenu.setAttribute(
          "style",
          `--width: ${this.contextMenu.scrollWidth}px;
          --height: ${this.contextMenu.scrollHeight}px;
          --top: ${positionY}px;
          --left: ${positionX}px;`
        );
    }
  
    init() {
      this.contextMenu = this.renderMenu();

      document.addEventListener("click", () => this.closeMenu());
      window.addEventListener("blur", () => this.closeMenu());
    }
  }
/**** iframe.js****/
function openIframe(event, app){
    event?.preventDefault();
    event?.stopPropagation();
    if(typeof(app) === 'string')
        app = JSON.parse(app);

    let appItem = document.getElementById(app.Uid);
    if(!appItem)
        return;
    let group = appItem.parentNode;

    let div = document.createElement('div');
    div.className = 'iframe-content';

    let side = document.createElement('div');
    side.className = 'side';
    div.appendChild(side);

    let iframe = document.createElement('iframe');

    const addItem  = function(item)
    {        
        let divChild = document.createElement('a');        
        divChild.className = 'db-item db-basic db-link medium';
        let divInner = document.createElement('div');
        divInner.className = 'inner';
        divChild.appendChild(divInner);
        let appImg = item?.querySelector('img');
        if(appImg){
            let img = document.createElement('img');
            img.src = appImg.src;
            let imgWrapper = document.createElement('div');
            imgWrapper.className = 'icon';
            imgWrapper.appendChild(img);
            divInner.appendChild(imgWrapper);
        }
        else
        {
            let img = document.createElement('i');
            img.className = 'icon icon-close';
            let imgWrapper = document.createElement('div');
            imgWrapper.className = 'icon';
            imgWrapper.appendChild(img);
            divInner.appendChild(imgWrapper);
        }

        let divContent = document.createElement('div');
        divContent.className = 'content';

        let divTitle = document.createElement('div');
        divTitle.className = 'title';
        divTitle.innerText = item ? item.querySelector('.title').innerText : 'Close';
        divContent.appendChild(divTitle);
        divInner.appendChild(divContent);

        divChild.addEventListener('click', (event) => {
            event.preventDefault();
            if(item === null){
                div.classList.add('closing');
                setTimeout(()=> {
                    div.remove();
                }, 500);
                return false;
            }
            else if(item.className.indexOf('iframe') > 0) {
                iframe.setAttribute('src', item.getAttribute('href'));
            }
            else {
                item.click();
            }
            return false;
        });
        side.appendChild(divChild);
    }
    addItem(null);

    for(let item of group.querySelectorAll('.db-item'))
    {
        addItem(item);
    }

    iframe.setAttribute('seamless', true);
    iframe.setAttribute('src', app.Url);
    iframe.setAttribute('frameBorder', 0);
    div.appendChild(iframe);

    document.body.appendChild(div);
}
/**** iodine.min.js****/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).iodine={})}(this,function(e){function t(e,s,i){if(!e.s){if(i instanceof r){if(!i.s)return void(i.o=t.bind(null,e,s));1&s&&(s=i.s),i=i.v}if(i&&i.then)return void i.then(t.bind(null,e,s),t.bind(null,e,2));e.s=s,e.v=i;const n=e.o;n&&n(e)}}const r=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,s){const i=new e,n=this.s;if(n){const e=1&n?r:s;if(e){try{t(i,1,e(this.v))}catch(e){t(i,2,e)}return i}return this}return this.o=function(e){try{const n=e.v;1&e.s?t(i,1,r?r(n):n):s?t(i,1,s(n)):t(i,2,n)}catch(e){t(i,2,e)}},i},e}();class s{constructor(){this.locale=void 0,this.messages=this._defaultMessages(),this.defaultFieldName="Value"}_dateCompare(e,t,r,s=!1){return!!this.isDate(e)&&!(!this.isDate(t)&&!this.isInteger(t))&&(t="number"==typeof t?t:t.getTime(),"less"===r&&s?e.getTime()<=t:"less"!==r||s?"more"===r&&s?e.getTime()>=t:"more"!==r||s?void 0:e.getTime()>t:e.getTime()<t)}_defaultMessages(){return{after:"The date must be after: '[PARAM]'",afterOrEqual:"The date must be after or equal to: '[PARAM]'",array:"[FIELD] must be an array",before:"The date must be before: '[PARAM]'",beforeOrEqual:"The date must be before or equal to: '[PARAM]'",boolean:"[FIELD] must be true or false",date:"[FIELD] must be a date",different:"[FIELD] must be different to '[PARAM]'",endingWith:"[FIELD] must end with '[PARAM]'",email:"[FIELD] must be a valid email address",falsy:"[FIELD] must be a falsy value (false, 'false', 0 or '0')",in:"[FIELD] must be one of the following options: [PARAM]",integer:"[FIELD] must be an integer",json:"[FIELD] must be a parsable JSON object string",max:"[FIELD] must be less than or equal to [PARAM]",min:"[FIELD] must be greater than or equal to [PARAM]",maxLength:"[FIELD] must not be greater than '[PARAM]' in character length",minLength:"[FIELD] must not be less than '[PARAM]' character length",notIn:"[FIELD] must not be one of the following options: [PARAM]",numeric:"[FIELD] must be numeric",optional:"[FIELD] is optional",regexMatch:"[FIELD] must satisify the regular expression: [PARAM]",required:"[FIELD] must be present",same:"[FIELD] must be '[PARAM]'",startingWith:"[FIELD] must start with '[PARAM]'",string:"[FIELD] must be a string",truthy:"[FIELD] must be a truthy value (true, 'true', 1 or '1')",url:"[FIELD] must be a valid url",uuid:"[FIELD] must be a valid UUID"}}_prepare(e,t=[]){return t.length?"optional"===t[0]&&this.isOptional(e)?[]:t.filter(e=>"optional"!==e).map(e=>[e,this._titleCase(e.split(":").shift()),e.split(":").slice(1)]):[]}_titleCase(e){return`${e[0].toUpperCase()}${e.slice(1)}`}addRule(e,t){s.prototype[`is${this._titleCase(e)}`]=t}asyncIs(e,s=[]){try{let i;const n=this,a=function(a,o,u){var l=[];for(var f in a)l.push(f);return function(e,s,i){var n,a,o=-1;return function u(l){try{for(;++o<e.length&&(!i||!i());)if((l=s(o))&&l.then){if(!((f=l)instanceof r&&1&f.s))return void l.then(u,a||(a=t.bind(null,n=new r,2)));l=l.v}n?t(n,1,l):n=l}catch(e){t(n||(n=new r),2,e)}var f}(),n}(l,function(t){return r=l[t],Promise.resolve(n[`is${s[r][1]}`].apply(n,[e,s[r][2].join(":")])).then(function(e){return function(){if(!e)return Promise.resolve(s[r][0]).then(function(e){return i=1,e})}()});var r},function(){return i})}(s=n._prepare(e,s));return Promise.resolve(a&&a.then?a.then(function(e){return!i||e}):!i||a)}catch(e){return Promise.reject(e)}}asyncIsValid(e,t=[]){try{return Promise.resolve(this.asyncIs(e,t)).then(function(e){return!0===e})}catch(e){return Promise.reject(e)}}getErrorMessage(e,t){let{param:r,field:s}="object"==typeof t?t:{param:t,field:void 0};const i=e.split(":");let n=i.shift();r=r||i.join(":"),["after","afterOrEqual","before","beforeOrEqual"].includes(n)&&(r=new Date(parseInt(r)).toLocaleTimeString(this.locale,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"numeric",hour12:!1}));let a=[null,void 0,""].includes(r)?this.messages[n]:this.messages[n].replace("[PARAM]",r);return[null,void 0,""].includes(s)?a.replace("[FIELD]",this.defaultFieldName):a.replace("[FIELD]",s)}isAfter(e,t){return this._dateCompare(e,t,"more",!1)}isAfterOrEqual(e,t){return this._dateCompare(e,t,"more",!0)}isArray(e){return Array.isArray(e)}isBefore(e,t){return this._dateCompare(e,t,"less",!1)}isBeforeOrEqual(e,t){return this._dateCompare(e,t,"less",!0)}isBoolean(e){return[!0,!1].includes(e)}isDate(e){return e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e)}isDifferent(e,t){return e!=t}isEndingWith(e,t){return this.isString(e)&&e.endsWith(t)}isEmail(e){return new RegExp("^\\S+@\\S+[\\.][0-9a-z]+$").test(String(e).toLowerCase())}isFalsy(e){return[0,"0",!1,"false"].includes(e)}isIn(e,t){return("string"==typeof t?t.split(","):t).includes(e)}isInteger(e){return Number.isInteger(e)&&parseInt(e).toString()===e.toString()}isJson(e){try{return"object"==typeof JSON.parse(e)}catch(e){return!1}}isMax(e,t){return parseFloat(e)<=t}isMin(e,t){return parseFloat(e)>=t}isMaxLength(e,t){return"string"==typeof e&&e.length<=t}isMinLength(e,t){return"string"==typeof e&&e.length>=t}isNotIn(e,t){return!this.isIn(e,t)}isNumeric(e){return!isNaN(parseFloat(e))&&isFinite(e)}isOptional(e){return[null,void 0,""].includes(e)}isRegexMatch(e,t){return new RegExp(t).test(String(e))}isRequired(e){return!this.isOptional(e)}isSame(e,t){return e==t}isStartingWith(e,t){return this.isString(e)&&e.startsWith(t)}isString(e){return"string"==typeof e}isTruthy(e){return[1,"1",!0,"true"].includes(e)}isUrl(e){return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$").test(String(e).toLowerCase())}isUuid(e){return new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$").test(String(e).toLowerCase())}is(e,t=[]){for(let r in t=this._prepare(e,t))if(!this[`is${t[r][1]}`].apply(this,[e,t[r][2].join(":")]))return t[r][0];return!0}isValid(e,t=[]){return!0===this.is(e,t)}setErrorMessages(e){this.messages=e}setErrorMessage(e,t){this.messages[e]=t}setLocale(e){this.locale=e}setDefaultFieldName(e){this.defaultFieldName=e}}"undefined"!=typeof window&&(window.Iodine=new s),e.Iodine=s});
/**** jscolor.min.js****/
(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global):function(win){if(!win.document){throw new Error("jscolor needs a window with document")}return factory(win)};return}factory(global)})(typeof window!=="undefined"?window:this,function(window){"use strict";var jscolor=function(){var jsc={initialized:false,instances:[],readyQueue:[],register:function(){if(typeof window!=="undefined"&&window.document){window.document.addEventListener("DOMContentLoaded",jsc.pub.init,false)}},installBySelector:function(selector,rootNode){rootNode=rootNode?jsc.node(rootNode):window.document;if(!rootNode){throw new Error("Missing root node")}var elms=rootNode.querySelectorAll(selector);var matchClass=new RegExp("(^|\\s)("+jsc.pub.lookupClass+")(\\s*(\\{[^}]*\\})|\\s|$)","i");for(var i=0;i<elms.length;i+=1){if(elms[i].jscolor&&elms[i].jscolor instanceof jsc.pub){continue}if(elms[i].type!==undefined&&elms[i].type.toLowerCase()=="color"&&jsc.isColorAttrSupported){continue}var dataOpts,m;if((dataOpts=jsc.getDataAttr(elms[i],"jscolor"))!==null||elms[i].className&&(m=elms[i].className.match(matchClass))){var targetElm=elms[i];var optsStr="";if(dataOpts!==null){optsStr=dataOpts}else if(m){console.warn('Installation using class name is DEPRECATED. Use data-jscolor="" attribute instead.'+jsc.docsRef);if(m[4]){optsStr=m[4]}}var opts=null;if(optsStr.trim()){try{opts=jsc.parseOptionsStr(optsStr)}catch(e){console.warn(e+"\n"+optsStr)}}try{new jsc.pub(targetElm,opts)}catch(e){console.warn(e)}}}},parseOptionsStr:function(str){var opts=null;try{opts=JSON.parse(str)}catch(eParse){if(!jsc.pub.looseJSON){throw new Error("Could not parse jscolor options as JSON: "+eParse)}else{try{opts=new Function("var opts = ("+str+'); return typeof opts === "object" ? opts : {};')()}catch(eEval){throw new Error("Could not evaluate jscolor options: "+eEval)}}}return opts},getInstances:function(){var inst=[];for(var i=0;i<jsc.instances.length;i+=1){if(jsc.instances[i]&&jsc.instances[i].targetElement){inst.push(jsc.instances[i])}}return inst},createEl:function(tagName){var el=window.document.createElement(tagName);jsc.setData(el,"gui",true);return el},node:function(nodeOrSelector){if(!nodeOrSelector){return null}if(typeof nodeOrSelector==="string"){var sel=nodeOrSelector;var el=null;try{el=window.document.querySelector(sel)}catch(e){console.warn(e);return null}if(!el){console.warn("No element matches the selector: %s",sel)}return el}if(jsc.isNode(nodeOrSelector)){return nodeOrSelector}console.warn("Invalid node of type %s: %s",typeof nodeOrSelector,nodeOrSelector);return null},isNode:function(val){if(typeof Node==="object"){return val instanceof Node}return val&&typeof val==="object"&&typeof val.nodeType==="number"&&typeof val.nodeName==="string"},nodeName:function(node){if(node&&node.nodeName){return node.nodeName.toLowerCase()}return false},removeChildren:function(node){while(node.firstChild){node.removeChild(node.firstChild)}},isTextInput:function(el){return el&&jsc.nodeName(el)==="input"&&el.type.toLowerCase()==="text"},isButton:function(el){if(!el){return false}var n=jsc.nodeName(el);return n==="button"||n==="input"&&["button","submit","reset"].indexOf(el.type.toLowerCase())>-1},isButtonEmpty:function(el){switch(jsc.nodeName(el)){case"input":return!el.value||el.value.trim()==="";case"button":return el.textContent.trim()===""}return null},isPassiveEventSupported:function(){var supported=false;try{var opts=Object.defineProperty({},"passive",{get:function(){supported=true}});window.addEventListener("testPassive",null,opts);window.removeEventListener("testPassive",null,opts)}catch(e){}return supported}(),isColorAttrSupported:function(){var elm=window.document.createElement("input");if(elm.setAttribute){elm.setAttribute("type","color");if(elm.type.toLowerCase()=="color"){return true}}return false}(),dataProp:"_data_jscolor",setData:function(){var obj=arguments[0];if(arguments.length===3){var data=obj.hasOwnProperty(jsc.dataProp)?obj[jsc.dataProp]:obj[jsc.dataProp]={};var prop=arguments[1];var value=arguments[2];data[prop]=value;return true}else if(arguments.length===2&&typeof arguments[1]==="object"){var data=obj.hasOwnProperty(jsc.dataProp)?obj[jsc.dataProp]:obj[jsc.dataProp]={};var map=arguments[1];for(var prop in map){if(map.hasOwnProperty(prop)){data[prop]=map[prop]}}return true}throw new Error("Invalid arguments")},removeData:function(){var obj=arguments[0];if(!obj.hasOwnProperty(jsc.dataProp)){return true}for(var i=1;i<arguments.length;i+=1){var prop=arguments[i];delete obj[jsc.dataProp][prop]}return true},getData:function(obj,prop,setDefault){if(!obj.hasOwnProperty(jsc.dataProp)){if(setDefault!==undefined){obj[jsc.dataProp]={}}else{return undefined}}var data=obj[jsc.dataProp];if(!data.hasOwnProperty(prop)&&setDefault!==undefined){data[prop]=setDefault}return data[prop]},getDataAttr:function(el,name){var attrName="data-"+name;var attrValue=el.getAttribute(attrName);return attrValue},setDataAttr:function(el,name,value){var attrName="data-"+name;el.setAttribute(attrName,value)},_attachedGroupEvents:{},attachGroupEvent:function(groupName,el,evnt,func){if(!jsc._attachedGroupEvents.hasOwnProperty(groupName)){jsc._attachedGroupEvents[groupName]=[]}jsc._attachedGroupEvents[groupName].push([el,evnt,func]);el.addEventListener(evnt,func,false)},detachGroupEvents:function(groupName){if(jsc._attachedGroupEvents.hasOwnProperty(groupName)){for(var i=0;i<jsc._attachedGroupEvents[groupName].length;i+=1){var evt=jsc._attachedGroupEvents[groupName][i];evt[0].removeEventListener(evt[1],evt[2],false)}delete jsc._attachedGroupEvents[groupName]}},preventDefault:function(e){if(e.preventDefault){e.preventDefault()}e.returnValue=false},triggerEvent:function(el,eventName,bubbles,cancelable){if(!el){return}var ev=null;if(typeof Event==="function"){ev=new Event(eventName,{bubbles:bubbles,cancelable:cancelable})}else{ev=window.document.createEvent("Event");ev.initEvent(eventName,bubbles,cancelable)}if(!ev){return false}jsc.setData(ev,"internal",true);el.dispatchEvent(ev);return true},triggerInputEvent:function(el,eventName,bubbles,cancelable){if(!el){return}if(jsc.isTextInput(el)){jsc.triggerEvent(el,eventName,bubbles,cancelable)}},eventKey:function(ev){var keys={9:"Tab",13:"Enter",27:"Escape"};if(typeof ev.code==="string"){return ev.code}else if(ev.keyCode!==undefined&&keys.hasOwnProperty(ev.keyCode)){return keys[ev.keyCode]}return null},strList:function(str){if(!str){return[]}return str.replace(/^\s+|\s+$/g,"").split(/\s+/)},hasClass:function(elm,className){if(!className){return false}if(elm.classList!==undefined){return elm.classList.contains(className)}return-1!=(" "+elm.className.replace(/\s+/g," ")+" ").indexOf(" "+className+" ")},addClass:function(elm,className){var classNames=jsc.strList(className);if(elm.classList!==undefined){for(var i=0;i<classNames.length;i+=1){elm.classList.add(classNames[i])}return}for(var i=0;i<classNames.length;i+=1){if(!jsc.hasClass(elm,classNames[i])){elm.className+=(elm.className?" ":"")+classNames[i]}}},removeClass:function(elm,className){var classNames=jsc.strList(className);if(elm.classList!==undefined){for(var i=0;i<classNames.length;i+=1){elm.classList.remove(classNames[i])}return}for(var i=0;i<classNames.length;i+=1){var repl=new RegExp("^\\s*"+classNames[i]+"\\s*|"+"\\s*"+classNames[i]+"\\s*$|"+"\\s+"+classNames[i]+"(\\s+)","g");elm.className=elm.className.replace(repl,"$1")}},getCompStyle:function(elm){var compStyle=window.getComputedStyle?window.getComputedStyle(elm):elm.currentStyle;if(!compStyle){return{}}return compStyle},setStyle:function(elm,styles,important,reversible){var priority=important?"important":"";var origStyle=null;for(var prop in styles){if(styles.hasOwnProperty(prop)){var setVal=null;if(styles[prop]===null){if(!origStyle){origStyle=jsc.getData(elm,"origStyle")}if(origStyle&&origStyle.hasOwnProperty(prop)){setVal=origStyle[prop]}}else{if(reversible){if(!origStyle){origStyle=jsc.getData(elm,"origStyle",{})}if(!origStyle.hasOwnProperty(prop)){origStyle[prop]=elm.style[prop]}}setVal=styles[prop]}if(setVal!==null){elm.style.setProperty(prop,setVal,priority)}}}},hexColor:function(r,g,b){return"#"+(("0"+Math.round(r).toString(16)).substr(-2)+("0"+Math.round(g).toString(16)).substr(-2)+("0"+Math.round(b).toString(16)).substr(-2)).toUpperCase()},hexaColor:function(r,g,b,a){return"#"+(("0"+Math.round(r).toString(16)).substr(-2)+("0"+Math.round(g).toString(16)).substr(-2)+("0"+Math.round(b).toString(16)).substr(-2)+("0"+Math.round(a*255).toString(16)).substr(-2)).toUpperCase()},rgbColor:function(r,g,b){return"rgb("+Math.round(r)+","+Math.round(g)+","+Math.round(b)+")"},rgbaColor:function(r,g,b,a){return"rgba("+Math.round(r)+","+Math.round(g)+","+Math.round(b)+","+Math.round((a===undefined||a===null?1:a)*100)/100+")"},linearGradient:function(){function getFuncName(){var stdName="linear-gradient";var prefixes=["","-webkit-","-moz-","-o-","-ms-"];var helper=window.document.createElement("div");for(var i=0;i<prefixes.length;i+=1){var tryFunc=prefixes[i]+stdName;var tryVal=tryFunc+"(to right, rgba(0,0,0,0), rgba(0,0,0,0))";helper.style.background=tryVal;if(helper.style.background){return tryFunc}}return stdName}var funcName=getFuncName();return function(){return funcName+"("+Array.prototype.join.call(arguments,", ")+")"}}(),setBorderRadius:function(elm,value){jsc.setStyle(elm,{"border-radius":value||"0"})},setBoxShadow:function(elm,value){jsc.setStyle(elm,{"box-shadow":value||"none"})},getElementPos:function(e,relativeToViewport){var x=0,y=0;var rect=e.getBoundingClientRect();x=rect.left;y=rect.top;if(!relativeToViewport){var viewPos=jsc.getViewPos();x+=viewPos[0];y+=viewPos[1]}return[x,y]},getElementSize:function(e){return[e.offsetWidth,e.offsetHeight]},getAbsPointerPos:function(e){var x=0,y=0;if(typeof e.changedTouches!=="undefined"&&e.changedTouches.length){x=e.changedTouches[0].clientX;y=e.changedTouches[0].clientY}else if(typeof e.clientX==="number"){x=e.clientX;y=e.clientY}return{x:x,y:y}},getRelPointerPos:function(e){var target=e.target||e.srcElement;var targetRect=target.getBoundingClientRect();var x=0,y=0;var clientX=0,clientY=0;if(typeof e.changedTouches!=="undefined"&&e.changedTouches.length){clientX=e.changedTouches[0].clientX;clientY=e.changedTouches[0].clientY}else if(typeof e.clientX==="number"){clientX=e.clientX;clientY=e.clientY}x=clientX-targetRect.left;y=clientY-targetRect.top;return{x:x,y:y}},getViewPos:function(){var doc=window.document.documentElement;return[(window.pageXOffset||doc.scrollLeft)-(doc.clientLeft||0),(window.pageYOffset||doc.scrollTop)-(doc.clientTop||0)]},getViewSize:function(){var doc=window.document.documentElement;return[window.innerWidth||doc.clientWidth,window.innerHeight||doc.clientHeight]},RGB_HSV:function(r,g,b){r/=255;g/=255;b/=255;var n=Math.min(Math.min(r,g),b);var v=Math.max(Math.max(r,g),b);var m=v-n;if(m===0){return[null,0,100*v]}var h=r===n?3+(b-g)/m:g===n?5+(r-b)/m:1+(g-r)/m;return[60*(h===6?0:h),100*(m/v),100*v]},HSV_RGB:function(h,s,v){var u=255*(v/100);if(h===null){return[u,u,u]}h/=60;s/=100;var i=Math.floor(h);var f=i%2?h-i:1-(h-i);var m=u*(1-s);var n=u*(1-s*f);switch(i){case 6:case 0:return[u,n,m];case 1:return[n,u,m];case 2:return[m,u,n];case 3:return[m,n,u];case 4:return[n,m,u];case 5:return[u,m,n]}},parseColorString:function(str){var ret={rgba:null,format:null};var m;if(m=str.match(/^\W*([0-9A-F]{3,8})\W*$/i)){if(m[1].length===8){ret.format="hexa";ret.rgba=[parseInt(m[1].substr(0,2),16),parseInt(m[1].substr(2,2),16),parseInt(m[1].substr(4,2),16),parseInt(m[1].substr(6,2),16)/255]}else if(m[1].length===6){ret.format="hex";ret.rgba=[parseInt(m[1].substr(0,2),16),parseInt(m[1].substr(2,2),16),parseInt(m[1].substr(4,2),16),null]}else if(m[1].length===3){ret.format="hex";ret.rgba=[parseInt(m[1].charAt(0)+m[1].charAt(0),16),parseInt(m[1].charAt(1)+m[1].charAt(1),16),parseInt(m[1].charAt(2)+m[1].charAt(2),16),null]}else{return false}return ret}if(m=str.match(/^\W*rgba?\(([^)]*)\)\W*$/i)){var par=m[1].split(",");var re=/^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;var mR,mG,mB,mA;if(par.length>=3&&(mR=par[0].match(re))&&(mG=par[1].match(re))&&(mB=par[2].match(re))){ret.format="rgb";ret.rgba=[parseFloat(mR[1])||0,parseFloat(mG[1])||0,parseFloat(mB[1])||0,null];if(par.length>=4&&(mA=par[3].match(re))){ret.format="rgba";ret.rgba[3]=parseFloat(mA[1])||0}return ret}}return false},parsePaletteValue:function(mixed){var vals=[];if(typeof mixed==="string"){mixed.replace(/#[0-9A-F]{3}([0-9A-F]{3})?|rgba?\(([^)]*)\)/gi,function(val){vals.push(val)})}else if(Array.isArray(mixed)){vals=mixed}var colors=[];for(var i=0;i<vals.length;i++){var color=jsc.parseColorString(vals[i]);if(color){colors.push(color)}}return colors},containsTranparentColor:function(colors){for(var i=0;i<colors.length;i++){var a=colors[i].rgba[3];if(a!==null&&a<1){return true}}return false},isAlphaFormat:function(format){switch(format.toLowerCase()){case"hexa":case"rgba":return true}return false},scaleCanvasForHighDPR:function(canvas){var dpr=window.devicePixelRatio||1;canvas.width*=dpr;canvas.height*=dpr;var ctx=canvas.getContext("2d");ctx.scale(dpr,dpr)},genColorPreviewCanvas:function(color,separatorPos,specWidth,scaleForHighDPR){var sepW=Math.round(jsc.pub.previewSeparator.length);var sqSize=jsc.pub.chessboardSize;var sqColor1=jsc.pub.chessboardColor1;var sqColor2=jsc.pub.chessboardColor2;var cWidth=specWidth?specWidth:sqSize*2;var cHeight=sqSize*2;var canvas=jsc.createEl("canvas");var ctx=canvas.getContext("2d");canvas.width=cWidth;canvas.height=cHeight;if(scaleForHighDPR){jsc.scaleCanvasForHighDPR(canvas)}ctx.fillStyle=sqColor1;ctx.fillRect(0,0,cWidth,cHeight);ctx.fillStyle=sqColor2;for(var x=0;x<cWidth;x+=sqSize*2){ctx.fillRect(x,0,sqSize,sqSize);ctx.fillRect(x+sqSize,sqSize,sqSize,sqSize)}if(color){ctx.fillStyle=color;ctx.fillRect(0,0,cWidth,cHeight)}var start=null;switch(separatorPos){case"left":start=0;ctx.clearRect(0,0,sepW/2,cHeight);break;case"right":start=cWidth-sepW;ctx.clearRect(cWidth-sepW/2,0,sepW/2,cHeight);break}if(start!==null){ctx.lineWidth=1;for(var i=0;i<jsc.pub.previewSeparator.length;i+=1){ctx.beginPath();ctx.strokeStyle=jsc.pub.previewSeparator[i];ctx.moveTo(.5+start+i,0);ctx.lineTo(.5+start+i,cHeight);ctx.stroke()}}return{canvas:canvas,width:cWidth,height:cHeight}},genColorPreviewGradient:function(color,position,width){var params=[];if(position&&width){params=["to "+{left:"right",right:"left"}[position],color+" 0%",color+" "+width+"px","rgba(0,0,0,0) "+(width+1)+"px","rgba(0,0,0,0) 100%"]}else{params=["to right",color+" 0%",color+" 100%"]}return jsc.linearGradient.apply(this,params)},redrawPosition:function(){if(!jsc.picker||!jsc.picker.owner){return}var thisObj=jsc.picker.owner;var tp,vp;if(thisObj.fixed){tp=jsc.getElementPos(thisObj.targetElement,true);vp=[0,0]}else{tp=jsc.getElementPos(thisObj.targetElement);vp=jsc.getViewPos()}var ts=jsc.getElementSize(thisObj.targetElement);var vs=jsc.getViewSize();var pd=jsc.getPickerDims(thisObj);var ps=[pd.borderW,pd.borderH];var a,b,c;switch(thisObj.position.toLowerCase()){case"left":a=1;b=0;c=-1;break;case"right":a=1;b=0;c=1;break;case"top":a=0;b=1;c=-1;break;default:a=0;b=1;c=1;break}var l=(ts[b]+ps[b])/2;if(!thisObj.smartPosition){var pp=[tp[a],tp[b]+ts[b]-l+l*c]}else{var pp=[-vp[a]+tp[a]+ps[a]>vs[a]?-vp[a]+tp[a]+ts[a]/2>vs[a]/2&&tp[a]+ts[a]-ps[a]>=0?tp[a]+ts[a]-ps[a]:tp[a]:tp[a],-vp[b]+tp[b]+ts[b]+ps[b]-l+l*c>vs[b]?-vp[b]+tp[b]+ts[b]/2>vs[b]/2&&tp[b]+ts[b]-l-l*c>=0?tp[b]+ts[b]-l-l*c:tp[b]+ts[b]-l+l*c:tp[b]+ts[b]-l+l*c>=0?tp[b]+ts[b]-l+l*c:tp[b]+ts[b]-l-l*c]}var x=pp[a];var y=pp[b];var positionValue=thisObj.fixed?"fixed":"absolute";var contractShadow=(pp[0]+ps[0]>tp[0]||pp[0]<tp[0]+ts[0])&&pp[1]+ps[1]<tp[1]+ts[1];jsc._drawPosition(thisObj,x,y,positionValue,contractShadow)},_drawPosition:function(thisObj,x,y,positionValue,contractShadow){var vShadow=contractShadow?0:thisObj.shadowBlur;jsc.picker.wrap.style.position=positionValue;jsc.picker.wrap.style.left=x+"px";jsc.picker.wrap.style.top=y+"px";jsc.setBoxShadow(jsc.picker.boxS,thisObj.shadow?new jsc.BoxShadow(0,vShadow,thisObj.shadowBlur,0,thisObj.shadowColor):null)},getPickerDims:function(thisObj){var w=2*thisObj.controlBorderWidth+thisObj.width;var h=2*thisObj.controlBorderWidth+thisObj.height;var sliderSpace=2*thisObj.controlBorderWidth+2*jsc.getControlPadding(thisObj)+thisObj.sliderSize;if(jsc.getSliderChannel(thisObj)){w+=sliderSpace}if(thisObj.hasAlphaChannel()){w+=sliderSpace}var pal=jsc.getPaletteDims(thisObj,w);if(pal.height){h+=pal.height+thisObj.padding}if(thisObj.closeButton){h+=2*thisObj.controlBorderWidth+thisObj.padding+thisObj.buttonHeight}var pW=w+2*thisObj.padding;var pH=h+2*thisObj.padding;return{contentW:w,contentH:h,paddedW:pW,paddedH:pH,borderW:pW+2*thisObj.borderWidth,borderH:pH+2*thisObj.borderWidth,palette:pal}},getPaletteDims:function(thisObj,width){var cols=0,rows=0,cellW=0,cellH=0,height=0;var sampleCount=thisObj._palette?thisObj._palette.length:0;if(sampleCount){cols=thisObj.paletteCols;rows=cols>0?Math.ceil(sampleCount/cols):0;cellW=Math.max(1,Math.floor((width-(cols-1)*thisObj.paletteSpacing)/cols));cellH=thisObj.paletteHeight?Math.min(thisObj.paletteHeight,cellW):cellW}if(rows){height=rows*cellH+(rows-1)*thisObj.paletteSpacing}return{cols:cols,rows:rows,cellW:cellW,cellH:cellH,width:width,height:height}},getControlPadding:function(thisObj){return Math.max(thisObj.padding/2,2*thisObj.pointerBorderWidth+thisObj.pointerThickness-thisObj.controlBorderWidth)},getPadYChannel:function(thisObj){switch(thisObj.mode.charAt(1).toLowerCase()){case"v":return"v";break}return"s"},getSliderChannel:function(thisObj){if(thisObj.mode.length>2){switch(thisObj.mode.charAt(2).toLowerCase()){case"s":return"s";break;case"v":return"v";break}}return null},triggerCallback:function(thisObj,prop){if(!thisObj[prop]){return}var callback=null;if(typeof thisObj[prop]==="string"){try{callback=new Function(thisObj[prop])}catch(e){console.error(e)}}else{callback=thisObj[prop]}if(callback){callback.call(thisObj)}},triggerGlobal:function(eventNames){var inst=jsc.getInstances();for(var i=0;i<inst.length;i+=1){inst[i].trigger(eventNames)}},_pointerMoveEvent:{mouse:"mousemove",touch:"touchmove"},_pointerEndEvent:{mouse:"mouseup",touch:"touchend"},_pointerOrigin:null,onDocumentKeyUp:function(e){if(["Tab","Escape"].indexOf(jsc.eventKey(e))!==-1){if(jsc.picker&&jsc.picker.owner){jsc.picker.owner.tryHide()}}},onWindowResize:function(e){jsc.redrawPosition()},onWindowScroll:function(e){jsc.redrawPosition()},onParentScroll:function(e){if(jsc.picker&&jsc.picker.owner){jsc.picker.owner.tryHide()}},onDocumentMouseDown:function(e){var target=e.target||e.srcElement;if(target.jscolor&&target.jscolor instanceof jsc.pub){if(target.jscolor.showOnClick&&!target.disabled){target.jscolor.show()}}else if(jsc.getData(target,"gui")){var control=jsc.getData(target,"control");if(control){jsc.onControlPointerStart(e,target,jsc.getData(target,"control"),"mouse")}}else{if(jsc.picker&&jsc.picker.owner){jsc.picker.owner.tryHide()}}},onPickerTouchStart:function(e){var target=e.target||e.srcElement;if(jsc.getData(target,"control")){jsc.onControlPointerStart(e,target,jsc.getData(target,"control"),"touch")}},onControlPointerStart:function(e,target,controlName,pointerType){var thisObj=jsc.getData(target,"instance");jsc.preventDefault(e);var registerDragEvents=function(doc,offset){jsc.attachGroupEvent("drag",doc,jsc._pointerMoveEvent[pointerType],jsc.onDocumentPointerMove(e,target,controlName,pointerType,offset));jsc.attachGroupEvent("drag",doc,jsc._pointerEndEvent[pointerType],jsc.onDocumentPointerEnd(e,target,controlName,pointerType))};registerDragEvents(window.document,[0,0]);if(window.parent&&window.frameElement){var rect=window.frameElement.getBoundingClientRect();var ofs=[-rect.left,-rect.top];registerDragEvents(window.parent.window.document,ofs)}var abs=jsc.getAbsPointerPos(e);var rel=jsc.getRelPointerPos(e);jsc._pointerOrigin={x:abs.x-rel.x,y:abs.y-rel.y};switch(controlName){case"pad":if(jsc.getSliderChannel(thisObj)==="v"&&thisObj.channels.v===0){thisObj.fromHSVA(null,null,100,null)}jsc.setPad(thisObj,e,0,0);break;case"sld":jsc.setSld(thisObj,e,0);break;case"asld":jsc.setASld(thisObj,e,0);break}thisObj.trigger("input")},onDocumentPointerMove:function(e,target,controlName,pointerType,offset){return function(e){var thisObj=jsc.getData(target,"instance");switch(controlName){case"pad":jsc.setPad(thisObj,e,offset[0],offset[1]);break;case"sld":jsc.setSld(thisObj,e,offset[1]);break;case"asld":jsc.setASld(thisObj,e,offset[1]);break}thisObj.trigger("input")}},onDocumentPointerEnd:function(e,target,controlName,pointerType){return function(e){var thisObj=jsc.getData(target,"instance");jsc.detachGroupEvents("drag");thisObj.trigger("input");thisObj.trigger("change")}},onPaletteSampleClick:function(e){var target=e.currentTarget;var thisObj=jsc.getData(target,"instance");var color=jsc.getData(target,"color");if(thisObj.format.toLowerCase()==="any"){thisObj._setFormat(color.format);if(!jsc.isAlphaFormat(thisObj.getFormat())){color.rgba[3]=1}}if(color.rgba[3]===null){if(thisObj.paletteSetsAlpha===true||thisObj.paletteSetsAlpha==="auto"&&thisObj._paletteHasTransparency){color.rgba[3]=1}}thisObj.fromRGBA.apply(thisObj,color.rgba);thisObj.trigger("input");thisObj.trigger("change");if(thisObj.hideOnPaletteClick){thisObj.hide()}},setPad:function(thisObj,e,ofsX,ofsY){var pointerAbs=jsc.getAbsPointerPos(e);var x=ofsX+pointerAbs.x-jsc._pointerOrigin.x-thisObj.padding-thisObj.controlBorderWidth;var y=ofsY+pointerAbs.y-jsc._pointerOrigin.y-thisObj.padding-thisObj.controlBorderWidth;var xVal=x*(360/(thisObj.width-1));var yVal=100-y*(100/(thisObj.height-1));switch(jsc.getPadYChannel(thisObj)){case"s":thisObj.fromHSVA(xVal,yVal,null,null);break;case"v":thisObj.fromHSVA(xVal,null,yVal,null);break}},setSld:function(thisObj,e,ofsY){var pointerAbs=jsc.getAbsPointerPos(e);var y=ofsY+pointerAbs.y-jsc._pointerOrigin.y-thisObj.padding-thisObj.controlBorderWidth;var yVal=100-y*(100/(thisObj.height-1));switch(jsc.getSliderChannel(thisObj)){case"s":thisObj.fromHSVA(null,yVal,null,null);break;case"v":thisObj.fromHSVA(null,null,yVal,null);break}},setASld:function(thisObj,e,ofsY){var pointerAbs=jsc.getAbsPointerPos(e);var y=ofsY+pointerAbs.y-jsc._pointerOrigin.y-thisObj.padding-thisObj.controlBorderWidth;var yVal=1-y*(1/(thisObj.height-1));if(yVal<1){var fmt=thisObj.getFormat();if(thisObj.format.toLowerCase()==="any"&&!jsc.isAlphaFormat(fmt)){thisObj._setFormat(fmt==="hex"?"hexa":"rgba")}}thisObj.fromHSVA(null,null,null,yVal)},createPadCanvas:function(){var ret={elm:null,draw:null};var canvas=jsc.createEl("canvas");var ctx=canvas.getContext("2d");var drawFunc=function(width,height,type){canvas.width=width;canvas.height=height;ctx.clearRect(0,0,canvas.width,canvas.height);var hGrad=ctx.createLinearGradient(0,0,canvas.width,0);hGrad.addColorStop(0/6,"#F00");hGrad.addColorStop(1/6,"#FF0");hGrad.addColorStop(2/6,"#0F0");hGrad.addColorStop(3/6,"#0FF");hGrad.addColorStop(4/6,"#00F");hGrad.addColorStop(5/6,"#F0F");hGrad.addColorStop(6/6,"#F00");ctx.fillStyle=hGrad;ctx.fillRect(0,0,canvas.width,canvas.height);var vGrad=ctx.createLinearGradient(0,0,0,canvas.height);switch(type.toLowerCase()){case"s":vGrad.addColorStop(0,"rgba(255,255,255,0)");vGrad.addColorStop(1,"rgba(255,255,255,1)");break;case"v":vGrad.addColorStop(0,"rgba(0,0,0,0)");vGrad.addColorStop(1,"rgba(0,0,0,1)");break}ctx.fillStyle=vGrad;ctx.fillRect(0,0,canvas.width,canvas.height)};ret.elm=canvas;ret.draw=drawFunc;return ret},createSliderGradient:function(){var ret={elm:null,draw:null};var canvas=jsc.createEl("canvas");var ctx=canvas.getContext("2d");var drawFunc=function(width,height,color1,color2){canvas.width=width;canvas.height=height;ctx.clearRect(0,0,canvas.width,canvas.height);var grad=ctx.createLinearGradient(0,0,0,canvas.height);grad.addColorStop(0,color1);grad.addColorStop(1,color2);ctx.fillStyle=grad;ctx.fillRect(0,0,canvas.width,canvas.height)};ret.elm=canvas;ret.draw=drawFunc;return ret},createASliderGradient:function(){var ret={elm:null,draw:null};var canvas=jsc.createEl("canvas");var ctx=canvas.getContext("2d");var drawFunc=function(width,height,color){canvas.width=width;canvas.height=height;ctx.clearRect(0,0,canvas.width,canvas.height);var sqSize=canvas.width/2;var sqColor1=jsc.pub.chessboardColor1;var sqColor2=jsc.pub.chessboardColor2;ctx.fillStyle=sqColor1;ctx.fillRect(0,0,canvas.width,canvas.height);if(sqSize>0){for(var y=0;y<canvas.height;y+=sqSize*2){ctx.fillStyle=sqColor2;ctx.fillRect(0,y,sqSize,sqSize);ctx.fillRect(sqSize,y+sqSize,sqSize,sqSize)}}var grad=ctx.createLinearGradient(0,0,0,canvas.height);grad.addColorStop(0,color);grad.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=grad;ctx.fillRect(0,0,canvas.width,canvas.height)};ret.elm=canvas;ret.draw=drawFunc;return ret},BoxShadow:function(){var BoxShadow=function(hShadow,vShadow,blur,spread,color,inset){this.hShadow=hShadow;this.vShadow=vShadow;this.blur=blur;this.spread=spread;this.color=color;this.inset=!!inset};BoxShadow.prototype.toString=function(){var vals=[Math.round(this.hShadow)+"px",Math.round(this.vShadow)+"px",Math.round(this.blur)+"px",Math.round(this.spread)+"px",this.color];if(this.inset){vals.push("inset")}return vals.join(" ")};return BoxShadow}(),flags:{leaveValue:1<<0,leaveAlpha:1<<1,leavePreview:1<<2},enumOpts:{format:["auto","any","hex","hexa","rgb","rgba"],previewPosition:["left","right"],mode:["hsv","hvs","hs","hv"],position:["left","right","top","bottom"],alphaChannel:["auto",true,false],paletteSetsAlpha:["auto",true,false]},deprecatedOpts:{styleElement:"previewElement",onFineChange:"onInput",overwriteImportant:"forceStyle",closable:"closeButton",insetWidth:"controlBorderWidth",insetColor:"controlBorderColor",refine:null},docsRef:" "+"See https://jscolor.com/docs/",pub:function(targetElement,opts){var THIS=this;if(!opts){opts={}}this.channels={r:255,g:255,b:255,h:0,s:0,v:100,a:1};this.format="auto";this.value=undefined;this.alpha=undefined;this.random=false;this.onChange=undefined;this.onInput=undefined;this.valueElement=undefined;this.alphaElement=undefined;this.previewElement=undefined;this.previewPosition="left";this.previewSize=32;this.previewPadding=8;this.required=true;this.hash=true;this.uppercase=true;this.forceStyle=true;this.width=181;this.height=101;this.mode="HSV";this.alphaChannel="auto";this.position="bottom";this.smartPosition=true;this.showOnClick=true;this.hideOnLeave=true;this.palette=[];this.paletteCols=10;this.paletteSetsAlpha="auto";this.paletteHeight=16;this.paletteSpacing=4;this.hideOnPaletteClick=false;this.sliderSize=16;this.crossSize=8;this.closeButton=false;this.closeText="Close";this.buttonColor="rgba(0,0,0,1)";this.buttonHeight=18;this.padding=12;this.backgroundColor="rgba(255,255,255,1)";this.borderWidth=1;this.borderColor="rgba(187,187,187,1)";this.borderRadius=8;this.controlBorderWidth=1;this.controlBorderColor="rgba(187,187,187,1)";this.shadow=true;this.shadowBlur=15;this.shadowColor="rgba(0,0,0,0.2)";this.pointerColor="rgba(76,76,76,1)";this.pointerBorderWidth=1;this.pointerBorderColor="rgba(255,255,255,1)";this.pointerThickness=2;this.zIndex=5e3;this.container=undefined;this.minS=0;this.maxS=100;this.minV=0;this.maxV=100;this.minA=0;this.maxA=1;this.option=function(){if(!arguments.length){throw new Error("No option specified")}if(arguments.length===1&&typeof arguments[0]==="string"){try{return getOption(arguments[0])}catch(e){console.warn(e)}return false}else if(arguments.length>=2&&typeof arguments[0]==="string"){try{if(!setOption(arguments[0],arguments[1])){return false}}catch(e){console.warn(e);return false}this.redraw();this.exposeColor();return true}else if(arguments.length===1&&typeof arguments[0]==="object"){var opts=arguments[0];var success=true;for(var opt in opts){if(opts.hasOwnProperty(opt)){try{if(!setOption(opt,opts[opt])){success=false}}catch(e){console.warn(e);success=false}}}this.redraw();this.exposeColor();return success}throw new Error("Invalid arguments")};this.channel=function(name,value){if(typeof name!=="string"){throw new Error("Invalid value for channel name: "+name)}if(value===undefined){if(!this.channels.hasOwnProperty(name.toLowerCase())){console.warn("Getting unknown channel: "+name);return false}return this.channels[name.toLowerCase()]}else{var res=false;switch(name.toLowerCase()){case"r":res=this.fromRGBA(value,null,null,null);break;case"g":res=this.fromRGBA(null,value,null,null);break;case"b":res=this.fromRGBA(null,null,value,null);break;case"h":res=this.fromHSVA(value,null,null,null);break;case"s":res=this.fromHSVA(null,value,null,null);break;case"v":res=this.fromHSVA(null,null,value,null);break;case"a":res=this.fromHSVA(null,null,null,value);break;default:console.warn("Setting unknown channel: "+name);return false}if(res){this.redraw();return true}}return false};this.trigger=function(eventNames){var evs=jsc.strList(eventNames);for(var i=0;i<evs.length;i+=1){var ev=evs[i].toLowerCase();var callbackProp=null;switch(ev){case"input":callbackProp="onInput";break;case"change":callbackProp="onChange";break}if(callbackProp){jsc.triggerCallback(this,callbackProp)}jsc.triggerInputEvent(this.valueElement,ev,true,true)}};this.fromHSVA=function(h,s,v,a,flags){if(h===undefined){h=null}if(s===undefined){s=null}if(v===undefined){v=null}if(a===undefined){a=null}if(h!==null){if(isNaN(h)){return false}this.channels.h=Math.max(0,Math.min(360,h))}if(s!==null){if(isNaN(s)){return false}this.channels.s=Math.max(0,Math.min(100,this.maxS,s),this.minS)}if(v!==null){if(isNaN(v)){return false}this.channels.v=Math.max(0,Math.min(100,this.maxV,v),this.minV)}if(a!==null){if(isNaN(a)){return false}this.channels.a=this.hasAlphaChannel()?Math.max(0,Math.min(1,this.maxA,a),this.minA):1}var rgb=jsc.HSV_RGB(this.channels.h,this.channels.s,this.channels.v);this.channels.r=rgb[0];this.channels.g=rgb[1];this.channels.b=rgb[2];this.exposeColor(flags);return true};this.fromRGBA=function(r,g,b,a,flags){if(r===undefined){r=null}if(g===undefined){g=null}if(b===undefined){b=null}if(a===undefined){a=null}if(r!==null){if(isNaN(r)){return false}r=Math.max(0,Math.min(255,r))}if(g!==null){if(isNaN(g)){return false}g=Math.max(0,Math.min(255,g))}if(b!==null){if(isNaN(b)){return false}b=Math.max(0,Math.min(255,b))}if(a!==null){if(isNaN(a)){return false}this.channels.a=this.hasAlphaChannel()?Math.max(0,Math.min(1,this.maxA,a),this.minA):1}var hsv=jsc.RGB_HSV(r===null?this.channels.r:r,g===null?this.channels.g:g,b===null?this.channels.b:b);if(hsv[0]!==null){this.channels.h=Math.max(0,Math.min(360,hsv[0]))}if(hsv[2]!==0){this.channels.s=Math.max(0,this.minS,Math.min(100,this.maxS,hsv[1]))}this.channels.v=Math.max(0,this.minV,Math.min(100,this.maxV,hsv[2]));var rgb=jsc.HSV_RGB(this.channels.h,this.channels.s,this.channels.v);this.channels.r=rgb[0];this.channels.g=rgb[1];this.channels.b=rgb[2];this.exposeColor(flags);return true};this.fromHSV=function(h,s,v,flags){console.warn("fromHSV() method is DEPRECATED. Using fromHSVA() instead."+jsc.docsRef);return this.fromHSVA(h,s,v,null,flags)};this.fromRGB=function(r,g,b,flags){console.warn("fromRGB() method is DEPRECATED. Using fromRGBA() instead."+jsc.docsRef);return this.fromRGBA(r,g,b,null,flags)};this.fromString=function(str,flags){if(!this.required&&str.trim()===""){this.setPreviewElementBg(null);this.setValueElementValue("");return true}var color=jsc.parseColorString(str);if(!color){return false}if(this.format.toLowerCase()==="any"){this._setFormat(color.format);if(!jsc.isAlphaFormat(this.getFormat())){color.rgba[3]=1}}this.fromRGBA(color.rgba[0],color.rgba[1],color.rgba[2],color.rgba[3],flags);return true};this.randomize=function(minV,maxV,minS,maxS,minH,maxH,minA,maxA){if(minV===undefined){minV=0}if(maxV===undefined){maxV=100}if(minS===undefined){minS=0}if(maxS===undefined){maxS=100}if(minH===undefined){minH=0}if(maxH===undefined){maxH=359}if(minA===undefined){minA=1}if(maxA===undefined){maxA=1}this.fromHSVA(minH+Math.floor(Math.random()*(maxH-minH+1)),minS+Math.floor(Math.random()*(maxS-minS+1)),minV+Math.floor(Math.random()*(maxV-minV+1)),(100*minA+Math.floor(Math.random()*(100*(maxA-minA)+1)))/100)};this.toString=function(format){if(format===undefined){format=this.getFormat()}switch(format.toLowerCase()){case"hex":return this.toHEXString();break;case"hexa":return this.toHEXAString();break;case"rgb":return this.toRGBString();break;case"rgba":return this.toRGBAString();break}return false};this.toHEXString=function(){return jsc.hexColor(this.channels.r,this.channels.g,this.channels.b)};this.toHEXAString=function(){return jsc.hexaColor(this.channels.r,this.channels.g,this.channels.b,this.channels.a)};this.toRGBString=function(){return jsc.rgbColor(this.channels.r,this.channels.g,this.channels.b)};this.toRGBAString=function(){return jsc.rgbaColor(this.channels.r,this.channels.g,this.channels.b,this.channels.a)};this.toGrayscale=function(){return.213*this.channels.r+.715*this.channels.g+.072*this.channels.b};this.toCanvas=function(){return jsc.genColorPreviewCanvas(this.toRGBAString()).canvas};this.toDataURL=function(){return this.toCanvas().toDataURL()};this.toBackground=function(){return jsc.pub.background(this.toRGBAString())};this.isLight=function(){return this.toGrayscale()>255/2};this.hide=function(){if(isPickerOwner()){detachPicker()}};this.show=function(){drawPicker()};this.redraw=function(){if(isPickerOwner()){drawPicker()}};this.getFormat=function(){return this._currentFormat};this._setFormat=function(format){this._currentFormat=format.toLowerCase()};this.hasAlphaChannel=function(){if(this.alphaChannel==="auto"){return this.format.toLowerCase()==="any"||jsc.isAlphaFormat(this.getFormat())||this.alpha!==undefined||this.alphaElement!==undefined}return this.alphaChannel};this.processValueInput=function(str){if(!this.fromString(str)){this.exposeColor()}};this.processAlphaInput=function(str){if(!this.fromHSVA(null,null,null,parseFloat(str))){this.exposeColor()}};this.exposeColor=function(flags){var colorStr=this.toString();var fmt=this.getFormat();jsc.setDataAttr(this.targetElement,"current-color",colorStr);if(!(flags&jsc.flags.leaveValue)&&this.valueElement){if(fmt==="hex"||fmt==="hexa"){if(!this.uppercase){colorStr=colorStr.toLowerCase()}if(!this.hash){colorStr=colorStr.replace(/^#/,"")}}this.setValueElementValue(colorStr)}if(!(flags&jsc.flags.leaveAlpha)&&this.alphaElement){var alphaVal=Math.round(this.channels.a*100)/100;this.setAlphaElementValue(alphaVal)}if(!(flags&jsc.flags.leavePreview)&&this.previewElement){var previewPos=null;if(jsc.isTextInput(this.previewElement)||jsc.isButton(this.previewElement)&&!jsc.isButtonEmpty(this.previewElement)){previewPos=this.previewPosition}this.setPreviewElementBg(this.toRGBAString())}if(isPickerOwner()){redrawPad();redrawSld();redrawASld()}};this.setPreviewElementBg=function(color){if(!this.previewElement){return}var position=null;var width=null;if(jsc.isTextInput(this.previewElement)||jsc.isButton(this.previewElement)&&!jsc.isButtonEmpty(this.previewElement)){position=this.previewPosition;width=this.previewSize}var backgrounds=[];if(!color){backgrounds.push({image:"none",position:"left top",size:"auto",repeat:"no-repeat",origin:"padding-box"})}else{backgrounds.push({image:jsc.genColorPreviewGradient(color,position,width?width-jsc.pub.previewSeparator.length:null),position:"left top",size:"auto",repeat:position?"repeat-y":"repeat",origin:"padding-box"});var preview=jsc.genColorPreviewCanvas("rgba(0,0,0,0)",position?{left:"right",right:"left"}[position]:null,width,true);backgrounds.push({image:"url('"+preview.canvas.toDataURL()+"')",position:(position||"left")+" top",size:preview.width+"px "+preview.height+"px",repeat:position?"repeat-y":"repeat",origin:"padding-box"})}var bg={image:[],position:[],size:[],repeat:[],origin:[]};for(var i=0;i<backgrounds.length;i+=1){bg.image.push(backgrounds[i].image);bg.position.push(backgrounds[i].position);bg.size.push(backgrounds[i].size);bg.repeat.push(backgrounds[i].repeat);bg.origin.push(backgrounds[i].origin)}var sty={"background-image":bg.image.join(", "),"background-position":bg.position.join(", "),"background-size":bg.size.join(", "),"background-repeat":bg.repeat.join(", "),"background-origin":bg.origin.join(", ")};jsc.setStyle(this.previewElement,sty,this.forceStyle);var padding={left:null,right:null};if(position){padding[position]=this.previewSize+this.previewPadding+"px"}var sty={"padding-left":padding.left,"padding-right":padding.right};jsc.setStyle(this.previewElement,sty,this.forceStyle,true)};this.setValueElementValue=function(str){if(this.valueElement){if(jsc.nodeName(this.valueElement)==="input"){this.valueElement.value=str}else{this.valueElement.innerHTML=str}}};this.setAlphaElementValue=function(str){if(this.alphaElement){if(jsc.nodeName(this.alphaElement)==="input"){this.alphaElement.value=str}else{this.alphaElement.innerHTML=str}}};this._processParentElementsInDOM=function(){if(this._parentElementsProcessed){return}this._parentElementsProcessed=true;var elm=this.targetElement;do{var compStyle=jsc.getCompStyle(elm);if(compStyle.position&&compStyle.position.toLowerCase()==="fixed"){this.fixed=true}if(elm!==this.targetElement){if(!jsc.getData(elm,"hasScrollListener")){elm.addEventListener("scroll",jsc.onParentScroll,false);jsc.setData(elm,"hasScrollListener",true)}}}while((elm=elm.parentNode)&&jsc.nodeName(elm)!=="body")};this.tryHide=function(){if(this.hideOnLeave){this.hide()}};this.set__palette=function(val){this.palette=val;this._palette=jsc.parsePaletteValue(val);this._paletteHasTransparency=jsc.containsTranparentColor(this._palette)};function setOption(option,value){if(typeof option!=="string"){throw new Error("Invalid value for option name: "+option)}if(jsc.enumOpts.hasOwnProperty(option)){if(typeof value==="string"){value=value.toLowerCase()}if(jsc.enumOpts[option].indexOf(value)===-1){throw new Error("Option '"+option+"' has invalid value: "+value)}}if(jsc.deprecatedOpts.hasOwnProperty(option)){var oldOpt=option;var newOpt=jsc.deprecatedOpts[option];if(newOpt){console.warn("Option '%s' is DEPRECATED, using '%s' instead."+jsc.docsRef,oldOpt,newOpt);option=newOpt}else{throw new Error("Option '"+option+"' is DEPRECATED")}}var setter="set__"+option;if(typeof THIS[setter]==="function"){THIS[setter](value);return true}else if(option in THIS){THIS[option]=value;return true}throw new Error("Unrecognized configuration option: "+option)}function getOption(option){if(typeof option!=="string"){throw new Error("Invalid value for option name: "+option)}if(jsc.deprecatedOpts.hasOwnProperty(option)){var oldOpt=option;var newOpt=jsc.deprecatedOpts[option];if(newOpt){console.warn("Option '%s' is DEPRECATED, using '%s' instead."+jsc.docsRef,oldOpt,newOpt);option=newOpt}else{throw new Error("Option '"+option+"' is DEPRECATED")}}var getter="get__"+option;if(typeof THIS[getter]==="function"){return THIS[getter](value)}else if(option in THIS){return THIS[option]}throw new Error("Unrecognized configuration option: "+option)}function detachPicker(){jsc.removeClass(THIS.targetElement,jsc.pub.activeClassName);jsc.picker.wrap.parentNode.removeChild(jsc.picker.wrap);delete jsc.picker.owner}function drawPicker(){THIS._processParentElementsInDOM();if(!jsc.picker){jsc.picker={owner:null,wrap:jsc.createEl("div"),box:jsc.createEl("div"),boxS:jsc.createEl("div"),boxB:jsc.createEl("div"),pad:jsc.createEl("div"),padB:jsc.createEl("div"),padM:jsc.createEl("div"),padCanvas:jsc.createPadCanvas(),cross:jsc.createEl("div"),crossBY:jsc.createEl("div"),crossBX:jsc.createEl("div"),crossLY:jsc.createEl("div"),crossLX:jsc.createEl("div"),sld:jsc.createEl("div"),sldB:jsc.createEl("div"),sldM:jsc.createEl("div"),sldGrad:jsc.createSliderGradient(),sldPtrS:jsc.createEl("div"),sldPtrIB:jsc.createEl("div"),sldPtrMB:jsc.createEl("div"),sldPtrOB:jsc.createEl("div"),asld:jsc.createEl("div"),asldB:jsc.createEl("div"),asldM:jsc.createEl("div"),asldGrad:jsc.createASliderGradient(),asldPtrS:jsc.createEl("div"),asldPtrIB:jsc.createEl("div"),asldPtrMB:jsc.createEl("div"),asldPtrOB:jsc.createEl("div"),pal:jsc.createEl("div"),btn:jsc.createEl("div"),btnT:jsc.createEl("span")};jsc.picker.pad.appendChild(jsc.picker.padCanvas.elm);jsc.picker.padB.appendChild(jsc.picker.pad);jsc.picker.cross.appendChild(jsc.picker.crossBY);jsc.picker.cross.appendChild(jsc.picker.crossBX);jsc.picker.cross.appendChild(jsc.picker.crossLY);jsc.picker.cross.appendChild(jsc.picker.crossLX);jsc.picker.padB.appendChild(jsc.picker.cross);jsc.picker.box.appendChild(jsc.picker.padB);jsc.picker.box.appendChild(jsc.picker.padM);jsc.picker.sld.appendChild(jsc.picker.sldGrad.elm);jsc.picker.sldB.appendChild(jsc.picker.sld);jsc.picker.sldB.appendChild(jsc.picker.sldPtrOB);jsc.picker.sldPtrOB.appendChild(jsc.picker.sldPtrMB);jsc.picker.sldPtrMB.appendChild(jsc.picker.sldPtrIB);jsc.picker.sldPtrIB.appendChild(jsc.picker.sldPtrS);jsc.picker.box.appendChild(jsc.picker.sldB);jsc.picker.box.appendChild(jsc.picker.sldM);jsc.picker.asld.appendChild(jsc.picker.asldGrad.elm);jsc.picker.asldB.appendChild(jsc.picker.asld);jsc.picker.asldB.appendChild(jsc.picker.asldPtrOB);jsc.picker.asldPtrOB.appendChild(jsc.picker.asldPtrMB);jsc.picker.asldPtrMB.appendChild(jsc.picker.asldPtrIB);jsc.picker.asldPtrIB.appendChild(jsc.picker.asldPtrS);jsc.picker.box.appendChild(jsc.picker.asldB);jsc.picker.box.appendChild(jsc.picker.asldM);jsc.picker.box.appendChild(jsc.picker.pal);jsc.picker.btn.appendChild(jsc.picker.btnT);jsc.picker.box.appendChild(jsc.picker.btn);jsc.picker.boxB.appendChild(jsc.picker.box);jsc.picker.wrap.appendChild(jsc.picker.boxS);jsc.picker.wrap.appendChild(jsc.picker.boxB);jsc.picker.wrap.addEventListener("touchstart",jsc.onPickerTouchStart,jsc.isPassiveEventSupported?{passive:false}:false)}var p=jsc.picker;var displaySlider=!!jsc.getSliderChannel(THIS);var displayAlphaSlider=THIS.hasAlphaChannel();var pickerDims=jsc.getPickerDims(THIS);var crossOuterSize=2*THIS.pointerBorderWidth+THIS.pointerThickness+2*THIS.crossSize;var controlPadding=jsc.getControlPadding(THIS);var borderRadius=Math.min(THIS.borderRadius,Math.round(THIS.padding*Math.PI));var padCursor="crosshair";p.wrap.className="jscolor-picker-wrap";p.wrap.style.clear="both";p.wrap.style.width=pickerDims.borderW+"px";p.wrap.style.height=pickerDims.borderH+"px";p.wrap.style.zIndex=THIS.zIndex;p.box.className="jscolor-picker";p.box.style.width=pickerDims.paddedW+"px";p.box.style.height=pickerDims.paddedH+"px";p.box.style.position="relative";p.boxS.className="jscolor-picker-shadow";p.boxS.style.position="absolute";p.boxS.style.left="0";p.boxS.style.top="0";p.boxS.style.width="100%";p.boxS.style.height="100%";jsc.setBorderRadius(p.boxS,borderRadius+"px");p.boxB.className="jscolor-picker-border";p.boxB.style.position="relative";p.boxB.style.border=THIS.borderWidth+"px solid";p.boxB.style.borderColor=THIS.borderColor;p.boxB.style.background=THIS.backgroundColor;jsc.setBorderRadius(p.boxB,borderRadius+"px");p.padM.style.background="rgba(255,0,0,.2)";p.sldM.style.background="rgba(0,255,0,.2)";p.asldM.style.background="rgba(0,0,255,.2)";p.padM.style.opacity=p.sldM.style.opacity=p.asldM.style.opacity="0";p.pad.style.position="relative";p.pad.style.width=THIS.width+"px";p.pad.style.height=THIS.height+"px";p.padCanvas.draw(THIS.width,THIS.height,jsc.getPadYChannel(THIS));p.padB.style.position="absolute";p.padB.style.left=THIS.padding+"px";p.padB.style.top=THIS.padding+"px";p.padB.style.border=THIS.controlBorderWidth+"px solid";p.padB.style.borderColor=THIS.controlBorderColor;p.padM.style.position="absolute";p.padM.style.left=0+"px";p.padM.style.top=0+"px";p.padM.style.width=THIS.padding+2*THIS.controlBorderWidth+THIS.width+controlPadding+"px";p.padM.style.height=2*THIS.controlBorderWidth+2*THIS.padding+THIS.height+"px";p.padM.style.cursor=padCursor;jsc.setData(p.padM,{instance:THIS,control:"pad"});p.cross.style.position="absolute";p.cross.style.left=p.cross.style.top="0";p.cross.style.width=p.cross.style.height=crossOuterSize+"px";p.crossBY.style.position=p.crossBX.style.position="absolute";p.crossBY.style.background=p.crossBX.style.background=THIS.pointerBorderColor;p.crossBY.style.width=p.crossBX.style.height=2*THIS.pointerBorderWidth+THIS.pointerThickness+"px";p.crossBY.style.height=p.crossBX.style.width=crossOuterSize+"px";p.crossBY.style.left=p.crossBX.style.top=Math.floor(crossOuterSize/2)-Math.floor(THIS.pointerThickness/2)-THIS.pointerBorderWidth+"px";p.crossBY.style.top=p.crossBX.style.left="0";p.crossLY.style.position=p.crossLX.style.position="absolute";p.crossLY.style.background=p.crossLX.style.background=THIS.pointerColor;p.crossLY.style.height=p.crossLX.style.width=crossOuterSize-2*THIS.pointerBorderWidth+"px";p.crossLY.style.width=p.crossLX.style.height=THIS.pointerThickness+"px";p.crossLY.style.left=p.crossLX.style.top=Math.floor(crossOuterSize/2)-Math.floor(THIS.pointerThickness/2)+"px";p.crossLY.style.top=p.crossLX.style.left=THIS.pointerBorderWidth+"px";p.sld.style.overflow="hidden";p.sld.style.width=THIS.sliderSize+"px";p.sld.style.height=THIS.height+"px";p.sldGrad.draw(THIS.sliderSize,THIS.height,"#000","#000");p.sldB.style.display=displaySlider?"block":"none";p.sldB.style.position="absolute";p.sldB.style.left=THIS.padding+THIS.width+2*THIS.controlBorderWidth+2*controlPadding+"px";p.sldB.style.top=THIS.padding+"px";p.sldB.style.border=THIS.controlBorderWidth+"px solid";p.sldB.style.borderColor=THIS.controlBorderColor;p.sldM.style.display=displaySlider?"block":"none";p.sldM.style.position="absolute";p.sldM.style.left=THIS.padding+THIS.width+2*THIS.controlBorderWidth+controlPadding+"px";p.sldM.style.top=0+"px";p.sldM.style.width=THIS.sliderSize+2*controlPadding+2*THIS.controlBorderWidth+(displayAlphaSlider?0:Math.max(0,THIS.padding-controlPadding))+"px";p.sldM.style.height=2*THIS.controlBorderWidth+2*THIS.padding+THIS.height+"px";p.sldM.style.cursor="default";jsc.setData(p.sldM,{instance:THIS,control:"sld"});p.sldPtrIB.style.border=p.sldPtrOB.style.border=THIS.pointerBorderWidth+"px solid "+THIS.pointerBorderColor;p.sldPtrOB.style.position="absolute";p.sldPtrOB.style.left=-(2*THIS.pointerBorderWidth+THIS.pointerThickness)+"px";p.sldPtrOB.style.top="0";p.sldPtrMB.style.border=THIS.pointerThickness+"px solid "+THIS.pointerColor;p.sldPtrS.style.width=THIS.sliderSize+"px";p.sldPtrS.style.height=jsc.pub.sliderInnerSpace+"px";p.asld.style.overflow="hidden";p.asld.style.width=THIS.sliderSize+"px";p.asld.style.height=THIS.height+"px";p.asldGrad.draw(THIS.sliderSize,THIS.height,"#000");p.asldB.style.display=displayAlphaSlider?"block":"none";p.asldB.style.position="absolute";p.asldB.style.left=THIS.padding+THIS.width+2*THIS.controlBorderWidth+controlPadding+(displaySlider?THIS.sliderSize+3*controlPadding+2*THIS.controlBorderWidth:0)+"px";p.asldB.style.top=THIS.padding+"px";p.asldB.style.border=THIS.controlBorderWidth+"px solid";p.asldB.style.borderColor=THIS.controlBorderColor;p.asldM.style.display=displayAlphaSlider?"block":"none";p.asldM.style.position="absolute";p.asldM.style.left=THIS.padding+THIS.width+2*THIS.controlBorderWidth+controlPadding+(displaySlider?THIS.sliderSize+2*controlPadding+2*THIS.controlBorderWidth:0)+"px";p.asldM.style.top=0+"px";p.asldM.style.width=THIS.sliderSize+2*controlPadding+2*THIS.controlBorderWidth+Math.max(0,THIS.padding-controlPadding)+"px";p.asldM.style.height=2*THIS.controlBorderWidth+2*THIS.padding+THIS.height+"px";p.asldM.style.cursor="default";jsc.setData(p.asldM,{instance:THIS,control:"asld"});p.asldPtrIB.style.border=p.asldPtrOB.style.border=THIS.pointerBorderWidth+"px solid "+THIS.pointerBorderColor;p.asldPtrOB.style.position="absolute";p.asldPtrOB.style.left=-(2*THIS.pointerBorderWidth+THIS.pointerThickness)+"px";p.asldPtrOB.style.top="0";p.asldPtrMB.style.border=THIS.pointerThickness+"px solid "+THIS.pointerColor;p.asldPtrS.style.width=THIS.sliderSize+"px";p.asldPtrS.style.height=jsc.pub.sliderInnerSpace+"px";p.pal.className="jscolor-palette";p.pal.style.display=pickerDims.palette.rows?"block":"none";p.pal.style.position="absolute";p.pal.style.left=THIS.padding+"px";p.pal.style.top=2*THIS.controlBorderWidth+2*THIS.padding+THIS.height+"px";p.pal.innerHTML="";var chessboard=jsc.genColorPreviewCanvas("rgba(0,0,0,0)");var si=0;for(var r=0;r<pickerDims.palette.rows;r++){for(var c=0;c<pickerDims.palette.cols&&si<THIS._palette.length;c++,si++){var sampleColor=THIS._palette[si];var sampleCssColor=jsc.rgbaColor.apply(null,sampleColor.rgba);var sc=jsc.createEl("div");sc.style.width=pickerDims.palette.cellW-2*THIS.controlBorderWidth+"px";sc.style.height=pickerDims.palette.cellH-2*THIS.controlBorderWidth+"px";sc.style.backgroundColor=sampleCssColor;var sw=jsc.createEl("div");sw.className="jscolor-palette-sample";sw.style.display="block";sw.style.position="absolute";sw.style.left=(pickerDims.palette.cols<=1?0:Math.round(10*(c*((pickerDims.contentW-pickerDims.palette.cellW)/(pickerDims.palette.cols-1))))/10)+"px";sw.style.top=r*(pickerDims.palette.cellH+THIS.paletteSpacing)+"px";sw.style.border=THIS.controlBorderWidth+"px solid";sw.style.borderColor=THIS.controlBorderColor;sw.style.cursor="pointer";if(sampleColor.rgba[3]!==null&&sampleColor.rgba[3]<1){sw.style.backgroundImage="url('"+chessboard.canvas.toDataURL()+"')";sw.style.backgroundRepeat="repeat";sw.style.backgroundPosition="center center"}jsc.setData(sw,{instance:THIS,control:"palette-sample",color:sampleColor});sw.addEventListener("click",jsc.onPaletteSampleClick,false);sw.appendChild(sc);p.pal.appendChild(sw)}}function setBtnBorder(){var insetColors=THIS.controlBorderColor.split(/\s+/);var outsetColor=insetColors.length<2?insetColors[0]:insetColors[1]+" "+insetColors[0]+" "+insetColors[0]+" "+insetColors[1];p.btn.style.borderColor=outsetColor}var btnPadding=15;p.btn.className="jscolor-btn-close";p.btn.style.display=THIS.closeButton?"block":"none";p.btn.style.position="absolute";p.btn.style.left=THIS.padding+"px";p.btn.style.bottom=THIS.padding+"px";p.btn.style.padding="0 "+btnPadding+"px";p.btn.style.maxWidth=pickerDims.contentW-2*THIS.controlBorderWidth-2*btnPadding+"px";p.btn.style.overflow="hidden";p.btn.style.height=THIS.buttonHeight+"px";p.btn.style.whiteSpace="nowrap";p.btn.style.border=THIS.controlBorderWidth+"px solid";setBtnBorder();p.btn.style.color=THIS.buttonColor;p.btn.style.font="12px sans-serif";p.btn.style.textAlign="center";p.btn.style.cursor="pointer";p.btn.onmousedown=function(){THIS.hide()};p.btnT.style.lineHeight=THIS.buttonHeight+"px";p.btnT.innerHTML="";p.btnT.appendChild(window.document.createTextNode(THIS.closeText));redrawPad();redrawSld();redrawASld();if(jsc.picker.owner&&jsc.picker.owner!==THIS){jsc.removeClass(jsc.picker.owner.targetElement,jsc.pub.activeClassName)}jsc.picker.owner=THIS;if(THIS.container===window.document.body){jsc.redrawPosition()}else{jsc._drawPosition(THIS,0,0,"relative",false)}if(p.wrap.parentNode!==THIS.container){THIS.container.appendChild(p.wrap)}jsc.addClass(THIS.targetElement,jsc.pub.activeClassName)}function redrawPad(){var yChannel=jsc.getPadYChannel(THIS);var x=Math.round(THIS.channels.h/360*(THIS.width-1));var y=Math.round((1-THIS.channels[yChannel]/100)*(THIS.height-1));var crossOuterSize=2*THIS.pointerBorderWidth+THIS.pointerThickness+2*THIS.crossSize;var ofs=-Math.floor(crossOuterSize/2);jsc.picker.cross.style.left=x+ofs+"px";jsc.picker.cross.style.top=y+ofs+"px";switch(jsc.getSliderChannel(THIS)){case"s":var rgb1=jsc.HSV_RGB(THIS.channels.h,100,THIS.channels.v);var rgb2=jsc.HSV_RGB(THIS.channels.h,0,THIS.channels.v);var color1="rgb("+Math.round(rgb1[0])+","+Math.round(rgb1[1])+","+Math.round(rgb1[2])+")";var color2="rgb("+Math.round(rgb2[0])+","+Math.round(rgb2[1])+","+Math.round(rgb2[2])+")";jsc.picker.sldGrad.draw(THIS.sliderSize,THIS.height,color1,color2);break;case"v":var rgb=jsc.HSV_RGB(THIS.channels.h,THIS.channels.s,100);var color1="rgb("+Math.round(rgb[0])+","+Math.round(rgb[1])+","+Math.round(rgb[2])+")";var color2="#000";jsc.picker.sldGrad.draw(THIS.sliderSize,THIS.height,color1,color2);break}jsc.picker.asldGrad.draw(THIS.sliderSize,THIS.height,THIS.toHEXString())}function redrawSld(){var sldChannel=jsc.getSliderChannel(THIS);if(sldChannel){var y=Math.round((1-THIS.channels[sldChannel]/100)*(THIS.height-1));jsc.picker.sldPtrOB.style.top=y-(2*THIS.pointerBorderWidth+THIS.pointerThickness)-Math.floor(jsc.pub.sliderInnerSpace/2)+"px"}jsc.picker.asldGrad.draw(THIS.sliderSize,THIS.height,THIS.toHEXString())}function redrawASld(){var y=Math.round((1-THIS.channels.a)*(THIS.height-1));jsc.picker.asldPtrOB.style.top=y-(2*THIS.pointerBorderWidth+THIS.pointerThickness)-Math.floor(jsc.pub.sliderInnerSpace/2)+"px"}function isPickerOwner(){return jsc.picker&&jsc.picker.owner===THIS}function onValueKeyDown(ev){if(jsc.eventKey(ev)==="Enter"){if(THIS.valueElement){THIS.processValueInput(THIS.valueElement.value)}THIS.tryHide()}}function onAlphaKeyDown(ev){if(jsc.eventKey(ev)==="Enter"){if(THIS.alphaElement){THIS.processAlphaInput(THIS.alphaElement.value)}THIS.tryHide()}}function onValueChange(ev){if(jsc.getData(ev,"internal")){return}var oldVal=THIS.valueElement.value;THIS.processValueInput(THIS.valueElement.value);jsc.triggerCallback(THIS,"onChange");if(THIS.valueElement.value!==oldVal){jsc.triggerInputEvent(THIS.valueElement,"change",true,true)}}function onAlphaChange(ev){if(jsc.getData(ev,"internal")){return}var oldVal=THIS.alphaElement.value;THIS.processAlphaInput(THIS.alphaElement.value);jsc.triggerCallback(THIS,"onChange");jsc.triggerInputEvent(THIS.valueElement,"change",true,true);if(THIS.alphaElement.value!==oldVal){jsc.triggerInputEvent(THIS.alphaElement,"change",true,true)}}function onValueInput(ev){if(jsc.getData(ev,"internal")){return}if(THIS.valueElement){THIS.fromString(THIS.valueElement.value,jsc.flags.leaveValue)}jsc.triggerCallback(THIS,"onInput")}function onAlphaInput(ev){if(jsc.getData(ev,"internal")){return}if(THIS.alphaElement){THIS.fromHSVA(null,null,null,parseFloat(THIS.alphaElement.value),jsc.flags.leaveAlpha)}jsc.triggerCallback(THIS,"onInput");jsc.triggerInputEvent(THIS.valueElement,"input",true,true)}if(jsc.pub.options){for(var opt in jsc.pub.options){if(jsc.pub.options.hasOwnProperty(opt)){try{setOption(opt,jsc.pub.options[opt])}catch(e){console.warn(e)}}}}var presetsArr=[];if(opts.preset){if(typeof opts.preset==="string"){presetsArr=opts.preset.split(/\s+/)}else if(Array.isArray(opts.preset)){presetsArr=opts.preset.slice()}else{console.warn("Unrecognized preset value")}}if(presetsArr.indexOf("default")===-1){presetsArr.push("default")}for(var i=presetsArr.length-1;i>=0;i-=1){var pres=presetsArr[i];if(!pres){continue}if(!jsc.pub.presets.hasOwnProperty(pres)){console.warn("Unknown preset: %s",pres);continue}for(var opt in jsc.pub.presets[pres]){if(jsc.pub.presets[pres].hasOwnProperty(opt)){try{setOption(opt,jsc.pub.presets[pres][opt])}catch(e){console.warn(e)}}}}var nonProperties=["preset"];for(var opt in opts){if(opts.hasOwnProperty(opt)){if(nonProperties.indexOf(opt)===-1){try{setOption(opt,opts[opt])}catch(e){console.warn(e)}}}}if(this.container===undefined){this.container=window.document.body}else{this.container=jsc.node(this.container)}if(!this.container){throw new Error("Cannot instantiate color picker without a container element")}this.targetElement=jsc.node(targetElement);if(!this.targetElement){if(typeof targetElement==="string"&&/^[a-zA-Z][\w:.-]*$/.test(targetElement)){var possiblyId=targetElement;throw new Error("If '"+possiblyId+"' is supposed to be an ID, please use '#"+possiblyId+"' or any valid CSS selector.")}throw new Error("Cannot instantiate color picker without a target element")}if(this.targetElement.jscolor&&this.targetElement.jscolor instanceof jsc.pub){throw new Error("Color picker already installed on this element")}this.targetElement.jscolor=this;jsc.addClass(this.targetElement,jsc.pub.className);jsc.instances.push(this);if(jsc.isButton(this.targetElement)){if(this.targetElement.type.toLowerCase()!=="button"){this.targetElement.type="button"}if(jsc.isButtonEmpty(this.targetElement)){jsc.removeChildren(this.targetElement);this.targetElement.appendChild(window.document.createTextNode(" "));var compStyle=jsc.getCompStyle(this.targetElement);var currMinWidth=parseFloat(compStyle["min-width"])||0;if(currMinWidth<this.previewSize){jsc.setStyle(this.targetElement,{"min-width":this.previewSize+"px"},this.forceStyle)}}}if(this.valueElement===undefined){if(jsc.isTextInput(this.targetElement)){this.valueElement=this.targetElement}else{}}else if(this.valueElement===null){}else{this.valueElement=jsc.node(this.valueElement)}if(this.alphaElement){this.alphaElement=jsc.node(this.alphaElement)}if(this.previewElement===undefined){this.previewElement=this.targetElement}else if(this.previewElement===null){}else{this.previewElement=jsc.node(this.previewElement)}if(this.valueElement&&jsc.isTextInput(this.valueElement)){var valueElementOrigEvents={onInput:this.valueElement.oninput};this.valueElement.oninput=null;this.valueElement.addEventListener("keydown",onValueKeyDown,false);this.valueElement.addEventListener("change",onValueChange,false);this.valueElement.addEventListener("input",onValueInput,false);if(valueElementOrigEvents.onInput){this.valueElement.addEventListener("input",valueElementOrigEvents.onInput,false)}this.valueElement.setAttribute("autocomplete","off");this.valueElement.setAttribute("autocorrect","off");this.valueElement.setAttribute("autocapitalize","off");this.valueElement.setAttribute("spellcheck",false)}if(this.alphaElement&&jsc.isTextInput(this.alphaElement)){this.alphaElement.addEventListener("keydown",onAlphaKeyDown,false);this.alphaElement.addEventListener("change",onAlphaChange,false);this.alphaElement.addEventListener("input",onAlphaInput,false);this.alphaElement.setAttribute("autocomplete","off");this.alphaElement.setAttribute("autocorrect","off");this.alphaElement.setAttribute("autocapitalize","off");this.alphaElement.setAttribute("spellcheck",false)}var initValue="FFFFFF";if(this.value!==undefined){initValue=this.value}else if(this.valueElement&&this.valueElement.value!==undefined){initValue=this.valueElement.value}var initAlpha=undefined;if(this.alpha!==undefined){initAlpha=""+this.alpha}else if(this.alphaElement&&this.alphaElement.value!==undefined){initAlpha=this.alphaElement.value}this._currentFormat=null;if(["auto","any"].indexOf(this.format.toLowerCase())>-1){var color=jsc.parseColorString(initValue);this._currentFormat=color?color.format:"hex"}else{this._currentFormat=this.format.toLowerCase()}this.processValueInput(initValue);if(initAlpha!==undefined){this.processAlphaInput(initAlpha)}if(this.random){this.randomize.apply(this,Array.isArray(this.random)?this.random:[])}}};jsc.pub.className="jscolor";jsc.pub.activeClassName="jscolor-active";jsc.pub.looseJSON=true;jsc.pub.presets={};jsc.pub.presets["default"]={};jsc.pub.presets["light"]={backgroundColor:"rgba(255,255,255,1)",controlBorderColor:"rgba(187,187,187,1)",buttonColor:"rgba(0,0,0,1)"};jsc.pub.presets["dark"]={backgroundColor:"rgba(51,51,51,1)",controlBorderColor:"rgba(153,153,153,1)",buttonColor:"rgba(240,240,240,1)"};jsc.pub.presets["small"]={width:101,height:101,padding:10,sliderSize:14,paletteCols:8};jsc.pub.presets["medium"]={width:181,height:101,padding:12,sliderSize:16,paletteCols:10};jsc.pub.presets["large"]={width:271,height:151,padding:12,sliderSize:24,paletteCols:15};jsc.pub.presets["thin"]={borderWidth:1,controlBorderWidth:1,pointerBorderWidth:1};jsc.pub.presets["thick"]={borderWidth:2,controlBorderWidth:2,pointerBorderWidth:2};jsc.pub.sliderInnerSpace=3;jsc.pub.chessboardSize=8;jsc.pub.chessboardColor1="#666666";jsc.pub.chessboardColor2="#999999";jsc.pub.previewSeparator=["rgba(255,255,255,.65)","rgba(128,128,128,.65)"];jsc.pub.init=function(){if(jsc.initialized){return}window.document.addEventListener("mousedown",jsc.onDocumentMouseDown,false);window.document.addEventListener("keyup",jsc.onDocumentKeyUp,false);window.addEventListener("resize",jsc.onWindowResize,false);window.addEventListener("scroll",jsc.onWindowScroll,false);jsc.pub.install();jsc.initialized=true;while(jsc.readyQueue.length){var func=jsc.readyQueue.shift();func()}};jsc.pub.install=function(rootNode){var success=true;try{jsc.installBySelector("[data-jscolor]",rootNode)}catch(e){success=false;console.warn(e)}if(jsc.pub.lookupClass){try{jsc.installBySelector("input."+jsc.pub.lookupClass+", "+"button."+jsc.pub.lookupClass,rootNode)}catch(e){}}return success};jsc.pub.ready=function(func){if(typeof func!=="function"){console.warn("Passed value is not a function");return false}if(jsc.initialized){func()}else{jsc.readyQueue.push(func)}return true};jsc.pub.trigger=function(eventNames){var triggerNow=function(){jsc.triggerGlobal(eventNames)};if(jsc.initialized){triggerNow()}else{jsc.pub.ready(triggerNow)}};jsc.pub.hide=function(){if(jsc.picker&&jsc.picker.owner){jsc.picker.owner.hide()}};jsc.pub.chessboard=function(color){if(!color){color="rgba(0,0,0,0)"}var preview=jsc.genColorPreviewCanvas(color);return preview.canvas.toDataURL()};jsc.pub.background=function(color){var backgrounds=[];backgrounds.push(jsc.genColorPreviewGradient(color));var preview=jsc.genColorPreviewCanvas();backgrounds.push(["url('"+preview.canvas.toDataURL()+"')","left top","repeat"].join(" "));return backgrounds.join(", ")};jsc.pub.options={};jsc.pub.lookupClass="jscolor";jsc.pub.installByClassName=function(){console.error('jscolor.installByClassName() is DEPRECATED. Use data-jscolor="" attribute instead of a class name.'+jsc.docsRef);return false};jsc.register();return jsc.pub}();if(typeof window.jscolor==="undefined"){window.jscolor=window.JSColor=jscolor}return jscolor});


jscolor.presets.default = {
	palette: [
		'#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26', '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#ff0090',
		'#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d', '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
	]
}
/**** settings.js****/
﻿function messageBox(message, title){
    return modal(message, title || 'Message', false);
}
function confirmPrompt(message, title){
    return modal(message, title || 'Confirm', true);
}

function modal(message, title, confirm){
    return new Promise(function (resolve, reject) {
        let divBackground = document.createElement('div');
        divBackground.classList.add('modal-background');
        document.body.appendChild(divBackground);

        let divModal = document.createElement('div');
        divBackground.appendChild(divModal);
        divModal.classList.add('modal');

        let divTitle = document.createElement('div');
        divTitle.classList.add('modal-title');
        divModal.appendChild(divTitle);
        
        let divTitleSpan = document.createElement('span');
        divTitleSpan.innerText = title;
        divTitle.appendChild(divTitleSpan);

        let divMessageBody = document.createElement('div');
        divMessageBody.classList.add('modal-body');
        divModal.appendChild(divMessageBody);
        
        let divMessageSpan = document.createElement('span');
        divMessageSpan.innerText = message;
        divMessageBody.appendChild(divMessageSpan);

        // buttons
        let divButtons = document.createElement('div');
        divButtons.classList.add('modal-buttons');
        divModal.appendChild(divButtons);
        for(let i=0;i<(confirm ? 2 : 1);i++){
            let btn = document.createElement('button');
            btn.innerText = confirm ? (i == 0 ? 'Yes' : 'No') : 'OK';
            btn.classList.add('btn');
            btn.addEventListener('click', () => {
                divBackground.remove();
                if(i == 0)
                    resolve();
                else
                    reject();
            });
            divButtons.appendChild(btn);            
        }
    });
}

function toast(message, success) {
    var toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('toast');
        toast.setAttribute('id', 'toast');
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add(success ? 'success' : 'failure');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('success');
        toast.classList.remove('failure');
    }, 3000);
}


document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;

    function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('element', this.getAttribute('id'));
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        if (dragSrcEl != this) {
            // this is the target, where we are adding it
            // dragSrcEl is the item being dragged
            this.parentNode.insertBefore(dragSrcEl, this);

            saveLayout();
        }

        return false;
    }

    function saveLayout() {
        let uids = Array.from(document.querySelectorAll('.group-list li')).map(x => x.getAttribute('id'));

        const options = {
            method: 'POST',
            body: JSON.stringify({ uids: uids}),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return fetch('/groups/order', options);
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }
        

    let items = document.querySelectorAll('.group-list li');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });
});
/**** site.js****/
﻿window.onpopstate = function(event) {
    let path = document.location.pathname;
    path = path.substring(path.lastIndexOf('/') + 1);
    fetchDashboard(path, true);
}

function abortRequests() {
    let uid = this.getDashboardInstanceUid();
    let event = new CustomEvent("disposeDashboard", 
        {
            detail: {
                uid: uid,
            },
            bubbles: true,
            cancelable: true
        }
    );
    document.body.dispatchEvent(event);
}


function getDashboardInstanceUid()
{
    return document.getElementById('dashboard-instance')?.value;
}


function LiveApp(name, instanceUid, interval) 
{    
    if(typeof(name) !== 'string')
        throw 'Name is not a string';

    new SmartApp({
        name: name,
        uid: instanceUid,
        interval: interval,
    });
}

function changeTheme(event) {
    let theme = event?.target?.value;
    if (!theme)
        return;
    document.getElementById('theme-style').setAttribute('href', `/themes/${theme}/theme.min.css`);
}

function htmlEncode(text) {
    var node = document.createTextNode(text);
    var p = document.createElement('p');
    p.appendChild(node);
    return p.innerHTML;
}

function newGuid() 
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function changeTheme(name){
    window.location.reload();
}


function fetchDashboard(uid,  backwards) {
    let currentTheme = document.getElementById('hdn-dashboard-theme')?.value || 'Default';
    let fetchUrl = '/dashboard/' + (uid || 'Default') + '?inline=true';
    fetch(fetchUrl).then(res => {
        if(!res.ok)
            return;
        this.abortRequests();
        return res.text();        
    }).then(html => {
        html = html.replace(/x-text=\"[^"]+\"/g, '');
        if(!backwards)
            history.pushState({uid:uid}, 'Fenrus', '/dashboard/' + uid);

        let eleDashboard = document.querySelector('.dashboard');
        eleDashboard.innerHTML = html;
        if(typeof(themeInstance) !== 'undefined')
            themeInstance.init();

        let dashboardBackground = document.getElementById('hdn-dashboard-background')?.value || null;
        document.body.style.backgroundImage = dashboardBackground ? `url('${dashboardBackground}')` : null;
        document.body.classList.remove('custom-background');
        document.body.classList.remove('no-custom-background');
        document.body.classList.add((!dashboardBackground ? 'no-' : '') + 'custom-background');

        let dashboardTheme = document.getElementById('hdn-dashboard-theme')?.value || 'Default';
        if(currentTheme != dashboardTheme)
            changeTheme(dashboardTheme);


        let name = document.getElementById('hdn-dashboard-name').value;
        document.getElementById('dashboard-name').innerText = name === 'Default' ? '' : name;

        let rgx = /LiveApp\('([^']+)', '([^']+)', ([\d]+)\);/g;
        let count = 0;
        while (match = rgx.exec(html)){
          let name = match[1];
          let uid = match[2];
          let interval = parseInt(match[3], 10);
          LiveApp(name, uid, interval);

          if(++count > 100) // avoid infinite while loop, shouldnt happen, but safety first
            break;
        }
    });
}

function launch(event, uid) {
    abortRequests();
    if(event && event.ctrlKey)
        return;
    let divLaunchingApp = document.getElementById('launching-app');
    let eleApp = document.getElementById(uid);    
    if(eleApp && divLaunchingApp){
        let target = eleApp.getAttribute('target');
        if(!target || target === '_self'){
            divLaunchingApp.querySelector('.title').textContent = 'Launching ' + eleApp.querySelector('.content .title').textContent;
            divLaunchingApp.querySelector('img').src = eleApp.querySelector('.icon img').src;
            divLaunchingApp.style.display = 'unset';
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let divLaunchingApp = document.getElementById('launching-app');
    if(divLaunchingApp)
        divLaunchingApp.style.display = 'none';
});

function changeDashboard(uid){    
    document.cookie = 'dashboard=' + uid;
    window.location.reload(true);
}

function moveGroup(groupUid, up){
    let dashboardUid = document.querySelector('.dashboard').getAttribute('x-uid');
    fetch(`/settings/dashboards/${dashboardUid}/move-group/${groupUid}/${up}`, { method: 'POST'}).then(res => {
        let eleGroup = document.getElementById(groupUid);
        let dashboard = eleGroup.parentElement;
        let groups = dashboard.querySelectorAll('.db-group');
        let grpIndex = Array.prototype.indexOf.call(groups, eleGroup);
        let first, second;
        if(up){
            first = eleGroup;
            second = groups[grpIndex - 1];
        }else{
            first = groups[grpIndex + 1];
            second = eleGroup;
        }
        dashboard.insertBefore(first, second);
    });
}

function removeGroup(groupUid, groupName) 
{
    if(confirm(`Do you want to remove the group '${groupName}'?`) !== true)
        return;
    let dashboardUid = document.querySelector('.dashboard').getAttribute('x-uid');        
    fetch(`/settings/dashboards/${dashboardUid}/remove-group/${groupUid}`, { method: 'POST'}).then(res => {
        let eleGroup = document.getElementById(groupUid);
        eleGroup?.remove();
    });
}
/**** smartapp.js****/
class SmartApp
{
    uid;
    name;
    interval;
    dashboardIntanceUid;
    renderCount = 0;
    controller;
    timerCarousel;
    icon;

    constructor(args)
    {
        this.uid = args.uid || args.instanceUid;
        this.name = args.name;
        this.interval = args.interval;
        this.icon = document.getElementById(this.uid).querySelector('.icon img')?.getAttribute('src');
        if(this.interval === 0)
            this.interval = 3000;
        this.dashboardIntanceUid = this.getDashboardInstanceUid();
        document.addEventListener('disposeDashboard', (e) => this.dispose(), false);
        this.trigger();
    }
    
    async trigger(){
        if(this.stillActive() === false)
            return;
        
        let result = await this.doWork();
        
        if(this.stillActive() === false)
            return;

        if(!result)
            return; // nothing more to do
        if(this.interval <= 0)
            return; // nothing more to do
        
        setTimeout(()=> this.trigger(), this.interval);
    }
    
    getDashboardInstanceUid()
    {
        return document.getElementById('dashboard-instance')?.value;
    }

    dispose()
    {
        console.log('disposing of smart app!', this.name);
        if(this.timerCarousel)
            clearInterval(this.timerCarousel);
        this.controller?.abort();
    }

    stillActive(){
        let dashboard = this.getDashboardInstanceUid();
        if(dashboard != this.dashboardIntanceUid){
            console.log('No longer active: ' + this.name);
            return false;
        }
        return true;
    }

    async doWork() 
    {
        if(!this.stillActive())
            return false;        
        if(++this.renderCount < 2)
        {
            let saved = this.getFromLocalStorage();
            if(saved) 
            {            
                this.appSetStatus(saved.html);
                if(saved.old === false)
                {
                    // local storage is fine, dont need to fetch new data right now
                    return this.interval > 0; 
                }
            }
        }

        if(document.hasFocus() === false){
            return true; // prevent request if the page doesnt have focus
        }    

        return await this.refresh();
    }
    refresh()
    {        
        return new Promise((resolve, reject) =>
        {
            this.controller?.abort();

            this.controller = new AbortController();
            let timeoutId = setTimeout(() => this.controller.abort(), Math.min(Math.max(this.interval, 3000), 5000));

            let success = true;
            let url = `/apps/${encodeURIComponent(this.name)}/${encodeURIComponent(this.uid)}/status?name=` + encodeURIComponent(this.name) + '&t=' + new Date().getTime();
            fetch(url, {
                signal: this.controller.signal
            })
            .then(res => {
                clearTimeout(timeoutId);
                timeoutId = null;
                this.controller = null;                

                let currentDashboard = this.getDashboardInstanceUid();
                if(currentDashboard != this.dashboardIntanceUid){
                    success = false;
                    return; // if they changed dashboards
                }

                if(!res.ok)
                    throw res;
                if(res.status === 302){
                    // redirect, to login            
                    success = false;
                    window.location.href = '/login';
                }
                let xIcon = res.headers.get('x-icon');
                if(xIcon){
                    this.changeIcon(atob(xIcon));
                }
                let xStatusIndicator = res.headers.get('x-status-indicator');
                if(xStatusIndicator !== undefined && xStatusIndicator !== null){
                    this.setStatusIndicator(atob(xStatusIndicator));
                }
                return res.text();
            })
            .then(html => {
                if(html != undefined)
                    this.appSetStatus(html);  
            }).catch(error => {
                success = false;
                if(timeoutId)
                    clearTimeout(timeoutId);
                this.controller = null;

                let currentDashboard = this.getDashboardInstanceUid();
                if(currentDashboard != this.dashboardInstanceUid)
                    return; // if they changed dashboards
                console.log(name + ' error: ', error);    
            }).finally(() => { 
                resolve(success);
            });
        });
    }

    changeIcon(icon) {
        icon = icon || this.icon;        
        let imgIcon = document.getElementById(this.uid).querySelector('.icon img');
        if(imgIcon)
            imgIcon.setAttribute('src', icon);
    }

    setStatusIndicator(icon) 
    {        
        let imgIcon = document.getElementById(this.uid).querySelector('.status-indicator');
        if(imgIcon)
        {
            if(icon){
                imgIcon.style.display = 'block';
                imgIcon.style.backgroundImage = `url('${icon}')`;
            }
            else{
                imgIcon.style.display = 'none';
            }
        }
    }

    getItemSize()
    {
        let ele = document.getElementById(this.uid);
        if(!ele)
            return '';
        if(ele.classList.contains('x-large'))
            return 'x-large'
        if(ele.classList.contains('large'))
            return 'large'
        if(ele.classList.contains('medium'))
            return 'medium'
        if(ele.classList.contains('small'))
            return 'small';
        return '';
    }

    getFromLocalStorage()
    {
        try{
            let size = this.getItemSize();
            let item = JSON.parse(localStorage.getItem(this.uid + '-' + size));
            if(!item?.date)
                return;
            if(item.date < (new Date().getTime() - 60000))
                return { html: item.html, old: true}; // older than a minute reject it
            return { html: item.html, old: false};
        }
        catch(err) { return; }
    }

    setInLocalStorage(html)
    {
        let size = this.getItemSize(this.uid);
        localStorage.setItem(this.uid + '-' + size, JSON.stringify({
            date: new Date().getTime(),
            html: html
        }));
    }

    appSetStatus(content)
    {
        let eleItem = document.getElementById(this.uid);
        if(!eleItem)
            return;

        let ele = eleItem.querySelector('.status');
        if (ele && content) {
            this.setInLocalStorage(content);        
            if(/^:carousel:/.test(content)){
                content = content.substring(10);
                let index = content.indexOf(':');
                let carouselId = content.substring(0, index);
                content = content.substring(index + 1);
                if(!this.timerCarousel)
                    this.carouselTimer(carouselId);
                this.setItemClass(eleItem, 'carousel');
                ele.innerHTML = content;
                let indexes = ele.querySelectorAll('.controls a');
                for(let i=0;i<indexes.length;i++)
                {
                    indexes[i].addEventListener('click', (event) => {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        this.carouselItem(event, carouselId, i);
                    }, false);
                }
                return;
            }    
            else if(/^:bar-info:/.test(content)){
                content = content.substring(10);
                this.setItemClass(eleItem, 'bar-info');
            }
            else if(/^data:/.test(content)){
                content = `<img class="app-chart" src="${content}" />`;
                this.setItemClass(eleItem, 'chart');
            }
            else {
                this.setItemClass(eleItem, 'db-basic');
            }
            ele.innerHTML = content;


        }
    }

    setItemClass(item, className) {
        item.className = item.className.replace(/(carousel|chart|db-basic)/g, '') + ' ' + className;
    }

    carouselItem(e, id, itemIndex){
        if(e)
            e.preventDefault();
        let carousel = document.getElementById(id);    
        for(let item of carousel.querySelectorAll('.item')){
            let visible = item.classList.contains('visible');
            if(item.id === id + '-' + itemIndex) {
                item.classList.remove('hidden');
                if(visible === false)
                    item.classList.add('visible');
            }
            else if(visible)
            {
                item.classList.remove('visible');
                item.classList.add('hidden');
            }
            else
            {
                item.classList.remove('hidden');
            }
        }

        let controls = carousel.querySelectorAll('.controls a');
        for(let i=0;i<controls.length;i++){
            controls[i].classList.remove('selected');
            if(i === itemIndex)
                controls[i].classList.add('selected');
        }

        this.carouselTimer(id);
    }

    carouselTimer(id) {
        if(this.timerCarousel)
            clearInterval(this.timerCarousel);
        this.timerCarousel = setInterval(() => {
            let carousel = document.getElementById(id);
            if(!carousel)
                return; // happens if the carousel was replaced with newer html

            let hover = !!carousel.querySelector('.cover-link:hover');
            if(hover)
                return; // if hovering dont move the carousel
            
            let visible = carousel.querySelector('.item.visible');
            let index = parseInt(visible.id.substring(visible.id.indexOf('-') + 1), 10);
            ++index;
            let hasNext = document.getElementById(id + '-' + index);
            this.carouselItem(null, id, hasNext ? index : 0);
        }, 5000);
    }
}
/**** socket.io.js****/
/*!
 * Socket.IO v4.5.1
 * (c) 2014-2022 Guillermo Rauch
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.io = factory());
  })(this, (function () { 'use strict';
  
    function _typeof(obj) {
      "@babel/helpers - typeof";
  
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
  
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
  
    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
  
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
  
        return target;
      };
  
      return _extends.apply(this, arguments);
    }
  
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
  
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
  
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
  
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  
      return _setPrototypeOf(o, p);
    }
  
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
  
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
  
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }
  
      return _construct.apply(null, arguments);
    }
  
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
  
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;
  
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
  
        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
  
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);
  
          _cache.set(Class, Wrapper);
        }
  
        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
  
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };
  
      return _wrapNativeSuper(Class);
    }
  
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return self;
    }
  
    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
  
      return _assertThisInitialized(self);
    }
  
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
  
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
  
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
  
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
  
        return _possibleConstructorReturn(this, result);
      };
    }
  
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }
  
      return object;
    }
  
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);
  
          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);
  
          if (desc.get) {
            return desc.get.call(receiver);
          }
  
          return desc.value;
        };
      }
  
      return _get(target, property, receiver || target);
    }
  
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
  
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
  
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  
      return arr2;
    }
  
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
  
          var F = function () {};
  
          return {
            s: F,
            n: function () {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: F
          };
        }
  
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
  
      var normalCompletion = true,
          didErr = false,
          err;
      return {
        s: function () {
          it = it.call(o);
        },
        n: function () {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function (e) {
          didErr = true;
          err = e;
        },
        f: function () {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }
  
    var PACKET_TYPES = Object.create(null); // no Map = no polyfill
  
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    var PACKET_TYPES_REVERSE = Object.create(null);
    Object.keys(PACKET_TYPES).forEach(function (key) {
      PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    var ERROR_PACKET = {
      type: "error",
      data: "parser error"
    };
  
    var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
    var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10
  
    var isView$1 = function isView(obj) {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    };
  
    var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
      var type = _ref.type,
          data = _ref.data;
  
      if (withNativeBlob$1 && data instanceof Blob) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(data, callback);
        }
      } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(new Blob([data]), callback);
        }
      } // plain string
  
  
      return callback(PACKET_TYPES[type] + (data || ""));
    };
  
    var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
      var fileReader = new FileReader();
  
      fileReader.onload = function () {
        var content = fileReader.result.split(",")[1];
        callback("b" + content);
      };
  
      return fileReader.readAsDataURL(data);
    };
  
    /*
     * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.
  
    var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  
    for (var i$1 = 0; i$1 < chars.length; i$1++) {
      lookup$1[chars.charCodeAt(i$1)] = i$1;
    }
  
    var decode$1 = function decode(base64) {
      var bufferLength = base64.length * 0.75,
          len = base64.length,
          i,
          p = 0,
          encoded1,
          encoded2,
          encoded3,
          encoded4;
  
      if (base64[base64.length - 1] === '=') {
        bufferLength--;
  
        if (base64[base64.length - 2] === '=') {
          bufferLength--;
        }
      }
  
      var arraybuffer = new ArrayBuffer(bufferLength),
          bytes = new Uint8Array(arraybuffer);
  
      for (i = 0; i < len; i += 4) {
        encoded1 = lookup$1[base64.charCodeAt(i)];
        encoded2 = lookup$1[base64.charCodeAt(i + 1)];
        encoded3 = lookup$1[base64.charCodeAt(i + 2)];
        encoded4 = lookup$1[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }
  
      return arraybuffer;
    };
  
    var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
  
    var decodePacket = function decodePacket(encodedPacket, binaryType) {
      if (typeof encodedPacket !== "string") {
        return {
          type: "message",
          data: mapBinary(encodedPacket, binaryType)
        };
      }
  
      var type = encodedPacket.charAt(0);
  
      if (type === "b") {
        return {
          type: "message",
          data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
      }
  
      var packetType = PACKET_TYPES_REVERSE[type];
  
      if (!packetType) {
        return ERROR_PACKET;
      }
  
      return encodedPacket.length > 1 ? {
        type: PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
      } : {
        type: PACKET_TYPES_REVERSE[type]
      };
    };
  
    var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
      if (withNativeArrayBuffer$1) {
        var decoded = decode$1(data);
        return mapBinary(decoded, binaryType);
      } else {
        return {
          base64: true,
          data: data
        }; // fallback for old browsers
      }
    };
  
    var mapBinary = function mapBinary(data, binaryType) {
      switch (binaryType) {
        case "blob":
          return data instanceof ArrayBuffer ? new Blob([data]) : data;
  
        case "arraybuffer":
        default:
          return data;
        // assuming the data is already an ArrayBuffer
      }
    };
  
    var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
  
    var encodePayload = function encodePayload(packets, callback) {
      // some packets may be added to the array while encoding, so the initial length must be saved
      var length = packets.length;
      var encodedPackets = new Array(length);
      var count = 0;
      packets.forEach(function (packet, i) {
        // force base64 encoding for binary packets
        encodePacket(packet, false, function (encodedPacket) {
          encodedPackets[i] = encodedPacket;
  
          if (++count === length) {
            callback(encodedPackets.join(SEPARATOR));
          }
        });
      });
    };
  
    var decodePayload = function decodePayload(encodedPayload, binaryType) {
      var encodedPackets = encodedPayload.split(SEPARATOR);
      var packets = [];
  
      for (var i = 0; i < encodedPackets.length; i++) {
        var decodedPacket = decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
  
        if (decodedPacket.type === "error") {
          break;
        }
      }
  
      return packets;
    };
  
    var protocol$1 = 4;
  
    /**
     * Initialize a new `Emitter`.
     *
     * @api public
     */
    function Emitter(obj) {
      if (obj) return mixin(obj);
    }
    /**
     * Mixin the emitter properties.
     *
     * @param {Object} obj
     * @return {Object}
     * @api private
     */
  
    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }
  
      return obj;
    }
    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
  
  
    Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
      return this;
    };
    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
  
  
    Emitter.prototype.once = function (event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }
  
      on.fn = fn;
      this.on(event, on);
      return this;
    };
    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
  
  
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {}; // all
  
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      } // specific event
  
  
      var callbacks = this._callbacks['$' + event];
      if (!callbacks) return this; // remove all handlers
  
      if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
      } // remove specific handler
  
  
      var cb;
  
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
  
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      } // Remove event specific arrays for event types that no
      // one is subscribed for to avoid memory leak.
  
  
      if (callbacks.length === 0) {
        delete this._callbacks['$' + event];
      }
  
      return this;
    };
    /**
     * Emit `event` with the given args.
     *
     * @param {String} event
     * @param {Mixed} ...
     * @return {Emitter}
     */
  
  
    Emitter.prototype.emit = function (event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1),
          callbacks = this._callbacks['$' + event];
  
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
  
      if (callbacks) {
        callbacks = callbacks.slice(0);
  
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }
  
      return this;
    }; // alias used for reserved events (protected method)
  
  
    Emitter.prototype.emitReserved = Emitter.prototype.emit;
    /**
     * Return array of callbacks for `event`.
     *
     * @param {String} event
     * @return {Array}
     * @api public
     */
  
    Emitter.prototype.listeners = function (event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks['$' + event] || [];
    };
    /**
     * Check if this emitter has `event` handlers.
     *
     * @param {String} event
     * @return {Boolean}
     * @api public
     */
  
  
    Emitter.prototype.hasListeners = function (event) {
      return !!this.listeners(event).length;
    };
  
    var globalThis = (function () {
      if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    })();
  
    function pick(obj) {
      for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        attr[_key - 1] = arguments[_key];
      }
  
      return attr.reduce(function (acc, k) {
        if (obj.hasOwnProperty(k)) {
          acc[k] = obj[k];
        }
  
        return acc;
      }, {});
    } // Keep a reference to the real timeout functions so they can be used when overridden
  
    var NATIVE_SET_TIMEOUT = setTimeout;
    var NATIVE_CLEAR_TIMEOUT = clearTimeout;
    function installTimerFunctions(obj, opts) {
      if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis);
      } else {
        obj.setTimeoutFn = setTimeout.bind(globalThis);
        obj.clearTimeoutFn = clearTimeout.bind(globalThis);
      }
    } // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
  
    var BASE64_OVERHEAD = 1.33; // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
  
    function byteLength(obj) {
      if (typeof obj === "string") {
        return utf8Length(obj);
      } // arraybuffer or blob
  
  
      return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
  
    function utf8Length(str) {
      var c = 0,
          length = 0;
  
      for (var i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
  
        if (c < 0x80) {
          length += 1;
        } else if (c < 0x800) {
          length += 2;
        } else if (c < 0xd800 || c >= 0xe000) {
          length += 3;
        } else {
          i++;
          length += 4;
        }
      }
  
      return length;
    }
  
    var TransportError = /*#__PURE__*/function (_Error) {
      _inherits(TransportError, _Error);
  
      var _super = _createSuper(TransportError);
  
      function TransportError(reason, description, context) {
        var _this;
  
        _classCallCheck(this, TransportError);
  
        _this = _super.call(this, reason);
        _this.description = description;
        _this.context = context;
        _this.type = "TransportError";
        return _this;
      }
  
      return TransportError;
    }( /*#__PURE__*/_wrapNativeSuper(Error));
  
    var Transport = /*#__PURE__*/function (_Emitter) {
      _inherits(Transport, _Emitter);
  
      var _super2 = _createSuper(Transport);
  
      /**
       * Transport abstract constructor.
       *
       * @param {Object} options.
       * @api private
       */
      function Transport(opts) {
        var _this2;
  
        _classCallCheck(this, Transport);
  
        _this2 = _super2.call(this);
        _this2.writable = false;
        installTimerFunctions(_assertThisInitialized(_this2), opts);
        _this2.opts = opts;
        _this2.query = opts.query;
        _this2.readyState = "";
        _this2.socket = opts.socket;
        return _this2;
      }
      /**
       * Emits an error.
       *
       * @param {String} reason
       * @param description
       * @param context - the error context
       * @return {Transport} for chaining
       * @api protected
       */
  
  
      _createClass(Transport, [{
        key: "onError",
        value: function onError(reason, description, context) {
          _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "error", new TransportError(reason, description, context));
  
          return this;
        }
        /**
         * Opens the transport.
         *
         * @api public
         */
  
      }, {
        key: "open",
        value: function open() {
          if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
          }
  
          return this;
        }
        /**
         * Closes the transport.
         *
         * @api public
         */
  
      }, {
        key: "close",
        value: function close() {
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
          }
  
          return this;
        }
        /**
         * Sends multiple packets.
         *
         * @param {Array} packets
         * @api public
         */
  
      }, {
        key: "send",
        value: function send(packets) {
          if ("open" === this.readyState) {
            this.write(packets);
          }
        }
        /**
         * Called upon open
         *
         * @api protected
         */
  
      }, {
        key: "onOpen",
        value: function onOpen() {
          this.readyState = "open";
          this.writable = true;
  
          _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "open");
        }
        /**
         * Called with data.
         *
         * @param {String} data
         * @api protected
         */
  
      }, {
        key: "onData",
        value: function onData(data) {
          var packet = decodePacket(data, this.socket.binaryType);
          this.onPacket(packet);
        }
        /**
         * Called with a decoded packet.
         *
         * @api protected
         */
  
      }, {
        key: "onPacket",
        value: function onPacket(packet) {
          _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "packet", packet);
        }
        /**
         * Called upon close.
         *
         * @api protected
         */
  
      }, {
        key: "onClose",
        value: function onClose(details) {
          this.readyState = "closed";
  
          _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "close", details);
        }
      }]);
  
      return Transport;
    }(Emitter);
  
    // imported from https://github.com/unshiftio/yeast
  
    var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
        length = 64,
        map = {};
    var seed = 0,
        i = 0,
        prev;
    /**
     * Return a string representing the specified number.
     *
     * @param {Number} num The number to convert.
     * @returns {String} The string representation of the number.
     * @api public
     */
  
    function encode$1(num) {
      var encoded = '';
  
      do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
      } while (num > 0);
  
      return encoded;
    }
    /**
     * Yeast: A tiny growing id generator.
     *
     * @returns {String} A unique id.
     * @api public
     */
  
    function yeast() {
      var now = encode$1(+new Date());
      if (now !== prev) return seed = 0, prev = now;
      return now + '.' + encode$1(seed++);
    } //
    // Map each character to its index.
    //
  
    for (; i < length; i++) {
      map[alphabet[i]] = i;
    }
  
    // imported from https://github.com/galkn/querystring
  
    /**
     * Compiles a querystring
     * Returns string representation of the object
     *
     * @param {Object}
     * @api private
     */
    function encode(obj) {
      var str = '';
  
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (str.length) str += '&';
          str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
      }
  
      return str;
    }
    /**
     * Parses a simple querystring into an object
     *
     * @param {String} qs
     * @api private
     */
  
    function decode(qs) {
      var qry = {};
      var pairs = qs.split('&');
  
      for (var i = 0, l = pairs.length; i < l; i++) {
        var pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
  
      return qry;
    }
  
    // imported from https://github.com/component/has-cors
    var value = false;
  
    try {
      value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
    } catch (err) {// if XMLHttp support is disabled in IE then it will throw
      // when trying to create
    }
  
    var hasCORS = value;
  
    // browser shim for xmlhttprequest module
    function XMLHttpRequest$1 (opts) {
      var xdomain = opts.xdomain; // XMLHttpRequest can be disabled on IE
  
      try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
          return new XMLHttpRequest();
        }
      } catch (e) {}
  
      if (!xdomain) {
        try {
          return new globalThis[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }
  
    function empty() {}
  
    var hasXHR2 = function () {
      var xhr = new XMLHttpRequest$1({
        xdomain: false
      });
      return null != xhr.responseType;
    }();
  
    var Polling = /*#__PURE__*/function (_Transport) {
      _inherits(Polling, _Transport);
  
      var _super = _createSuper(Polling);
  
      /**
       * XHR Polling constructor.
       *
       * @param {Object} opts
       * @api public
       */
      function Polling(opts) {
        var _this;
  
        _classCallCheck(this, Polling);
  
        _this = _super.call(this, opts);
        _this.polling = false;
  
        if (typeof location !== "undefined") {
          var isSSL = "https:" === location.protocol;
          var port = location.port; // some user agents have empty `location.port`
  
          if (!port) {
            port = isSSL ? "443" : "80";
          }
  
          _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
          _this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */
  
  
        var forceBase64 = opts && opts.forceBase64;
        _this.supportsBinary = hasXHR2 && !forceBase64;
        return _this;
      }
      /**
       * Transport name.
       */
  
  
      _createClass(Polling, [{
        key: "name",
        get: function get() {
          return "polling";
        }
        /**
         * Opens the socket (triggers polling). We write a PING message to determine
         * when the transport is open.
         *
         * @api private
         */
  
      }, {
        key: "doOpen",
        value: function doOpen() {
          this.poll();
        }
        /**
         * Pauses polling.
         *
         * @param {Function} callback upon buffers are flushed and transport is paused
         * @api private
         */
  
      }, {
        key: "pause",
        value: function pause(onPause) {
          var _this2 = this;
  
          this.readyState = "pausing";
  
          var pause = function pause() {
            _this2.readyState = "paused";
            onPause();
          };
  
          if (this.polling || !this.writable) {
            var total = 0;
  
            if (this.polling) {
              total++;
              this.once("pollComplete", function () {
                --total || pause();
              });
            }
  
            if (!this.writable) {
              total++;
              this.once("drain", function () {
                --total || pause();
              });
            }
          } else {
            pause();
          }
        }
        /**
         * Starts polling cycle.
         *
         * @api public
         */
  
      }, {
        key: "poll",
        value: function poll() {
          this.polling = true;
          this.doPoll();
          this.emitReserved("poll");
        }
        /**
         * Overloads onData to detect payloads.
         *
         * @api private
         */
  
      }, {
        key: "onData",
        value: function onData(data) {
          var _this3 = this;
  
          var callback = function callback(packet) {
            // if its the first message we consider the transport open
            if ("opening" === _this3.readyState && packet.type === "open") {
              _this3.onOpen();
            } // if its a close packet, we close the ongoing requests
  
  
            if ("close" === packet.type) {
              _this3.onClose({
                description: "transport closed by the server"
              });
  
              return false;
            } // otherwise bypass onData and handle the message
  
  
            _this3.onPacket(packet);
          }; // decode payload
  
  
          decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing
  
          if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
  
            if ("open" === this.readyState) {
              this.poll();
            }
          }
        }
        /**
         * For polling, send a close packet.
         *
         * @api private
         */
  
      }, {
        key: "doClose",
        value: function doClose() {
          var _this4 = this;
  
          var close = function close() {
            _this4.write([{
              type: "close"
            }]);
          };
  
          if ("open" === this.readyState) {
            close();
          } else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
          }
        }
        /**
         * Writes a packets payload.
         *
         * @param {Array} data packets
         * @param {Function} drain callback
         * @api private
         */
  
      }, {
        key: "write",
        value: function write(packets) {
          var _this5 = this;
  
          this.writable = false;
          encodePayload(packets, function (data) {
            _this5.doWrite(data, function () {
              _this5.writable = true;
  
              _this5.emitReserved("drain");
            });
          });
        }
        /**
         * Generates uri for connection.
         *
         * @api private
         */
  
      }, {
        key: "uri",
        value: function uri() {
          var query = this.query || {};
          var schema = this.opts.secure ? "https" : "http";
          var port = ""; // cache busting is forced
  
          if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
          }
  
          if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
          } // avoid port if default for schema
  
  
          if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
            port = ":" + this.opts.port;
          }
  
          var encodedQuery = encode(query);
          var ipv6 = this.opts.hostname.indexOf(":") !== -1;
          return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
        }
        /**
         * Creates a request.
         *
         * @param {String} method
         * @api private
         */
  
      }, {
        key: "request",
        value: function request() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
          _extends(opts, {
            xd: this.xd,
            xs: this.xs
          }, this.opts);
  
          return new Request(this.uri(), opts);
        }
        /**
         * Sends data.
         *
         * @param {String} data to send.
         * @param {Function} called upon flush.
         * @api private
         */
  
      }, {
        key: "doWrite",
        value: function doWrite(data, fn) {
          var _this6 = this;
  
          var req = this.request({
            method: "POST",
            data: data
          });
          req.on("success", fn);
          req.on("error", function (xhrStatus, context) {
            _this6.onError("xhr post error", xhrStatus, context);
          });
        }
        /**
         * Starts a poll cycle.
         *
         * @api private
         */
  
      }, {
        key: "doPoll",
        value: function doPoll() {
          var _this7 = this;
  
          var req = this.request();
          req.on("data", this.onData.bind(this));
          req.on("error", function (xhrStatus, context) {
            _this7.onError("xhr poll error", xhrStatus, context);
          });
          this.pollXhr = req;
        }
      }]);
  
      return Polling;
    }(Transport);
    var Request = /*#__PURE__*/function (_Emitter) {
      _inherits(Request, _Emitter);
  
      var _super2 = _createSuper(Request);
  
      /**
       * Request constructor
       *
       * @param {Object} options
       * @api public
       */
      function Request(uri, opts) {
        var _this8;
  
        _classCallCheck(this, Request);
  
        _this8 = _super2.call(this);
        installTimerFunctions(_assertThisInitialized(_this8), opts);
        _this8.opts = opts;
        _this8.method = opts.method || "GET";
        _this8.uri = uri;
        _this8.async = false !== opts.async;
        _this8.data = undefined !== opts.data ? opts.data : null;
  
        _this8.create();
  
        return _this8;
      }
      /**
       * Creates the XHR object and sends the request.
       *
       * @api private
       */
  
  
      _createClass(Request, [{
        key: "create",
        value: function create() {
          var _this9 = this;
  
          var opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          opts.xdomain = !!this.opts.xd;
          opts.xscheme = !!this.opts.xs;
          var xhr = this.xhr = new XMLHttpRequest$1(opts);
  
          try {
            xhr.open(this.method, this.uri, this.async);
  
            try {
              if (this.opts.extraHeaders) {
                xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
  
                for (var i in this.opts.extraHeaders) {
                  if (this.opts.extraHeaders.hasOwnProperty(i)) {
                    xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                  }
                }
              }
            } catch (e) {}
  
            if ("POST" === this.method) {
              try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (e) {}
            }
  
            try {
              xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {} // ie6 check
  
  
            if ("withCredentials" in xhr) {
              xhr.withCredentials = this.opts.withCredentials;
            }
  
            if (this.opts.requestTimeout) {
              xhr.timeout = this.opts.requestTimeout;
            }
  
            xhr.onreadystatechange = function () {
              if (4 !== xhr.readyState) return;
  
              if (200 === xhr.status || 1223 === xhr.status) {
                _this9.onLoad();
              } else {
                // make sure the `error` event handler that's user-set
                // does not throw in the same tick and gets caught here
                _this9.setTimeoutFn(function () {
                  _this9.onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
              }
            };
  
            xhr.send(this.data);
          } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(function () {
              _this9.onError(e);
            }, 0);
            return;
          }
  
          if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
          }
        }
        /**
         * Called upon error.
         *
         * @api private
         */
  
      }, {
        key: "onError",
        value: function onError(err) {
          this.emitReserved("error", err, this.xhr);
          this.cleanup(true);
        }
        /**
         * Cleans up house.
         *
         * @api private
         */
  
      }, {
        key: "cleanup",
        value: function cleanup(fromError) {
          if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
          }
  
          this.xhr.onreadystatechange = empty;
  
          if (fromError) {
            try {
              this.xhr.abort();
            } catch (e) {}
          }
  
          if (typeof document !== "undefined") {
            delete Request.requests[this.index];
          }
  
          this.xhr = null;
        }
        /**
         * Called upon load.
         *
         * @api private
         */
  
      }, {
        key: "onLoad",
        value: function onLoad() {
          var data = this.xhr.responseText;
  
          if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
          }
        }
        /**
         * Aborts the request.
         *
         * @api public
         */
  
      }, {
        key: "abort",
        value: function abort() {
          this.cleanup();
        }
      }]);
  
      return Request;
    }(Emitter);
    Request.requestsCount = 0;
    Request.requests = {};
    /**
     * Aborts pending requests when unloading the window. This is needed to prevent
     * memory leaks (e.g. when using IE) and to ensure that no spurious error is
     * emitted.
     */
  
    if (typeof document !== "undefined") {
      // @ts-ignore
      if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
      } else if (typeof addEventListener === "function") {
        var terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
      }
    }
  
    function unloadHandler() {
      for (var i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
          Request.requests[i].abort();
        }
      }
    }
  
    var nextTick = function () {
      var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  
      if (isPromiseAvailable) {
        return function (cb) {
          return Promise.resolve().then(cb);
        };
      } else {
        return function (cb, setTimeoutFn) {
          return setTimeoutFn(cb, 0);
        };
      }
    }();
    var WebSocket = globalThis.WebSocket || globalThis.MozWebSocket;
    var usingBrowserWebSocket = true;
    var defaultBinaryType = "arraybuffer";
  
    var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
    var WS = /*#__PURE__*/function (_Transport) {
      _inherits(WS, _Transport);
  
      var _super = _createSuper(WS);
  
      /**
       * WebSocket transport constructor.
       *
       * @api {Object} connection options
       * @api public
       */
      function WS(opts) {
        var _this;
  
        _classCallCheck(this, WS);
  
        _this = _super.call(this, opts);
        _this.supportsBinary = !opts.forceBase64;
        return _this;
      }
      /**
       * Transport name.
       *
       * @api public
       */
  
  
      _createClass(WS, [{
        key: "name",
        get: function get() {
          return "websocket";
        }
        /**
         * Opens socket.
         *
         * @api private
         */
  
      }, {
        key: "doOpen",
        value: function doOpen() {
          if (!this.check()) {
            // let probe timeout
            return;
          }
  
          var uri = this.uri();
          var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed
  
          var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
  
          if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
          }
  
          try {
            this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
          } catch (err) {
            return this.emitReserved("error", err);
          }
  
          this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
          this.addEventListeners();
        }
        /**
         * Adds event listeners to the socket
         *
         * @api private
         */
  
      }, {
        key: "addEventListeners",
        value: function addEventListeners() {
          var _this2 = this;
  
          this.ws.onopen = function () {
            if (_this2.opts.autoUnref) {
              _this2.ws._socket.unref();
            }
  
            _this2.onOpen();
          };
  
          this.ws.onclose = function (closeEvent) {
            return _this2.onClose({
              description: "websocket connection closed",
              context: closeEvent
            });
          };
  
          this.ws.onmessage = function (ev) {
            return _this2.onData(ev.data);
          };
  
          this.ws.onerror = function (e) {
            return _this2.onError("websocket error", e);
          };
        }
        /**
         * Writes data to socket.
         *
         * @param {Array} array of packets.
         * @api private
         */
  
      }, {
        key: "write",
        value: function write(packets) {
          var _this3 = this;
  
          this.writable = false; // encodePacket efficient as it uses WS framing
          // no need for encodePayload
  
          var _loop = function _loop(i) {
            var packet = packets[i];
            var lastPacket = i === packets.length - 1;
            encodePacket(packet, _this3.supportsBinary, function (data) {
              // always create a new object (GH-437)
              var opts = {};
              // have a chance of informing us about it yet, in that case send will
              // throw an error
  
  
              try {
                if (usingBrowserWebSocket) {
                  // TypeError is thrown when passing the second argument on Safari
                  _this3.ws.send(data);
                }
              } catch (e) {}
  
              if (lastPacket) {
                // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                nextTick(function () {
                  _this3.writable = true;
  
                  _this3.emitReserved("drain");
                }, _this3.setTimeoutFn);
              }
            });
          };
  
          for (var i = 0; i < packets.length; i++) {
            _loop(i);
          }
        }
        /**
         * Closes socket.
         *
         * @api private
         */
  
      }, {
        key: "doClose",
        value: function doClose() {
          if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
          }
        }
        /**
         * Generates uri for connection.
         *
         * @api private
         */
  
      }, {
        key: "uri",
        value: function uri() {
          var query = this.query || {};
          var schema = this.opts.secure ? "wss" : "ws";
          var port = ""; // avoid port if default for schema
  
          if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
            port = ":" + this.opts.port;
          } // append timestamp to URI
  
  
          if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
          } // communicate binary support capabilities
  
  
          if (!this.supportsBinary) {
            query.b64 = 1;
          }
  
          var encodedQuery = encode(query);
          var ipv6 = this.opts.hostname.indexOf(":") !== -1;
          return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
        }
        /**
         * Feature detection for WebSocket.
         *
         * @return {Boolean} whether this transport is available.
         * @api public
         */
  
      }, {
        key: "check",
        value: function check() {
          return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
        }
      }]);
  
      return WS;
    }(Transport);
  
    var transports = {
      websocket: WS,
      polling: Polling
    };
  
    // imported from https://github.com/galkn/parseuri
  
    /**
     * Parses an URI
     *
     * @author Steven Levithan <stevenlevithan.com> (MIT license)
     * @api private
     */
    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
    function parse(str) {
      var src = str,
          b = str.indexOf('['),
          e = str.indexOf(']');
  
      if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
      }
  
      var m = re.exec(str || ''),
          uri = {},
          i = 14;
  
      while (i--) {
        uri[parts[i]] = m[i] || '';
      }
  
      if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
      }
  
      uri.pathNames = pathNames(uri, uri['path']);
      uri.queryKey = queryKey(uri, uri['query']);
      return uri;
    }
  
    function pathNames(obj, path) {
      var regx = /\/{2,9}/g,
          names = path.replace(regx, "/").split("/");
  
      if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
      }
  
      if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
      }
  
      return names;
    }
  
    function queryKey(uri, query) {
      var data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
          data[$1] = $2;
        }
      });
      return data;
    }
  
    var Socket$1 = /*#__PURE__*/function (_Emitter) {
      _inherits(Socket, _Emitter);
  
      var _super = _createSuper(Socket);
  
      /**
       * Socket constructor.
       *
       * @param {String|Object} uri or options
       * @param {Object} opts - options
       * @api public
       */
      function Socket(uri) {
        var _this;
  
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        _classCallCheck(this, Socket);
  
        _this = _super.call(this);
  
        if (uri && "object" === _typeof(uri)) {
          opts = uri;
          uri = null;
        }
  
        if (uri) {
          uri = parse(uri);
          opts.hostname = uri.host;
          opts.secure = uri.protocol === "https" || uri.protocol === "wss";
          opts.port = uri.port;
          if (uri.query) opts.query = uri.query;
        } else if (opts.host) {
          opts.hostname = parse(opts.host).host;
        }
  
        installTimerFunctions(_assertThisInitialized(_this), opts);
        _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
  
        if (opts.hostname && !opts.port) {
          // if no port is specified manually, use the protocol default
          opts.port = _this.secure ? "443" : "80";
        }
  
        _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
        _this.transports = opts.transports || ["polling", "websocket"];
        _this.readyState = "";
        _this.writeBuffer = [];
        _this.prevBufferLen = 0;
        _this.opts = _extends({
          path: "/engine.io",
          agent: false,
          withCredentials: false,
          upgrade: true,
          timestampParam: "t",
          rememberUpgrade: false,
          rejectUnauthorized: true,
          perMessageDeflate: {
            threshold: 1024
          },
          transportOptions: {},
          closeOnBeforeunload: true
        }, opts);
        _this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";
  
        if (typeof _this.opts.query === "string") {
          _this.opts.query = decode(_this.opts.query);
        } // set on handshake
  
  
        _this.id = null;
        _this.upgrades = null;
        _this.pingInterval = null;
        _this.pingTimeout = null; // set on heartbeat
  
        _this.pingTimeoutTimer = null;
  
        if (typeof addEventListener === "function") {
          if (_this.opts.closeOnBeforeunload) {
            // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
            // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
            // closed/reloaded)
            addEventListener("beforeunload", function () {
              if (_this.transport) {
                // silently close the transport
                _this.transport.removeAllListeners();
  
                _this.transport.close();
              }
            }, false);
          }
  
          if (_this.hostname !== "localhost") {
            _this.offlineEventListener = function () {
              _this.onClose("transport close", {
                description: "network connection lost"
              });
            };
  
            addEventListener("offline", _this.offlineEventListener, false);
          }
        }
  
        _this.open();
  
        return _this;
      }
      /**
       * Creates transport of the given type.
       *
       * @param {String} transport name
       * @return {Transport}
       * @api private
       */
  
  
      _createClass(Socket, [{
        key: "createTransport",
        value: function createTransport(name) {
          var query = _extends({}, this.opts.query); // append engine.io protocol identifier
  
  
          query.EIO = protocol$1; // transport name
  
          query.transport = name; // session id if we already have one
  
          if (this.id) query.sid = this.id;
  
          var opts = _extends({}, this.opts.transportOptions[name], this.opts, {
            query: query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
          });
  
          return new transports[name](opts);
        }
        /**
         * Initializes transport to use and starts probe.
         *
         * @api private
         */
  
      }, {
        key: "open",
        value: function open() {
          var _this2 = this;
  
          var transport;
  
          if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
          } else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(function () {
              _this2.emitReserved("error", "No transports available");
            }, 0);
            return;
          } else {
            transport = this.transports[0];
          }
  
          this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)
  
          try {
            transport = this.createTransport(transport);
          } catch (e) {
            this.transports.shift();
            this.open();
            return;
          }
  
          transport.open();
          this.setTransport(transport);
        }
        /**
         * Sets the current transport. Disables the existing one (if any).
         *
         * @api private
         */
  
      }, {
        key: "setTransport",
        value: function setTransport(transport) {
          var _this3 = this;
  
          if (this.transport) {
            this.transport.removeAllListeners();
          } // set up transport
  
  
          this.transport = transport; // set up transport listeners
  
          transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function (reason) {
            return _this3.onClose("transport close", reason);
          });
        }
        /**
         * Probes a transport.
         *
         * @param {String} transport name
         * @api private
         */
  
      }, {
        key: "probe",
        value: function probe(name) {
          var _this4 = this;
  
          var transport = this.createTransport(name);
          var failed = false;
          Socket.priorWebsocketSuccess = false;
  
          var onTransportOpen = function onTransportOpen() {
            if (failed) return;
            transport.send([{
              type: "ping",
              data: "probe"
            }]);
            transport.once("packet", function (msg) {
              if (failed) return;
  
              if ("pong" === msg.type && "probe" === msg.data) {
                _this4.upgrading = true;
  
                _this4.emitReserved("upgrading", transport);
  
                if (!transport) return;
                Socket.priorWebsocketSuccess = "websocket" === transport.name;
  
                _this4.transport.pause(function () {
                  if (failed) return;
                  if ("closed" === _this4.readyState) return;
                  cleanup();
  
                  _this4.setTransport(transport);
  
                  transport.send([{
                    type: "upgrade"
                  }]);
  
                  _this4.emitReserved("upgrade", transport);
  
                  transport = null;
                  _this4.upgrading = false;
  
                  _this4.flush();
                });
              } else {
                var err = new Error("probe error"); // @ts-ignore
  
                err.transport = transport.name;
  
                _this4.emitReserved("upgradeError", err);
              }
            });
          };
  
          function freezeTransport() {
            if (failed) return; // Any callback called by transport should be ignored since now
  
            failed = true;
            cleanup();
            transport.close();
            transport = null;
          } // Handle any error that happens while probing
  
  
          var onerror = function onerror(err) {
            var error = new Error("probe error: " + err); // @ts-ignore
  
            error.transport = transport.name;
            freezeTransport();
  
            _this4.emitReserved("upgradeError", error);
          };
  
          function onTransportClose() {
            onerror("transport closed");
          } // When the socket is closed while we're probing
  
  
          function onclose() {
            onerror("socket closed");
          } // When the socket is upgraded while we're probing
  
  
          function onupgrade(to) {
            if (transport && to.name !== transport.name) {
              freezeTransport();
            }
          } // Remove all listeners on the transport and on self
  
  
          var cleanup = function cleanup() {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
  
            _this4.off("close", onclose);
  
            _this4.off("upgrading", onupgrade);
          };
  
          transport.once("open", onTransportOpen);
          transport.once("error", onerror);
          transport.once("close", onTransportClose);
          this.once("close", onclose);
          this.once("upgrading", onupgrade);
          transport.open();
        }
        /**
         * Called when connection is deemed open.
         *
         * @api private
         */
  
      }, {
        key: "onOpen",
        value: function onOpen() {
          this.readyState = "open";
          Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
          this.emitReserved("open");
          this.flush(); // we check for `readyState` in case an `open`
          // listener already closed the socket
  
          if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
            var i = 0;
            var l = this.upgrades.length;
  
            for (; i < l; i++) {
              this.probe(this.upgrades[i]);
            }
          }
        }
        /**
         * Handles a packet.
         *
         * @api private
         */
  
      }, {
        key: "onPacket",
        value: function onPacket(packet) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet); // Socket is live - any packet counts
  
            this.emitReserved("heartbeat");
  
            switch (packet.type) {
              case "open":
                this.onHandshake(JSON.parse(packet.data));
                break;
  
              case "ping":
                this.resetPingTimeout();
                this.sendPacket("pong");
                this.emitReserved("ping");
                this.emitReserved("pong");
                break;
  
              case "error":
                var err = new Error("server error"); // @ts-ignore
  
                err.code = packet.data;
                this.onError(err);
                break;
  
              case "message":
                this.emitReserved("data", packet.data);
                this.emitReserved("message", packet.data);
                break;
            }
          }
        }
        /**
         * Called upon handshake completion.
         *
         * @param {Object} data - handshake obj
         * @api private
         */
  
      }, {
        key: "onHandshake",
        value: function onHandshake(data) {
          this.emitReserved("handshake", data);
          this.id = data.sid;
          this.transport.query.sid = data.sid;
          this.upgrades = this.filterUpgrades(data.upgrades);
          this.pingInterval = data.pingInterval;
          this.pingTimeout = data.pingTimeout;
          this.maxPayload = data.maxPayload;
          this.onOpen(); // In case open handler closes socket
  
          if ("closed" === this.readyState) return;
          this.resetPingTimeout();
        }
        /**
         * Sets and resets ping timeout timer based on server pings.
         *
         * @api private
         */
  
      }, {
        key: "resetPingTimeout",
        value: function resetPingTimeout() {
          var _this5 = this;
  
          this.clearTimeoutFn(this.pingTimeoutTimer);
          this.pingTimeoutTimer = this.setTimeoutFn(function () {
            _this5.onClose("ping timeout");
          }, this.pingInterval + this.pingTimeout);
  
          if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
          }
        }
        /**
         * Called on `drain` event
         *
         * @api private
         */
  
      }, {
        key: "onDrain",
        value: function onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
          // for example, when upgrading, upgrade packet is sent over,
          // and a nonzero prevBufferLen could cause problems on `drain`
  
          this.prevBufferLen = 0;
  
          if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
          } else {
            this.flush();
          }
        }
        /**
         * Flush write buffers.
         *
         * @api private
         */
  
      }, {
        key: "flush",
        value: function flush() {
          if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            var packets = this.getWritablePackets();
            this.transport.send(packets); // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
  
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
          }
        }
        /**
         * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
         * long-polling)
         *
         * @private
         */
  
      }, {
        key: "getWritablePackets",
        value: function getWritablePackets() {
          var shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
  
          if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
          }
  
          var payloadSize = 1; // first packet type
  
          for (var i = 0; i < this.writeBuffer.length; i++) {
            var data = this.writeBuffer[i].data;
  
            if (data) {
              payloadSize += byteLength(data);
            }
  
            if (i > 0 && payloadSize > this.maxPayload) {
              return this.writeBuffer.slice(0, i);
            }
  
            payloadSize += 2; // separator + packet type
          }
  
          return this.writeBuffer;
        }
        /**
         * Sends a message.
         *
         * @param {String} message.
         * @param {Function} callback function.
         * @param {Object} options.
         * @return {Socket} for chaining.
         * @api public
         */
  
      }, {
        key: "write",
        value: function write(msg, options, fn) {
          this.sendPacket("message", msg, options, fn);
          return this;
        }
      }, {
        key: "send",
        value: function send(msg, options, fn) {
          this.sendPacket("message", msg, options, fn);
          return this;
        }
        /**
         * Sends a packet.
         *
         * @param {String} packet type.
         * @param {String} data.
         * @param {Object} options.
         * @param {Function} callback function.
         * @api private
         */
  
      }, {
        key: "sendPacket",
        value: function sendPacket(type, data, options, fn) {
          if ("function" === typeof data) {
            fn = data;
            data = undefined;
          }
  
          if ("function" === typeof options) {
            fn = options;
            options = null;
          }
  
          if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
          }
  
          options = options || {};
          options.compress = false !== options.compress;
          var packet = {
            type: type,
            data: data,
            options: options
          };
          this.emitReserved("packetCreate", packet);
          this.writeBuffer.push(packet);
          if (fn) this.once("flush", fn);
          this.flush();
        }
        /**
         * Closes the connection.
         *
         * @api public
         */
  
      }, {
        key: "close",
        value: function close() {
          var _this6 = this;
  
          var close = function close() {
            _this6.onClose("forced close");
  
            _this6.transport.close();
          };
  
          var cleanupAndClose = function cleanupAndClose() {
            _this6.off("upgrade", cleanupAndClose);
  
            _this6.off("upgradeError", cleanupAndClose);
  
            close();
          };
  
          var waitForUpgrade = function waitForUpgrade() {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            _this6.once("upgrade", cleanupAndClose);
  
            _this6.once("upgradeError", cleanupAndClose);
          };
  
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
  
            if (this.writeBuffer.length) {
              this.once("drain", function () {
                if (_this6.upgrading) {
                  waitForUpgrade();
                } else {
                  close();
                }
              });
            } else if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          }
  
          return this;
        }
        /**
         * Called upon transport error
         *
         * @api private
         */
  
      }, {
        key: "onError",
        value: function onError(err) {
          Socket.priorWebsocketSuccess = false;
          this.emitReserved("error", err);
          this.onClose("transport error", err);
        }
        /**
         * Called upon transport close.
         *
         * @api private
         */
  
      }, {
        key: "onClose",
        value: function onClose(reason, description) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport
  
            this.transport.removeAllListeners("close"); // ensure transport won't stay open
  
            this.transport.close(); // ignore further transport communication
  
            this.transport.removeAllListeners();
  
            if (typeof removeEventListener === "function") {
              removeEventListener("offline", this.offlineEventListener, false);
            } // set ready state
  
  
            this.readyState = "closed"; // clear session id
  
            this.id = null; // emit close event
  
            this.emitReserved("close", reason, description); // clean buffers after, so users can still
            // grab the buffers on `close` event
  
            this.writeBuffer = [];
            this.prevBufferLen = 0;
          }
        }
        /**
         * Filters upgrades, returning only those matching client transports.
         *
         * @param {Array} server upgrades
         * @api private
         *
         */
  
      }, {
        key: "filterUpgrades",
        value: function filterUpgrades(upgrades) {
          var filteredUpgrades = [];
          var i = 0;
          var j = upgrades.length;
  
          for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
          }
  
          return filteredUpgrades;
        }
      }]);
  
      return Socket;
    }(Emitter);
    Socket$1.protocol = protocol$1;
  
    /**
     * URL parser.
     *
     * @param uri - url
     * @param path - the request path of the connection
     * @param loc - An object meant to mimic window.location.
     *        Defaults to window.location.
     * @public
     */
  
    function url(uri) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var loc = arguments.length > 2 ? arguments[2] : undefined;
      var obj = uri; // default to window.location
  
      loc = loc || typeof location !== "undefined" && location;
      if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support
  
      if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
          if ("/" === uri.charAt(1)) {
            uri = loc.protocol + uri;
          } else {
            uri = loc.host + uri;
          }
        }
  
        if (!/^(https?|wss?):\/\//.test(uri)) {
          if ("undefined" !== typeof loc) {
            uri = loc.protocol + "//" + uri;
          } else {
            uri = "https://" + uri;
          }
        } // parse
  
  
        obj = parse(uri);
      } // make sure we treat `localhost:80` and `localhost` equally
  
  
      if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
          obj.port = "80";
        } else if (/^(http|ws)s$/.test(obj.protocol)) {
          obj.port = "443";
        }
      }
  
      obj.path = obj.path || "/";
      var ipv6 = obj.host.indexOf(":") !== -1;
      var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id
  
      obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href
  
      obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
      return obj;
    }
  
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  
    var isView = function isView(obj) {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };
  
    var toString = Object.prototype.toString;
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
    var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
    /**
     * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
     *
     * @private
     */
  
    function isBinary(obj) {
      return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    function hasBinary(obj, toJSON) {
      if (!obj || _typeof(obj) !== "object") {
        return false;
      }
  
      if (Array.isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (hasBinary(obj[i])) {
            return true;
          }
        }
  
        return false;
      }
  
      if (isBinary(obj)) {
        return true;
      }
  
      if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
      }
  
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
          return true;
        }
      }
  
      return false;
    }
  
    /**
     * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
     *
     * @param {Object} packet - socket.io event packet
     * @return {Object} with deconstructed packet and list of buffers
     * @public
     */
  
    function deconstructPacket(packet) {
      var buffers = [];
      var packetData = packet.data;
      var pack = packet;
      pack.data = _deconstructPacket(packetData, buffers);
      pack.attachments = buffers.length; // number of binary 'attachments'
  
      return {
        packet: pack,
        buffers: buffers
      };
    }
  
    function _deconstructPacket(data, buffers) {
      if (!data) return data;
  
      if (isBinary(data)) {
        var placeholder = {
          _placeholder: true,
          num: buffers.length
        };
        buffers.push(data);
        return placeholder;
      } else if (Array.isArray(data)) {
        var newData = new Array(data.length);
  
        for (var i = 0; i < data.length; i++) {
          newData[i] = _deconstructPacket(data[i], buffers);
        }
  
        return newData;
      } else if (_typeof(data) === "object" && !(data instanceof Date)) {
        var _newData = {};
  
        for (var key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            _newData[key] = _deconstructPacket(data[key], buffers);
          }
        }
  
        return _newData;
      }
  
      return data;
    }
    /**
     * Reconstructs a binary packet from its placeholder packet and buffers
     *
     * @param {Object} packet - event packet with placeholders
     * @param {Array} buffers - binary buffers to put in placeholder positions
     * @return {Object} reconstructed packet
     * @public
     */
  
  
    function reconstructPacket(packet, buffers) {
      packet.data = _reconstructPacket(packet.data, buffers);
      packet.attachments = undefined; // no longer useful
  
      return packet;
    }
  
    function _reconstructPacket(data, buffers) {
      if (!data) return data;
  
      if (data && data._placeholder) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
      } else if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          data[i] = _reconstructPacket(data[i], buffers);
        }
      } else if (_typeof(data) === "object") {
        for (var key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            data[key] = _reconstructPacket(data[key], buffers);
          }
        }
      }
  
      return data;
    }
  
    /**
     * Protocol version.
     *
     * @public
     */
  
    var protocol = 5;
    var PacketType;
  
    (function (PacketType) {
      PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
      PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
      PacketType[PacketType["EVENT"] = 2] = "EVENT";
      PacketType[PacketType["ACK"] = 3] = "ACK";
      PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
      PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
      PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType || (PacketType = {}));
    /**
     * A socket.io Encoder instance
     */
  
  
    var Encoder = /*#__PURE__*/function () {
      /**
       * Encoder constructor
       *
       * @param {function} replacer - custom replacer to pass down to JSON.parse
       */
      function Encoder(replacer) {
        _classCallCheck(this, Encoder);
  
        this.replacer = replacer;
      }
      /**
       * Encode a packet as a single string if non-binary, or as a
       * buffer sequence, depending on packet type.
       *
       * @param {Object} obj - packet object
       */
  
  
      _createClass(Encoder, [{
        key: "encode",
        value: function encode(obj) {
          if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
              obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
              return this.encodeAsBinary(obj);
            }
          }
  
          return [this.encodeAsString(obj)];
        }
        /**
         * Encode packet as string.
         */
  
      }, {
        key: "encodeAsString",
        value: function encodeAsString(obj) {
          // first is type
          var str = "" + obj.type; // attachments if we have them
  
          if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
          } // if we have a namespace other than `/`
          // we append it followed by a comma `,`
  
  
          if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
          } // immediately followed by the id
  
  
          if (null != obj.id) {
            str += obj.id;
          } // json data
  
  
          if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
          }
  
          return str;
        }
        /**
         * Encode packet as 'buffer sequence' by removing blobs, and
         * deconstructing packet into object with placeholders and
         * a list of buffers.
         */
  
      }, {
        key: "encodeAsBinary",
        value: function encodeAsBinary(obj) {
          var deconstruction = deconstructPacket(obj);
          var pack = this.encodeAsString(deconstruction.packet);
          var buffers = deconstruction.buffers;
          buffers.unshift(pack); // add packet info to beginning of data list
  
          return buffers; // write all the buffers
        }
      }]);
  
      return Encoder;
    }();
    /**
     * A socket.io Decoder instance
     *
     * @return {Object} decoder
     */
  
    var Decoder = /*#__PURE__*/function (_Emitter) {
      _inherits(Decoder, _Emitter);
  
      var _super = _createSuper(Decoder);
  
      /**
       * Decoder constructor
       *
       * @param {function} reviver - custom reviver to pass down to JSON.stringify
       */
      function Decoder(reviver) {
        var _this;
  
        _classCallCheck(this, Decoder);
  
        _this = _super.call(this);
        _this.reviver = reviver;
        return _this;
      }
      /**
       * Decodes an encoded packet string into packet JSON.
       *
       * @param {String} obj - encoded packet
       */
  
  
      _createClass(Decoder, [{
        key: "add",
        value: function add(obj) {
          var packet;
  
          if (typeof obj === "string") {
            packet = this.decodeString(obj);
  
            if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
              // binary packet's json
              this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow
  
              if (packet.attachments === 0) {
                _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
              }
            } else {
              // non-binary full packet
              _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
            }
          } else if (isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
              throw new Error("got binary data when not reconstructing a packet");
            } else {
              packet = this.reconstructor.takeBinaryData(obj);
  
              if (packet) {
                // received final buffer
                this.reconstructor = null;
  
                _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
              }
            }
          } else {
            throw new Error("Unknown type: " + obj);
          }
        }
        /**
         * Decode a packet String (JSON data)
         *
         * @param {String} str
         * @return {Object} packet
         */
  
      }, {
        key: "decodeString",
        value: function decodeString(str) {
          var i = 0; // look up type
  
          var p = {
            type: Number(str.charAt(0))
          };
  
          if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
          } // look up attachments if type binary
  
  
          if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            var start = i + 1;
  
            while (str.charAt(++i) !== "-" && i != str.length) {}
  
            var buf = str.substring(start, i);
  
            if (buf != Number(buf) || str.charAt(i) !== "-") {
              throw new Error("Illegal attachments");
            }
  
            p.attachments = Number(buf);
          } // look up namespace (if any)
  
  
          if ("/" === str.charAt(i + 1)) {
            var _start = i + 1;
  
            while (++i) {
              var c = str.charAt(i);
              if ("," === c) break;
              if (i === str.length) break;
            }
  
            p.nsp = str.substring(_start, i);
          } else {
            p.nsp = "/";
          } // look up id
  
  
          var next = str.charAt(i + 1);
  
          if ("" !== next && Number(next) == next) {
            var _start2 = i + 1;
  
            while (++i) {
              var _c = str.charAt(i);
  
              if (null == _c || Number(_c) != _c) {
                --i;
                break;
              }
  
              if (i === str.length) break;
            }
  
            p.id = Number(str.substring(_start2, i + 1));
          } // look up json data
  
  
          if (str.charAt(++i)) {
            var payload = this.tryParse(str.substr(i));
  
            if (Decoder.isPayloadValid(p.type, payload)) {
              p.data = payload;
            } else {
              throw new Error("invalid payload");
            }
          }
  
          return p;
        }
      }, {
        key: "tryParse",
        value: function tryParse(str) {
          try {
            return JSON.parse(str, this.reviver);
          } catch (e) {
            return false;
          }
        }
      }, {
        key: "destroy",
        value:
        /**
         * Deallocates a parser's resources
         */
        function destroy() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
          }
        }
      }], [{
        key: "isPayloadValid",
        value: function isPayloadValid(type, payload) {
          switch (type) {
            case PacketType.CONNECT:
              return _typeof(payload) === "object";
  
            case PacketType.DISCONNECT:
              return payload === undefined;
  
            case PacketType.CONNECT_ERROR:
              return typeof payload === "string" || _typeof(payload) === "object";
  
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
              return Array.isArray(payload) && payload.length > 0;
  
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
              return Array.isArray(payload);
          }
        }
      }]);
  
      return Decoder;
    }(Emitter);
    /**
     * A manager of a binary event's 'buffer sequence'. Should
     * be constructed whenever a packet of type BINARY_EVENT is
     * decoded.
     *
     * @param {Object} packet
     * @return {BinaryReconstructor} initialized reconstructor
     */
  
    var BinaryReconstructor = /*#__PURE__*/function () {
      function BinaryReconstructor(packet) {
        _classCallCheck(this, BinaryReconstructor);
  
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
      }
      /**
       * Method to be called when binary data received from connection
       * after a BINARY_EVENT packet.
       *
       * @param {Buffer | ArrayBuffer} binData - the raw binary data received
       * @return {null | Object} returns null if more binary data is expected or
       *   a reconstructed packet object if all buffers have been received.
       */
  
  
      _createClass(BinaryReconstructor, [{
        key: "takeBinaryData",
        value: function takeBinaryData(binData) {
          this.buffers.push(binData);
  
          if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            var packet = reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
          }
  
          return null;
        }
        /**
         * Cleans up binary packet reconstruction variables.
         */
  
      }, {
        key: "finishedReconstruction",
        value: function finishedReconstruction() {
          this.reconPack = null;
          this.buffers = [];
        }
      }]);
  
      return BinaryReconstructor;
    }();
  
    var parser = /*#__PURE__*/Object.freeze({
      __proto__: null,
      protocol: protocol,
      get PacketType () { return PacketType; },
      Encoder: Encoder,
      Decoder: Decoder
    });
  
    function on(obj, ev, fn) {
      obj.on(ev, fn);
      return function subDestroy() {
        obj.off(ev, fn);
      };
    }
  
    /**
     * Internal events.
     * These events can't be emitted by the user.
     */
  
    var RESERVED_EVENTS = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
      newListener: 1,
      removeListener: 1
    });
    var Socket = /*#__PURE__*/function (_Emitter) {
      _inherits(Socket, _Emitter);
  
      var _super = _createSuper(Socket);
  
      /**
       * `Socket` constructor.
       *
       * @public
       */
      function Socket(io, nsp, opts) {
        var _this;
  
        _classCallCheck(this, Socket);
  
        _this = _super.call(this);
        _this.connected = false;
        _this.receiveBuffer = [];
        _this.sendBuffer = [];
        _this.ids = 0;
        _this.acks = {};
        _this.flags = {};
        _this.io = io;
        _this.nsp = nsp;
  
        if (opts && opts.auth) {
          _this.auth = opts.auth;
        }
  
        if (_this.io._autoConnect) _this.open();
        return _this;
      }
      /**
       * Whether the socket is currently disconnected
       */
  
  
      _createClass(Socket, [{
        key: "disconnected",
        get: function get() {
          return !this.connected;
        }
        /**
         * Subscribe to open, close and packet events
         *
         * @private
         */
  
      }, {
        key: "subEvents",
        value: function subEvents() {
          if (this.subs) return;
          var io = this.io;
          this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
        }
        /**
         * Whether the Socket will try to reconnect when its Manager connects or reconnects
         */
  
      }, {
        key: "active",
        get: function get() {
          return !!this.subs;
        }
        /**
         * "Opens" the socket.
         *
         * @public
         */
  
      }, {
        key: "connect",
        value: function connect() {
          if (this.connected) return this;
          this.subEvents();
          if (!this.io["_reconnecting"]) this.io.open(); // ensure open
  
          if ("open" === this.io._readyState) this.onopen();
          return this;
        }
        /**
         * Alias for connect()
         */
  
      }, {
        key: "open",
        value: function open() {
          return this.connect();
        }
        /**
         * Sends a `message` event.
         *
         * @return self
         * @public
         */
  
      }, {
        key: "send",
        value: function send() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
  
          args.unshift("message");
          this.emit.apply(this, args);
          return this;
        }
        /**
         * Override `emit`.
         * If the event is in `events`, it's emitted normally.
         *
         * @return self
         * @public
         */
  
      }, {
        key: "emit",
        value: function emit(ev) {
          if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev + '" is a reserved event name');
          }
  
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
  
          args.unshift(ev);
          var packet = {
            type: PacketType.EVENT,
            data: args
          };
          packet.options = {};
          packet.options.compress = this.flags.compress !== false; // event ack callback
  
          if ("function" === typeof args[args.length - 1]) {
            var id = this.ids++;
            var ack = args.pop();
  
            this._registerAckCallback(id, ack);
  
            packet.id = id;
          }
  
          var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);
  
          if (discardPacket) ; else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
          } else {
            this.sendBuffer.push(packet);
          }
  
          this.flags = {};
          return this;
        }
        /**
         * @private
         */
  
      }, {
        key: "_registerAckCallback",
        value: function _registerAckCallback(id, ack) {
          var _this2 = this;
  
          var timeout = this.flags.timeout;
  
          if (timeout === undefined) {
            this.acks[id] = ack;
            return;
          } // @ts-ignore
  
  
          var timer = this.io.setTimeoutFn(function () {
            delete _this2.acks[id];
  
            for (var i = 0; i < _this2.sendBuffer.length; i++) {
              if (_this2.sendBuffer[i].id === id) {
                _this2.sendBuffer.splice(i, 1);
              }
            }
  
            ack.call(_this2, new Error("operation has timed out"));
          }, timeout);
  
          this.acks[id] = function () {
            // @ts-ignore
            _this2.io.clearTimeoutFn(timer);
  
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
  
            ack.apply(_this2, [null].concat(args));
          };
        }
        /**
         * Sends a packet.
         *
         * @param packet
         * @private
         */
  
      }, {
        key: "packet",
        value: function packet(_packet) {
          _packet.nsp = this.nsp;
  
          this.io._packet(_packet);
        }
        /**
         * Called upon engine `open`.
         *
         * @private
         */
  
      }, {
        key: "onopen",
        value: function onopen() {
          var _this3 = this;
  
          if (typeof this.auth == "function") {
            this.auth(function (data) {
              _this3.packet({
                type: PacketType.CONNECT,
                data: data
              });
            });
          } else {
            this.packet({
              type: PacketType.CONNECT,
              data: this.auth
            });
          }
        }
        /**
         * Called upon engine or manager `error`.
         *
         * @param err
         * @private
         */
  
      }, {
        key: "onerror",
        value: function onerror(err) {
          if (!this.connected) {
            this.emitReserved("connect_error", err);
          }
        }
        /**
         * Called upon engine `close`.
         *
         * @param reason
         * @param description
         * @private
         */
  
      }, {
        key: "onclose",
        value: function onclose(reason, description) {
          this.connected = false;
          delete this.id;
          this.emitReserved("disconnect", reason, description);
        }
        /**
         * Called with socket packet.
         *
         * @param packet
         * @private
         */
  
      }, {
        key: "onpacket",
        value: function onpacket(packet) {
          var sameNamespace = packet.nsp === this.nsp;
          if (!sameNamespace) return;
  
          switch (packet.type) {
            case PacketType.CONNECT:
              if (packet.data && packet.data.sid) {
                var id = packet.data.sid;
                this.onconnect(id);
              } else {
                this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
              }
  
              break;
  
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
              this.onevent(packet);
              break;
  
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
              this.onack(packet);
              break;
  
            case PacketType.DISCONNECT:
              this.ondisconnect();
              break;
  
            case PacketType.CONNECT_ERROR:
              this.destroy();
              var err = new Error(packet.data.message); // @ts-ignore
  
              err.data = packet.data.data;
              this.emitReserved("connect_error", err);
              break;
          }
        }
        /**
         * Called upon a server event.
         *
         * @param packet
         * @private
         */
  
      }, {
        key: "onevent",
        value: function onevent(packet) {
          var args = packet.data || [];
  
          if (null != packet.id) {
            args.push(this.ack(packet.id));
          }
  
          if (this.connected) {
            this.emitEvent(args);
          } else {
            this.receiveBuffer.push(Object.freeze(args));
          }
        }
      }, {
        key: "emitEvent",
        value: function emitEvent(args) {
          if (this._anyListeners && this._anyListeners.length) {
            var listeners = this._anyListeners.slice();
  
            var _iterator = _createForOfIteratorHelper(listeners),
                _step;
  
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var listener = _step.value;
                listener.apply(this, args);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
  
          _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
        }
        /**
         * Produces an ack callback to emit with an event.
         *
         * @private
         */
  
      }, {
        key: "ack",
        value: function ack(id) {
          var self = this;
          var sent = false;
          return function () {
            // prevent double callbacks
            if (sent) return;
            sent = true;
  
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
  
            self.packet({
              type: PacketType.ACK,
              id: id,
              data: args
            });
          };
        }
        /**
         * Called upon a server acknowlegement.
         *
         * @param packet
         * @private
         */
  
      }, {
        key: "onack",
        value: function onack(packet) {
          var ack = this.acks[packet.id];
  
          if ("function" === typeof ack) {
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
          }
        }
        /**
         * Called upon server connect.
         *
         * @private
         */
  
      }, {
        key: "onconnect",
        value: function onconnect(id) {
          this.id = id;
          this.connected = true;
          this.emitBuffered();
          this.emitReserved("connect");
        }
        /**
         * Emit buffered events (received and emitted).
         *
         * @private
         */
  
      }, {
        key: "emitBuffered",
        value: function emitBuffered() {
          var _this4 = this;
  
          this.receiveBuffer.forEach(function (args) {
            return _this4.emitEvent(args);
          });
          this.receiveBuffer = [];
          this.sendBuffer.forEach(function (packet) {
            _this4.notifyOutgoingListeners(packet);
  
            _this4.packet(packet);
          });
          this.sendBuffer = [];
        }
        /**
         * Called upon server disconnect.
         *
         * @private
         */
  
      }, {
        key: "ondisconnect",
        value: function ondisconnect() {
          this.destroy();
          this.onclose("io server disconnect");
        }
        /**
         * Called upon forced client/server side disconnections,
         * this method ensures the manager stops tracking us and
         * that reconnections don't get triggered for this.
         *
         * @private
         */
  
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach(function (subDestroy) {
              return subDestroy();
            });
            this.subs = undefined;
          }
  
          this.io["_destroy"](this);
        }
        /**
         * Disconnects the socket manually.
         *
         * @return self
         * @public
         */
  
      }, {
        key: "disconnect",
        value: function disconnect() {
          if (this.connected) {
            this.packet({
              type: PacketType.DISCONNECT
            });
          } // remove socket from pool
  
  
          this.destroy();
  
          if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
          }
  
          return this;
        }
        /**
         * Alias for disconnect()
         *
         * @return self
         * @public
         */
  
      }, {
        key: "close",
        value: function close() {
          return this.disconnect();
        }
        /**
         * Sets the compress flag.
         *
         * @param compress - if `true`, compresses the sending data
         * @return self
         * @public
         */
  
      }, {
        key: "compress",
        value: function compress(_compress) {
          this.flags.compress = _compress;
          return this;
        }
        /**
         * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
         * ready to send messages.
         *
         * @returns self
         * @public
         */
  
      }, {
        key: "volatile",
        get: function get() {
          this.flags["volatile"] = true;
          return this;
        }
        /**
         * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
         * given number of milliseconds have elapsed without an acknowledgement from the server:
         *
         * ```
         * socket.timeout(5000).emit("my-event", (err) => {
         *   if (err) {
         *     // the server did not acknowledge the event in the given delay
         *   }
         * });
         * ```
         *
         * @returns self
         * @public
         */
  
      }, {
        key: "timeout",
        value: function timeout(_timeout) {
          this.flags.timeout = _timeout;
          return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback.
         *
         * @param listener
         * @public
         */
  
      }, {
        key: "onAny",
        value: function onAny(listener) {
          this._anyListeners = this._anyListeners || [];
  
          this._anyListeners.push(listener);
  
          return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback. The listener is added to the beginning of the listeners array.
         *
         * @param listener
         * @public
         */
  
      }, {
        key: "prependAny",
        value: function prependAny(listener) {
          this._anyListeners = this._anyListeners || [];
  
          this._anyListeners.unshift(listener);
  
          return this;
        }
        /**
         * Removes the listener that will be fired when any event is emitted.
         *
         * @param listener
         * @public
         */
  
      }, {
        key: "offAny",
        value: function offAny(listener) {
          if (!this._anyListeners) {
            return this;
          }
  
          if (listener) {
            var listeners = this._anyListeners;
  
            for (var i = 0; i < listeners.length; i++) {
              if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
              }
            }
          } else {
            this._anyListeners = [];
          }
  
          return this;
        }
        /**
         * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
         * e.g. to remove listeners.
         *
         * @public
         */
  
      }, {
        key: "listenersAny",
        value: function listenersAny() {
          return this._anyListeners || [];
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback.
         *
         * @param listener
         *
         * <pre><code>
         *
         * socket.onAnyOutgoing((event, ...args) => {
         *   console.log(event);
         * });
         *
         * </pre></code>
         *
         * @public
         */
  
      }, {
        key: "onAnyOutgoing",
        value: function onAnyOutgoing(listener) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
  
          this._anyOutgoingListeners.push(listener);
  
          return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback. The listener is added to the beginning of the listeners array.
         *
         * @param listener
         *
         * <pre><code>
         *
         * socket.prependAnyOutgoing((event, ...args) => {
         *   console.log(event);
         * });
         *
         * </pre></code>
         *
         * @public
         */
  
      }, {
        key: "prependAnyOutgoing",
        value: function prependAnyOutgoing(listener) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
  
          this._anyOutgoingListeners.unshift(listener);
  
          return this;
        }
        /**
         * Removes the listener that will be fired when any event is emitted.
         *
         * @param listener
         *
         * <pre><code>
         *
         * const handler = (event, ...args) => {
         *   console.log(event);
         * }
         *
         * socket.onAnyOutgoing(handler);
         *
         * // then later
         * socket.offAnyOutgoing(handler);
         *
         * </pre></code>
         *
         * @public
         */
  
      }, {
        key: "offAnyOutgoing",
        value: function offAnyOutgoing(listener) {
          if (!this._anyOutgoingListeners) {
            return this;
          }
  
          if (listener) {
            var listeners = this._anyOutgoingListeners;
  
            for (var i = 0; i < listeners.length; i++) {
              if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
              }
            }
          } else {
            this._anyOutgoingListeners = [];
          }
  
          return this;
        }
        /**
         * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
         * e.g. to remove listeners.
         *
         * @public
         */
  
      }, {
        key: "listenersAnyOutgoing",
        value: function listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        /**
         * Notify the listeners for each packet sent
         *
         * @param packet
         *
         * @private
         */
  
      }, {
        key: "notifyOutgoingListeners",
        value: function notifyOutgoingListeners(packet) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            var listeners = this._anyOutgoingListeners.slice();
  
            var _iterator2 = _createForOfIteratorHelper(listeners),
                _step2;
  
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var listener = _step2.value;
                listener.apply(this, packet.data);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      }]);
  
      return Socket;
    }(Emitter);
  
    /**
     * Initialize backoff timer with `opts`.
     *
     * - `min` initial timeout in milliseconds [100]
     * - `max` max timeout [10000]
     * - `jitter` [0]
     * - `factor` [2]
     *
     * @param {Object} opts
     * @api public
     */
    function Backoff(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 10000;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    /**
     * Return the backoff duration.
     *
     * @return {Number}
     * @api public
     */
  
    Backoff.prototype.duration = function () {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
  
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
      }
  
      return Math.min(ms, this.max) | 0;
    };
    /**
     * Reset the number of attempts.
     *
     * @api public
     */
  
  
    Backoff.prototype.reset = function () {
      this.attempts = 0;
    };
    /**
     * Set the minimum duration
     *
     * @api public
     */
  
  
    Backoff.prototype.setMin = function (min) {
      this.ms = min;
    };
    /**
     * Set the maximum duration
     *
     * @api public
     */
  
  
    Backoff.prototype.setMax = function (max) {
      this.max = max;
    };
    /**
     * Set the jitter
     *
     * @api public
     */
  
  
    Backoff.prototype.setJitter = function (jitter) {
      this.jitter = jitter;
    };
  
    var Manager = /*#__PURE__*/function (_Emitter) {
      _inherits(Manager, _Emitter);
  
      var _super = _createSuper(Manager);
  
      function Manager(uri, opts) {
        var _this;
  
        _classCallCheck(this, Manager);
  
        var _a;
  
        _this = _super.call(this);
        _this.nsps = {};
        _this.subs = [];
  
        if (uri && "object" === _typeof(uri)) {
          opts = uri;
          uri = undefined;
        }
  
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        _this.opts = opts;
        installTimerFunctions(_assertThisInitialized(_this), opts);
  
        _this.reconnection(opts.reconnection !== false);
  
        _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  
        _this.reconnectionDelay(opts.reconnectionDelay || 1000);
  
        _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  
        _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
  
        _this.backoff = new Backoff({
          min: _this.reconnectionDelay(),
          max: _this.reconnectionDelayMax(),
          jitter: _this.randomizationFactor()
        });
  
        _this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  
        _this._readyState = "closed";
        _this.uri = uri;
  
        var _parser = opts.parser || parser;
  
        _this.encoder = new _parser.Encoder();
        _this.decoder = new _parser.Decoder();
        _this._autoConnect = opts.autoConnect !== false;
        if (_this._autoConnect) _this.open();
        return _this;
      }
  
      _createClass(Manager, [{
        key: "reconnection",
        value: function reconnection(v) {
          if (!arguments.length) return this._reconnection;
          this._reconnection = !!v;
          return this;
        }
      }, {
        key: "reconnectionAttempts",
        value: function reconnectionAttempts(v) {
          if (v === undefined) return this._reconnectionAttempts;
          this._reconnectionAttempts = v;
          return this;
        }
      }, {
        key: "reconnectionDelay",
        value: function reconnectionDelay(v) {
          var _a;
  
          if (v === undefined) return this._reconnectionDelay;
          this._reconnectionDelay = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
          return this;
        }
      }, {
        key: "randomizationFactor",
        value: function randomizationFactor(v) {
          var _a;
  
          if (v === undefined) return this._randomizationFactor;
          this._randomizationFactor = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
          return this;
        }
      }, {
        key: "reconnectionDelayMax",
        value: function reconnectionDelayMax(v) {
          var _a;
  
          if (v === undefined) return this._reconnectionDelayMax;
          this._reconnectionDelayMax = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
          return this;
        }
      }, {
        key: "timeout",
        value: function timeout(v) {
          if (!arguments.length) return this._timeout;
          this._timeout = v;
          return this;
        }
        /**
         * Starts trying to reconnect if reconnection is enabled and we have not
         * started reconnecting yet
         *
         * @private
         */
  
      }, {
        key: "maybeReconnectOnOpen",
        value: function maybeReconnectOnOpen() {
          // Only try to reconnect if it's the first time we're connecting
          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
          }
        }
        /**
         * Sets the current transport `socket`.
         *
         * @param {Function} fn - optional, callback
         * @return self
         * @public
         */
  
      }, {
        key: "open",
        value: function open(fn) {
          var _this2 = this;
  
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new Socket$1(this.uri, this.opts);
          var socket = this.engine;
          var self = this;
          this._readyState = "opening";
          this.skipReconnect = false; // emit `open`
  
          var openSubDestroy = on(socket, "open", function () {
            self.onopen();
            fn && fn();
          }); // emit `error`
  
          var errorSub = on(socket, "error", function (err) {
            self.cleanup();
            self._readyState = "closed";
  
            _this2.emitReserved("error", err);
  
            if (fn) {
              fn(err);
            } else {
              // Only do this if there is no fn to handle the error
              self.maybeReconnectOnOpen();
            }
          });
  
          if (false !== this._timeout) {
            var timeout = this._timeout;
  
            if (timeout === 0) {
              openSubDestroy(); // prevents a race condition with the 'open' event
            } // set timer
  
  
            var timer = this.setTimeoutFn(function () {
              openSubDestroy();
              socket.close(); // @ts-ignore
  
              socket.emit("error", new Error("timeout"));
            }, timeout);
  
            if (this.opts.autoUnref) {
              timer.unref();
            }
  
            this.subs.push(function subDestroy() {
              clearTimeout(timer);
            });
          }
  
          this.subs.push(openSubDestroy);
          this.subs.push(errorSub);
          return this;
        }
        /**
         * Alias for open()
         *
         * @return self
         * @public
         */
  
      }, {
        key: "connect",
        value: function connect(fn) {
          return this.open(fn);
        }
        /**
         * Called upon transport open.
         *
         * @private
         */
  
      }, {
        key: "onopen",
        value: function onopen() {
          // clear old subs
          this.cleanup(); // mark as open
  
          this._readyState = "open";
          this.emitReserved("open"); // add new subs
  
          var socket = this.engine;
          this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        /**
         * Called upon a ping.
         *
         * @private
         */
  
      }, {
        key: "onping",
        value: function onping() {
          this.emitReserved("ping");
        }
        /**
         * Called with data.
         *
         * @private
         */
  
      }, {
        key: "ondata",
        value: function ondata(data) {
          this.decoder.add(data);
        }
        /**
         * Called when parser fully decodes a packet.
         *
         * @private
         */
  
      }, {
        key: "ondecoded",
        value: function ondecoded(packet) {
          this.emitReserved("packet", packet);
        }
        /**
         * Called upon socket error.
         *
         * @private
         */
  
      }, {
        key: "onerror",
        value: function onerror(err) {
          this.emitReserved("error", err);
        }
        /**
         * Creates a new socket for the given `nsp`.
         *
         * @return {Socket}
         * @public
         */
  
      }, {
        key: "socket",
        value: function socket(nsp, opts) {
          var socket = this.nsps[nsp];
  
          if (!socket) {
            socket = new Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
          }
  
          return socket;
        }
        /**
         * Called upon a socket close.
         *
         * @param socket
         * @private
         */
  
      }, {
        key: "_destroy",
        value: function _destroy(socket) {
          var nsps = Object.keys(this.nsps);
  
          for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
            var nsp = _nsps[_i];
            var _socket = this.nsps[nsp];
  
            if (_socket.active) {
              return;
            }
          }
  
          this._close();
        }
        /**
         * Writes a packet.
         *
         * @param packet
         * @private
         */
  
      }, {
        key: "_packet",
        value: function _packet(packet) {
          var encodedPackets = this.encoder.encode(packet);
  
          for (var i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
          }
        }
        /**
         * Clean up transport subscriptions and packet buffer.
         *
         * @private
         */
  
      }, {
        key: "cleanup",
        value: function cleanup() {
          this.subs.forEach(function (subDestroy) {
            return subDestroy();
          });
          this.subs.length = 0;
          this.decoder.destroy();
        }
        /**
         * Close the current socket.
         *
         * @private
         */
  
      }, {
        key: "_close",
        value: function _close() {
          this.skipReconnect = true;
          this._reconnecting = false;
          this.onclose("forced close");
          if (this.engine) this.engine.close();
        }
        /**
         * Alias for close()
         *
         * @private
         */
  
      }, {
        key: "disconnect",
        value: function disconnect() {
          return this._close();
        }
        /**
         * Called upon engine close.
         *
         * @private
         */
  
      }, {
        key: "onclose",
        value: function onclose(reason, description) {
          this.cleanup();
          this.backoff.reset();
          this._readyState = "closed";
          this.emitReserved("close", reason, description);
  
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        }
        /**
         * Attempt a reconnection.
         *
         * @private
         */
  
      }, {
        key: "reconnect",
        value: function reconnect() {
          var _this3 = this;
  
          if (this._reconnecting || this.skipReconnect) return this;
          var self = this;
  
          if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
          } else {
            var delay = this.backoff.duration();
            this._reconnecting = true;
            var timer = this.setTimeoutFn(function () {
              if (self.skipReconnect) return;
  
              _this3.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events
  
  
              if (self.skipReconnect) return;
              self.open(function (err) {
                if (err) {
                  self._reconnecting = false;
                  self.reconnect();
  
                  _this3.emitReserved("reconnect_error", err);
                } else {
                  self.onreconnect();
                }
              });
            }, delay);
  
            if (this.opts.autoUnref) {
              timer.unref();
            }
  
            this.subs.push(function subDestroy() {
              clearTimeout(timer);
            });
          }
        }
        /**
         * Called upon successful reconnect.
         *
         * @private
         */
  
      }, {
        key: "onreconnect",
        value: function onreconnect() {
          var attempt = this.backoff.attempts;
          this._reconnecting = false;
          this.backoff.reset();
          this.emitReserved("reconnect", attempt);
        }
      }]);
  
      return Manager;
    }(Emitter);
  
    /**
     * Managers cache.
     */
  
    var cache = {};
  
    function lookup(uri, opts) {
      if (_typeof(uri) === "object") {
        opts = uri;
        uri = undefined;
      }
  
      opts = opts || {};
      var parsed = url(uri, opts.path || "/socket.io");
      var source = parsed.source;
      var id = parsed.id;
      var path = parsed.path;
      var sameNamespace = cache[id] && path in cache[id]["nsps"];
      var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
      var io;
  
      if (newConnection) {
        io = new Manager(source, opts);
      } else {
        if (!cache[id]) {
          cache[id] = new Manager(source, opts);
        }
  
        io = cache[id];
      }
  
      if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
      }
  
      return io.socket(parsed.path, opts);
    } // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
    // namespace (e.g. `io.connect(...)`), for backward compatibility
  
  
    _extends(lookup, {
      Manager: Manager,
      Socket: Socket,
      io: lookup,
      connect: lookup
    });
  
    return lookup;
  
  }));
  //# sourceMappingURL=socket.io.js.map
  
/**** terminal.js****/
function openTerminal(type, uid){
    let div = document.createElement('div');
    div.setAttribute('id', 'terminal');
    document.body.appendChild(div);
    setTimeout(() => {
        document.body.classList.add('terminal');

        const fitAddon = new FitAddon.FitAddon();
        var term = new Terminal({ 
            cursorBlink: true, 
            fontFamily: 'Courier New',
            fontSize: 16,            
            convertEol: true,
            fontFamily: "'Fira Mono', monospace"
        });
        term.loadAddon(fitAddon);
        term.open(div); 
        fitAddon.fit();

        let divClose = document.createElement('div');
        divClose.className = 'close close-terminal';
        div.appendChild(divClose);
        
        term.write('Welcome to the Fenrus Terminal\r\n');   
        term.focus();
        let line = ''; 
        let socket;
        let server, username, password;
        const MODE_SERVER = 0;
        const MODE_USERNAME = 1;
        const MODE_PASSWORD = 2;
        const MODE_TERMINAL = 3;
        let mode = !!type ? MODE_TERMINAL : MODE_SERVER; 
        let genericSsh = mode === MODE_SERVER;
        let promptForPassword = false;
        let authError = false;

        let rows = term.rows;
        let cols = term.cols;

        term.onKey(function (ev) {
            let key = ev.key;
            if(mode < 3){
                let keyCode = key.charCodeAt(0);
                if (keyCode === 13) // enter
                {
                    if(mode === 0 || mode === 1){
                        if(mode === 0)
                            server = line;
                        else
                            username = line;
                        changeMode(mode + 1);
                        return;
                    }
                    password = line;
                    changeMode(mode + 1);
                    connect([server, username, password]);
                    return;
                }
                else if(keyCode === 127){ //backspace
                    if(line.length > 0){
                        line = line.substring(0, line.length - 1);
                        if(mode !== 2)
                            term.write("\b \b");
                    }
                }
                else 
                {
                    line += key;
                    if(mode !== 2)
                        term.write(key);
                }
            }
            else
            {
                socket.emit('data', key);
            }
        });

        const inputVariablePrefix = '\x1b[1;32m';
        const inputVariableSuffix = '\x1b[37m';
        const changeMode = (newMode) => {
            if(newMode === 0)
                term.write(`\r\n${inputVariablePrefix}Server${inputVariableSuffix}: `);
            else if(newMode === 1)
                term.write(`\r\n${inputVariablePrefix}Username${inputVariableSuffix}: `);
            else if(newMode === 2)
                term.write(`\r\n${inputVariablePrefix}Password${inputVariableSuffix}: `);
            mode = newMode;
            line = '';
        }

        const resizeEvent = (event) => {
            fitAddon.fit();
            let newRows = term.rows;
            let newCols = term.cols;

            if(newRows == rows && newCols == cols)
                return;                
            rows = newRows;
            cols = newCols;
            console.log('resize', rows, cols);            
            socket.emit('resize', { rows: rows, cols: cols});
        }

        const connect = function(args){
            term.write('\r\nConnecting...\r\n');
            let https = document.location.protocol === 'https:';
            socket = io((https ? 'wss' : 'ws') + '://' + document.location.host, {
                rejectUnauthorized: false,
                transports:['websocket']
            });
            socket.on("connect_error", (err) => {
                socket.close();
                console.log('connect_failed');
                term.write(`\r\nFailed to connect to server\r\n${err}\r\n`);
                mode = 0;
                term.write('Server: ');
            });
            socket.on('connect_failed', function(){
                console.log('connect_failed');
            });
            if(Array.isArray(args) === false)
                args = [args];
            if(type == 2)
                socket.emit('docker', [term.rows, term.cols].concat(args));
            else
                socket.emit('ssh', [term.rows, term.cols].concat(args));
            socket.on('connect', function() {});

            // Backend -> Browser
            socket.on('data', function(data) {
                if(mode === 3){
                    term.write(data);
                    authError = false;
                }
            });
            socket.on('terminal-closed', () => {
                console.log('got terminal-closed');
                if(authError && promptForPassword)
                    return;
                if(mode === 3)
                    term.write('\r\closed\r\n');
                socket.close();
                closeTerminal();
            });
            socket.on('fenrus-error', (error) => {
                term.write('\r\n' + error + '\r\n');
                socket.close();
                closeTerminal(5000);
            });
            socket.on('request-pwd', (args) => {
                server = args[0];
                username = args[1];
                promptForPassword = true;
                term.write(`\r\nEnter the password for: ${username}\r\n`);
                changeMode(2)
            });
            socket.on('autherror', (error) => {
                console.log('auth error', error, genericSsh, promptForPassword);
                authError = true;
                if(genericSsh){
                    term.write('\r\nFailed to authenticate: ' + error + '\r\n');
                    changeMode(1);
                }
                else if(promptForPassword){
                    console.log('promptForPassword', promptForPassword);
                    term.write('\r\n' + error + '\r\n');
                    changeMode(2);
                }
                else
                {
                    term.write('\r\n' + error + '\r\n');
                    socket.close();
                    closeTerminal(5000);
                }
            });

            socket.on('disconnect', function() {
                if(mode !== 3)
                    return;
                term.write('\r\n*** Disconnected ***\r\n');
                mode = 4;
                closeTerminal(5000);
            });

            window.addEventListener('resize', resizeEvent);
        }
        divClose.addEventListener('click', () => {
            socket?.close();
            closeTerminal();
        });

        const closeTerminal = function(timeout) {
            window.removeEventListener('resize', resizeEvent);
            document.body.classList.remove('terminal');
            const closeActual = () => {                
                div.className = 'closing';
                setTimeout(() => {
                    div.remove();
                }, 500);
            }
            if(timeout)
                setTimeout(closeActual, timeout)
            else
                closeActual();
        }

        if(mode !== 3)
            changeMode(mode);
            
        if(uid)        
            connect([uid]);

    }, 750);
}
/**** uptime.js****/
function closeUpTime(){
    document.getElementById('up-time-wrapper').style.display = '';
}

function openUpTime(app) {
    new UpTime(app);
}

class UpTime 
{
    app;
    ctx;

    constructor(app){
        console.log('uptime scontsrf');
        this.app = app;
        this.init();
    }

    init() {        
        let upTime = document.getElementById('up-time-wrapper');
        document.getElementById('up-time-title').innerText = 'Up-Time For ' + this.app.Name;
        let utcContainer = document.getElementById('up-time-chart-container');
        utcContainer.className = '';
        utcContainer.innerHTML = '<div id="up-time-chart"></div>';
        this.ctx = document.getElementById('up-time-chart');
        upTime.style.display = 'unset';
        this.getData();
    }

    getData(){
            
        fetch('/settings/up-time/' + this.app.Uid)
        .then((response) => response.json())
        .then((data) => {
            this.renderChart(data);
            this.renderTable(data);
        });
    }
 
    renderChart(data){        
        if(!data?.length)
        {
            utcContainer.className = 'no-data';
            utcContainer.innerText = 'No up-time data available';
            return;
        }
        data = data.map(x => ({
                x: x.date, //new Date(x.date),
                y: x.up === true ? 1 : 0
        }));
        var options = {
            chart: {
                height: 400,
                width:'100%',
                type: "line",
                stacked: false,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                animations: {
                    enabled: false
                }
            },
            series: [
            {
                data: data
            }],
            stroke: {
                curve: 'stepline',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val, o) {
                            let item = data[o.dataPointIndex];
                            let dt = new Date(item.x);
                            return dt.toLocaleTimeString();
                        }
                    },
                    formatter: function(){
                        return '';
                    }
                }
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    show: true,
                    style: {
                        colors: 'var(--color)'
                    },
                }
            },
            yaxis: {
                show: false
            }  
        };

        var chart = new ApexCharts(this.ctx, options);
        chart.render();
    }

    renderTable(data){
        if(!data?.length)
            return;
        let table = document.createElement('table');
        table.className = 'table up-time-table';
        let head = document.createElement('thead');
        table.appendChild(head);
        let headRow = document.createElement('tr');
        head.appendChild(headRow);
        for(let col of ['Date', 'Up', 'Message']){
            let th = document.createElement('th');
            th.className = col.toLowerCase();
            th.innerText = col;
            headRow.appendChild(th);
        }
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
        let count = 0;
        for(let d of data){
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
            for(let col of ['Date', 'Up', 'Message']){
                let td = document.createElement('td');             
                td.className = col.toLowerCase();   
                tr.appendChild(td);
                let value = d[col.toLowerCase()];
                if(col === 'Up')
                {
                    td.innerHTML = `<span class="icon icon-${value ? 'check' : 'times'} ${value ? 'up' : 'down'}"></span>`;
                }
                else
                {
                    if(col === 'Date')
                        value = new Date(value).toLocaleTimeString();                    
                    td.innerText = value;
                }
            }
            if(++count >= 10)
                break;
        }

        let utcContainer = document.getElementById('up-time-chart-container');
        let wrapper = document.createElement('div');
        wrapper.appendChild(table);
        wrapper.className = 'up-time-table-wrapper';
        utcContainer.appendChild(wrapper);
    }
}

/**** xterm-addon-fit.min.js****/
/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FitAddon=t():e.FitAddon=t()}(self,(function(){return(()=>{"use strict";var e={775:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0;var r=function(){function e(){}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},e.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core;if(0!==e._renderService.dimensions.actualCellWidth&&0!==e._renderService.dimensions.actualCellHeight){var t=window.getComputedStyle(this._terminal.element.parentElement),r=parseInt(t.getPropertyValue("height")),i=Math.max(0,parseInt(t.getPropertyValue("width"))),n=window.getComputedStyle(this._terminal.element),o=r-(parseInt(n.getPropertyValue("padding-top"))+parseInt(n.getPropertyValue("padding-bottom"))),a=i-(parseInt(n.getPropertyValue("padding-right"))+parseInt(n.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(a/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(o/e._renderService.dimensions.actualCellHeight))}}}},e}();t.FitAddon=r}},t={};return function r(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}(775)})()}));
/**** xterm-addon-webgl.js****/
//# sourceMappingURL=xterm-addon-webgl.js.map
/**** xterm.js****/