"use strict";(self.webpackChunklamtran_blog=self.webpackChunklamtran_blog||[]).push([[1741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={slug:"mysql-series-mysql-indexing",title:"MySQL series - Indexing",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Indexing"],image:"./images/indexing.PNG"},o=void 0,l={permalink:"/blog/mysql-series-mysql-indexing",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-10-15-mysql-indexing/index.md",source:"@site/blog/2022-10-15-mysql-indexing/index.md",title:"MySQL series - Indexing",description:"Indexing is a method to make queries faster, which is a very important part of improving performance. For large data tables, precise indexing will increase the query speed as a whole, however, this is often not taken into account in the table design process. This article talks about the types of indexes and how to properly index them.",date:"2022-10-15T00:00:00.000Z",formattedDate:"October 15, 2022",tags:[{label:"Bigdata",permalink:"/blog/tags/bigdata"},{label:"MySQL",permalink:"/blog/tags/my-sql"},{label:"Database",permalink:"/blog/tags/database"},{label:"Data Engineering",permalink:"/blog/tags/data-engineering"},{label:"Indexing",permalink:"/blog/tags/indexing"}],readingTime:10.425,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"mysql-series-mysql-indexing",title:"MySQL series - Indexing",authors:"tranlam",tags:["Bigdata","MySQL","Database","Data Engineering","Indexing"],image:"./images/indexing.PNG"},prevItem:{title:"Spark Catalyst Optimizer And Spark Session Extension",permalink:"/blog/spark-catalyst-optimizer-and-spark-session-extension"},nextItem:{title:"MySQL series - Multiversion concurrency control",permalink:"/blog/mysql-series-mysql-mvcc"}},s={image:n(343).Z,authorsImageUrls:[void 0]},d=[{value:"1. Types of index",id:"1-types-of-index",level:3},{value:"1.1. B-tree index",id:"11-b-tree-index",level:4},{value:"1.1.1. Adaptive hash index",id:"111-adaptive-hash-index",level:5},{value:"1.1.2. Types of query that are efficient with B-tree index",id:"112-types-of-query-that-are-efficient-with-b-tree-index",level:5},{value:"1.1.3. Drawbacks of B-tree index",id:"113-drawbacks-of-b-tree-index",level:5},{value:"1.2. Full-text index",id:"12-full-text-index",level:4},{value:"1.2.1. Types of full-text index",id:"121-types-of-full-text-index",level:5},{value:"2. Benefits of indexing",id:"2-benefits-of-indexing",level:3},{value:"3. Indexing strategies",id:"3-indexing-strategies",level:3},{value:"3.1. Prefix index for text field",id:"31-prefix-index-for-text-field",level:4},{value:"3.2. Index on multiple columns",id:"32-index-on-multiple-columns",level:4},{value:"3.3. Choose the correct order of columns to index",id:"33-choose-the-correct-order-of-columns-to-index",level:4}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Indexing is a method to make queries faster, which is a very important part of improving performance. For large data tables, precise indexing will increase the query speed as a whole, however, this is often not taken into account in the table design process. This article talks about the types of indexes and how to properly index them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Indexing",src:n(343).Z,width:"786",height:"668"})),(0,i.kt)("h3",{id:"1-types-of-index"},"1. Types of index"),(0,i.kt)("p",null,"There are many types of indexes designed for different purposes. Remember, indexes are implemented at the storage engine layer, not at the server layer, so they behave differently in different storage engines. The types of indexes in this article are mainly about indexes in InnoDB."),(0,i.kt)("h4",{id:"11-b-tree-index"},"1.1. B-tree index"),(0,i.kt)("p",null,"B-tree index uses a balanced tree to store its data, almost all MySQL storage engines support this type of index (or its variant), for example, the NDB Cluster storage engine uses the data structure T-tree for indexing, InnoDB uses B+ tree,..."),(0,i.kt)("p",null,"In B-tree, all values \u200b\u200bare sorted, and leaves are equally spaced from the root of the tree. Below figure is a description of the B-tree data structure."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B Tree",src:n(1773).Z,width:"1306",height:"930"})),(0,i.kt)("p",null,"B-trees provide the ability to search, access sequential data, insert and delete with logarithmic time complexity ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"l"),(0,i.kt)("mi",{parentName:"mrow"},"o"),(0,i.kt)("mi",{parentName:"mrow"},"g"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{O(log(n))}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},"))")))))),". At the root node, there will be pointers to the child nodes, when we query, the storage engine will know the appropriate subnode branch to browse by looking at the values \u200b\u200bin the node pages, containing the upper and lower threshold information, child nodes in that page. At the leaf page layer, pointers point to data instead of other pages."),(0,i.kt)("p",null,"In the image above, we only see a node page and leaf pages. In fact, the B-tree has many layers of node pages between the root node and the leaf nodes, the size of the tree depends on the size of the indexed table."),(0,i.kt)("h5",{id:"111-adaptive-hash-index"},"1.1.1. Adaptive hash index"),(0,i.kt)("p",null,"When index values \u200b\u200bare accessed with high frequency, InnoDB will build a hash index for them in memory on top of the B-tree index, making it possible to find this hash value very quickly and efficiently. This mode is automatic by InnoDB, however, you can still disable adaptive hash index if you want."),(0,i.kt)("h5",{id:"112-types-of-query-that-are-efficient-with-b-tree-index"},"1.1.2. Types of query that are efficient with B-tree index"),(0,i.kt)("p",null,"B-tree indexes work well with exact-value, range, or value-prefix query types. These queries are best when we use them on the leftmost column in the indexed set of columns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE People (\n     last_name varchar(50) not null,\n     first_name varchar(50) not null,\n     dob date not null,\n     KEY `idx_full_col` (last_name, first_name, dob)\n) ENGINE=InnoDB;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exact match: when the columns in the index are queried to match a certain value, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE last_name = 'lam' AND first_name = 'tran' AND dob = '1999-05-10'"),". This type of query will return results very quickly."),(0,i.kt)("li",{parentName:"ul"},"Match the leftmost column: for example, if we query to find people with ",(0,i.kt)("inlineCode",{parentName:"li"},"last_name = 'lam'"),"."),(0,i.kt)("li",{parentName:"ul"},"Match the first part of the left most column: For example, when we find the person whose last_name starts with the letter 'L'."),(0,i.kt)("li",{parentName:"ul"},"Match a range of values: when we need to get the set of people whose last_name is between 'anh' and 'lam'."),(0,i.kt)("li",{parentName:"ul"},"Match the leftmost column and a range of the next column values: for example, when we need information about people last_name is 'lam' and first_name starts with 't'.")),(0,i.kt)("h5",{id:"113-drawbacks-of-b-tree-index"},"1.1.3. Drawbacks of B-tree index"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It won't really help when the query condition doesn't start with the leftmost column, nor is it good when the query finds people whose last_name ends with a specific letter."),(0,i.kt)("li",{parentName:"ul"},"Queries that skip some columns also don't take full advantage of the index. For example when looking for people ",(0,i.kt)("inlineCode",{parentName:"li"},"last_name = 'lam' AND dob = '1999-05-10'")," with no condition on first_name."),(0,i.kt)("li",{parentName:"ul"},"Indexes of this type will not take advantage of the columns behind the range matching column. For example, the query people ",(0,i.kt)("inlineCode",{parentName:"li"},"last_name = 'lam' AND first_name LIKE 't%' AND dob = '1999-05-10'")," will only apply the index on the last_name and first_name columns. For columns with less distinct data, we can overcome this by enumerating all values \u200b\u200binstead of accessing the range of values.")),(0,i.kt)("p",null,"Thus, the order of the columns in the index is really important, you need to consider the query goal of the application before indexing the columns."),(0,i.kt)("h4",{id:"12-full-text-index"},"1.2. Full-text index"),(0,i.kt)("p",null,"The full-text index searches for keywords in the text string instead of comparing the field's value directly. It aids in searching rather than judging what type the data matches. When a column has a full-text index, we can still type a B-tree index on that column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tutorial (\n    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,\n    title VARCHAR(200),\n    description TEXT,\n    FULLTEXT `idx_full_text` (title,description)\n) ENGINE=InnoDB;\n")),(0,i.kt)("p",null,"The full-text index is used by syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH() AGAINST()")," with the parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH()")," are columns to search, separated by commas. The parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"AGAINST()")," is a string to search and type of search to perform."),(0,i.kt)("h5",{id:"121-types-of-full-text-index"},"1.2.1. Types of full-text index"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Natural language search: this mode will interpret the search string as a phrase in natural human language. This mode does not count stopwords as well as words shorter than the minimum number of characters (default is 3 characters with InnoDB)."),(0,i.kt)("li",{parentName:"ul"},"Boolean search: interprets the search string using special query language rules. The string contains all the words to be searched, it can also contain special operators for advanced searches, such as a word that needs to appear in the string, or a word that is weighted heavier or lighter. Stop words will be ignored in this mode."),(0,i.kt)("li",{parentName:"ul"},"Query expansion: is a variation of natural language search. The words in the most relevant rows returned will be added to the search string, and the search will be repeated. The query will return rows in the second search.")),(0,i.kt)("p",null,"I won't go into each type in detail, because I rarely use the full-text index."),(0,i.kt)("h3",{id:"2-benefits-of-indexing"},"2. Benefits of indexing"),(0,i.kt)("p",null,"Some benefits of indexing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Index helps server save time for browsing and querying."),(0,i.kt)("li",{parentName:"ul"},"Index helps the server avoid operations such as sorting data or creating temporary tables."),(0,i.kt)("li",{parentName:"ul"},"Index turns random disk access into sequential access, improving read speed")),(0,i.kt)("p",null,"Some criteria to evaluate index"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Index needs to arrange related rows, closer together."),(0,i.kt)("li",{parentName:"ul"},"The sorted rows should be exactly what your application queries need."),(0,i.kt)("li",{parentName:"ul"},"Index needs to contain all the columns that your application query filters.")),(0,i.kt)("h3",{id:"3-indexing-strategies"},"3. Indexing strategies"),(0,i.kt)("p",null,"Creating the right indexes will greatly improve your query speed, which in turn makes your application more responsive to users."),(0,i.kt)("h4",{id:"31-prefix-index-for-text-field"},"3.1. Prefix index for text field"),(0,i.kt)("p",null,"Consider Index Selectivity is the ratio between the number of different column values \u200b\u200b/ total records of the table. For columns with high Index Selectivity, indexing on these fields is very effective because MySQL will remove more records when filtering on those columns. For long text fields, we cannot index the whole column length because MySQL won't allow that, so we need to find a good enough prefix of that field to index and it will give us a good enough performance."),(0,i.kt)("p",null,"Try with the product data below, we list the top ten sellers that appear the most"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select productVendor, count(1) c from `classicmodels`.`products_index`\ngroup by productVendor\norder by c desc\nLIMIT 10;\n\n+--------------------------------------------------+----+\n| productVendor                                    | c  |\n+--------------------------------------------------+----+\n| Pressure and Safety Relief Valve                 | 10 |\n| NEC United Solutions                             |  9 |\n| SunGard Data Systems                             |  8 |\n| Zhengzhou Esunny Information Technology Co.,Ltd. |  8 |\n| Spring Support                                   |  8 |\n| Ball and Plug Valve                              |  7 |\n| LSAW Pipe                                        |  7 |\n| Wood Mackenzie Ltd                               |  7 |\n| Heat Recovery Steam Generator                    |  7 |\n| Carbon Steel Flange                              |  7 |\n+--------------------------------------------------+----+\n")),(0,i.kt)("p",null,"Try to calculate the frequency of occurrence of length 3 prefix with the field ",(0,i.kt)("inlineCode",{parentName:"p"},"productVendor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select LEFT(productVendor, 3), count(1) c from `classicmodels`.`products_index`\ngroup by LEFT(productVendor, 3)\norder by c desc\nLIMIT 10;\n\n+------------------------+----+\n| LEFT(productVendor, 3) | c  |\n+------------------------+----+\n| Sha                    | 44 |\n| Car                    | 16 |\n| Sun                    | 15 |\n| Zhe                    | 13 |\n| Gas                    | 12 |\n| Sto                    | 11 |\n| Pre                    | 11 |\n| Col                    | 11 |\n| She                    |  9 |\n| Hea                    |  9 |\n+------------------------+----+\n")),(0,i.kt)("p",null,"We see that the frequency of occurrence of length 3 prefix is a lot more compare to full column values, which equates to fewer distinct values, which equates to a much smaller Index Selectivity. So prefix 3 is not a good choice"),(0,i.kt)("p",null,"Let's calculate the Index Selectivity with various prefix lengths"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select COUNT(DISTINCT LEFT(productVendor, 3))/COUNT(1) AS selectivity_3,\nCOUNT(DISTINCT LEFT(productVendor, 4))/COUNT(1) AS selectivity_4,\nCOUNT(DISTINCT LEFT(productVendor, 5))/COUNT(1) AS selectivity_5,\nCOUNT(DISTINCT LEFT(productVendor, 6))/COUNT(1) AS selectivity_6,\nCOUNT(DISTINCT LEFT(productVendor, 7))/COUNT(1) AS selectivity_7,\nCOUNT(DISTINCT LEFT(productVendor, 8))/COUNT(1) AS selectivity_8,\nCOUNT(DISTINCT LEFT(productVendor, 9))/COUNT(1) AS selectivity_9,\nCOUNT(DISTINCT LEFT(productVendor, 10))/COUNT(1) AS selectivity_10,\nCOUNT(DISTINCT LEFT(productVendor, 11))/COUNT(1) AS selectivity_11,\nCOUNT(DISTINCT productVendor)/COUNT(1) AS selectivity\nfrom `classicmodels`.`products_index`;\n\n+---------------+---------------+---------------+---------------+---------------+---------------+---------------+----------------+----------------+-------------+\n| selectivity_3 | selectivity_4 | selectivity_5 | selectivity_6 | selectivity_7 | selectivity_8 | selectivity_9 | selectivity_10 | selectivity_11 | selectivity |\n+---------------+---------------+---------------+---------------+---------------+---------------+---------------+----------------+----------------+-------------+\n|        0.1982 |        0.2164 |        0.2218 |        0.2236 |        0.2236 |        0.2273 |        0.2309 |         0.2491 |         0.2509 |      0.2600 |\n+---------------+---------------+---------------+---------------+---------------+---------------+---------------+----------------+----------------+-------------+\n")),(0,i.kt)("p",null,"We see that the selectivity prefix 11 is very close to the column selectivity value, and is also quite suitable for long text fields like this column, so choosing prefix 11 will balance the size of the index as well as the speed of the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE `classicmodels`.`products_index` ADD KEY (productVendor(11));\n")),(0,i.kt)("h4",{id:"32-index-on-multiple-columns"},"3.2. Index on multiple columns"),(0,i.kt)("p",null,"Some mistakes when indexing is indexing each column separately, and creating indexes for all columns in the WHERE statement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t (\n     c1 INT,\n     c2 INT,\n     c3 INT,\n     KEY(c1),\n     KEY(c2),\n     KEY(c3)\n);\n")),(0,i.kt)("p",null,"Separate indexes like the one above will usually not optimize performance very much in most situations, because then MySQL can use a tactic called index merge. Index merge will use all the indexes in the query, scan the indexes simultaneously, then merge the results again."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Union index will be used for OR condition"),(0,i.kt)("li",{parentName:"ul"},"Intersection index will be used for AND condition"),(0,i.kt)("li",{parentName:"ul"},"Union of intersection index for the union of both 2")),(0,i.kt)("p",null,"Here is an example query on 2 index fields but MySQL uses index merge"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> explain select * from `classicmodels`.`products_index` where productVendor = 'Infor Global Solutions' OR productScale = '1:10'\\G\n*************************** 1. row ***************************\n           id: 1\n  select_type: SIMPLE\n        table: products_index\n   partitions: NULL\n         type: index_merge\npossible_keys: productVendor,productScale\n          key: productVendor,productScale\n      key_len: 14,12\n          ref: NULL\n         rows: 33\n     filtered: 100.00\n        Extra: Using sort_union(productVendor,productScale); Using where\n")),(0,i.kt)("p",null,"Some considerations when query encounters index merge"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the server intersects the index (AND condition on the indexes), it means that you can create an index containing all the columns related to each other, not each index for each column."),(0,i.kt)("li",{parentName:"ul"},"If the server union index (OR condition on the indexes), check if those columns have high Index Selectivity, if the Index Selectivity in some columns is low, it means that the column has few different values, that is, the scan index returns more records for the merge operations that follow it, consuming more CPU and memory. Sometimes, rewriting the query with the UNION statement gives better results than when the server unions the indexes in the index merge.")),(0,i.kt)("p",null,"When you see the index merge in the EXPLAIN statement, review the query and table structure to check if the current design is optimal."),(0,i.kt)("h4",{id:"33-choose-the-correct-order-of-columns-to-index"},"3.3. Choose the correct order of columns to index"),(0,i.kt)("p",null,"When our index contains many columns, the order of columns in that index is very important, because in B-tree index, the index will be sorted from the leftmost column to the next columns (some disadvantages of B- tree index ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#113-drawbacks-of-b-tree-index"},"here")),"). Therefore, we often choose the columns with the highest Index Selectivity as the leftmost column, order the columns in descending order of Index Selectivity, so that our overall index has high selectivity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select count(distinct productVendor)/count(1),\n    count(distinct productScale)/count(1)\nfrom `classicmodels`.`products_index`;\n\n+----------------------------------------+---------------------------------------+\n| count(distinct productVendor)/count(1) | count(distinct productScale)/count(1) |\n+----------------------------------------+---------------------------------------+\n|                                 0.2600 |                                0.0145 |\n+----------------------------------------+---------------------------------------+\n")),(0,i.kt)("p",null,"In the above example, if we index 2 columns ",(0,i.kt)("inlineCode",{parentName:"p"},"productVendor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"productScale"),", we will usually take ",(0,i.kt)("inlineCode",{parentName:"p"},"productVendor")," as the leftmost column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table `classicmodels`.`products_index` add key (productVendor, productScale);\n")),(0,i.kt)("p",null,"Some more considerations about the index to pay attention to such as clustered index, covering index, remove redundant, unused indexes, ... I would like to mention in another article."))}u.isMDXComponent=!0},1773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/BTree-54fbc71e9768b5e3aa1c78fd9cdb3bb7.PNG"},343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/indexing-3225361f58a7e378996efe9e7464a3c1.PNG"}}]);