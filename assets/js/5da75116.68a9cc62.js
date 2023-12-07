"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6133],{32353:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=t(85893),s=t(11151);const n={id:"authentication",title:"Authentication"},i=void 0,c={id:"providers/google/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to your GCP project.",source:"@site/versioned_docs/version-0.16.0/providers/google/authentication.mdx",sourceDirName:"providers/google",slug:"/providers/google/authentication",permalink:"/0.16.0/providers/google/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.16.0/providers/google/authentication.mdx",tags:[],version:"0.16.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/0.16.0/providers/github/resources"},next:{title:"Supported Resources",permalink:"/0.16.0/providers/google/resources"}},l={},d=[{value:"Least privileged policy",id:"least-privileged-policy",level:2},{value:"Required roles",id:"required-roles",level:3}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"To use driftctl, we need credentials to make authenticated requests to your GCP project."}),"\n",(0,r.jsx)(o.admonition,{title:"service account",type:"info",children:(0,r.jsxs)(o.p,{children:["Since driftctl use Cloud Asset API, using a service account is ",(0,r.jsx)(o.strong,{children:"mandatory"}),"."]})}),"\n",(0,r.jsxs)(o.p,{children:["Please refer to ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication/production",children:"official documentation"})," to setup a proper service account."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"$ GOOGLE_APPLICATION_CREDENTIALS=your-creds.json\\\n  CLOUDSDK_CORE_PROJECT=my-project\\\n  driftctl scan --to gcp+tf\n"})}),"\n",(0,r.jsxs)(o.p,{children:["You can use any env var from ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/sdk/docs/properties#setting_properties_via_environment_variables",children:"google cloud sdk environment variable"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"least-privileged-policy",children:"Least privileged policy"}),"\n",(0,r.jsxs)(o.p,{children:["driftctl uses ",(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/apis/api/cloudasset.googleapis.com/overview",children:"Google Asset API"})," to enumerate efficiently resources on your account.\nIt also uses ",(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com",children:"Cloud Resource Manager API"})," to enumerate project IAM Resources.\nBe sure to have enabled these APIs for the GCP project you are using."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"enable_api",src:t(12165).Z+"",width:"642",height:"391"})}),"\n",(0,r.jsxs)(o.p,{children:["To be able to enumerate resources, you need at least the role ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/understanding-roles#cloud-asset-roles",children:"Cloud Asset Viewer"}),"."]}),"\n",(0,r.jsx)(o.admonition,{title:"deep mode",type:"info",children:(0,r.jsxs)(o.p,{children:["If you want to use driftctl with deep mode, driftctl will also need to retrieve resource's details and the ",(0,r.jsx)(o.strong,{children:"Cloud Asset Viewer"})," will not be enough.\nIf you want to be able to get the details you should set up the basic role ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/understanding-roles#basic-definitions",children:"Viewer"})," on your project.\nTo read your IAM policies you will also need role ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/understanding-roles#iam-roles",children:"iam.securityReviewer"})," on your project."]})}),"\n",(0,r.jsx)(o.h3,{id:"required-roles",children:"Required roles"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"# Mandatory role to allow driftctl to enumerate resources\nroles/cloudasset.viewer\n\n# Required for deep mode only\nroles/viewer\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},12165:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/enable_api-dffb8e57a0ce1c667527ede14b2728df.png"},11151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>i});var r=t(67294);const s={},n=r.createContext(s);function i(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);