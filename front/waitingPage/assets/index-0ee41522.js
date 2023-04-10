(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Q(){}const Kl=t=>t;function Xl(t,e){for(const n in e)t[n]=e[n];return t}function Jl(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Qr(t){return t()}function xi(){return Object.create(null)}function Le(t){t.forEach(Qr)}function $s(t){return typeof t=="function"}function ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let _n;function It(t,e){return _n||(_n=document.createElement("a")),_n.href=e,t===_n.href}function Zl(t){return Object.keys(t).length===0}function ea(t,e,n,s){if(t){const i=Yr(t,e,n,s);return t[0](i)}}function Yr(t,e,n,s){return t[1]&&s?Xl(n.ctx.slice(),t[1](s(e))):n.ctx}function ta(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let l=0;l<o;l+=1)r[l]=e.dirty[l]|i[l];return r}return e.dirty|i}return e.dirty}function na(t,e,n,s,i,r){if(i){const o=Yr(e,n,s,r);t.p(o,i)}}function sa(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Pi(t){return t??""}const Kr=typeof window<"u";let ia=Kr?()=>window.performance.now():()=>Date.now(),Ws=Kr?t=>requestAnimationFrame(t):Q;const yt=new Set;function Xr(t){yt.forEach(e=>{e.c(t)||(yt.delete(e),e.f())}),yt.size!==0&&Ws(Xr)}function ra(t){let e;return yt.size===0&&Ws(Xr),{promise:new Promise(n=>{yt.add(e={c:t,f:n})}),abort(){yt.delete(e)}}}function y(t,e){t.appendChild(e)}function Jr(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function oa(t){const e=N("style");return la(Jr(t),e),e.sheet}function la(t,e){return y(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Hn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function L(){return M(" ")}function aa(){return M("")}function he(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Di(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zr(t){return t===""?null:+t}function ca(t){return Array.from(t.childNodes)}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function bn(t,e){t.value=e??""}function Oi(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function eo(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}const Cn=new Map;let En=0;function ua(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ha(t,e){const n={stylesheet:oa(e),rules:{}};return Cn.set(t,n),n}function Mi(t,e,n,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let m=0;m<=1;m+=a){const v=e+(n-e)*r(m);c+=m*100+`%{${o(v,1-v)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,u=`__svelte_${ua(h)}_${l}`,d=Jr(t),{stylesheet:f,rules:_}=Cn.get(d)||ha(d,t);_[u]||(_[u]=!0,f.insertRule(`@keyframes ${u} ${h}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${s}ms linear ${i}ms 1 both`,En+=1,u}function da(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),En-=i,En||fa())}function fa(){Ws(()=>{En||(Cn.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),Cn.clear())})}let Yt;function xe(t){Yt=t}function to(){if(!Yt)throw new Error("Function called outside component initialization");return Yt}function Dt(){const t=to();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=eo(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const mt=[],Se=[],yn=[],_s=[],_a=Promise.resolve();let ps=!1;function pa(){ps||(ps=!0,_a.then(Hs))}function Tt(t){yn.push(t)}function Ue(t){_s.push(t)}const es=new Set;let _t=0;function Hs(){if(_t!==0)return;const t=Yt;do{try{for(;_t<mt.length;){const e=mt[_t];_t++,xe(e),ma(e.$$)}}catch(e){throw mt.length=0,_t=0,e}for(xe(null),mt.length=0,_t=0;Se.length;)Se.pop()();for(let e=0;e<yn.length;e+=1){const n=yn[e];es.has(n)||(es.add(n),n())}yn.length=0}while(mt.length);for(;_s.length;)_s.pop()();ps=!1,es.clear(),xe(t)}function ma(t){if(t.fragment!==null){t.update(),Le(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Tt)}}let Bt;function ga(){return Bt||(Bt=Promise.resolve(),Bt.then(()=>{Bt=null})),Bt}function ts(t,e,n){t.dispatchEvent(eo(`${e?"intro":"outro"}${n}`))}const vn=new Set;let Pe;function at(){Pe={r:0,c:[],p:Pe}}function ct(){Pe.r||Le(Pe.c),Pe=Pe.p}function P(t,e){t&&t.i&&(vn.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(vn.has(t))return;vn.add(t),Pe.c.push(()=>{vn.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const ya={duration:0};function wn(t,e,n,s){const i={direction:"both"};let r=e(t,n,i),o=s?0:1,l=null,a=null,c=null;function h(){c&&da(t,c)}function u(f,_){const g=f.b-o;return _*=Math.abs(g),{a:o,b:f.b,d:g,duration:_,start:f.start,end:f.start+_,group:f.group}}function d(f){const{delay:_=0,duration:g=300,easing:m=Kl,tick:v=Q,css:k}=r||ya,E={start:ia()+_,b:f};f||(E.group=Pe,Pe.r+=1),l||a?a=E:(k&&(h(),c=Mi(t,o,f,g,_,m,k)),f&&v(0,1),l=u(E,g),Tt(()=>ts(t,f,"start")),ra(I=>{if(a&&I>a.start&&(l=u(a,g),a=null,ts(t,l.b,"start"),k&&(h(),c=Mi(t,o,l.b,l.duration,0,m,r.css))),l){if(I>=l.end)v(o=l.b,1-o),ts(t,l.b,"end"),a||(l.b?h():--l.group.r||Le(l.group.c)),l=null;else if(I>=l.start){const V=I-l.start;o=l.a+l.d*m(V/l.duration),v(o,1-o)}}return!!(l||a)}))}return{run(f){$s(r)?ga().then(()=>{r=r(i),d(f)}):d(f)},end(){h(),l=a=null}}}function Li(t,e){const n=e.token={};function s(i,r,o,l){if(e.token!==n)return;e.resolved=l;let a=e.ctx;o!==void 0&&(a=a.slice(),a[o]=l);const c=i&&(e.current=i)(a);let h=!1;e.block&&(e.blocks?e.blocks.forEach((u,d)=>{d!==r&&u&&(at(),F(u,1,1,()=>{e.blocks[d]===u&&(e.blocks[d]=null)}),ct())}):e.block.d(1),c.c(),P(c,1),c.m(e.mount(),e.anchor),h=!0),e.block=c,e.blocks&&(e.blocks[r]=c),h&&Hs()}if(Jl(t)){const i=to();if(t.then(r=>{xe(i),s(e.then,1,e.value,r),xe(null)},r=>{if(xe(i),s(e.catch,2,e.error,r),xe(null),!e.hasCatch)throw r}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function va(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}function Be(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function re(t){t&&t.c()}function ne(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Tt(()=>{const o=t.$$.on_mount.map(Qr).filter($s);t.$$.on_destroy?t.$$.on_destroy.push(...o):Le(o),t.$$.on_mount=[]}),r.forEach(Tt)}function se(t,e){const n=t.$$;n.fragment!==null&&(Le(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ba(t,e){t.$$.dirty[0]===-1&&(mt.push(t),pa(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,s,i,r,o,l=[-1]){const a=Yt;xe(t);const c=t.$$={fragment:null,ctx:[],props:r,update:Q,not_equal:i,bound:xi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:xi(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(u,d,...f)=>{const _=f.length?f[0]:d;return c.ctx&&i(c.ctx[u],c.ctx[u]=_)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](_),h&&ba(t,u)),d}):[],c.update(),h=!0,Le(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const u=ca(e.target);c.fragment&&c.fragment.l(u),u.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&P(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),Hs()}xe(a)}class ve{$destroy(){se(this,1),this.$destroy=Q}$on(e,n){if(!$s(n))return Q;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Zl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(t,e){if(!t)throw Ot(e)},Ot=function(t){return new Error("Firebase Database ("+no.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ca=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Vs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),s.push(n[h],n[u],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(so(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ca(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const f=l<<4&240|c>>2;if(s.push(f),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},io=function(t){const e=so(t);return Vs.encodeByteArray(e,!0)},In=function(t){return io(t).replace(/\./g,"")},ms=function(t){try{return Vs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){return ro(void 0,t)}function ro(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wa(n)||(t[n]=ro(t[n],e[n]));return t}function wa(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=()=>Ia().__FIREBASE_DEFAULTS__,Sa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Na=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ms(t[1]);return e&&JSON.parse(e)},oo=()=>{try{return Ta()||Sa()||Na()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ka=t=>{var e,n;return(n=(e=oo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qs=t=>{const e=ka(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ra=()=>{var t;return(t=oo())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[In(JSON.stringify(n)),In(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ao(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Aa())}function xa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function co(){return no.NODE_ADMIN===!0}function Pa(){try{return typeof indexedDB=="object"}catch{return!1}}function Da(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="FirebaseError";class ut extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Oa,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ma(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ut(i,l,s)}}function Ma(t,e){return t.replace(La,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const La=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return JSON.parse(t)}function X(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Kt(ms(r[0])||""),n=Kt(ms(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Fa=function(t){const e=ho(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ua=function(t){const e=ho(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function St(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tn(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function gs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ui(r)&&Ui(o)){if(!gs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ui(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const d=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function js(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qn=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class nt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qa(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Va(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Va(t){return t===Ke?void 0:t}function qa(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ha(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Ga={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},za=W.INFO,Qa={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Ya=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Qa[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=za,this._logHandler=Ya,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ga[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Ka=(t,e)=>e.some(n=>t instanceof n);let Bi,$i;function Xa(){return Bi||(Bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ja(){return $i||($i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _o=new WeakMap,ys=new WeakMap,po=new WeakMap,ns=new WeakMap,Gs=new WeakMap;function Za(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n($e(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_o.set(n,t)}).catch(()=>{}),Gs.set(e,t),e}function ec(t){if(ys.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ys.set(t,e)}let vs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ys.get(t);if(e==="objectStoreNames")return t.objectStoreNames||po.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tc(t){vs=t(vs)}function nc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ss(this),e,...n);return po.set(s,e.sort?e.sort():[e]),$e(s)}:Ja().includes(t)?function(...e){return t.apply(ss(this),e),$e(_o.get(this))}:function(...e){return $e(t.apply(ss(this),e))}}function sc(t){return typeof t=="function"?nc(t):(t instanceof IDBTransaction&&ec(t),Ka(t,Xa())?new Proxy(t,vs):t)}function $e(t){if(t instanceof IDBRequest)return Za(t);if(ns.has(t))return ns.get(t);const e=sc(t);return e!==t&&(ns.set(t,e),Gs.set(e,t)),e}const ss=t=>Gs.get(t);function ic(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=$e(o);return s&&o.addEventListener("upgradeneeded",a=>{s($e(o.result),a.oldVersion,a.newVersion,$e(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const rc=["get","getKey","getAll","getAllKeys","count"],oc=["put","add","delete","clear"],is=new Map;function Wi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(is.get(e))return is.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=oc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rc.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return is.set(e,r),r}tc(t=>({...t,get:(e,n,s)=>Wi(e,n)||t.get(e,n,s),has:(e,n)=>!!Wi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ac(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ac(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bs="@firebase/app",Hi="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new fo("@firebase/app"),cc="@firebase/app-compat",uc="@firebase/analytics-compat",hc="@firebase/analytics",dc="@firebase/app-check-compat",fc="@firebase/app-check",_c="@firebase/auth",pc="@firebase/auth-compat",mc="@firebase/database",gc="@firebase/database-compat",yc="@firebase/functions",vc="@firebase/functions-compat",bc="@firebase/installations",Cc="@firebase/installations-compat",Ec="@firebase/messaging",wc="@firebase/messaging-compat",Ic="@firebase/performance",Tc="@firebase/performance-compat",Sc="@firebase/remote-config",Nc="@firebase/remote-config-compat",kc="@firebase/storage",Rc="@firebase/storage-compat",Ac="@firebase/firestore",xc="@firebase/firestore-compat",Pc="firebase",Dc="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]",Oc={[bs]:"fire-core",[cc]:"fire-core-compat",[hc]:"fire-analytics",[uc]:"fire-analytics-compat",[fc]:"fire-app-check",[dc]:"fire-app-check-compat",[_c]:"fire-auth",[pc]:"fire-auth-compat",[mc]:"fire-rtdb",[gc]:"fire-rtdb-compat",[yc]:"fire-fn",[vc]:"fire-fn-compat",[bc]:"fire-iid",[Cc]:"fire-iid-compat",[Ec]:"fire-fcm",[wc]:"fire-fcm-compat",[Ic]:"fire-perf",[Tc]:"fire-perf-compat",[Sc]:"fire-rc",[Nc]:"fire-rc-compat",[kc]:"fire-gcs",[Rc]:"fire-gcs-compat",[Ac]:"fire-fst",[xc]:"fire-fst-compat","fire-js":"fire-js",[Pc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Map,Es=new Map;function Mc(t,e){try{t.container.addComponent(e)}catch(n){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(Es.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;Es.set(e,t);for(const n of Sn.values())Mc(n,t);return!0}function zs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new uo("app","Firebase",Lc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=Dc;function go(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cs,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw We.create("bad-app-name",{appName:String(i)});if(n||(n=Ra()),!n)throw We.create("no-options");const r=Sn.get(i);if(r){if(gs(n,r.options)&&gs(s,r.config))return r;throw We.create("duplicate-app",{appName:i})}const o=new ja(i);for(const a of Es.values())o.addComponent(a);const l=new Fc(n,s,o);return Sn.set(i,l),l}function Qs(t=Cs){const e=Sn.get(t);if(!e&&t===Cs)return go();if(!e)throw We.create("no-app",{appName:t});return e}function Ne(t,e,n){var s;let i=(s=Oc[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(l.join(" "));return}Nt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="firebase-heartbeat-database",Bc=1,Xt="firebase-heartbeat-store";let rs=null;function yo(){return rs||(rs=ic(Uc,Bc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xt)}}}).catch(t=>{throw We.create("idb-open",{originalErrorMessage:t.message})})),rs}async function $c(t){try{return(await yo()).transaction(Xt).objectStore(Xt).get(vo(t))}catch(e){if(e instanceof ut)st.warn(e.message);else{const n=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(n.message)}}}async function Vi(t,e){try{const s=(await yo()).transaction(Xt,"readwrite");return await s.objectStore(Xt).put(e,vo(t)),s.done}catch(n){if(n instanceof ut)st.warn(n.message);else{const s=We.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});st.warn(s.message)}}}function vo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=1024,Hc=30*24*60*60*1e3;class Vc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Hc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qi(),{heartbeatsToSend:n,unsentEntries:s}=qc(this._heartbeatsCache.heartbeats),i=In(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qi(){return new Date().toISOString().substring(0,10)}function qc(t,e=Wc){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ji(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ji(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pa()?Da().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $c(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ji(t){return In(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t){Nt(new nt("platform-logger",e=>new lc(e),"PRIVATE")),Nt(new nt("heartbeat",e=>new Vc(e),"PRIVATE")),Ne(bs,Hi,t),Ne(bs,Hi,"esm2017"),Ne("fire-js","")}Gc("");var zc="firebase",Qc="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne(zc,Qc,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="firebasestorage.googleapis.com",Co="storageBucket",Yc=2*60*1e3,Kc=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends ut{constructor(e,n,s=0){super(os(e),`Firebase Storage: ${n} (${os(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return os(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(oe||(oe={}));function os(t){return"storage/"+t}function Xc(){const t="An unknown error occurred, please check the error payload for server response.";return new ae(oe.UNKNOWN,t)}function Jc(t){return new ae(oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Zc(t){return new ae(oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eu(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ae(oe.UNAUTHENTICATED,t)}function tu(){return new ae(oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nu(t){return new ae(oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function su(){return new ae(oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iu(){return new ae(oe.CANCELED,"User canceled the upload/download.")}function ru(t){return new ae(oe.INVALID_URL,"Invalid URL '"+t+"'.")}function ou(t){return new ae(oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lu(){return new ae(oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Co+"' property when initializing the app?")}function ws(t){return new ae(oe.INVALID_ARGUMENT,t)}function Eo(){return new ae(oe.APP_DELETED,"The Firebase app was deleted.")}function au(t){return new ae(oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $t(t){throw new ae(oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pe.makeFromUrl(e,n)}catch{return new pe(e,"")}if(s.path==="")return s;throw ou(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const h="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${u}/${h}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},g=n===bo?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",v=new RegExp(`^https?://${g}/${i}/${m}`,"i"),E=[{regex:l,indices:a,postModify:r},{regex:f,indices:_,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<E.length;I++){const V=E[I],U=V.regex.exec(e);if(U){const q=U[V.indices.bucket];let K=U[V.indices.path];K||(K=""),s=new pe(q,K),V.postModify(s);break}}if(s==null)throw ru(e);return s}}class cu{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function h(...m){c||(c=!0,e.apply(null,m))}function u(m){i=setTimeout(()=>{i=null,t(f,a())},m)}function d(){r&&clearTimeout(r)}function f(m,...v){if(c){d();return}if(m){d(),h.call(null,m,...v);return}if(a()||o){d(),h.call(null,m,...v);return}s<64&&(s*=2);let E;l===1?(l=2,E=0):E=(s+Math.random())*1e3,u(E)}let _=!1;function g(m){_||(_=!0,d(),!c&&(i!==null?(m||(l=2),clearTimeout(i),u(0)):m||(l=1)))}return u(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function hu(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return t!==void 0}function Gi(t,e,n,s){if(s<e)throw ws(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ws(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function _u(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(et||(et={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,s,i,r,o,l,a,c,h,u,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new pn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===et.NO_ERROR,a=r.getStatus();if(!l||pu(a,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===et.ABORT;s(!1,new pn(!1,null,h));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new pn(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());du(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=Xc();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?Eo():iu();o(a)}else{const a=su();o(a)}};this.canceled_?n(!1,new pn(!1,null,!0)):this.backoffId_=uu(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hu(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pn{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function gu(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yu(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vu(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bu(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Cu(t,e,n,s,i,r,o=!0){const l=_u(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return vu(c,e),gu(c,n),yu(c,r),bu(c,s),new mu(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function wu(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Iu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}class Tu{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function Su(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=tu():i=eu():n.getStatus()===402?i=Zc(t.bucket):n.getStatus()===403?i=nu(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Nu(t){const e=Su(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Jc(t.path)),r.serverResponse=i.serverResponse,r}return n}function ku(t,e,n){const s=e.fullServerUrl(),i=fu(s,t.host,t._protocol)+"?alt=media",r="GET",o=t.maxOperationRetryTime,l=new Tu(i,r,(a,c)=>c,o);return l.errorHandler=Nu(e),n!==void 0&&(l.headers.Range=`bytes=0-${n}`,l.successCodes=[200,206]),l}class Ru{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=et.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=et.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=et.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw $t("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $t("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $t("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $t("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $t("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Au extends Ru{initXhr(){this.xhr_.responseType="blob"}}function xu(){return new Au}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this._service=e,n instanceof pe?this._location=n:this._location=pe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new it(e,n)}get root(){const e=new pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iu(this._location.path)}get storage(){return this._service}get parent(){const e=Eu(this._location.path);if(e===null)return null;const n=new pe(this._location.bucket,e);return new it(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw au(e)}}function Pu(t,e){t._throwIfRoot("getBlob");const n=ku(t.storage,t._location,e);return t.storage.makeRequestWithTokens(n,xu).then(s=>e!==void 0?s.slice(0,e):s)}function Du(t,e){const n=wu(t._location.path,e),s=new pe(t._location.bucket,n);return new it(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){return/^[A-Za-z]+:\/\//.test(t)}function Mu(t,e){return new it(t,e)}function wo(t,e){if(t instanceof Ys){const n=t;if(n._bucket==null)throw lu();const s=new it(n,n._bucket);return e!=null?wo(s,e):s}else return e!==void 0?Du(t,e):t}function Lu(t,e){if(e&&Ou(e)){if(t instanceof Ys)return Mu(t,e);throw ws("To use ref(service, url), the first argument must be a Storage instance.")}else return wo(t,e)}function zi(t,e){const n=e==null?void 0:e[Co];return n==null?null:pe.makeFromBucketSpec(n,t)}function Fu(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:lo(i,t.app.options.projectId))}class Ys{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=bo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yc,this._maxUploadRetryTime=Kc,this._requests=new Set,i!=null?this._bucket=pe.makeFromBucketSpec(i,this._host):this._bucket=zi(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pe.makeFromBucketSpec(this._url,e):this._bucket=zi(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gi("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gi("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new it(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new cu(Eo());{const o=Cu(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Qi="@firebase/storage",Yi="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="storage";function Ki(t,e){return t=Ie(t),Lu(t,e)}function Uu(t=Qs(),e){t=Ie(t);const s=zs(t,Io).getImmediate({identifier:e}),i=qs("storage");return i&&To(s,...i),s}function To(t,e,n,s={}){Fu(t,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e){return t=Ie(t),Pu(t,e)}function Bu(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ys(n,s,i,e,mo)}function $u(){Nt(new nt(Io,Bu,"PUBLIC").setMultipleInstances(!0)),Ne(Qi,Yi,""),Ne(Qi,Yi,"esm2017")}$u();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="type.googleapis.com/google.protobuf.Int64Value",Hu="type.googleapis.com/google.protobuf.UInt64Value";function So(t,e){const n={};for(const s in t)t.hasOwnProperty(s)&&(n[s]=e(t[s]));return n}function Is(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Is(e));if(typeof t=="function"||typeof t=="object")return So(t,e=>Is(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Nn(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Wu:case Hu:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Nn(e)):typeof t=="function"||typeof t=="object"?So(t,e=>Nn(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class vt extends ut{constructor(e,n,s){super(`${Ks}/${e}`,n||""),this.details=s}}function Vu(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function qu(t,e){let n=Vu(t),s=n,i;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!Ji[o])return new vt("internal","internal");n=Ji[o],s=o}const l=r.message;typeof l=="string"&&(s=l),i=r.details,i!==void 0&&(i=Nn(i))}}catch{}return n==="ok"?null:new vt(n,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="us-central1";function Gu(t){let e=null;return{promise:new Promise((n,s)=>{e=setTimeout(()=>{s(new vt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class zu{constructor(e,n,s,i,r=Ts,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ju(n,s,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(r);this.customDomain=l.origin,this.region=Ts}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Qu(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Yu(t,e,n){return s=>Xu(t,e,s,n||{})}async function Ku(t,e,n,s){n["Content-Type"]="application/json";let i;try{i=await s(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await i.json()}catch{}return{status:i.status,json:r}}function Xu(t,e,n,s){const i=t._url(e);return Ju(t,i,n,s)}async function Ju(t,e,n,s){n=Is(n);const i={data:n},r={},o=await t.contextProvider.getContext();o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const l=s.timeout||7e4,a=Gu(l),c=await Promise.race([Ku(e,i,r,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!c)throw new vt("cancelled","Firebase Functions instance was deleted.");const h=qu(c.status,c.json);if(h)throw h;if(!c.json)throw new vt("internal","Response is not valid JSON object.");let u=c.json.data;if(typeof u>"u"&&(u=c.json.result),typeof u>"u")throw new vt("internal","Response is missing data field.");return{data:Nn(u)}}const Zi="@firebase/functions",er="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="auth-internal",eh="app-check-internal",th="messaging-internal";function nh(t,e){const n=(s,{instanceIdentifier:i})=>{const r=s.getProvider("app").getImmediate(),o=s.getProvider(Zu),l=s.getProvider(th),a=s.getProvider(eh);return new zu(r,o,l,a,i,t)};Nt(new nt(Ks,n,"PUBLIC").setMultipleInstances(!0)),Ne(Zi,er,e),Ne(Zi,er,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t=Qs(),e=Ts){const s=zs(Ie(t),Ks).getImmediate({identifier:e}),i=qs("functions");return i&&No(s,...i),s}function No(t,e,n){Qu(Ie(t),e,n)}function ko(t,e,n){return Yu(Ie(t),e,n)}nh(fetch.bind(self));const tr="@firebase/database",nr="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro="";function ih(t){Ro=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),X(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Kt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Re(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rh(e)}}catch{}return new oh},Je=Ao("localStorage"),Ss=Ao("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new fo("@firebase/database"),lh=function(){let t=1;return function(){return t++}}(),xo=function(t){const e=Wa(t),n=new $a;n.update(e);const s=n.digest();return Vs.encodeByteArray(s)},ln=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ln.apply(null,s):typeof s=="object"?e+=X(s):e+=s,e+=" "}return e};let tt=null,sr=!0;const ah=function(t,e){p(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(bt.logLevel=W.VERBOSE,tt=bt.log.bind(bt),e&&Ss.set("logging_enabled",!0)):typeof t=="function"?tt=t:(tt=null,Ss.remove("logging_enabled"))},ie=function(...t){if(sr===!0&&(sr=!1,tt===null&&Ss.get("logging_enabled")===!0&&ah(!0)),tt){const e=ln.apply(null,t);tt(e)}},an=function(t){return function(...e){ie(t,...e)}},Ns=function(...t){const e="FIREBASE INTERNAL ERROR: "+ln(...t);bt.error(e)},Me=function(...t){const e=`FIREBASE FATAL ERROR: ${ln(...t)}`;throw bt.error(e),new Error(e)},_e=function(...t){const e="FIREBASE WARNING: "+ln(...t);bt.warn(e)},ch=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xs=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uh=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},kt="[MIN_NAME]",rt="[MAX_NAME]",ht=function(t,e){if(t===e)return 0;if(t===kt||e===rt)return-1;if(e===kt||t===rt)return 1;{const n=ir(t),s=ir(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},hh=function(t,e){return t===e?0:t<e?-1:1},Wt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+X(e))},Js=function(t){if(typeof t!="object"||t===null)return X(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=X(e[s]),n+=":",n+=Js(t[e[s]]);return n+="}",n},Po=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function le(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Do=function(t){p(!Xs(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},dh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _h(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ph=new RegExp("^-?(0*)\\d{1,10}$"),mh=-2147483648,gh=2147483647,ir=function(t){if(ph.test(t)){const e=Number(t);if(e>=mh&&e<=gh)return e}return null},Mt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _e("Exception was thrown by user callback.",n),e},Math.floor(0))}},yh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){_e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_e(e)}}class Ct{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ct.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="5",Oo="v",Mo="s",Lo="r",Fo="f",Uo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bo="ls",$o="p",ks="ac",Wo="websocket",Ho="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Je.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Je.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ch(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qo(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");let s;if(e===Wo)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ho)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ch(t)&&(n.ns=t.namespace);const i=[];return le(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.counters_={}}incrementCounter(e,n=1){Re(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ea(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={},as={};function ei(t){const e=t.toString();return ls[e]||(ls[e]=new Eh),ls[e]}function wh(t,e){const n=t.toString();return as[n]||(as[n]=e()),as[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Mt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="start",Th="close",Sh="pLPCommand",Nh="pRTLPCB",jo="id",Go="pw",zo="ser",kh="cb",Rh="seg",Ah="ts",xh="d",Ph="dframe",Qo=1870,Yo=30,Dh=Qo-Yo,Oh=25e3,Mh=3e4;class gt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=an(e),this.stats_=ei(n),this.urlFn=a=>(this.appCheckToken&&(a[ks]=this.appCheckToken),qo(n,Ho,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ih(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mh)),uh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ti((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rr)this.id=l,this.password=a;else if(o===Th)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[rr]="t",s[zo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[kh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Oo]=Zs,this.transportSessionId&&(s[Mo]=this.transportSessionId),this.lastSessionId&&(s[Bo]=this.lastSessionId),this.applicationId&&(s[$o]=this.applicationId),this.appCheckToken&&(s[ks]=this.appCheckToken),typeof location<"u"&&location.hostname&&Uo.test(location.hostname)&&(s[Lo]=Fo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gt.forceAllow_=!0}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){return gt.forceAllow_?!0:!gt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dh()&&!fh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=X(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=io(n),i=Po(s,Dh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ph]="t",s[jo]=e,s[Go]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=X(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ti{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lh(),window[Sh+this.uniqueCallbackIdentifier]=e,window[Nh+this.uniqueCallbackIdentifier]=n,this.myIFrame=ti.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ie("frame writing exception"),l.stack&&ie(l.stack),ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jo]=this.myID,e[Go]=this.myPW,e[zo]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yo+s.length<=Qo;){const o=this.pendingSegs.shift();s=s+"&"+Rh+i+"="+o.seg+"&"+Ah+i+"="+o.ts+"&"+xh+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Oh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=16384,Fh=45e3;let kn=null;typeof MozWebSocket<"u"?kn=MozWebSocket:typeof WebSocket<"u"&&(kn=WebSocket);class Ce{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=an(this.connId),this.stats_=ei(n),this.connURL=Ce.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Oo]=Zs,typeof location<"u"&&location.hostname&&Uo.test(location.hostname)&&(o[Lo]=Fo),n&&(o[Mo]=n),s&&(o[Bo]=s),i&&(o[ks]=i),r&&(o[$o]=r),qo(e,Wo,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Je.set("previous_websocket_failure",!0);try{let s;co(),this.mySock=new kn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&kn!==null&&!Ce.forceDisallow_}static previouslyFailed(){return Je.isInMemoryStorage||Je.get("previous_websocket_failure")===!0}markConnectionHealthy(){Je.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Kt(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=X(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Po(n,Lh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fh))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ce.responsesRequiredToBeHealthy=2;Ce.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gt,Ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ce&&Ce.isAvailable();let s=n&&!Ce.previouslyFailed();if(e.webSocketOnly&&(n||_e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ce];else{const i=this.transports_=[];for(const r of Jt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=6e4,Bh=5e3,$h=10*1024,Wh=100*1024,cs="t",or="d",Hh="s",lr="r",Vh="e",ar="o",cr="a",ur="n",hr="p",qh="h";class jh{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=an("c:"+this.id+":"),this.transportManager_=new Jt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=jt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$h?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cs in e){const n=e[cs];n===cr?this.upgradeIfSecondaryHealthy_():n===lr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ar&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wt("t",e),s=Wt("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ur,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wt("t",e),s=Wt("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wt(cs,e);if(or in e){const s=e[or];if(n===qh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ur){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Hh?this.onConnectionShutdown_(s):n===lr?this.onReset_(s):n===Vh?Ns("Server Error: "+s):n===ar?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ns("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zs!==s&&_e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),jt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Je.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Xo{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ao()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rn}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=32,fr=768;class B{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function O(){return new B("")}function A(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qe(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new B(t.pieces_,e)}function ni(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Gh(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jo(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new B(e,0)}function G(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof B)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new B(n,0)}function x(t){return t.pieceNum_>=t.pieces_.length}function ue(t,e){const n=A(t),s=A(e);if(n===null)return e;if(n===s)return ue(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zh(t,e){const n=Zt(t,0),s=Zt(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=ht(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function si(t,e){if(qe(t)!==qe(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function me(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(qe(t)>qe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Qh{constructor(e,n){this.errorPrefix_=n,this.parts_=Zt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=qn(this.parts_[s]);Zo(this)}}function Yh(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qn(e),Zo(t)}function Kh(t){const e=t.parts_.pop();t.byteLength_-=qn(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zo(t){if(t.byteLength_>fr)throw new Error(t.errorPrefix_+"has a key path longer than "+fr+" bytes ("+t.byteLength_+").");if(t.parts_.length>dr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dr+") or object contains a cycle "+Xe(t))}function Xe(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Xo{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ii}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=1e3,Xh=60*5*1e3,_r=30*1e3,Jh=1.3,Zh=3e4,ed="server_kill",pr=3;class Oe extends Ko{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Oe.nextPersistentConnectionId_++,this.log_=an("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ht,this.maxReconnectDelay_=Xh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!co())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ii.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(X(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Vn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Oe.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Re(e,"w")){const s=St(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();_e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ua(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_r)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fa(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+X(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ns("Unrecognized action received from server: "+X(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ht,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ht,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zh&&(this.reconnectDelay_=Ht),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){p(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ie("getToken() completed but was canceled"):(ie("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new jh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{_e(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(ed)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&_e(u),a())}}}interrupt(e){ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fi(this.interruptReasons_)&&(this.reconnectDelay_=Ht,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Js(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new B(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pr&&(this.reconnectDelay_=_r,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ro.replace(/\./g,"-")]=1,ao()?e["framework.cordova"]=1:xa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rn.getInstance().currentlyOnline();return Fi(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new R(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new R(kt,e),i=new R(kt,n);return this.compare(s,i)!==0}minPost(){return R.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class el extends jn{static get __EMPTY_NODE(){return mn}static set __EMPTY_NODE(e){mn=e}compare(e,n){return ht(e.name,n.name)}isDefinedOn(e){throw Ot("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return R.MIN}maxPost(){return new R(rt,mn)}makePost(e,n){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,mn)}toString(){return".key"}}const Et=new el;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ee.RED,this.left=i??fe.EMPTY_NODE,this.right=r??fe.EMPTY_NODE}copy(e,n,s,i,r){return new ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ee.RED=!0;ee.BLACK=!1;class td{copy(e,n,s,i,r){return this}insert(e,n,s){return new ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class fe{constructor(e,n=fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gn(this.root_,null,this.comparator_,!0,e)}}fe.EMPTY_NODE=new td;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e){return ht(t.name,e.name)}function ri(t,e){return ht(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;function sd(t){Rs=t}const tl=function(t){return typeof t=="number"?"number:"+Do(t):"string:"+t},nl=function(t){if(t.isLeafNode()){const e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Re(e,".sv"),"Priority must be a string or number.")}else p(t===Rs||t.isEmpty(),"priority of unexpected type.");p(t===Rs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr;class Z{constructor(e,n=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nl(this.priorityNode_)}static set __childrenNodeConstructor(e){mr=e}static get __childrenNodeConstructor(){return mr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:A(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=A(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Do(this.value_):e+=this.value_,this.lazyHash_=xo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Z.VALUE_TYPE_ORDER.indexOf(n),r=Z.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+n),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl,il;function id(t){sl=t}function rd(t){il=t}class od extends jn{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ht(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return R.MIN}maxPost(){return new R(rt,new Z("[PRIORITY-POST]",il))}makePost(e,n){const s=sl(e);return new R(n,new Z("[PRIORITY-POST]",s))}toString(){return".priority"}}const z=new od;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=Math.log(2);class ad{constructor(e){const n=r=>parseInt(Math.log(r)/ld,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const An=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,d;if(h===0)return null;if(h===1)return u=t[a],d=n?n(u):u,new ee(d,u.node,ee.BLACK,null,null);{const f=parseInt(h/2,10)+a,_=i(a,f),g=i(f+1,c);return u=t[f],d=n?n(u):u,new ee(d,u.node,ee.BLACK,_,g)}},r=function(a){let c=null,h=null,u=t.length;const d=function(_,g){const m=u-_,v=u;u-=_;const k=i(m+1,v),E=t[m],I=n?n(E):E;f(new ee(I,E.node,g,null,k))},f=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<a.count;++_){const g=a.nextBitIsOne(),m=Math.pow(2,a.count-(_+1));g?d(m,ee.BLACK):(d(m,ee.BLACK),d(m,ee.RED))}return h},o=new ad(t.length),l=r(o);return new fe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;const pt={};class De{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return p(pt&&z,"ChildrenNode.ts has not been loaded"),us=us||new De({".priority":pt},{".priority":z}),us}get(e){const n=St(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof fe?n:null}hasIndex(e){return Re(this.indexSet_,e.toString())}addIndex(e,n){p(e!==Et,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(R.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=An(s,e.getCompare()):l=pt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new De(h,c)}addToIndexes(e,n){const s=Tn(this.indexes_,(i,r)=>{const o=St(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===pt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(R.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),An(l,o.getCompare())}else return pt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new R(e.name,l))),a.insert(e,e.node)}});return new De(s,this.indexSet_)}removeFromIndexes(e,n){const s=Tn(this.indexes_,i=>{if(i===pt)return i;{const r=n.get(e.name);return r?i.remove(new R(e.name,r)):i}});return new De(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class T{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&nl(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vt||(Vt=new T(new fe(ri),null,De.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vt}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vt:n}}getChild(e){const n=A(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new R(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vt:this.priorityNode_;return new T(i,o,r)}}updateChild(e,n){const s=A(e);if(s===null)return n;{p(A(e)!==".priority"||qe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(H(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(z,(o,l)=>{n[o]=l.val(e),s++,r&&T.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tl(this.getPriority().val())+":"),this.forEachChild(z,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":xo(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new R(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new R(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new R(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,R.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cn?-1:0}withIndex(e){if(e===Et||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Et||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(z),i=n.getIterator(z);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Et?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cd extends T{constructor(){super(new fe(ri),T.EMPTY_NODE,De.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const cn=new cd;Object.defineProperties(R,{MIN:{value:new R(kt,T.EMPTY_NODE)},MAX:{value:new R(rt,cn)}});el.__EMPTY_NODE=T.EMPTY_NODE;Z.__childrenNodeConstructor=T;sd(cn);rd(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=!0;function te(t,e=null){if(t===null)return T.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Z(n,te(e))}if(!(t instanceof Array)&&ud){const n=[];let s=!1;if(le(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=te(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new R(o,a)))}}),n.length===0)return T.EMPTY_NODE;const r=An(n,nd,o=>o.name,ri);if(s){const o=An(n,z.getCompare());return new T(r,te(e),new De({".priority":o},{".priority":z}))}else return new T(r,te(e),De.Default)}else{let n=T.EMPTY_NODE;return le(t,(s,i)=>{if(Re(t,s)&&s.substring(0,1)!=="."){const r=te(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(te(e))}}id(te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends jn{constructor(e){super(),this.indexPath_=e,p(!x(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ht(e.name,n.name):r}makePost(e,n){const s=te(e),i=T.EMPTY_NODE.updateChild(this.indexPath_,s);return new R(n,i)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,cn);return new R(rt,e)}toString(){return Zt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends jn{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ht(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,n){const s=te(e);return new R(n,s)}toString(){return".value"}}const fd=new dd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){return{type:"value",snapshotNode:t}}function Rt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function en(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function tn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _d(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(en(n,l)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Rt(n,s)):o.trackChildChange(tn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(z,(i,r)=>{n.hasChild(i)||s.trackChildChange(en(i,r))}),n.isLeafNode()||n.forEachChild(z,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(tn(i,r,o))}else s.trackChildChange(Rt(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.indexedFilter_=new oi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=nn.getStartPost_(e),this.endPost_=nn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new R(n,s))||(s=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=T.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(T.EMPTY_NODE);const r=this;return n.forEachChild(z,(o,l)=>{r.matches(new R(o,l))||(i=i.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new R(n,s))||(s=T.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(T.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const l=e;p(l.numChildren()===this.limit_,"");const a=new R(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(tn(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(en(n,u));const g=l.updateImmediateChild(n,T.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Rt(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(en(c.name,c.node)),r.trackChildChange(Rt(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kt}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const e=new li;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function md(t){return t.loadsAllData()?new oi(t.getIndex()):t.hasLimit()?new pd(t):new nn(t)}function gr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===z?n="$priority":t.index_===fd?n="$value":t.index_===Et?n="$key":(p(t.index_ instanceof hd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=X(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=X(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+X(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=X(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+X(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ko{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=an("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=xn.getListenId_(e,s),l={};this.listens_[o]=l;const a=gr(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),St(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=xn.getListenId_(e,n);delete this.listens_[s]}get(e){const n=gr(e._queryParams),s=e._path.toString(),i=new Vn;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ba(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Kt(l.responseText)}catch{_e("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&_e("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return{value:null,children:new Map}}function ol(t,e,n){if(x(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=A(e);t.children.has(s)||t.children.set(s,Pn());const i=t.children.get(s);e=H(e),ol(i,e,n)}}function As(t,e,n){t.value!==null?n(e,t.value):yd(t,(s,i)=>{const r=new B(e.toString()+"/"+s);As(i,r,n)})}function yd(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&le(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=10*1e3,bd=30*1e3,Cd=5*60*1e3;class Ed{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vd(e);const s=vr+(bd-vr)*Math.random();jt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;le(e,(i,r)=>{r>0&&Re(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),jt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Cd))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ee||(Ee={}));function ai(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ci(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ui(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ee.ACK_USER_WRITE,this.source=ai()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new B(e));return new Dn(O(),n,this.revert)}}else return p(A(this.path)===e,"operationForChild called for unrelated child."),new Dn(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){this.source=e,this.path=n,this.type=Ee.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new sn(this.source,O()):new sn(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ee.OVERWRITE}operationForChild(e){return x(this.path)?new ot(this.source,O(),this.snap.getImmediateChild(e)):new ot(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ee.MERGE}operationForChild(e){if(x(this.path)){const n=this.children.subtree(new B(e));return n.isEmpty()?null:n.value?new ot(this.source,O(),n.value):new At(this.source,O(),n)}else return p(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new At(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const n=A(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Id(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_d(o.childName,o.snapshotNode))}),qt(t,i,"child_removed",e,s,n),qt(t,i,"child_added",e,s,n),qt(t,i,"child_moved",r,s,n),qt(t,i,"child_changed",e,s,n),qt(t,i,"value",e,s,n),i}function qt(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Sd(t,l,a)),o.forEach(l=>{const a=Td(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Td(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Sd(t,e,n){if(e.childName==null||n.childName==null)throw Ot("Should only compare child_ events.");const s=new R(e.childName,e.snapshotNode),i=new R(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){return{eventCache:t,serverCache:e}}function Gt(t,e,n,s){return Gn(new je(e,n,s),t.serverCache)}function ll(t,e,n,s){return Gn(t.eventCache,new je(e,n,s))}function On(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function lt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs;const Nd=()=>(hs||(hs=new fe(hh)),hs);class ${constructor(e,n=Nd()){this.value=e,this.children=n}static fromObject(e){let n=new $(null);return le(e,(s,i)=>{n=n.set(new B(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:O(),value:this.value};if(x(e))return null;{const s=A(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(H(e),n);return r!=null?{path:G(new B(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const n=A(e),s=this.children.get(n);return s!==null?s.subtree(H(e)):new $(null)}}set(e,n){if(x(e))return new $(n,this.children);{const s=A(e),r=(this.children.get(s)||new $(null)).set(H(e),n),o=this.children.insert(s,r);return new $(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const n=A(e),s=this.children.get(n);if(s){const i=s.remove(H(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const n=A(e),s=this.children.get(n);return s?s.get(H(e)):null}}setTree(e,n){if(x(e))return n;{const s=A(e),r=(this.children.get(s)||new $(null)).setTree(H(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new $(this.value,o)}}fold(e){return this.fold_(O(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(G(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,O(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(x(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(H(e),G(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,O(),n)}foreachOnPath_(e,n,s){if(x(e))return this;{this.value&&s(n,this.value);const i=A(e),r=this.children.get(i);return r?r.foreachOnPath_(H(e),G(n,i),s):new $(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(G(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.writeTree_=e}static empty(){return new we(new $(null))}}function zt(t,e,n){if(x(e))return new we(new $(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ue(i,e);return r=r.updateChild(o,n),new we(t.writeTree_.set(i,r))}else{const i=new $(n),r=t.writeTree_.setTree(e,i);return new we(r)}}}function xs(t,e,n){let s=t;return le(n,(i,r)=>{s=zt(s,G(e,i),r)}),s}function br(t,e){if(x(e))return we.empty();{const n=t.writeTree_.setTree(e,new $(null));return new we(n)}}function Ps(t,e){return dt(t,e)!=null}function dt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ue(n.path,e)):null}function Cr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(z,(s,i)=>{e.push(new R(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new R(s,i.value))}),e}function He(t,e){if(x(e))return t;{const n=dt(t,e);return n!=null?new we(new $(n)):new we(t.writeTree_.subtree(e))}}function Ds(t){return t.writeTree_.isEmpty()}function xt(t,e){return al(O(),t.writeTree_,e)}function al(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=al(G(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(G(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){return dl(e,t)}function kd(t,e,n,s,i){p(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=zt(t.visibleWrites,e,n)),t.lastWriteId=s}function Rd(t,e,n,s){p(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=xs(t.visibleWrites,e,n),t.lastWriteId=s}function Ad(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function xd(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);p(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Pd(l,s.path)?i=!1:me(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Dd(t),!0;if(s.snap)t.visibleWrites=br(t.visibleWrites,s.path);else{const l=s.children;le(l,a=>{t.visibleWrites=br(t.visibleWrites,G(s.path,a))})}return!0}else return!1}function Pd(t,e){if(t.snap)return me(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&me(G(t.path,n),e))return!0;return!1}function Dd(t){t.visibleWrites=cl(t.allWrites,Od,O()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Od(t){return t.visible}function cl(t,e,n){let s=we.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)me(n,o)?(l=ue(n,o),s=zt(s,l,r.snap)):me(o,n)&&(l=ue(o,n),s=zt(s,O(),r.snap.getChild(l)));else if(r.children){if(me(n,o))l=ue(n,o),s=xs(s,l,r.children);else if(me(o,n))if(l=ue(o,n),x(l))s=xs(s,O(),r.children);else{const a=St(r.children,A(l));if(a){const c=a.getChild(H(l));s=zt(s,O(),c)}}}else throw Ot("WriteRecord should have .snap or .children")}}return s}function ul(t,e,n,s,i){if(!s&&!i){const r=dt(t.visibleWrites,e);if(r!=null)return r;{const o=He(t.visibleWrites,e);if(Ds(o))return n;if(n==null&&!Ps(o,O()))return null;{const l=n||T.EMPTY_NODE;return xt(o,l)}}}else{const r=He(t.visibleWrites,e);if(!i&&Ds(r))return n;if(!i&&n==null&&!Ps(r,O()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(me(c.path,e)||me(e,c.path))},l=cl(t.allWrites,o,e),a=n||T.EMPTY_NODE;return xt(l,a)}}}function Md(t,e,n){let s=T.EMPTY_NODE;const i=dt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(z,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=He(t.visibleWrites,e);return n.forEachChild(z,(o,l)=>{const a=xt(He(r,new B(o)),l);s=s.updateImmediateChild(o,a)}),Cr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=He(t.visibleWrites,e);return Cr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ld(t,e,n,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=G(e,n);if(Ps(t.visibleWrites,r))return null;{const o=He(t.visibleWrites,r);return Ds(o)?i.getChild(n):xt(o,i.getChild(n))}}function Fd(t,e,n,s){const i=G(e,n),r=dt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=He(t.visibleWrites,i);return xt(o,s.getNode().getImmediateChild(n))}else return null}function Ud(t,e){return dt(t.visibleWrites,e)}function Bd(t,e,n,s,i,r,o){let l;const a=He(t.visibleWrites,e),c=dt(a,O());if(c!=null)l=c;else if(n!=null)l=xt(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function $d(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function Mn(t,e,n,s){return ul(t.writeTree,t.treePath,e,n,s)}function hi(t,e){return Md(t.writeTree,t.treePath,e)}function Er(t,e,n,s){return Ld(t.writeTree,t.treePath,e,n,s)}function Ln(t,e){return Ud(t.writeTree,G(t.treePath,e))}function Wd(t,e,n,s,i,r){return Bd(t.writeTree,t.treePath,e,n,s,i,r)}function di(t,e,n){return Fd(t.writeTree,t.treePath,e,n)}function hl(t,e){return dl(G(t.treePath,e),t.writeTree)}function dl(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,tn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,en(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Rt(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,tn(s,e.snapshotNode,i.oldSnap));else throw Ot("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const fl=new Vd;class fi{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new je(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return di(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:lt(this.viewCache_),r=Wd(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){return{filter:t}}function jd(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Gd(t,e,n,s,i){const r=new Hd;let o,l;if(n.type===Ee.OVERWRITE){const c=n;c.source.fromUser?o=Os(t,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!x(c.path),o=Fn(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ee.MERGE){const c=n;c.source.fromUser?o=Qd(t,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ms(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ee.ACK_USER_WRITE){const c=n;c.revert?o=Xd(t,e,c.path,s,i,r):o=Yd(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ee.LISTEN_COMPLETE)o=Kd(t,e,n.path,s,r);else throw Ot("Unknown operation type: "+n.type);const a=r.getChanges();return zd(e,o,a),{viewCache:o,changes:a}}function zd(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=On(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(rl(On(e)))}}function _l(t,e,n,s,i,r){const o=e.eventCache;if(Ln(s,n)!=null)return e;{let l,a;if(x(n))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=lt(e),h=c instanceof T?c:T.EMPTY_NODE,u=hi(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Mn(s,lt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=A(n);if(c===".priority"){p(qe(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=Er(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=H(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Er(s,n,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=di(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return Gt(e,l,o.isFullyInitialized()||x(n),t.filter.filtersNodes())}}function Fn(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(x(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),f,null)}else{const f=A(n);if(!a.isCompleteForPath(n)&&qe(n)>1)return e;const _=H(n),m=a.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=h.updatePriority(a.getNode(),m):c=h.updateChild(a.getNode(),f,m,_,fl,null)}const u=ll(e,c,a.isFullyInitialized()||x(n),h.filtersNodes()),d=new fi(i,u,r);return _l(t,u,n,i,d,l)}function Os(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new fi(i,e,r);if(x(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Gt(e,c,!0,t.filter.filtersNodes());else{const u=A(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Gt(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=H(n),f=l.getNode().getImmediateChild(u);let _;if(x(d))_=s;else{const g=h.getCompleteChild(u);g!=null?ni(d)===".priority"&&g.getChild(Jo(d)).isEmpty()?_=g:_=g.updateChild(d,s):_=T.EMPTY_NODE}if(f.equals(_))a=e;else{const g=t.filter.updateChild(l.getNode(),u,_,d,h,o);a=Gt(e,g,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function wr(t,e){return t.eventCache.isCompleteForChild(e)}function Qd(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=G(n,a);wr(e,A(h))&&(l=Os(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=G(n,a);wr(e,A(h))||(l=Os(t,l,h,c,i,r,o))}),l}function Ir(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ms(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;x(n)?c=s:c=new $(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=Ir(t,f,d);a=Fn(t,a,new B(u),_,i,r,o,l)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),g=Ir(t,_,d);a=Fn(t,a,new B(u),g,i,r,o,l)}}),a}function Yd(t,e,n,s,i,r,o){if(Ln(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(x(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Fn(t,e,n,a.getNode().getChild(n),i,r,l,o);if(x(n)){let c=new $(null);return a.getNode().forEachChild(Et,(h,u)=>{c=c.set(new B(h),u)}),Ms(t,e,n,c,i,r,l,o)}else return e}else{let c=new $(null);return s.foreach((h,u)=>{const d=G(n,h);a.isCompleteForPath(d)&&(c=c.set(h,a.getNode().getChild(d)))}),Ms(t,e,n,c,i,r,l,o)}}function Kd(t,e,n,s,i){const r=e.serverCache,o=ll(e,r.getNode(),r.isFullyInitialized()||x(n),r.isFiltered());return _l(t,o,n,s,fl,i)}function Xd(t,e,n,s,i,r){let o;if(Ln(s,n)!=null)return e;{const l=new fi(s,e,i),a=e.eventCache.getNode();let c;if(x(n)||A(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Mn(s,lt(e));else{const u=e.serverCache.getNode();p(u instanceof T,"serverChildren would be complete if leaf node"),h=hi(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=A(n);let u=di(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,H(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,T.EMPTY_NODE,H(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mn(s,lt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ln(s,O())!=null,Gt(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new oi(s.getIndex()),r=md(s);this.processor_=qd(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,l.getNode(),null),h=new je(a,o.isFullyInitialized(),i.filtersNodes()),u=new je(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gn(u,h),this.eventGenerator_=new wd(this.query_)}get query(){return this.query_}}function Zd(t){return t.viewCache_.serverCache.getNode()}function ef(t){return On(t.viewCache_)}function tf(t,e){const n=lt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!x(e)&&!n.getImmediateChild(A(e)).isEmpty())?n.getChild(e):null}function Tr(t){return t.eventRegistrations_.length===0}function nf(t,e){t.eventRegistrations_.push(e)}function Sr(t,e,n){const s=[];if(n){p(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Nr(t,e,n,s){e.type===Ee.MERGE&&e.source.queryId!==null&&(p(lt(t.viewCache_),"We should always have a full cache before handling merges"),p(On(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Gd(t.processor_,i,e,n,s);return jd(t.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,pl(t,r.changes,r.viewCache.eventCache.getNode(),null)}function sf(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(z,(r,o)=>{s.push(Rt(r,o))}),n.isFullyInitialized()&&s.push(rl(n.getNode())),pl(t,s,n.getNode(),e)}function pl(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Id(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un;class ml{constructor(){this.views=new Map}}function rf(t){p(!Un,"__referenceConstructor has already been defined"),Un=t}function of(){return p(Un,"Reference.ts has not been loaded"),Un}function lf(t){return t.views.size===0}function _i(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),Nr(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Nr(o,e,n,s));return r}}function gl(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Mn(n,i?s:null),a=!1;l?a=!0:s instanceof T?(l=hi(n,s),a=!1):(l=T.EMPTY_NODE,a=!1);const c=Gn(new je(l,a,!1),new je(s,i,!1));return new Jd(e,c)}return o}function af(t,e,n,s,i,r){const o=gl(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nf(o,n),sf(o,n)}function cf(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ge(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Sr(c,n,s)),Tr(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Sr(a,n,s)),Tr(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ge(t)&&r.push(new(of())(e._repo,e._path)),{removed:r,events:o}}function yl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ve(t,e){let n=null;for(const s of t.views.values())n=n||tf(s,e);return n}function vl(t,e){if(e._queryParams.loadsAllData())return Qn(t);{const s=e._queryIdentifier;return t.views.get(s)}}function bl(t,e){return vl(t,e)!=null}function Ge(t){return Qn(t)!=null}function Qn(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;function uf(t){p(!Bn,"__referenceConstructor has already been defined"),Bn=t}function hf(){return p(Bn,"Reference.ts has not been loaded"),Bn}let df=1;class kr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=$d(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ff(t,e,n,s,i){return kd(t.pendingWriteTree_,e,n,s,i),i?Lt(t,new ot(ai(),e,n)):[]}function _f(t,e,n,s){Rd(t.pendingWriteTree_,e,n,s);const i=$.fromObject(n);return Lt(t,new At(ai(),e,i))}function Ze(t,e,n=!1){const s=Ad(t.pendingWriteTree_,e);if(xd(t.pendingWriteTree_,e)){let r=new $(null);return s.snap!=null?r=r.set(O(),!0):le(s.children,o=>{r=r.set(new B(o),!0)}),Lt(t,new Dn(s.path,r,n))}else return[]}function un(t,e,n){return Lt(t,new ot(ci(),e,n))}function pf(t,e,n){const s=$.fromObject(n);return Lt(t,new At(ci(),e,s))}function mf(t,e){return Lt(t,new sn(ci(),e))}function gf(t,e,n){const s=pi(t,n);if(s){const i=mi(s),r=i.path,o=i.queryId,l=ue(r,e),a=new sn(ui(o),l);return gi(t,r,a)}else return[]}function $n(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||bl(o,e))){const a=cf(o,e,n,s);lf(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,f)=>Ge(f));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=bf(d);for(let _=0;_<f.length;++_){const g=f[_],m=g.query,v=Tl(t,g);t.listenProvider_.startListening(Qt(m),rn(t,m),v.hashFn,v.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(Qt(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(Yn(d));t.listenProvider_.stopListening(Qt(d),f)}))}Cf(t,c)}return l}function Cl(t,e,n,s){const i=pi(t,s);if(i!=null){const r=mi(i),o=r.path,l=r.queryId,a=ue(o,e),c=new ot(ui(l),a,n);return gi(t,o,c)}else return[]}function yf(t,e,n,s){const i=pi(t,s);if(i){const r=mi(i),o=r.path,l=r.queryId,a=ue(o,e),c=$.fromObject(n),h=new At(ui(l),a,c);return gi(t,o,h)}else return[]}function Ls(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=ue(d,i);r=r||Ve(f,_),o=o||Ge(f)});let l=t.syncPointTree_.get(i);l?(o=o||Ge(l),r=r||Ve(l,O())):(l=new ml,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=T.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,_)=>{const g=Ve(_,O());g&&(r=r.updateImmediateChild(f,g))}));const c=bl(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Yn(e);p(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Ef();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const h=zn(t.pendingWriteTree_,i);let u=af(l,e,n,h,r,a);if(!c&&!o&&!s){const d=vl(l,e);u=u.concat(wf(t,e,d))}return u}function El(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ue(o,e),c=Ve(l,a);if(c)return c});return ul(i,e,r,n,!0)}function vf(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=ue(c,n);s=s||Ve(h,u)});let i=t.syncPointTree_.get(n);i?s=s||Ve(i,O()):(i=new ml,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new je(s,!0,!1):null,l=zn(t.pendingWriteTree_,e._path),a=gl(i,e,l,r?o.getNode():T.EMPTY_NODE,r);return ef(a)}function Lt(t,e){return wl(e,t.syncPointTree_,null,zn(t.pendingWriteTree_,O()))}function wl(t,e,n,s){if(x(t.path))return Il(t,e,n,s);{const i=e.get(O());n==null&&i!=null&&(n=Ve(i,O()));let r=[];const o=A(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=hl(s,o);r=r.concat(wl(l,a,c,h))}return i&&(r=r.concat(_i(i,t,s,n))),r}}function Il(t,e,n,s){const i=e.get(O());n==null&&i!=null&&(n=Ve(i,O()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=hl(s,o),h=t.operationForChild(o);h&&(r=r.concat(Il(h,l,a,c)))}),i&&(r=r.concat(_i(i,t,s,n))),r}function Tl(t,e){const n=e.query,s=rn(t,n);return{hashFn:()=>(Zd(e)||T.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?gf(t,n._path,s):mf(t,n._path);{const r=_h(i,n);return $n(t,n,null,r)}}}}function rn(t,e){const n=Yn(e);return t.queryToTagMap.get(n)}function Yn(t){return t._path.toString()+"$"+t._queryIdentifier}function pi(t,e){return t.tagToQueryMap.get(e)}function mi(t){const e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new B(t.substr(0,e))}}function gi(t,e,n){const s=t.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=zn(t.pendingWriteTree_,e);return _i(s,n,i,null)}function bf(t){return t.fold((e,n,s)=>{if(n&&Ge(n))return[Qn(n)];{let i=[];return n&&(i=yl(n)),le(s,(r,o)=>{i=i.concat(o)}),i}})}function Qt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hf())(t._repo,t._path):t}function Cf(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Yn(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ef(){return df++}function wf(t,e,n){const s=e._path,i=rn(t,e),r=Tl(t,n),o=t.listenProvider_.startListening(Qt(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)p(!Ge(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!x(c)&&h&&Ge(h))return[Qn(h).query];{let d=[];return h&&(d=d.concat(yl(h).map(f=>f.query))),le(u,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(Qt(h),rn(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yi(n)}node(){return this.node_}}class vi{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=G(this.path_,e);return new vi(this.syncTree_,n)}node(){return El(this.syncTree_,this.path_)}}const If=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Rr=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Tf(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Sf(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Tf=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},Sf=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Sl=function(t,e,n,s){return bi(e,new vi(n,t),s)},Nf=function(t,e,n){return bi(t,new yi(e),n)};function bi(t,e,n){const s=t.getPriority().val(),i=Rr(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Rr(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Z(l,te(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Z(i))),o.forEachChild(z,(l,a)=>{const c=bi(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ei(t,e){let n=e instanceof B?e:new B(e),s=t,i=A(n);for(;i!==null;){const r=St(s.node.children,i)||{children:{},childCount:0};s=new Ci(i,s,r),n=H(n),i=A(n)}return s}function Ft(t){return t.node.value}function Nl(t,e){t.node.value=e,Fs(t)}function kl(t){return t.node.childCount>0}function kf(t){return Ft(t)===void 0&&!kl(t)}function Kn(t,e){le(t.node.children,(n,s)=>{e(new Ci(n,t,s))})}function Rl(t,e,n,s){n&&!s&&e(t),Kn(t,i=>{Rl(i,e,!0,s)}),n&&s&&e(t)}function Rf(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function hn(t){return new B(t.parent===null?t.name:hn(t.parent)+"/"+t.name)}function Fs(t){t.parent!==null&&Af(t.parent,t.name,t)}function Af(t,e,n){const s=kf(n),i=Re(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fs(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fs(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=/[\[\].#$\/\u0000-\u001F\u007F]/,Pf=/[\[\].#$\u0000-\u001F\u007F]/,ds=10*1024*1024,wi=function(t){return typeof t=="string"&&t.length!==0&&!xf.test(t)},Al=function(t){return typeof t=="string"&&t.length!==0&&!Pf.test(t)},Df=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Al(t)},Of=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Xs(t)||t&&typeof t=="object"&&Re(t,".sv")},Ii=function(t,e,n){const s=n instanceof B?new Qh(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xe(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xe(s)+" with contents = "+e.toString());if(Xs(e))throw new Error(t+"contains "+e.toString()+" "+Xe(s));if(typeof e=="string"&&e.length>ds/3&&qn(e)>ds)throw new Error(t+"contains a string greater than "+ds+" utf8 bytes "+Xe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(le(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wi(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Yh(s,o),Ii(t,l,s),Kh(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xe(s)+" in addition to actual children.")}},Mf=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Zt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!wi(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(zh);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&me(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Lf=function(t,e,n,s){if(s&&e===void 0)return;const i=js(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];le(e,(o,l)=>{const a=new B(o);if(Ii(i,l,G(n,a)),ni(a)===".priority"&&!Of(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Mf(i,r)},xl=function(t,e,n,s){if(!(s&&n===void 0)&&!Al(n))throw new Error(js(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ff=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xl(t,e,n,s)},Uf=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Df(n))throw new Error(js(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ti(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!si(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Pl(t,e,n){Ti(t,n),Dl(t,s=>si(s,e))}function ke(t,e,n){Ti(t,n),Dl(t,s=>me(s,e)||me(e,s))}function Dl(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?($f(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $f(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();tt&&ie("event: "+n.toString()),Mt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="repo_interrupt",Hf=25;class Vf{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bf,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pn(),this.transactionQueueTree_=new Ci,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qf(t,e,n){if(t.stats_=ei(t.repoInfo_),t.forceRestClient_||yh())t.server_=new xn(t.repoInfo_,(s,i,r,o)=>{Ar(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xr(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{X(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Oe(t.repoInfo_,e,(s,i,r,o)=>{Ar(t,s,i,r,o)},s=>{xr(t,s)},s=>{Gf(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=wh(t.repoInfo_,()=>new Ed(t.stats_,t.server_)),t.infoData_=new gd,t.infoSyncTree_=new kr({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=un(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ni(t,"connected",!1),t.serverSyncTree_=new kr({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ke(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function jf(t){const n=t.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Si(t){return If({timestamp:jf(t)})}function Ar(t,e,n,s,i){t.dataUpdateCount++;const r=new B(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Tn(n,c=>te(c));o=yf(t.serverSyncTree_,r,a,i)}else{const a=te(n);o=Cl(t.serverSyncTree_,r,a,i)}else if(s){const a=Tn(n,c=>te(c));o=pf(t.serverSyncTree_,r,a)}else{const a=te(n);o=un(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=on(t,r)),ke(t.eventQueue_,l,o)}function xr(t,e){Ni(t,"connected",e),e===!1&&Yf(t)}function Gf(t,e){le(e,(n,s)=>{Ni(t,n,s)})}function Ni(t,e,n){const s=new B("/.info/"+e),i=te(n);t.infoData_.updateSnapshot(s,i);const r=un(t.infoSyncTree_,s,i);ke(t.eventQueue_,s,r)}function Ol(t){return t.nextWriteId_++}function zf(t,e,n){const s=vf(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=te(i).withIndex(e._queryParams.getIndex());Ls(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=un(t.serverSyncTree_,e._path,r);else{const l=rn(t.serverSyncTree_,e);o=Cl(t.serverSyncTree_,e._path,r,l)}return ke(t.eventQueue_,e._path,o),$n(t.serverSyncTree_,e,n,null,!0),r},i=>(Xn(t,"get for query "+X(e)+" failed: "+i),Promise.reject(new Error(i))))}function Qf(t,e,n,s){Xn(t,"update",{path:e.toString(),value:n});let i=!0;const r=Si(t),o={};if(le(n,(l,a)=>{i=!1,o[l]=Sl(G(e,l),te(a),t.serverSyncTree_,r)}),i)ie("update() called with empty data.  Don't do anything."),Dr(t,s,"ok",void 0);else{const l=Ol(t),a=_f(t.serverSyncTree_,e,o,l);Ti(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,h)=>{const u=c==="ok";u||_e("update at "+e+" failed: "+c);const d=Ze(t.serverSyncTree_,l,!u),f=d.length>0?on(t,e):e;ke(t.eventQueue_,f,d),Dr(t,s,c,h)}),le(n,c=>{const h=Bl(t,G(e,c));on(t,h)}),ke(t.eventQueue_,e,[])}}function Yf(t){Xn(t,"onDisconnectEvents");const e=Si(t),n=Pn();As(t.onDisconnect_,O(),(i,r)=>{const o=Sl(i,r,t.serverSyncTree_,e);ol(n,i,o)});let s=[];As(n,O(),(i,r)=>{s=s.concat(un(t.serverSyncTree_,i,r));const o=Bl(t,i);on(t,o)}),t.onDisconnect_=Pn(),ke(t.eventQueue_,O(),s)}function Kf(t,e,n){let s;A(e._path)===".info"?s=Ls(t.infoSyncTree_,e,n):s=Ls(t.serverSyncTree_,e,n),Pl(t.eventQueue_,e._path,s)}function Pr(t,e,n){let s;A(e._path)===".info"?s=$n(t.infoSyncTree_,e,n):s=$n(t.serverSyncTree_,e,n),Pl(t.eventQueue_,e._path,s)}function Xf(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wf)}function Xn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ie(n,...e)}function Dr(t,e,n,s){e&&Mt(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ml(t,e,n){return El(t.serverSyncTree_,e,n)||T.EMPTY_NODE}function ki(t,e=t.transactionQueueTree_){if(e||Jn(t,e),Ft(e)){const n=Fl(t,e);p(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jf(t,hn(e),n)}else kl(e)&&Kn(e,n=>{ki(t,n)})}function Jf(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ml(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];p(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ue(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Xn(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Ze(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Jn(t,Ei(t.transactionQueueTree_,e)),ki(t,t.transactionQueueTree_),ke(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Mt(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{_e("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}on(t,e)}},o)}function on(t,e){const n=Ll(t,e),s=hn(n),i=Fl(t,n);return Zf(t,i,s),s}function Zf(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ue(n,a.path);let h=!1,u;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(Ze(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Hf)h=!0,u="maxretry",i=i.concat(Ze(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Ml(t,a.path,o);a.currentInputSnapshot=d;const f=e[l].update(d.val());if(f!==void 0){Ii("transaction failed: Data returned ",f,a.path);let _=te(f);typeof f=="object"&&f!=null&&Re(f,".priority")||(_=_.updatePriority(d.getPriority()));const m=a.currentWriteId,v=Si(t),k=Nf(_,d,v);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=k,a.currentWriteId=Ol(t),o.splice(o.indexOf(m),1),i=i.concat(ff(t.serverSyncTree_,a.path,k,a.currentWriteId,a.applyLocally)),i=i.concat(Ze(t.serverSyncTree_,m,!0))}else h=!0,u="nodata",i=i.concat(Ze(t.serverSyncTree_,a.currentWriteId,!0))}ke(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Jn(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Mt(s[l]);ki(t,t.transactionQueueTree_)}function Ll(t,e){let n,s=t.transactionQueueTree_;for(n=A(e);n!==null&&Ft(s)===void 0;)s=Ei(s,n),e=H(e),n=A(e);return s}function Fl(t,e){const n=[];return Ul(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ul(t,e,n){const s=Ft(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Kn(e,i=>{Ul(t,i,n)})}function Jn(t,e){const n=Ft(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Nl(e,n.length>0?n:void 0)}Kn(e,s=>{Jn(t,s)})}function Bl(t,e){const n=hn(Ll(t,e)),s=Ei(t.transactionQueueTree_,e);return Rf(s,i=>{fs(t,i)}),fs(t,s),Rl(s,i=>{fs(t,i)}),n}function fs(t,e){const n=Ft(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(p(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ze(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Nl(e,void 0):n.length=r+1,ke(t.eventQueue_,hn(e),i);for(let o=0;o<s.length;o++)Mt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function t_(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):_e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Or=function(t,e){const n=n_(t),s=n.namespace;n.domain==="firebase.com"&&Me(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ch();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Vo(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new B(n.pathString)}},n_=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=e_(t.substring(h,u)));const d=t_(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+X(this.snapshot.exportVal())}}class Wl{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return x(this._path)?null:ni(this._path)}get ref(){return new Ae(this._repo,this._path)}get _queryIdentifier(){const e=yr(this._queryParams),n=Js(e);return n==="{}"?"default":n}get _queryObject(){return yr(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof Ri))return!1;const n=this._repo===e._repo,s=si(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gh(this._path)}}class Ae extends Ri{constructor(e,n){super(e,n,new li,!1)}get parent(){const e=Jo(this._path);return e===null?null:new Ae(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pt{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new B(e),s=J(this.ref,e);return new Pt(this._node.getChild(n),s,z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Pt(i,J(this.ref,s),z)))}hasChild(e){const n=new B(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vl(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?J(t._root,e):t._root}function J(t,e){return t=Ie(t),A(t._path)===null?Ff("child","path",e,!1):xl("child","path",e,!1),new Ae(t._repo,G(t._path,e))}function s_(t,e){Lf("update",e,t._path,!1);const n=new Vn;return Qf(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function be(t){t=Ie(t);const e=new Hl(()=>{}),n=new Zn(e);return zf(t._repo,t,n).then(s=>new Pt(s,new Ae(t._repo,t._path),t._queryParams.getIndex()))}class Zn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new $l("value",this,new Pt(e.snapshotNode,new Ae(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wl(this,e,n):null}matches(e){return e instanceof Zn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ai{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wl(this,e,n):null}createEvent(e,n){p(e.childName!=null,"Child events should have a childName.");const s=J(new Ae(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new $l(e.type,this,new Pt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ai?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function i_(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(h,u)=>{Pr(t._repo,t,l),a(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Hl(n,r||void 0),l=e==="value"?new Zn(o):new Ai(e,o);return Kf(t._repo,t,l),()=>Pr(t._repo,t,l)}function Mr(t,e,n,s){return i_(t,"value",e,n,s)}rf(Ae);uf(Ae);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="FIREBASE_DATABASE_EMULATOR_HOST",Us={};let o_=!1;function l_(t,e,n,s){t.repoInfo_=new Vo(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function a_(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Or(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[r_]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Or(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new Ct(Ct.OWNER):new bh(t.name,t.options,e);Uf("Invalid Firebase Database URL",o),x(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const u=u_(l,t,h,new vh(t.name,n));return new h_(u,t)}function c_(t,e){const n=Us[e];(!n||n[t.key]!==t)&&Me(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Xf(t),delete n[t.key]}function u_(t,e,n,s){let i=Us[e.name];i||(i={},Us[e.name]=i);let r=i[t.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Vf(t,o_,n,s),i[t.toURLString()]=r,r}class h_{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ae(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(c_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function d_(t=Qs(),e){const n=zs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=qs("database");s&&ql(n,...s)}return n}function ql(t,e,n,s={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ct(Ct.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:lo(s.mockUserToken,t.app.options.projectId);r=new Ct(o)}l_(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){ih(mo),Nt(new nt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return a_(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ne(tr,nr,t),Ne(tr,nr,"esm2017")}Oe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Oe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};f_();const __="/assets/firstname-icon-4e5162ed.svg",p_="/assets/lastname-icon-70fc669b.svg",jl="/assets/student-icon-7877a27a.svg";function m_(t){let e,n,s;return{c(){e=N("input"),S(e,"placeholder",""),S(e,"type","number"),S(e,"class","rounded-[1vh] border-primary-blue bg-beige absolute top-0 left-0 w-full h-full px-[6vh] color-primary-blue outline-none cool-border-bottom peer svelte-1w3vv0x")},m(i,r){w(i,e,r),bn(e,t[0]),n||(s=he(e,"input",t[6]),n=!0)},p(i,r){r&1&&Zr(e.value)!==i[0]&&bn(e,i[0])},d(i){i&&C(e),n=!1,s()}}}function g_(t){let e,n,s;return{c(){e=N("input"),S(e,"placeholder",""),S(e,"type","text"),S(e,"class","rounded-[1vh] border-primary-blue bg-beige absolute top-0 left-0 w-full h-full px-[6vh] color-primary-blue outline-none cool-border-bottom peer svelte-1w3vv0x")},m(i,r){w(i,e,r),bn(e,t[0]),n||(s=he(e,"input",t[5]),n=!0)},p(i,r){r&1&&e.value!==i[0]&&bn(e,i[0])},d(i){i&&C(e),n=!1,s()}}}function y_(t){let e,n,s,i,r,o,l;function a(u,d){if(u[3]=="text")return g_;if(u[3]=="number")return m_}let c=a(t),h=c&&c(t);return{c(){e=N("div"),n=N("img"),i=L(),h&&h.c(),r=L(),o=N("p"),l=M(t[1]),It(n.src,s=t[2])||S(n,"src",s),S(n,"class","z-10 absolute top-1/2 left-[1vh] -translate-y-1/2 w-[4vh]"),S(n,"alt",""),S(o,"class","absolute z-10 scale-75 text-[white] top-4 left-[6vh] origin-[0] -translate-y-4 transition-transform ease-in-out pointer-events-none peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 "),S(e,"class","w-[250px] h-[50px] sm:w-[400px] sm:h-[70px] relative text-primary-blue drop-shadow-neubrutalism")},m(u,d){w(u,e,d),y(e,n),y(e,i),h&&h.m(e,null),y(e,r),y(e,o),y(o,l)},p(u,[d]){d&4&&!It(n.src,s=u[2])&&S(n,"src",s),c===(c=a(u))&&h?h.p(u,d):(h&&h.d(1),h=c&&c(u),h&&(h.c(),h.m(e,r))),d&2&&ce(l,u[1])},i:Q,o:Q,d(u){u&&C(e),h&&h.d()}}}function v_(t,e,n){let{label:s}=e,{value:i}=e,{valueUnformatted:r=""}=e,{icon:o}=e,{type:l="text"}=e;function a(){r=this.value,n(0,r)}function c(){r=Zr(this.value),n(0,r)}return t.$$set=h=>{"label"in h&&n(1,s=h.label),"value"in h&&n(4,i=h.value),"valueUnformatted"in h&&n(0,r=h.valueUnformatted),"icon"in h&&n(2,o=h.icon),"type"in h&&n(3,l=h.type)},t.$$.update=()=>{t.$$.dirty&1&&n(4,i=r.toLowerCase())},[r,s,o,l,i,a,c]}class wt extends ve{constructor(e){super(),ye(this,e,v_,y_,ge,{label:1,value:4,valueUnformatted:0,icon:2,type:3})}}function b_(t){let e,n,s,i;const r=t[2].default,o=ea(r,t,t[1],null);return{c(){e=N("button"),o&&o.c(),S(e,"class","bg-beige rounded-full drop-shadow-neubrutalism py-[2vh] px-[5vw] text-primary-blue w-[90%]")},m(l,a){w(l,e,a),o&&o.m(e,null),n=!0,s||(i=he(e,"click",t[3]),s=!0)},p(l,[a]){o&&o.p&&(!n||a&2)&&na(o,r,l,l[1],n?ta(r,l[1],a,null):sa(l[1]),null)},i(l){n||(P(o,l),n=!0)},o(l){F(o,l),n=!1},d(l){l&&C(e),o&&o.d(l),s=!1,i()}}}function C_(t,e,n){let{$$slots:s={},$$scope:i}=e;const r=Dt(),o=()=>r("click");return t.$$set=l=>{"$$scope"in l&&n(1,i=l.$$scope)},[r,i,s,o]}class Gl extends ve{constructor(e){super(),ye(this,e,C_,b_,ge,{})}}function E_(t){let e;return{c(){e=M("Connexion !")},m(n,s){w(n,e,s)},d(n){n&&C(e)}}}function w_(t){let e,n,s,i,r,o,l,a,c,h,u,d;function f(E){t[4](E)}let _={icon:__,label:"Prénom"};t[0]!==void 0&&(_.value=t[0]),n=new wt({props:_}),Se.push(()=>Be(n,"value",f));function g(E){t[5](E)}let m={icon:p_,label:"Nom"};t[1]!==void 0&&(m.value=t[1]),r=new wt({props:m}),Se.push(()=>Be(r,"value",g));function v(E){t[6](E)}let k={icon:jl,label:"Ton numéro étudiant"};return t[2]!==void 0&&(k.value=t[2]),a=new wt({props:k}),Se.push(()=>Be(a,"value",v)),u=new Gl({props:{$$slots:{default:[E_]},$$scope:{ctx:t}}}),u.$on("click",t[7]),{c(){e=N("div"),re(n.$$.fragment),i=L(),re(r.$$.fragment),l=L(),re(a.$$.fragment),h=L(),re(u.$$.fragment),S(e,"class","flex flex-col justify-around items-center text-beige grow ")},m(E,I){w(E,e,I),ne(n,e,null),y(e,i),ne(r,e,null),y(e,l),ne(a,e,null),y(e,h),ne(u,e,null),d=!0},p(E,[I]){const V={};!s&&I&1&&(s=!0,V.value=E[0],Ue(()=>s=!1)),n.$set(V);const U={};!o&&I&2&&(o=!0,U.value=E[1],Ue(()=>o=!1)),r.$set(U);const q={};!c&&I&4&&(c=!0,q.value=E[2],Ue(()=>c=!1)),a.$set(q);const K={};I&256&&(K.$$scope={dirty:I,ctx:E}),u.$set(K)},i(E){d||(P(n.$$.fragment,E),P(r.$$.fragment,E),P(a.$$.fragment,E),P(u.$$.fragment,E),d=!0)},o(E){F(n.$$.fragment,E),F(r.$$.fragment,E),F(a.$$.fragment,E),F(u.$$.fragment,E),d=!1},d(E){E&&C(e),se(n),se(r),se(a),se(u)}}}function I_(t,e,n){const s=Dt();let i="",r="",o="";function l(u){i=u,n(0,i)}function a(u){r=u,n(1,r)}function c(u){o=u,n(2,o)}return[i,r,o,s,l,a,c,()=>s("submit",{firstName:i,lastName:r,studentNumber:o})]}class T_ extends ve{constructor(e){super(),ye(this,e,I_,w_,ge,{})}}function S_(t){const e=t-1;return e*e*e+1}function Wn(t,{delay:e=0,duration:n=400,easing:s=S_}={}){const i=getComputedStyle(t),r=+i.opacity,o=parseFloat(i.height),l=parseFloat(i.paddingTop),a=parseFloat(i.paddingBottom),c=parseFloat(i.marginTop),h=parseFloat(i.marginBottom),u=parseFloat(i.borderTopWidth),d=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:s,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*r};height: ${f*o}px;padding-top: ${f*l}px;padding-bottom: ${f*a}px;margin-top: ${f*c}px;margin-bottom: ${f*h}px;border-top-width: ${f*u}px;border-bottom-width: ${f*d}px;`}}function Lr(t,e,n){const s=t.slice();return s[8]=e[n],s}function Fr(t){let e,n,s=t[1],i=[];for(let o=0;o<s.length;o+=1)i[o]=Ur(Lr(t,s,o));const r=o=>F(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=aa()},m(o,l){for(let a=0;a<i.length;a+=1)i[a].m(o,l);w(o,e,l),n=!0},p(o,l){if(l&7){s=o[1];let a;for(a=0;a<s.length;a+=1){const c=Lr(o,s,a);i[a]?(i[a].p(c,l),P(i[a],1)):(i[a]=Ur(c),i[a].c(),P(i[a],1),i[a].m(e.parentNode,e))}for(at(),a=s.length;a<i.length;a+=1)r(a);ct()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)P(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)F(i[l]);n=!1},d(o){Hn(i,o),o&&C(e)}}}function Ur(t){let e,n=t[8]+"",s,i,r,o,l,a;function c(){return t[4](t[8])}function h(){return t[5](t[8])}return{c(){e=N("p"),s=M(n),i=L(),S(e,"class","grow-0 border-t-[1px] border-primary-blue hover:text-white hover:bg-primary-blue cursor-pointer")},m(u,d){w(u,e,d),y(e,s),y(e,i),o=!0,l||(a=[he(e,"click",Di(c)),he(e,"keydown",Di(h))],l=!0)},p(u,d){t=u,(!o||d&2)&&n!==(n=t[8]+"")&&ce(s,n)},i(u){o||(Tt(()=>{r||(r=wn(e,Wn,{duration:200},!0)),r.run(1)}),o=!0)},o(u){r||(r=wn(e,Wn,{duration:200},!1)),r.run(0),o=!1},d(u){u&&C(e),u&&r&&r.end(),l=!1,Le(a)}}}function N_(t){let e,n,s=(t[0]||"Choisir")+"",i,r,o,l,a,c=t[2]&&Fr(t);return{c(){e=N("div"),n=N("p"),i=M(s),r=L(),c&&c.c(),S(n,"class","cursor-pointer"),S(e,"class","w-[250px] sm:w-[400px] py-[2vh] relative text-primary-blue drop-shadow-neubrutalism flex flex-col bg-beige justify-center text-primary-blue px-[1vw]")},m(h,u){w(h,e,u),y(e,n),y(n,i),y(e,r),c&&c.m(e,null),o=!0,l||(a=[he(e,"click",t[6]),he(e,"keydown",t[7])],l=!0)},p(h,[u]){(!o||u&1)&&s!==(s=(h[0]||"Choisir")+"")&&ce(i,s),h[2]?c?(c.p(h,u),u&4&&P(c,1)):(c=Fr(h),c.c(),P(c,1),c.m(e,null)):c&&(at(),F(c,1,1,()=>{c=null}),ct())},i(h){o||(P(c),o=!0)},o(h){F(c),o=!1},d(h){h&&C(e),c&&c.d(),l=!1,Le(a)}}}function k_(t,e,n){let{choices:s}=e,{value:i}=e,{label:r}=e,o=!1;const l=u=>{n(0,i=u.toLowerCase()),n(2,o=!1)},a=u=>{n(0,i=u.toLowerCase()),n(2,o=!1)},c=()=>n(2,o=!o),h=()=>n(2,o=!o);return t.$$set=u=>{"choices"in u&&n(1,s=u.choices),"value"in u&&n(0,i=u.value),"label"in u&&n(3,r=u.label)},[i,s,o,r,l,a,c,h]}class R_ extends ve{constructor(e){super(),ye(this,e,k_,N_,ge,{choices:1,value:0,label:3})}}function Br(t,e,n){const s=t.slice();return s[5]=e[n],s[6]=e,s[7]=n,s}function $r(t){let e,n,s,i=t[5]+"",r,o,l,a,c,h;function u(){t[3].call(n,t[7])}return{c(){e=N("p"),n=N("input"),s=L(),r=M(i),o=L(),S(n,"type","checkbox"),S(e,"class","first:border-0 grow-0 border-t-[1px] border-primary-blue hover:text-white hover:bg-primary-blue cursor-pointer")},m(d,f){w(d,e,f),y(e,n),n.checked=t[1][t[7]],y(e,s),y(e,r),y(e,o),a=!0,c||(h=[he(n,"change",u),he(n,"change",t[4])],c=!0)},p(d,f){t=d,f&2&&(n.checked=t[1][t[7]]),(!a||f&1)&&i!==(i=t[5]+"")&&ce(r,i)},i(d){a||(Tt(()=>{l||(l=wn(e,Wn,{duration:200},!0)),l.run(1)}),a=!0)},o(d){l||(l=wn(e,Wn,{duration:200},!1)),l.run(0),a=!1},d(d){d&&C(e),d&&l&&l.end(),c=!1,Le(h)}}}function A_(t){let e,n,s=t[0],i=[];for(let o=0;o<s.length;o+=1)i[o]=$r(Br(t,s,o));const r=o=>F(i[o],1,1,()=>{i[o]=null});return{c(){e=N("div");for(let o=0;o<i.length;o+=1)i[o].c();S(e,"class","w-[250px] sm:w-[400px] py-[2vh] relative text-primary-blue drop-shadow-neubrutalism flex flex-col bg-beige justify-center text-primary-blue px-[1vw]")},m(o,l){w(o,e,l);for(let a=0;a<i.length;a+=1)i[a].m(e,null);n=!0},p(o,[l]){if(l&3){s=o[0];let a;for(a=0;a<s.length;a+=1){const c=Br(o,s,a);i[a]?(i[a].p(c,l),P(i[a],1)):(i[a]=$r(c),i[a].c(),P(i[a],1),i[a].m(e,null))}for(at(),a=s.length;a<i.length;a+=1)r(a);ct()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)P(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)F(i[l]);n=!1},d(o){o&&C(e),Hn(i,o)}}}function x_(t,e,n){let{choices:s}=e,{value:i}=e,r=s.map(()=>!1);function o(a){r[a]=this.checked,n(1,r)}const l=()=>n(1,r);return t.$$set=a=>{"choices"in a&&n(0,s=a.choices),"value"in a&&n(2,i=a.value)},t.$$.update=()=>{t.$$.dirty&7&&(n(2,i=s.filter((a,c)=>r[c])),console.log(i))},[s,r,i,o,l]}class P_ extends ve{constructor(e){super(),ye(this,e,x_,A_,ge,{choices:0,value:2})}}function Wr(t,e,n){const s=t.slice();return s[3]=e[n],s}function Hr(t){let e,n=t[3]+"",s,i,r,o;function l(){return t[2](t[3])}return{c(){e=N("button"),s=M(n),i=L(),S(e,"class","bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full my-[3%] drop-shadow-neubrutalism w-[90%]")},m(a,c){w(a,e,c),y(e,s),y(e,i),r||(o=he(e,"click",l),r=!0)},p(a,c){t=a,c&1&&n!==(n=t[3]+"")&&ce(s,n)},d(a){a&&C(e),r=!1,o()}}}function D_(t){let e,n,s,i=t[0],r=[];for(let o=0;o<i.length;o+=1)r[o]=Hr(Wr(t,i,o));return{c(){e=N("main"),n=N("p"),n.innerHTML=`Trois parcours possible, trois thèmes de questions. Le premier à finir un parcours gagne un gros lot !<br/>
        - <u>Informatique</u>, c&#39;est le parcours le plus dur, avec des questions sur les langages de programmation, les algorithmes, les bases de données, la cybersécuritée...
        - <u>Pop culture</u>, c&#39;est de culture geek, des questions sur des films, des jeux vidéos, des musiques, Internet...<br/>
        - Et <u>Istic/Beaulieu</u> c&#39;est des questions sur l&#39;ISTIC, sur le campus, sur les bâtiments, sur les profs, sur les assos...<br/>`,s=L();for(let o=0;o<r.length;o+=1)r[o].c();S(n,"class","text-sm text-primary-blue w-[80%]"),S(e,"class","flex flex-col justify-around text-beige px-[5%] items-center")},m(o,l){w(o,e,l),y(e,n),y(e,s);for(let a=0;a<r.length;a+=1)r[a].m(e,null)},p(o,[l]){if(l&3){i=o[0];let a;for(a=0;a<i.length;a+=1){const c=Wr(o,i,a);r[a]?r[a].p(c,l):(r[a]=Hr(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},i:Q,o:Q,d(o){o&&C(e),Hn(r,o)}}}function O_(t,e,n){let{paths:s}=e;const i=Dt(),r=o=>i("path-choosen",{path:o});return t.$$set=o=>{"paths"in o&&n(0,s=o.paths)},[s,i,r]}class M_ extends ve{constructor(e){super(),ye(this,e,O_,D_,ge,{paths:0})}}function L_(t){let e;return{c(){e=M("Je participe !")},m(n,s){w(n,e,s)},d(n){n&&C(e)}}}function F_(t){let e,n,s,i,r;return i=new Gl({props:{$$slots:{default:[L_]},$$scope:{ctx:t}}}),i.$on("click",t[1]),{c(){e=N("main"),n=N("p"),n.textContent=`Bienvenue dans l'aventure Palm'easter ! Une chasse aux énigmes de Pâque, avec des chocolats et des gros lots à gagner !
        Certaines énigmes te feront arpenter l'istic, d'autre te feront réfléchir intensemment, et d'autres encore necessiteront des recherches avancées !
        Tu as jusqu'au vendredi 14 avril pour résoudre le plus d'énigmes possible !`,s=L(),re(i.$$.fragment),S(n,"class","text-sm text-primary-blue mb-[3%] w-[90%]"),S(e,"class","flex flex-col justify-center text-beige p-[5%] items-center grow")},m(o,l){w(o,e,l),y(e,n),y(e,s),ne(i,e,null),r=!0},p(o,[l]){const a={};l&4&&(a.$$scope={dirty:l,ctx:o}),i.$set(a)},i(o){r||(P(i.$$.fragment,o),r=!0)},o(o){F(i.$$.fragment,o),r=!1},d(o){o&&C(e),se(i)}}}function U_(t){const e=Dt();return[e,()=>e("next")]}class B_ extends ve{constructor(e){super(),ye(this,e,U_,F_,ge,{})}}const Bs=1e3*60*60;function $_(t){let e,n,s,i;return{c(){e=N("button"),n=M(t[1]),S(e,"class","drop-shadow-neubrutalism rounded-full px-[5vw] py-[2vh]"),Oi(e,"background-color",t[3][t[0]])},m(r,o){w(r,e,o),y(e,n),s||(i=he(e,"click",t[5]),s=!0)},p(r,[o]){o&2&&ce(n,r[1]),o&1&&Oi(e,"background-color",r[3][r[0]])},i:Q,o:Q,d(r){r&&C(e),s=!1,i()}}}function W_(t,e){let n=t.toString(),s=e.toString();return t<10&&(n="0"+n),e<10&&(s="0"+s),n+"h"+s}function H_(t,e,n){const s=Dt(),i=["#F1BEB3","#e0e0e0","#A8ED84 ","#f25500"];let{state:r}=e,{currentQuestionLastTryDate:o}=e,l="Valider !";const a=()=>s("click");return t.$$set=c=>{"state"in c&&n(0,r=c.state),"currentQuestionLastTryDate"in c&&n(4,o=c.currentQuestionLastTryDate)},t.$$.update=()=>{if(t.$$.dirty&17)if(r==1)n(1,l="Vérification...");else if(r==2)n(1,l="Bonne réponse !");else if(r==3){let c=new Date(o+Bs);n(1,l="Mauvais réponse ! Prochain essai : "+W_(c.getHours(),c.getMinutes()))}else r==0&&n(1,l="Valider !")},[r,l,s,i,o,a]}class V_ extends ve{constructor(e){super(),ye(this,e,H_,$_,ge,{state:0,currentQuestionLastTryDate:4})}}function Vr(t,e,n){const s=t.slice();return s[14]=e[n],s}function q_(t){let e,n=t[3].firstName+" "+t[3].lastName,s,i,r,o,l=t[3].chocolatesCount+"",a,c,h,u,d,f,_,g,m,v,k,E,I,V,U,q,K=t[0],Y=[];for(let b=0;b<K.length;b+=1)Y[b]=qr(Vr(t,K,b));function dn(b){t[10](b)}let ft={label:"Code secret"};return t[1]!==void 0&&(ft.value=t[1]),v=new wt({props:ft}),Se.push(()=>Be(v,"value",dn)),{c(){e=N("h1"),s=M(n),i=L(),r=N("p"),o=M("Nombre de chocolats : "),a=M(l),c=L(),h=N("p"),h.textContent="rangs :",u=L();for(let b=0;b<Y.length;b+=1)Y[b].c();d=L(),f=N("p"),f.textContent="Avant de donner ses chocolat au joueurs, demander lui son nom et confirmer qu'il s'agit bien du bon compte (au cas ou quelqu'un viendrait piquer ses chocolats en ayant voler son numéro étudiant, c'est peu probable mais ça fait sérieux de vérifier.)",_=L(),g=N("p"),g.innerHTML="Une fois les délicieux chocolats remis au joueur, il faut <bold>reset le compteur !</bold> Pour cela entrez le code secret connu seulement des membres actifs de la palme, et appuyez sur &quot;reset&quot;",m=L(),re(v.$$.fragment),E=L(),I=N("button"),I.textContent="Reset !"},m(b,j){w(b,e,j),y(e,s),w(b,i,j),w(b,r,j),y(r,o),y(r,a),w(b,c,j),w(b,h,j),w(b,u,j);for(let Fe=0;Fe<Y.length;Fe+=1)Y[Fe].m(b,j);w(b,d,j),w(b,f,j),w(b,_,j),w(b,g,j),w(b,m,j),ne(v,b,j),w(b,E,j),w(b,I,j),V=!0,U||(q=he(I,"click",t[11]),U=!0)},p(b,j){if((!V||j&8)&&n!==(n=b[3].firstName+" "+b[3].lastName)&&ce(s,n),(!V||j&8)&&l!==(l=b[3].chocolatesCount+"")&&ce(a,l),j&9){K=b[0];let de;for(de=0;de<K.length;de+=1){const fn=Vr(b,K,de);Y[de]?Y[de].p(fn,j):(Y[de]=qr(fn),Y[de].c(),Y[de].m(d.parentNode,d))}for(;de<Y.length;de+=1)Y[de].d(1);Y.length=K.length}const Fe={};!k&&j&2&&(k=!0,Fe.value=b[1],Ue(()=>k=!1)),v.$set(Fe)},i(b){V||(P(v.$$.fragment,b),V=!0)},o(b){F(v.$$.fragment,b),V=!1},d(b){b&&C(e),b&&C(i),b&&C(r),b&&C(c),b&&C(h),b&&C(u),Hn(Y,b),b&&C(d),b&&C(f),b&&C(_),b&&C(g),b&&C(m),se(v,b),b&&C(E),b&&C(I),U=!1,q()}}}function j_(t){let e,n,s,i,r,o,l,a,c;function h(d){t[8](d)}let u={label:"Numéro étudiant",icon:jl};return t[2]!==void 0&&(u.value=t[2]),s=new wt({props:u}),Se.push(()=>Be(s,"value",h)),{c(){e=N("p"),e.textContent="Bienvenue sur la page d'administration, pour inspecter un joueurs, entrez son numéro étudiant :",n=L(),re(s.$$.fragment),r=L(),o=N("button"),o.textContent="Inspecter"},m(d,f){w(d,e,f),w(d,n,f),ne(s,d,f),w(d,r,f),w(d,o,f),l=!0,a||(c=he(o,"click",t[9]),a=!0)},p(d,f){const _={};!i&&f&4&&(i=!0,_.value=d[2],Ue(()=>i=!1)),s.$set(_)},i(d){l||(P(s.$$.fragment,d),l=!0)},o(d){F(s.$$.fragment,d),l=!1},d(d){d&&C(e),d&&C(n),se(s,d),d&&C(r),d&&C(o),a=!1,c()}}}function qr(t){let e,n=t[14]+"",s,i,r=(typeof t[3].ranks[t[14]]=="number"?t[3].ranks[t[14]]+1+" ème":t[3].ranks[t[14]])+"",o;return{c(){e=N("p"),s=M(n),i=M(" : "),o=M(r)},m(l,a){w(l,e,a),y(e,s),y(e,i),y(e,o)},p(l,a){a&1&&n!==(n=l[14]+"")&&ce(s,n),a&9&&r!==(r=(typeof l[3].ranks[l[14]]=="number"?l[3].ranks[l[14]]+1+" ème":l[3].ranks[l[14]])+"")&&ce(o,r)},d(l){l&&C(e)}}}function G_(t){let e,n,s,i;const r=[j_,q_],o=[];function l(a,c){return a[3]?1:0}return n=l(t),s=o[n]=r[n](t),{c(){e=N("div"),s.c(),S(e,"class","flex flex-col justify-around grow")},m(a,c){w(a,e,c),o[n].m(e,null),i=!0},p(a,[c]){let h=n;n=l(a),n===h?o[n].p(a,c):(at(),F(o[h],1,1,()=>{o[h]=null}),ct(),s=o[n],s?s.p(a,c):(s=o[n]=r[n](a),s.c()),P(s,1),s.m(e,null))},i(a){i||(P(s),i=!0)},o(a){F(s),i=!1},d(a){a&&C(e),o[n].d()}}}function z_(t,e,n){let{functions:s}=e,{database:i}=e,{paths:r}=e;const o=ko(s,"resetChocolates"),l=Vl(i);let a,c,h;async function u(){let v=(await be(J(l,"users"))).val();console.log(v);let k=v[c],E={};for(const I of r){if(!k.endedPath||!k.endedPath[I]){E[I]="Non terminé";continue}let V=Object.values(v).reduce((U,q)=>q.endedPath&&q.endedPath[I]<k[I]?U+1:U,0);E[I]=V}n(3,h={firstName:k.firstName,lastName:k.lastName,chocolatesCount:k.chocolatesCount,ranks:E})}function d(){o({studentNumber:c,secretCode:a}).then(()=>n(3,h.chocolatesCount=0,h))}function f(v){c=v,n(2,c)}const _=()=>u();function g(v){a=v,n(1,a)}const m=()=>d();return t.$$set=v=>{"functions"in v&&n(6,s=v.functions),"database"in v&&n(7,i=v.database),"paths"in v&&n(0,r=v.paths)},[r,a,c,h,u,d,s,i,f,_,g,m]}class Q_ extends ve{constructor(e){super(),ye(this,e,z_,G_,ge,{functions:6,database:7,paths:0})}}const Y_="/assets/logo-palmeaster-5989f868.png",K_="/assets/oeuf-ceff31ba.svg";function X_(t){let e;return{c(){e=M("Félicitation !")},m(n,s){w(n,e,s)},p:Q,d(n){n&&C(e)}}}function J_(t){let e,n=t[1]+1+"",s,i,r;return{c(){e=M("Question "),s=M(n),i=M(" / "),r=M(t[2])},m(o,l){w(o,e,l),w(o,s,l),w(o,i,l),w(o,r,l)},p(o,l){l&2&&n!==(n=o[1]+1+"")&&ce(s,n),l&4&&ce(r,o[2])},d(o){o&&C(e),o&&C(s),o&&C(i),o&&C(r)}}}function Z_(t){let e;return{c(){e=M("Choisit ton parcours !")},m(n,s){w(n,e,s)},p:Q,d(n){n&&C(e)}}}function ep(t){let e;return{c(){e=M("Qui es tu ?")},m(n,s){w(n,e,s)},p:Q,d(n){n&&C(e)}}}function tp(t){let e;return{c(){e=M("Bienvenue dans l'aventure Palm'easter !")},m(n,s){w(n,e,s)},p:Q,d(n){n&&C(e)}}}function jr(t){let e,n,s,i,r,o;return{c(){e=N("div"),n=N("p"),s=M(t[3]),i=L(),r=N("img"),S(n,"class","text-md text-primary-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"),It(r.src,o=K_)||S(r,"src",o),S(r,"alt","chocolats"),S(r,"class","shrink min-w-0 min-h-0 h-[75%] self-center"),S(e,"class","h-full relative flex")},m(l,a){w(l,e,a),y(e,n),y(n,s),y(e,i),y(e,r)},p(l,a){a&8&&ce(s,l[3])},d(l){l&&C(e)}}}function np(t){let e,n,s,i,r,o,l;function a(d,f){if(d[0]==0)return tp;if(d[0]==1)return ep;if(d[0]==3)return Z_;if(d[0]==4)return J_;if(d[0]==5)return X_}let c=a(t),h=c&&c(t),u=t[0]==4&&jr(t);return{c(){e=N("div"),n=N("img"),i=L(),r=N("h1"),h&&h.c(),o=L(),u&&u.c(),S(n,"class","shrink min-w-0 min-h-0 h-[100%]"),It(n.src,s=Y_)||S(n,"src",s),S(n,"alt",""),S(r,"class","text-beige px-[5%] svelte-1yp11b8"),S(e,"class",l=Pi((t[0]==4?"mini-header":"big-header")+" header")+" svelte-1yp11b8")},m(d,f){w(d,e,f),y(e,n),y(e,i),y(e,r),h&&h.m(r,null),y(e,o),u&&u.m(e,null)},p(d,[f]){c===(c=a(d))&&h?h.p(d,f):(h&&h.d(1),h=c&&c(d),h&&(h.c(),h.m(r,null))),d[0]==4?u?u.p(d,f):(u=jr(d),u.c(),u.m(e,null)):u&&(u.d(1),u=null),f&1&&l!==(l=Pi((d[0]==4?"mini-header":"big-header")+" header")+" svelte-1yp11b8")&&S(e,"class",l)},i:Q,o:Q,d(d){d&&C(e),h&&h.d(),u&&u.d()}}}function sp(t,e,n){let{currentPage:s}=e,{currentQuestionIndex:i}=e,{questionsCount:r}=e,{chocolatesCount:o}=e;return t.$$set=l=>{"currentPage"in l&&n(0,s=l.currentPage),"currentQuestionIndex"in l&&n(1,i=l.currentQuestionIndex),"questionsCount"in l&&n(2,r=l.questionsCount),"chocolatesCount"in l&&n(3,o=l.chocolatesCount)},[s,i,r,o]}class ip extends ve{constructor(e){super(),ye(this,e,sp,np,ge,{currentPage:0,currentQuestionIndex:1,questionsCount:2,chocolatesCount:3})}}function rp(t){let e,n,s,i,r,o,l,a,c,h,u;return{c(){e=N("div"),n=N("h1"),n.textContent="Félicitation ! Vous avez terminer votre parcours ! Vous pouvez passer à la Palme récupérer vos récompenses et découvrir si vous êtes le premier à avoir terminer ce parcours !",s=L(),i=N("h2"),r=M("Vous avez gagné "),o=M(t[0]),l=M(" chocolats !"),a=L(),c=N("button"),c.textContent="Se déconnecter",S(c,"class","text-primary-blue"),S(e,"class","flex flex-col justify-between h-full grow py-[5%]")},m(d,f){w(d,e,f),y(e,n),y(e,s),y(e,i),y(i,r),y(i,o),y(i,l),y(e,a),y(e,c),h||(u=he(c,"click",t[2]),h=!0)},p(d,[f]){f&1&&ce(o,d[0])},i:Q,o:Q,d(d){d&&C(e),h=!1,u()}}}function op(t,e,n){const s=Dt();let{chocolatesCount:i}=e;const r=()=>s("disconnect");return t.$$set=o=>{"chocolatesCount"in o&&n(0,i=o.chocolatesCount)},[i,s,r]}class lp extends ve{constructor(e){super(),ye(this,e,op,rp,ge,{chocolatesCount:0})}}function Gr(t){var s;const n=(s=document.cookie.split("; ").find(i=>i.startsWith(t+"=")))==null?void 0:s.split("=")[1];return n===void 0?null:decodeURIComponent(n)}function ap(t,e,n){console.log("setCookie",t,e,n);const s=new Date;s.setDate(s.getDate()+n),document.cookie=`${t}=${encodeURIComponent(e)}; expires=${s.toUTCString()};`}function zr(t){document.cookie=t+"=; Max-Age=-99999999;"}function cp(t){let e,n;return e=new lp({props:{chocolatesCount:t[5]}}),e.$on("disconnect",t[22]),{c(){re(e.$$.fragment)},m(s,i){ne(e,s,i),n=!0},p(s,i){const r={};i[0]&32&&(r.chocolatesCount=s[5]),e.$set(r)},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){se(e,s)}}}function up(t){let e,n,s=t[2].questionText+"",i,r,o,l,a,c,h,u,d,f,_,g,m,v,k={ctx:t,current:null,token:null,hasCatch:!0,pending:gp,then:mp,catch:pp,value:34,error:35};Li(o=Xi(Ki(t[8],t[2].image)),k);const E=[bp,vp,yp],I=[];function V(U,q){return U[2].questionType=="multipleChoices"?0:U[2].questionType=="singleChoice"?1:U[2].questionType=="textAnswer"?2:-1}return~(a=V(t))&&(c=I[a]=E[a](t)),d=new V_({props:{state:t[4],currentQuestionLastTryDate:t[2].lastTryDate}}),d.$on("click",t[20]),{c(){e=N("div"),n=N("h1"),i=M(s),r=L(),k.block.c(),l=L(),c&&c.c(),h=L(),u=N("div"),re(d.$$.fragment),f=L(),_=N("button"),_.textContent="Se déconnecter",S(n,"class","text-primary-blue"),S(u,"class","my-[10%]"),S(e,"class","p-[5%] flex flex-col justify-between grow items-center")},m(U,q){w(U,e,q),y(e,n),y(n,i),y(e,r),k.block.m(e,k.anchor=null),k.mount=()=>e,k.anchor=l,y(e,l),~a&&I[a].m(e,null),y(e,h),y(e,u),ne(d,u,null),y(e,f),y(e,_),g=!0,m||(v=he(_,"click",t[21]),m=!0)},p(U,q){t=U,(!g||q[0]&4)&&s!==(s=t[2].questionText+"")&&ce(i,s),k.ctx=t,q[0]&4&&o!==(o=Xi(Ki(t[8],t[2].image)))&&Li(o,k)||va(k,t,q);let K=a;a=V(t),a===K?~a&&I[a].p(t,q):(c&&(at(),F(I[K],1,1,()=>{I[K]=null}),ct()),~a?(c=I[a],c?c.p(t,q):(c=I[a]=E[a](t),c.c()),P(c,1),c.m(e,h)):c=null);const Y={};q[0]&16&&(Y.state=t[4]),q[0]&4&&(Y.currentQuestionLastTryDate=t[2].lastTryDate),d.$set(Y)},i(U){g||(P(c),P(d.$$.fragment,U),g=!0)},o(U){F(c),F(d.$$.fragment,U),g=!1},d(U){U&&C(e),k.block.d(),k.token=null,k=null,~a&&I[a].d(),se(d),m=!1,v()}}}function hp(t){let e,n;return e=new M_({props:{paths:t[1]}}),e.$on("path-choosen",t[16]),{c(){re(e.$$.fragment)},m(s,i){ne(e,s,i),n=!0},p(s,i){const r={};i[0]&2&&(r.paths=s[1]),e.$set(r)},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){se(e,s)}}}function dp(t){let e,n;return e=new T_({}),e.$on("submit",t[15]),{c(){re(e.$$.fragment)},m(s,i){ne(e,s,i),n=!0},p:Q,i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){se(e,s)}}}function fp(t){let e,n;return e=new B_({}),e.$on("next",t[14]),{c(){re(e.$$.fragment)},m(s,i){ne(e,s,i),n=!0},p:Q,i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){se(e,s)}}}function _p(t){let e,n;return e=new Q_({props:{functions:t[7],database:t[9],paths:t[1]}}),{c(){re(e.$$.fragment)},m(s,i){ne(e,s,i),n=!0},p(s,i){const r={};i[0]&2&&(r.paths=s[1]),e.$set(r)},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){se(e,s)}}}function pp(t){let e,n=t[35].message+"",s;return{c(){e=M("Impossible de charger l'image :/ "),s=M(n)},m(i,r){w(i,e,r),w(i,s,r)},p(i,r){r[0]&4&&n!==(n=i[35].message+"")&&ce(s,n)},d(i){i&&C(e),i&&C(s)}}}function mp(t){let e,n;return{c(){e=N("img"),It(e.src,n=URL.createObjectURL(t[34]))||S(e,"src",n),S(e,"class","min-w-0 h-[30vh] mb-[5%] drop-shadow-neubrutalism"),S(e,"alt","question")},m(s,i){w(s,e,i)},p(s,i){i[0]&4&&!It(e.src,n=URL.createObjectURL(s[34]))&&S(e,"src",n)},d(s){s&&C(e)}}}function gp(t){let e;return{c(){e=M("loading image...")},m(n,s){w(n,e,s)},p:Q,d(n){n&&C(e)}}}function yp(t){let e,n,s;function i(o){t[19](o)}let r={label:"Votre réponse..."};return t[3]!==void 0&&(r.value=t[3]),e=new wt({props:r}),Se.push(()=>Be(e,"value",i)),{c(){re(e.$$.fragment)},m(o,l){ne(e,o,l),s=!0},p(o,l){const a={};!n&&l[0]&8&&(n=!0,a.value=o[3],Ue(()=>n=!1)),e.$set(a)},i(o){s||(P(e.$$.fragment,o),s=!0)},o(o){F(e.$$.fragment,o),s=!1},d(o){se(e,o)}}}function vp(t){let e,n,s;function i(o){t[18](o)}let r={choices:t[2].choices,label:"Votre réponse..."};return t[3]!==void 0&&(r.value=t[3]),e=new R_({props:r}),Se.push(()=>Be(e,"value",i)),{c(){re(e.$$.fragment)},m(o,l){ne(e,o,l),s=!0},p(o,l){const a={};l[0]&4&&(a.choices=o[2].choices),!n&&l[0]&8&&(n=!0,a.value=o[3],Ue(()=>n=!1)),e.$set(a)},i(o){s||(P(e.$$.fragment,o),s=!0)},o(o){F(e.$$.fragment,o),s=!1},d(o){se(e,o)}}}function bp(t){let e,n,s;function i(o){t[17](o)}let r={choices:t[2].choices};return t[3]!==void 0&&(r.value=t[3]),e=new P_({props:r}),Se.push(()=>Be(e,"value",i)),{c(){re(e.$$.fragment)},m(o,l){ne(e,o,l),s=!0},p(o,l){const a={};l[0]&4&&(a.choices=o[2].choices),!n&&l[0]&8&&(n=!0,a.value=o[3],Ue(()=>n=!1)),e.$set(a)},i(o){s||(P(e.$$.fragment,o),s=!0)},o(o){F(e.$$.fragment,o),s=!1},d(o){se(e,o)}}}function Cp(t){let e,n,s,i,r,o,l;n=new ip({props:{currentPage:t[0],currentQuestionIndex:t[6],questionsCount:zl,chocolatesCount:t[5]}});const a=[_p,fp,dp,hp,up,cp],c=[];function h(u,d){return window.location.pathname=="/admin"||u[0]=="admin"?0:u[0]==0?1:u[0]==1?2:u[0]==3?3:u[0]==4&&u[2]?4:u[0]==5?5:-1}return~(r=h(t))&&(o=c[r]=a[r](t)),{c(){e=N("main"),re(n.$$.fragment),s=L(),i=N("div"),o&&o.c(),S(i,"class","flex flex-col w-full max-w-[450px] h-full grow"),S(e,"class","font-francois-one flex flex-col justify-around min-h-[100vh] items-center")},m(u,d){w(u,e,d),ne(n,e,null),y(e,s),y(e,i),~r&&c[r].m(i,null),l=!0},p(u,d){const f={};d[0]&1&&(f.currentPage=u[0]),d[0]&64&&(f.currentQuestionIndex=u[6]),d[0]&32&&(f.chocolatesCount=u[5]),n.$set(f);let _=r;r=h(u),r===_?~r&&c[r].p(u,d):(o&&(at(),F(c[_],1,1,()=>{c[_]=null}),ct()),~r?(o=c[r],o?o.p(u,d):(o=c[r]=a[r](u),o.c()),P(o,1),o.m(i,null)):o=null)},i(u){l||(P(n.$$.fragment,u),P(o),l=!0)},o(u){F(n.$$.fragment,u),F(o),l=!1},d(u){u&&C(e),se(n),~r&&c[r].d()}}}const zl=7;function Ep(t,e,n){const i=go({apiKey:"AIzaSyCVyWcwjE_Mc5dTkzTghQpVE9G0mRqjkUk",authDomain:"palmevent-by-palme.firebaseapp.com",databaseURL:"https://palmevent-by-palme-default-rtdb.europe-west1.firebasedatabase.app",projectId:"palmevent-by-palme",storageBucket:"palmevent-by-palme.appspot.com",messagingSenderId:"1046101382717",appId:"1:1046101382717:web:d8cc41a4a9f426a0da3c54",measurementId:"G-EQ844GLK3B"}),r=sh(i),o=Uu(i),l=ko(r,"validateQuestion"),a=d_();(window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1")&&(console.log("Running in emulator !"),ql(a,"localhost",9e3),No(r,"localhost",5001),To(o,"localhost",9199));let c=0;const h=Vl(a);let u,d,f,_,g,m,v=0,k,E,I=0;be(J(h,"paths")).then(D=>{n(1,u=D.val())}),Gr("studentNumber")&&(d=Gr("studentNumber"),U(),c=4);function V(D){if(d=D.detail.studentNumber,f=D.detail.firstName,_=D.detail.lastName,f.toLowerCase()=="admin"){n(0,c="admin");return}if(d.length!=8){alert("Le numéro étudiant ne correspond à aucun étudiant !");return}else if(f.length==0||_.length==0){alert("Le nom ou le prénom ne sont pas valides !");return}ap("studentNumber",d,7),U()}function U(){be(J(h,`users/${d}`)).then(D=>{D.exists()?(n(0,c=4),Mr(J(h,`users/${d}/questions`),Y),be(J(h,`users/${d}/currentPath`)).then(ze=>{k=ze.val()})):n(0,c=3)}).catch(D=>{console.error(D)})}function q(D){k=D,s_(J(h,`users/${d}`),{firstName:f,lastName:_,currentPath:D}).then(()=>n(0,c=4)).catch(ze=>{alert("Erreur : vous avez mal entrée votre numéro étudiant, où votre nom/prénom. Veuillez réessayer. Code d'erreur : "+ze),n(0,c=1),zr("studentNumber")}),Mr(J(h,`users/${d}/questions`),Y)}async function K(D){const Te=(await Promise.all(Object.keys(D).map(async Qe=>[Qe,(await be(J(h,`questions/${Qe}/level`))).val()]))).filter(([Qe,Ut])=>!D[Qe].validated).sort(([Qe,Ut],[Ye,Yl])=>Ut-Yl);return[Te[0],zl-Te.length]}async function Y(D){if(!D.exists())return;let ze=D.val(),[Te,Qe]=await K(ze);n(6,I=Qe);let Ut=await be(J(h,`users/${d}/chocolatesCount`));if(n(5,E=Ut.exists()?Ut.val():0),!Te){n(0,c=5);return}Promise.all([be(J(h,"questions/"+Te[0]+"/questionText")),be(J(h,"questions/"+Te[0]+"/questionType")),be(J(h,"questions/"+Te[0]+"/choices")),be(J(h,"questions/"+Te[0]+"/image")),be(J(h,"users/"+d+"/questions/"+Te[0]+"/lastTryDate"))]).then(Ye=>{n(2,g={questionId:Te[0],questionText:Ye[0].val(),questionType:Ye[1].val(),choices:Ye[2].val(),image:Ye[3].val(),lastTryDate:Ye[4].exists()?Ye[4].val():0}),g.lastTryDate+Bs>Date.now()&&n(4,v=3)}).catch(console.error)}async function dn(){n(4,v=1),g.lastTryDate+Bs>Date.now()&&alert("Hola jeune aventurier.e ! Pas si vite ! Tu t'es trompé.e, tu dois attendre 3 heures avant de réessayer."),await new Promise((D,ze)=>{setTimeout(()=>{D()},1e3)}),l({questionId:g.questionId,studentNumber:d,studentAnswer:m,path:k}).then(D=>{n(3,m=""),D.data.correct?(n(3,m=""),console.log("correct answer !"),n(4,v=2),setTimeout(()=>{n(4,v=0)},1500)):n(4,v=3)}).catch(D=>{console.log(D),n(4,v=3)})}function ft(){zr("studentNumber"),n(0,c=1)}const b=()=>n(0,c=1),j=D=>V(D),Fe=D=>{q(D.detail.path)};function de(D){m=D,n(3,m)}function fn(D){m=D,n(3,m)}function Ql(D){m=D,n(3,m)}return[c,u,g,m,v,E,I,r,o,a,V,q,dn,ft,b,j,Fe,de,fn,Ql,()=>dn(),()=>ft(),()=>ft()]}class wp extends ve{constructor(e){super(),ye(this,e,Ep,Cp,ge,{},null,[-1,-1])}}new wp({target:document.getElementById("app")});
