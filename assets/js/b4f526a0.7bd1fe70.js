"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[4091],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},l=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=p(a),h=r,u=m["".concat(s,".").concat(h)]||m[h]||g[h]||i;return a?n.createElement(u,o(o({ref:e},l),{},{components:a})):n.createElement(u,o({ref:e},l))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[m]="string"==typeof t?t:r,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6240:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={slug:"spark-catalyst-optimizer-and-spark-session-extension",title:"Spark catalyst optimizer v\xe0 Spark session extension",authors:"tranlam",tags:["Bigdata","Spark","Apache"],image:"./images/spark-catalyst-optimizer.JPG"},o=void 0,c={permalink:"/blogs/blog/spark-catalyst-optimizer-and-spark-session-extension",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2023-01-07-spark-catalyst-optimizer-and-spark-extension/index.md",source:"@site/blog/2023-01-07-spark-catalyst-optimizer-and-spark-extension/index.md",title:"Spark catalyst optimizer v\xe0 Spark session extension",description:"Spark catalyst optimizer n\u1eb1m trong ph\u1ea7n core c\u1ee7a Spark SQL v\u1edbi m\u1ee5c \u0111\xedch t\u1ed1i \u01b0u c\xe1c truy v\u1ea5n c\xf3 c\u1ea5u tr\xfac \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n d\u01b0\u1edbi d\u1ea1ng SQL ho\u1eb7c qua c\xe1c API DataFrame/Dataset, gi\u1ea3m thi\u1ec3u th\u1eddi gian v\xe0 chi ph\xed ch\u1ea1y c\u1ee7a \u1ee9ng d\u1ee5ng. Khi s\u1eed d\u1ee5ng Spark, th\u01b0\u1eddng m\u1ecdi ng\u01b0\u1eddi xem catalyst optimizer nh\u01b0 l\xe0 m\u1ed9t black box, khi ch\xfang ta m\u1eb7c nhi\xean cho r\u1eb1ng n\xf3 ho\u1ea1t \u0111\u1ed9ng m\u1ed9t c\xe1ch th\u1ea7n b\xed m\xe0 kh\xf4ng th\u1ef1c s\u1ef1 quan t\xe2m b\xean trong n\xf3 x\u1ea3y ra nh\u1eefng g\xec. \u1ede b\xe0i vi\u1ebft n\xe0y, m\xecnh s\u1ebd \u0111i v\xe0o t\xecm hi\u1ec3u b\xean trong logic c\u1ee7a n\xf3 th\u1ef1c s\u1ef1 th\u1ebf n\xe0o, c\xe1c th\xe0nh ph\u1ea7n, v\xe0 c\xe1ch m\xe0 Spark session extension tham gia \u0111\u1ec3 thay \u0111\u1ed5i c\xe1c plan c\u1ee7a catalyst.",date:"2023-01-07T00:00:00.000Z",formattedDate:"January 7, 2023",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"Spark",permalink:"/blogs/blog/tags/spark"},{label:"Apache",permalink:"/blogs/blog/tags/apache"}],readingTime:16.35,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"spark-catalyst-optimizer-and-spark-session-extension",title:"Spark catalyst optimizer v\xe0 Spark session extension",authors:"tranlam",tags:["Bigdata","Spark","Apache"],image:"./images/spark-catalyst-optimizer.JPG"},prevItem:{title:"Spark Adaptive Query Execution",permalink:"/blogs/blog/spark-adaptive-query-execution"},nextItem:{title:"MySQL series - Indexing",permalink:"/blogs/blog/mysql-series-mysql-indexing"}},s={image:a(2941).Z,authorsImageUrls:[void 0]},p=[],l={toc:p};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Spark catalyst optimizer n\u1eb1m trong ph\u1ea7n core c\u1ee7a Spark SQL v\u1edbi m\u1ee5c \u0111\xedch t\u1ed1i \u01b0u c\xe1c truy v\u1ea5n c\xf3 c\u1ea5u tr\xfac \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n d\u01b0\u1edbi d\u1ea1ng SQL ho\u1eb7c qua c\xe1c API DataFrame/Dataset, gi\u1ea3m thi\u1ec3u th\u1eddi gian v\xe0 chi ph\xed ch\u1ea1y c\u1ee7a \u1ee9ng d\u1ee5ng. Khi s\u1eed d\u1ee5ng Spark, th\u01b0\u1eddng m\u1ecdi ng\u01b0\u1eddi xem catalyst optimizer nh\u01b0 l\xe0 m\u1ed9t black box, khi ch\xfang ta m\u1eb7c nhi\xean cho r\u1eb1ng n\xf3 ho\u1ea1t \u0111\u1ed9ng m\u1ed9t c\xe1ch th\u1ea7n b\xed m\xe0 kh\xf4ng th\u1ef1c s\u1ef1 quan t\xe2m b\xean trong n\xf3 x\u1ea3y ra nh\u1eefng g\xec. \u1ede b\xe0i vi\u1ebft n\xe0y, m\xecnh s\u1ebd \u0111i v\xe0o t\xecm hi\u1ec3u b\xean trong logic c\u1ee7a n\xf3 th\u1ef1c s\u1ef1 th\u1ebf n\xe0o, c\xe1c th\xe0nh ph\u1ea7n, v\xe0 c\xe1ch m\xe0 Spark session extension tham gia \u0111\u1ec3 thay \u0111\u1ed5i c\xe1c plan c\u1ee7a catalyst."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"spark catalyst optimizer",src:a(2941).Z,width:"1280",height:"720"})))}m.isMDXComponent=!0},2941:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/spark-catalyst-optimizer-03f0f2a4cb6e0c86499aaa51ba69b065.JPG"}}]);