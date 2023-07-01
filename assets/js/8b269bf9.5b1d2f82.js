"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[3119],{3905:(e,r,t)=>{t.d(r,{Zo:()=>g,kt:()=>h});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(h,i(i({ref:r},g),{},{components:t})):a.createElement(h,i({ref:r},g))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5947:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={slug:"mini-spark3-authorizer-part-1",title:"Authorize Spark 3 SQL With Apache Ranger Part 1 - Ranger installation",authors:"tranlam",tags:["Bigdata","Spark","Ranger","Apache"],image:"./images/banner.PNG"},i=void 0,l={permalink:"/blogs/blog/mini-spark3-authorizer-part-1",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2023-06-30-mini-spark3-authorizer-part-1/index.md",source:"@site/blog/2023-06-30-mini-spark3-authorizer-part-1/index.md",title:"Authorize Spark 3 SQL With Apache Ranger Part 1 - Ranger installation",description:"Spark and Ranger are widely used by many enterprises because of their powerful features. Spark is an in-memory data processing framework and Ranger is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform. Thus, Ranger can be used to do authorization for Spark SQL and this blog will walk you through the integration of those two frameworks. This is the first part of the series, where we install the Ranger framework on our machine, and additionally, Apache Solr for auditing.",date:"2023-06-30T00:00:00.000Z",formattedDate:"June 30, 2023",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"Spark",permalink:"/blogs/blog/tags/spark"},{label:"Ranger",permalink:"/blogs/blog/tags/ranger"},{label:"Apache",permalink:"/blogs/blog/tags/apache"}],readingTime:4.035,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"mini-spark3-authorizer-part-1",title:"Authorize Spark 3 SQL With Apache Ranger Part 1 - Ranger installation",authors:"tranlam",tags:["Bigdata","Spark","Ranger","Apache"],image:"./images/banner.PNG"},prevItem:{title:"Authorize Spark 3 SQL With Apache Ranger Part 2 - Integrate Spark SQL With Ranger",permalink:"/blogs/blog/mini-spark3-authorizer-part-2"},nextItem:{title:"State Management In React",permalink:"/blogs/blog/state-management-react"}},s={image:t(2032).Z,authorsImageUrls:[void 0]},p=[],g={toc:p};function c(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Spark and Ranger are widely used by many enterprises because of their powerful features. Spark is an in-memory data processing framework and Ranger is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform. Thus, Ranger can be used to do authorization for Spark SQL and this blog will walk you through the integration of those two frameworks. This is the first part of the series, where we install the Ranger framework on our machine, and additionally, Apache Solr for auditing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"banner",src:t(2032).Z,width:"751",height:"286"})))}c.isMDXComponent=!0},2032:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/banner-f7f67c4c18838de8d49230557182b09d.PNG"}}]);