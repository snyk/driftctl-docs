"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7752],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60960:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={id:"authentication",title:"Authentication"},c=void 0,u={unversionedId:"providers/github/authentication",id:"version-0.18.0/providers/github/authentication",isDocsHomePage:!1,title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from environment variables.",source:"@site/versioned_docs/version-0.18.0/providers/github/authentication.mdx",sourceDirName:"providers/github",slug:"/providers/github/authentication",permalink:"/0.18.0/providers/github/authentication",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.18.0/providers/github/authentication.mdx",tags:[],version:"0.18.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"version-0.18.0/docs",previous:{title:"Supported Resources",permalink:"/0.18.0/providers/aws/resources"},next:{title:"Supported Resources",permalink:"/0.18.0/providers/github/resources"}},p=[{value:"Least privileged policy",id:"least-privileged-policy",children:[],level:2}],l={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/integrations/github/latest/docs#argument-reference"},"environment variables"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ GITHUB_TOKEN=14758f1afd44c09b7992073ccf00b43d\\\n  GITHUB_ORGANIZATION=my-org\\\n  driftctl scan --to github+tf\n")),(0,o.kt)("h2",{id:"least-privileged-policy"},"Least privileged policy"),(0,o.kt)("p",null,"Below you can find the minimal scope required for driftctl to be able to scan every GitHub supported resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Required to enumerate private repos\nrepo\n\n# Required to list your organization teams\n# and other organization related resources\nread:org\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"repository permissions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Beware that if you don't set permission ",(0,o.kt)("inlineCode",{parentName:"p"},"repo")," for your token, you won't see any errors for repositories listing.\n",(0,o.kt)("strong",{parentName:"p"},"Thus, all private repositories will appear as deleted from remote.")))))}d.isMDXComponent=!0}}]);