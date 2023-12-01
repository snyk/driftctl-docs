"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=l,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={id:"log-level",title:"Log level"},o=void 0,i={unversionedId:"usage/log-level",id:"version-0.40.0/usage/log-level",title:"Log level",description:"By default driftctl logger only displays warning and error messages. You can set LOG_LEVEL environment variable to change the default level.",source:"@site/versioned_docs/version-0.40.0/usage/log-level.mdx",sourceDirName:"usage",slug:"/usage/log-level",permalink:"/0.40.0/usage/log-level",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.40.0/usage/log-level.mdx",tags:[],version:"0.40.0",frontMatter:{id:"log-level",title:"Log level"},sidebar:"docs",previous:{title:"Filter Rules",permalink:"/0.40.0/usage/filtering/rules"},next:{title:"Authentication",permalink:"/0.40.0/providers/aws/authentication"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"By default driftctl logger only displays warning and error messages. You can set ",(0,l.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable to change the default level."),(0,l.kt)("p",null,"Valid values are : trace,debug,info,warn,error,fatal,panic."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"In trace level, terraform provider logs will be shown.")),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ LOG_LEVEL=debug driftctl scan\nDEBU[0000] New provider library created\nDEBU[0000] Found existing provider path=/home/driftctl/.driftctl/plugins/linux_amd64/terraform-provider-aws_v3.19.0_x5\nDEBU[0000] Starting gRPC client alias=us-east-1\nDEBU[0001] New gRPC client started alias=us-east-1\n...\n")))}p.isMDXComponent=!0}}]);