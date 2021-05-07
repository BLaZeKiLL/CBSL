(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(93)),c=n(98),i=n(99),s={title:"Node List"},l={unversionedId:"modules/core/collections/compressed_array/node_list",id:"modules/core/collections/compressed_array/node_list",isDocsHomePage:!1,title:"Node List",description:"<Tabs",source:"@site/docs/modules/core/collections/compressed_array/node_list.md",slug:"/modules/core/collections/compressed_array/node_list",permalink:"/modules/core/collections/compressed_array/node_list",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/core/collections/compressed_array/node_list.md",version:"current",sidebar:"docs",previous:{title:"Byte List",permalink:"/modules/core/collections/compressed_array/byte_list"},next:{title:"Object Pool",permalink:"/modules/core/collections/object_pool"}},u=[{value:"Layout",id:"layout",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Data Access",id:"data-access",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"overview",mdxType:"TabItem"},Object(o.b)("h2",{id:"layout"},"Layout"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uncompressed Array"',title:'"Uncompressed','Array"':!0},"[A,A,A,A,A,A,A,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C]\n")),Object(o.b)("p",null,"would be compressed to"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="CompressedNodeList"',title:'"CompressedNodeList"'},"[{A, 7},{B, 4},{C, 11}]\n")),Object(o.b)("p",null,"Internally a node struct is used"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Node"',title:'"Node"'},"public readonly struct Node {\n\n    public int Count { get; }\n    public T Object { get; }\n\n    public Node(int count, T obj) {\n        Count = count;\n        Object = obj;\n    }\n\n}\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"CompressedNodeList has 2 constructors :-"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public CompressedArray(T[] data) { }\n\npublic CompressedArray(List<Node> data, int originalLength) { }\n")),Object(o.b)("p",null,"allowing you to create the array from both compressed and uncompressed data"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"data-access"},"Data Access"),Object(o.b)("p",null,"If individual elements need to be accessed it is recomended to do this while array is in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Decompressed"))," state, in that case complexity for ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"GetAt()"))," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"SetAt()"))," is ",Object(o.b)("inlineCode",{parentName:"p"},"O(1)")),Object(o.b)("p",null,"Complexity of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"GetAt()"))," in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Compressed"))," state is ",Object(o.b)("inlineCode",{parentName:"p"},"O(logn)"),", internally binary search is used."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"SetAt()"))," in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Compressed"))," state is not implemented yet and will throw an exception if executed.")))),Object(o.b)(i.a,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs.")))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},96:function(e,t,n){"use strict";var r=n(0),a=n(97);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},97:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},98:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(96),c=n(94),i=n(53),s=n.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,v=Object(r.useState)(i),j=v[0],y=v[1],g=r.Children.toArray(e.children);if(null!=b){var h=f[b];null!=h&&h!==j&&p.some((function(e){return e.value===h}))&&y(h)}var N=function(e){y(e),null!=b&&O(b,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},99:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);