"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[4839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),g=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=g(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=g(r),m=a,u=b["".concat(c,".").concat(m)]||b[m]||s[m]||l;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=r(7462),a=(r(7294),r(3905));const l={slug:"linear-algebra-part-1",title:"\u0110\u1ea1i s\u1ed1 tuy\u1ebfn t\xednh c\u01a1 b\u1ea3n - Ph\u1ea7n 1",authors:"tranlam",tags:["Math","Linear Algebra"],image:"./images/linear-algebra.JPEG"},i=void 0,o={permalink:"/blogs/blog/linear-algebra-part-1",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2021-07-10-linear-algebra-p1/index.md",source:"@site/blog/2021-07-10-linear-algebra-p1/index.md",title:"\u0110\u1ea1i s\u1ed1 tuy\u1ebfn t\xednh c\u01a1 b\u1ea3n - Ph\u1ea7n 1",description:"Linear Algebra",date:"2021-07-10T00:00:00.000Z",formattedDate:"July 10, 2021",tags:[{label:"Math",permalink:"/blogs/blog/tags/math"},{label:"Linear Algebra",permalink:"/blogs/blog/tags/linear-algebra"}],readingTime:25.31,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"linear-algebra-part-1",title:"\u0110\u1ea1i s\u1ed1 tuy\u1ebfn t\xednh c\u01a1 b\u1ea3n - Ph\u1ea7n 1",authors:"tranlam",tags:["Math","Linear Algebra"],image:"./images/linear-algebra.JPEG"},prevItem:{title:"Receptive field trong th\u1ecb gi\xe1c m\xe1y t\xednh",permalink:"/blogs/blog/receptive-field"},nextItem:{title:"X\xe1c su\u1ea5t th\u1ed1ng k\xea c\u01a1 b\u1ea3n",permalink:"/blogs/blog/probability"}},c={image:r(5990).Z,authorsImageUrls:[void 0]},g=[],p={toc:g};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Linear Algebra",src:r(5990).Z,width:"1280",height:"720"})),(0,a.kt)("p",null,"Ti\u1ebfp \u0111\xe2y s\u1ebd l\xe0 lo\u1ea1t b\xe0i vi\u1ebft v\u1ec1 \u0111\u1ea1i s\u1ed1 tuy\u1ebfn t\xednh m\xecnh \u0111\xe3 h\u1ecdc l\u1ea1i khi \u0111\u1ecdc quy\u1ec3n ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://mml-book.github.io/book/mml-book.pdf"},"Mathematics for Machine Learning"))," trong th\u1eddi gian h\u1ecdc v\u1ec1 Machine Learning v\xe0 AI. \u0110\xe2y l\xe0 ph\u1ea7n th\u1ee9 nh\u1ea5t trong lo\u1ea1t b\xe0i n\xe0y."))}s.isMDXComponent=!0},5990:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linear-algebra-f753cc9e7dcb558a20e2d3c52b8c4224.JPEG"}}]);