"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[8107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},g),{},{components:n})):r.createElement(f,l({ref:t},g))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={slug:"receptive-field",title:"Receptive field trong th\u1ecb gi\xe1c m\xe1y t\xednh",authors:"tranlam",tags:["Computer Vision","Receptive Field","Artificial Intelligence","AI"],image:"./images/convolution.PNG"},l=void 0,a={permalink:"/blogs/blog/receptive-field",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2021-07-24-receptive-field/index.md",source:"@site/blog/2021-07-24-receptive-field/index.md",title:"Receptive field trong th\u1ecb gi\xe1c m\xe1y t\xednh",description:"Convolution",date:"2021-07-24T00:00:00.000Z",formattedDate:"July 24, 2021",tags:[{label:"Computer Vision",permalink:"/blogs/blog/tags/computer-vision"},{label:"Receptive Field",permalink:"/blogs/blog/tags/receptive-field"},{label:"Artificial Intelligence",permalink:"/blogs/blog/tags/artificial-intelligence"},{label:"AI",permalink:"/blogs/blog/tags/ai"}],readingTime:3.295,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"receptive-field",title:"Receptive field trong th\u1ecb gi\xe1c m\xe1y t\xednh",authors:"tranlam",tags:["Computer Vision","Receptive Field","Artificial Intelligence","AI"],image:"./images/convolution.PNG"},prevItem:{title:"M\u1ed9t s\u1ed1 c\xe2u h\u1ecfi ph\u1ecfng v\u1ea5n AI/ML",permalink:"/blogs/blog/ai-interview-questions"},nextItem:{title:"\u0110\u1ea1i s\u1ed1 tuy\u1ebfn t\xednh c\u01a1 b\u1ea3n - Ph\u1ea7n 1",permalink:"/blogs/blog/linear-algebra-part-1"}},c={image:n(1692).Z,authorsImageUrls:[void 0]},p=[],g={toc:p};function s(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolution",src:n(1692).Z,width:"1377",height:"526"})),(0,i.kt)("p",null,"Trong b\xe0i vi\u1ebft n\xe0y, m\xecnh mu\u1ed1n n\xf3i v\u1ec1 receptive field, m\u1ed9t kh\xe1i ni\u1ec7m r\u1ea5t quan tr\u1ecdng trong c\xe1c b\xe0i to\xe1n th\u1ecb gi\xe1c m\xe1y t\xednh m\xe0 b\u1ea1n n\xe0o h\u1ecdc c\u0169ng c\u1ea7n ph\u1ea3i bi\u1ebft \u0111\u1ec3 gi\u1ea3i th\xedch t\u1ea1i sao ng\u01b0\u1eddi ta l\u1ea1i mu\u1ed1n x\xe2y m\u1ea1ng s\xe2u h\u01a1n. C\xf9ng \u0111i v\xe0o b\xe0i vi\u1ebft th\xf4i."))}s.isMDXComponent=!0},1692:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/convolution-ea9d70d1041af177382b63ca8857afe3.PNG"}}]);