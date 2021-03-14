(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(91)),c=n(96),l=n(97),i={title:"Scene Controller"},s={unversionedId:"modules/manager/scene_controller",id:"modules/manager/scene_controller",isDocsHomePage:!1,title:"Scene Controller",description:"<Tabs",source:"@site/docs/modules/manager/scene_controller.md",slug:"/modules/manager/scene_controller",permalink:"/modules/manager/scene_controller",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/manager/scene_controller.md",version:"current",sidebar:"docs",previous:{title:"CBSL - Manager Framework",permalink:"/modules/manager/introduction"},next:{title:"Manager",permalink:"/modules/manager/manager"}},u=[],p={toc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"overview",mdxType:"TabItem"},Object(o.b)("p",null,"To get started with manager framework, the first thing you do is extend from either"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SceneController - uses synchronus bootstraping"),Object(o.b)("li",{parentName:"ul"},"AsyncSceneController - uses async bootstrapping (IEnumerator)")),Object(o.b)("p",null,"both these base classes are abstract with just one member ",Object(o.b)("inlineCode",{parentName:"p"},"Bootstrap()")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Script execution order for Scene Controller is ",Object(o.b)("inlineCode",{parentName:"p"},"-1200")))),Object(o.b)("p",null,"SceneController also has a ",Object(o.b)("inlineCode",{parentName:"p"},"PosBootstrap")," event which is fired when all managers have been initialized.")),Object(o.b)(l.a,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs."),Object(o.b)(l.a,{value:"example",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="SceneController"',title:'"SceneController"'},"public class TestSceneController : SceneController {\n\n    protected override void Bootstrap() {\n        TestManager.Initialize();\n    }\n\n}\n")),Object(o.b)("p",null,"Notice the ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerator")," in Bootstrap, in case of async"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="AsyncSceneController"',title:'"AsyncSceneController"'},"public class TestAsyncSceneController : AsyncSceneController {\n\n    protected override IEnumerator Bootstrap() {\n        TestManager.Initialize();\n\n        yield return null;\n    }\n\n}\n")))))}m.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},94:function(e,t,n){"use strict";var r=n(0),a=n(95);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},96:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(94),c=n(92),l=n(53),i=n.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(r.useState)(l),g=O[0],y=O[1],j=r.Children.toArray(e.children);if(null!=m){var h=f[m];null!=h&&h!==g&&p.some((function(e){return e.value===h}))&&y(h)}var w=function(e){y(e),null!=m&&v(m,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},97:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);