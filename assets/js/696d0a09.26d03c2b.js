"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99811],{83637:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=t(85893),r=t(11151);const s={id:"ghaction",title:"GitHub Action"},a=void 0,c={id:"ci_cd/guides/ghaction",title:"GitHub Action",description:"You can run a full driftctl scan in your GitHub Actions workflow by using the official action.",source:"@site/versioned_docs/version-0.38.0/ci_cd/guides/ghaction.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/ghaction",permalink:"/0.38.0/ci_cd/guides/ghaction",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.38.0/ci_cd/guides/ghaction.mdx",tags:[],version:"0.38.0",frontMatter:{id:"ghaction",title:"GitHub Action"},sidebar:"docs",previous:{title:"CircleCI",permalink:"/0.38.0/ci_cd/guides/circleci"},next:{title:"GitlabCI",permalink:"/0.38.0/ci_cd/guides/gitlabci"}},o={},u=[{value:"Scheduled example",id:"scheduled-example",level:2},{value:"GitOps example",id:"gitops-example",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["You can run a full driftctl scan in your GitHub Actions workflow by using the ",(0,i.jsx)(e.a,{href:"https://github.com/marketplace/actions/driftctl-action",children:"official action"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"scheduled-example",children:"Scheduled example"}),"\n",(0,i.jsx)(e.p,{children:"Below you can find a GitHub Actions workflow example with a scheduled run of driftctl."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yml",children:'name: driftctl\n\non:\n  # Triggers driftctl every 10 minutes\n  schedule:\n    - cron: "*/10 * * * *"\n\njobs:\n  scheduled:\n    runs-on: ubuntu-latest\n    env:\n      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n      AWS_DEFAULT_REGION: us-east-1\n    steps:\n      - name: Run driftctl\n        uses: snyk/driftctl-action@v1\n        env:\n          DCTL_FILTER: "Type==\'aws_instance\'"\n          DCTL_FROM: tfstate://terraform.tfstate\n        with:\n          version: 0.6.0\n'})}),"\n",(0,i.jsx)(e.h2,{id:"gitops-example",children:"GitOps example"}),"\n",(0,i.jsx)(e.p,{children:"Below you can find a GitOps GitHub Actions workflow example."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yml",children:"name: gitops\n\non:\n  push:\n    branches:\n      - main\n\nenv:\n  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n  AWS_DEFAULT_REGION: us-east-1\n\njobs:\n  validate-fmt:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v1\n      - name: Terraform Init\n        run: terraform init\n      - name: Terraform Format\n        run: terraform fmt -check\n      - name: Terraform Validate\n        run: terraform validate\n  driftctl:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Run driftctl\n        uses: snyk/driftctl-action@v1\n        env:\n          DCTL_FROM: tfstate+s3://my-path/terraform.tfstate\n  plan:\n    needs: [validate-fmt, driftctl]\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v1\n      - name: Terraform Init\n        run: terraform init\n      - name: Terraform Plan\n        run: terraform plan\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);