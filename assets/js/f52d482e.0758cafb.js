"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[4906],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>h});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,g=l(t,["components","mdxType","originalType","parentName"]),p=s(n),h=o,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||a;return n?r.createElement(u,i(i({ref:e},g),{},{components:n})):r.createElement(u,i({ref:e},g))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"sorting-algorithms",title:"C\xe1c thu\u1eadt to\xe1n s\u1eafp x\u1ebfp c\u01a1 b\u1ea3n",authors:"tranlam",tags:["algorithms","sorting"],image:"./images/intro.JPEG"},i=void 0,l={permalink:"/blogs/blog/sorting-algorithms",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2021-02-20-sorting-algorithms/index.md",source:"@site/blog/2021-02-20-sorting-algorithms/index.md",title:"C\xe1c thu\u1eadt to\xe1n s\u1eafp x\u1ebfp c\u01a1 b\u1ea3n",description:"Intro",date:"2021-02-20T00:00:00.000Z",formattedDate:"February 20, 2021",tags:[{label:"algorithms",permalink:"/blogs/blog/tags/algorithms"},{label:"sorting",permalink:"/blogs/blog/tags/sorting"}],readingTime:21.47,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer @ Giaohangtietkiem",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"sorting-algorithms",title:"C\xe1c thu\u1eadt to\xe1n s\u1eafp x\u1ebfp c\u01a1 b\u1ea3n",authors:"tranlam",tags:["algorithms","sorting"],image:"./images/intro.JPEG"},prevItem:{title:"C\xe2y t\xecm ki\u1ebfm nh\u1ecb ph\xe2n",permalink:"/blogs/blog/binarysearch-tree"},nextItem:{title:"Thu\u1eadt to\xe1n t\xecm \u0111\u1ec9nh Peak Finding",permalink:"/blogs/blog/peak-finding"}},c={image:n(4507).Z,authorsImageUrls:[void 0]},s=[],g={toc:s};function m(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Intro",src:n(4507).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Tr\u1edf l\u1ea1i th\xf4i. Nh\u1eefng blogs \u0111\u1ea7u ti\xean n\xe0y m\xecnh s\u1ebd ch\u1ec9 vi\u1ebft v\u1ec1 nh\u1eefng thu\u1eadt to\xe1n c\u01a1 b\u1ea3n nh\u1ea5t khi m\u1edbi ch\u1eadp ch\u1eefng v\xe0o h\u1ecdc l\u1eadp tr\xecnh th\xf4i. Th\u1ee9 nh\u1ea5t, \u0111\u1ec3 m\xecnh h\u1ecdc l\u1ea1i c\xe1c th\u1ee9 c\u01a1 b\u1ea3n (v\xec m\xecnh c\u1ef1c k\xec hay qu\xean). Th\u1ee9 hai, \u0111\u1ec3 c\xe1c b\u1ea1n m\u1edbi h\u1ecdc l\u1eadp tr\xecnh c\xf3 th\u1ec3 tham kh\u1ea3o ha. B\xe0i vi\u1ebft n\xe0y s\u1ebd n\xf3i v\u1ec1 c\xe1c thu\u1eadt to\xe1n s\u1eafp x\u1ebfp c\u01a1 b\u1ea3n m\xecnh \u0111\u01b0\u1ee3c h\u1ecdc \u1edf tr\u01b0\u1eddng l\u1edbp, v\xe0 c\u0169ng t\u1ef1 h\u1ecdc n\u1eefa."))}m.isMDXComponent=!0},4507:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/intro-4e3a1709b0488e2e4e2079c2fd3d4099.JPEG"}}]);