"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57299],{78446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(74848),l=n(28453),a=n(11470),s=n(19365);const i={id:"installation",title:"Installation"},o=void 0,c={id:"installation",title:"Installation",description:"driftctl is available on Linux, macOS and Windows.",source:"@site/versioned_docs/version-0.28.0/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/0.28.0/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.28.0/installation.mdx",tags:[],version:"0.28.0",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"What is driftctl?",permalink:"/0.28.0/"},next:{title:"Usage",permalink:"/0.28.0/usage"}},d={},u=[{value:"Verify digital signatures",id:"verify-digital-signatures",level:2},{value:"driftctl Current PGP Public Key",id:"driftctl-current-pgp-public-key",level:2},{value:"Usage examples",id:"usage-examples",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"driftctl is available on Linux, macOS and Windows."}),"\n",(0,r.jsxs)(t.p,{children:["Binaries are available in the ",(0,r.jsx)(t.a,{href:"https://github.com/snyk/driftctl/releases",children:"release page"}),"."]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Docker",value:"docker"},{label:"Homebrew",value:"homebrew"},{label:"Macports",value:"macports"}],children:[(0,r.jsx)(s.A,{value:"manual",children:(0,r.jsxs)(a.A,{defaultValue:"linux-macos",values:[{label:"Linux / macOS",value:"linux-macos"},{label:"Windows",value:"windows"}],children:[(0,r.jsxs)(s.A,{value:"linux-macos",children:[(0,r.jsxs)(t.p,{children:["This is an example using ",(0,r.jsx)(t.code,{children:"curl"}),". If you don't have ",(0,r.jsx)(t.code,{children:"curl"}),", install it, or use ",(0,r.jsx)(t.code,{children:"wget"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# Linux\n# x64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl\n\n# x86\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_386 -o driftctl\n\n# macOS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_darwin_amd64 -o driftctl\n"})}),(0,r.jsx)(t.p,{children:"Make the binary executable:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ chmod +x driftctl\n"})}),(0,r.jsxs)(t.p,{children:["Optionally install driftctl to a central location in your ",(0,r.jsx)(t.code,{children:"PATH"}),":"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# use any path that suits you, this is just a standard example. Install sudo if needed.\n$ sudo mv driftctl /usr/local/bin/\n"})}),(0,r.jsx)(t.h2,{id:"verify-digital-signatures",children:"Verify digital signatures"}),(0,r.jsxs)(t.p,{children:["driftctl releases are signed using PGP key (ed25519) with ID ",(0,r.jsx)(t.code,{children:"ACC776A79C824EBD"})," and fingerprint ",(0,r.jsx)(t.code,{children:"2776 6600 5A7F 01D4 84F6 376D ACC7 76A7 9C82 4EBD"}),". Our key can be retrieved from common keyservers."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'# Download binary, checksums and signature\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl_linux_amd64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS -o driftctl_SHA256SUMS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS.gpg -o driftctl_SHA256SUMS.gpg\n\n# Import key\n$ gpg --keyserver hkps://keys.openpgp.org --recv-keys 0xACC776A79C824EBD\ngpg: key ACC776A79C824EBD: public key "Cloudskiff <security@cloudskiff.com>" imported\ngpg: Total number processed: 1\ngpg:               imported: 1\n\n# Verify signature (optionally trust the key from gnupg to avoid any warning)\n$ gpg --verify driftctl_SHA256SUMS.gpg driftctl_SHA256SUMS\ngpg: Signature made jeu. 04 f\xe9vr. 2021 14:58:06 CET\ngpg:                using EDDSA key 277666005A7F01D484F6376DACC776A79C824EBD\ngpg:                issuer "security@cloudskiff.com"\ngpg: Good signature from "Cloudskiff <security@cloudskiff.com>" [ultimate]\n\n# Verify checksum\n$ sha256sum --ignore-missing -c driftctl_SHA256SUMS\ndriftctl_linux_amd64: OK\n'})}),(0,r.jsx)(t.h2,{id:"driftctl-current-pgp-public-key",children:"driftctl Current PGP Public Key"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxjMEYBv2ABYJKwYBBAHaRw8BAQdAstkQggX4bNXmfdiy+Cn6XrQLk0GNx+s4hbvuOi6DBS7NJENs\nb3Vkc2tpZmYgPHNlY3VyaXR5QGNsb3Vkc2tpZmYuY29tPsKQBBMWCAA4FiEEJ3ZmAFp/AdSE9jdt\nrMd2p5yCTr0FAmAb9gACGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQrMd2p5yCTr3CCgEA\n5kYdx5TMTHUJXwVs64QpQB5neN41y7EEnD7zWoZUMxcBAOeZxVsR6VZQENhpBpFcSJDSHAK6KDdr\nBYc2FpRDXQ4GwsFcBBABCgAGBQJgHBbYAAoJEDma9pCSxye2z4MQALniFM6VuVuDvP8wjpUixIFl\nH+Z702+VZU01hfQu27C0jR3WFDPlmRf4biqLD6NV4jfcWIUcAh19uRnHH31if2u4Ij4ZLB6uhm1C\nfcI0NLxyCvTorriA6Bf8rtt+iZ7K6nlolc2ZKJsQe6l2O3E0zC5WQlawjKKjjbjjA6C2CxFwcYib\ncmGobqIhTFHwta4sL9icFpEdt30XnVrJ1JHzEdYxK2YUoAJXyuPRH9Z9MbjJXL+uT98cigtOLdM2\nG/KCrWCrMS7lUznAvsJJ8Pova3dyT4d1AoVXPnKhOp0t4GPX5x4SRIe2QexvNEIoScXfQrxsONWL\nPkAVttALmfrveCgTESyBIw57Xe1wHOJmYrIkrMXNljBO2cC8DHkRKgo6xDOFmGfvBhQdUIiSe3/8\nbXbVnWjpjWhhIAoSMJBpPFWnFs+AlOk+BjYf/CMKf5eLuCSBF+JIGaulGDxhVdVcyBjp2FFw9FBs\n0tELKfds8OmXi2JzVT+K4oXNjRca9UwCmqhntkTOdOKMls/q9fCkVGxSiLKLGNr+fuU/1q9MISHi\nHqAiERT0cBjBFgr15Fn+hkpiSoDitaTZWoAfAQynnlh7WFXXPD2LQwk5lg3SkC0czSkacaaAoRCW\npSVXbMUWB0hD0lSaoPcDNsNyVfzEwMXqWWLBkKZbTki+GanHkb+J\n=dbR5\n-----END PGP PUBLIC KEY BLOCK-----\n"})})]}),(0,r.jsx)(s.A,{value:"windows",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# x64\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_amd64.exe -o driftctl.exe\n# x86\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_386.exe -o driftctl.exe\n"})})})]})}),(0,r.jsxs)(s.A,{value:"docker",children:[(0,r.jsx)(t.p,{children:"You can use also our official Docker image from the terminal."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ docker run -t --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=non-default-profile \\\n  snyk/driftctl scan\n"})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-v ~/.aws:/root/.aws:ro"})," (optionally) mounts your ",(0,r.jsx)(t.code,{children:"~/.aws"})," containing AWS credentials and profile"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-v $(pwd):/app:ro"})," (optionally) mounts your working dir containing the terraform state"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-v ~/.driftctl:/root/.driftctl"})," (optionally) prevents driftctl to download the provider at each run"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-e AWS_PROFILE=your_profile"})," (optionally) exports the non-default AWS profile name to use"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"snyk/driftctl:<VERSION_TAG>"})," run a specific driftctl tagged release"]}),(0,r.jsx)(t.h2,{id:"usage-examples",children:"Usage examples"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# With a local state\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan\n\n# With state stored on a s3 backend\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ docker run -t --rm \\\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n    -e AWS_SECRET_ACCESS_KEY=XXXX \\\n    snyk/driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using a named profile\n$ docker run -t --rm \\\n    -v ~/.aws:/root/.aws:ro \\ # mount your aws config folder\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_PROFILE=your-profile \\\n    snyk/driftctl scan\n"})})]}),(0,r.jsxs)(s.A,{value:"homebrew",children:[(0,r.jsx)(t.p,{children:"Homebrew is a free and open-source package management system for Mac OS X. Install the official driftctl formula from the terminal."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ brew install driftctl\n"})})]}),(0,r.jsxs)(s.A,{value:"macports",children:[(0,r.jsx)(t.p,{children:"MacPorts is an easy to use system for compiling, installing, and managing open source software. Install the community port from the terminal."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ sudo port install driftctl\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const l={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),l=n(34164),a=n(23104),s=n(56347),i=n(205),o=n(57485),c=n(31682),d=n(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=f(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=h({queryString:n,groupId:l}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,d.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),l=i[n].value;l!==r&&(c(t),s(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,l.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function A(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function j(e){const t=(0,g.A)();return(0,b.jsx)(A,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);