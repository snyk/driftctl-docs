"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7781],{19013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=r(85893),n=r(11151);const o={id:"authentication",title:"Authentication"},s=void 0,a={id:"providers/github/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from environment variables.",source:"@site/versioned_docs/version-0.31.0/providers/github/authentication.mdx",sourceDirName:"providers/github",slug:"/providers/github/authentication",permalink:"/0.31.0/providers/github/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.31.0/providers/github/authentication.mdx",tags:[],version:"0.31.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/0.31.0/providers/aws/resources"},next:{title:"Supported Resources",permalink:"/0.31.0/providers/github/resources"}},c={},d=[{value:"Least privileged policy",id:"least-privileged-policy",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from ",(0,i.jsx)(t.a,{href:"https://registry.terraform.io/providers/integrations/github/latest/docs#argument-reference",children:"environment variables"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"$ GITHUB_TOKEN=14758f1afd44c09b7992073ccf00b43d\\\n  GITHUB_ORGANIZATION=my-org\\\n  driftctl scan --to github+tf\n"})}),"\n",(0,i.jsx)(t.h2,{id:"least-privileged-policy",children:"Least privileged policy"}),"\n",(0,i.jsx)(t.p,{children:"Below you can find the minimal scope required for driftctl to be able to scan every GitHub supported resources."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# Required to enumerate private repos\nrepo\n\n# Required to list your organization teams\n# and other organization related resources\nread:org\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"repository permissions",type:"info",children:(0,i.jsxs)(t.p,{children:["Beware that if you don't set permission ",(0,i.jsx)(t.code,{children:"repo"})," for your token, you won't see any errors for repositories listing.\n",(0,i.jsx)(t.strong,{children:"Thus, all private repositories will appear as deleted from remote."})]})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var i=r(67294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);