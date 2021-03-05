(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(88)),i={title:"Installation"},c={unversionedId:"getting_started/installation",id:"getting_started/installation",isDocsHomePage:!1,title:"Installation",description:"There are multiple ways to install CBSL :-",source:"@site/docs/getting_started/installation.md",slug:"/getting_started/installation",permalink:"/getting_started/installation",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/getting_started/installation.md",version:"current",sidebar:"docs",previous:{title:"CBSL - CodeBlaze Standard Library",permalink:"/"},next:{title:"Configuration",permalink:"/getting_started/configuration"}},l=[{value:"OpenUPM CLI",id:"openupm-cli",children:[]},{value:"Unity Package Manager",id:"unity-package-manager",children:[]},{value:"Editing Manifest.json",id:"editing-manifestjson",children:[]},{value:"Add Package via Github URL",id:"add-package-via-github-url",children:[]},{value:"Add as Source",id:"add-as-source",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are multiple ways to install CBSL :-"),Object(o.b)("h3",{id:"openupm-cli"},"OpenUPM CLI"),Object(o.b)("p",null,"Simplest and the ",Object(o.b)("strong",{parentName:"p"},"recommended")," way, just run the following command in the root of your project."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"openupm add io.codeblaze.cbsl\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you don't have OpenUPM-CLI head over ",Object(o.b)("a",{parentName:"p",href:"https://openupm.com/docs/getting-started.html"},"here"),"."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"OpenUPM works on top of unity package manager and does everything for you,\nthat you would have to do manually if you are directly using the package manager.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"unity-package-manager"},"Unity Package Manager"),Object(o.b)("p",null,"Head over to the package manager settings of your project, under project settings :-"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a new scoped registry, name is anything you want (e.g OpenUPM)"),Object(o.b)("li",{parentName:"ul"},"Set the URL as ",Object(o.b)("inlineCode",{parentName:"li"},"https://package.openupm.com")),Object(o.b)("li",{parentName:"ul"},"Add the following to scopes array ",Object(o.b)("inlineCode",{parentName:"li"},"io.codeblaze.cbsl"))),Object(o.b)("p",null,"After this you should see a MyRegistries option in the package manager window dropdown\nand the CBSL should be listed you can go right ahead and install it\nfor more info head over ",Object(o.b)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/upm-ui-install.html"},"here"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"editing-manifestjson"},"Editing Manifest.json"),Object(o.b)("p",null,"The above 2 methods will in the end modify the ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.json")," inside your projects packages folder,\nwhich can be done manually just add the following to you manifest.json."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"{4,12}","{4,12}":!0},'{\n  "dependencies": {\n    // ...\n    "io.codeblaze.cbsl": "<CBSL VERSION>",\n    // ...\n  },\n    "scopedRegistries": [\n    {\n      "name": "Open UPM",\n      "url": "https://package.openupm.com",\n      "scopes": [\n        "io.codeblaze.cbsl"\n      ]\n    }\n  ]\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"latest version of CBSL is : ",Object(o.b)("a",{parentName:"p",href:"https://openupm.com/packages/io.codeblaze.cbsl/"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/io.codeblaze.cbsl?label=openupm&registry_uri=https://package.openupm.com",alt:"openupm"}))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"add-package-via-github-url"},"Add Package via Github URL"),Object(o.b)("p",null,"All the above methods will install CBSL using the version tags published to OpenUPM."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"tough not recommended")),", you can also directly install CBSL from github url for more info head over ",Object(o.b)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/upm-ui-giturl.html"},"here"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"add-as-source"},"Add as Source"),Object(o.b)("p",null,"Finally you could always download the source code as zip file from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/BLaZeKiLL/CBSL/releases"},"release page")," and add it directly to your assets."))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);