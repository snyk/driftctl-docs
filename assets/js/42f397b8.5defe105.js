"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19755],{26208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=t(85893),r=t(11151);const a={id:"gitlabci",title:"GitlabCI"},s=void 0,c={id:"ci_cd/guides/gitlabci",title:"GitlabCI",description:"You can integrate driftctl in GitlabCI by taking as example this repository.",source:"@site/versioned_docs/version-0.16.0/ci_cd/guides/gitlabci.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/gitlabci",permalink:"/0.16.0/ci_cd/guides/gitlabci",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.16.0/ci_cd/guides/gitlabci.mdx",tags:[],version:"0.16.0",frontMatter:{id:"gitlabci",title:"GitlabCI"},sidebar:"docs",previous:{title:"GitHub Action",permalink:"/0.16.0/ci_cd/guides/ghaction"},next:{title:"Jenkins",permalink:"/0.16.0/ci_cd/guides/jenkins"}},l={},o=[{value:"Full example",id:"full-example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You can integrate driftctl in GitlabCI by taking as example this ",(0,i.jsx)(n.a,{href:"https://gitlab.com/cloudskiff/driftctl-ci-example",children:"repository"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can integrate driftctl within your GitOps workflow to get something like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"success",src:t(90283).Z+"",width:"931",height:"279"})}),"\n",(0,i.jsx)(n.p,{children:"In this kind of workflow if a new drift happens it will block your pipeline execution:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"failure",src:t(60074).Z+"",width:"981",height:"303"})}),"\n",(0,i.jsx)(n.p,{children:"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a driftctl run every hour"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"schedule",src:t(9060).Z+"",width:"1106",height:"741"})}),"\n",(0,i.jsx)(n.h2,{id:"full-example",children:"Full example"}),"\n",(0,i.jsx)(n.p,{children:"Below you can find a full GitlabCI example with a complete GitOps workflow example and a scheduled run of driftctl."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'stages:\n  - init\n  - validate\n  - plan\n  - deploy\n\n.driftctl:\n  image:\n    name: snyk/driftctl\n    entrypoint: [""]\n  script:\n    - driftctl scan\n\n# ====================\n# Scheduled driftctl run\n# ====================\n# Scheduled driftctl run\ndriftctl:scheduled:\n  extends: .driftctl\n  only:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\n# ====================\n# Classic GitOps workflow\n# ====================\n\n# Used to share .terraform cached providers in terraform jobs\n.tfcache: &tfcache\n  cache:\n    key: ${CI_PIPELINE_ID}\n    paths:\n      - .terraform\n\n# Terraform image to use for every terraform jobs\n.terraform: &terraform\n  image:\n    name: hashicorp/terraform:0.14.4\n    entrypoint: [""]\n\nterraform/init:\n  <<: *terraform\n  <<: *tfcache\n  stage: init\n  except:\n    - schedules\n  script:\n    - terraform init\n\ndriftctl:\n  extends: .driftctl\n  except:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\nterraform/fmt:\n  <<: *terraform\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform fmt -check -diff\n\nterraform/validate:\n  <<: *terraform\n  <<: *tfcache\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform validate\n\nterraform/plan:\n  <<: *terraform\n  <<: *tfcache\n  stage: plan\n  except:\n    - schedules\n  artifacts:\n    name: plan\n    expire_in: 1 day\n    paths:\n      - "plan.out"\n  script:\n    - terraform plan -out=plan.out\n\nterraform/apply:\n  <<: *terraform\n  <<: *tfcache\n  stage: deploy\n  when: manual\n  dependencies:\n    - terraform/plan\n  except:\n    - schedules\n  script:\n    - terraform apply plan.out\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},60074:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/failure-a4ca4f35cf518566b1c6280998a321e4.png"},9060:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/schedule-638af56b6a9427cae93b13493b558e5d.png"},90283:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/success-739403b2ff1c76505754d68b5cf4f3c3.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);