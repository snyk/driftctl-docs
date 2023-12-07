"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8566],{87267:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(85893),a=n(11151);const r={id:"usage",title:"Usage"},o=void 0,i={id:"usage",title:"Usage",description:"Be sure to have configured your AWS credentials.",source:"@site/versioned_docs/version-0.38.0/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/0.38.0/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.38.0/usage.mdx",tags:[],version:"0.38.0",frontMatter:{id:"usage",title:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/0.38.0/installation"},next:{title:"Limitations",permalink:"/0.38.0/limitations"}},c={},l=[];function d(t){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Be sure to have ",(0,s.jsx)(e.a,{href:"/0.38.0/providers/aws/authentication",children:"configured"})," your AWS credentials."]}),"\n",(0,s.jsxs)(e.p,{children:["You will need to assign ",(0,s.jsx)(e.a,{href:"/0.38.0/providers/aws/authentication#least-privileged-policy",children:"proper permissions"})," to allow driftctl to scan your account."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# With a local state\n$ driftctl scan\n# Same as\n$ driftctl scan --from tfstate://terraform.tfstate\n\n# To specify AWS credentials\n$ AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX driftctl scan\n# or using a named profile\n$ AWS_PROFILE=profile_name driftctl scan\n\n# With state stored on a s3 backend\n$ driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using glob pattern\n$ driftctl scan --from tfstate://path/to/**/*.tfstate\n$ driftctl scan --from tfstate+s3://path/to/**/*.tfstate\n"})})]})}function f(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);