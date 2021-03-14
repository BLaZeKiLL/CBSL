(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(54),a=n.n(o);t.a=function(e){return i.a.createElement("div",{className:a.a.container},i.a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",allowFullScreen:!0,src:e.src,className:a.a.frame,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}))}},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),o=(n(0),n(91)),a=n(96),l=n(97),c=n(100),s={title:"Provider"},u={unversionedId:"modules/core/provider",id:"modules/core/provider",isDocsHomePage:!1,title:"Provider",description:"<Tabs",source:"@site/docs/modules/core/provider.md",slug:"/modules/core/provider",permalink:"/modules/core/provider",editUrl:"https://github.com/BLaZeKiLL/CBSL/edit/master/Docs/docs/modules/core/provider.md",version:"current",sidebar:"docs",previous:{title:"Object Pool",permalink:"/modules/core/collections/object_pool"},next:{title:"CBSL - Logging",permalink:"/modules/logging/introduction"}},d=[{value:"Implementation",id:"implementation",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:d};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(a.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"API",value:"api"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"overview",mdxType:"TabItem"},Object(o.b)("p",null,"Provider base class allows you to create simple IOC containers. Ideally your provider should have\nvirtuals methods which return interface types that can be overriding in concrete providers (runtime provider & testing provider). Main goal of this pattern is to decouple dependencies and easy testing."),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Simple provider implementation"',title:'"Simple',provider:!0,'implementation"':!0},"public class SimpleProvider : Provider<SimpleProvider> {\n\n    public SimpleSettings Settings { get; set; }\n    \n    public virtual ISimpleComponent CreateComponent() => new SimpleComponent(Settings.Health);\n\n}\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Singletons")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Can be created by storing the objects in member variables"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"Providers need to be initialized once before use and this can be done by calling the initialize method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Provider Initialization"',title:'"Provider','Initialization"':!0},"Provider<SimpleProvider>.Initialize(new TestSimpleProvider(), provider => {\n    provider.Settings = _settings;\n});\n")),Object(o.b)("p",null,"Initialize has 2 overloads :-"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Initialize(provider, initializer)")," :-",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"provider - it's the concrete instance of your provider, usefull when you are overiding your provider\nand want to use differnt provider depending upon config"),Object(o.b)("li",{parentName:"ul"},"initializer - it's a callback that is called just after the provider is initialized, you can set      singleton member variables here for eager initialization"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Initialize(initializer)")," - same as above just that provider is created according to the generic type,\ncan't use different implementation's of provider in this case")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Objects can be requested in the following manner."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Provider usage"',title:'"Provider','usage"':!0},"var component = Provider<TestProvider>.Current.CreateComponent();\n"))),Object(o.b)(l.a,{value:"api",mdxType:"TabItem"},"working on a tool to auto-generate api docs."),Object(o.b)(l.a,{value:"example",mdxType:"TabItem"},Object(o.b)("p",null,"Provider pattern used in a voxel engine"),Object(o.b)(c.a,{src:"https://www.youtube.com/embed/I5pKr6fnne0",mdxType:"Video"}),Object(o.b)("h4",{id:"below-example-shows-how-a-provider-is-being-used-in-a-voxel-terrain-generation-system"},"Below example shows how a provider is being used in a voxel terrain generation system."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Voxel Provider"',title:'"Voxel','Provider"':!0},"public class VoxelProvider<B> : Provider<VoxelProvider<B>> where B : IBlock {\n\n    public VoxelSettings Settings { get; set; }\n\n    public virtual Chunk<B> CreateChunk(Vector3Int position) => new Chunk<B>(position);\n\n    public virtual ChunkStore<B> ChunkStore(INoiseProfile<B> noiseProfile) => new ChunkStore<B>(noiseProfile, Settings.Chunk);\n\n    public virtual IChunkData<B> ChunkData(B[] blocks) => null;\n    \n    public virtual INoiseProfile<B> NoiseProfile() => null;\n\n    public virtual ChunkBehaviourPool<B> ChunkPool(Transform transform) => new ChunkBehaviourPool<B>(transform);\n\n    public virtual IMeshBuilder<B> MeshBuilder() => new GreedyMeshBuilder<B>(Settings.Chunk.ChunkSize);\n    \n    public virtual MeshBuildCoordinator<B> MeshBuildCoordinator(ChunkBehaviourPool<B> chunkBehaviourPool) => new UniTaskMultiThreadedMeshBuildCoordinator<B>(chunkBehaviourPool, Settings.Schedular.BatchSize);\n\n}\n")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"this-base-class-is-extended-by-2-classes--"},"This base class is extended by 2 classes :-"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"ColoredVoxelProvider")," - used at runtime for colored voxel terrain generation system"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class ColoredVoxelProvider : VoxelProvider<ColoredBlock> {\n    \n    public override IMeshBuilder<ColoredBlock> MeshBuilder() => new ColoredGreedyMeshBuilder(Settings.Chunk.ChunkSize);\n\n    public override INoiseProfile<ColoredBlock> NoiseProfile() => new ColoredNoiseProfile2D(Settings.NoiseSettings as NoiseSettings2D, Settings.Chunk);\n\n    public override IChunkData<ColoredBlock> ChunkData(ColoredBlock[] blocks) {\n        var data = new ColoredChunkData(blocks, 4, Settings.Chunk.ChunkSize);\n        data.Compress();\n\n        return data;\n    }\n\n    public override MeshBuildCoordinator<ColoredBlock> MeshBuildCoordinator(ChunkBehaviourPool<ColoredBlock> chunkBehaviourPool) => new ColoredMeshBuildCoordinator(chunkBehaviourPool, Settings.Schedular.BatchSize);\n\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"TestVoxelProvider")," - used for testing of the voxel terrain generation system"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class TestVoxelProvider : VoxelProvider<TestBlock> {\n\n    public override INoiseProfile<TestBlock> NoiseProfile() => new TestNoiseProfile2D(Settings.NoiseSettings as NoiseSettings2D, Settings.Chunk);\n\n}\n")))),Object(o.b)("hr",null),Object(o.b)("h4",{id:"finally-the-provider-is-initialized-in-the-system"},"Finally the provider is initialized in the system."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"protected virtual VoxelProvider<B> Provider() => new VoxelProvider<B>();\n\nprivate void Awake() {\n    VoxelProvider<B>.Initialize(Provider(), provider => {\n        provider.Settings = _settings;\n    });\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Provider()")," method is overwritten depending upon config and the correct provider is initialized."))))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},94:function(e,t,n){"use strict";var r=n(0),i=n(95);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},96:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(94),a=n(92),l=n(53),c=n.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(r.useState)(l),g=f[0],O=f[1],j=r.Children.toArray(e.children);if(null!=p){var y=v[p];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&O(y)}var C=function(e){O(e),null!=p&&h(p,e)},P=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(a.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},97:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);