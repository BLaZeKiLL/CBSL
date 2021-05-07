(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),a=(n(0),n(93)),i=n(98),c=n(99),l={title:"Logger"},u={unversionedId:"modules/logging/logger",id:"modules/logging/logger",isDocsHomePage:!1,title:"Logger",description:"<Tabs",source:"@site/docs/modules/logging/logger.md",slug:"/modules/logging/logger",permalink:"/modules/logging/logger",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/logging/logger.md",version:"current",sidebar:"docs",previous:{title:"CBSL - Logging",permalink:"/modules/logging/introduction"},next:{title:"CBSL - Manager Framework",permalink:"/modules/manager/introduction"}},s=[],p={toc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"overview",mdxType:"TabItem"},Object(a.b)("p",null,"CBSL logger is a wrapper around the unity logger and exposes all of it's api"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-csharp"},'Logger.Info<CallingClass>("My Log Message");\n')),Object(a.b)("p",null,"the logger takes a generic parameter which is used to compute and unique colored tag"),Object(a.b)("p",null,"optionally you can call ",Object(a.b)("inlineCode",{parentName:"p"},"GetTag(color);")," to create a tag with custom color and pass it while logging")),Object(a.b)(c.a,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs.")))}f.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,m=p["".concat(i,".").concat(g)]||p[g]||f[g]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},96:function(e,t,n){"use strict";var r=n(0),o=n(97);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},97:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},98:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(96),i=n(94),c=n(53),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,f=e.groupId,g=e.className,m=Object(a.a)(),d=m.tabGroupChoices,b=m.setTabGroupChoices,v=Object(r.useState)(c),y=v[0],O=v[1],j=r.Children.toArray(e.children);if(null!=f){var h=d[f];null!=h&&h!==y&&p.some((function(e){return e.value===h}))&&O(h)}var w=function(e){O(e),null!=f&&b(f,e)},C=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},g)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},99:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);