"use strict";(self.webpackChunklamtran_blog=self.webpackChunklamtran_blog||[]).push([[2099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={slug:"state-management-react",title:"State Management In React",description:"State Management In React",authors:"tranlam",tags:["Web development","React","Html","Css"],image:"./images/showcase.PNG"},l=void 0,r={permalink:"/blog/state-management-react",editUrl:"https://github.com/lam1051999/blogs/edit/main/blog/2023-06-26-state-management-react/index.md",source:"@site/blog/2023-06-26-state-management-react/index.md",title:"State Management In React",description:"State Management In React",date:"2023-06-26T00:00:00.000Z",formattedDate:"June 26, 2023",tags:[{label:"Web development",permalink:"/blog/tags/web-development"},{label:"React",permalink:"/blog/tags/react"},{label:"Html",permalink:"/blog/tags/html"},{label:"Css",permalink:"/blog/tags/css"}],readingTime:10.5,truncated:!0,authors:[{name:"Lam Tran",title:"Data Engineer",url:"https://github.com/lam1051999",imageURL:"https://github.com/lam1051999.png",key:"tranlam"}],frontMatter:{slug:"state-management-react",title:"State Management In React",description:"State Management In React",authors:"tranlam",tags:["Web development","React","Html","Css"],image:"./images/showcase.PNG"},prevItem:{title:"How Is Memory Managed In Spark?",permalink:"/blog/how-is-memory-managed-in-spark"},nextItem:{title:"Authorize Spark 3 SQL With Apache Ranger Part 2 - Integrate Spark SQL With Ranger",permalink:"/blog/mini-spark3-authorizer-part-2"}},s={image:n(3372).Z,authorsImageUrls:[void 0]},p=[{value:"1. Virtual DOM",id:"1-virtual-dom",level:2},{value:"2. React state",id:"2-react-state",level:2},{value:"3. Diffing algorithm",id:"3-diffing-algorithm",level:2},{value:"3.1. Rule #1",id:"31-rule-1",level:3},{value:"3.2. Rule #2",id:"32-rule-2",level:3},{value:"3.3. Rule #3",id:"33-rule-3",level:3},{value:"3.4. Rule #4",id:"34-rule-4",level:3},{value:"4. State usage with useState hook",id:"4-state-usage-with-usestate-hook",level:2},{value:"5. Update components in different DOM tree branches",id:"5-update-components-in-different-dom-tree-branches",level:2},{value:"5.1. Using callback functions",id:"51-using-callback-functions",level:3},{value:"5.2. Using React context",id:"52-using-react-context",level:3},{value:"5.3. Using Redux",id:"53-using-redux",level:3},{value:"6. Performance considerations when interacting with state",id:"6-performance-considerations-when-interacting-with-state",level:2},{value:"7. References",id:"7-references",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"State is a very crucial part of React applications which will help update the information of the React components to change UI accordingly and make our application interactive with clients. In this article, I will walk you through the usage of state, its characteristic, and how we can use state in an efficient way."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"showcase image",src:n(3372).Z,width:"1120",height:"586"})),(0,i.kt)("h2",{id:"1-virtual-dom"},"1. Virtual DOM"),(0,i.kt)("p",null,"If you ever work with ",(0,i.kt)("inlineCode",{parentName:"p"},"React")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),", you probably know about a concept called Virtual DOM which those libraries/frameworks used to update the real DOM tree in the browser. Virtual DOM in React is a programming concept where the representation of a UI is kept in memory and synced with the real DOM."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"virtual dom",src:n(5610).Z,width:"1476",height:"716"})),(0,i.kt)("p",null,"In the picture above, whenever we have a UI in the browser on the left, we can inspect that UI and we can see the real DOM tree which contains several Html elements such as ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ul"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"li"),",... React will maintain a JavaScript object on the right to describe things on the real DOM and updates made to that object will be synchronized to the real DOM and modify the UI accordingly."),(0,i.kt)("p",null,"Thus, the Virtual DOM is a lightweight version of the real DOM, it provides a mechanism that abstracts manual DOM manipulations away from the developers, helping us to write more predictable code to interact with the real DOM."),(0,i.kt)("h2",{id:"2-react-state"},"2. React state"),(0,i.kt)("p",null,"State is a plain JavaScript object used by React to represent a piece of information about the component's current situation. We modify state to manipulate the Virtual DOM."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"state change",src:n(7862).Z,width:"1556",height:"723"})),(0,i.kt)("p",null,"Whenever state changes, it will modify some properties of the Virtual DOM. React will compare the new Virtual DOM with the old one to detect those changes and will synchronize them to the real DOM. The interesting thing here is that update is only applied at the node where there is an actual change. So, how can React do the diffing algorithm in an efficient way?"),(0,i.kt)("h2",{id:"3-diffing-algorithm"},"3. Diffing algorithm"),(0,i.kt)("p",null,"Diffing is the algorithm that React uses in order to find differences between two Virtual DOM trees and update efficiently the real DOM. In this section, I will just explain very high-level rules used by this algorithm."),(0,i.kt)("p",null,"When diffing two trees, React will first compare the two root elements."),(0,i.kt)("h3",{id:"31-rule-1"},"3.1. Rule #1"),(0,i.kt)("p",null,"Two elements of different types will produce different trees."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule 1",src:n(6611).Z,width:"185",height:"175"})),(0,i.kt)("p",null,"As shown in the picture, going from ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," will lead to full rebuild, its children will get unmounted and have their state destroyed."),(0,i.kt)("h3",{id:"32-rule-2"},"3.2. Rule #2"),(0,i.kt)("p",null,"With the DOM elements of the same type, but different attributes, React knows to only modify the attribute that have been changed."),(0,i.kt)("p",null,"In this example, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," attribute of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," is changed, React will only update that attribute instead of rebuilding the whole element."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule 2 1",src:n(6256).Z,width:"667",height:"68"})),(0,i.kt)("p",null,"With object value attribute, React updates only the properties that have been changed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule 2 2",src:n(4976).Z,width:"830",height:"65"})),(0,i.kt)("h3",{id:"33-rule-3"},"3.3. Rule #3"),(0,i.kt)("p",null,"This rule is about detecting the differences while recursing on children elements."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule 3 1",src:n(8401).Z,width:"1694",height:"462"})),(0,i.kt)("p",null,"React iterates over both lists of lists of children at the same time, and generates mutation whenever there's a difference. As shown in above example, React will know to just generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"List item 3")," and append to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ul")," element."),(0,i.kt)("p",null,"So what if we prepend the list element instead of append? Because of iterating two lists at the same time and comparing, React will assume that all of those elements have been changed and rebuild all of them, which is a very bad case."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule 3 2",src:n(7262).Z,width:"1432",height:"371"})),(0,i.kt)("p",null,"In order to get rid of the above case, we come to the ",(0,i.kt)("inlineCode",{parentName:"p"},"rule #4")),(0,i.kt)("h3",{id:"34-rule-4"},"3.4. Rule #4"),(0,i.kt)("p",null,"Developers can hint at which elements may be stable across different renders with a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," prop, so that elements with the same key will be compared with each other"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule 4",src:n(5686).Z,width:"1620",height:"768"})),(0,i.kt)("p",null,"In the picture above, we add a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," property to each ",(0,i.kt)("inlineCode",{parentName:"p"},"li")," element so React will know to pair check the elements with the ",(0,i.kt)("inlineCode",{parentName:"p"},'key="item-1"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'key="item-2"')," and only add the element with ",(0,i.kt)("inlineCode",{parentName:"p"},'key="item-3"')," to the new DOM"),(0,i.kt)("h2",{id:"4-state-usage-with-usestate-hook"},"4. State usage with useState hook"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," hook is a built-in React hook that allows you to manage state in a functional component."),(0,i.kt)("p",null,"Consider an example below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// define React state in functional components\nconst [count, setCount] = useState(0);\n\n// update state\nsetCount(count + 1);\nsetCount((prevCount) => prevCount + 1);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useState")," returns an array contains the state (",(0,i.kt)("inlineCode",{parentName:"p"},"count"),") and a function used to update the state (",(0,i.kt)("inlineCode",{parentName:"p"},"setCount"),"). The set function will take either the new value for the state or a callback function that returns new value as the argument."),(0,i.kt)("p",null,"There are some considerations when using state"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"setState")," function is asynchronous:")," consider the below example, whenever we click the button to increase the count, we see the console logs the old value of state before it is updated. Because ",(0,i.kt)("inlineCode",{parentName:"li"},"setState")," function is asynchronous, it will be pulled to an event loop, move to the lifecycle ",(0,i.kt)("inlineCode",{parentName:"li"},"Call stack -> WebAPIs -> Callback Queue -> Call stack -> being executed -> Pop out the stack")," (you can refer to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.webdevolution.com/blog/Javascript-Event-Loop-Explained"},"Javascript event loop")),"), but basically, in JavaScript, in the same code block, the synchronous code will always run before the asynchronous code, that's why we see the console logs the value of state before it is updated.")),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"UseStateM1.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Mistake 1")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/components/UseStateM1.jsx"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Changes to state should be made by ",(0,i.kt)("inlineCode",{parentName:"strong"},"setState")," function:")," in this example, we can see that the count actually changes in the console log but the UI is not updated. Because we modify the state value directly and it will not cause the rerender of the component. In this case, we need to update state value by ",(0,i.kt)("inlineCode",{parentName:"li"},"setState")," function: ",(0,i.kt)("inlineCode",{parentName:"li"},"setCount(count + 3)"),".")),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"UseStateM2.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Mistake 2")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/components/UseStateM2.jsx"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State should be treated as immutable:")," each time we use ",(0,i.kt)("inlineCode",{parentName:"li"},"setState")," function, we need to pass a brand new value to the function in order to rerender the component. React uses Shallow Comparision to check if the state is changed or not. In JavaScript, with primitive datatypes such as numbers, strings,... SC will compare their values, with object datatypes such as object, array,... SC will compare their references. Consider the example below, when we modify the state object directly, the component will not be rerendered and the UI will not be updated because the state actually holds the reference to the user object, not its value. In order to fix this, we use the spread operator to create a new object to make a new reference, and update properties in that object ",(0,i.kt)("inlineCode",{parentName:"li"},'{ ...prevUser, name: "No one", age: 30 }'),", and our component will work as expected.")),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"UseStateM3.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Mistake 3")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/components/UseStateM3.jsx"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pass function as argument to ",(0,i.kt)("inlineCode",{parentName:"strong"},"setState")," whenever the state value depends on its previous value:")," in the example below, some might expect the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," will increase 2 at a time, but it actually increases 1 because ",(0,i.kt)("inlineCode",{parentName:"li"},"setState")," is an asynchronous function, it will not be executed immediately but pulled to the event loop, and those two ",(0,i.kt)("inlineCode",{parentName:"li"},"setState")," functions will receive the same value ",(0,i.kt)("inlineCode",{parentName:"li"},"count = 0"),". To fix this, we need to use ",(0,i.kt)("inlineCode",{parentName:"li"},"setCount((prev) => prev + 1)"),", we make the output value depends on the previous value so no matter the order of execution of that two ",(0,i.kt)("inlineCode",{parentName:"li"},"setState"),", the value will be increased by 2 at a time.")),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"UseStateM4.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Mistake 4")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/components/UseStateM4.jsx"}),(0,i.kt)("h2",{id:"5-update-components-in-different-dom-tree-branches"},"5. Update components in different DOM tree branches"),(0,i.kt)("p",null,"State is often used within the body of a component and modify information about the component or its children, so, how can we sit in a component and modify the UI of other components that are in different scope?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"update different dom tree branches",src:n(8982).Z,width:"1060",height:"826"})),(0,i.kt)("h3",{id:"51-using-callback-functions"},"5.1. Using callback functions"),(0,i.kt)("p",null,"In this approach, we are using callback functions in the child component to update state of the parent component, we also pass the state value from the parent to another child component to update its UI."),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"ByCallback.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"By Callback")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/pages/ByCallback.jsx"}),(0,i.kt)("p",null,"In the code above, we define state in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," component and pass the functions used to update state to ",(0,i.kt)("inlineCode",{parentName:"p"},"RootLeftLeft"),", and pass the state value to ",(0,i.kt)("inlineCode",{parentName:"p"},"RootRightRight"),". Now, we can sit in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RootLeftLeft")," and modify the UI of ",(0,i.kt)("inlineCode",{parentName:"p"},"RootRightRight")," by updating the state in their common parent component."),(0,i.kt)("p",null,"Pros of this approach"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It does what we want, which is to update the UI of the component from other scopes."),(0,i.kt)("li",{parentName:"ul"},"Easy to use and pretty straightforward, use the React built-in hooks.")),(0,i.kt)("p",null,"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It will cause a lot of rerenders each time because the ",(0,i.kt)("inlineCode",{parentName:"li"},"Root")," component is being rerendered, and so do its children."),(0,i.kt)("li",{parentName:"ul"},"Ugly code when we have many duplicates and we also need to pass the props in the intermediate components in the way from ",(0,i.kt)("inlineCode",{parentName:"li"},"Root")," component to our target components.")),(0,i.kt)("h3",{id:"52-using-react-context"},"5.2. Using React context"),(0,i.kt)("p",null,"By using this approach, we can get rid of the ugly code problem in the first approach."),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"ByContext.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"By Context")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/pages/ByContext.jsx"}),(0,i.kt)("p",null,"We define the ",(0,i.kt)("inlineCode",{parentName:"p"},"CountContext")," context and provide it to our application part, we register the state value and the functions used to update state to the context, then, we use it directly in our target components, by using React ",(0,i.kt)("inlineCode",{parentName:"p"},"useContext")," hook."),(0,i.kt)("p",null,"Even we don't have the smelly code anymore, this approach still cannot solve the performance problem when all components of the tree are still being rerendered."),(0,i.kt)("h3",{id:"53-using-redux"},"5.3. Using Redux"),(0,i.kt)("p",null,"Redux is a powerful state management library that will help us avoid rerendering too many components."),(0,i.kt)("p",null,"Redux has a concept called a single source of truth when we maintain our whole application state in a single store."),(0,i.kt)("p",null,"The state is Redux is read-only as we cannot mutate directly, the only way to change state is to emit an action."),(0,i.kt)("p",null,"Changes will be made by pure functions, so reducers are the pure functions, their output will only depend on the inputs and will not cause any side effects."),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"ByRedux.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"By Redux")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/pages/ByRedux.jsx"}),(0,i.kt)("p",null,"In this example, we define ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," as our single source of truth, with a reducer to manage the count value and provide it within our application part. We create a slice and define functions to mutate the value in ",(0,i.kt)("inlineCode",{parentName:"p"},"store"),". Action creators can be extracted from the slice and then they will be used everywhere within the context that ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," is provided."),(0,i.kt)("p",null,"In this way, the only component that gets rerendered is ",(0,i.kt)("inlineCode",{parentName:"p"},"RootRightRight"),", when its props changed over time."),(0,i.kt)("h2",{id:"6-performance-considerations-when-interacting-with-state"},"6. Performance considerations when interacting with state"),(0,i.kt)("p",null,"There are some useful hooks/functions used to cache/memorize things related to state to avoid components from rerendering, which are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React.memo()")," for memorizing React components."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useMemo()")," for memorizing some values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useCallback()")," for memorizing some callback functions.")),(0,i.kt)("p",null,"I will apply theses to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#52-using-react-context"},"ByContext"))," example above."),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"Memo.jsx"),", tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Memo")),(0,i.kt)("iframe",{loading:"lazy",style:{width:"100%",height:900,outline:"1px solid #252525",border:0,borderRadius:8,marginBottom:16,zIndex:100},src:"https://codesandbox.io/s/state-management-24xt26?file=/src/pages/Memo.jsx"}),(0,i.kt)("p",null,"I use ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback")," to memorize the callback functions used to update state, and prevent them from being recreated every time the ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," component rerenders. Because the state value ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," changes over time so I will not cache that value."),(0,i.kt)("p",null,"I also use ",(0,i.kt)("inlineCode",{parentName:"p"},"React.memo()")," to memorize the ",(0,i.kt)("inlineCode",{parentName:"p"},"RootLeft")," component to prevent its rerendering when ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," component rerenders (can also apply to other static components in the code, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"RootRightLeft"),",...)."),(0,i.kt)("p",null,"Now, when we hit the increment/decrement buttons, we can see that event ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," component rerenders, ",(0,i.kt)("inlineCode",{parentName:"p"},"RootLeft")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RootLeftLeft")," will not be rerendered."),(0,i.kt)("p",null,"This is pretty much about state management in React. Hope you enjoy reading it. See you in the next blogs."),(0,i.kt)("h2",{id:"7-references"},"7. References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://legacy.reactjs.org/docs/reconciliation.html"},"Reconciliation")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/what-is-diffing-algorithm/"},"What is Diffing Algorithm ?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.webdevolution.com/blog/Javascript-Event-Loop-Explained"},"Javascript Event Loop Explained")))}d.isMDXComponent=!0},6611:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule_1-df25c7a615e994971fd9a05d75014c9c.PNG"},6256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule_2_1-6b717be9810a4c9194ab680838cb7c2e.PNG"},4976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule_2_2-daad790845daff3462d43fad72227140.PNG"},8401:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule_3_1-8930e323c940480642e243d14840dd87.PNG"},7262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule_3_2-1e44627cd3fea91062a9c8e255b576a6.PNG"},5686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule_4-31c6f9727e7d1c8672a9060005362eb3.PNG"},3372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/showcase-ac29687abe0f3231888087cc000cc874.PNG"},7862:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/state_change-c1929001d7e0813b2b6f28c4da758e46.PNG"},8982:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/update_different_dom_tree_branches-89aa911b833cef929d458aaedba35c75.PNG"},5610:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/virtual_dom-ca44f9a796fe927bbe7356568b56c583.PNG"}}]);