(self.webpackChunkcbsl=self.webpackChunkcbsl||[]).push([[836],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(944),o=r(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,l=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),y=f.tabGroupChoices,g=f.setTabGroupChoices,v=(0,n.useState)(u),b=v[0],k=v[1],h=n.Children.toArray(e.children),N=[];if(null!=d){var C=y[d];null!=C&&C!==b&&p.some((function(e){return e.value===C}))&&k(C)}var w=function(e){var t=e.currentTarget,r=N.indexOf(t),n=p[r].value;k(n),null!=d&&(g(d,n),setTimeout((function(){var e,r,n,a,o,s,c,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,s=window,c=s.innerHeight,l=s.innerWidth,r>=0&&o<=l&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case l:var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case c:var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:w,onClick:w},r)}))),t?(0,n.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8832:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),s=r(1395),i=r(8215),c={title:"Node Array"},l={unversionedId:"modules/core/collections/compressed_array/node_array",id:"modules/core/collections/compressed_array/node_array",isDocsHomePage:!1,title:"Node Array",description:"<Tabs",source:"@site/docs/modules/core/collections/compressed_array/node_array.md",sourceDirName:"modules/core/collections/compressed_array",slug:"/modules/core/collections/compressed_array/node_array",permalink:"/modules/core/collections/compressed_array/node_array",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/core/collections/compressed_array/node_array.md",version:"current",frontMatter:{title:"Node Array"},sidebar:"docs",previous:{title:"Byte Array",permalink:"/modules/core/collections/compressed_array/byte_array"},next:{title:"Object Pool",permalink:"/modules/core/collections/object_pool"}},u=[{value:"Layout",id:"layout",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Data Access",id:"data-access",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"overview",mdxType:"TabItem"},(0,o.kt)("h2",{id:"layout"},"Layout"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uncompressed Array"',title:'"Uncompressed','Array"':!0},"[A,A,A,A,A,A,A,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C]\n")),(0,o.kt)("p",null,"would be compressed to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="CompressedNodeList"',title:'"CompressedNodeList"'},"[{A, 7},{B, 4},{C, 11}]\n")),(0,o.kt)("p",null,"Internally a node struct is used"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Node"',title:'"Node"'},"public readonly struct Node {\n\n    public int Count { get; }\n    public T Object { get; }\n\n    public Node(int count, T obj) {\n        Count = count;\n        Object = obj;\n    }\n\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"CompressedNodeList has 2 constructors :-"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public CompressedArray(T[] data) { }\n\npublic CompressedArray(List<Node> data, int size) { }\n\npublic CompressedArray(int size) { }\n")),(0,o.kt)("p",null,"allowing you to create the array from both compressed and uncompressed data"),(0,o.kt)("p",null,"using the third constructor you can create an empty compressed array and fill it using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Add()"))," method\nin essence creating a comppressed array directly without calling the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Compress()"))," method"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"data-access"},"Data Access"),(0,o.kt)("p",null,"If individual elements need to be accessed it is recomended to do this while array is in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Decompressed"))," state, in that case complexity for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"GetAt()"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"SetAt()"))," is ",(0,o.kt)("inlineCode",{parentName:"p"},"O(1)")),(0,o.kt)("p",null,"Complexity of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"GetAt()"))," in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Compressed"))," state is ",(0,o.kt)("inlineCode",{parentName:"p"},"O(logn)"),", internally binary search is used."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"SetAt()"))," in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Compressed"))," state is not implemented yet and will throw an exception if executed."))),(0,o.kt)("p",null,"You can get the length of compressed data using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"CompressedLength")))),(0,o.kt)(i.Z,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs.")))}d.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);