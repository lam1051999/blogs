"use strict";(self.webpackChunklamtran_blog=self.webpackChunklamtran_blog||[]).push([[7119],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>h});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):m(m({},a),e)),r},p=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(r),y=o,h=c["".concat(s,".").concat(y)]||c[y]||u[y]||n;return r?t.createElement(h,m(m({ref:a},p),{},{components:r})):t.createElement(h,m({ref:a},p))}));function h(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,m=new Array(n);m[0]=y;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:o,m[1]=i;for(var l=2;l<n;l++)m[l]=r[l];return t.createElement.apply(null,m)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1351:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const n={slug:"how-is-memory-managed-in-spark",title:"How Is Memory Managed In Spark?",authors:"tranlam",tags:["Bigdata","Spark","Apache"],image:"./images/banner.PNG"},m=void 0,i={permalink:"/blog/how-is-memory-managed-in-spark",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2023-07-07-how-is-memory-managed-in-spark/index.md",source:"@site/blog/2023-07-07-how-is-memory-managed-in-spark/index.md",title:"How Is Memory Managed In Spark?",description:"Spark is an in-memory data processing framework that can quickly perform processing tasks on very large data sets, and can also distribute tasks across multiple computers. Spark applications are memory heavy, hence, it is obvious that memory management plays a very important role in the whole system.",date:"2023-07-07T00:00:00.000Z",formattedDate:"July 7, 2023",tags:[{label:"Bigdata",permalink:"/blog/tags/bigdata"},{label:"Spark",permalink:"/blog/tags/spark"},{label:"Apache",permalink:"/blog/tags/apache"}],readingTime:7.97,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"how-is-memory-managed-in-spark",title:"How Is Memory Managed In Spark?",authors:"tranlam",tags:["Bigdata","Spark","Apache"],image:"./images/banner.PNG"},nextItem:{title:"State Management In React",permalink:"/blog/state-management-react"}},s={image:r(2685).Z,authorsImageUrls:[void 0]},l=[{value:"1. Spark executor",id:"1-spark-executor",level:3},{value:"2. Spark memory manager",id:"2-spark-memory-manager",level:3},{value:"2.1. On-Heap Memory",id:"21-on-heap-memory",level:4},{value:"2.1.1. Researved memory",id:"211-researved-memory",level:5},{value:"2.1.2. User memory",id:"212-user-memory",level:5},{value:"2.1.3. Spark memory",id:"213-spark-memory",level:5},{value:"2.1.3. Dynamic memory allocation between Storage Memory and Execution Memory",id:"213-dynamic-memory-allocation-between-storage-memory-and-execution-memory",level:5},{value:"2.2. Off-Heap Memory",id:"22-off-heap-memory",level:4},{value:"3. Spark memory calculation example",id:"3-spark-memory-calculation-example",level:3},{value:"4. References",id:"4-references",level:3}],p={toc:l};function c(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Spark is an in-memory data processing framework that can quickly perform processing tasks on very large data sets, and can also distribute tasks across multiple computers. Spark applications are memory heavy, hence, it is obvious that memory management plays a very important role in the whole system."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"banner image",src:r(2685).Z,width:"759",height:"518"})),(0,o.kt)("h3",{id:"1-spark-executor"},"1. Spark executor"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cluster overview",src:r(6631).Z,width:"596",height:"286"})),(0,o.kt)("p",null,"Spark sends application code (defined by JAR or Python files passed to SparkContext) to each executor which will launch a JVM process for code execution. There are two types of memory in JVM."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On-Heap memory:")," refers to objects that will be present in the Java heap (and also subject to GC)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Off-Heap memory:")," refers to (serialized) objects that are managed by EHCache, but stored outside the heap (and also not subject to GC).")),(0,o.kt)("p",null,"The Off-Heap store is used to avoid the overhead of GC on a heap that is several Megabytes or Gigabytes large. It is slightly slower than the On-Heap memory, but still faster than the disk store."),(0,o.kt)("h3",{id:"2-spark-memory-manager"},"2. Spark memory manager"),(0,o.kt)("p",null,"Before Spark 1.6, a simple scheme for memory management was adopted, which is Static Memory Manager (SMM). The size of Storage Memory and Execution Memory and other memory is fixed during application execution and it has been deprecated because of the lack of flexibility."),(0,o.kt)("p",null,"From Spark 1.6+, Spark came up with Unified Memory Manager (UMM) with dynamic memory allocation, shared by storage and execution. Thus, when Execution Memory is not used, the Storage Memory can borrow all the available memory and vice versa, by calling acquireMemory() to make changes to memory pools. Therefore, UMM has lots of advantages compared to SMM."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory can be switched between Storage Memory and Execution Memory."),(0,o.kt)("li",{parentName:"ul"},"When our application has no cache, all memory can be used by execution and thus prevent data spilling to disk."),(0,o.kt)("li",{parentName:"ul"},"The application will be able to spend a minimum amount for Storage Memory for cached data and let the execution borrow the remaining."),(0,o.kt)("li",{parentName:"ul"},"Dynamically improve performance without requiring the user to configure the memory portion for each manually.")),(0,o.kt)("h4",{id:"21-on-heap-memory"},"2.1. On-Heap Memory"),(0,o.kt)("p",null,"The size of the On-Heap memory can be configured either by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"--executor-memory")," to command lines or setting ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.executor.memory"),' to the Spark application, in the same format as JVM memory strings with a size unit suffix ("k", "m", "g" or "t") (e.g. 512m, 2g). This amount of memory can be breakdown into the below types.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"on heap overview",src:r(9870).Z,width:"1016",height:"390"})),(0,o.kt)("p",null,"Default values of those configurations in Spark v3.3.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"spark.executor.memory=1g\nspark.memory.fraction=0.6\nspark.memory.storageFraction=0.5\nUsable Memory = On-Heap Memory - Reserved Memory\n")),(0,o.kt)("h5",{id:"211-researved-memory"},"2.1.1. Researved memory"),(0,o.kt)("p",null,"Reserved Memory is the memory reserved for the system and is used to store Spark's internal objects. Its size is hardcoded ",(0,o.kt)("inlineCode",{parentName:"p"},"private val RESERVED_SYSTEM_MEMORY_BYTES = 300 * 1024 * 1024")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.spark.memory.UnifiedMemoryManager"),". If you want to make any modifications, you need to change the Spark source code and recompile it. Spark will require On-Heap memory greater or equal to 1.5 times of Reserved Memory or it will fail to initialize Spark session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"spark-shell --conf spark.executor.memory=300m\n\njava.lang.IllegalArgumentException: Executor memory 314572800 must be at least 471859200. Please increase executor memory using the --executor-memory option or spark.executor.memory in Spark configuration.\n    at org.apache.spark.memory.UnifiedMemoryManager$.getMaxMemory(UnifiedMemoryManager.scala:229)\n    ...\n")),(0,o.kt)("h5",{id:"212-user-memory"},"2.1.2. User memory"),(0,o.kt)("p",null,"User Memory is the memory used to store user-defined data structures, any UDFs created by the user, the data needed for RDD conversion operations, etc. This memory segment is not managed by Spark and Spark will not be aware of/maintain it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"User Memory = Usable Memory * (1 - spark.memory.fraction)\n")),(0,o.kt)("h5",{id:"213-spark-memory"},"2.1.3. Spark memory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Spark Memory = Usable Memory * spark.memory.fraction\n")),(0,o.kt)("p",null,"This memory pool is managed by Spark. Divided into two types of memory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Execution Memory:")," Used for processing tasks, storing objects required during the execution of the tasks. When this pool has no space left, it will spill to the disk. Execution Memory tends to remain shorter than Storage Memory since it will be evicted immediately after each operation, making space for the next ones.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Storage Memory = Spark Memory * (1 - spark.memory.storageFraction)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage Memory:")," used for storing the cached data (data with persist option MEMORY in it), broadcast variables, and data deserialization. When this region is full, cache data will be either written to disk or recomputed based on configuration. Spark also clears space for new cache requests by eliminating the old cache objects with the Least Recently Used (LRU) mechanism.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Storage Memory = Spark Memory * spark.memory.storageFraction\n")),(0,o.kt)("h5",{id:"213-dynamic-memory-allocation-between-storage-memory-and-execution-memory"},"2.1.3. Dynamic memory allocation between Storage Memory and Execution Memory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storage Memory can borrow space from Execution Memory only if blocks are not used in Execution Memory."),(0,o.kt)("li",{parentName:"ul"},"Execution Memory can also borrow space from Storage Memory if blocks are not used in Storage Memory."),(0,o.kt)("li",{parentName:"ul"},"If blocks from Execution Memory are used by Storage Memory, and Execution needs more memory, it can forcefully evict the excess blocks occupied by Storage Memory."),(0,o.kt)("li",{parentName:"ul"},"If blocks from Storage Memory are used by Execution Memory and Storage needs more memory, it cannot forcefully evict the excess blocks occupied by Execution Memory, it will end up having less memory area. It will wait until Spark releases the excess blocks stored by Execution Memory and then occupies them.")),(0,o.kt)("h4",{id:"22-off-heap-memory"},"2.2. Off-Heap Memory"),(0,o.kt)("p",null,"Most Spark operations happened entirely in On-Heap memory and utilize the mighty help of GC that sometimes can cause GC overhead. To minimize this effect, Spark introduces the Off-Heap memory for certain operations, which will reduce the impact of GC in the application."),(0,o.kt)("p",null,"Off-Heap memory means allocating memory objects (serialized to a byte array) to memory outside the heap of the JVM, which is directly managed by the operating system. This memory does not bound to GC but calls the Java API (sun.misc.Unsafe) for unsafe operations such as C which uses malloc() to use operating system memory."),(0,o.kt)("p",null,"Data accessing in this region can be slightly slower than accessing the On-Heap memory, but still faster than disk, and the user has to manually deal with managing the allocated memory. Data on Off-Heap memory can still be persisted even when the executor getting killed (data cache on On-Heap memory would be gone)."),(0,o.kt)("p",null,"This memory region is disabled by default but can be enabled by setting these configurations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"spark.memory.offHeap.enabled = true (false by default)\nspark.memory.offHeap.size = ?g (0 by default)\n")),(0,o.kt)("p",null,"Off-Heap memory includes only Storage Memory and Execution Memory, which will be distributed in the following manner."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"off heap overview",src:r(8829).Z,width:"587",height:"305"})),(0,o.kt)("p",null,"Therefore, the total memory of Storage Memory or Execution Memory will be the sum of each in both On-Heap and Off-Heap memories."),(0,o.kt)("h3",{id:"3-spark-memory-calculation-example"},"3. Spark memory calculation example"),(0,o.kt)("p",null,"Despite we pass ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.executor.memory")," to On-Heap memory, the maximum amount of memory that the JVM will attempt to use will be slightly smaller than ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.executor.memory"),", which will be calculated with the below Java program."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Helper {\n    public static void main(String[] args) {\n        long maxMem = Runtime.getRuntime().maxMemory();\n        System.out.println(maxMem);\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"spark.executor.memory=1024 (as 1GB in MB)\njava -Xmx${spark_executor_memory}m -cp target/calculate-1.0-SNAPSHOT.jar Helper\n954728448 (which is 0.88916015625 GB)\n")),(0,o.kt)("p",null,"A small Python program to calculate the memory of each memory category, with the help of the Java code above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# MB will be the smallest unit\nfrom distutils.util import strtobool\nimport subprocess\n\ndef get_valid_input(message, f, error_message):\n    amount = None\n    while amount is None:\n        try:\n            amount = f(input(message))\n            return amount\n        except ValueError:\n            print(error_message)\n\ndef get_jvm_max_mem(mem):\n    command = ["java", f"-Xmx{int(mem)}m", "-cp", "calculate/target/calculate-1.0-SNAPSHOT.jar", "Helper"]\n    p = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)\n    text = p.stdout.read()\n    ret = p.wait()\n    if ret == 0:\n        return float(text.decode("utf-8"))\n\nif __name__ == "__main__":\n    RESERVED_SYSTEM_MEMORY = 300\n    SPARK_MEMORY_FRACTION=0.6\n    SPARK_MEMORY_STORAGEFRACTION=0.5\n    GB_TO_MB_RATE = 1024\n    spark_executor_memory = get_valid_input("Amount of spark.executor.memory (in GB): ", float, "Invalid value for spark.executor.memory, must be a number") * GB_TO_MB_RATE\n    spark_executor_memory = get_jvm_max_mem(spark_executor_memory) / pow(GB_TO_MB_RATE, 2)\n    spark_memory_offheap_enabled = get_valid_input("Option spark.memory.offHeap.enabled: ", strtobool, "Invalid value for spark.memory.offHeap.enabled, must be a boolean string (true, false, True, False,...)")\n    if spark_memory_offheap_enabled:\n        spark_memory_offheap_size = get_valid_input("Amount of spark.memory.offHeap.size (in GB): ", float, "Invalid value for spark.memory.offHeap.size, must be a number") * GB_TO_MB_RATE\n    on_heap_user_memory = (spark_executor_memory - RESERVED_SYSTEM_MEMORY) * (1 - SPARK_MEMORY_FRACTION)\n    on_heap_spark_memory = (spark_executor_memory - RESERVED_SYSTEM_MEMORY) * SPARK_MEMORY_FRACTION\n    on_heap_spark_storage_memory = on_heap_spark_memory * SPARK_MEMORY_STORAGEFRACTION\n    on_heap_spark_execution_memory = on_heap_spark_memory * (1 - SPARK_MEMORY_STORAGEFRACTION)\n    total_spark_memory = on_heap_spark_memory\n    print("\\n")\n    print(f"------------------ On-Heap Memory: {spark_executor_memory} MB ------------------")\n    print(f"Researved Memory: {RESERVED_SYSTEM_MEMORY} MB")\n    print(f"User Memory: {on_heap_user_memory} MB")\n    print(f"Spark Memory: {on_heap_spark_memory} MB")\n    print(f"\\tStorage Memory: {on_heap_spark_storage_memory} MB")\n    print(f"\\tExecution Memory: {on_heap_spark_execution_memory} MB")\n    if spark_memory_offheap_enabled:\n        off_heap_spark_storage_memory = spark_memory_offheap_size * SPARK_MEMORY_STORAGEFRACTION\n        off_heap_spark_execution_memory = spark_memory_offheap_size * (1 - SPARK_MEMORY_STORAGEFRACTION)\n        print("\\n")\n        print(f"------------------ Off-Heap Memory: {spark_memory_offheap_size} MB ------------------")\n        print(f"Storage Memory: {off_heap_spark_storage_memory} MB")\n        print(f"Execution Memory: {off_heap_spark_execution_memory} MB")\n        total_spark_memory += spark_memory_offheap_size\n    print("\\n")\n    print(f"------------------ Total Spark Memory (Spark Memory + Off-Heap Memory): {total_spark_memory} MB ({total_spark_memory / GB_TO_MB_RATE} GB) ------------------")\n')),(0,o.kt)("p",null,"So for an application with ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.executor.memory=1g"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.memory.offHeap.enabled=true"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.memory.offHeap.size=512m"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python calculate.py\n\nAmount of spark.executor.memory (in GB): 1\nOption spark.memory.offHeap.enabled: true\nAmount of spark.memory.offHeap.size (in GB): 0.5\n\n\n------------------ On-Heap Memory: 910.5 MB ------------------\nResearved Memory: 300 MB\nUser Memory: 244.20000000000002 MB\nSpark Memory: 366.3 MB\n        Storage Memory: 183.15 MB\n        Execution Memory: 183.15 MB\n\n\n------------------ Off-Heap Memory: 512.0 MB ------------------\nStorage Memory: 256.0 MB\nExecution Memory: 256.0 MB\n\n\n------------------ Total Spark Memory (Spark Memory + Off-Heap Memory): 878.3 MB (0.85771484375 GB) ------------------\n")),(0,o.kt)("p",null,"We start a spark shell with the following configurations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"spark-shell --conf spark.executor.memory=1g --conf spark.memory.offHeap.enabled=true --conf spark.memory.offHeap.size=512m\n")),(0,o.kt)("p",null,"Then go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4040/executors/"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memory calculation",src:r(5483).Z,width:"2846",height:"572"})),(0,o.kt)("p",null,"We can see that the total amount of Spark memory is exactly like our calculation."),(0,o.kt)("p",null,"That is how we calculate the memory in Spark. The source code can be found at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lam1051999/spark_memory_calculator"},"https://github.com/lam1051999/spark_memory_calculator"),". See you in the next blogs."),(0,o.kt)("h3",{id:"4-references"},"4. References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.cloudera.com/t5/Community-Articles/Spark-Memory-Management/ta-p/317794"},"Spark Memory Management")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://luminousmen.com/post/dive-into-spark-memory"},"Dive into Spark memory")))}c.isMDXComponent=!0},2685:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/banner-f2772f1ed0ae88f14d5fe42a9152b9bc.PNG"},6631:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/cluster-overview-e73d0350f6f913d028c171532a18cc2a.PNG"},5483:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/memory-calculation-ff3429931c0d0d873b6c50c8b7b6288c.PNG"},8829:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/off-heap-overview-843fd0eb033c924234dac0c3c6daffeb.PNG"},9870:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/on-heap-overview-21c45fbdd86112aa6e6dff35c61b798a.PNG"}}]);