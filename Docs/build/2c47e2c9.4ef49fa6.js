(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(54),c=a.n(o);t.a=function(e){return r.a.createElement("div",{className:c.a.container},r.a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",allowFullScreen:!0,src:e.src,className:c.a.frame,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}))}},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(91)),c=a(96),s=a(97),i=a(100),l={title:"Compressed Array"},m={unversionedId:"modules/core/collections/compressed_array",id:"modules/core/collections/compressed_array",isDocsHomePage:!1,title:"Compressed Array",description:"<Tabs",source:"@site/docs/modules/core/collections/compressed_array.md",slug:"/modules/core/collections/compressed_array",permalink:"/modules/core/collections/compressed_array",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/core/collections/compressed_array.md",version:"current",sidebar:"docs",previous:{title:"CBSL - Core",permalink:"/modules/core/introduction"},next:{title:"Object Pool",permalink:"/modules/core/collections/object_pool"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Data Access",id:"data-access",children:[]}],u={toc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"overview",mdxType:"TabItem"},Object(o.b)("p",null,"In cases where you have large arrays with the same elements repeating contineously, Compressed Array can be used to reduce memory ussage."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uncompressed Array"',title:'"Uncompressed','Array"':!0},"[A,A,A,A,A,A,A,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C]\n")),Object(o.b)("p",null,"can be compressed to"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Compressed Array"',title:'"Compressed','Array"':!0},"[A,7,B,4,C,11]\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Compressed Array has 2 constructors :-"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public CompressedArray(T[] data, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }\n\npublic CompressedArray(List<byte> bytes, int length, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }\n")),Object(o.b)("p",null,"allowing you to create the array from both compressed and uncompressed data"),Object(o.b)("p",null,"you need to provide implementation on how to serialize and deserialize you type to and from bytes\nthese are provided as func's"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Compressed Array of int\'s"',title:'"Compressed',Array:!0,of:!0,"int's\"":!0},"var array = new CompressedArray<int>(data, sizeof(int), bytes => BitConverter.ToInt32(bytes, 0), BitConverter.GetBytes);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Compress()")," & ",Object(o.b)("inlineCode",{parentName:"p"},"DeCompress()")," methods can be called on the array to change it's state anytime"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Serialization")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In compressed format data is stored as list of bytes making it easy to read and write to disk"))),Object(o.b)("h2",{id:"data-access"},"Data Access"),Object(o.b)("p",null,"If individual elements need to be accessed it is recomended to do this while array is in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Decompressed"))," state, in that case complexity for ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"GetAt()"))," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"SetAt()"))," is ",Object(o.b)("inlineCode",{parentName:"p"},"O(1)")),Object(o.b)("p",null,"Complexity of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"GetAt()"))," in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Compressed"))," state is ",Object(o.b)("inlineCode",{parentName:"p"},"O(logn)"),", internally binary search is used."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"SetAt()"))," in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Compressed"))," state is not implemented yet and will throw an exception if executed.")))),Object(o.b)(s.a,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs."),Object(o.b)(s.a,{value:"example",mdxType:"TabItem"},Object(o.b)("p",null,"Compressed array in action, part of a voxel engine"),Object(o.b)(i.a,{src:"https://www.youtube.com/embed/a4wjYq3jN4g",mdxType:"Video"}))))}b.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(a),b=n,d=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(d,s(s({ref:t},l),{},{components:a})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},94:function(e,t,a){"use strict";var n=a(0),r=a(95);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(94),c=a(92),s=a(53),i=a.n(s),l=37,m=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,u=e.groupId,b=e.className,d=Object(o.a)(),f=d.tabGroupChoices,y=d.setTabGroupChoices,v=Object(n.useState)(s),O=v[0],j=v[1],g=n.Children.toArray(e.children);if(null!=u){var h=f[u];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&j(h)}var N=function(e){j(e),null!=u&&y(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);