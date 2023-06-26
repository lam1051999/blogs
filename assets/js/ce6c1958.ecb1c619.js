"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[614],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>u});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function m(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},p=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},c="mdxType",h={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,p=m(a,["components","mdxType","originalType","parentName"]),c=o(t),d=s,u=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return t?n.createElement(u,i(i({ref:e},p),{},{components:t})):n.createElement(u,i({ref:e},p))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,i=new Array(r);i[0]=d;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=a,m[c]="string"==typeof a?a:s,i[1]=m;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},752:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const r={slug:"mysql-series-mysql-transaction",title:"MySQL series - Transaction In MySQL",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Transaction"],image:"./images/transaction.JPEG"},i=void 0,m={permalink:"/blogs/blog/mysql-series-mysql-transaction",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-10-06-mysql-transaction/index.md",source:"@site/blog/2022-10-06-mysql-transaction/index.md",title:"MySQL series - Transaction In MySQL",description:"Poster",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"MySQL",permalink:"/blogs/blog/tags/my-sql"},{label:"Database",permalink:"/blogs/blog/tags/database"},{label:"Data Engineering",permalink:"/blogs/blog/tags/data-engineering"},{label:"Transaction",permalink:"/blogs/blog/tags/transaction"}],readingTime:5.34,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"mysql-series-mysql-transaction",title:"MySQL series - Transaction In MySQL",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Transaction"],image:"./images/transaction.JPEG"},prevItem:{title:"MySQL series - Multiversion concurrency control",permalink:"/blogs/blog/mysql-series-mysql-mvcc"},nextItem:{title:"MySQL series - MySQL Architecture Overview",permalink:"/blogs/blog/mysql-series-mysql-architecture"}},l={image:t(7423).Z,authorsImageUrls:[void 0]},o=[{value:"1. What is transaction?",id:"1-what-is-transaction",level:3},{value:"2. Four data preservation properties in relational database",id:"2-four-data-preservation-properties-in-relational-database",level:3},{value:"3. Four isolation level in highly concurrent read and write environments",id:"3-four-isolation-level-in-highly-concurrent-read-and-write-environments",level:3},{value:"4. Transaction deadlock",id:"4-transaction-deadlock",level:3},{value:"5. Transaction logging",id:"5-transaction-logging",level:3},{value:"6. Autocommit",id:"6-autocommit",level:3}],p={toc:o};function c(a){let{components:e,...r}=a;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Poster",src:t(7423).Z,width:"624",height:"396"})),(0,s.kt)("p",null,"The next article in the MySQL series is about transactions. A very common operation in MySQL in particular and relational databases in general. Let's go to the article."),(0,s.kt)("h3",{id:"1-what-is-transaction"},"1. What is transaction?"),(0,s.kt)("p",null,"A transaction is a set of SQL statements put together as a unit of work. If the database successfully runs all SQL statements in that group, it is considered successful. If one of the SQL commands fails, all the SQL commands that have been run or not run will have no effect on the database. An example of a set of SQL statements wrapped in a transaction follows"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"    1  START  TRANSACTION;\n    2  SELECT balance FROM checking WHERE customer_id = 10233276;\n    3  UPDATE checking SET balance = balance - 200.00 WHERE customer_id = 10233276;\n    4  UPDATE savings SET balance = balance - 200.00 WHERE customer_id = 10233276;\n    5  COMMIT;\n")),(0,s.kt)("p",null,"Transactions are started by START TRANSACTION and are usually closed by COMMIT (confirm transaction) or ROLLBACK (return to pre-transaction state). If the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"4"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"h")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{4^{th}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"))))))))))))))," statement fails, the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"3"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{3^{rd}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))))))))))))," statement will be rolledback and nothing will happen to affect the old data."),(0,s.kt)("h3",{id:"2-four-data-preservation-properties-in-relational-database"},"2. Four data preservation properties in relational database"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ACID",src:t(7959).Z,width:"875",height:"489"})),(0,s.kt)("p",null,"Every system needs to satisfy four ACID properties to ensure data preservation"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Atomicity")),(0,s.kt)("p",null,"Transaction needs to act as a unit of work. Either all SQL statements in the transaction are applied or none are applied."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Consistency")),(0,s.kt)("p",null,"Database needs to be consistent, only being moved from one consistent state to another. The example above, if the error occurs after running the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"3"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{3^{rd}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))))))))))))," statement, the checking account will not lose 200$ when the transaction has not been committed. The total money in the two accounts before and after the transaction remains the same."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Isolation")),(0,s.kt)("p",null,"The result of this transaction will be invisible to other transactions when this transaction is not finished, not committed. For example, when transaction 1 is running between ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"3"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{3^{rd}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))))))))))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"4"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"h")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{4^{th}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"))))))))))))))," statements above, another transaction that summarizes the balances of the accounts will still see 200$ in the checking account. When a transaction is uncommitted, no changes will affect the database."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Durability")),(0,s.kt)("p",null,"Once committed, the changes made by the transaction will be permanent, the changes need to be recorded to ensure that the data is not lost if the system fails."),(0,s.kt)("h3",{id:"3-four-isolation-level-in-highly-concurrent-read-and-write-environments"},"3. Four isolation level in highly concurrent read and write environments"),(0,s.kt)("p",null,"There are 4 isolation levels related to transactions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")),(0,s.kt)("p",null,"In this mode, transactions can see the results of other uncommitted transactions. This mode does not perform much faster than many other modes but easily causes problems when reading wrong data."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"READ COMMITTED")),(0,s.kt)("p",null,"The default mode of most databases (but not MySQL), it will lose some of the ACID Isolation properties, this transaction will be visible to changes by other transactions committed after this transaction starts, however changes to this transaction remain invisible until it is committed. This can cause two identical read statements in a transaction to return two different datasets."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"REPEATABLE READ")),(0,s.kt)("p",null,"This mode is the default of MySQL. It ensures that within the same transaction, the same read statements will return the same result. But there will also be a small problem that if we select a range of values, another transaction inserts a new record in that range, we will see that new record. Storage engines like InnoDB, XtraDB solve this problem by creating multiple versions of a record that manage concurrent reads and writes."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SERIALIZABLE")),(0,s.kt)("p",null,"This mode solves the problem of reading a range of values \u200b\u200babove by running transactions in order. This mode will lock all the rows it reads, a lot of timeouts and locking occur frequently, concurrent reads and writes will be reduced."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Isolation Level",src:t(4466).Z,width:"1318",height:"316"})),(0,s.kt)("h3",{id:"4-transaction-deadlock"},"4. Transaction deadlock"),(0,s.kt)("p",null,"Deadlock occurs when two or more transactions lock the same resources, creating a cycle of dependency"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"-- Transaction 1\n    START TRANSACTION;\n    UPDATE StockPrice SET close = 45.50 WHERE stock_id = 4 and date = \u20182020-05-01\u2019;\n    UPDATE StockPrice SET close = 19.80 WHERE stock_id = 3 and date = \u20182020-05-02\u2019;\n    COMMIT;\n-- Transaction 2\n    START TRANSACTION;\n    UPDATE StockPrice SET high = 20.12 WHERE stock_id = 3 and date = \u20182020-05-02\u2019;\n    UPDATE StockPrice SET high = 47.20 WHERE stock_id = 4 and date = \u20182020-05-01\u2019;\n    COMMIT;\n")),(0,s.kt)("p",null,"After these two transactions finish running the first command, when running the second command. The records with the corresponding id of this transaction are being locked by another transaction, as well as another transaction that is locked by this transaction. InnoDB will return an error if a dependency circle is detected. The way InnoDB handles deadlock is that it will rollback the transaction with the fewest locked rows."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Deadlock",src:t(8532).Z,width:"1910",height:"1042"})),(0,s.kt)("h3",{id:"5-transaction-logging"},"5. Transaction logging"),(0,s.kt)("p",null,"Transaction logging makes transaction execution more efficient. Instead of updating directly to the disk table every time there is a change, it updates to the copy of the data in memory. Then the transaction log will be written to disk with append mode, this operation is very fast because only sequential I/O is required in disk, more cost-effective, after a while these changes will be applied to the actual data on disk. Because this log is written on disk, it will be durable, if the system fails after writing the transaction log to disk but before updating the changes to the main data, the storage engine can still recover those changes."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Transaction Log",src:t(6778).Z,width:"740",height:"636"})),(0,s.kt)("h3",{id:"6-autocommit"},"6. Autocommit"),(0,s.kt)("p",null,"By default, INSERT, UPDATE, and DELETE statements are wrapped in temporary transactions and committed as soon as they run, this is AUTOCOMMIT mode. To enable this mode run the sentence SET AUTOCOMMIT = 1; otherwise, SET AUTOCOMMIT = 0. Some special commands can commit a transaction while in an open transaction, such as DDL statements. We can set the isolation level for MySQL by running the SET TRANSACTION ISOLATION LEVEL command, after running this isolation level will take effect in subsequent transactions. You can set it in the configuration file for the whole server, or just set it in your session"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;\n")),(0,s.kt)("p",null,"We should not process tables with different storage engines in the same transaction, because there are some storage engines that will not support data rollback (MyISAM storage engine), if some error occurs during transaction execution, only some tables will be rolled back causing loss of consistency."),(0,s.kt)("p",null,"This is the end of the article, see you in the next blogs."))}c.isMDXComponent=!0},7959:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/acid-8932890988825239e3b0ba3afb39206a.PNG"},8532:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/deadlock-f575d25cdb29225a1b0ebebaebeaa4ca.JPEG"},4466:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/isolation_levels-d31e1dbaccc5a3acbd8a45093e79433c.PNG"},7423:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/transaction-d127eedc5523b254bf641791d40e6ce7.JPEG"},6778:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/transaction_log-ed06e47eebdd08b13fed212c7e595b00.PNG"}}]);