"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83497],{61568:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(85893),o=n(11151);const r={id:"intro",title:"Introduction"},s=void 0,c={id:"ci_cd/intro",title:"Introduction",description:"driftctl can be viewed as a drift monitoring tool, and thus, it needs to run continuously to detect new drifts.",source:"@site/versioned_docs/version-0.25.0/ci_cd/intro.mdx",sourceDirName:"ci_cd",slug:"/ci_cd/intro",permalink:"/0.25.0/ci_cd/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.25.0/ci_cd/intro.mdx",tags:[],version:"0.25.0",frontMatter:{id:"intro",title:"Introduction"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/0.25.0/providers/azure/resources"},next:{title:"CircleCI",permalink:"/0.25.0/ci_cd/guides/circleci"}},d={},l=[{value:"Scheduled run",id:"scheduled-run",level:2},{value:"GitOps workflow",id:"gitops-workflow",level:2}];function a(t){const e={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"driftctl can be viewed as a drift monitoring tool, and thus, it needs to run continuously to detect new drifts.\nWe have identified two main workflows:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"A scheduled execution of driftctl to actively monitor drifts as they happen"}),"\n",(0,i.jsx)(e.li,{children:"An integrated driftctl to secure GitOps workflow"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"scheduled-run",children:"Scheduled run"}),"\n",(0,i.jsx)(e.p,{children:'One of the biggest problem with drifts in an IaC managed infrastructure is to be able to know where do these drifts come from and from whom.\nIt can be someone that has updated a parameter and forgot to report it to IaC code, a script that has messed up something, etc ...\nAlthough driftctl cannot identify precisely the initiator, you can catch the "when" by scheduling regularly driftctl.\nSome CI/CD systems can allow you to run scheduled jobs, driftctl team strongly advises you to run driftctl regularly to identify your drifts ASAP.'}),"\n",(0,i.jsx)(e.h2,{id:"gitops-workflow",children:"GitOps workflow"}),"\n",(0,i.jsx)(e.p,{children:"driftctl can be integrated in your existing GitOps flow to secure terraform operations against uncontrolled drifts.\nYou can find below an example of a typical GitOps workflow with driftctl integrated."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"gitops_flow",src:n(56939).Z+"",width:"571",height:"863"})})]})}function u(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},56939:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/gitops_flow-5b65947feca098ed877f9103e336664a.svg"},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>s});var i=n(67294);const o={},r=i.createContext(o);function s(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);