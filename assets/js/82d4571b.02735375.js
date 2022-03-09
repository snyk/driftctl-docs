"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4808],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"rules",title:"Filter Rules"},l=void 0,c={unversionedId:"usage/filtering/rules",id:"usage/filtering/rules",isDocsHomePage:!1,title:"Filter Rules",description:"Filter rules can be used not only to scan resources, but also to ignore resources.",source:"@site/docs/usage/filtering/rules.mdx",sourceDirName:"usage/filtering",slug:"/usage/filtering/rules",permalink:"/next/usage/filtering/rules",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/docs/usage/filtering/rules.mdx",tags:[],version:"current",frontMatter:{id:"rules",title:"Filter Rules"},sidebar:"docs",previous:{title:".driftignore",permalink:"/next/usage/filtering/driftignore"},next:{title:"Log level",permalink:"/next/usage/log-level"}},u=[{value:"Examples",id:"examples",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Filter rules can be used not only to ",(0,i.kt)("strong",{parentName:"p"},"scan")," resources, but also to ",(0,i.kt)("strong",{parentName:"p"},"ignore")," resources."),(0,i.kt)("p",{parentName:"div"},"You can indeed use both inclusion and exclusion logics."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Filter rules")," allow you to build complex expression to include and exclude a set of resources in your workflow.\nPowered by expression language ",(0,i.kt)("a",{parentName:"p",href:"https://jmespath.org/"},"JMESPath")," you could build a complex include and exclude expression."),(0,i.kt)("p",null,"Filter rules could be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"scan")," cmd with ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," flag.\nYou could also use the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DCTL_FILTER"),".\nFilter rules syntax in use is actually ",(0,i.kt)("a",{parentName:"p",href:"https://jmespath.org/specification.html"},"JMESPath"),"."),(0,i.kt)("p",null,"Filter are applied on a normalized struct which contains the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type"),": Type of the resource, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"aws_s3_bucket")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Id"),": Id of the resource, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"my-bucket-name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Attr"),": Contains every resource attributes (check ",(0,i.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket#attributes-reference"},"terraform attributes reference")," for a full list of supported attributes of a bucket)")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to filter on ",(0,i.kt)("inlineCode",{parentName:"p"},"Attr")," you should enable deep mode otherwise you will not have access to resource's details."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Will include only S3 bucket in the search\n$ driftctl scan --filter \"Type=='aws_s3_bucket'\"\n# OR (beware of escape your shell special chars between double quotes)\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\''\n\n# Excludes only s3 bucket named 'my-bucket-name'\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\' && Id!=\\'my-bucket-name\\''\n\n# Ignore buckets that have tags terraform equal to 'false'\n$ driftctl scan --deep --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.tags.terraform==\\'false\\')'\n\n# Ignore buckets that don't have tag terraform\n$ driftctl scan --deep --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.tags != null && !contains(keys(Attr.tags), \\'terraform\\'))'\n\n# Ignore buckets with an ID prefix of 'terraform-'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && starts_with(Id, \\'terraform-\\'))'\n\n# Ignore buckets with an ID suffix of '-test'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && ends_with(Id, \\'-test\\'))'\n\n# Ignore GitHub archived repositories\ndriftctl scan --to github+tf --deep --filter '!(Attr.Archived)'\n")))}d.isMDXComponent=!0}}]);