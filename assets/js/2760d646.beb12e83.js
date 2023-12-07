"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32725],{7661:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=n(85893),i=n(11151);const c={id:"jenkins",title:"Jenkins"},a=void 0,l={id:"ci_cd/guides/jenkins",title:"Jenkins",description:"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:",source:"@site/versioned_docs/version-0.18.0/ci_cd/guides/jenkins.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/jenkins",permalink:"/0.18.0/ci_cd/guides/jenkins",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.18.0/ci_cd/guides/jenkins.mdx",tags:[],version:"0.18.0",frontMatter:{id:"jenkins",title:"Jenkins"},sidebar:"docs",previous:{title:"GitlabCI",permalink:"/0.18.0/ci_cd/guides/gitlabci"}},r={},o=[{value:"Full example",id:"full-example",level:2}];function d(t){const e={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"success",src:n(61117).Z+"",width:"569",height:"224"})}),"\n",(0,s.jsx)(e.p,{children:"In this kind of workflow if a new drift happens it will block your pipeline execution:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"failure",src:n(60357).Z+"",width:"569",height:"224"})}),"\n",(0,s.jsx)(e.p,{children:"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a scan every hour:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"schedule",src:n(28947).Z+"",width:"1440",height:"465"})}),"\n",(0,s.jsx)(e.h2,{id:"full-example",children:"Full example"}),"\n",(0,s.jsx)(e.p,{children:"Below you can find a full Jenkinsfile example with a complete GitOps workflow example and a driftctl scan."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'# ====================\n# Classic GitOps workflow\n# ====================\n\npipeline {\n\tagent any\n\tenvironment {\n\t\tAWS_DEFAULT_REGION="us-east-1"\n\t\tAWS_ACCESS_KEY_ID=credentials("AWS_ACCESS_KEY_ID")\n\t\tAWS_SECRET_ACCESS_KEY=credentials("AWS_SECRET_ACCESS_KEY")\n\t\tPATH="$PATH:$HOME/dctlenv/bin/"\n\t}\n\tstages {\n\t\tstage("Init") {\n\t\t\tsteps {\n\t\t\t\tsh "terraform init"\n\t\t\t}\n\t\t}\n\t\tstage(\'Validate\') {\n\t\t\tfailFast true\n\t\t\tparallel {\n\t\t\t\tstage("driftctl") {\n\t\t\t\t\tsteps {\n\t\t\t\t\t\tsh "which dctlenv || git clone https://github.com/wbeuil/dctlenv"\n\t\t\t\t\t\tsh "dctlenv use latest"\n\t\t\t\t\t\tsh "driftctl scan"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstage("terraform/fmt") {\n\t\t\t\t\tsteps {\n\t\t\t\t\t\tsh "terraform fmt -check -diff"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstage("terraform/validate") {\n\t\t\t\t\tsteps {\n\t\t\t\t\t\tsh "terraform validate"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tstage("Plan") {\n\t\t\tsteps {\n\t\t\t\tsh "terraform plan -out=plan.out"\n\t\t\t}\n\t\t}\n\t\tstage("Deploy") {\n\t\t\tsteps {\n\t\t\t\tsh "terraform apply -input=false plan.out"\n\t\t\t}\n\t\t}\n\t}\n}\n\n'})})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},60357:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/failure-3cbe363cd95499cebd8a1eca8fb980e9.png"},28947:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/schedule-0c1ac072299c4932da6dd92af271dae7.png"},61117:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/success-ffc266810e193ceadfc8d7608c31ee01.png"},11151:(t,e,n)=>{n.d(e,{Z:()=>l,a:()=>a});var s=n(67294);const i={},c=s.createContext(i);function a(t){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),s.createElement(c.Provider,{value:e},t.children)}}}]);