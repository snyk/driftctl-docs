"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81572],{21801:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(85893),i=t(11151);const s={id:"limitations",title:"Known Issues and Limitations",sidebar_label:"Limitations"},o=void 0,a={id:"limitations",title:"Known Issues and Limitations",description:"AWS Regions & Credentials Limits",source:"@site/versioned_docs/version-0.31.0/limitations.mdx",sourceDirName:".",slug:"/limitations",permalink:"/0.31.0/limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.31.0/limitations.mdx",tags:[],version:"0.31.0",frontMatter:{id:"limitations",title:"Known Issues and Limitations",sidebar_label:"Limitations"},sidebar:"docs",previous:{title:"Usage",permalink:"/0.31.0/usage"},next:{title:"Scan",permalink:"/0.31.0/usage/cmd/scan-usage"}},l={},c=[{value:"AWS Regions &amp; Credentials Limits",id:"aws-regions--credentials-limits",level:2},{value:"Terraform &amp; Providers Support",id:"terraform--providers-support",level:2},{value:"Integration in terraform workflow",id:"integration-in-terraform-workflow",level:2},{value:"Terraform Resources",id:"terraform-resources",level:2},{value:"AWS",id:"aws",level:3},{value:"Github",id:"github",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"aws-regions--credentials-limits",children:"AWS Regions & Credentials Limits"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The user needs to use the same AWS region and credentials for both the scanned infrastructure and the S3 bucket where the Terraform state is stored (for example, a Terraform state stored on S3 on us-east-1 for an infrastructure to be scanned on us-west-1 won't work). Think ",(0,n.jsx)(r.code,{children:"AWS_PROFILE"})," for the underlying reason. See the related ",(0,n.jsx)(r.a,{href:"https://github.com/snyk/driftctl/discussions/130",children:"GitHub Discussion"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"driftctl currently doesn't support multiple aliased providers in a single Terraform state (like a single account but multiple regions). This will be implemented soon."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"terraform--providers-support",children:"Terraform & Providers Support"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Terraform version >= 0.11 is supported"}),"\n",(0,n.jsx)(r.li,{children:"Terraform AWS provider version >= 3.x is supported"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"When performing a scan using a non-supported Terraform state, driftctl will ignore that state, will display a warning message and the scan will continue anyway. So if you specify multiple states at once, only supported ones will be used."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"$ driftctl scan --from tfstate://terraform.tfstate\nWARNING: terraform.tfstate was generated using Terraform 0.10.8 which is currently not supported by driftctl\nPlease read documentation at https://docs.driftctl.com/limitations\nScanning resources: \u28df (36)\n...\n"})}),"\n",(0,n.jsx)(r.h2,{id:"integration-in-terraform-workflow",children:"Integration in terraform workflow"}),"\n",(0,n.jsxs)(r.p,{children:["driftctl compares your real infrastructure to your state.\nWhen running ",(0,n.jsx)(r.code,{children:"terraform refresh"})," or ",(0,n.jsx)(r.code,{children:"terraform apply"})," , since it triggers a refresh, terraform updates your state with upstream modifications.\nThus, driftctl won't be able to compute diffs between state and infrastructure as both sides are in sync."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"driftctl should be run BEFORE any terraform actions in your CI/CD pipeline"})}),"\n",(0,n.jsx)(r.p,{children:"For example:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"create an aws_s3_bucket with terraform, apply to create a bucket"}),"\n",(0,n.jsx)(r.li,{children:"manually enable the bucket versioning in the console"}),"\n",(0,n.jsxs)(r.li,{children:["run driftctl => it will detect the drift ",(0,n.jsx)(r.code,{children:"~ Versioning.0.Enabled: false => true"})]}),"\n",(0,n.jsx)(r.li,{children:"run terraform apply => no changes, but under the hood it will update your state and set versioning to true"}),"\n",(0,n.jsxs)(r.li,{children:["run driftctl => *",(0,n.jsx)(r.em,{children:"no changes"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"terraform-resources",children:"Terraform Resources"}),"\n",(0,n.jsx)(r.h3,{id:"aws",children:"AWS"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"aws_security_group and aws_security_group_rule:"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"For security group that has in-line egress or ingress rules, driftctl will output an alert message at the end of the scan to warn you that those rules are falsely unmanaged. The explanation is that we can't distinct, based only on the Terraform state, rules created in the console and rules created in-line in either egress or ingress blocks."}),"\n",(0,n.jsx)(r.h3,{id:"github",children:"Github"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["github_branch_protection_v3:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["This resource is not supported and will probably never be as it overlaps with github_branch_protection. ",(0,n.jsx)(r.code,{children:"github_branch_protection"})," is more suitable for performance purpose. We cannot support these two resources as we don't have any way to discriminate them by enumerating resources from remote side. They represent the same notion but are from two different APIs (REST vs GraphQL). driftctl team recommends you to use the newer ",(0,n.jsx)(r.code,{children:"github_branch_protection"}),", or at least ignore all your ",(0,n.jsx)(r.code,{children:"github_branch_protection_v3"})," in driftignore."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["github_branch_protection:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Branch protection resources are not returned as unmanaged if the branch protection pattern does not match at least one branch."}),"\n",(0,n.jsx)(r.li,{children:"We cannot show the related repository name in driftctl output as the terraform provider does not retrieve this information."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var n=t(67294);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);