"use strict";(self.webpackChunklamtran_blog=self.webpackChunklamtran_blog||[]).push([[9258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={slug:"understanding-snowflake-micro-partitions/",title:"Understanding Snowflake micro-partitions",description:"Understanding Snowflake micro-partitions",authors:"tranlam",tags:["Snowflake","Cloud","Data Platform"],image:"./images/snowflake-micro-partitions.png"},r=void 0,l={permalink:"/blog/understanding-snowflake-micro-partitions/",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2024-12-24-understanding-snowflake-micro-partitions/index.md",source:"@site/blog/2024-12-24-understanding-snowflake-micro-partitions/index.md",title:"Understanding Snowflake micro-partitions",description:"Understanding Snowflake micro-partitions",date:"2024-12-24T00:00:00.000Z",formattedDate:"December 24, 2024",tags:[{label:"Snowflake",permalink:"/blog/tags/snowflake"},{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"Data Platform",permalink:"/blog/tags/data-platform"}],readingTime:6.685,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"understanding-snowflake-micro-partitions/",title:"Understanding Snowflake micro-partitions",description:"Understanding Snowflake micro-partitions",authors:"tranlam",tags:["Snowflake","Cloud","Data Platform"],image:"./images/snowflake-micro-partitions.png"},nextItem:{title:"Differences between Spark RDD, Dataframe and Dataset",permalink:"/blog/spark-rdd-dataframe-dataset/"}},s={image:a(8393).Z,authorsImageUrls:[void 0]},p=[{value:"1. Partitioning in traditional Data Lake",id:"1-partitioning-in-traditional-data-lake",level:2},{value:"2. Snowflake micro-partitions overview",id:"2-snowflake-micro-partitions-overview",level:2},{value:"3. How do Snowflake perform table updates?\u200b",id:"3-how-do-snowflake-perform-table-updates",level:2},{value:"4. Clustering information of micro partitions",id:"4-clustering-information-of-micro-partitions",level:2},{value:"5. Clustered key and tips\u200b",id:"5-clustered-key-and-tips",level:2},{value:"6. Real life use case",id:"6-real-life-use-case",level:2},{value:"7. References",id:"7-references",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Snowflake is one of the most popular data warehouse solutions nowaday because of the various features that it can provide you to build a complete data platform. Understanding the Snowflake storage layer not only helps us to have a deep dive into how it organizes the data under the hood but it is also crucial for performance optimization of your queries."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"banner image",src:a(8393).Z,width:"1377",height:"734"})),(0,i.kt)("h2",{id:"1-partitioning-in-traditional-data-lake"},"1. Partitioning in traditional Data Lake"),(0,i.kt)("p",null,"When working with traditional Data Lake solution such as Hadoop, we often organized partitions of tables in hierarchical folder structure with partition column as subfolders, data stored in files\u200b."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"traditional partitioning",src:a(6079).Z,width:"1350",height:"584"})),(0,i.kt)("p",null,"Although this approach is easy for visual exploration and query, there are many drawbacks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We need to predefine the partition columns for the table\u200b and always be mindful in table design and partitions selection\u200b at the first place. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE company_revenue (\n    id INTEGER NOT NULL,\n    revenue DECIMAL(38, 15) NOT NULL\n) PARTITION BY (date INTEGER);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overhead of maintenance: adding more partitioned columns to the table requires whole table rewrite and metadata changes, the more partitions the more metadata size and management burden,...\u200b"),(0,i.kt)("li",{parentName:"ul"},"Low performance when filtering on non-partitioned columns\u200b"),(0,i.kt)("li",{parentName:"ul"},"Suffer from the data skewness problem leading to low performance query even with partitioned data\u200b"),(0,i.kt)("li",{parentName:"ul"},"Not having the best query pushdown and pruning\u200b since there are likely only partition columns that can be pruned")),(0,i.kt)("h2",{id:"2-snowflake-micro-partitions-overview"},"2. Snowflake micro-partitions overview"),(0,i.kt)("p",null,"Snowflake Data Platform implements a powerful and unique form of partitioning, called micro-partitioning. Unlike traditional static partitioning schemes that require manual partition key definition, Snowflake's micro-partitions are automatically created during data ingestion based on natural sort order and file size optimization. This approach enables partition pruning, data clustering, and autonomous optimization without the overhead of partition management or the risk of partition skew."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tables in Snowflake are divided into micro partitions automatically without overhead of manual maintenance\u200b")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"table micro partitions",src:a(8393).Z,width:"1377",height:"734"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each micro partition contains 50 -> 500 MB of uncompressed data (~16 MB of compressed data), efficient for query pruning\u200b. There can be overlap between micro partitions in the value ranges it stores, so that they can be similar in size, data volume, to reduce data skewness problem\u200b")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"micro partitions size",src:a(2201).Z,width:"2288",height:"1544"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data stored in columnar oriented format for efficient query projection\u200b. Snowflake decides the most efficient compression algorithm to use for each column based on the column datatype and statistics\u200b")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"columnar oriented format",src:a(7504).Z,width:"2266",height:"1406"})),(0,i.kt)("p",null,"Snowflake stored metadata of each micro partition\u200b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The range of values for each of the columns\u200b"),(0,i.kt)("li",{parentName:"ul"},"The number of distinct values\u200b"),(0,i.kt)("li",{parentName:"ul"},"Additional properties used for both optimization and efficient query processing\u200b")),(0,i.kt)("p",null,"This information can help the query optimizer calculate the cost of each query plan and choose the best plan for processing the work units submitted to the virtual warehouse cluster."),(0,i.kt)("h2",{id:"3-how-do-snowflake-perform-table-updates"},"3. How do Snowflake perform table updates?\u200b"),(0,i.kt)("p",null,"Snowflake micro partitions are immutable, they will not be modified once it is created. Data updates on the table will result in new micro partition creation, not modifying existing ones, with the changes applied compared with the old ones. The old micro partitions will either be destroyed immediately or remain for a certain amount of time based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA_RETENTION_TIME_IN_DAYS")," parameter set on the table."),(0,i.kt)("p",null,"The immutable characteristic of micro partitions is also the reason that makes Time-Travel possible and easy to manage\u200b because of the ability to traverse back to the old version of data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"insert update delete",src:a(3346).Z,width:"3418",height:"2933"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If we insert new records into the table, new micro partitions will be created"),(0,i.kt)("li",{parentName:"ul"},"If we update or delete certain records of the table, old micro partitions will be obsoleted and new micro partitions will be created with the changes applied")),(0,i.kt)("h2",{id:"4-clustering-information-of-micro-partitions"},"4. Clustering information of micro partitions"),(0,i.kt)("p",null,"During data ingestion into Snowflake tables, the platform automatically generates and maintains clustering metadata at the micro-partition level. This metadata contains statistical information about value distributions and data boundaries for each column within each micro-partition. "),(0,i.kt)("p",null,"The query optimizer then leverages this fine-grained metadata to implement partition pruning, eliminating non-qualifying micro-partitions from the scan path based on query predicates."),(0,i.kt)("p",null,"The number of micro partitions that are needed to scan depends dramatically on how the micro partitions are organized. There are 2 pieces of information that can show how well the table is clustered"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clustering Depth: the average depth (1 or greater) of the overlapping micro-partitions for specified columns in a table"),(0,i.kt)("li",{parentName:"ul"},"Clustering Width: The number of micro-partitions containing values that overlap with each other")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"clustering depth",src:a(3051).Z,width:"1340",height:"813"})),(0,i.kt)("p",null,"The smaller the clustering metrics are, the better clustered the table is with regards to the specified columns.\u200b Hence, the query that has filter/join conditions on that column will have better performance compare to the query on other columns."),(0,i.kt)("p",null,"For above picture, suppose that we have query ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT * FROM table_a WHERE column_a = 'h'"),", the scenario that ",(0,i.kt)("inlineCode",{parentName:"p"},"clustering depth = 5"),", we will need to scan all 5 partitions to get the result. Otherwise, ",(0,i.kt)("inlineCode",{parentName:"p"},"clustering depth = 1"),", we will only need to scan the partition that contains value range from ",(0,i.kt)("inlineCode",{parentName:"p"},"e -> j"),"."),(0,i.kt)("p",null,"For checking the clustering information, use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/functions/system_clustering_information"},"SYSTEM$CLUSTERING_INFORMATION")," function."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"clustering information",src:a(9489).Z,width:"2778",height:"1548"})),(0,i.kt)("p",null,"In above case, try adding ",(0,i.kt)("inlineCode",{parentName:"p"},"DATE(INSERTED_TIME)")," filter in every of your queries will boost the performance of READ query as a whole."),(0,i.kt)("h2",{id:"5-clustered-key-and-tips"},"5. Clustered key and tips\u200b"),(0,i.kt)("p",null,"To overcome the problem that a certain set of columns of the table have bad clustering information, Snowflake introduces the Clustering key concept. Normally, it is similar to indexes in an operational database. The clustering key in Snowflake is a subset of columns in a table (or expressions on a table) that are explicitly designated to co-locate the data in the table in the same micro-partitions\u200b"),(0,i.kt)("p",null,"Clustering key often provides the most benefits when\u200b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Applied on the table that has infrequent DML (less re-clustering operation needed)\u200b"),(0,i.kt)("li",{parentName:"ul"},"Columns that are most actively used in selective filters\u200b"),(0,i.kt)("li",{parentName:"ul"},"Columns frequently used in join predicates\u200b"),(0,i.kt)("li",{parentName:"ul"},"Columns that have enough (medium) cardinality (number of distinct values of that column/number of records in the table) to not only enable effective pruning but also effectively group rows in the same micro-partitions\u200b")),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"SEGMENT_CODE")," column of the previous section table, we can put the clustering key in order to re-organize the data distribution and boost the performance of the query using the filter/join conditions on that column."),(0,i.kt)("p",null,"Be mindful that ",(0,i.kt)("a",{parentName:"p",href:"https://www.snowflake.com/legal-files/CreditConsumptionTable.pdf"},"Clustering key cost = 2 credits = 8$\u200b"),"."),(0,i.kt)("h2",{id:"6-real-life-use-case"},"6. Real life use case"),(0,i.kt)("p",null,"Imagine you have a very large table in Snowflake with billions of records, you are required to remove 90% of the records from the table as part of the data archival process"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy \ud83d\ude1d just ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE FROM <table> WHERE <dead_condition>;\u200b")),(0,i.kt)("li",{parentName:"ul"},"Wait \ud83e\udd14 did you forget anything important? Snowflake will try to search for the eligible micro partitions and create a new micro partition from the old one. It will destroy the old version immediately or not based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"DATA_RETENTION_TIME_IN_DAYS")," we set on the table\u200b. In the worst case, the records that need to be deleted are located in all table micro partitions then your query will scan the whole table and recreate lots of micro partitions\u200b."),(0,i.kt)("li",{parentName:"ul"},"There need to be a better solution right? \ud83d\ude35\u200d\ud83d\udcab\u200b"),(0,i.kt)("li",{parentName:"ul"},"Wait \ud83d\ude32 query 10% records that have ",(0,i.kt)("inlineCode",{parentName:"li"},"<suriving_condition>")," will be a lot faster right? So we can do\u200b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE <new_table> AS SELECT * FROM <table> WHERE <suriving_condition>;\u200b\nALTER TABLE <table> RENAME TO <table_backup>;\u200b\nALTER TABLE <new_table> RENAME TO <table>;\u200b\nDROP TABLE <table_backup>;\u200b\n")),(0,i.kt)("p",null,"With the above approach, 1st query will be much faster when it scans only 10% of the data\u200b. 2nd, 3rd, 4th are metadata queries so they are also fast\u200b. Using the trick, you will save a lot of time and Snowflake credits. Depending on the size of your data, the cost saving can be tens of times."),(0,i.kt)("h2",{id:"7-references"},"7. References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions"},"Micro-partitions & Data Clustering")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-time-travel"},"Understanding & using Time Travel")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/pulse/impact-dml-operations-micro-partitions-snowflake-minzhen-yang/"},"The Impact of DML Operations with micro-partitions in Snowflake")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/tables-clustering-keys"},"Clustering Keys & Clustered Tables")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.snowflake.com/legal-files/CreditConsumptionTable.pdf"},"Snowflake Service Consumption Table")))}u.isMDXComponent=!0},3051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/clustering-depth-06bc0bb75825f17c4d751f8568e275a7.png"},9489:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/clustering-information-0a4c7fe129ebbe4b5abab9cd75ec1752.png"},7504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/columnar-oriented-format-59f90b02bebb57fec64d671e6032ea99.png"},3346:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/insert-update-delete-f6a9f5d3646ed74bf237b455efe4d670.png"},2201:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/micro-partitions-size-e509e6adb9c9e79dbc983bd3df07f5cd.png"},8393:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowflake-micro-partitions-edc6e519a4607d59ed44eccb953172fd.png"},6079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/traditional-partitioning-9bcebf49f06b854f23fa4994540ff97b.png"}}]);