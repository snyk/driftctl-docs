"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97120],{23390:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=s(74848),r=s(28453);const i={id:"rules",title:"Filter Rules"},l=void 0,o={id:"usage/filtering/rules",title:"Filter Rules",description:"Filter rules can be used not only to scan resources, but also to ignore resources.",source:"@site/versioned_docs/version-0.15.0/usage/filtering/rules.mdx",sourceDirName:"usage/filtering",slug:"/usage/filtering/rules",permalink:"/0.15.0/usage/filtering/rules",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.15.0/usage/filtering/rules.mdx",tags:[],version:"0.15.0",frontMatter:{id:"rules",title:"Filter Rules"},sidebar:"docs",previous:{title:".driftignore",permalink:"/0.15.0/usage/filtering/driftignore"},next:{title:"Log level",permalink:"/0.15.0/usage/log-level"}},c={},a=[{value:"Examples",id:"examples",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Filter rules can be used not only to ",(0,n.jsx)(t.strong,{children:"scan"})," resources, but also to ",(0,n.jsx)(t.strong,{children:"ignore"})," resources."]}),(0,n.jsx)(t.p,{children:"You can indeed use both inclusion and exclusion logics."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Filter rules"})," allow you to build complex expression to include and exclude a set of resources in your workflow.\nPowered by expression language ",(0,n.jsx)(t.a,{href:"https://jmespath.org/",children:"JMESPath"})," you could build a complex include and exclude expression."]}),"\n",(0,n.jsxs)(t.p,{children:["Filter rules could be passed to ",(0,n.jsx)(t.code,{children:"scan"})," cmd with ",(0,n.jsx)(t.code,{children:"--filter"})," flag.\nYou could also use the environment variable ",(0,n.jsx)(t.code,{children:"DCTL_FILTER"}),".\nFilter rules syntax in use is actually ",(0,n.jsx)(t.a,{href:"https://jmespath.org/specification.html",children:"JMESPath"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Filter are applied on a normalized struct which contains the following fields:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Type"}),": Type of the resource, e.g. ",(0,n.jsx)(t.code,{children:"aws_s3_bucket"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Id"}),": Id of the resource, e.g. ",(0,n.jsx)(t.code,{children:"my-bucket-name"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Attr"}),": Contains every resource attributes (check ",(0,n.jsx)(t.code,{children:"pkg/resource/aws/aws_s3_bucket.go"})," for a full list of supported attributes of a bucket)"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["If you want to filter on ",(0,n.jsx)(t.code,{children:"Attr"})," you should enable deep mode otherwise you will not have access to resource's details."]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# Will include only S3 bucket in the search\n$ driftctl scan --filter \"Type=='aws_s3_bucket'\"\n# OR (beware of escape your shell special chars between double quotes)\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\''\n\n# Excludes only s3 bucket named 'my-bucket-name'\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\' && Id!=\\'my-bucket-name\\''\n\n# Ignore buckets that have tags terraform equal to 'false'\n$ driftctl scan --deep --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.tags.terraform==\\'false\\')'\n\n# Ignore buckets that don't have tag terraform\n$ driftctl scan --deep --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.tags != null && !contains(keys(Attr.tags), \\'terraform\\'))'\n\n# Ignore buckets with an ID prefix of 'terraform-'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && starts_with(Id, \\'terraform-\\'))'\n\n# Ignore buckets with an ID suffix of '-test'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && ends_with(Id, \\'-test\\'))'\n\n# Ignore GitHub archived repositories\ndriftctl scan --to github+tf --deep --filter '!(Attr.Archived)'\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);