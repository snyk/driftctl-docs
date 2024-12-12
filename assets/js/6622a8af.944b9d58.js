"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43745],{92292:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(74848),i=r(28453);const t={id:"crash-reporting",title:"Crash Reporting"},o=void 0,c={id:"usage/flags/crash-reporting",title:"Crash Reporting",description:"When a crash occurs in driftctl, we do not send any crash reports.",source:"@site/versioned_docs/version-0.33.0/usage/flags/crash-reporting.mdx",sourceDirName:"usage/flags",slug:"/usage/flags/crash-reporting",permalink:"/0.33.0/usage/flags/crash-reporting",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.33.0/usage/flags/crash-reporting.mdx",tags:[],version:"0.33.0",frontMatter:{id:"crash-reporting",title:"Crash Reporting"},sidebar:"docs",previous:{title:".driftignore generator",permalink:"/0.33.0/usage/cmd/gen-driftignore-usage"},next:{title:"Version Check",permalink:"/0.33.0/usage/flags/version-check"}},a={},l=[{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"When a crash occurs in driftctl, we do not send any crash reports."}),"\n",(0,s.jsxs)(n.p,{children:["For debugging purposes, you can add ",(0,s.jsx)(n.code,{children:"--send-crash-report"})," when running driftctl and crash data will be sent to us via ",(0,s.jsx)(n.a,{href:"https://sentry.io",children:"Sentry"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Below is a list of data we retrieve when error reporting is enabled."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"date"}),": Event date"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"os name"}),': Operating System (string, e.g. : "linux | mac | windows")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"architecture"}),': Architecture of your CPU (string, e.g. : "amd64 | i389")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"num_cpu"}),": Number of cores of your CPU (int, e.g. : 8)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"release"}),': driftctl version (string, e.g. : "v0.2.2")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"server_name"}),': Your computer hostname (string, e.g. : "yourhostname")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"runtime version"}),': Golang version (string, e.g. : "go1.15.2")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"runtime infos"}),": Variables go_maxprocs, go_numcgocalls, go_numroutines"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"packages"}),": Golang used packages and their versions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"stacktrace"}),": The error stack"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The crash reporting is silent, it will never make your scan fail. You can know whether a report has been sent or not by setting the log level to debug : ",(0,s.jsx)(n.code,{children:"LOG_LEVEL=debug driftctl scan ..."}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Below is a full example of a nil pointer crash report."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sentry",src:r(36443).A+"",width:"1201",height:"2079"})}),"\n",(0,s.jsx)(n.p,{children:"The RAW stack for this example is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'runtime.errorString: runtime error: invalid memory address or nil pointer dereference\n  File "/go/src/app/pkg/parallel_runner.go", line 93, in (*ParallelRunner).Run.func1.1\n  File "/go/src/app/pkg/remote/aws/s3_bucket_supplier.go", line 71, in readBucketRegion\n  File "/go/src/app/pkg/remote/aws/s3_bucket_inventory_supplier.go", line 42, in (*S3BucketInventorySupplier).Resources\n  File "/go/src/app/pkg/scanner.go", line 28, in (*Scanner).Resources.func1\n  File "/go/src/app/pkg/parallel_runner.go", line 97, in (*ParallelRunner).Run.func1\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},36443:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/sentry-2fbf7805ce69b6f14c223592c4570f0a.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);