"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(67294),l=n(86010),o=n(76775),i=n(91980),s=n(67392),u=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),k=(()=>{const e=s??m;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var g=n(12466),k=n(72389);const y="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,g.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==o&&(c(t),i(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},i,{className:(0,l.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},58234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),o=n(85162);const i={id:"installation",title:"Installation"},s=void 0,u={unversionedId:"installation",id:"version-0.24.0/installation",title:"Installation",description:"driftctl is available on Linux, macOS and Windows.",source:"@site/versioned_docs/version-0.24.0/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/0.24.0/installation",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.24.0/installation.mdx",tags:[],version:"0.24.0",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-0.24.0/docs",previous:{title:"What is driftctl?",permalink:"/0.24.0/"},next:{title:"Usage",permalink:"/0.24.0/usage"}},c={},d=[{value:"Verify digital signatures",id:"verify-digital-signatures",level:2},{value:"driftctl Current PGP Public Key",id:"driftctl-current-pgp-public-key",level:2},{value:"Usage examples",id:"usage-examples",level:2}],p={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"driftctl is available on Linux, macOS and Windows."),(0,a.kt)("p",null,"Binaries are available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snyk/driftctl/releases"},"release page"),"."),(0,a.kt)(l.Z,{defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Docker",value:"docker"},{label:"Homebrew",value:"homebrew"},{label:"Macports",value:"macports"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,a.kt)(l.Z,{defaultValue:"linux-macos",values:[{label:"Linux / macOS",value:"linux-macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"linux-macos",mdxType:"TabItem"},(0,a.kt)("p",null,"This is an example using ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),". If you don't have ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),", install it, or use ",(0,a.kt)("inlineCode",{parentName:"p"},"wget"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Linux\n# x64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl\n\n# x86\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_386 -o driftctl\n\n# macOS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_darwin_amd64 -o driftctl\n")),(0,a.kt)("p",null,"Make the binary executable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ chmod +x driftctl\n")),(0,a.kt)("p",null,"Optionally install driftctl to a central location in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# use any path that suits you, this is just a standard example. Install sudo if needed.\n$ sudo mv driftctl /usr/local/bin/\n")),(0,a.kt)("h2",{id:"verify-digital-signatures"},"Verify digital signatures"),(0,a.kt)("p",null,"driftctl releases are signed using PGP key (ed25519) with ID ",(0,a.kt)("inlineCode",{parentName:"p"},"ACC776A79C824EBD")," and fingerprint ",(0,a.kt)("inlineCode",{parentName:"p"},"2776 6600 5A7F 01D4 84F6 376D ACC7 76A7 9C82 4EBD"),". Our key can be retrieved from common keyservers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Download binary, checksums and signature\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl_linux_amd64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS -o driftctl_SHA256SUMS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS.gpg -o driftctl_SHA256SUMS.gpg\n\n# Import key\n$ gpg --keyserver hkps://keys.openpgp.org --recv-keys 0xACC776A79C824EBD\ngpg: key ACC776A79C824EBD: public key "Cloudskiff <security@cloudskiff.com>" imported\ngpg: Total number processed: 1\ngpg:               imported: 1\n\n# Verify signature (optionally trust the key from gnupg to avoid any warning)\n$ gpg --verify driftctl_SHA256SUMS.gpg driftctl_SHA256SUMS\ngpg: Signature made jeu. 04 f\xe9vr. 2021 14:58:06 CET\ngpg:                using EDDSA key 277666005A7F01D484F6376DACC776A79C824EBD\ngpg:                issuer "security@cloudskiff.com"\ngpg: Good signature from "Cloudskiff <security@cloudskiff.com>" [ultimate]\n\n# Verify checksum\n$ sha256sum --ignore-missing -c driftctl_SHA256SUMS\ndriftctl_linux_amd64: OK\n')),(0,a.kt)("h2",{id:"driftctl-current-pgp-public-key"},"driftctl Current PGP Public Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxjMEYBv2ABYJKwYBBAHaRw8BAQdAstkQggX4bNXmfdiy+Cn6XrQLk0GNx+s4hbvuOi6DBS7NJENs\nb3Vkc2tpZmYgPHNlY3VyaXR5QGNsb3Vkc2tpZmYuY29tPsKQBBMWCAA4FiEEJ3ZmAFp/AdSE9jdt\nrMd2p5yCTr0FAmAb9gACGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQrMd2p5yCTr3CCgEA\n5kYdx5TMTHUJXwVs64QpQB5neN41y7EEnD7zWoZUMxcBAOeZxVsR6VZQENhpBpFcSJDSHAK6KDdr\nBYc2FpRDXQ4GwsFcBBABCgAGBQJgHBbYAAoJEDma9pCSxye2z4MQALniFM6VuVuDvP8wjpUixIFl\nH+Z702+VZU01hfQu27C0jR3WFDPlmRf4biqLD6NV4jfcWIUcAh19uRnHH31if2u4Ij4ZLB6uhm1C\nfcI0NLxyCvTorriA6Bf8rtt+iZ7K6nlolc2ZKJsQe6l2O3E0zC5WQlawjKKjjbjjA6C2CxFwcYib\ncmGobqIhTFHwta4sL9icFpEdt30XnVrJ1JHzEdYxK2YUoAJXyuPRH9Z9MbjJXL+uT98cigtOLdM2\nG/KCrWCrMS7lUznAvsJJ8Pova3dyT4d1AoVXPnKhOp0t4GPX5x4SRIe2QexvNEIoScXfQrxsONWL\nPkAVttALmfrveCgTESyBIw57Xe1wHOJmYrIkrMXNljBO2cC8DHkRKgo6xDOFmGfvBhQdUIiSe3/8\nbXbVnWjpjWhhIAoSMJBpPFWnFs+AlOk+BjYf/CMKf5eLuCSBF+JIGaulGDxhVdVcyBjp2FFw9FBs\n0tELKfds8OmXi2JzVT+K4oXNjRca9UwCmqhntkTOdOKMls/q9fCkVGxSiLKLGNr+fuU/1q9MISHi\nHqAiERT0cBjBFgr15Fn+hkpiSoDitaTZWoAfAQynnlh7WFXXPD2LQwk5lg3SkC0czSkacaaAoRCW\npSVXbMUWB0hD0lSaoPcDNsNyVfzEwMXqWWLBkKZbTki+GanHkb+J\n=dbR5\n-----END PGP PUBLIC KEY BLOCK-----\n"))),(0,a.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# x64\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_amd64.exe -o driftctl.exe\n# x86\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_386.exe -o driftctl.exe\n"))))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"You can use also our official Docker image from the terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -t --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=non-default-profile \\\n  snyk/driftctl scan\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-v ~/.aws:/root/.aws:ro")," (optionally) mounts your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.aws")," containing AWS credentials and profile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-v $(pwd):/app:ro")," (optionally) mounts your working dir containing the terraform state"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-v ~/.driftctl:/root/.driftctl")," (optionally) prevents driftctl to download the provider at each run"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e AWS_PROFILE=your_profile")," (optionally) exports the non-default AWS profile name to use"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"snyk/driftctl:<VERSION_TAG>")," run a specific driftctl tagged release"),(0,a.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# With a local state\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan\n\n# With state stored on a s3 backend\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ docker run -t --rm \\\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n    -e AWS_SECRET_ACCESS_KEY=XXXX \\\n    snyk/driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using a named profile\n$ docker run -t --rm \\\n    -v ~/.aws:/root/.aws:ro \\ # mount your aws config folder\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_PROFILE=your-profile \\\n    snyk/driftctl scan\n"))),(0,a.kt)(o.Z,{value:"homebrew",mdxType:"TabItem"},(0,a.kt)("p",null,"Homebrew is a free and open-source package management system for Mac OS X. Install the official driftctl formula from the terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install driftctl\n"))),(0,a.kt)(o.Z,{value:"macports",mdxType:"TabItem"},(0,a.kt)("p",null,"MacPorts is an easy to use system for compiling, installing, and managing open source software. Install the community port from the terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo port install driftctl\n")))))}f.isMDXComponent=!0}}]);