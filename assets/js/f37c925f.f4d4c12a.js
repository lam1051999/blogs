"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[3516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=n,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={slug:"mini-spark3-authorizer-part-1",title:"Authorize Spark 3 SQL With Apache Ranger Part 1 - Ranger installation",authors:"tranlam",tags:["Bigdata","Spark","Ranger","Apache"],image:"./images/banner.PNG"},i=void 0,l={permalink:"/blogs/blog/mini-spark3-authorizer-part-1",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2023-06-30-mini-spark3-authorizer-part-1/index.md",source:"@site/blog/2023-06-30-mini-spark3-authorizer-part-1/index.md",title:"Authorize Spark 3 SQL With Apache Ranger Part 1 - Ranger installation",description:"Spark and Ranger are widely used by many enterprises because of their powerful features. Spark is an in-memory data processing framework and Ranger is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform. Thus, Ranger can be used to do authorization for Spark SQL and this blog will walk you through the integration of those two frameworks. This is the first part of the series, where we install the Ranger framework on our machine, and additionally, Apache Solr for auditing.",date:"2023-06-30T00:00:00.000Z",formattedDate:"June 30, 2023",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"Spark",permalink:"/blogs/blog/tags/spark"},{label:"Ranger",permalink:"/blogs/blog/tags/ranger"},{label:"Apache",permalink:"/blogs/blog/tags/apache"}],readingTime:4.035,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"mini-spark3-authorizer-part-1",title:"Authorize Spark 3 SQL With Apache Ranger Part 1 - Ranger installation",authors:"tranlam",tags:["Bigdata","Spark","Ranger","Apache"],image:"./images/banner.PNG"},prevItem:{title:"Authorize Spark 3 SQL With Apache Ranger Part 2 - Integrate Spark SQL With Ranger",permalink:"/blogs/blog/mini-spark3-authorizer-part-2"},nextItem:{title:"State Management In React",permalink:"/blogs/blog/state-management-react"}},s={image:a(2032).Z,authorsImageUrls:[void 0]},p=[{value:"1. Build process",id:"1-build-process",level:3},{value:"2. Ranger Admin installation",id:"2-ranger-admin-installation",level:3},{value:"3. Solr installation for auditing",id:"3-solr-installation-for-auditing",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Spark and Ranger are widely used by many enterprises because of their powerful features. Spark is an in-memory data processing framework and Ranger is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform. Thus, Ranger can be used to do authorization for Spark SQL and this blog will walk you through the integration of those two frameworks. This is the first part of the series, where we install the Ranger framework on our machine, and additionally, Apache Solr for auditing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"banner",src:a(2032).Z,width:"751",height:"286"})),(0,n.kt)("h3",{id:"1-build-process"},"1. Build process"),(0,n.kt)("p",null,"This installation come with these below components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,n.kt)("td",{parentName:"tr",align:null},"M1/M2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,n.kt)("td",{parentName:"tr",align:null},"8.0.33")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Java"),(0,n.kt)("td",{parentName:"tr",align:null},"OpenJDK-8-jdk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Python"),(0,n.kt)("td",{parentName:"tr",align:null},"2.7.18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maven"),(0,n.kt)("td",{parentName:"tr",align:null},"3.6.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ranger"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Solr"),(0,n.kt)("td",{parentName:"tr",align:null},"5.2.1")))),(0,n.kt)("p",null,"I install the framework on MacOS, but it is similar when it comes to any other Unix or Linux distributions."),(0,n.kt)("p",null,"Firstly, you need to have MySQL, Jdk8, Python 2.7, and Maven installed on your system, follow instructions from anywhere to make sure these components work as expected."),(0,n.kt)("p",null,"After that, you can download the source code of Ranger (I use release version 2.0.0) and start to build the source code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Get source code\nwget https://downloads.apache.org/ranger/2.0.0/apache-ranger-2.0.0.tar.gz\ntar -xvf apache-ranger-2.0.0.tar.gz\ncd apache-ranger-2.0.0\n\n# Build source code, it will output the ranger-2.0.0-admin.tar.gz in this repository in target/ folder\nmvn clean compile package install assembly:assembly -Dmaven.test.skip=true -Drat.skip=true -Dpmd.skip=true -Dfindbugs.skip=true -Dspotbugs.skip=true -Dcheckstyle.skip=true\n")),(0,n.kt)("h3",{id:"2-ranger-admin-installation"},"2. Ranger Admin installation"),(0,n.kt)("p",null,"After the build process, you will have the ",(0,n.kt)("inlineCode",{parentName:"p"},"ranger-2.0.0-admin.tar.gz")," file in the ",(0,n.kt)("inlineCode",{parentName:"p"},"target/")," folder, you can go to the installation step of Ranger Admin. Our target is running a standalone Ranger with Solr for auditing then ",(0,n.kt)("inlineCode",{parentName:"p"},"ranger-2.0.0-admin.tar.gz")," is enough in this case."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Extract the tar file\ncp ranger-2.0.0-admin.tar.gz ~\ncd ~\ntar -xvf ranger-2.0.0-admin.tar.gz\ncd ranger-2.0.0-admin\n")),(0,n.kt)("p",null,"We use MySQL as the database for Ranger and store all the information, setup step needs to connect to MySQL to initialize the database and tables. Thus, we need to have a MySQL connector to connect to MySQL from the setup code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Install mysql-connector\nwget https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.26.tar.gz\ntar -xvf mysql-connector-java-8.0.26.tar.gz\nmv mysql-connector-java-8.0.26/mysql-connector-java-8.0.26.jar mysql-connector-java.jar\n")),(0,n.kt)("p",null,"Now we are ready to edit the Ranger configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vi install.properties\nSQL_CONNECTOR_JAR=<path_to_mysql_connector>/mysql-connector-java.jar\n\ndb_name=ranger\ndb_user=admin\ndb_password=password12\n\nrangerAdmin_password=YourPassword@123456\nrangerTagsync_password=YourPassword@123456\nrangerUsersync_password=YourPassword@123456\nkeyadmin_password=YourPassword@123456\n\naudit_solr_urls=http://localhost:6083/solr/ranger_audits\n\nunix_user=<your_mac_user>\nunix_user_pwd=<your_mac_user_password>\nunix_group=<your_mac_group>\n\nRANGER_PID_DIR_PATH=$PWD/var/run/ranger\n")),(0,n.kt)("p",null,"Currently, the configuration for our use case is completed, we now run the setup scripts."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Comment setup user/group because it is currently compatible with Linux\nvi setup.sh # then comment #setup_unix_user_group\n\n# Setup scripts run python2\npyenv local 2.7.18\n\n# After updating the required properties, run setup.sh\n./setup.sh\n")),(0,n.kt)("p",null,"Once the setup scripts are done, you will see this output ",(0,n.kt)("inlineCode",{parentName:"p"},"Installation of Ranger PolicyManager Web Application is completed."),", that means it is successful. Then, we can run our Ranger Admin service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"~/ranger-2.0.0-admin/ews/ranger-admin-services.sh start\n\n# Check logs\ntail -100f ~/ranger-2.0.0-admin/ews/logs/access_log.*\ntail -100f ~/ranger-2.0.0-admin/ews/logs/catalina.out\ntail -100f ~/ranger-2.0.0-admin/ews/logs/ranger-admin-*.log\n")),(0,n.kt)("p",null,"To access Ranger Admin UI, go to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:6080")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"user/password = admin/YourPassword@123456"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ranger home",src:a(7388).Z,width:"1916",height:"1025"})),(0,n.kt)("p",null,"Additional notes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Configure policy with\npolicy.download.auth.users=<your_user>\ntag.download.auth.users=<your_user>\n\n# We can test the policy with Rest APIs provided by Ranger\ncurl -ivk -H "Content-type:application/json" -u admin:YourPassword@123456 -X GET "http://localhost:6080/service/plugins/policies" # to get all policies\ncurl -ivk -H "Content-type:application/json" -u admin:YourPassword@123456 -X GET "http://localhost:6080/service/plugins/policies/download/dev_hive" # to get specific policy by service name\n\n# Stop ranger admin\n~/ranger-2.0.0-admin/ews/ranger-admin-services.sh stop \n')),(0,n.kt)("h3",{id:"3-solr-installation-for-auditing"},"3. Solr installation for auditing"),(0,n.kt)("p",null,"Currently, Solr and Elasticsearch have supported sources for audit stores with Ranger. I will install Solr as it is built-in supported and does not require a good amount of infrastructure. The is also a standalone Solr which has no dependency on Zookeeper."),(0,n.kt)("p",null,"In the same Ranger build that we had done earlier, we would find an installation setup for enabling Solr audits. We also want to change some installation configurations for our specific use case."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/ranger-2.0.0-admin/contrib/solr_for_audit_setup\n\n# Change config\nvi install.properties\nSOLR_USER=<your_mac_user>\nSOLR_GROUP=<your_mac_group>\n\nSOLR_INSTALL=true\n\nJAVA_HOME=<your_java_home>\nSOLR_DOWNLOAD_URL=http://archive.apache.org/dist/lucene/solr/5.2.1/solr-5.2.1.tgz\n\nSOLR_INSTALL_FOLDER=<your_prefix_folder>/data/solr\nSOLR_RANGER_HOME=<your_prefix_folder>/data/solr/ranger_audit_server\nSOLR_RANGER_DATA_FOLDER=<your_prefix_folder>/data/solr/ranger_audit_server/data\nSOLR_LOG_FOLDER=<your_prefix_folder>/var/log/solr/ranger_audits\n")),(0,n.kt)("p",null,"After that, we can run the setup scripts."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Setup directory\nmkdir -p <SOLR_INSTALL_FOLDER>\n\n# Setup scripts run python2\npyenv local 2.7.18\n\n# After updating the required properties, run setup.sh\nsudo ./setup.sh\n")),(0,n.kt)("p",null,"Once the setup scripts are completed, we can start the Solr service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Instructions for start/stop Solr\ncat <SOLR_RANGER_HOME>/install_notes.txt\n\n# Start Solr\n~/ranger-2.0.0-admin/contrib/solr_for_audit_setup/data/solr/ranger_audit_server/scripts/start_solr.sh\n\n# Stop Solr\n~/ranger-2.0.0-admin/contrib/solr_for_audit_setup/data/solr/ranger_audit_server/scripts/stop_solr.sh\n")),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:6083"),", you can see the information about your Solr service."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"solr home",src:a(9880).Z,width:"1901",height:"1026"})),(0,n.kt)("p",null,"If you don't want to build the source code yourself then go to this repository, I have included the output file of the build process at ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/lam1051999/ranger_build_output"},"https://github.com/lam1051999/ranger_build_output")),"."),(0,n.kt)("p",null,"This is all about installing Ranger with Solr for auditing. In the next blog, I will talk about how we can customize Spark to get a policy from Ranger and do the authorization on Spark SQL."))}d.isMDXComponent=!0},2032:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-f7f67c4c18838de8d49230557182b09d.PNG"},7388:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ranger_home-d305fdc58e09329f56a7cfff631d8b0f.PNG"},9880:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/solr_home-8703231d89281075796e680044cb4ff4.PNG"}}]);