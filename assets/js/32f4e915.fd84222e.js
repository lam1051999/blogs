"use strict";(self.webpackChunklamtran_blog=self.webpackChunklamtran_blog||[]).push([[5521],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),k=n,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||s;return t?r.createElement(m,o(o({ref:a},c),{},{components:t})):r.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=k;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8574:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const s={slug:"spark-cluster-docker",title:"Create A Standalone Spark Cluster With Docker",description:"Create A Standalone Spark Cluster With Docker",authors:"tranlam",tags:["Bigdata","Spark","Apache","Docker"],image:"./images/cluster-overview.PNG"},o=void 0,i={permalink:"/blog/spark-cluster-docker",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-01-01-spark-cluster-docker/index.md",source:"@site/blog/2022-01-01-spark-cluster-docker/index.md",title:"Create A Standalone Spark Cluster With Docker",description:"Create A Standalone Spark Cluster With Docker",date:"2022-01-01T00:00:00.000Z",formattedDate:"January 1, 2022",tags:[{label:"Bigdata",permalink:"/blog/tags/bigdata"},{label:"Spark",permalink:"/blog/tags/spark"},{label:"Apache",permalink:"/blog/tags/apache"},{label:"Docker",permalink:"/blog/tags/docker"}],readingTime:6.455,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"spark-cluster-docker",title:"Create A Standalone Spark Cluster With Docker",description:"Create A Standalone Spark Cluster With Docker",authors:"tranlam",tags:["Bigdata","Spark","Apache","Docker"],image:"./images/cluster-overview.PNG"},prevItem:{title:"Create A Data Streaming Pipeline With Spark Streaming, Kafka And Docker",permalink:"/blog/spark-kafka-docker"},nextItem:{title:"AVL Tree, AVL Sorting Algorithm",permalink:"/blog/avl-tree"}},l={image:t(2877).Z,authorsImageUrls:[void 0]},p=[{value:"1. Overview of a Spark cluster",id:"1-overview-of-a-spark-cluster",level:3},{value:"2. Create a base image for the cluster",id:"2-create-a-base-image-for-the-cluster",level:3},{value:"3. Create a spark base image",id:"3-create-a-spark-base-image",level:3},{value:"4. Create a master node image",id:"4-create-a-master-node-image",level:3},{value:"5. Create a worker node image",id:"5-create-a-worker-node-image",level:3},{value:"6. Create a Jupyterlab image for testing",id:"6-create-a-jupyterlab-image-for-testing",level:3},{value:"7. Combine images and create containers",id:"7-combine-images-and-create-containers",level:3},{value:"8. Running Jupyterlab to check the cluster",id:"8-running-jupyterlab-to-check-the-cluster",level:3}],c={toc:p};function u(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cluster Overview",src:t(2877).Z,width:"596",height:"286"})),(0,n.kt)("p",null,"Lately, I've spent a lot of time teaching myself how to build Hadoop clusters, Spark, Hive integration, and more. This article will write about how you can build a Spark cluster for data processing using Docker, including 1 master node and 2 worker nodes, the cluster type is standalone cluster (maybe the upcoming articles I will do about Hadoop cluster and integrated resource manager is Yarn). Let's go to the article."),(0,n.kt)("h3",{id:"1-overview-of-a-spark-cluster"},"1. Overview of a Spark cluster"),(0,n.kt)("p",null,"Apache Spark is a data processing framework that can quickly perform processing tasks on very large data sets, and can also distribute tasks across multiple computers. It was design for fast computing and use RAM for caching and processing data."),(0,n.kt)("p",null,"It provides flexibility and scalability, created to improve the performance of MapReduce but at a much higher speed: 100 times faster than Hadoop when data is stored in memory and 10 times faster when accessed CD driver."),(0,n.kt)("p",null,"Spark does not have a file system of its own, but it can interact with many types of storage systems and can be used to integrate with Hadoop. Below is an overview of the structure of a Spark application."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cluster Overview",src:t(2877).Z,width:"596",height:"286"})),(0,n.kt)("p",null,"Each time we submit a Spark application, it will create a driver program at the master node, which then create a SparkContext object. To be able to run in a cluster, SparkContext need to connect to a cluster resource manager, that could be Spark\u2019s standalone cluster manager, Mesos or Yarn. Once the SparkContext get the connection, it will have specific RAM and CPU resources of the worker nodes in the cluster."),(0,n.kt)("p",null,"Each worker node will receive the code and tasks from the driver, compute and process the data."),(0,n.kt)("p",null,"The master node will be responsible for scheduling all the tasks and send those to the worker nodes so it\u2019s ideal when we put it in the same network area with all the worker nodes to achieve low latency between requests"),(0,n.kt)("p",null,"There are 2 Spark running modes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Running locally:")," running all the tasks in the same machine which is your local machine, utilize the number of cores in that machine to perform parallelism"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Running in a cluster:")," Spark distribute the tasks to all the machine in the cluster. There are 2 deploy modes which are client mode and cluster mode, with 4 options of cluster resource manager, which are Spark standalone cluster manager, Apache Mesos, Hadoop Yarn, or Kubernetes.")),(0,n.kt)("h3",{id:"2-create-a-base-image-for-the-cluster"},"2. Create a base image for the cluster"),(0,n.kt)("p",null,"Because the images of the nodes in a cluster need to install the same software, we will build a base image for the whole cluster first, then the following images will import from this image and add the following images. other necessary dependencies."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ARG debian_buster_image_tag=8-jre-slim\nFROM openjdk:${debian_buster_image_tag}\n\nARG shared_workspace=/opt/workspace\n\nRUN mkdir -p ${shared_workspace} && \\\n    apt-get update -y && \\\n    apt-get install -y python3 && \\\n    ln -s /usr/bin/python3 /usr/bin/python && \\\n    rm -rf /var/lib/apt/lists/*\n\nENV SHARED_WORKSPACE=${shared_workspace}\n\nVOLUME ${shared_workspace}\n")),(0,n.kt)("p",null,"Here, since Spark requires java version 8 or 11, we will create an image running jdk 8, we will take the variable ",(0,n.kt)("inlineCode",{parentName:"p"},"shared_workspace")," as the Jupyterlab working environment path (later). In addition, we will install ",(0,n.kt)("inlineCode",{parentName:"p"},"python3")," for running Jupyterlab."),(0,n.kt)("h3",{id:"3-create-a-spark-base-image"},"3. Create a spark base image"),(0,n.kt)("p",null,"We come to create a spark base image with common packages for master node and worker node."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"FROM spark-cluster-base\n\nARG spark_version=3.2.0\nARG hadoop_version=3.2\n\nRUN apt-get update -y && \\\n    apt-get install -y curl && \\\n    curl https://archive.apache.org/dist/spark/spark-${spark_version}/spark-${spark_version}-bin-hadoop${hadoop_version}.tgz -o spark.tgz && \\\n    tar -xf spark.tgz && \\\n    mv spark-${spark_version}-bin-hadoop${hadoop_version} /usr/bin/ && \\\n    mkdir /usr/bin/spark-${spark_version}-bin-hadoop${hadoop_version}/logs && \\\n    rm spark.tgz\n\nENV SPARK_HOME /usr/bin/spark-${spark_version}-bin-hadoop${hadoop_version}\nENV SPARK_MASTER_HOST spark-master\nENV SPARK_MASTER_PORT 7077\nENV PYSPARK_PYTHON python3\n\nWORKDIR ${SPARK_HOME}\n")),(0,n.kt)("p",null,"First, we will import the image from the base image above (that is ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-cluster-base"),", this name will be assigned at build time), listing the compatible Spark and Hadoop versions. You can check version compatibility on Spark's homepage."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spark Version",src:t(2337).Z,width:"1625",height:"560"})),(0,n.kt)("p",null,"Then it will be to download and extract Spark, along with creating the necessary environment variables to support running the command line later. Here, ",(0,n.kt)("inlineCode",{parentName:"p"},"SPARK_MASTER_HOST")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"SPARK_MASTER_PORT")," used by worker nodes to register with the corresponding master node address."),(0,n.kt)("h3",{id:"4-create-a-master-node-image"},"4. Create a master node image"),(0,n.kt)("p",null,"Having a spark base image, we start creating the master node by importing that base image and adding the appropriate variables to the master node as the port of the web ui interface so we can interact with spark on the interface later."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"FROM spark-base\n\nARG spark_master_web_ui=8080\n\nEXPOSE ${spark_master_web_ui} ${SPARK_MASTER_PORT}\nCMD bin/spark-class org.apache.spark.deploy.master.Master >> logs/spark-master.out\n")),(0,n.kt)("p",null,"The above command is to run master node."),(0,n.kt)("h3",{id:"5-create-a-worker-node-image"},"5. Create a worker node image"),(0,n.kt)("p",null,"Next is to create worker node"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"FROM spark-base\n\nARG spark_worker_web_ui=8081\n\nEXPOSE ${spark_worker_web_ui}\nCMD bin/spark-class org.apache.spark.deploy.worker.Worker spark://${SPARK_MASTER_HOST}:${SPARK_MASTER_PORT} >> logs/spark-worker.out\n")),(0,n.kt)("p",null,"The above command is to run the worker node and point to the address of the master node to register."),(0,n.kt)("h3",{id:"6-create-a-jupyterlab-image-for-testing"},"6. Create a Jupyterlab image for testing"),(0,n.kt)("p",null,"Finally, to test the spark cluster working, we will install Jupyterlab and use pyspark to run the code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"FROM spark-cluster-base\n\nARG spark_version=3.2.0\nARG jupyterlab_version=3.2.5\n\nRUN apt-get update -y && \\\n    apt-get install -y python3-pip && \\\n    pip3 install wget pyspark==${spark_version} jupyterlab==${jupyterlab_version}\n\nEXPOSE 8888\nWORKDIR ${SHARED_WORKSPACE}\nCMD jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --allow-root --NotebookApp.token=\n")),(0,n.kt)("p",null,"Along with that is to list the command to run Jupyter on port 8888."),(0,n.kt)("h3",{id:"7-combine-images-and-create-containers"},"7. Combine images and create containers"),(0,n.kt)("p",null,"After creating all the Dockerfiles, we proceed to build the appropriate images."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Folder Structure",src:t(3090).Z,width:"1300",height:"890"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Listing versions")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'SPARK_VERSION="3.2.0"\nHADOOP_VERSION="3.2"\nJUPYTERLAB_VERSION="3.2.5"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build base image")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker build \\\n  --platform=linux/arm64 \\\n  -f cluster_base/Dockerfile \\\n  -t spark-cluster-base .\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build spark base image")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker build \\\n  --build-arg spark_version="${SPARK_VERSION}" \\\n  --build-arg hadoop_version="${HADOOP_VERSION}" \\\n  -f spark_base/Dockerfile \\\n  -t spark-base .\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build master node image")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker build \\\n  -f master_node/Dockerfile \\\n  -t spark-master .\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build worker node image")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker build \\\n  -f worker_node/Dockerfile \\\n  -t spark-worker .\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build Jupyterlab image")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker build \\\n  --build-arg spark_version="${SPARK_VERSION}" \\\n  --build-arg jupyterlab_version="${JUPYTERLAB_VERSION}" \\\n  -f jupyter_lab/Dockerfile \\\n  -t spark-jupyterlab .\n')),(0,n.kt)("p",null,"Finally, to create the necessary containers, we create a file ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," with the following content"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'version: "3.6"\nvolumes:\n  shared-workspace:\n    name: "hadoop-distributed-file-system"\n    driver: local\nservices:\n  jupyterlab:\n    image: spark-jupyterlab\n    container_name: jupyterlab\n    ports:\n      - 8888:8888\n    volumes:\n      - shared-workspace:/opt/workspace\n  spark-master:\n    image: spark-master\n    container_name: spark-master\n    ports:\n      - 8080:8080\n      - 7077:7077\n    volumes:\n      - shared-workspace:/opt/workspace\n  spark-worker-1:\n    image: spark-worker\n    container_name: spark-worker-1\n    environment:\n      - SPARK_WORKER_CORES=1\n      - SPARK_WORKER_MEMORY=512m\n    ports:\n      - 8081:8081\n    volumes:\n      - shared-workspace:/opt/workspace\n    depends_on:\n      - spark-master\n  spark-worker-2:\n    image: spark-worker\n    container_name: spark-worker-2\n    environment:\n      - SPARK_WORKER_CORES=1\n      - SPARK_WORKER_MEMORY=512m\n    ports:\n      - 8082:8081\n    volumes:\n      - shared-workspace:/opt/workspace\n    depends_on:\n      - spark-master\n')),(0,n.kt)("p",null,"Include the volume in which we will save data so that when deleting containers, data will not be lost, along with the necessary containers (services). To each container the appropriate environment variables are added, the ports to map to the host machine, and the order in which the containers are run. Here, the master node has to run first to get the hostname, so the worker node will depend on the master node container. After that, we run ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose up"),", so we have launched all the necessary containers."),(0,n.kt)("h3",{id:"8-running-jupyterlab-to-check-the-cluster"},"8. Running Jupyterlab to check the cluster"),(0,n.kt)("p",null,"After running ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose up")," and seeing in the terminal the logs showing that the master node and worker node have been successfully started, along with the successful register status of the nodes, we go to ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:8080")," to access spark ui."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spark UI",src:t(5054).Z,width:"2304",height:"1059"})),(0,n.kt)("p",null,"In the interface, we can see that there are 2 workers working as red circled areas."),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:8888")," to access the Jupyterlab interface, execute the following code"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Jupyter Lab",src:t(4431).Z,width:"2304",height:"1307"})),(0,n.kt)("p",null,"Run the code, then go back to spark ui, we can see our application is running"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Application",src:t(4773).Z,width:"2304",height:"988"})),(0,n.kt)("p",null,"Click on the application, we see our workers processing the job"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Application Workers",src:t(5e3).Z,width:"2302",height:"761"})))}u.isMDXComponent=!0},5e3:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/application-workers-299c2630b4d6df5db037a2ec8f133173.PNG"},4773:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/application-6257f914f09a8cad5d6c19bd2f2a5a9e.PNG"},2877:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/cluster-overview-e73d0350f6f913d028c171532a18cc2a.PNG"},3090:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/folder-structure-96413f7b1388654821531bfb39bbd777.PNG"},4431:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/jupyterlab-843081ca92d06c16577ee369fcea9f86.PNG"},5054:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/spark-ui-93f0b9c11bae35ea288c92bb45c0dcb1.PNG"},2337:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/spark-version-dc51155270739185cc493d4ae6ccb2a7.PNG"}}]);