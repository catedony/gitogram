(function(e){function t(t){for(var c,o,i=t[0],a=t[1],u=t[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],c=!0,i=1;i<s.length;i++){var a=s[i];0!==n[a]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var c={},n={app:0},r=[];function o(t){if(c[t])return c[t].exports;var s=c[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=c,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(s,c,function(t){return e[t]}.bind(null,c));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/gitogram/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=a;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"2d83":function(e,t,s){},"3ca8":function(e,t,s){},"4f91":function(e,t,s){"use strict";s("8603")},"56d7":function(e,t,s){"use strict";s.r(t);var c=s("7a23");function n(e,t,s,n,r,o){const i=Object(c["n"])("Feeds");return Object(c["i"])(),Object(c["c"])(i)}const r={class:"top"},o={class:"avatars"};function i(e,t,s,n,i,a){const u=Object(c["n"])("Logo"),l=Object(c["n"])("Topline"),b=Object(c["n"])("Avatar"),d=Object(c["n"])("Header"),p=Object(c["n"])("RepositoryList");return Object(c["i"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(d,{class:"header"},{topline:Object(c["q"])(()=>[Object(c["e"])("div",r,[Object(c["g"])(u),Object(c["g"])(l)])]),content:Object(c["q"])(()=>[Object(c["e"])("div",o,[(Object(c["i"])(),Object(c["d"])(c["a"],null,Object(c["l"])(10,e=>Object(c["g"])(b,{class:"avatar",key:e})),64))])]),_:1}),Object(c["g"])(p,{reps:i.reps,class:"list"},null,8,["reps"])],64)}const a={class:"topline"},u={class:"content"};function l(e,t,s,n,r,o){const i=Object(c["n"])("Logo");return Object(c["i"])(),Object(c["d"])("header",null,[Object(c["e"])("div",a,[Object(c["m"])(e.$slots,"topline",{},()=>[Object(c["g"])(i)],!0)]),Object(c["e"])("div",u,[Object(c["m"])(e.$slots,"content",{},void 0,!0)])])}const b={alt:"Gitogram",src:"Gitogram.svg"};function d(e,t){return Object(c["i"])(),Object(c["d"])("img",b)}var p=s("6b0d"),j=s.n(p);const O={},f=j()(O,[["render",d]]);var v=f,g={name:"Header",components:{Logo:v}};s("69d2");const _=j()(g,[["render",l],["__scopeId","data-v-7d59cc4e"]]);var m=_;const h=e=>(Object(c["k"])("data-v-5ecf260a"),e=e(),Object(c["j"])(),e),y=h(()=>Object(c["e"])("li",null,[Object(c["e"])("img",{src:"icons/Home.svg",alt:"Home"})],-1)),x=h(()=>Object(c["e"])("li",null,[Object(c["e"])("img",{src:"icons/Logout.svg",alt:"Logout"})],-1));function I(e,t,s,n,r,o){const i=Object(c["n"])("Avatar");return Object(c["i"])(),Object(c["d"])("ul",null,[y,Object(c["e"])("li",null,[Object(c["g"])(i,{class:"avatar"})]),x])}const k={class:"avatar"},R=["src"];function w(e,t,s,n,r,o){return Object(c["i"])(),Object(c["d"])("div",k,[Object(c["e"])("img",{src:s.src,alt:"Avatar"},null,8,R)])}var A={name:"Avatar",props:{src:{type:String,default:"ProfilePic.png"}}};s("feee");const L=j()(A,[["render",w],["__scopeId","data-v-02a2e492"]]);var T=L,V={name:"Topline",components:{Avatar:T}};s("4f91");const P=j()(V,[["render",I],["__scopeId","data-v-5ecf260a"]]);var S=P;function q(e,t,s,n,r,o){const i=Object(c["n"])("RepositoryDescription"),a=Object(c["n"])("RepositoryItem");return Object(c["i"])(),Object(c["d"])("ul",null,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(s.reps,e=>(Object(c["i"])(),Object(c["d"])("li",{key:e.id},[Object(c["g"])(a,{rep:e},{default:Object(c["q"])(()=>[Object(c["g"])(i,{rep:e},null,8,["rep"])]),_:2},1032,["rep"])]))),128))])}const M={class:"repository"},H={class:"user"},C={class:"user__name"},F={class:"issues"},$={class:"issue__author"};function D(e,t,s,n,r,o){const i=Object(c["n"])("Avatar"),a=Object(c["n"])("Toggler");return Object(c["i"])(),Object(c["d"])("div",M,[Object(c["e"])("div",H,[Object(c["g"])(i,{class:"user__avatar"}),Object(c["e"])("span",C,Object(c["o"])(s.rep.author),1)]),Object(c["m"])(e.$slots,"default",{},void 0,!0),Object(c["g"])(a,{onToggle:t[0]||(t[0]=e=>r.issuesVisible=!r.issuesVisible),isOpen:r.issuesVisible},{default:Object(c["q"])(()=>[r.issuesVisible?(Object(c["i"])(),Object(c["d"])(c["a"],{key:0},[Object(c["f"])("Hide issues")],64)):(Object(c["i"])(),Object(c["d"])(c["a"],{key:1},[Object(c["f"])("View issues")],64))]),_:1},8,["isOpen"]),Object(c["r"])(Object(c["e"])("ul",F,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(s.rep.issues,e=>(Object(c["i"])(),Object(c["d"])("li",{class:"issue",key:e.id},[Object(c["e"])("div",$,Object(c["o"])(e.author),1),Object(c["e"])("div",null,Object(c["o"])(e.text),1)]))),128))],512),[[c["p"],r.issuesVisible]])])}function J(e,t,s,n,r,o){return Object(c["i"])(),Object(c["d"])("button",{onClick:t[0]||(t[0]=t=>e.$emit("toggle")),class:"toggler"},[Object(c["m"])(e.$slots,"default",{},void 0,!0),Object(c["e"])("span",null,[Object(c["e"])("img",{src:"icons/Toggler.svg",class:Object(c["h"])(["toggler__icon",{isOpen:s.isOpen}])},null,2)])])}var G={name:"Toggler",props:{isOpen:{type:Boolean,required:!0}}};s("7a99");const B=j()(G,[["render",J],["__scopeId","data-v-3ec8f457"]]);var N=B,z={name:"RepositoryList",components:{Avatar:T,Toggler:N},props:{rep:{type:Object,required:!0}},data(){return{issuesVisible:!1}}};s("5d78");const E=j()(z,[["render",D],["__scopeId","data-v-2a414618"]]);var K=E;const Q=e=>(Object(c["k"])("data-v-4705d71e"),e=e(),Object(c["j"])(),e),U={class:"description"},W={class:"description__title"},X={class:"buttons"},Y={class:"buttons__stars buttons__section"},Z=Q(()=>Object(c["e"])("button",null,[Object(c["e"])("img",{src:"icons/Star.svg",class:"buttons__icon"}),Object(c["e"])("span",null,"Star")],-1)),ee={class:"buttons__count"},te={class:"buttons__fork buttons__section"},se=Q(()=>Object(c["e"])("button",null,[Object(c["e"])("img",{src:"icons/Fork.svg",class:"buttons__icon"}),Object(c["e"])("span",null,"Fork")],-1)),ce={class:"buttons__count"};function ne(e,t,s,n,r,o){return Object(c["i"])(),Object(c["d"])("div",U,[Object(c["e"])("h2",W,Object(c["o"])(s.rep.title),1),Object(c["e"])("p",null,Object(c["o"])(s.rep.description),1),Object(c["e"])("div",X,[Object(c["e"])("div",Y,[Z,Object(c["e"])("div",ee,Object(c["o"])(s.rep.stars),1)]),Object(c["e"])("div",te,[se,Object(c["e"])("div",ce,Object(c["o"])(s.rep.fork),1)])])])}var re={name:"RepositoryDescription",props:{rep:{type:Object,required:!0}}};s("d8d5");const oe=j()(re,[["render",ne],["__scopeId","data-v-4705d71e"]]);var ie=oe,ae={name:"RepositoryList",props:{reps:{type:Array,required:!0}},data(){return{}},components:{RepositoryItem:K,RepositoryDescription:ie}};s("a6bd");const ue=j()(ae,[["render",q],["__scopeId","data-v-cfa3cd1c"]]);var le=ue,be=s("7348"),de={name:"Feeds",components:{Header:m,Logo:v,Avatar:T,Topline:S,RepositoryList:le},data(){return{reps:be}}};s("60d0");const pe=j()(de,[["render",i],["__scopeId","data-v-39edbdf1"]]);var je=pe,Oe={name:"App",components:{Feeds:je}};s("bbc3");const fe=j()(Oe,[["render",n]]);var ve=fe;Object(c["b"])(ve).mount("#app")},"5d78":function(e,t,s){"use strict";s("6a1e")},"60d0":function(e,t,s){"use strict";s("3ca8")},"672d":function(e,t,s){},"69d2":function(e,t,s){"use strict";s("f40a")},"6a1e":function(e,t,s){},7348:function(e){e.exports=JSON.parse('[{"id":"0","author":"joshua_l","author_pic":"","title":"Vue.js","description":"Repositiry description","stars":156,"fork":4,"issues":[{"id":"0","author":"Camille","text":"Issue text"},{"id":"1","author":"joshua_l","text":"Issue text"},{"id":"2","author":"Marselle","text":"Issue text"}]},{"id":"1","author":"Camille","author_pic":"","title":"Vue.js","description":"Repositiry description","stars":156,"fork":4,"issues":[{"author":"Camille","text":"Issue text"},{"author":"joshua_l","text":"Issue text"},{"author":"Marselle","text":"Issue text"}]},{"id":"2","author":"Marselle","author_pic":"","title":"Vue.js","description":"Repositiry description","stars":156,"fork":4,"issues":[{"author":"Camille","text":"Issue text"},{"author":"joshua_l","text":"Issue text"},{"author":"Marselle","text":"Issue text"}]}]')},"7a99":function(e,t,s){"use strict";s("672d")},8603:function(e,t,s){},"8e12":function(e,t,s){},a6bd:function(e,t,s){"use strict";s("8e12")},bbc3:function(e,t,s){"use strict";s("2d83")},d45f:function(e,t,s){},d8d5:function(e,t,s){"use strict";s("d45f")},f40a:function(e,t,s){},f629:function(e,t,s){},feee:function(e,t,s){"use strict";s("f629")}});
//# sourceMappingURL=app.95908820.js.map