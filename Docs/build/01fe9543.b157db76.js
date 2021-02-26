(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(87)),c=n(93),i=n(94),s={title:"Batching"},u={unversionedId:"extensions/unitask/batching",id:"extensions/unitask/batching",isDocsHomePage:!1,title:"Batching",description:"<Tabs",source:"@site/docs/extensions/unitask/batching.md",slug:"/extensions/unitask/batching",permalink:"/extensions/unitask/batching",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/extensions/unitask/batching.md",version:"current",sidebar:"docs",previous:{title:"CBSL Extension - UniTask",permalink:"/extensions/unitask/introduction"}},l=[{value:"Batch Scheduler",id:"batch-scheduler",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"overview",mdxType:"TabItem"},Object(o.b)("p",null,"Uni Task provides an easy way to achive multi-threading using ",Object(o.b)("inlineCode",{parentName:"p"},"UniTask.RunOnThreadPool()"),"."),Object(o.b)("p",null,"CBSL extension for UniTask provides batching API to split tasks on multiple threads."),Object(o.b)("h2",{id:"batch-scheduler"},"Batch Scheduler"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"BatchScheduler.Process()")," takes in a ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable<I>")," Where ",Object(o.b)("inlineCode",{parentName:"p"},"I")," represents input data, then it divides the data into batches\nand processes each batch on seprate threads."),Object(o.b)("p",null,"The process method has 2 overloads :-"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public static async UniTaskVoid Process<I>(IEnumerable<I> input, int size, Action<I> process, Action<Batch<I>>? preProcess, Action<Batch<I>>? postProcess)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public static async UniTask<IEnumerable<O>> Process<I, O>(IEnumerable<I> input, int size, Func<I, O> process, Action<Batch<I>>? preProcess, Action<Batch<I>, O[]>? postProcess)\n")),Object(o.b)("p",null,"the difference between the two is in the ",Object(o.b)("em",{parentName:"p"},"for each process"),", one takes a ",Object(o.b)("inlineCode",{parentName:"p"},"Func<I, O>")," and one takes an ",Object(o.b)("inlineCode",{parentName:"p"},"Action<I>"),".\nUse the Func overload if you want your tasks to return something, the result is also an array corresponding to each input."),Object(o.b)("p",null,"PreProcess & PostProcess callbacks are run on main thread for each batch and can be null.")),Object(o.b)(i.a,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs."),Object(o.b)(i.a,{value:"example",mdxType:"TabItem"})))}b.isMDXComponent=!0},86:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var r=n(0),a=n(90);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},90:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},93:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(89),c=n(86),i=n(53),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(o.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,v=Object(r.useState)(i),O=v[0],y=v[1],j=r.Children.toArray(e.children);if(null!=b){var g=m[b];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&y(g)}var k=function(e){y(e),null!=b&&h(b,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},94:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);