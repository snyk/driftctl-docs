"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84808],{5280:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(85893),t=r(11151);const o={id:"driftignore",title:".driftignore"},l=void 0,s={id:"usage/filtering/driftignore",title:".driftignore",description:".driftignore is a simple way to ignore resources, you put resources in a .driftignore file like a .gitignore.",source:"@site/versioned_docs/version-0.28.0/usage/filtering/driftignore.mdx",sourceDirName:"usage/filtering",slug:"/usage/filtering/driftignore",permalink:"/0.28.0/usage/filtering/driftignore",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.28.0/usage/filtering/driftignore.mdx",tags:[],version:"0.28.0",frontMatter:{id:"driftignore",title:".driftignore"},sidebar:"docs",previous:{title:"Disable telemetry",permalink:"/0.28.0/usage/flags/disable-telemetry"},next:{title:"Filter Rules",permalink:"/0.28.0/usage/filtering/rules"}},a={},d=[{value:"Examples",id:"examples",level:3},{value:"Precedence over filter rules",id:"precedence-over-filter-rules",level:2},{value:"Automatically generate a driftignore file",id:"automatically-generate-a-driftignore-file",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:".driftignore"})," is a simple way to ignore resources, you put resources in a ",(0,n.jsx)(i.code,{children:".driftignore"})," file like a ",(0,n.jsx)(i.code,{children:".gitignore"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"If you need only to exclude a set of resources you should use .driftignore, if you need something more advanced, check filter rules."}),"\n",(0,n.jsx)(i.p,{children:"Create the .driftignore file where you launch driftctl (usually the root of your IaC repo)."}),"\n",(0,n.jsx)(i.p,{children:"Each line must be of kind"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"resource_type.resource_id"}),", resource_id could be a wildcard to exclude all resources of a given type."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"resource_type.resource_id.path.to.field_name"}),", resource_id can be wildcard to ignore a drift on given field for a given type, path could also contain wildcards."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The .driftignore file also supports negation of rules. This way you could ignore everything except certain types."}),"\n",(0,n.jsx)(i.p,{children:"For example, if you want to ignore everything but IAM drifts:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ignore",children:"*\n!aws_iam_*\n"})}),"\n",(0,n.jsx)(i.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ignore",children:"# Will ignore S3 bucket called my-bucket\naws_s3_bucket.my-bucket\n# Will ignore every aws_instance resource\naws_instance.*\n# Will ignore environment for all lambda functions\naws_lambda_function.*.environment\n# Will ignore resources like aws_iam_role.AmazonSSMRoleForInstances and aws_iam_role.AWSServiceRoleForAmazonSSM\n*role.*Amazon*\n# Will ignore lastModified for my-lambda-name lambda function\naws_lambda_function.my-lambda-name.last_modified\n"})}),"\n",(0,n.jsx)(i.h2,{id:"precedence-over-filter-rules",children:"Precedence over filter rules"}),"\n",(0,n.jsx)(i.p,{children:"The above mechanism to ignore resources can be used in combination with filter rules. Bear in mind that if the same resource is included by a filter rule and excluded inside the .driftignore file, driftctl will just ignore this resource."}),"\n",(0,n.jsx)(i.h2,{id:"automatically-generate-a-driftignore-file",children:"Automatically generate a driftignore file"}),"\n",(0,n.jsxs)(i.p,{children:["See ",(0,n.jsx)(i.a,{href:"../cmd/gen-driftignore-usage",children:"driftignore generator command"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,i,r)=>{r.d(i,{Z:()=>s,a:()=>l});var n=r(67294);const t={},o=n.createContext(t);function l(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);