"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29776],{82567:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(85893),n=o(11151);const s={id:"authentication",title:"Authentication"},i=void 0,c={id:"providers/google/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to your GCP project.",source:"@site/docs/providers/google/authentication.mdx",sourceDirName:"providers/google",slug:"/providers/google/authentication",permalink:"/next/providers/google/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/docs/providers/google/authentication.mdx",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/next/providers/github/resources"},next:{title:"Supported Resources",permalink:"/next/providers/google/resources"}},a={},l=[{value:"Least privileged policy",id:"least-privileged-policy",level:2},{value:"Required roles",id:"required-roles",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"To use driftctl, we need credentials to make authenticated requests to your GCP project."}),"\n",(0,r.jsx)(t.admonition,{title:"service account",type:"info",children:(0,r.jsxs)(t.p,{children:["Since driftctl use Cloud Asset API, using a service account is ",(0,r.jsx)(t.strong,{children:"mandatory"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["Please refer to ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/docs/authentication/production",children:"official documentation"})," to setup a proper service account."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ GOOGLE_APPLICATION_CREDENTIALS=your-creds.json\\\n  CLOUDSDK_CORE_PROJECT=my-project\\\n  driftctl scan --to gcp+tf\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can use any env var from ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/sdk/docs/properties#setting_properties_via_environment_variables",children:"google cloud sdk environment variable"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"least-privileged-policy",children:"Least privileged policy"}),"\n",(0,r.jsxs)(t.p,{children:["driftctl uses ",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/apis/api/cloudasset.googleapis.com/overview",children:"Google Asset API"})," to enumerate efficiently resources on your account.\nIt also uses ",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com",children:"Cloud Resource Manager API"})," to enumerate project IAM Resources.\nBe sure to have enabled these APIs for the GCP project you are using."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"enable_api",src:o(38575).Z+"",width:"642",height:"391"})}),"\n",(0,r.jsxs)(t.p,{children:["To be able to enumerate resources, you need at least the role ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/understanding-roles#cloud-asset-roles",children:"Cloud Asset Viewer"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"required-roles",children:"Required roles"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Mandatory role to allow driftctl to enumerate resources\nroles/cloudasset.viewer\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38575:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/enable_api-dffb8e57a0ce1c667527ede14b2728df.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>i});var r=o(67294);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);