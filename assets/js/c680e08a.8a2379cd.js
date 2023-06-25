"use strict";(self.webpackChunkkgajera_blog=self.webpackChunkkgajera_blog||[]).push([[1689],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,g=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return t?n.createElement(g,s(s({ref:a},l),{},{components:t})):n.createElement(g,s({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=k;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4408:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={slug:"spark-kafka-docker",title:"Create A Data Streaming Pipeline With Spark Streaming, Kafka And Docker",authors:"tranlam",tags:["Bigdata","Spark","Apache","Kafka","Docker"],image:"./images/architecture.PNG"},s=void 0,i={permalink:"/blogs/blog/spark-kafka-docker",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2022-09-11-spark-kafka-docker/index.md",source:"@site/blog/2022-09-11-spark-kafka-docker/index.md",title:"Create A Data Streaming Pipeline With Spark Streaming, Kafka And Docker",description:"Architecture",date:"2022-09-11T00:00:00.000Z",formattedDate:"September 11, 2022",tags:[{label:"Bigdata",permalink:"/blogs/blog/tags/bigdata"},{label:"Spark",permalink:"/blogs/blog/tags/spark"},{label:"Apache",permalink:"/blogs/blog/tags/apache"},{label:"Kafka",permalink:"/blogs/blog/tags/kafka"},{label:"Docker",permalink:"/blogs/blog/tags/docker"}],readingTime:8.67,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"spark-kafka-docker",title:"Create A Data Streaming Pipeline With Spark Streaming, Kafka And Docker",authors:"tranlam",tags:["Bigdata","Spark","Apache","Kafka","Docker"],image:"./images/architecture.PNG"},prevItem:{title:"MySQL series - MySQL Architecture Overview",permalink:"/blogs/blog/mysql-series-mysql-architecture"},nextItem:{title:"Create A Standalone Spark Cluster With Docker",permalink:"/blogs/blog/spark-cluster-docker"}},p={image:t(4194).Z,authorsImageUrls:[void 0]},c=[{value:"1. Design overview",id:"1-design-overview",level:3},{value:"2. Build necessary Docker images and containers",id:"2-build-necessary-docker-images-and-containers",level:3},{value:"2.1. Create a Spark cluster",id:"21-create-a-spark-cluster",level:4},{value:"2.2. Add Zookeeper, Kafka, Postgres, Schema Registry containers",id:"22-add-zookeeper-kafka-postgres-schema-registry-containers",level:4},{value:"3. Create a Kafka Producer that produce fake data using Java Faker",id:"3-create-a-kafka-producer-that-produce-fake-data-using-java-faker",level:3},{value:"4. Submit Spark job",id:"4-submit-spark-job",level:3},{value:"4.1. Configure the Postgres database",id:"41-configure-the-postgres-database",level:4},{value:"4.2. Spark application configuration",id:"42-spark-application-configuration",level:4}],l={toc:c};function m(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:t(4194).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"Hi guys, I'm back after a long time without writing anything. Today, I want to share about how to create a Spark Streaming pipeline that consumes data from Kafka, everything is built on Docker."),(0,r.kt)("h3",{id:"1-design-overview"},"1. Design overview"),(0,r.kt)("p",null,"The model is containerized by Docker. Includes the following components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Producer: is a Kafka Producer that produces fake data about an user information using Java Faker and produce messages onto Kafka."),(0,r.kt)("li",{parentName:"ul"},"Kafka cluster: includes brokers to store data and Zookeeper to manage those brokers."),(0,r.kt)("li",{parentName:"ul"},"Spark cluster: is a Spark cluster consisting of 3 nodes: 1 driver and 2 workers to consume data from Kafka."),(0,r.kt)("li",{parentName:"ul"},"Schema Registry: provides a restful interface to store and retrieve schemas, helping Kafka producers and consumers work together according to standards. Since the two ends of producing and consuming messages from two Kafka ends are independent, the consumer does not need to know how the producer sends the message with the format, the Schema Registry acts as an intermediary for the two parties to register the message format with each other, avoiding system errors."),(0,r.kt)("li",{parentName:"ul"},"Postgres: is the database to provide configurations for the Spark Streaming application and in this article is also the place to store the streaming data after processing by Spark.")),(0,r.kt)("h3",{id:"2-build-necessary-docker-images-and-containers"},"2. Build necessary Docker images and containers"),(0,r.kt)("h4",{id:"21-create-a-spark-cluster"},"2.1. Create a Spark cluster"),(0,r.kt)("p",null,"As in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/blogs/blog/spark-cluster-docker"},"previous article"))," I wrote about how to build a Spark cluster on Docker, in this article I take advantage of that cluster. However, there is a slight change, leaving out some things to fit this article. You can find the build image script ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lam1051999/spark_kafka_docker/tree/main/spark_cluster"},"here")),". So we have the necessary images for the Spark cluster. Here is the container configuration in docker-compose.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"spark-master:\n  image: spark-master\n  container_name: spark-master\n  ports:\n    - 8080:8080\n    - 7077:7077\n    - 4040:4040\n  volumes:\n    - /Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/target:/execution_files\nspark-worker-1:\n  image: spark-worker\n  container_name: spark-worker-1\n  environment:\n    - SPARK_WORKER_CORES=1\n    - SPARK_WORKER_MEMORY=1024m\n  ports:\n    - 18081:8081\n  volumes:\n    - /Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/target:/execution_files\n  depends_on:\n    - spark-master\nspark-worker-2:\n  image: spark-worker\n  container_name: spark-worker-2\n  environment:\n    - SPARK_WORKER_CORES=1\n    - SPARK_WORKER_MEMORY=1024m\n  ports:\n    - 28081:8081\n  volumes:\n    - /Users/tranlammacbook/Documents/spark_streaming_kafka/spark_ex/target:/execution_files\n  depends_on:\n    - spark-master\n")),(0,r.kt)("h4",{id:"22-add-zookeeper-kafka-postgres-schema-registry-containers"},"2.2. Add Zookeeper, Kafka, Postgres, Schema Registry containers"),(0,r.kt)("p",null,"Next will be on Zookeeper, Kafka, Postgres and Schema Registry containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'zookeeper:\n  image: confluentinc/cp-zookeeper:3.3.1\n  container_name: zookeeper\n  ports:\n    - "2181:2181"\n  environment:\n    ZOOKEEPER_CLIENT_PORT: 2181\n    ZOOKEEPER_TICK_TIME: 2000\nkafka:\n  image: confluentinc/cp-kafka:3.3.1\n  container_name: kafka\n  depends_on:\n    - zookeeper\n  ports:\n    - "29092:29092"\n  environment:\n    KAFKA_BROKER_ID: 1\n    KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n    KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,PLAINTEXT_HOST://localhost:29092\n    KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT\n    KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT\n    KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n\ndb:\n  image: postgres\n  container_name: db-postgres\n  volumes:\n    - ./data/db:/var/lib/postgresql/data\n  ports:\n    - "5432:5432"\n  environment:\n    - POSTGRES_NAME=postgres\n    - POSTGRES_USER=postgres\n    - POSTGRES_PASSWORD=postgres\n\nschema-registry:\n  image: confluentinc/cp-schema-registry:3.3.1\n  container_name: schema-registry\n  depends_on:\n    - zookeeper\n    - kafka\n  ports:\n    - "8081:8081"\n  environment:\n    SCHEMA_REGISTRY_KAFKASTORE_CONNECTION_URL: zookeeper:2181\n    SCHEMA_REGISTRY_HOST_NAME: schema-registry\n')),(0,r.kt)("p",null,"To sum up, we have a complete docker-compose.yml file like ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lam1051999/spark_kafka_docker/blob/main/spark_ex/docker-compose.yml"},"this")),". Then we start the containers with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("p",null,"Note, this starts all containers at once, some Kafka and Schema Registry instances will fail because it depends on Zookeeper. Wait for the Zookeeper container to finish up and then restart the Kafka container and the Schema Registry (you can also check the Zookeeper service by implementing some healthcheck techniques)."),(0,r.kt)("h3",{id:"3-create-a-kafka-producer-that-produce-fake-data-using-java-faker"},"3. Create a Kafka Producer that produce fake data using Java Faker"),(0,r.kt)("p",null,"Next, we create a Kafka Producer to fire dummy data in Java. First, we need to create a schema on the Schema Registry. Because the Schema Registry provides a restful interface, we can easily interact with it by calling GET, POST,... The schema we use in this article will have the following form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "com.cloudurable.phonebook",\n  "type": "record",\n  "name": "Employee",\n  "doc": "Represents an Employee at a company",\n  "fields": [\n    { "name": "id", "type": "string", "doc": "The person id" },\n    { "name": "firstName", "type": "string", "doc": "The persons given name" },\n    { "name": "nickName", "type": ["null", "string"], "default": null },\n    { "name": "lastName", "type": "string" },\n    { "name": "age", "type": "int", "default": -1 },\n    { "name": "emails", "type": "string", "doc": "The person email" },\n    {\n      "name": "phoneNumber",\n      "type": {\n        "type": "record",\n        "name": "PhoneNumber",\n        "fields": [\n          { "name": "areaCode", "type": "string" },\n          { "name": "countryCode", "type": "string", "default": "" },\n          { "name": "prefix", "type": "string" },\n          { "name": "number", "type": "string" }\n        ]\n      }\n    },\n    { "name": "status", "type": "string" }\n  ]\n}\n')),(0,r.kt)("p",null,"First, to POST this schema to the Schema Registry, we must convert this schema to escaped json, visit ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.freeformatter.com/json-escape.html"},"this website")),". Then use the POST method to push the schema as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/vnd.schemaregistry.v1+json" \\\n  --data \'{"schema": "{\\"namespace\\": \\"com.cloudurable.phonebook\\",\\"type\\": \\"record\\",\\"name\\": \\"Employee\\",\\"doc\\" : \\"Represents an Employee at a company\\",\\"fields\\": [{\\"name\\": \\"id\\", \\"type\\": \\"string\\", \\"doc\\": \\"The person id\\"},{\\"name\\": \\"firstName\\", \\"type\\": \\"string\\", \\"doc\\": \\"The persons given name\\"},{\\"name\\": \\"nickName\\", \\"type\\": [\\"null\\", \\"string\\"], \\"default\\" : null},{\\"name\\": \\"lastName\\", \\"type\\": \\"string\\"},{\\"name\\": \\"age\\",  \\"type\\": \\"int\\", \\"default\\": -1},{\\"name\\": \\"emails\\", \\"type\\": \\"string\\", \\"doc\\": \\"The person email\\"},{\\"name\\": \\"phoneNumber\\",  \\"type\\":{ \\"type\\": \\"record\\",   \\"name\\": \\"PhoneNumber\\",\\"fields\\": [{\\"name\\": \\"areaCode\\", \\"type\\": \\"string\\"},{\\"name\\": \\"countryCode\\", \\"type\\": \\"string\\", \\"default\\" : \\"\\"},{\\"name\\": \\"prefix\\", \\"type\\": \\"string\\"},{\\"name\\": \\"number\\", \\"type\\": \\"string\\"}]}},{\\"name\\": \\"status\\", \\"type\\": \\"string\\"}]}"}\' \\\n  http://localhost:8081/subjects/personinformation-value/versions\n')),(0,r.kt)("p",null,"After that, GET back to check if the schema is up or not"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://localhost:8081/subjects/personinformation-value/versions/ // check all versions\ncurl -X GET http://localhost:8081/subjects/personinformation-value/versions/1 // check schema version 1\n")),(0,r.kt)("p",null,"Now that Kafka is up, the schema is on the Schema Registry, the rest is to push the message to that topic. Write a class as follows (see full code ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lam1051999/spark_kafka_docker/tree/main/KafkaClient"},"here")),"), and run, then the data will be uploaded to Kafka with the above chema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package kafkaclient;\n\nimport com.github.javafaker.Faker;\nimport io.confluent.kafka.serializers.KafkaAvroSerializerConfig;\nimport org.apache.avro.Schema;\nimport org.apache.avro.generic.GenericData;\nimport org.apache.avro.generic.GenericRecord;\nimport org.apache.kafka.clients.producer.KafkaProducer;\nimport org.apache.kafka.clients.producer.Producer;\nimport io.confluent.kafka.serializers.KafkaAvroSerializer;\nimport org.apache.kafka.clients.producer.ProducerConfig;\nimport org.apache.kafka.clients.producer.ProducerRecord;\nimport org.apache.kafka.common.serialization.StringSerializer;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.Properties;\n\npublic class KafkaProducerExample {\n    private final static String TOPIC = "personinformation";\n    private final static String BOOTSTRAP_SERVERS = "localhost:29092";\n    private final static String SCHEMA_REGISTRY_URL = "http://localhost:8081";\n    private final static String LOCAL_SCHEMA_PATH = "src/main/resources/person.avsc";\n    private final static Schema schema;\n\n    private final static int nPersons = 1000;\n\n    static {\n        try {\n            schema = new Schema.Parser().parse(new File(LOCAL_SCHEMA_PATH));\n        } catch (IOException e) {\n            throw new RuntimeException(e);\n        }\n    }\n\n    private static Producer<String, GenericRecord> createProducer(){\n        Properties props = new Properties();\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAP_SERVERS);\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, KafkaAvroSerializer.class.getName());\n        props.put(KafkaAvroSerializerConfig.SCHEMA_REGISTRY_URL_CONFIG, SCHEMA_REGISTRY_URL);\n\n        return new KafkaProducer<>(props);\n    }\n\n    static void runProducer() {\n        final Producer<String, GenericRecord> producer = createProducer();\n        Faker faker = new Faker();\n\n        for (int i = 0; i < nPersons; i ++){\n            String id = faker.idNumber().valid();\n            String firstName = faker.name().firstName();\n            String nickName = faker.name().username();\n            String lastName = faker.name().lastName();\n            int age = faker.number().numberBetween(18, 90);\n            String emails = faker.internet().safeEmailAddress();\n            String areaCode = String.valueOf(faker.number().numberBetween(200, 500));\n            String countryCode = String.valueOf(faker.number().numberBetween(80, 85));\n            String prefix = String.valueOf(faker.number().numberBetween(400, 600));\n            String number = String.valueOf(faker.number().numberBetween(1234, 6789));\n\n            GenericRecord phoneNumber = new GenericData.Record(schema.getField("phoneNumber").schema());\n            phoneNumber.put("areaCode", areaCode);\n            phoneNumber.put("countryCode", countryCode);\n            phoneNumber.put("prefix", prefix);\n            phoneNumber.put("number", number);\n\n            StatusEnum status = StatusEnum.getRandomStatus();\n\n            GenericRecord personInfo = new GenericData.Record(schema);\n            personInfo.put("id", id);\n            personInfo.put("firstName", firstName);\n            personInfo.put("nickName", nickName);\n            personInfo.put("lastName", lastName);\n            personInfo.put("age", age);\n            personInfo.put("emails", emails);\n            personInfo.put("phoneNumber", phoneNumber);\n            personInfo.put("status", status.toString());\n\n            ProducerRecord<String, GenericRecord> data = new ProducerRecord<String, GenericRecord>(TOPIC, String.format("%s %s %s", firstName, lastName, nickName), personInfo);\n            producer.send(data);\n            System.out.println("Send successfully!!!");\n            try {\n                Thread.sleep(2000);\n            }catch (Exception e){\n                e.printStackTrace();\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            runProducer();\n        }catch (Exception e){\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Above, every 2 seconds we will push 1 message to Kafka, pushing a total of 1000 messages."),(0,r.kt)("h3",{id:"4-submit-spark-job"},"4. Submit Spark job"),(0,r.kt)("h4",{id:"41-configure-the-postgres-database"},"4.1. Configure the Postgres database"),(0,r.kt)("p",null,"Before we can run the job, we need to configure Postgres with the following tables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuration for Spark applications")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE spark_launcher_config (\n    id serial primary  key,\n    "desc" varchar(1000) NULL,\n    app_name varchar(255) NULL,\n    properties text,\n    created timestamp without time zone DEFAULT (now() at time zone \'Asia/Ho_Chi_Minh\'),\n    modified timestamp without time zone DEFAULT (now() at time zone \'Asia/Ho_Chi_Minh\')\n)\n\nINSERT INTO public.spark_launcher_config\n    (id, "desc", app_name, properties, created, modified)\n    VALUES(2, \'kafka_ingest\', \'ingest_avro_from_kafka\', \'{\n    "appname": "ingest_avro_from_kafka",\n    "master": "spark://spark-master:7077",\n    "duration": "10",\n    "groupId": "ingest_avro_from_kafka",\n    "zookeeper.hosts": "zookeeper:2181",\n    "checkpoint": "./spark_checkpoint/ingest_avro_from_kafka",\n    "zookeeper.timeout": "40000",\n    "spark.sql.shuffle.partitions": "10",\n    "spark.sql.sources.partitionOverwriteMode": "dynamic",\n    "spark.sql.hive.verifyPartitionPath": "true",\n    "spark.streaming.kafka.maxRatePerPartition": 10000,\n    "_kafka_.bootstrap.servers": "kafka:9092",\n    "_kafka_.group.id": "ingest_avro_from_kafka",\n    "_kafka_.auto.offset.reset": "earliest",\n    "_kafka_.max.poll.interval.ms": 5000000,\n    "_kafka_.max.poll.records": 10000,\n    "_kafka_.schema.registry.url": "http://schema-registry:8081",\n    "_kafka_.auto.commit": "false",\n    "_kafka_.session.timeout.ms": "50000",\n    "_kafka_.heartbeat.interval.ms": "25000",\n    "_kafka_.request.timeout.ms": "50000"\n    }\', \'2022-04-12 09:35:27.511\', \'2022-04-12 09:35:27.511\');\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Topic consumption configuration table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE spark_ingest_config (\n    id serial primary key,\n    app_name varchar(255) not null unique,\n    type varchar(255)  NULL,\n    \"order\" int NULL,\n    topic varchar(255) not null unique,\n    status int not null DEFAULT 0,\n    fields text,\n    temp_view_first varchar(255)  NULL,\n    sql_parser text,\n    prd_id varchar(255)  NULL,\n    keys varchar(255)  NULL,\n    path_hdfs varchar(255) NOT NULL,\n    table_dest varchar(255) NOT NULL,\n    impala_driver varchar(255) null DEFAULT '',\n    impala_url varchar(255) null DEFAULT '',\n    kafka_msg_type kkmt DEFAULT 'avro_flat',\n    json_schema text,\n    repartition_des int not null DEFAULT 1,\n    msg_type mst DEFAULT 'NOT_DEFINE',\n    created timestamp without time zone DEFAULT (now() at time zone 'Asia/Ho_Chi_Minh'),\n    modified timestamp without time zone DEFAULT (now() at time zone 'Asia/Ho_Chi_Minh')\n)\n\nINSERT INTO public.spark_ingest_config\n(id, app_name, \"type\", \"order\", topic, status, fields, temp_view_first, sql_parser, prd_id, keys, path_hdfs, table_dest, impala_driver, impala_url, kafka_msg_type, json_schema, repartition_des, msg_type, created, modified)\nVALUES(1, 'ingest_avro_from_kafka', 'insert', 0, 'personinformation', 1, 'firstName,\nnickName,\nlastName,\nage,\nemails,\nphoneNumber,\nstatus', 'ingest_avro_from_kafka_personinformation', 'select\n    cast(firstName as STRING) as firstName,\n    cast(nickName as STRING) as nickName,\n    cast(lastName as STRING) as lastName,\n    cast(age as INT) as age,\n    cast(emails as STRING) as emails,\n    cast(concat(phoneNumber.countryCode, \"-\", phoneNumber.areaCode, \"-\", phoneNumber.prefix, \"-\", phoneNumber.number) as STRING) as phoneNumber,\n    cast(status as STRING) as status\nfrom ingest_avro_from_kafka_personinformation', '', '', '', 'personinformation', '', '', 'avro_flat'::public.\"kkmt\", '', 1, 'NOT_DEFINE'::public.\"mst\", '2022-04-06 19:59:41.745', '2022-04-06 19:59:41.745');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Streaming data table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table personinformation (\n    firstName varchar(250) not null,\n    nickName varchar(250) not null,\n    lastName varchar(250) not null,\n    age integer not null,\n    emails varchar(250) not null,\n    phoneNumber varchar(250) not null,\n    status varchar(10) not null\n);\n")),(0,r.kt)("h4",{id:"42-spark-application-configuration"},"4.2. Spark application configuration"),(0,r.kt)("p",null,"The full Spark Streaming Code you can find ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lam1051999/spark_kafka_docker/tree/main/spark_ex"},"here")),". Compile the project by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh run.sh\n")),(0,r.kt)("p",null,"When all containers are running stable, Kafka has the data, we access the shell of the Spark master container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it spark-master bash\n")),(0,r.kt)("p",null,"After entering the shell, you continue to run the command below to submit the Spark job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$SPARK_HOME/bin/spark-submit --jars $(echo /execution_files/dependency/*.jar | tr ' ' ',') --class com.tranlam.App /execution_files/spark_ex-1.0-SNAPSHOT.jar --app-name ingest_avro_from_kafka --jdbc-url \"jdbc:postgresql://db:5432/postgres?user=postgres&password=postgres\"\n")),(0,r.kt)("p",null,"So there is already a Spark job that consumes Kafka data. Visit ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://localhost:4040/streaming"},"http://localhost:4040/streaming"))," to see the batches running"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:t(2178).Z,width:"2878",height:"1708"})),(0,r.kt)("p",null,"In Postgres, query the table ",(0,r.kt)("inlineCode",{parentName:"p"},"personinformation")," we get the data as desired"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postgres",src:t(2943).Z,width:"936",height:"378"})),(0,r.kt)("p",null,"Above is the steps for building a basic Spark streaming pipeline to stream data from Kafka. Another thing to note is that instead of committing the offset of the consumptions to a Kafka topic like in above code, you can manually commit it to a path in Zookeeper for more proactive control."),(0,r.kt)("p",null,"The code of the whole article you read can be found at: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lam1051999/spark_kafka_docker"},"https://github.com/lam1051999/spark_kafka_docker"))))}m.isMDXComponent=!0},4194:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/architecture-77309774b4b463947f6f1f3ef0a8f0dc.PNG"},2943:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/postgres-5773b8ab0a455f7ac006cae76556a096.PNG"},2178:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/spark-ui-1ecafa9bf152aeeb9696a63ce919b27e.PNG"}}]);