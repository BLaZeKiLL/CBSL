(self.webpackChunkcbsl=self.webpackChunkcbsl||[]).push([[922],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),o=n(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,r.useState)(u),y=b[0],h=b[1],k=r.Children.toArray(e.children),w=[];if(null!=p){var C=v[p];null!=C&&C!==y&&m.some((function(e){return e.value===C}))&&h(C)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=m[n].value;h(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,o,l,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,c=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=n(1395),i=n(8215),c={title:"Scene Controller"},s={unversionedId:"modules/manager/scene_controller",id:"modules/manager/scene_controller",isDocsHomePage:!1,title:"Scene Controller",description:"<Tabs",source:"@site/docs/modules/manager/scene_controller.md",sourceDirName:"modules/manager",slug:"/modules/manager/scene_controller",permalink:"/modules/manager/scene_controller",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/manager/scene_controller.md",version:"current",frontMatter:{title:"Scene Controller"},sidebar:"docs",previous:{title:"CBSL - Manager Framework",permalink:"/modules/manager/introduction"},next:{title:"Manager",permalink:"/modules/manager/manager"}},u=[],m={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"overview",mdxType:"TabItem"},(0,o.kt)("p",null,"To get started with manager framework, the first thing you do is extend from either"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SceneController - uses synchronus bootstraping"),(0,o.kt)("li",{parentName:"ul"},"AsyncSceneController - uses async bootstrapping (IEnumerator)")),(0,o.kt)("p",null,"both these base classes are abstract with just one member ",(0,o.kt)("inlineCode",{parentName:"p"},"Bootstrap()")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Script execution order for Scene Controller is ",(0,o.kt)("inlineCode",{parentName:"p"},"-1200")))),(0,o.kt)("p",null,"SceneController also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"PosBootstrap")," event which is fired when all managers have been initialized.")),(0,o.kt)(i.Z,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs."),(0,o.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="SceneController"',title:'"SceneController"'},"public class TestSceneController : SceneController {\n\n    protected override void Bootstrap() {\n        TestManager.Initialize();\n    }\n\n}\n")),(0,o.kt)("p",null,"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"IEnumerator")," in Bootstrap, in case of async"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="AsyncSceneController"',title:'"AsyncSceneController"'},"public class TestAsyncSceneController : AsyncSceneController {\n\n    protected override IEnumerator Bootstrap() {\n        TestManager.Initialize();\n\n        yield return null;\n    }\n\n}\n")))))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);