"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90742],{51361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),r=n(11151);const i={id:"scan-usage",title:"Scan"},l=void 0,o={id:"usage/cmd/scan-usage",title:"Scan",description:"Description",source:"@site/versioned_docs/version-0.18.0/usage/cmd/scan.mdx",sourceDirName:"usage/cmd",slug:"/usage/cmd/scan-usage",permalink:"/0.18.0/usage/cmd/scan-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.18.0/usage/cmd/scan.mdx",tags:[],version:"0.18.0",frontMatter:{id:"scan-usage",title:"Scan"},sidebar:"docs",previous:{title:"Limitations",permalink:"/0.18.0/limitations"},next:{title:"Completion",permalink:"/0.18.0/usage/cmd/completion-usage"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:3},{value:"--from",id:"--from",level:2},{value:"Supported IaC sources",id:"supported-iac-sources",level:3},{value:"S3",id:"s3",level:4},{value:"HTTP + GitLab",id:"http--gitlab",level:4},{value:"--output",id:"--output",level:2},{value:"Console",id:"console",level:3},{value:"Usage",id:"usage",level:4},{value:"Structure",id:"structure",level:4},{value:"JSON",id:"json",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Structure",id:"structure-1",level:4},{value:"HTML",id:"html",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Screenshots",id:"screenshots",level:4},{value:"Computed Fields",id:"computed-fields",level:3},{value:"--to",id:"--to",level:2},{value:"Usage",id:"usage-3",level:3},{value:"Supported Providers",id:"supported-providers",level:3},{value:"--quiet",id:"--quiet",level:2},{value:"--strict",id:"--strict",level:2},{value:"Usage",id:"usage-4",level:3},{value:"--deep",id:"--deep",level:2},{value:"Usage",id:"usage-5",level:3},{value:"--tf-provider-version",id:"--tf-provider-version",level:2},{value:"Usage",id:"usage-6",level:3},{value:"--driftignore",id:"--driftignore",level:2},{value:"Usage",id:"usage-7",level:3},{value:"--config-dir",id:"--config-dir",level:2},{value:"Usage",id:"usage-8",level:3},{value:"--tf-lockfile",id:"--tf-lockfile",level:2},{value:"Usage",id:"usage-9",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ driftctl scan [OPTIONS]\n$ driftctl scan --from tfstate+s3://terraform.tfstate  --to github+tf --output console://\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Scan resources from the input Terraform statefile and compare it to your current profile infrastructure."}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Flag"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Environment"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--from",title:"iac source",children:(0,s.jsx)(t.code,{children:"--from"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_FROM"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:"tfstate://terraform.tfstate"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--output",title:"output",children:(0,s.jsx)(t.code,{children:"--output"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_OUTPUT"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:"console://"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--to",title:"to",children:(0,s.jsx)(t.code,{children:"--to"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_TO"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:"aws+tf"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--quiet",title:"quiet",children:(0,s.jsx)(t.code,{children:"--quiet"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_QUIET"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--strict",title:"strict",children:(0,s.jsx)(t.code,{children:"--strict"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_STRICT"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--deep",title:"deep",children:(0,s.jsx)(t.code,{children:"--deep"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_DEEP"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--tf-provider-version",title:"tf-provider-version",children:(0,s.jsx)(t.code,{children:"--tf-provider-version"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_TF_PROVIDER_VERSION"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--driftignore",title:"driftignore",children:(0,s.jsx)(t.code,{children:"--driftignore"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_DRIFTIGNORE"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:".driftignore"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#--config-dir",title:"config-dir",children:(0,s.jsx)(t.code,{children:"--config-dir"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"DCTL_CONFIG_DIR"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.code,{children:"$HOME"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"--from",children:"--from"}),"\n",(0,s.jsx)(t.p,{children:"Currently, driftctl only supports reading IaC from a Terraform state.\nWe are investigating to support the Terraform code as well, as a state does not represent an intention."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Multiple states can be read by passing ",(0,s.jsx)(t.code,{children:"--from"})," flags. You can also use glob patterns to match multiple state files at once."]})}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# I want to read a local state and a state stored in an S3 bucket:\n$ driftctl scan \\\n  --from tfstate+s3://statebucketdriftctl/terraform.tfstate \\\n  --from tfstate://terraform_toto.tfstate\n\n# You can also read all files under a given prefix for S3\n$ driftctl scan --from tfstate+s3://statebucketdriftctl/states\n\n# In a given local folder\n# driftctl will recursively use all files under this folder.\n#\n# N.B. Symlinks under the root folder will be ignored.\n#      If the folder itself is a symlink it will be followed.\n$ driftctl scan --from tfstate://my-states/directory\n# Only match state files in that directory\n$ driftctl scan --from tfstate://my-states/directory/*.tfstate\n\n# Using glob pattern to recursively use any *.tfstate file.\n$ driftctl scan --from tfstate://path/to/**/*.tfstate\n$ driftctl scan --from tfstate+s3://path/to/**/*.tfstate\n\n# We also support HTTP(s) URLs with authentication\n# the tool will fetch the file from the given URL\n#\n# You can use the --headers option if you need to add extra headers to the request (e.g: for authentication purposes)\n$ driftctl scan --from tfstate+https://example.com/terraform.tfstate --headers 'Authorization=Basic ...; X-Custom-Header=value'\n\n# You can also read the current state for a given workspace from Terraform Cloud\n# Don't forget to provide your Terraform Cloud API token\n# The Terraform Cloud integration supports both workspace ids, and workspace names\n\n$ driftctl scan --from tfstate+tfcloud://$WORKSPACE_ID --tfc-token $TFC_TOKEN\n$ driftctl scan --from tfstate+tfcloud://$ORGANIZATION_NAME/$WORKSPACE_NAME --tfc-token $TFC_TOKEN\n\n# You can also read the current state for a given workspace from Terraform Enterprise by passing the tfc-endpoint value\n# that's specific to your Org's Terraform Enterprise installation\n# You can obtain your workspace id from the General Settings of the workspace\n# Don't forget to provide your Terraform Enterprise API token\n#\n$ driftctl scan --from tfstate+tfcloud://$WORKSPACE_ID --tfc-token $TFC_TOKEN --tfc-endpoint 'https://tfe.example.com/api/v2'\n"})}),"\n",(0,s.jsx)(t.h3,{id:"supported-iac-sources",children:"Supported IaC sources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Terraform state"}),"\n",(0,s.jsxs)(t.li,{children:["Local: ",(0,s.jsx)(t.code,{children:"--from tfstate://terraform.tfstate"})]}),"\n",(0,s.jsxs)(t.li,{children:["S3: ",(0,s.jsx)(t.code,{children:"--from tfstate+s3://my-bucket/path/to/state.tfstate"})]}),"\n",(0,s.jsxs)(t.li,{children:["GCS: ",(0,s.jsx)(t.code,{children:"--from tfstate+gs://my-bucket/path/to/state.tfstate"})]}),"\n",(0,s.jsxs)(t.li,{children:["HTTPS: ",(0,s.jsx)(t.code,{children:"--from tfstate+https://my-url/state.tfstate"})]}),"\n",(0,s.jsxs)(t.li,{children:["Terraform Cloud / Terraform Enterprise: ",(0,s.jsx)(t.code,{children:"--from tfstate+tfcloud://WORKSPACE_ID"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can use any unsupported backend by using ",(0,s.jsx)(t.code,{children:"terraform"})," to pipe your state in a file and then use this file with driftctl:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ terraform state pull > state.tfstate\n$ driftctl scan --from tfstate://state.tfstate\n"})}),"\n",(0,s.jsx)(t.h4,{id:"s3",children:"S3"}),"\n",(0,s.jsx)(t.p,{children:"driftctl needs read-only access so you could use the policy below to ensure minimal access to your state file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::mybucket"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::mybucket/path/to/my/key"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"http--gitlab",children:"HTTP + GitLab"}),"\n",(0,s.jsx)(t.p,{children:"The HTTP backend supports the GitLab managed Terraform State using their API."}),"\n",(0,s.jsxs)(t.p,{children:["All you need is a GitLab repository that contains a Terraform state and an access token with the ",(0,s.jsx)(t.code,{children:"read_api"})," scope."]}),"\n",(0,s.jsx)(t.p,{children:"Here's what the command looks like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'$ GITLAB_TOKEN=<access_token> \\\ndriftctl scan \\\n--from tfstate+https://gitlab.com/api/v4/projects/<project_id>/terraform/state/<path_to_state> \\\n--headers "Authorization=Bearer ${GITLAB_TOKEN}"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can find more information about the GitLab managed Terraform State on the ",(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/infrastructure/terraform_state.html",children:"GitLab documentation website"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"--output",children:"--output"}),"\n",(0,s.jsx)(t.p,{children:"driftctl supports multiple kinds of output formats and by default uses the standard output (console)."}),"\n",(0,s.jsxs)(t.p,{children:["Environment: ",(0,s.jsx)(t.code,{children:"DCTL_OUTPUT"})]}),"\n",(0,s.jsx)(t.h3,{id:"console",children:"Console"}),"\n",(0,s.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ driftctl scan\n$ driftctl scan --output console://\n$ DCTL_OUTPUT=console:// driftctl scan\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["driftctl can write to multiple outputs at once by passing multiple ",(0,s.jsx)(t.code,{children:"--output"})," flags."]})}),"\n",(0,s.jsx)(t.h4,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Found missing resources:\n  aws_s3_bucket:\n    - driftctl-bucket-test-2\nFound resources not covered by IaC:\n  aws_s3_bucket:\n    - driftctl-bucket-test-3\nFound changed resources:\n  - driftctl-bucket-test-1 (aws_s3_bucket):\n    ~ Versioning.0.Enabled: false => true\nFound 3 resource(s)\n - 33% coverage\n - 1 covered by IaC\n - 1 not covered by IaC\n - 1 missing on cloud provider\n - 1/1 changed outside of IaC\n"})}),"\n",(0,s.jsx)(t.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(t.h4,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ driftctl scan --output json:///tmp/result.json # Will output results to /tmp/result.json\n$ driftctl scan --output json://result.json # Will output results to ./result.json\n$ driftctl scan --output json://stdout # Will output results in json to stdout directly\n$ DCTL_OUTPUT=json://result.json driftctl scan\n"})}),"\n",(0,s.jsx)(t.h4,{id:"structure-1",children:"Structure"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "summary": {\n    "total_resources": 3,\n    "total_changed": 1,\n    "total_unmanaged": 1,\n    "total_missing": 1,\n    "total_managed": 1\n  },\n  "managed": [\n    // list of resources found in IaC and in sync with remote\n    {\n      "id": "driftctl-bucket-test-1",\n      "type": "aws_s3_bucket",\n      "source": { // Source encapsulates metadata explaining where the resource is coming from within an IaC\n        "source": "tfstate://terraform.tfstate", // Represents the Terraform state file\n        "namespace": "module", // If you use Terraform module, it will be displayed here\n        "internal_name": "my_name" // Represents the internal Terraform resource\'s name\n      }\n    }\n  ],\n  "unmanaged": [\n    // list of resources found in remote but not in IaC\n    {\n      "id": "driftctl-bucket-test-3",\n      "type": "aws_s3_bucket"\n    }\n  ],\n  "missing": [\n    // list of resources found in IaC but not on remote\n    {\n      "id": "driftctl-bucket-test-2",\n      "type": "aws_s3_bucket"\n    },\n  ],\n  "differences": [\n    // A list of changes on managed resources\n    {\n      "res": {\n        "id": "driftctl-bucket-test-1",\n        "type": "aws_s3_bucket"\n      },\n      "changelog": [\n        {\n          "type": "update", // Kind of change, could be one of update, create, delete\n          "path": [\n            // Path of the change, sorted from root to leaf\n            "Versioning",\n            "0",\n            "Enabled"\n          ],\n          "from": false, // Mixed type\n          "to": true // Mixed type\n        }\n      ]\n    }\n  ],\n  "coverage": 33\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"html",children:"HTML"}),"\n",(0,s.jsx)(t.h4,{id:"usage-2",children:"Usage"}),"\n",(0,s.jsx)(t.p,{children:"You can now visualize your scan results in your browser with the HTML output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ driftctl scan --output html://output.html # Will output results to ./output.html\n$ DCTL_OUTPUT=html://output.html driftctl scan\n"})}),"\n",(0,s.jsx)(t.h4,{id:"screenshots",children:"Screenshots"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Output HTML With Drifts",src:n(4022).Z+"",width:"2800",height:"1280"}),"\n",(0,s.jsx)(t.img,{alt:"Output HTML Without Drifts",src:n(97606).Z+"",width:"2800",height:"866"})]}),"\n",(0,s.jsx)(t.h3,{id:"computed-fields",children:"Computed Fields"}),"\n",(0,s.jsxs)(t.p,{children:["From Terraform documentation, a ",(0,s.jsx)(t.code,{children:"computed"})," field is often used to represent values that are not user configurable or can not be known at time of ",(0,s.jsx)(t.code,{children:"terraform plan"})," or ",(0,s.jsx)(t.code,{children:"apply"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Since those values are not known ahead of time from terraform point of view, it is obviously possible that the values displayed in a terraform state file are not up-to-date and may require a ",(0,s.jsx)(t.code,{children:"terraform refresh"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Thus, it could be possible that driftctl finds drifts that are considered false positives because of those outdated values."}),"\n",(0,s.jsx)(t.p,{children:"We decided to output computed fields and to display a message at the end of the scan to remind you of this behavior."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'Found changed resources:\n  - eipalloc-0e2894d8ea42851df (aws_eip):\n    ~ AssociationId: "" => "eipassoc-0ee67e1ca759733a2" (computed)\n    ~ Instance: "" => "i-004611704837fd09a" (computed)\n    ~ NetworkInterface: "" => "eni-0a62972b0471447f6" (computed)\n    ~ PrivateDns: <nil> => "ip-172-31-40-4.eu-west-3.compute.internal" (computed)\n    ~ PrivateIp: "" => "172.31.40.4" (computed)\nFound 1 resource(s)\n - 100% coverage\n - 1 covered by IaC\n - 0 not covered by IaC\n - 0 missing on cloud provider\n - 1/1 changed outside of IaC\nYou have diffs on computed fields, check the documentation for potential false positive drifts\n'})}),"\n",(0,s.jsx)(t.h2,{id:"--to",children:"--to"}),"\n",(0,s.jsxs)(t.p,{children:["driftctl supports multiple providers. By default it will scan against AWS, but you can change this using ",(0,s.jsx)(t.code,{children:"--to"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"usage-3",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Environment: ",(0,s.jsx)(t.code,{children:"DCTL_TO"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ driftctl scan --to PROVIDER+TYPE\n\n# examples:\n$ driftctl scan --to aws+tf\n$ DCTL_TO=github+tf driftctl scan\n"})}),"\n",(0,s.jsx)(t.h3,{id:"supported-providers",children:"Supported Providers"}),"\n",(0,s.jsx)(t.p,{children:"driftctl supports these providers:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"github+tf"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"aws+tf"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"gcp+tf"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"azure+tf"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"--quiet",children:"--quiet"}),"\n",(0,s.jsx)(t.p,{children:"This flag prevents stdout to be use for anything but the scan result."}),"\n",(0,s.jsx)(t.h2,{id:"--strict",children:"--strict"}),"\n",(0,s.jsx)(t.p,{children:"When running driftctl against an AWS account, you may experience unnecessary noises with resources that don't belong to you. It can be the case if you have an organization account in which you will by default have a service-linked role associated to your account (e.g. AWSServiceRoleForOrganizations). For now, driftctl ignores those service-linked resources by default."}),"\n",(0,s.jsx)(t.p,{children:"If you still want to include those resources in the report anyway, you can enable the strict mode."}),"\n",(0,s.jsx)(t.p,{children:"For now, resources include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Service-linked AWS IAM roles, including their policies and policy attachments"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"usage-4",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# Enable the strict mode\n$ driftctl scan --strict\n"})}),"\n",(0,s.jsx)(t.h2,{id:"--deep",children:"--deep"}),"\n",(0,s.jsxs)(t.p,{children:["\u26a0\ufe0f This is ",(0,s.jsx)(t.strong,{children:"EXPERIMENTAL"})]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Enabling deep mode while using a Terraform state as IaC source can lead to unexpected behaviors: false positive drifts, undetected drifts."})}),"\n",(0,s.jsx)(t.p,{children:"Deep mode enables resources details retrieval. It was the original driftctl behavior."}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.strong,{children:"deep"})," mode we compare resources details to expected ones (like a terraform plan).\nIn ",(0,s.jsx)(t.strong,{children:"non-deep"})," mode (the default one) we only enumerate resources and display which ones are out of IaC scope."]}),"\n",(0,s.jsxs)(t.p,{children:["Since it overlaps the new ",(0,s.jsx)(t.code,{children:"terraform plan"})," behavior (as of Terraform 0.15 it shows diffs between your state and the remote) we moved the original behavior under the ",(0,s.jsx)(t.code,{children:"--deep"})," ",(0,s.jsx)(t.strong,{children:"experimental"})," flag."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"If you use a version of driftctl prior to 0.13, the deep mode was the default behavior. If you want to keep the old behavior in a newer version you have to enable the deep mode flag."})}),"\n",(0,s.jsx)(t.h3,{id:"usage-5",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# Enable the deep mode\n$ driftctl scan --deep\n"})}),"\n",(0,s.jsx)(t.h2,{id:"--tf-provider-version",children:"--tf-provider-version"}),"\n",(0,s.jsx)(t.p,{children:"You can specify a terraform provider version to use. If none, driftctl uses defaults from the table below:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"provider"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"aws"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3.19.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"github"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4.4.0"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usage-6",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# I use terraform provider 3.43.0 so I can use this provider with driftctl to avoid scan errors\n# driftctl will scan with an AWS terraform provider v3.43.0\n$ DCTL_TF_PROVIDER_VERSION=3.43.0 driftctl scan\n\n# Same parameter is used for every cloud provider\n# driftctl will scan with a GitHub terraform provider v4.10.1\n$ DCTL_TF_PROVIDER_VERSION=4.10.1 driftctl scan --to github+tf\n"})}),"\n",(0,s.jsx)(t.h2,{id:"--driftignore",children:"--driftignore"}),"\n",(0,s.jsxs)(t.p,{children:["The default name for a driftignore file is ",(0,s.jsx)(t.code,{children:".driftignore"}),". If for some reason you want to use a custom filename, you can do so using the ",(0,s.jsx)(t.code,{children:"--driftignore"})," flag. This is especially useful when you have multiple driftignore files, where each of them represents a particular use case."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"You can use only one driftignore file at once."})}),"\n",(0,s.jsx)(t.h3,{id:"usage-7",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# Apply ignore directives from the /path/to/driftignore file\n$ driftctl scan --driftignore /path/to/driftignore\n"})}),"\n",(0,s.jsx)(t.h2,{id:"--config-dir",children:"--config-dir"}),"\n",(0,s.jsxs)(t.p,{children:["You can change the directory path that driftctl uses for configuration. By default, it is the ",(0,s.jsx)(t.code,{children:"$HOME"})," directory."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be useful, for example, if you want to invoke driftctl in an AWS Lambda function where you can only use the ",(0,s.jsx)(t.code,{children:"/tmp"})," folder."]}),"\n",(0,s.jsx)(t.h3,{id:"usage-8",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ driftctl scan --config-dir path_to_driftctl_config_dir\n$ DCTL_CONFIG_DIR=path_to_driftctl_config_dir driftctl scan\n"})}),"\n",(0,s.jsx)(t.h2,{id:"--tf-lockfile",children:"--tf-lockfile"}),"\n",(0,s.jsxs)(t.p,{children:["By default, driftctl tries to read a Terraform lock file (",(0,s.jsx)(t.code,{children:".terraform.lock.hcl"}),") in the current directory, so driftctl can automatically detect which provider to use, according to the ",(0,s.jsx)(t.code,{children:"--to"})," flag. You can specify a custom path for that file using the ",(0,s.jsx)(t.code,{children:"--tf-lockfile"})," flag. If parsing the lockfile fails for some reason, errors will be logged and scan will continue."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Note that when using both ",(0,s.jsx)(t.code,{children:"--tf-lockfile"})," and ",(0,s.jsx)(t.code,{children:"--tf-provider-version"})," flags together, ",(0,s.jsx)(t.code,{children:"--tf-provider-version"})," will simply take precedence overall."]})}),"\n",(0,s.jsx)(t.h3,{id:"usage-9",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ driftctl scan --to aws+tf --tf-lockfile path/to/.terraform.lock.hcl\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4022:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/output_html_1-b8c8ce70a1cda9dac849d341bdadcdf5.png"},97606:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/output_html_2-836fad71065e57d10a2355ced78dc8ca.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var s=n(67294);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);