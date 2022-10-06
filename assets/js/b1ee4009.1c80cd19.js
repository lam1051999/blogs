"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[5074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,b=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(b,o(o({ref:t},g),{},{components:n})):r.createElement(b,o({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={slug:"mysql-series-mysql-transaction",title:"MySQL series - Transaction trong MySQL",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Transaction"],image:"./images/acid.PNG"},o=void 0,s={permalink:"/blogs/blog/mysql-series-mysql-transaction",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-10-06-mysql-transaction/index.md",source:"@site/blog/2022-10-06-mysql-transaction/index.md",title:"MySQL series - Transaction trong MySQL",description:"B\xe0i vi\u1ebft ti\u1ebfp theo trong series MySQL v\u1ec1 transaction. M\u1ed9t ho\u1ea1t \u0111\u1ed9ng r\u1ea5t ph\u1ed5 bi\u1ebfn trong MySQL n\xf3i ri\xeang v\xe0 c\xe1c c\u01a1 s\u1edf d\u1eef li\u1ec7u quan h\u1ec7 n\xf3i chung. C\xf9ng \u0111i v\xe0o b\xe0i vi\u1ebft n\xe0o.",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"MySQL",permalink:"/blogs/blog/tags/my-sql"},{label:"Database",permalink:"/blogs/blog/tags/database"},{label:"Data Engineering",permalink:"/blogs/blog/tags/data-engineering"},{label:"Transaction",permalink:"/blogs/blog/tags/transaction"}],readingTime:6.455,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer @ Giaohangtietkiem",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"mysql-series-mysql-transaction",title:"MySQL series - Transaction trong MySQL",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Transaction"],image:"./images/acid.PNG"},nextItem:{title:"MySQL series - T\u1ed5ng quan ki\u1ebfn tr\xfac MySQL",permalink:"/blogs/blog/mysql-series-mysql-architecture"}},l={image:n(7959).Z,authorsImageUrls:[void 0]},c=[],g={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"B\xe0i vi\u1ebft ti\u1ebfp theo trong series MySQL v\u1ec1 transaction. M\u1ed9t ho\u1ea1t \u0111\u1ed9ng r\u1ea5t ph\u1ed5 bi\u1ebfn trong MySQL n\xf3i ri\xeang v\xe0 c\xe1c c\u01a1 s\u1edf d\u1eef li\u1ec7u quan h\u1ec7 n\xf3i chung. C\xf9ng \u0111i v\xe0o b\xe0i vi\u1ebft n\xe0o."))}m.isMDXComponent=!0},7959:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/acid-8932890988825239e3b0ba3afb39206a.PNG"}}]);