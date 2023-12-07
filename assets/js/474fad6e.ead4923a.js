"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68097],{18619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(85893),l=n(11151);const i={id:"log-level",title:"Log level"},o=void 0,a={id:"usage/log-level",title:"Log level",description:"By default driftctl logger only displays warning and error messages. You can set LOG_LEVEL environment variable to change the default level.",source:"@site/docs/usage/log-level.mdx",sourceDirName:"usage",slug:"/usage/log-level",permalink:"/next/usage/log-level",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/docs/usage/log-level.mdx",tags:[],version:"current",frontMatter:{id:"log-level",title:"Log level"},sidebar:"docs",previous:{title:"Filter Rules",permalink:"/next/usage/filtering/rules"},next:{title:"Authentication",permalink:"/next/providers/aws/authentication"}},s={},c=[];function d(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["By default driftctl logger only displays warning and error messages. You can set ",(0,r.jsx)(t.code,{children:"LOG_LEVEL"})," environment variable to change the default level."]}),"\n",(0,r.jsx)(t.p,{children:"Valid values are : trace,debug,info,warn,error,fatal,panic."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"In trace level, terraform provider logs will be shown."})}),"\n",(0,r.jsx)(t.p,{children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ LOG_LEVEL=debug driftctl scan\nDEBU[0000] New provider library created\nDEBU[0000] Found existing provider path=/home/driftctl/.driftctl/plugins/linux_amd64/terraform-provider-aws_v3.19.0_x5\nDEBU[0000] Starting gRPC client alias=us-east-1\nDEBU[0001] New gRPC client started alias=us-east-1\n...\n"})})]})}function u(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const l={},i=r.createContext(l);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);