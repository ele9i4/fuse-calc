function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(t,e,n,r){if(t){const s=u(t,e,n,r);return t[0](s)}}function u(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function h(t){return null==t?"":t}function p(t,e,n=e){return t.set(n),e}const d="undefined"!=typeof window;let m=d?()=>window.performance.now():()=>Date.now(),g=d?t=>requestAnimationFrame(t):t;const $=new Set;function y(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),0!==$.size&&g(y)}function v(t){let e;return 0===$.size&&g(y),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}function b(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function A(){return S("")}function R(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t){return Array.from(t.childNodes)}function C(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):x(e)}function N(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return S(e)}function q(t){return N(t," ")}function O(t,e){e=""+e,t.data!==e&&(t.data=e)}function j(t,e){(null!=e||t.value)&&(t.value=e)}function U(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function I(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function M(t,e,n){t.classList[n?"add":"remove"](e)}function B(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}function D(t,e=document.body){return Array.from(e.querySelectorAll(t))}let z,H,J=0,T={};function K(t,e,n,r,s,o,c,a=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*o(t);l+=100*t+`%{${c(r,1-r)}}\n`}const u=l+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`;if(!T[f]){if(!z){const t=x("style");document.head.appendChild(t),z=t.sheet}T[f]=!0,z.insertRule(`@keyframes ${f} ${u}`,z.cssRules.length)}const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${s}ms 1 both`,J+=1,f}function V(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--J&&g(()=>{if(J)return;let t=z.cssRules.length;for(;t--;)z.deleteRule(t);T={}})}function F(t){H=t}function G(){if(!H)throw new Error("Function called outside component initialization");return H}function Q(t){G().$$.on_mount.push(t)}function W(){const t=G();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=B(e,n);r.slice().forEach(e=>{e.call(t,s)})}}}function X(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const Y=[],Z=[],tt=[],et=[],nt=Promise.resolve();let rt=!1;function st(t){tt.push(t)}const ot=new Set;function ct(){do{for(;Y.length;){const t=Y.shift();F(t),at(t.$$)}for(;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const e=tt[t];ot.has(e)||(ot.add(e),e())}tt.length=0}while(Y.length);for(;et.length;)et.pop()();rt=!1,ot.clear()}function at(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}let it;function lt(){return it||(it=Promise.resolve()).then(()=>{it=null}),it}function ut(t,e,n){t.dispatchEvent(B(`${e?"intro":"outro"}${n}`))}const ft=new Set;let ht;function pt(){ht={r:0,c:[],p:ht}}function dt(){ht.r||o(ht.c),ht=ht.p}function mt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function gt(t,e,n,r){if(t&&t.o){if(ft.has(t))return;ft.add(t),ht.c.push(()=>{ft.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const $t={duration:0};function yt(n,r,s){let o,a,i=r(n,s),l=!1,u=0;function f(){o&&V(n,o)}function h(){const{delay:r=0,duration:s=300,easing:c=e,tick:h=t,css:p}=i||$t;p&&(o=K(n,0,1,s,r,c,p,u++)),h(0,1);const d=m()+r,g=d+s;a&&a.abort(),l=!0,st(()=>ut(n,!0,"start")),a=v(t=>{if(l){if(t>=g)return h(1,0),ut(n,!0,"end"),f(),l=!1;if(t>=d){const e=c((t-d)/s);h(e,1-e)}}return l})}let p=!1;return{start(){p||(V(n),c(i)?(i=i(),lt().then(h)):h())},invalidate(){p=!1},end(){l&&(f(),l=!1)}}}function vt(n,r,s){let a,i=r(n,s),l=!0;const u=ht;function f(){const{delay:r=0,duration:s=300,easing:c=e,tick:f=t,css:h}=i||$t;h&&(a=K(n,1,0,s,r,c,h));const p=m()+r,d=p+s;st(()=>ut(n,!1,"start")),v(t=>{if(l){if(t>=d)return f(0,1),ut(n,!1,"end"),--u.r||o(u.c),!1;if(t>=p){const e=c((t-p)/s);f(1-e,e)}}return l})}return u.r+=1,c(i)?lt().then(()=>{i=i(),f()}):f(),{end(t){t&&i.tick&&i.tick(1,0),l&&(a&&V(n,a),l=!1)}}}function bt(t,e){t.d(1),e.delete(t.key)}function wt(t,e,n,r,s,o,c,a,i,l,u,f){let h=t.length,p=o.length,d=h;const m={};for(;d--;)m[t[d].key]=d;const g=[],$=new Map,y=new Map;for(d=p;d--;){const t=f(s,o,d),a=n(t);let i=c.get(a);i?r&&i.p(t,e):(i=l(a,t)).c(),$.set(a,g[d]=i),a in m&&y.set(a,Math.abs(d-m[a]))}const v=new Set,b=new Set;function w(t){mt(t,1),t.m(a,u),c.set(t.key,t),u=t.first,p--}for(;h&&p;){const e=g[p-1],n=t[h-1],r=e.key,s=n.key;e===n?(u=e.first,h--,p--):$.has(s)?!c.has(r)||v.has(r)?w(e):b.has(s)?h--:y.get(r)>y.get(s)?(b.add(r),w(e)):(v.add(s),h--):(i(n,c),h--)}for(;h--;){const e=t[h];$.has(e.key)||i(e,c)}for(;p;)w(g[p-1]);return g}function _t(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const c=t[o],a=e[o];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in c)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Et(t){return"object"==typeof t&&null!==t?t:{}}function xt(t){t&&t.c()}function St(t,e){t&&t.l(e)}function kt(t,e,n){const{fragment:s,on_mount:a,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),st(()=>{const e=a.map(r).filter(c);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(st)}function At(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){-1===t.$$.dirty[0]&&(Y.push(t),rt||(rt=!0,nt.then(ct)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pt(e,n,r,c,a,i,l=[-1]){const u=H;F(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l};let p=!1;h.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),p&&Rt(e,t)),n}):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),n.target&&(n.hydrate?h.fragment&&h.fragment.l(L(n.target)):h.fragment&&h.fragment.c(),n.intro&&mt(e.$$.fragment),kt(e,n.target,n.anchor),ct()),F(u)}class Lt{$destroy(){At(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Ct=[];function Nt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!Ct.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Ct.push(n,e)}if(t){for(let t=0;t<Ct.length;t+=2)Ct[t][0](Ct[t+1]);Ct.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,a=t){const i=[c,a];return s.push(i),1===s.length&&(r=n(o)||t),c(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const qt={},Ot=()=>({});function jt(e){let n,r,s;return{c(){n=x("a"),r=S(e[2]),this.h()},l(t){var s=L(n=C(t,"A",{rel:!0,class:!0,href:!0}));r=N(s,e[2]),s.forEach(_),this.h()},h(){P(n,"rel","prefetch"),P(n,"class",s=h(e[0]?"selected":"")+" svelte-sgv0rk"),P(n,"href",e[1])},m(t,e){w(t,n,e),b(n,r)},p(t,[e]){4&e&&O(r,t[2]),1&e&&s!==(s=h(t[0]?"selected":"")+" svelte-sgv0rk")&&P(n,"class",s),2&e&&P(n,"href",t[1])},i:t,o:t,d(t){t&&_(n)}}}function Ut(t,e,n){let{selected:r}=e,{href:s}=e,{name:o}=e;return t.$set=(t=>{"selected"in t&&n(0,r=t.selected),"href"in t&&n(1,s=t.href),"name"in t&&n(2,o=t.name)}),[r,s,o]}class It extends Lt{constructor(t){super(),Pt(this,t,Ut,jt,a,{selected:0,href:1,name:2})}}function Mt(t,e,n){const r=t.slice();return r[5]=e[n],r}function Bt(t){let e,n,r;const s=new It({props:{selected:t[0]===t[5].href||!t[0]&&"."===t[5].href,href:t[5].href,name:t[5].name}});return{c(){e=x("li"),xt(s.$$.fragment),n=k(),this.h()},l(t){var r=L(e=C(t,"LI",{class:!0}));St(s.$$.fragment,r),n=q(r),r.forEach(_),this.h()},h(){P(e,"class","nav__item svelte-flvuho")},m(t,o){w(t,e,o),kt(s,e,null),b(e,n),r=!0},p(t,e){const n={};1&e&&(n.selected=t[0]===t[5].href||!t[0]&&"."===t[5].href),s.$set(n)},i(t){r||(mt(s.$$.fragment,t),r=!0)},o(t){gt(s.$$.fragment,t),r=!1},d(t){t&&_(e),At(s)}}}function Dt(t){let e,n,r,s=t[1],o=[];for(let e=0;e<s.length;e+=1)o[e]=Bt(Mt(t,s,e));const c=t=>gt(o[t],1,1,()=>{o[t]=null});return{c(){e=x("nav"),n=x("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){var r=L(e=C(t,"NAV",{class:!0})),s=L(n=C(r,"UL",{class:!0}));for(let t=0;t<o.length;t+=1)o[t].l(s);s.forEach(_),r.forEach(_),this.h()},h(){P(n,"class","nav__list svelte-flvuho"),P(e,"class","nav svelte-flvuho")},m(t,s){w(t,e,s),b(e,n);for(let t=0;t<o.length;t+=1)o[t].m(n,null);r=!0},p(t,[e]){if(3&e){let r;for(s=t[1],r=0;r<s.length;r+=1){const c=Mt(t,s,r);o[r]?(o[r].p(c,e),mt(o[r],1)):(o[r]=Bt(c),o[r].c(),mt(o[r],1),o[r].m(n,null))}for(pt(),r=s.length;r<o.length;r+=1)c(r);dt()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)mt(o[t]);r=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)gt(o[t]);r=!1},d(t){t&&_(e),E(o,t)}}}function zt(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),t.$$.update=(()=>{t.$$.dirty}),[r,[{href:".",name:"Home"},{href:"about",name:"About"}]]}class Ht extends Lt{constructor(t){super(),Pt(this,t,zt,Dt,a,{segment:0})}}function Jt(t){let e,n,r;const s=new Ht({props:{segment:t[0]}}),o=t[2].default,c=l(o,t,t[1],null);return{c(){xt(s.$$.fragment),e=k(),n=x("main"),c&&c.c(),this.h()},l(t){St(s.$$.fragment,t),e=q(t);var r=L(n=C(t,"MAIN",{class:!0}));c&&c.l(r),r.forEach(_),this.h()},h(){P(n,"class","svelte-osdods")},m(t,o){kt(s,t,o),w(t,e,o),w(t,n,o),c&&c.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),c&&c.p&&2&e&&c.p(u(o,t,t[1],null),f(o,t[1],e,null))},i(t){r||(mt(s.$$.fragment,t),mt(c,t),r=!0)},o(t){gt(s.$$.fragment,t),gt(c,t),r=!1},d(t){At(s,t),t&&_(e),t&&_(n),c&&c.d(t)}}}function Tt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class Kt extends Lt{constructor(t){super(),Pt(this,t,Tt,Jt,a,{segment:0})}}function Vt(t){let e,n,r=t[1].stack+"";return{c(){e=x("pre"),n=S(r)},l(t){var s=L(e=C(t,"PRE",{}));n=N(s,r),s.forEach(_)},m(t,r){w(t,e,r),b(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&O(n,r)},d(t){t&&_(e)}}}function Ft(e){let n,r,s,o,c,a,i,l,u,f=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Vt(e);return{c(){r=k(),s=x("h1"),o=S(e[0]),c=k(),a=x("p"),i=S(f),l=k(),h&&h.c(),u=A(),this.h()},l(t){D('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=q(t);var n=L(s=C(t,"H1",{class:!0}));o=N(n,e[0]),n.forEach(_),c=q(t);var p=L(a=C(t,"P",{class:!0}));i=N(p,f),p.forEach(_),l=q(t),h&&h.l(t),u=A(),this.h()},h(){P(s,"class","svelte-1pgmx11"),P(a,"class","svelte-1pgmx11")},m(t,e){w(t,r,e),w(t,s,e),b(s,o),w(t,c,e),w(t,a,e),b(a,i),w(t,l,e),h&&h.m(t,e),w(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&O(o,t[0]),2&e&&f!==(f=t[1].message+"")&&O(i,f),t[2]&&t[1].stack?h?h.p(t,e):((h=Vt(t)).c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&_(r),t&&_(s),t&&_(c),t&&_(a),t&&_(l),h&&h.d(t),t&&_(u)}}}function Gt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class Qt extends Lt{constructor(t){super(),Pt(this,t,Gt,Ft,a,{status:0,error:1})}}function Wt(t){let e,r;const s=[t[4].props];var o=t[4].component;function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}if(o)var a=new o(c());return{c(){a&&xt(a.$$.fragment),e=A()},l(t){a&&St(a.$$.fragment,t),e=A()},m(t,n){a&&kt(a,t,n),w(t,e,n),r=!0},p(t,n){const r=16&n?_t(s,[Et(t[4].props)]):{};if(o!==(o=t[4].component)){if(a){pt();const t=a;gt(t.$$.fragment,1,0,()=>{At(t,1)}),dt()}o?(xt((a=new o(c())).$$.fragment),mt(a.$$.fragment,1),kt(a,e.parentNode,e)):a=null}else o&&a.$set(r)},i(t){r||(a&&mt(a.$$.fragment,t),r=!0)},o(t){a&&gt(a.$$.fragment,t),r=!1},d(t){t&&_(e),a&&At(a,t)}}}function Xt(t){let e;const n=new Qt({props:{error:t[0],status:t[1]}});return{c(){xt(n.$$.fragment)},l(t){St(n.$$.fragment,t)},m(t,r){kt(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(mt(n.$$.fragment,t),e=!0)},o(t){gt(n.$$.fragment,t),e=!1},d(t){At(n,t)}}}function Yt(t){let e,n,r,s;const o=[Xt,Wt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=o[e](t),{c(){n.c(),r=A()},l(t){n.l(t),r=A()},m(t,n){c[e].m(t,n),w(t,r,n),s=!0},p(t,s){let i=e;(e=a(t))===i?c[e].p(t,s):(pt(),gt(c[i],1,1,()=>{c[i]=null}),dt(),(n=c[e])||(n=c[e]=o[e](t)).c(),mt(n,1),n.m(r.parentNode,r))},i(t){s||(mt(n),s=!0)},o(t){gt(n),s=!1},d(t){c[e].d(t),t&&_(r)}}}function Zt(t){let e;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Yt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=n(s,r[t]);const o=new Kt({props:s});return{c(){xt(o.$$.fragment)},l(t){St(o.$$.fragment,t)},m(t,n){kt(o,t,n),e=!0},p(t,[e]){const n=12&e?_t(r,[4&e&&{segment:t[2][0]},8&e&&Et(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){e||(mt(o.$$.fragment,t),e=!0)},o(t){gt(o.$$.fragment,t),e=!1},d(t){At(o,t)}}}function te(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e;var l,u;return l=qt,u=r,G().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,c,a,i,r]}class ee extends Lt{constructor(t){super(),Pt(this,t,te,Zt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const ne=[],re=[{js:()=>import("./index.75fd76b5.js"),css:["index.75fd76b5.css","client.fe6098b3.css","AnimatePage.3a765f13.css"]},{js:()=>import("./about.5ca0be4c.js"),css:["client.fe6098b3.css","AnimatePage.3a765f13.css"]}],se=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]}];const oe="undefined"!=typeof __SAPPER__&&__SAPPER__;let ce,ae,ie,le=!1,ue=[],fe="{}";const he={page:Nt({}),preloading:Nt(null),session:Nt(oe&&oe.session)};let pe,de;he.session.subscribe(async t=>{if(pe=t,!le)return;de=!0;const e=_e(new URL(location.href)),n=ae={},{redirect:r,props:s,branch:o}=await ke(e);n===ae&&await Se(r,o,s,e.page)});let me,ge=null;let $e,ye=1;const ve="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},be={};function we(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function _e(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(oe.baseUrl))return null;let e=t.pathname.slice(oe.baseUrl.length);if(""===e&&(e="/"),!ne.some(t=>t.test(e)))for(let n=0;n<se.length;n+=1){const r=se[n],s=r.pattern.exec(e);if(s){const n=we(t.search),o=r.parts[r.parts.length-1],c=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:s,page:a}}}}function Ee(){return{x:pageXOffset,y:pageYOffset}}async function xe(t,e,n,r){if(e)$e=e;else{const t=Ee();be[$e]=t,e=$e=++ye,be[$e]=n?t:{x:0,y:0}}$e=e,ce&&he.preloading.set(!0);const s=ge&&ge.href===t.href?ge.promise:ke(t);ge=null;const o=ae={},{redirect:c,props:a,branch:i}=await s;if(o===ae&&(await Se(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=be[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}be[$e]=t,t&&scrollTo(t.x,t.y)}}async function Se(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=_e(new URL(t,document.baseURI));return n?(ve[e.replaceState?"replaceState":"pushState"]({id:$e},"",t),xe(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(he.page.set(r),he.preloading.set(!1),ce)ce.$set(n);else{n.stores={page:{subscribe:he.page.subscribe},preloading:{subscribe:he.preloading.subscribe},session:he.session},n.level0={props:await ie};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Re(t.nextSibling);Re(t),Re(e)}ce=new ee({target:me,props:n,hydrate:!0})}ue=e,fe=JSON.stringify(r.query),le=!0,de=!1}async function ke(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let a;ie||(ie=oe.preloaded[0]||Ot.call(c,{host:n.host,path:n.path,query:n.query,params:{}},pe));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==fe)return!0;const s=ue[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[i]=r[a+1],!e)return{segment:f};const h=i++;if(!de&&!u&&ue[a]&&ue[a].part===e.i)return ue[a];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ae);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(re[e.i]);let m;return m=le||!oe.preloaded[a+1]?d?await d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},pe):{}:oe.preloaded[a+1],o[`level${h}`]={component:p,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}function Ae(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function Re(t){t.parentNode.removeChild(t)}function Pe(t){const e=_e(new URL(t,document.baseURI));if(e)return ge&&t===ge.href||function(t,e){ge={href:t,promise:e}}(t,ke(e)),ge.promise}let Le;function Ce(t){clearTimeout(Le),Le=setTimeout(()=>{Ne(t)},20)}function Ne(t){const e=Oe(t.target);e&&"prefetch"===e.rel&&Pe(e.href)}function qe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Oe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=_e(s);if(o){xe(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),ve.pushState({id:$e},"",s.href)}}function Oe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function je(t){if(be[$e]=Ee(),t.state){const e=_e(new URL(location.href));e?xe(e,t.state.id):location.href=location.href}else(function(t){$e=t})(ye=ye+1),ve.replaceState({id:$e},"",location.href)}!function(t){var e;"scrollRestoration"in ve&&(ve.scrollRestoration="manual"),e=t.target,me=e,addEventListener("click",qe),addEventListener("popstate",je),addEventListener("touchstart",Ne),addEventListener("mousemove",Ce),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ve.replaceState({id:ye},"",e);const n=new URL(location.href);if(oe.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:c,error:a}=oe;ie||(ie=o&&o[0]),Se(null,[],{error:a,status:c,session:s,level0:{props:ie},level1:{props:{status:c,error:a},component:Qt},segments:o},{host:e,path:n,query:we(r),params:{}})}();const r=_e(n);return r?xe(r,ye,!0,t):void 0})}({target:document.querySelector("#sapper")});export{q as A,St as B,b as C,kt as D,At as E,X as F,pt as G,dt as H,Nt as I,D as J,i as K,Q as L,p as M,j as N,I as O,U as P,wt as Q,bt as R,Lt as S,C as a,L as b,l as c,_ as d,x as e,P as f,w as g,u as h,Pt as i,f as j,st as k,yt as l,gt as m,vt as n,M as o,R as p,t as q,E as r,a as s,mt as t,W as u,S as v,N as w,O as x,k as y,xt as z};
