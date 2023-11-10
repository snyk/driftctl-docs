"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),g=n,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={id:"authentication",title:"Authentication"},i=void 0,c={unversionedId:"providers/google/authentication",id:"providers/google/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to your GCP project.",source:"@site/docs/providers/google/authentication.mdx",sourceDirName:"providers/google",slug:"/providers/google/authentication",permalink:"/next/providers/google/authentication",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/docs/providers/google/authentication.mdx",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/next/providers/github/resources"},next:{title:"Supported Resources",permalink:"/next/providers/google/resources"}},l={},s=[{value:"Least privileged policy",id:"least-privileged-policy",level:2},{value:"Required roles",id:"required-roles",level:3}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To use driftctl, we need credentials to make authenticated requests to your GCP project."),(0,n.kt)("admonition",{title:"service account",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Since driftctl use Cloud Asset API, using a service account is ",(0,n.kt)("strong",{parentName:"p"},"mandatory"),".")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/production"},"official documentation")," to setup a proper service account."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ GOOGLE_APPLICATION_CREDENTIALS=your-creds.json\\\n  CLOUDSDK_CORE_PROJECT=my-project\\\n  driftctl scan --to gcp+tf\n")),(0,n.kt)("p",null,"You can use any env var from ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/properties#setting_properties_via_environment_variables"},"google cloud sdk environment variable"),"."),(0,n.kt)("h2",{id:"least-privileged-policy"},"Least privileged policy"),(0,n.kt)("p",null,"driftctl uses ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/api/cloudasset.googleapis.com/overview"},"Google Asset API")," to enumerate efficiently resources on your account.\nIt also uses ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com"},"Cloud Resource Manager API")," to enumerate project IAM Resources.\nBe sure to have enabled these APIs for the GCP project you are using."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"enable_api",src:r(38575).Z,width:"642",height:"391"})),(0,n.kt)("p",null,"To be able to enumerate resources, you need at least the role ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-roles#cloud-asset-roles"},"Cloud Asset Viewer"),"."),(0,n.kt)("h3",{id:"required-roles"},"Required roles"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Mandatory role to allow driftctl to enumerate resources\nroles/cloudasset.viewer\n")))}p.isMDXComponent=!0},38575:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/enable_api-dffb8e57a0ce1c667527ede14b2728df.png"}}]);