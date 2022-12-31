"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[7208],{3905:(n,t,e)=>{e.d(t,{Zo:()=>g,kt:()=>m});var i=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},c=Object.keys(n);for(i=0;i<c.length;i++)e=c[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(i=0;i<c.length;i++)e=c[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var l=i.createContext({}),h=function(n){var t=i.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},g=function(n){var t=h(n.components);return i.createElement(l.Provider,{value:t},n.children)},s={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(n,t){var e=n.components,r=n.mdxType,c=n.originalType,l=n.parentName,g=a(n,["components","mdxType","originalType","parentName"]),u=h(e),m=r,p=u["".concat(l,".").concat(m)]||u[m]||s[m]||c;return e?i.createElement(p,o(o({ref:t},g),{},{components:e})):i.createElement(p,o({ref:t},g))}));function m(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var c=e.length,o=new Array(c);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=n,a.mdxType="string"==typeof n?n:r,o[1]=a;for(var h=2;h<c;h++)o[h]=e[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}u.displayName="MDXCreateElement"},2649:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var i=e(7462),r=(e(7294),e(3905));const c={slug:"mysql-series-mysql-mvcc",title:"MySQL series - Multiversion concurrency control",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Transaction"],image:"./images/overall.PNG"},o=void 0,a={permalink:"/blogs/blog/mysql-series-mysql-mvcc",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-10-07-mysql-multiversion-concurrency-control/index.md",source:"@site/blog/2022-10-07-mysql-multiversion-concurrency-control/index.md",title:"MySQL series - Multiversion concurrency control",description:"Th\u01b0\u1eddng nh\u1eefng storage engine \u0111\u1ec1u kh\xf4ng s\u1eed d\u1ee5ng c\u01a1 ch\u1ebf row lock \u0111\u01a1n gi\u1ea3n, \u0111\u1ec3 \u0111\u1ea1t \u0111\u01b0\u1ee3c hi\u1ec7u n\u0103ng t\u1ed1t trong m\xf4i tr\u01b0\u1eddng \u0111\u1ecdc ghi \u0111\u1ed3ng th\u1eddi cao, c\xe1c storage engine tri\u1ec3n khai row lock v\u1edbi \u0111\u1ed9 ph\u1ee9c t\u1ea1p nh\u1ea5t \u0111\u1ecbnh, ph\u01b0\u01a1ng ph\xe1p th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\xf3 ch\xednh l\xe0 multiversion concurrency control (MVCC).",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"MySQL",permalink:"/blogs/blog/tags/my-sql"},{label:"Database",permalink:"/blogs/blog/tags/database"},{label:"Data Engineering",permalink:"/blogs/blog/tags/data-engineering"},{label:"Transaction",permalink:"/blogs/blog/tags/transaction"}],readingTime:2.555,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer @ Giaohangtietkiem",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"mysql-series-mysql-mvcc",title:"MySQL series - Multiversion concurrency control",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Transaction"],image:"./images/overall.PNG"},prevItem:{title:"MySQL series - Indexing",permalink:"/blogs/blog/mysql-series-mysql-indexing"},nextItem:{title:"MySQL series - Transaction trong MySQL",permalink:"/blogs/blog/mysql-series-mysql-transaction"}},l={image:e(4107).Z,authorsImageUrls:[void 0]},h=[{value:"1. Gi\u1edbi thi\u1ec7u v\u1ec1 MVCC",id:"1-gi\u1edbi-thi\u1ec7u-v\u1ec1-mvcc",level:3},{value:"2. MVCC trong InnoDB",id:"2-mvcc-trong-innodb",level:3},{value:"3. Isolation level v\u1edbi MVCC",id:"3-isolation-level-v\u1edbi-mvcc",level:3}],g={toc:h};function s(n){let{components:t,...c}=n;return(0,r.kt)("wrapper",(0,i.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Th\u01b0\u1eddng nh\u1eefng storage engine \u0111\u1ec1u kh\xf4ng s\u1eed d\u1ee5ng c\u01a1 ch\u1ebf row lock \u0111\u01a1n gi\u1ea3n, \u0111\u1ec3 \u0111\u1ea1t \u0111\u01b0\u1ee3c hi\u1ec7u n\u0103ng t\u1ed1t trong m\xf4i tr\u01b0\u1eddng \u0111\u1ecdc ghi \u0111\u1ed3ng th\u1eddi cao, c\xe1c storage engine tri\u1ec3n khai row lock v\u1edbi \u0111\u1ed9 ph\u1ee9c t\u1ea1p nh\u1ea5t \u0111\u1ecbnh, ph\u01b0\u01a1ng ph\xe1p th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\xf3 ch\xednh l\xe0 multiversion concurrency control (MVCC). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MVCC Overall",src:e(4107).Z,width:"1120",height:"650"})),(0,r.kt)("h3",{id:"1-gi\u1edbi-thi\u1ec7u-v\u1ec1-mvcc"},"1. Gi\u1edbi thi\u1ec7u v\u1ec1 MVCC"),(0,r.kt)("p",null,"MVCC \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong r\u1ea5t nhi\u1ec1u lo\u1ea1i c\u01a1 s\u1edf d\u1eef li\u1ec7u quan h\u1ec7, n\xf3 gi\xfap ch\xfang ta lock \xedt d\u1eef li\u1ec7u nh\u1ea5t c\xf3 th\u1ec3 khi th\u1ef1c hi\u1ec7n nhi\u1ec1u transaction m\u1ed9t l\xfac, n\xf3 c\xf3 th\u1ec3 cho ph\xe9p ch\xfang ta kh\xf4ng b\u1ecb lock khi \u0111\u1ecdc d\u1eef li\u1ec7u v\xe0 ch\u1ec9 lock nh\u1eefng row c\u1ea7n thi\u1ebft khi ghi d\u1eef li\u1ec7u."),(0,r.kt)("h3",{id:"2-mvcc-trong-innodb"},"2. MVCC trong InnoDB"),(0,r.kt)("p",null,"MVCC ho\u1ea1t \u0111\u1ed9ng b\u1eb1ng c\xe1ch snapshot l\u1ea1i d\u1eef li\u1ec7u t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m n\xe0o \u0111\xf3, n\xean m\u1ed9t transaction c\xf3 th\u1ec3 nh\xecn th\u1ea5y d\u1eef li\u1ec7u nh\u01b0 nhau cho d\xf9 ch\xfang ch\u1ea1y nhanh hay r\u1ea5t l\xe2u. Tuy nhi\xean, n\xf3 c\u0169ng g\xe2y ra c\xe1c transaction kh\xe1c nhau c\xf3 th\u1ec3 nh\xecn th\u1ea5y c\xe1c view d\u1eef li\u1ec7u kh\xe1c nhau c\u1ee7a c\xf9ng m\u1ed9t b\u1ea3ng trong c\xf9ng m\u1ed9t th\u1eddi \u0111i\u1ec3m."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MVCC Detail Example",src:e(1543).Z,width:"1306",height:"660"})),(0,r.kt)("p",null,"InnoDB s\u1ebd g\xe1n m\u1ed9t transaction id cho m\u1ed9t transaction m\u1ed7i khi n\xf3 b\u1eaft \u0111\u1ea7u \u0111\u1ecdc m\u1ed9t d\u1eef li\u1ec7u n\xe0o \u0111\xf3. C\xe1c thay \u0111\u1ed5i c\u1ee7a m\u1ed9t b\u1ea3n ghi trong transaction \u0111\xf3 s\u1ebd \u0111\u01b0\u1ee3c ghi v\xe0o undo log \u0111\u1ec3 ph\u1ee5c v\u1ee5 cho vi\u1ec7c revert d\u1eef li\u1ec7u, v\xe0 rollback pointer c\u1ee7a transaction \u0111\xf3 s\u1ebd tr\u1ecf v\xe0o v\u1ecb tr\xed c\u1ee7a b\u1ea3n ghi undo log \u0111\xf3. Khi m\u1ed9t phi\xean kh\xe1c b\u1eaft \u0111\u1ea7u \u0111\u1ecdc b\u1ea3n ghi b\u1ecb thay \u0111\u1ed5i \u1edf tr\xean, InnoDB s\u1ebd so s\xe1nh transaction id c\u1ee7a b\u1ea3n ghi v\u1edbi view d\u1eef li\u1ec7u m\xe0 phi\xean \u0111\xf3 \u0111\u1ecdc. N\u1ebfu b\u1ea3n ghi \u0111ang trong tr\u1ea1ng th\xe1i v\xf4 h\xecnh v\u1edbi c\xe1c transaction kh\xe1c (v\xed d\u1ee5 nh\u01b0 transaction thay \u0111\u1ed5i b\u1ea3n ghi \u0111\xf3 ch\u01b0a \u0111\u01b0\u1ee3c commit), undo log s\u1ebd \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng tr\xean view d\u1eef li\u1ec7u cho \u0111\u1ebfn khi b\u1ea3n ghi \u0111\xf3 tr\u1edf v\u1ec1 tr\u1ea1ng th\xe1i c\xf3 th\u1ec3 \u0111\u1ecdc \u0111\u01b0\u1ee3c b\u1edfi c\xe1c transaction kh\xe1c."),(0,r.kt)("p",null,"T\u1ea5t c\u1ea3 undo log \u0111\u01b0\u1ee3c ghi \u0111\u1ec1u \u0111\u01b0\u1ee3c ch\xe9p l\u1ea1i v\xe0o redo log b\u1edfi v\xec ch\xfang ph\u1ee5c v\u1ee5 cho qu\xe1 tr\xecnh ph\u1ee5c h\u1ed3i d\u1eef li\u1ec7u khi h\u1ec7 th\u1ed1ng l\u1ed7i. K\xedch th\u01b0\u1edbc c\u1ee7a undo log v\xe0 redo log c\u0169ng \u1ea3nh h\u01b0\u1edbng t\u1edbi kh\u1ea3 n\u0103ng th\u1ef1c hi\u1ec7n \u0111\u1ecdc ghi trong m\xf4i tr\u01b0\u1eddng c\xf3 \u0111\u1ed9 \u0111\u1ecdc ghi \u0111\u1ed3ng th\u1eddi cao."),(0,r.kt)("p",null,"Tuy l\u1ee3i \xedch l\xe0 ta kh\xf4ng bao gi\u1edd b\u1ecb lock khi \u0111\u1ecdc nh\u01b0ng storage engine c\u1ea7n ph\u1ea3i l\u01b0u tr\u1eef th\xeam nhi\u1ec1u d\u1eef li\u1ec7u h\u01a1n v\u1edbi m\u1ed7i b\u1ea3n ghi, l\xe0m nhi\u1ec1u c\xf4ng vi\u1ec7c ki\u1ec3m so\xe1t, v\xe0 th\u1ef1c hi\u1ec7n nhi\u1ec1u ho\u1ea1t \u0111\u1ed9ng h\u01a1n."),(0,r.kt)("h3",{id:"3-isolation-level-v\u1edbi-mvcc"},"3. Isolation level v\u1edbi MVCC"),(0,r.kt)("p",null,"MVCC ch\u1ec9 kh\u1ea3 d\u1ee5ng v\u1edbi c\xe1c ch\u1ebf \u0111\u1ed9 REPEATABLE READ v\xe0 READ COMMITTED. MVCC kh\xf4ng t\u01b0\u01a1ng th\xedch v\u1edbi READ UNCOMMITTED v\xec c\xe1c truy v\u1ea5n s\u1ebd kh\xf4ng \u0111\u1ecdc c\xe1c b\u1ea3n ghi m\xe0 phi\xean b\u1ea3n c\u1ee7a n\xf3 kh\xf4ng tr\xf9ng v\u1edbi phi\xean b\u1ea3n c\u1ee7a transaction. MVCC kh\xf4ng t\u01b0\u01a1ng th\xedch v\u1edbi SERIALIZABLE b\u1edfi v\xec vi\u1ec7c kho\xe1 khi \u0111\u1ecdc c\u1ee7a ch\u1ebf \u0111\u1ed9 n\xe0y (C\xe1c ch\u1ebf \u0111\u1ed9 isolation level c\xe1c b\u1ea1n c\xf3 th\u1ec3 t\xecm th\u1ea5y ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/blogs/blog/mysql-series-mysql-transaction#3-4-isolation-level-trong-m%C3%B4i-tr%C6%B0%E1%BB%9Dng-c%C3%B3-nhi%E1%BB%81u-%C4%91%E1%BB%8Dc-ghi-%C4%91%E1%BB%93ng-th%E1%BB%9Di"},"t\u1ea1i \u0111\xe2y")),")"))}s.isMDXComponent=!0},1543:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/detail-bc1a08a0a2af294bed4d2b8e61e8277b.PNG"},4107:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/overall-77a16d83b283e7c4b5286b77c9e250fb.PNG"}}]);