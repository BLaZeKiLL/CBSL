(self.webpackChunkcbsl=self.webpackChunkcbsl||[]).push([[262],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),s=a(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},g),{},{components:n})):r.createElement(f,l({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6558:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),l={title:"CBSL - Logging",sidebar_label:"Introduction"},u={unversionedId:"modules/logging/introduction",id:"modules/logging/introduction",isDocsHomePage:!1,title:"CBSL - Logging",description:"CBSL Logging isn't anything new it just a wrapper over unity logger",source:"@site/docs/modules/logging/introduction.md",sourceDirName:"modules/logging",slug:"/modules/logging/introduction",permalink:"/modules/logging/introduction",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/logging/introduction.md",version:"current",sidebar_label:"Introduction",frontMatter:{title:"CBSL - Logging",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Provider",permalink:"/modules/core/provider"},next:{title:"Logger",permalink:"/modules/logging/logger"}},c=[],a={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CBSL Logging isn't anything new it just a wrapper over ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/Debug-unityLogger.html"},"unity logger"),"\nand provides you with some pre-built log handlers"),(0,i.kt)("p",null,"Provided log handlers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File handler")))}g.isMDXComponent=!0}}]);