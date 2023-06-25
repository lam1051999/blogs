"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[1957],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={slug:"spark-catalyst-optimizer-and-spark-session-extension",title:"Spark Catalyst Optimizer And Spark Session Extension",authors:"tranlam",tags:["Bigdata","Spark","Apache"],image:"./images/spark-catalyst-optimizer.JPG"},r=void 0,o={permalink:"/blogs/blog/spark-catalyst-optimizer-and-spark-session-extension",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2023-01-07-spark-catalyst-optimizer-and-spark-extension/index.md",source:"@site/blog/2023-01-07-spark-catalyst-optimizer-and-spark-extension/index.md",title:"Spark Catalyst Optimizer And Spark Session Extension",description:"Spark catalyst optimizer is located at the core of Spark SQL with the purpose of optimizing structured queries expressed in SQL or through DataFrame/Dataset APIs, minimizing application running time and costs. When using Spark, often people see the catalyst optimizer as a black box, when we assume that it works mysteriously without really caring what happens inside it. In this article, I will go in depth of its logic, its components, and how the Spark session extension participates to change the Catalyst's plans.",date:"2023-01-07T00:00:00.000Z",formattedDate:"January 7, 2023",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"Spark",permalink:"/blogs/blog/tags/spark"},{label:"Apache",permalink:"/blogs/blog/tags/apache"}],readingTime:14.575,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"spark-catalyst-optimizer-and-spark-session-extension",title:"Spark Catalyst Optimizer And Spark Session Extension",authors:"tranlam",tags:["Bigdata","Spark","Apache"],image:"./images/spark-catalyst-optimizer.JPG"},nextItem:{title:"MySQL series - Indexing",permalink:"/blogs/blog/mysql-series-mysql-indexing"}},l={image:a(2941).Z,authorsImageUrls:[void 0]},p=[{value:"1. TreeNode",id:"1-treenode",level:3},{value:"2. Rules",id:"2-rules",level:3},{value:"3. Catalyst Operations in Spark SQL",id:"3-catalyst-operations-in-spark-sql",level:3},{value:"3.1. Parsing and Analyzing",id:"31-parsing-and-analyzing",level:4},{value:"3.2. Logical plan optimizations",id:"32-logical-plan-optimizations",level:4},{value:"3.3. Physical planning",id:"33-physical-planning",level:4},{value:"3.4. Code generation",id:"34-code-generation",level:4},{value:"4. Spark session extension",id:"4-spark-session-extension",level:3},{value:"4.1. Custom parser rule",id:"41-custom-parser-rule",level:4},{value:"4.2. Custom analyzer rule",id:"42-custom-analyzer-rule",level:4},{value:"4.3. Custom optimization",id:"43-custom-optimization",level:4},{value:"4.4. Custom physical planning",id:"44-custom-physical-planning",level:4},{value:"4.5. Example code to configuree logical plan optimization phase in Catalyst optimizer",id:"45-example-code-to-configuree-logical-plan-optimization-phase-in-catalyst-optimizer",level:4},{value:"4.5.1. When not applying extension",id:"451-when-not-applying-extension",level:5},{value:"4.5.2. When applying extension",id:"452-when-applying-extension",level:5},{value:"5. References",id:"5-references",level:3}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Spark catalyst optimizer is located at the core of Spark SQL with the purpose of optimizing structured queries expressed in SQL or through DataFrame/Dataset APIs, minimizing application running time and costs. When using Spark, often people see the catalyst optimizer as a black box, when we assume that it works mysteriously without really caring what happens inside it. In this article, I will go in depth of its logic, its components, and how the Spark session extension participates to change the Catalyst's plans."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spark catalyst optimizer",src:a(2941).Z,width:"1280",height:"720"})),(0,s.kt)("h3",{id:"1-treenode"},"1. TreeNode"),(0,s.kt)("p",null,"The main components in Catalyst are represented as tree nodes, which are inherited from class ",(0,s.kt)("inlineCode",{parentName:"p"},"TreeNode"),", or its subclasses. Class ",(0,s.kt)("inlineCode",{parentName:"p"},"TreeNode")," has a set of child nodes with the attribute ",(0,s.kt)("inlineCode",{parentName:"p"},"children"),", datatype ",(0,s.kt)("inlineCode",{parentName:"p"},"Seq[BaseType]"),", therefore, one ",(0,s.kt)("inlineCode",{parentName:"p"},"TreeNode")," can have 0 or more child nodes. These objects are immutable and manipulated using functional transformations, making the debug optimizer easier and parallel operations more predictable."),(0,s.kt)("p",null,"The two important classes are ",(0,s.kt)("inlineCode",{parentName:"p"},"LogicalPlan")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"SparkPlan")," are both subclasses of ",(0,s.kt)("inlineCode",{parentName:"p"},"QueryPlan"),", the class inherits directly from ",(0,s.kt)("inlineCode",{parentName:"p"},"TreeNode"),". In the above Catalyst diagram, the first 3 components are logical plans, the nodes in the logical plan are usually algebraic operators such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Join"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Filter"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Project"),",... the two components behind are spark plans (physical plans), nodes are usually low-level operators like ",(0,s.kt)("inlineCode",{parentName:"p"},"ShuffledHashJoinExec"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"SortMergeJoinExec"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"BroadcastHashJoinExec"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"FileSourceScanExec"),",..."),(0,s.kt)("p",null,"Leaf nodes will read data from sources, storage, memory ,... and the root node of the tree is the outermost operator and returns the result of the calculation."),(0,s.kt)("h3",{id:"2-rules"},"2. Rules"),(0,s.kt)("p",null,"To manipulate the TreeNode we use rules, rules are actually components that transforms the tree, from one tree to another. In the rule, we implement the logic that transforms the TreeNode, which often uses the pattern matching in Scala to find the corresponding matches in its subtree and replace it with other constructs. Trees provide transformation functions that can apply this pattern matching to transform trees like ",(0,s.kt)("inlineCode",{parentName:"p"},"transform"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"transformDown"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"transformUp"),",..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"package org.apache.spark.sql.catalyst.trees\n\n/**\n   * Returns a copy of this node where `rule` has been recursively applied to the tree.\n   * When `rule` does not apply to a given node it is left unchanged.\n   * Users should not expect a specific directionality. If a specific directionality is needed,\n   * transformDown or transformUp should be used.\n   *\n   * @param rule the function used to transform this nodes children\n*/\ndef transform(rule: PartialFunction[BaseType, BaseType]): BaseType = {\n    transformDown(rule)\n}\n\n/**\n   * Returns a copy of this node where `rule` has been recursively applied to the tree.\n   * When `rule` does not apply to a given node it is left unchanged.\n   * Users should not expect a specific directionality. If a specific directionality is needed,\n   * transformDown or transformUp should be used.\n   *\n   * @param rule   the function used to transform this nodes children\n   * @param cond   a Lambda expression to prune tree traversals. If `cond.apply` returns false\n   *               on a TreeNode T, skips processing T and its subtree; otherwise, processes\n   *               T and its subtree recursively.\n   * @param ruleId is a unique Id for `rule` to prune unnecessary tree traversals. When it is\n   *               UnknownRuleId, no pruning happens. Otherwise, if `rule` (with id `ruleId`)\n   *               has been marked as in effective on a TreeNode T, skips processing T and its\n   *               subtree. Do not pass it if the rule is not purely functional and reads a\n   *               varying initial state for different invocations.\n*/\ndef transformWithPruning(cond: TreePatternBits => Boolean,\nruleId: RuleId = UnknownRuleId)(rule: PartialFunction[BaseType, BaseType])\n: BaseType = {\n    transformDownWithPruning(cond, ruleId)(rule)\n}\n\n/**\n   * Returns a copy of this node where `rule` has been recursively applied to it and all of its\n   * children (pre-order). When `rule` does not apply to a given node it is left unchanged.\n   *\n   * @param rule the function used to transform this nodes children\n*/\ndef transformDown(rule: PartialFunction[BaseType, BaseType]): BaseType = {\n    transformDownWithPruning(AlwaysProcess.fn, UnknownRuleId)(rule)\n}\n\ndef transformDownWithPruning(cond: TreePatternBits => Boolean,\n    ruleId: RuleId = UnknownRuleId)(rule: PartialFunction[BaseType, BaseType])\n  : BaseType = {\n    /* More code */\n}\n\ndef transformUp(rule: PartialFunction[BaseType, BaseType]): BaseType = {\n    transformUpWithPruning(AlwaysProcess.fn, UnknownRuleId)(rule)\n}\n\ndef transformUpWithPruning(cond: TreePatternBits => Boolean,\n    ruleId: RuleId = UnknownRuleId)(rule: PartialFunction[BaseType, BaseType])\n  : BaseType = {\n    /* More code */\n}\n\n/* ... */\n")),(0,s.kt)("p",null,"Here is a simple example of using transform and partn matching to transform one Treenode to another"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package com.tranlam\n\nimport org.apache.spark.sql.catalyst.expressions.{Add, BinaryOperator, Expression, IntegerLiteral, Literal, Multiply, Subtract, UnaryMinus}\nimport org.apache.spark.SparkConf\nimport org.apache.spark.sql.SparkSession\n\nobject TestTransform {\n  def main(args: Array[String]): Unit = {\n    val sparkConf = new SparkConf().setAppName("test_transform").setMaster("local[*]")\n    val spark = SparkSession.builder().config(sparkConf).getOrCreate()\n    val firstExpr: Expression = UnaryMinus(Multiply(Subtract(Literal(11), Literal(2)), Subtract(Literal(9), Literal(5))))\n    val transformed: Expression = firstExpr transformDown {\n      case BinaryOperator(l, r) => Add(l, r)\n      case IntegerLiteral(i) if i > 5 => Literal(1)\n      case IntegerLiteral(i) if i < 5 => Literal(0)\n    }\n    println(firstExpr) // -((11 - 2) * (9 - 5))\n    println(transformed) // -((1 + 0) + (1 + 5))\n    spark.sql(s"SELECT ${firstExpr.sql}").show()\n    spark.sql(s"SELECT ${transformed.sql}").show()\n  }\n}\n')),(0,s.kt)("p",null,"In the above example, the transformDown function is used, which traverses the nodes of a tree and uses pattern matching to return a different result. If the node is a binary operator like Multiply, Subtract, it will convert to Add. If node is an integer constant greater than 5, it will change to 1, constant less than 5 will change to 0, a constant of 5 will keep the same value."),(0,s.kt)("h3",{id:"3-catalyst-operations-in-spark-sql"},"3. Catalyst Operations in Spark SQL"),(0,s.kt)("p",null,"Spark Catalyst uses tree transformations in four main phases: (1) logical plan analysis to traverse the relations in that plan, (2) logical plan optimization, (3) physical planning, (4) code generation to compile the query into Java bytecode."),(0,s.kt)("h4",{id:"31-parsing-and-analyzing"},"3.1. Parsing and Analyzing"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spark catalyst parseing analyzing",src:a(5437).Z,width:"642",height:"519"})),(0,s.kt)("p",null,"In this phase, Catalyst rules and Catalog objects will be used by Spark SQL to check if the relations in our query exist or not, relation properties such as columns, column names are also checked, the syntax of the query is examined and then resolve those relations."),(0,s.kt)("p",null,'For example, looking at the query plan below, Spark SQL will first transform the query into a parsed tree called an "unresolved logical plan" with undefined attributes and datatypes, not yet assigned to a specific table (or alias). Then it will'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Search for relation by name from Catalog object."),(0,s.kt)("li",{parentName:"ul"},"Mapping properties as columns of input with found relations."),(0,s.kt)("li",{parentName:"ul"},"Decide which properties should point to the same value to assign it a unique ID (for the purpose of later optimizing expressions like ",(0,s.kt)("inlineCode",{parentName:"li"},"col = col"),")."),(0,s.kt)("li",{parentName:"ul"},"Cast expressions of a specific datatype (for example, we won't know the return datatype of ",(0,s.kt)("inlineCode",{parentName:"li"},"col * 2")," until col is resolved and the datatype is determined).")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.describe_abc;\n\n== Parsed Logical Plan ==\n'Project [*]\n+- 'UnresolvedRelation [test, describe_abc], [], false\n\n== Analyzed Logical Plan ==\nid: int, name: string\nProject [id#5833, name#5834]\n+- SubqueryAlias spark_catalog.test.describe_abc\n   +- Relation test.describe_abc[id#5833,name#5834] parquet\n\n== Optimized Logical Plan ==\nRelation test.describe_abc[id#5833,name#5834] parquet\n\n== Physical Plan ==\n*(1) ColumnarToRow\n+- FileScan parquet test.describe_abc[id#5833,name#5834] Batched: true, DataFilters: [], Format: Parquet, Location: InMemoryFileIndex(1 paths)[hdfs://bigdataha/user/hive/warehouse/test.db/describe_abc], PartitionFilters: [], PushedFilters: [], ReadSchema: struct<id:int,name:string>\n")),(0,s.kt)("h4",{id:"32-logical-plan-optimizations"},"3.2. Logical plan optimizations"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spark LP optimization",src:a(7113).Z,width:"642",height:"519"})),(0,s.kt)("p",null,"Catalyst applies standard optimization rules to the logical plan analyzed in the previous step, with cached data. This section includes rules like"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Constant folding: removes expressions that compute a value that we can define before the code runs, for example, with the expression ",(0,s.kt)("inlineCode",{parentName:"li"},"y = x * 2 * 2"),", compiler will not generate 2 multiply instructions, it will first replace the constants before the values \u200b\u200bcan be computed ",(0,s.kt)("inlineCode",{parentName:"li"},"y = x * 4"),"."),(0,s.kt)("li",{parentName:"ul"},"Predicate pushdown: push down parts of the query to where the data is stored, filter large amounts of data, improve network traffic."),(0,s.kt)("li",{parentName:"ul"},"Projection: read only selected columns, less columns will be passed from the storage to Spark, significantly efficient with columnar file format such as Parquet."),(0,s.kt)("li",{parentName:"ul"},"Boolean expression simplification: eg. A and (A or B) = A(A+B) = A.A + A.B = A + A.B = A.(1+B) = A"),(0,s.kt)("li",{parentName:"ul"},"Many other rules,\u2026")),(0,s.kt)("p",null,"Spark's Catalyst optimizer will include batches of rules, some of which can exist in multiple batches. Usually these batch rules will be run once on that plan, however, there are some batches that will run repeatedly until a certain number of passes."),(0,s.kt)("h4",{id:"33-physical-planning"},"3.3. Physical planning"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spark PP planning",src:a(8632).Z,width:"642",height:"519"})),(0,s.kt)("p",null,"Spark SQL takes a logical plan and generates one or more physical plans, then it chooses the appropriate physical plan based on the cost models. Cost models typically rely on relational statistics, quantifying statistics flowing into a node in a TreeNode such as"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Size of data flowing into node."),(0,s.kt)("li",{parentName:"ul"},"Number of records per table."),(0,s.kt)("li",{parentName:"ul"},"Statistical indexes related to columns such as: number of distinct values and nulls, minimum and maximum value, average and maximum length of the values, an equi-height histogram of the values,...")),(0,s.kt)("p",null,"Some Spark SQL approaches to this cost model"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Size-only approach: only uses statistics about the physical size of the data flowing into the node, also take the number of records index in some cases."),(0,s.kt)("li",{parentName:"ul"},"Cost-based approach: statistics related to column level information for Aggregate, Filter, Join, Project nodes (note, cost-based approach is only applicable to nodes of this type, with other types of nodes, it will revert to using the size-only approach), improving the size and number of records for those nodes.")),(0,s.kt)("p",null,"The cost-based approach is chosen if we set ",(0,s.kt)("inlineCode",{parentName:"p"},"spark.sql.cbo.enabled=true"),". Besides, table and column statistics also need to be collected so that Spark can calculate based on it, by running ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://spark.apache.org/docs/latest/sql-ref-syntax-aux-analyze-table.html"},"ANALYZE"))),(0,s.kt)("h4",{id:"34-code-generation"},"3.4. Code generation"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spark codegen",src:a(4059).Z,width:"642",height:"519"})),(0,s.kt)("p",null,"After selecting the right physical plan to run, Catalyst will compile a tree of plans that support codegen into a single Java function, to Java bytecode to run on drivers and executors. This codegen greatly improves running speed when Spark SQL often works on in-memory datasets, data processing is often tied to the CPU. Catalyst relies on a Scala feature, quasiquotes, to simplify this part of the codegen (quasiquotes allow building abstract syntax trees (ASTs), which then input the Scala compiler to generate bytecode)."),(0,s.kt)("h3",{id:"4-spark-session-extension"},"4. Spark session extension"),(0,s.kt)("p",null,"Spark session extension is an extension of Spark that allows us to customize parts of the Catalyst optimizer so that it works in each of our contexts."),(0,s.kt)("h4",{id:"41-custom-parser-rule"},"4.1. Custom parser rule"),(0,s.kt)("p",null,"As shown above, initially our query will have to go through the parsing set to check the validity of the query. Spark provides an interface that we can implement at this stage ",(0,s.kt)("inlineCode",{parentName:"p"},"ParserInterface")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.spark.sql.catalyst.parser\n\n@DeveloperApi\ntrait ParserInterface {\n  @throws[ParseException]("Text cannot be parsed to a LogicalPlan")\n  def parsePlan(sqlText: String): LogicalPlan\n\n  @throws[ParseException]("Text cannot be parsed to an Expression")\n  def parseExpression(sqlText: String): Expression\n\n  @throws[ParseException]("Text cannot be parsed to a TableIdentifier")\n  def parseTableIdentifier(sqlText: String): TableIdentifier\n\n  @throws[ParseException]("Text cannot be parsed to a FunctionIdentifier")\n  def parseFunctionIdentifier(sqlText: String): FunctionIdentifier\n\n  @throws[ParseException]("Text cannot be parsed to a multi-part identifier")\n  def parseMultipartIdentifier(sqlText: String): Seq[String]\n\n  @throws[ParseException]("Text cannot be parsed to a schema")\n  def parseTableSchema(sqlText: String): StructType\n\n  @throws[ParseException]("Text cannot be parsed to a DataType")\n  def parseDataType(sqlText: String): DataType\n\n  @throws[ParseException]("Text cannot be parsed to a LogicalPlan")\n  def parseQuery(sqlText: String): LogicalPlan\n}\n')),(0,s.kt)("p",null,"We will implement that interface and inject this rule into Spark job as follows"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"case class CustomerParserRule(sparkSession: SparkSession, delegateParser: ParserInterface) extends ParserInterface {\n  /* Overwrite those methods here */\n}\n\nval customerParserRuleFunc: SparkSessionExtensions => Unit = (extensionBuilder: SparkSessionExtensions) => {\n  extensionBuilder.injectParser(CustomerParserRule)\n}\n")),(0,s.kt)("h4",{id:"42-custom-analyzer-rule"},"4.2. Custom analyzer rule"),(0,s.kt)("p",null,"Analyzer rule includes several types of rules such as resolution rule, check rule. These rules are injected through functions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"injectResolutionRule"),": inject our rules for the resolution phase."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"injectPostHocResolutionRule"),": run our rules after the resolution phase."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"injectCheckRule"),": add rules to check some logic of logical plans, for example, we want to check business logic, or check which rules have finished running,...")),(0,s.kt)("p",null,"To inject resolution rule, we extend an abstract class of Spark ",(0,s.kt)("inlineCode",{parentName:"p"},"Rule[LogicalPlan]")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"case class CustomAnalyzerResolutionRule(sparkSession: SparkSession) extends Rule[LogicalPlan] {\n  override def apply(plan: LogicalPlan): LogicalPlan = {\n    /* Code for resolution rule */\n  }\n}\n\nval customAnalyzerResolutionRuleFunc: SparkSessionExtensions => Unit = (extensionBuilder: SparkSessionExtensions) => {\n  extensionBuilder.injectResolutionRule(CustomAnalyzerResolutionRule)\n}\n")),(0,s.kt)("p",null,"To inject check rule, we inherit the class ",(0,s.kt)("inlineCode",{parentName:"p"},"Function1[LogicalPlan, Unit]")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"case class CustomAnalyzerCheckRule(sparkSession: SparkSession) extends (LogicalPlan => Unit) {\n  override def apply(plan: LogicalPlan): Unit = {\n    /* Code for check rule */\n  }\n}\n\nval customAnalyzerCheckRuleFunc: SparkSessionExtensions => Unit = (extensionBuilder: SparkSessionExtensions) => {\n  extensionBuilder.injectCheckRule(CustomAnalyzerCheckRule)\n}\n")),(0,s.kt)("h4",{id:"43-custom-optimization"},"4.3. Custom optimization"),(0,s.kt)("p",null,"To customize the logical plan optimization phase, we will inherit the abstract class ",(0,s.kt)("inlineCode",{parentName:"p"},"Rule[LogicalPlan]")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"case class CustomOptimizer(sparkSession: SparkSession) extends Rule[LogicalPlan] {\n  override def apply(plan: LogicalPlan): LogicalPlan = {\n    /* Code for custom logical optimier */\n  }\n}\n\nval customOptimizerFunc: SparkSessionExtensions => Unit = (extensionBuilder: SparkSessionExtensions) => {\n  extensionBuilder.injectOptimizerRule(CustomOptimizer)\n}\n")),(0,s.kt)("h4",{id:"44-custom-physical-planning"},"4.4. Custom physical planning"),(0,s.kt)("p",null,"To configure the running strategy for Spark Catalyst optimizer, we inherit the abstract class ",(0,s.kt)("inlineCode",{parentName:"p"},"SparkStrategy")," and implement the method ",(0,s.kt)("inlineCode",{parentName:"p"},"apply")," of that class"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"case class CustomStrategy(sparkSession: SparkSession) extends SparkStrategy {\n  override def apply(plan: LogicalPlan): Seq[SparkPlan] = {\n    /* Code for custom spark strategy/physical planning */\n  }\n}\n\nval customStrategyFunc: SparkSessionExtensions => Unit = (extensionBuilder: SparkSessionExtensions) => {\n  extensionBuilder.injectPlannerStrategy(CustomStrategy)\n}\n")),(0,s.kt)("h4",{id:"45-example-code-to-configuree-logical-plan-optimization-phase-in-catalyst-optimizer"},"4.5. Example code to configuree logical plan optimization phase in Catalyst optimizer"),(0,s.kt)("p",null,"In this section, I will make an example of changing logical plan optimization phase with Spark extension. A simple extension with code as below"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"/* class CustomProjectFilterExtension ======================================= */\npackage extensions\nimport org.apache.spark.sql.SparkSession\nimport org.apache.spark.sql.catalyst.plans.logical._\nimport org.apache.spark.sql.catalyst.rules.Rule\n// create an extension that\ncase class CustomProjectFilterExtension(spark: SparkSession) extends Rule[LogicalPlan] {\n  override def apply(plan: LogicalPlan): LogicalPlan = {\n    val fixedPlan = plan transformDown {\n      case Project(expression, Filter(condition, child)) =>\n          Filter(condition, child)\n    }\n    fixedPlan\n  }\n}\n\n/* class AllExtensions ======================================= */\npackage extensions\nimport org.apache.spark.sql.SparkSessionExtensions\n// inject the extension to SparkSessionExtensions\nclass AllExtensions extends (SparkSessionExtensions => Unit) {\n  override def apply(ext: SparkSessionExtensions): Unit = {\n    ext.injectOptimizerRule(CustomProjectFilterExtension)\n  }\n}\n")),(0,s.kt)("p",null,"The above class ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomProjectFilterExtension")," transforms Filter (row filter), Project (select column while scanning file) operators to only Filter. Then, even though we have selected the column, it still scans all the columns of the file in the storage."),(0,s.kt)("p",null,"Compile project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# compile jar file\nmvn clean package && mvn dependency:copy-dependencies\n")),(0,s.kt)("h5",{id:"451-when-not-applying-extension"},"4.5.1. When not applying extension"),(0,s.kt)("p",null,"We initialize ",(0,s.kt)("inlineCode",{parentName:"p"},"spark-shell")," without passing extension"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# initialize spark-shell\n$SPARK_330/bin/spark-shell --jars $(echo /Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/target/dependency/*.jar | tr ' ' ','),/Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/target/custom-extension-1.0-SNAPSHOT.jar\n\n# check spark.sql.extensions\nscala> spark.conf.get(\"spark.sql.extensions\")\nres0: String = null\n\n# explain a query that contains Filter and Project operators\nscala> spark.sql(\"SELECT hotel, is_canceled FROM (SELECT * FROM test.hotel_bookings WHERE hotel='Resort Hotel') a\").explain(extended = true)\n\n== Parsed Logical Plan ==\n'Project ['hotel, 'is_canceled]\n+- 'SubqueryAlias a\n   +- 'Project [*]\n      +- 'Filter ('hotel = Resort Hotel)\n         +- 'UnresolvedRelation [test, hotel_bookings], [], false\n\n== Analyzed Logical Plan ==\nhotel: string, is_canceled: bigint\nProject [hotel#0, is_canceled#1L]\n+- SubqueryAlias a\n   +- Project [hotel#0, is_canceled#1L, lead_time#2L, arrival_date_year#3L, arrival_date_month#4, arrival_date_week_number#5L, arrival_date_day_of_month#6L, stays_in_weekend_nights#7L, stays_in_week_nights#8L, adults#9L, children#10, babies#11L, meal#12, country#13, market_segment#14, distribution_channel#15, is_repeated_guest#16L, previous_cancellations#17L, previous_bookings_not_canceled#18L, reserved_room_type#19, assigned_room_type#20, booking_changes#21L, deposit_type#22, agent#23, ... 8 more fields]\n      +- Filter (hotel#0 = Resort Hotel)\n         +- SubqueryAlias spark_catalog.test.hotel_bookings\n            +- Relation test.hotel_bookings[hotel#0,is_canceled#1L,lead_time#2L,arrival_date_year#3L,arrival_date_month#4,arrival_date_week_number#5L,arrival_date_day_of_month#6L,stays_in_weekend_nights#7L,stays_in_week_nights#8L,adults#9L,children#10,babies#11L,meal#12,country#13,market_segment#14,distribution_channel#15,is_repeated_guest#16L,previous_cancellations#17L,previous_bookings_not_canceled#18L,reserved_room_type#19,assigned_room_type#20,booking_changes#21L,deposit_type#22,agent#23,... 8 more fields] parquet\n\n== Optimized Logical Plan ==\nProject [hotel#0, is_canceled#1L]\n+- Filter (isnotnull(hotel#0) AND (hotel#0 = Resort Hotel))\n   +- Relation test.hotel_bookings[hotel#0,is_canceled#1L,lead_time#2L,arrival_date_year#3L,arrival_date_month#4,arrival_date_week_number#5L,arrival_date_day_of_month#6L,stays_in_weekend_nights#7L,stays_in_week_nights#8L,adults#9L,children#10,babies#11L,meal#12,country#13,market_segment#14,distribution_channel#15,is_repeated_guest#16L,previous_cancellations#17L,previous_bookings_not_canceled#18L,reserved_room_type#19,assigned_room_type#20,booking_changes#21L,deposit_type#22,agent#23,... 8 more fields] parquet\n\n== Physical Plan ==\n*(1) Filter (isnotnull(hotel#0) AND (hotel#0 = Resort Hotel))\n+- *(1) ColumnarToRow\n   +- FileScan parquet test.hotel_bookings[hotel#0,is_canceled#1L] Batched: true, DataFilters: [isnotnull(hotel#0), (hotel#0 = Resort Hotel)], Format: Parquet, Location: InMemoryFileIndex(1 paths)[file:/Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/sp..., PartitionFilters: [], PushedFilters: [IsNotNull(hotel), EqualTo(hotel,Resort Hotel)], ReadSchema: struct<hotel:string,is_canceled:bigint>\n")),(0,s.kt)("p",null,"We see that ",(0,s.kt)("inlineCode",{parentName:"p"},"Optimized Logical Plan")," there are both Project and Filter operations, because we filter ",(0,s.kt)("inlineCode",{parentName:"p"},"WHERE hotel='Resort Hotel'")," and project ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT hotel, is_canceled"),". Therefore, in the physical plan, it only scans 2 columns ",(0,s.kt)("inlineCode",{parentName:"p"},"FileScan parquet test.hotel_bookings[hotel#0,is_canceled#1L]"),"."),(0,s.kt)("h5",{id:"452-when-applying-extension"},"4.5.2. When applying extension"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# initialize spark-shell with extension\n$SPARK_330/bin/spark-shell --jars $(echo /Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/target/dependency/*.jar | tr ' ' ','),/Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/target/custom-extension-1.0-SNAPSHOT.jar --conf spark.sql.extensions=extensions.AllExtensions\n\n# check spark.sql.extensions\nscala> spark.conf.get(\"spark.sql.extensions\")\nres0: String = extensions.AllExtensions\n\n# explain a query that contains Filter and Project operators\nscala> spark.sql(\"SELECT hotel, is_canceled FROM (SELECT * FROM test.hotel_bookings WHERE hotel='Resort Hotel') a\").explain(extended = true)\n\n== Parsed Logical Plan ==\n'Project ['hotel, 'is_canceled]\n+- 'SubqueryAlias a\n   +- 'Project [*]\n      +- 'Filter ('hotel = Resort Hotel)\n         +- 'UnresolvedRelation [test, hotel_bookings], [], false\n\n== Analyzed Logical Plan ==\nhotel: string, is_canceled: bigint\nProject [hotel#0, is_canceled#1L]\n+- SubqueryAlias a\n   +- Project [hotel#0, is_canceled#1L, lead_time#2L, arrival_date_year#3L, arrival_date_month#4, arrival_date_week_number#5L, arrival_date_day_of_month#6L, stays_in_weekend_nights#7L, stays_in_week_nights#8L, adults#9L, children#10, babies#11L, meal#12, country#13, market_segment#14, distribution_channel#15, is_repeated_guest#16L, previous_cancellations#17L, previous_bookings_not_canceled#18L, reserved_room_type#19, assigned_room_type#20, booking_changes#21L, deposit_type#22, agent#23, ... 8 more fields]\n      +- Filter (hotel#0 = Resort Hotel)\n         +- SubqueryAlias spark_catalog.test.hotel_bookings\n            +- Relation test.hotel_bookings[hotel#0,is_canceled#1L,lead_time#2L,arrival_date_year#3L,arrival_date_month#4,arrival_date_week_number#5L,arrival_date_day_of_month#6L,stays_in_weekend_nights#7L,stays_in_week_nights#8L,adults#9L,children#10,babies#11L,meal#12,country#13,market_segment#14,distribution_channel#15,is_repeated_guest#16L,previous_cancellations#17L,previous_bookings_not_canceled#18L,reserved_room_type#19,assigned_room_type#20,booking_changes#21L,deposit_type#22,agent#23,... 8 more fields] parquet\n\n== Optimized Logical Plan ==\nFilter (isnotnull(hotel#0) AND (hotel#0 = Resort Hotel))\n+- Relation test.hotel_bookings[hotel#0,is_canceled#1L,lead_time#2L,arrival_date_year#3L,arrival_date_month#4,arrival_date_week_number#5L,arrival_date_day_of_month#6L,stays_in_weekend_nights#7L,stays_in_week_nights#8L,adults#9L,children#10,babies#11L,meal#12,country#13,market_segment#14,distribution_channel#15,is_repeated_guest#16L,previous_cancellations#17L,previous_bookings_not_canceled#18L,reserved_room_type#19,assigned_room_type#20,booking_changes#21L,deposit_type#22,agent#23,... 8 more fields] parquet\n\n== Physical Plan ==\n*(1) Filter (isnotnull(hotel#0) AND (hotel#0 = Resort Hotel))\n+- *(1) ColumnarToRow\n   +- FileScan parquet test.hotel_bookings[hotel#0,is_canceled#1L,lead_time#2L,arrival_date_year#3L,arrival_date_month#4,arrival_date_week_number#5L,arrival_date_day_of_month#6L,stays_in_weekend_nights#7L,stays_in_week_nights#8L,adults#9L,children#10,babies#11L,meal#12,country#13,market_segment#14,distribution_channel#15,is_repeated_guest#16L,previous_cancellations#17L,previous_bookings_not_canceled#18L,reserved_room_type#19,assigned_room_type#20,booking_changes#21L,deposit_type#22,agent#23,... 8 more fields] Batched: true, DataFilters: [isnotnull(hotel#0), (hotel#0 = Resort Hotel)], Format: Parquet, Location: InMemoryFileIndex(1 paths)[file:/Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/sp..., PartitionFilters: [], PushedFilters: [IsNotNull(hotel), EqualTo(hotel,Resort Hotel)], ReadSchema: struct<hotel:string,is_canceled:bigint,lead_time:bigint,arrival_date_year:bigint,arrival_date_mon...\n")),(0,s.kt)("p",null,"At this point, ",(0,s.kt)("inlineCode",{parentName:"p"},"Optimized Logical Plan")," there is no longer Project operator, but only Filter operator, so that when it comes to the physical plan step, it scans all the columns in the table ",(0,s.kt)("inlineCode",{parentName:"p"},"FileScan parquet test.hotel_bookings[hotel#0,is_canceled#1L,lead_time#2L,arrival_date_year#3L,arrival_date_month#4,arrival_date_week_number#5L,arrival_date_day_of_month#6L,stays_in_weekend_nights#7L,stays_in_week_nights#8L,adults#9L,children#10,babies#11L,meal#12,country#13,market_segment#14,distribution_channel#15,is_repeated_guest#16L,previous_cancellations#17L,previous_bookings_not_canceled#18L,reserved_room_type#19,assigned_room_type#20,booking_changes#21L,deposit_type#22,agent#23,... 8 more fields]"),"."),(0,s.kt)("p",null,"Above, I have specifically presented the components of Spark Catalyst optimizer and how to write spark session extensions to intervene to change Catalyst's plans, there are also specific code examples to demonstrate this. In the next article, I will present one more part that is a new feature in Spark 3.0, which is Spark Adaptive Query Execution, a feature that improves Spark job speed at runtime."),(0,s.kt)("h3",{id:"5-references"},"5. References"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.databricks.com/blog/2015/04/13/deep-dive-into-spark-sqls-catalyst-optimizer.html"},"Deep Dive into Spark SQL's Catalyst Optimizer")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.unraveldata.com/resources/catalyst-analyst-a-deep-dive-into-sparks-optimizer/"},"Spark Catalyst Pipeline: A Deep Dive Into Spark\u2019s Optimizer")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://medium.com/@pratikbarhate/extending-apache-spark-catalyst-for-custom-optimizations-9b491efdd24f"},"Extending Apache Spark Catalyst for Custom Optimizations")))}d.isMDXComponent=!0},7113:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalyst-pipeline-LP-optimization-f6ab83bcb7f4fe16849cb54ee255ac1b.PNG"},8632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalyst-pipeline-PP-planning-965d236e9af5638f8e5b6a15278a4331.PNG"},4059:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalyst-pipeline-codegen-4303b28d4eb24d57d52bc29fca45a337.PNG"},5437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalyst-pipeline-parsing-analyzing-434229ee4a24f7a81d885d239a4ea344.PNG"},2941:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spark-catalyst-optimizer-03f0f2a4cb6e0c86499aaa51ba69b065.JPG"}}]);