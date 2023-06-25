"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[3661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(l,".").concat(y)]||u[y]||m[y]||i;return r?n.createElement(d,s(s({ref:t},h),{},{components:r})):n.createElement(d,s({ref:t},h))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={slug:"mysql-series-mysql-architecture",title:"MySQL series - MySQL Architecture Overview",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering"],image:"./images/architecture.PNG"},s=void 0,o={permalink:"/blogs/blog/mysql-series-mysql-architecture",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-10-04-mysql-architecture/index.md",source:"@site/blog/2022-10-04-mysql-architecture/index.md",title:"MySQL series - MySQL Architecture Overview",description:"Hello everyone, recently, I did some research in MySQL because I think whoever doing data engineering should go in-depth with a certain relational database. Once you get a deep understanding of one RDBMS, you can easily learn the other RDBMS since they have many similarities. For the next few blogs, I will have a series about MySQL, and this is the first article.",date:"2022-10-04T00:00:00.000Z",formattedDate:"October 4, 2022",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"MySQL",permalink:"/blogs/blog/tags/my-sql"},{label:"Database",permalink:"/blogs/blog/tags/database"},{label:"Data Engineering",permalink:"/blogs/blog/tags/data-engineering"}],readingTime:4.45,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"mysql-series-mysql-architecture",title:"MySQL series - MySQL Architecture Overview",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering"],image:"./images/architecture.PNG"},prevItem:{title:"MySQL series - Transaction In MySQL",permalink:"/blogs/blog/mysql-series-mysql-transaction"},nextItem:{title:"Create A Data Streaming Pipeline With Spark Streaming, Kafka And Docker",permalink:"/blogs/blog/spark-kafka-docker"}},l={image:r(6143).Z,authorsImageUrls:[void 0]},c=[{value:"1. MySQL architecture components",id:"1-mysql-architecture-components",level:3},{value:"2. Connection and security management",id:"2-connection-and-security-management",level:3},{value:"3. MySQL optimizer",id:"3-mysql-optimizer",level:3}],h={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello everyone, recently, I did some research in MySQL because I think whoever doing data engineering should go in-depth with a certain relational database. Once you get a deep understanding of one RDBMS, you can easily learn the other RDBMS since they have many similarities. For the next few blogs, I will have a series about MySQL, and this is the first article."),(0,a.kt)("h3",{id:"1-mysql-architecture-components"},"1. MySQL architecture components"),(0,a.kt)("p",null,"MySQL is widely used not only in small applications but also in large enterprises, thanks to the features of its flexible architecture."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:r(6143).Z,width:"480",height:"616"})),(0,a.kt)("p",null,"The top layer is the Clients layer, this layer is usually not unique to MySQL. They are services like connection handling, authentication, security, etc."),(0,a.kt)("p",null,"The second layer is the layer that contains the code for query analysis, optimization and contains built-in functions that interact with the database such as dates, times, math, encryption, etc. All features are compatible with many storage engines like stored procedures, triggers, views, etc."),(0,a.kt)("p",null,"The third layer is storage engines, which are responsible for storing and retrieving data in MySQL. Each storage engine has its own good and bad sides. The MySQL server interacts with them by the storage engine API, which contains many low-level functions, operations such as starting a transaction, finding records with the corresponding primary key. Storage engines only respond to requests from the server, while parsing queries are made at the second layer."),(0,a.kt)("h3",{id:"2-connection-and-security-management"},"2. Connection and security management"),(0,a.kt)("p",null,"With the default configuration, each connection from the client will occupy one thread, and queries will run in that thread. The server will have a cache of threads ready to use, so they won't need to be created and destroyed every time there is a new connection from the client."),(0,a.kt)("p",null,"When the client connects, the server will need to authenticate that connection based on the host, username, and password. After connecting, the server will check whether the client has permissions to specific database resources (eg, SELECT permission on which table on which database,\u2026)."),(0,a.kt)("h3",{id:"3-mysql-optimizer"},"3. MySQL optimizer"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Overall",src:r(8331).Z,width:"767",height:"677"})),(0,a.kt)("p",null,"When running, MySQL will"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Looking in the query cache to check if the query's results can be found, it will return the results immediately, otherwise it performs the next steps. The memory size of the query cache is assigned in the variable ",(0,a.kt)("inlineCode",{parentName:"li"},"query_cache_size"),", if this variable is updated, MySQL will clear all cached queries one by one and re-initialize the query cache (this can be time consuming)."),(0,a.kt)("li",{parentName:"ul"},"Parse the queries into a tree containing the query's information. The query can be completely rewritten, the order in which the tables are read will be different, how the index should be selected, etc. We can interfere with that analysis by using hints to determine the order. What will it be like to run? At this time, the parser will build a parse tree for the query, besides, it also checks the syntax of the query."),(0,a.kt)("li",{parentName:"ul"},"The preprocessor will check some other constraints such as this table, column or database exist or not, the user's authority to query to which resources."),(0,a.kt)("li",{parentName:"ul"},"Then, the parse tree will be passed through an optimizer to convert it into a query execution plan. A MySQL query can be run in many ways, the optimizer will try to optimize the cost as much as possible (unit is 4KB data page), this cost can be seen by running ",(0,a.kt)("inlineCode",{parentName:"li"},"SHOW STATUS LIKE 'Last_query_cost';"),". The optimizer doesn't really care which storage engines are used, but the choice of storage engine has a big impact on how well the server optimizes the queries because the server needs information from storage engines such as the statistics of the tables, the cost of performing the operations, how the index is supported or the computing power of the storage engines to run more optimally. The optimizer may not be able to choose the best plan to run because the statistics from the storage engines are not absolute, the cost metric may not be equivalent to the cost of running the query, MySQL will try to reduce the cost but not the speed of the query, or user-defined functions will not be evaluated by the optimizer."),(0,a.kt)("li",{parentName:"ul"},"The Query execution plan is a tree that contains each step to generate the results for the query, the server will perform those steps many times until there are no more records to retrieve. Query execution engine communicates with storage engines by storage engine APIs to perform operations according to the query execution plan."),(0,a.kt)("li",{parentName:"ul"},"MySQL storage engines are a management system with each database being a subpath in that filesystem's data path. When creating a table, the table information is stored in the .frm file (for example, the table ",(0,a.kt)("inlineCode",{parentName:"li"},"users")," is stored in the .frm file named ",(0,a.kt)("inlineCode",{parentName:"li"},"user.frm"),")."),(0,a.kt)("li",{parentName:"ul"},"Next, the query will be run and return the results to the client. MySQL also stores the results of the query in the query cache.")),(0,a.kt)("p",null,"Finally, re-caching the results of frequently used queries can improve performance. Previously, MySQL had a query cache in its architecture, as a bottleneck in highly concurrent read and write environments, this query cache in new versions has been deprecated, instead, we often use other data cache methods such as Redis, ..."),(0,a.kt)("p",null,"The above is an overview of the MySQL architecture and the process of running a query. See you in the next posts."))}u.isMDXComponent=!0},6143:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-abe0b0f77dc44fee3fe93e7853e89b83.PNG"},8331:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overall-bf64f4c0ad3b2c1a3fcb3116315a923b.PNG"}}]);