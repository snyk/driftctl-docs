"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86717],{31780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=t(85893),o=t(11151);const i={id:"gen-driftignore-usage",title:".driftignore generator"},s=void 0,d={id:"usage/cmd/gen-driftignore-usage",title:".driftignore generator",description:"Some people do not have the goal of reaching a 100% IAC coverage with their infrastructure. And for them, driftctl can be annoying to continuously deliver drift notifications on resources they don't care. For this use case, there's a solution.",source:"@site/versioned_docs/version-0.34.0/usage/cmd/gen-driftignore.mdx",sourceDirName:"usage/cmd",slug:"/usage/cmd/gen-driftignore-usage",permalink:"/0.34.0/usage/cmd/gen-driftignore-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.34.0/usage/cmd/gen-driftignore.mdx",tags:[],version:"0.34.0",frontMatter:{id:"gen-driftignore-usage",title:".driftignore generator"},sidebar:"docs",previous:{title:"Completion",permalink:"/0.34.0/usage/cmd/completion-usage"},next:{title:"Crash Reporting",permalink:"/0.34.0/usage/flags/crash-reporting"}},c={},a=[{value:"Using Docker",id:"using-docker",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Some people do not have the goal of reaching a 100% IAC coverage with their infrastructure. And for them, driftctl can be annoying to continuously deliver drift notifications on resources they don't care. For this use case, there's a solution."}),"\n",(0,r.jsx)(n.p,{children:"You can start using driftctl with a clean state, by ignoring all the current resources that are not yet under control. driftctl provides a command to automatically generate a .driftignore file from a previous scan given the type of resources you want to exclude (e.g. unmanaged, missing or changed resources). This command parses a JSON input from a given file and sends output to stdout."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Append all current drift to .driftignore\n$ driftctl scan -o json://stdout | driftctl gen-driftignore\n\n# Print proposed driftignore based on all current drift to stdout\n$ driftctl scan -o json://stdout | driftctl gen-driftignore -o -\n\n# Changed resources will be excluded\n$ driftctl scan --from tfstate://state1.tfstate -o json://stdout | driftctl gen-driftignore --exclude-changed\n\n# Unmanaged resources will be excluded\n# In this example, we use a file as an intermediate step instead of piping into\n# gen-driftignore\n$ driftctl scan --from tfstate://state1.tfstate -o json://result.json\n$ driftctl gen-driftignore -i result.json --exclude-unmanaged\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can filter which kind of resource you want to ignore using these flags:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--exclude-unmanaged"})," : Exclude resources not managed by IaC"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--exclude-missing"})," : Exclude resources missing on cloud provider"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--exclude-changed"})," : Exclude resources that changed from IaC"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-docker",children:"Using Docker"}),"\n",(0,r.jsx)(n.p,{children:"Run a scan with JSON output enabled:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ docker run -it --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=driftctl-demo \\\n  -e AWS_REGION=us-east-1 \\\n  snyk/driftctl scan --from tfstate://**/*.tfstate --output json://drifts.json\n[...]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, generate the ",(0,r.jsx)(n.code,{children:".driftignore"})," file from the JSON:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ docker run -it --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=driftctl-demo \\\n  -e AWS_REGION=us-east-1 \\\n  snyk/driftctl gen-driftignore -i drifts.json\n[...]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);