(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(93)),s=n(98),c=n(99),i={title:"Byte List"},l={unversionedId:"modules/core/collections/compressed_array/byte_list",id:"modules/core/collections/compressed_array/byte_list",isDocsHomePage:!1,title:"Byte List",description:"<Tabs",source:"@site/docs/modules/core/collections/compressed_array/byte_list.md",slug:"/modules/core/collections/compressed_array/byte_list",permalink:"/modules/core/collections/compressed_array/byte_list",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/core/collections/compressed_array/byte_list.md",version:"current",sidebar:"docs",previous:{title:"Compressed Array",permalink:"/modules/core/collections/compressed_array/introduction"},next:{title:"Node List",permalink:"/modules/core/collections/compressed_array/node_list"}},b=[{value:"Layout",id:"layout",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Data Access",id:"data-access",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"overview",mdxType:"TabItem"},Object(o.b)("h2",{id:"layout"},"Layout"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uncompressed Array"',title:'"Uncompressed','Array"':!0},"[A,A,A,A,A,A,A,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C]\n")),Object(o.b)("p",null,"would be compressed to"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="CompressedByteList"',title:'"CompressedByteList"'},"[<A as bytes>,<7 as bytes>,<B as bytes>,<4 as bytes>,<C as bytes>,<11 as bytes>]\n")),Object(o.b)("p",null,"you need to specify how to convert you objects to and from bytes"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"CompressedByteList has 2 constructors :-"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public CompressedArray(T[] data, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }\n\npublic CompressedArray(List<byte> bytes, int originalLength, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }\n")),Object(o.b)("p",null,"allowing you to create the array from both compressed and uncompressed data"),Object(o.b)("p",null,"you need to provide implementation on how to serialize and deserialize you type to and from bytes\nthese are provided as func's"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Compressed Array of int\'s"',title:'"Compressed',Array:!0,of:!0,"int's\"":!0},"var array = new CompressedArray<int>(data, sizeof(int), bytes => BitConverter.ToInt32(bytes, 0), BitConverter.GetBytes);\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Serialization")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In compressed format data is stored as list of bytes making it easy to read and write to disk"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"data-access"},"Data Access"),Object(o.b)("p",null,"If individual elements need to be accessed it is recomended to do this while array is in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Decompressed"))," state, in that case complexity for ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"GetAt()"))," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"SetAt()"))," is ",Object(o.b)("inlineCode",{parentName:"p"},"O(1)")),Object(o.b)("p",null,"Complexity of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"GetAt()"))," in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Compressed"))," state is ",Object(o.b)("inlineCode",{parentName:"p"},"O(logn)"),", internally binary search is used."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"SetAt()"))," in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Compressed"))," state is not implemented yet and will throw an exception if executed.")))),Object(o.b)(c.a,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs.")))}p.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},96:function(e,t,n){"use strict";var a=n(0),r=n(97);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},97:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},98:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(96),s=n(94),c=n(53),i=n.n(c),l=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),y=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(c),O=v[0],j=v[1],g=a.Children.toArray(e.children);if(null!=p){var h=y[p];null!=h&&h!==O&&u.some((function(e){return e.value===h}))&&j(h)}var N=function(e){j(e),null!=p&&f(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},99:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);