"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90681],{11974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(74848),o=n(28453);const s={id:"authentication",title:"Authentication"},i=void 0,a={id:"providers/azure/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to your Azure account.",source:"@site/versioned_docs/version-0.34.0/providers/azure/authentication.mdx",sourceDirName:"providers/azure",slug:"/providers/azure/authentication",permalink:"/0.34.0/providers/azure/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.34.0/providers/azure/authentication.mdx",tags:[],version:"0.34.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/0.34.0/providers/google/resources"},next:{title:"Supported Resources",permalink:"/0.34.0/providers/azure/resources"}},c={},u=[{value:"Least privileged policy",id:"least-privileged-policy",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To use driftctl, we need credentials to make authenticated requests to your Azure account.\nWe retrieve configuration from ",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/developer/go/azure-sdk-authorization#use-environment-based-authentication",children:"environment variables"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can check the ",(0,r.jsx)(t.a,{href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure",children:"Terraform documentation"})," for a guide to configure Azure authentication."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# Here we use a service principal account with a client secret\n$ AZURE_SUBSCRIPTION_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_TENANT_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_CLIENT_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_CLIENT_SECRET=password\\\n  driftctl scan --to azure+tf\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can also authenticate using ",(0,r.jsx)(t.strong,{children:"az CLI"}),". In that case you will only have ",(0,r.jsx)(t.code,{children:"AZURE_SUBSCRIPTION_ID"})," to specify:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ AZURE_SUBSCRIPTION_ID=00000000-0000-0000-0000-000000000000\\\n  driftctl scan --to azure+tf\n"})}),"\n",(0,r.jsx)(t.h2,{id:"least-privileged-policy",children:"Least privileged policy"}),"\n",(0,r.jsxs)(t.p,{children:["driftctl needs to have read only access to your account, if you want to scan your whole Azure account you can set up the ",(0,r.jsx)(t.strong,{children:"Reader"})," role on your subscription."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"auth",src:n(1726).A+"",width:"1214",height:"604"})}),"\n",(0,r.jsxs)(t.p,{children:["You may want to scan only a resource group, you can assign ",(0,r.jsx)(t.strong,{children:"Reader"})," role only on some restricted resources groups too."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1726:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/auth-d38df6fe7a4318ec9ebf82d0e5f9edae.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);