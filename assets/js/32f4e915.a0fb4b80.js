"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[5521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,h=u["".concat(s,".").concat(g)]||u[g]||k[g]||c;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const c={slug:"spark-cluster-docker",title:"T\u1ea1o 1 Standalone Spark Cluster v\u1edbi Docker",authors:"tranlam",tags:["Bigdata","Spark","Apache","Docker"],image:"./images/cluster-overview.PNG"},o=void 0,i={permalink:"/blogs/blog/spark-cluster-docker",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-01-01-spark-cluster-docker/index.md",source:"@site/blog/2022-01-01-spark-cluster-docker/index.md",title:"T\u1ea1o 1 Standalone Spark Cluster v\u1edbi Docker",description:"Cluster Overview",date:"2022-01-01T00:00:00.000Z",formattedDate:"January 1, 2022",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"Spark",permalink:"/blogs/blog/tags/spark"},{label:"Apache",permalink:"/blogs/blog/tags/apache"},{label:"Docker",permalink:"/blogs/blog/tags/docker"}],readingTime:7.24,truncated:!0,authors:[{name:"Tr\u1ea7n L\xe2m",title:"Data Engineer @ Giaohangtietkiem",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"spark-cluster-docker",title:"T\u1ea1o 1 Standalone Spark Cluster v\u1edbi Docker",authors:"tranlam",tags:["Bigdata","Spark","Apache","Docker"],image:"./images/cluster-overview.PNG"},prevItem:{title:"T\u1ea1o lu\u1ed3ng streaming d\u1eef li\u1ec7u v\u1edbi Spark Streaming, Kafka, Docker",permalink:"/blogs/blog/spark-kafka-docker"},nextItem:{title:"M\u1ed9t s\u1ed1 c\xe2u h\u1ecfi ph\u1ecfng v\u1ea5n AI/ML",permalink:"/blogs/blog/ai-interview-questions"}},s={image:n(2877).Z,authorsImageUrls:[void 0]},l=[{value:"1. T\u1ed5ng quan v\u1ec1 c\u1ea5u tr\xfac v\xe0 c\xe1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a m\u1ed9t Spark cluster",id:"1-t\u1ed5ng-quan-v\u1ec1-c\u1ea5u-tr\xfac-v\xe0-c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-m\u1ed9t-spark-cluster",level:3},{value:"2. T\u1ea1o m\u1ed9t base image",id:"2-t\u1ea1o-m\u1ed9t-base-image",level:3},{value:"3. T\u1ea1o m\u1ed9t spark base image",id:"3-t\u1ea1o-m\u1ed9t-spark-base-image",level:3},{value:"4. T\u1ea1o m\u1ed9t master node image",id:"4-t\u1ea1o-m\u1ed9t-master-node-image",level:3},{value:"5. T\u1ea1o m\u1ed9t worker node image",id:"5-t\u1ea1o-m\u1ed9t-worker-node-image",level:3},{value:"6. T\u1ea1o m\u1ed9t Jupyterlab image cho vi\u1ec7c ki\u1ec3m th\u1eed",id:"6-t\u1ea1o-m\u1ed9t-jupyterlab-image-cho-vi\u1ec7c-ki\u1ec3m-th\u1eed",level:3},{value:"7. K\u1ebft h\u1ee3p c\xe1c image v\xe0 t\u1ea1o c\xe1c container",id:"7-k\u1ebft-h\u1ee3p-c\xe1c-image-v\xe0-t\u1ea1o-c\xe1c-container",level:3},{value:"8. Ch\u1ea1y Jupyterlab \u0111\u1ec3 ki\u1ec3m tra ho\u1ea1t \u0111\u1ed9ng c\u1ee7a cluster",id:"8-ch\u1ea1y-jupyterlab-\u0111\u1ec3-ki\u1ec3m-tra-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-cluster",level:3}],p={toc:l};function k(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster Overview",src:n(2877).Z,width:"596",height:"286"})),(0,r.kt)("p",null,"Th\u1eddi gian v\u1eeba qua, m\xecnh \u0111\xe3 d\xe0nh nhi\u1ec1u th\u1eddi gian t\u1ef1 h\u1ecdc v\u1ec1 c\xe1ch x\xe2y d\u1ef1ng c\xe1c cluster Hadoop, Spark, t\xedch h\u1ee3p Hive v\xe0 m\u1ed9t s\u1ed1 th\u1ee9 n\u1eefa. B\xe0i vi\u1ebft n\xe0y s\u1ebd vi\u1ebft v\u1ec1 c\xe1ch b\u1ea1n c\xf3 th\u1ec3 x\xe2y d\u1ef1ng m\u1ed9t Spark cluster cho vi\u1ec7c x\u1eed l\xfd d\u1eef li\u1ec7u b\u1eb1ng Docker, bao g\u1ed3m 1 master node v\xe0 2 worker node, lo\u1ea1i cluster l\xe0 standalone cluster (c\xf3 th\u1ec3 c\xe1c b\xe0i vi\u1ebft s\u1eafp t\u1edbi m\xecnh s\u1ebd l\xe0m v\u1ec1 Hadoop cluster v\xe0 t\xedch h\u1ee3p resource manager l\xe0 Yarn). C\xf9ng \u0111i v\xe0o b\xe0i vi\u1ebft n\xe0o."),(0,r.kt)("h3",{id:"1-t\u1ed5ng-quan-v\u1ec1-c\u1ea5u-tr\xfac-v\xe0-c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-m\u1ed9t-spark-cluster"},"1. T\u1ed5ng quan v\u1ec1 c\u1ea5u tr\xfac v\xe0 c\xe1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a m\u1ed9t Spark cluster"),(0,r.kt)("p",null,"Spark l\xe0 c\xf4ng c\u1ee5 x\u1eed l\xfd d\u1eef li\u1ec7u nhanh, m\u1ea1nh m\u1ebd cho ph\xe9p b\u1ea1n x\u1eed l\xfd d\u1eef gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 d\u1eef li\u1ec7u l\u1edbn \u0111\u1ed1i v\u1edbi c\u1ea3 d\u1eef li\u1ec7u c\xf3 c\u1ea5u tr\xfac, b\xe1n c\u1ea5u tr\xfac v\xe0 kh\xf4ng c\xf3 c\u1ea5u tr\xfac. N\xf3 cung c\u1ea5p t\xednh linh ho\u1ea1t v\xe0 kh\u1ea3 n\u0103ng m\u1edf r\u1ed9ng, \u0111\u01b0\u1ee3c t\u1ea1o ra \u0111\u1ec3 c\u1ea3i thi\u1ec7n hi\u1ec7u n\u0103ng c\u1ee7a MapReduce nh\u01b0ng \u1edf m\u1ed9t t\u1ed1c \u0111\u1ed9 cao h\u01a1n nhi\u1ec1u: 100 l\u1ea7n nhanh h\u01a1n Hadoop khi d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u trong b\u1ed9 nh\u1edb v\xe0 10 l\u1ea7n khi truy c\u1eadp \u1ed5 \u0111\u0129a. N\xf3 \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf cho c\xe1c hi\u1ec7u su\u1ea5t nhanh v\xe0 s\u1eed d\u1ee5ng RAM \u0111\u1ec3 caching v\xe0 x\u1eed l\xfd d\u1eef li\u1ec7u. Spark kh\xf4ng c\xf3 m\u1ed9t file system ri\xeang, nh\u01b0ng n\xf3 c\xf3 th\u1ec3 t\u01b0\u01a1ng t\xe1c v\u1edbi nhi\u1ec1u lo\u1ea1i h\u1ec7 th\u1ed1ng l\u01b0u tr\u1eef, c\xf3 th\u1ec3 s\u1eed d\u1ee5ng t\xedch h\u1ee3p v\u1edbi Hadoop. D\u01b0\u1edbi \u0111\xe2y l\xe0 t\u1ed5ng quan c\u1ea5u tr\xfac c\u1ee7a m\u1ed9t \u1ee9ng d\u1ee5ng Spark."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster Overview",src:n(2877).Z,width:"596",height:"286"})),(0,r.kt)("p",null,"C\xe1c \u1ee9ng d\u1ee5ng Spark sinh ra m\u1ed9t ch\u01b0\u01a1ng tr\xecnh driver \u1edf master node, v\xe0 t\u1ea1o ra 1 SparkContext. \u0110\u1ec3 ch\u1ea1y tr\xean 1 cluster, SparkContext c\u1ea7n k\u1ebft n\u1ed1i \u0111\u1ebfn m\u1ed9t trong nhi\u1ec1u lo\u1ea1i cluster managers (standalone cluster, Mesos ho\u1eb7c YARN). M\u1ed9t khi \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i, Spark c\xf3 \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i t\u1edbi c\xe1c worker nodes \u1edf cluster. Nh\u1eefng node \u0111\xf3 th\u1ef1c hi\u1ec7n ti\u1ebfn tr\xecnh l\xe0m c\xe1c c\xf4ng vi\u1ec7c t\xednh to\xe1n v\xe0 l\u01b0u tr\u1eef d\u1eef li\u1ec7u cho \u1ee9ng d\u1ee5ng. Sau \u0111\xf3, n\xf3 g\u1eedi c\xe1c code \u0111\u1ebfn c\xe1c executor. Cu\u1ed1i c\xf9ng, SparkContext s\u1ebd g\u1eedi c\xe1c tasks cho c\xe1c executors \u0111\u1ec3 ch\u1ea1y."),(0,r.kt)("p",null,"M\u1ed7i \u1ee9ng d\u1ee5ng \u0111\u1ec1u c\xf3 c\xe1c ti\u1ebfn tr\xecnh executors ri\xeang c\u1ee7a n\xf3, n\u1eb1m \u1edf \u0111\xf3 su\u1ed1t th\u1eddi gian \u1ee9ng d\u1ee5ng ch\u1ea1y v\xe0 ch\u1ea1y c\xe1c task \u1edf nhi\u1ec1u threads, c\xf4 l\u1eadp \u1ee9ng d\u1ee5ng n\xe0y v\u1edbi \u1ee9ng d\u1ee5ng kh\xe1c. \u0110i\u1ec1u \u0111\xf3 c\u0169ng c\xf3 ngh\u0129a l\xe0 d\u1eef li\u1ec7u kh\xf4ng th\u1ec3 \u0111\u01b0\u1ee3c chia s\u1ebb qua l\u1ea1i gi\u1eefa c\xe1c \u1ee9ng d\u1ee5ng n\u1ebfu m\xe0 kh\xf4ng ghi d\u1eef li\u1ec7u ra m\u1ed9t h\u1ec7 th\u1ed1ng l\u01b0u tr\u1eef ngo\xe0i."),(0,r.kt)("p",null,"V\xec driver \u0111\u1eb7t l\u1ecbch tr\xecnh cho c\xe1c task tr\xean cluster, n\xf3 c\u1ea7n ph\u1ea3i ch\u1ea1y g\u1ea7n v\u1edbi c\xe1c worker node, s\u1ebd l\xe0 l\xfd t\u01b0\u1edfng n\u1ebfu n\xf3 ch\u1ea1y c\xf9ng m\u1ed9t m\u1ea1ng LAN. N\u1ebfu b\u1ea1n mu\u1ed1n g\u1eedi c\xe1c request \u0111\u1ebfn cluster t\u1eeb xa, n\xf3 s\u1ebd t\u1ed1t h\u01a1n n\u1ebfu nh\u01b0 b\u1ea1n t\u1ea1o 1 RPC, ch\u1ea1y driver v\xe0 submit c\xe1c ho\u1ea1t \u0111\u1ed9ng t\u1eeb ph\u1ea1m vi g\u1ea7n h\u01a1n l\xe0 ch\u1ea1y driver \u1edf kho\u1ea3ng c\xe1ch xa c\xe1c node worker."),(0,r.kt)("h3",{id:"2-t\u1ea1o-m\u1ed9t-base-image"},"2. T\u1ea1o m\u1ed9t base image"),(0,r.kt)("p",null,"B\u1edfi v\xec c\xe1c image c\xe1c node trong 1 cluster c\u1ea7n c\xe0i \u0111\u1eb7t c\xe1c ph\u1ea7n m\u1ec1m kh\xe1 gi\u1ed1ng nhau n\xean ch\xfang ta s\u1ebd x\xe2y d\u1ef1ng m\u1ed9t base image cho t\u1ed5ng th\u1ec3 cluster tr\u01b0\u1edbc, sau \u0111\xf3 th\xec c\xe1c image sau s\u1ebd import t\u1eeb image n\xe0y v\xe0 th\xeam v\xe0o \u0111\xf3 l\xe0 c\xe1c dependencies c\u1ea7n thi\u1ebft kh\xe1c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ARG debian_buster_image_tag=8-jre-slim\nFROM openjdk:${debian_buster_image_tag}\n\nARG shared_workspace=/opt/workspace\n\nRUN mkdir -p ${shared_workspace} && \\\n    apt-get update -y && \\\n    apt-get install -y python3 && \\\n    ln -s /usr/bin/python3 /usr/bin/python && \\\n    rm -rf /var/lib/apt/lists/*\n\nENV SHARED_WORKSPACE=${shared_workspace}\n\nVOLUME ${shared_workspace}\n")),(0,r.kt)("p",null,"\u1ede \u0111\xe2y, v\xec Spark y\xeau c\u1ea7u java phi\xean b\u1ea3n 8 ho\u1eb7c 11, n\xean ch\xfang ta s\u1ebd t\u1ea1o m\u1ed9t image ch\u1ea1y jdk 8, ch\xfang ta s\u1ebd l\u1ea5y bi\u1ebfn ",(0,r.kt)("inlineCode",{parentName:"p"},"shared_workspace")," l\xe0 \u0111\u01b0\u1eddng d\u1eabn m\xf4i tr\u01b0\u1eddng l\xe0m vi\u1ec7c c\u1ee7a Jupyterlab (\u1edf ph\u1ea7n sau). Th\xeam v\xe0o \u0111\xf3, ch\xfang ta s\u1ebd c\xe0i ",(0,r.kt)("inlineCode",{parentName:"p"},"python3")," cho vi\u1ec7c ch\u1ea1y Jupyterlab."),(0,r.kt)("h3",{id:"3-t\u1ea1o-m\u1ed9t-spark-base-image"},"3. T\u1ea1o m\u1ed9t spark base image"),(0,r.kt)("p",null,"Ta \u0111\u1ebfn v\u1edbi t\u1ea1o m\u1ed9t spark base image v\u1edbi c\xe1c package chung cho master node v\xe0 workder node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"FROM spark-cluster-base\n\nARG spark_version=3.2.0\nARG hadoop_version=3.2\n\nRUN apt-get update -y && \\\n    apt-get install -y curl && \\\n    curl https://archive.apache.org/dist/spark/spark-${spark_version}/spark-${spark_version}-bin-hadoop${hadoop_version}.tgz -o spark.tgz && \\\n    tar -xf spark.tgz && \\\n    mv spark-${spark_version}-bin-hadoop${hadoop_version} /usr/bin/ && \\\n    mkdir /usr/bin/spark-${spark_version}-bin-hadoop${hadoop_version}/logs && \\\n    rm spark.tgz\n\nENV SPARK_HOME /usr/bin/spark-${spark_version}-bin-hadoop${hadoop_version}\nENV SPARK_MASTER_HOST spark-master\nENV SPARK_MASTER_PORT 7077\nENV PYSPARK_PYTHON python3\n\nWORKDIR ${SPARK_HOME}\n")),(0,r.kt)("p",null,"\u0110\u1ea7u ti\xean, ta s\u1ebd import image t\u1eeb base image b\xean tr\xean (l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-cluster-base"),", c\xe1i t\xean n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\xe1n v\xe0o th\u1eddi gian build image), li\u1ec7t k\xea c\xe1c phi\xean b\u1ea3n Spark v\xe0 Hadoop t\u01b0\u01a1ng th\xedch v\u1edbi nhau. C\xe1c b\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra t\u01b0\u01a1ng th\xedch phi\xean b\u1ea3n tr\xean trang ch\u1ee7 c\u1ee7a Spark."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spark Version",src:n(2337).Z,width:"2032",height:"700"})),(0,r.kt)("p",null,"Sau \u0111\xf3 s\u1ebd l\xe0 t\u1ea3i v\xe0 gi\u1ea3i n\xe9n Spark, c\xf9ng v\u1edbi \u0111\xf3 l\xe0 t\u1ea1o c\xe1c bi\u1ebfn m\xf4i tr\u01b0\u1eddng c\u1ea7n thi\u1ebft \u0111\u1ec3 h\u1ed7 tr\u1ee3 ch\u1ea1y command line v\u1ec1 sau. \u1ede \u0111\xe2y, ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_MASTER_HOST")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_MASTER_PORT")," \u0111\u01b0\u1ee3c c\xe1c worker node d\xf9ng \u0111\u1ec3 register v\u1edbi master node \u0111\u1ecba ch\u1ec9 t\u01b0\u01a1ng \u1ee9ng."),(0,r.kt)("h3",{id:"4-t\u1ea1o-m\u1ed9t-master-node-image"},"4. T\u1ea1o m\u1ed9t master node image"),(0,r.kt)("p",null,"C\xf3 m\u1ed9t spark base image, ta b\u1eaft \u0111\u1ea7u t\u1ea1o master node b\u1eb1ng vi\u1ec7c import base image \u0111\xf3 v\xe0 th\xeam c\xe1c bi\u1ebfn ph\xf9 h\u1ee3p v\u1edbi master node nh\u01b0 l\xe0 port c\u1ee7a giao di\u1ec7n web ui \u0111\u1ec3 l\xe1t n\u1eefa c\xf3 th\u1ec3 t\u01b0\u01a1ng t\xe1c v\u1edbi spark tr\xean giao di\u1ec7n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"FROM spark-base\n\nARG spark_master_web_ui=8080\n\nEXPOSE ${spark_master_web_ui} ${SPARK_MASTER_PORT}\nCMD bin/spark-class org.apache.spark.deploy.master.Master >> logs/spark-master.out\n")),(0,r.kt)("p",null,"Command tr\xean l\xe0 \u0111\u1ec3 ch\u1ea1y master node."),(0,r.kt)("h3",{id:"5-t\u1ea1o-m\u1ed9t-worker-node-image"},"5. T\u1ea1o m\u1ed9t worker node image"),(0,r.kt)("p",null,"Ti\u1ebfp \u0111\u1ebfn l\xe0 t\u1ea1o worker node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"FROM spark-base\n\nARG spark_worker_web_ui=8081\n\nEXPOSE ${spark_worker_web_ui}\nCMD bin/spark-class org.apache.spark.deploy.worker.Worker spark://${SPARK_MASTER_HOST}:${SPARK_MASTER_PORT} >> logs/spark-worker.out\n")),(0,r.kt)("p",null,"Command tr\xean l\xe0 \u0111\u1ec3 ch\u1ea1y worker node v\xe0 tr\u1ecf t\u1edbi \u0111\u1ecba ch\u1ec9 c\u1ee7a master node \u0111\u1ec3 register."),(0,r.kt)("h3",{id:"6-t\u1ea1o-m\u1ed9t-jupyterlab-image-cho-vi\u1ec7c-ki\u1ec3m-th\u1eed"},"6. T\u1ea1o m\u1ed9t Jupyterlab image cho vi\u1ec7c ki\u1ec3m th\u1eed"),(0,r.kt)("p",null,"Cu\u1ed1i c\xf9ng, \u0111\u1ec3 ki\u1ec3m tra ho\u1ea1t \u0111\u1ed9ng c\u1ee7a spark cluster, ta s\u1ebd c\xe1i Jupyterlab v\xe0 d\xf9ng pyspark \u0111\u1ec3 ch\u1ea1y code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"FROM spark-cluster-base\n\nARG spark_version=3.2.0\nARG jupyterlab_version=3.2.5\n\nRUN apt-get update -y && \\\n    apt-get install -y python3-pip && \\\n    pip3 install wget pyspark==${spark_version} jupyterlab==${jupyterlab_version}\n\nEXPOSE 8888\nWORKDIR ${SHARED_WORKSPACE}\nCMD jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --allow-root --NotebookApp.token=\n")),(0,r.kt)("p",null,"C\xf9ng v\u1edbi \u0111\xf3 l\xe0 li\u1ec7t k\xea command ch\u1ea1y Jupyter \u1edf port 8888."),(0,r.kt)("h3",{id:"7-k\u1ebft-h\u1ee3p-c\xe1c-image-v\xe0-t\u1ea1o-c\xe1c-container"},"7. K\u1ebft h\u1ee3p c\xe1c image v\xe0 t\u1ea1o c\xe1c container"),(0,r.kt)("p",null,"Sau khi t\u1ea1o \u0111\u1ea7y \u0111\u1ee7 c\xe1c Dockerfile, ta ti\u1ebfn h\xe0nh build c\xe1c image ph\xf9 h\u1ee3p."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Folder Structure",src:n(3090).Z,width:"1300",height:"890"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Li\u1ec7t k\xea c\xe1c phi\xean b\u1ea3n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'SPARK_VERSION="3.2.0"\nHADOOP_VERSION="3.2"\nJUPYTERLAB_VERSION="3.2.5"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build base image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker build \\\n  --platform=linux/arm64 \\\n  -f cluster_base/Dockerfile \\\n  -t spark-cluster-base .\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build spark base image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker build \\\n  --build-arg spark_version="${SPARK_VERSION}" \\\n  --build-arg hadoop_version="${HADOOP_VERSION}" \\\n  -f spark_base/Dockerfile \\\n  -t spark-base .\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build master node image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker build \\\n  -f master_node/Dockerfile \\\n  -t spark-master .\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build worker node image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker build \\\n  -f worker_node/Dockerfile \\\n  -t spark-worker .\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build Jupyterlab image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker build \\\n  --build-arg spark_version="${SPARK_VERSION}" \\\n  --build-arg jupyterlab_version="${JUPYTERLAB_VERSION}" \\\n  -f jupyter_lab/Dockerfile \\\n  -t spark-jupyterlab .\n')),(0,r.kt)("p",null,"Cu\u1ed1i c\xf9ng, \u0111\u1ec3 t\u1ea1o c\xe1c container c\u1ea7n thi\u1ebft, ta t\u1ea1o m\u1ed9t file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," v\u1edbi n\u1ed9i dung nh\u01b0 sau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'version: "3.6"\nvolumes:\n  shared-workspace:\n    name: "hadoop-distributed-file-system"\n    driver: local\nservices:\n  jupyterlab:\n    image: spark-jupyterlab\n    container_name: jupyterlab\n    ports:\n      - 8888:8888\n    volumes:\n      - shared-workspace:/opt/workspace\n  spark-master:\n    image: spark-master\n    container_name: spark-master\n    ports:\n      - 8080:8080\n      - 7077:7077\n    volumes:\n      - shared-workspace:/opt/workspace\n  spark-worker-1:\n    image: spark-worker\n    container_name: spark-worker-1\n    environment:\n      - SPARK_WORKER_CORES=1\n      - SPARK_WORKER_MEMORY=512m\n    ports:\n      - 8081:8081\n    volumes:\n      - shared-workspace:/opt/workspace\n    depends_on:\n      - spark-master\n  spark-worker-2:\n    image: spark-worker\n    container_name: spark-worker-2\n    environment:\n      - SPARK_WORKER_CORES=1\n      - SPARK_WORKER_MEMORY=512m\n    ports:\n      - 8082:8081\n    volumes:\n      - shared-workspace:/opt/workspace\n    depends_on:\n      - spark-master\n')),(0,r.kt)("p",null,"Bao g\u1ed3m volume m\xe0 ta s\u1ebd l\u01b0u d\u1eef li\u1ec7u \u0111\u1ec3 khi xo\xe1 c\xe1c container kh\xf4ng b\u1ecb m\u1ea5t d\u1eef li\u1ec7u, c\xf9ng v\u1edbi \u0111\xf3 l\xe0 c\xe1c container (service) c\u1ea7n thi\u1ebft. \u1ede m\u1ed7i container c\xe1c bi\u1ebfn m\xf4i tr\u01b0\u1eddng ph\xf9 h\u1ee3p \u0111\u01b0\u1ee3c th\xeam v\xe0o, c\xe1c port \u0111\u1ec3 map ra m\xe1y host, v\xe0 th\u1ee9 t\u1ef1 ch\u1ea1y c\xe1c container. \u1ede \u0111\xe2y, master node ph\u1ea3i ch\u1ea1y l\xean tr\u01b0\u1edbc \u0111\u1ec3 l\u1ea5y hostname n\xean worker node s\u1ebd depend v\xe0o master node container. Sau \u0111\xf3, ta ch\u1ea1y ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up"),", nh\u01b0 th\u1ebf l\xe0 \u0111\xe3 kh\u1edfi ch\u1ea1y h\u1ebft c\xe1c container c\u1ea7n thi\u1ebft r\u1ed3i."),(0,r.kt)("h3",{id:"8-ch\u1ea1y-jupyterlab-\u0111\u1ec3-ki\u1ec3m-tra-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-cluster"},"8. Ch\u1ea1y Jupyterlab \u0111\u1ec3 ki\u1ec3m tra ho\u1ea1t \u0111\u1ed9ng c\u1ee7a cluster"),(0,r.kt)("p",null,"Sau khi \u0111\xe3 ch\u1ea1y ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")," v\xe0 th\u1ea5y \u1edf terminal c\xe1c logs th\u1ec3 hi\u1ec7n \u0111\xe3 kh\u1edfi \u0111\u1ed9ng th\xe0nh c\xf4ng master node v\xe0 worker node, c\xf9ng v\u1edbi tr\u1ea1ng th\xe1i register th\xe0nh c\xf4ng c\u1ee7a c\xe1c node, ta v\xe0o ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8080")," \u0111\u1ec3 xem spark ui."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spark UI",src:n(5054).Z,width:"2880",height:"1324"})),(0,r.kt)("p",null,"\u1ede giao di\u1ec7n, ta th\u1ea5y \u0111\u01b0\u1ee3c c\xf3 2 worker \u0111ang ho\u1ea1t \u0111\u1ed9ng nh\u01b0 v\xf9ng khoanh \u0111\u1ecf."),(0,r.kt)("p",null,"V\xe0o ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8888")," \u0111\u1ec3 v\xe0o giao di\u1ec7n Jupyterlab, th\u1ef1c hi\u1ec7n code sau"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jupyter Lab",src:n(4431).Z,width:"2880",height:"1634"})),(0,r.kt)("p",null,"Ch\u1ea1y code, r\u1ed3i quay l\u1ea1i spark ui, ta th\u1ea5y \u0111\u01b0\u1ee3c \u1ee9ng d\u1ee5ng c\u1ee7a ta \u0111ang ch\u1ea1y"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Application",src:n(4773).Z,width:"2880",height:"1236"})),(0,r.kt)("p",null,"\u1ea4n v\xe0o \u1ee9ng d\u1ee5ng, ta th\u1ea5y c\xe1c worker c\u1ee7a ta \u0111ang x\u1eed l\xfd job"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Application Workers",src:n(5e3).Z,width:"2878",height:"952"})))}k.isMDXComponent=!0},5e3:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/application-workers-542d26c362e926281666cbf113750eb5.PNG"},4773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/application-69b2a227be1eef29691bb5aefd65c6e9.PNG"},2877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cluster-overview-e73d0350f6f913d028c171532a18cc2a.PNG"},3090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/folder-structure-96413f7b1388654821531bfb39bbd777.PNG"},4431:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyterlab-cd81775f3664471769264e9d69acd378.PNG"},5054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spark-ui-78bc7baa81ca206a2e4c6e7059aeeffb.PNG"},2337:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spark-version-8e3b1dde17446f2dbe175a8e66750135.PNG"}}]);