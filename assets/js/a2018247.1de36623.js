"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[8184],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>N});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function m(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?m(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},m=Object.keys(t);for(n=0;n<m.length;n++)e=m[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);for(n=0;n<m.length;n++)e=m[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),l=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):s(s({},a),t)),e},i=function(t){var a=l(t.components);return n.createElement(p.Provider,{value:a},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,m=t.originalType,p=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),c=l(e),h=r,N=c["".concat(p,".").concat(h)]||c[h]||g[h]||m;return e?n.createElement(N,s(s({ref:a},i),{},{components:e})):n.createElement(N,s({ref:a},i))}));function N(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var m=e.length,s=new Array(m);s[0]=h;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[c]="string"==typeof t?t:r,s[1]=o;for(var l=2;l<m;l++)s[l]=e[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}h.displayName="MDXCreateElement"},4864:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>m,metadata:()=>o,toc:()=>l});var n=e(7462),r=(e(7294),e(3905));const m={slug:"avl-tree",title:"C\xe2y AVL, thu\u1eadt to\xe1n s\u1eafp x\u1ebfp AVL",authors:"tranlam",tags:["tree","avl","binary tree","algorithms"],image:"./images/intuition.PNG"},s=void 0,o={permalink:"/blogs/blog/avl-tree",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2021-02-24-avl-tree/index.md",source:"@site/blog/2021-02-24-avl-tree/index.md",title:"C\xe2y AVL, thu\u1eadt to\xe1n s\u1eafp x\u1ebfp AVL",description:"Intuition",date:"2021-02-24T00:00:00.000Z",formattedDate:"February 24, 2021",tags:[{label:"tree",permalink:"/blogs/blog/tags/tree"},{label:"avl",permalink:"/blogs/blog/tags/avl"},{label:"binary tree",permalink:"/blogs/blog/tags/binary-tree"},{label:"algorithms",permalink:"/blogs/blog/tags/algorithms"}],readingTime:8.155,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"avl-tree",title:"C\xe2y AVL, thu\u1eadt to\xe1n s\u1eafp x\u1ebfp AVL",authors:"tranlam",tags:["tree","avl","binary tree","algorithms"],image:"./images/intuition.PNG"},prevItem:{title:"X\xe1c su\u1ea5t th\u1ed1ng k\xea c\u01a1 b\u1ea3n",permalink:"/blogs/blog/probability"},nextItem:{title:"C\xe2y t\xecm ki\u1ebfm nh\u1ecb ph\xe2n",permalink:"/blogs/blog/binarysearch-tree"}},p={image:e(4400).Z,authorsImageUrls:[void 0]},l=[],i={toc:l};function c(t){let{components:a,...m}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,m,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Intuition",src:e(4400).Z,width:"387",height:"265"})),(0,r.kt)("p",null,"\u1ede b\xe0i vi\u1ebft tr\u01b0\u1edbc, m\xecnh \u0111\xe3 n\xf3i v\u1ec1 c\xe2y t\xecm ki\u1ebfm nh\u1ecb ph\xe2n, n\u1ebfu b\u1ea1n \u0111\u1ecdc ch\u01b0a xem qua, c\xf3 th\u1ec3 t\xecm th\u1ea5y ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/blogs/blog/binarysearch-tree"},"t\u1ea1i \u0111\xe2y")),". V\u1edbi s\u1ef1 hi\u1ec7u qu\u1ea3 trong c\xe1c ho\u1ea1t \u0111\u1ed9ng t\xecm ki\u1ebfm, ch\xe8n, x\xf3a,... c\xe2y t\xecm ki\u1ebfm nh\u1ecb ph\xe2n c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n \u0111\u01b0\u1ee3c trong logrithmic time (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{\\Theta(logn)}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0398"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),") \u1edf average case. B\xe0i vi\u1ebft n\xe0y, m\xecnh s\u1ebd n\xf3i v\u1ec1 c\xe2y AVL, l\xe0 1 lo\u1ea1i c\u1ee7a c\xe2y t\xecm ki\u1ebfm nh\u1ecb ph\xe2n, \u0111\u1ea3m b\u1ea3o r\u1eb1ng trong t\u1ea5t c\u1ea3 c\xe1c case, time complexity c\u1ee7a c\xe1c ho\u1ea1t \u0111\u1ed9ng tr\xean \u0111\u1ec1u l\xe0 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{\\Theta(logn)}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0398"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),"."))}c.isMDXComponent=!0},4400:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/intuition-ea3562dd14d23f28d589fbcdc162b9f7.PNG"}}]);