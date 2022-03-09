"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1874],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?s.createElement(f,a(a({ref:t},u),{},{components:n})):s.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var l=2;l<o;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var s=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],r={id:"authentication",title:"Authentication"},c=void 0,l={unversionedId:"providers/aws/authentication",id:"version-0.15.0/providers/aws/authentication",isDocsHomePage:!1,title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use credentials and configuration settings declared as user environment variables, or in local AWS configuration files.",source:"@site/versioned_docs/version-0.15.0/providers/aws/authentication.mdx",sourceDirName:"providers/aws",slug:"/providers/aws/authentication",permalink:"/0.15.0/providers/aws/authentication",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.15.0/providers/aws/authentication.mdx",tags:[],version:"0.15.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"version-0.15.0/docs",previous:{title:"Log level",permalink:"/0.15.0/usage/log-level"},next:{title:"Supported Resources",permalink:"/0.15.0/providers/aws/resources"}},u=[{value:"Custom credentials to read a state on an S3 backend",id:"custom-credentials-to-read-a-state-on-an-s3-backend",children:[],level:2},{value:"Terraform custom role",id:"terraform-custom-role",children:[],level:2},{value:"CloudFormation template",id:"cloudformation-template",children:[{value:"Update the CloudFormation template",id:"update-the-cloudformation-template",children:[],level:3}],level:2},{value:"Least privileged policy",id:"least-privileged-policy",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"credentials and configuration")," settings declared as user environment variables, or in local AWS configuration files."),(0,o.kt)("p",null,"driftctl supports ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"named profile"),". By default, the CLI uses the settings found in the profile named ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". You can override an individual setting by declaring the supported environment variables such as ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_PROFILE")," ..."),(0,o.kt)("p",null,"If you are using an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-role.html"},"IAM role")," as an authorization tool, which is considered a good practice, please be aware that you can still use driftctl by defining a profile for the role in your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws/config")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[profile driftctlrole]\nrole_arn = arn:aws:iam::123456789012:role/<NAMEOFTHEROLE>\nsource_profile = user # profile to assume the role\nregion = eu-west-3\n")),(0,o.kt)("p",null,"You can now use driftctl by overriding the profile setting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ AWS_PROFILE=driftctlrole driftctl scan\n")),(0,o.kt)("h2",{id:"custom-credentials-to-read-a-state-on-an-s3-backend"},"Custom credentials to read a state on an S3 backend"),(0,o.kt)("p",null,"If you want to use a different set of AWS credentials to read your state on S3, you can override each specific AWS environment variable with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DCTL_S3_")," prefix. The purpose here is to have the choice to read a state in a different region than your infrastructure. Please don't forget to use your usual AWS credentials to read the resources of your actual infrastructure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Export a dedicated AWS named profile (or any other AWS environment variables) to read your state in your S3 backend\n$ export DCTL_S3_PROFILE="s3reader"\n# Export the usual driftctl AWS named profile\n$ export AWS_PROFILE="driftctlrole"\n$ driftctl scan --from tfstate+s3://mybucket/terraform.tfstate\n\n# You can also use a specific region to authenticate to the S3 bucket\n$ DCTL_S3_REGION=us-east-1 driftctl scan --from tfstate+s3://mybucket/terraform.tfstate\n')),(0,o.kt)("h2",{id:"terraform-custom-role"},"Terraform custom role"),(0,o.kt)("p",null,"You will find below our custom role that you can assume to run driftctl written in HCL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'data "aws_caller_identity" "current" {}\n\ndata "aws_iam_policy_document" "assume_role_policy" {\n  statement {\n    effect = "Allow"\n    actions   = ["sts:AssumeRole"]\n    principals {\n      type        = "AWS"\n      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]\n    }\n  }\n}\n\ndata "aws_iam_policy_document" "policy" {\n  statement {\n    effect = "Allow"\n    actions   = [\n      "cloudfront:GetDistribution",\n      "cloudfront:ListDistributions",\n      "cloudfront:ListTagsForResource",\n      "ec2:DescribeAddresses",\n      "ec2:DescribeImages",\n      "ec2:DescribeInstanceAttribute",\n      "ec2:DescribeInstances",\n      "ec2:DescribeInstanceCreditSpecifications",\n      "ec2:DescribeInternetGateways",\n      "ec2:DescribeKeyPairs",\n      "ec2:DescribeNetworkAcls",\n      "ec2:DescribeRouteTables",\n      "ec2:DescribeSecurityGroups",\n      "ec2:DescribeSnapshots",\n      "ec2:DescribeTags",\n      "ec2:DescribeVolumes",\n      "ec2:DescribeVpcs",\n      "ec2:DescribeVpcAttribute",\n      "ec2:DescribeVpcClassicLink",\n      "ec2:DescribeVpcClassicLinkDnsSupport",\n      "ec2:DescribeSubnets",\n      "ec2:DescribeNatGateways",\n      "ecr:DescribeRepositories",\n      "ecr:ListTagsForResource",\n      "iam:GetPolicy",\n      "iam:GetPolicyVersion",\n      "iam:GetRole",\n      "iam:GetRolePolicy",\n      "iam:GetUser",\n      "iam:GetUserPolicy",\n      "iam:ListAccessKeys",\n      "iam:ListAttachedRolePolicies",\n      "iam:ListAttachedUserPolicies",\n      "iam:ListPolicies",\n      "iam:ListRolePolicies",\n      "iam:ListRoles",\n      "iam:ListUserPolicies",\n      "iam:ListUsers",\n      "kms:DescribeKey",\n      "kms:GetKeyPolicy",\n      "kms:GetKeyRotationStatus",\n      "kms:ListAliases",\n      "kms:ListKeys",\n      "kms:ListResourceTags",\n      "lambda:GetEventSourceMapping",\n      "lambda:GetFunction",\n      "lambda:GetFunctionCodeSigningConfig",\n      "lambda:ListEventSourceMappings",\n      "lambda:ListFunctions",\n      "lambda:ListVersionsByFunction",\n      "rds:DescribeDBInstances",\n      "rds:DescribeDBSubnetGroups",\n      "rds:ListTagsForResource",\n      "route53:GetHostedZone",\n      "route53:ListHostedZones",\n      "route53:ListResourceRecordSets",\n      "route53:ListTagsForResource",\n      "route53:ListHealthChecks",\n      "route53:GetHealthCheck",\n      "s3:GetAccelerateConfiguration",\n      "s3:GetAnalyticsConfiguration",\n      "s3:GetBucketAcl",\n      "s3:GetBucketCORS",\n      "s3:GetBucketLocation",\n      "s3:GetBucketLogging",\n      "s3:GetBucketNotification",\n      "s3:GetBucketObjectLockConfiguration",\n      "s3:GetBucketPolicy",\n      "s3:GetBucketRequestPayment",\n      "s3:GetBucketTagging",\n      "s3:GetBucketVersioning",\n      "s3:GetBucketWebsite",\n      "s3:GetEncryptionConfiguration",\n      "s3:GetInventoryConfiguration",\n      "s3:GetLifecycleConfiguration",\n      "s3:GetMetricsConfiguration",\n      "s3:GetReplicationConfiguration",\n      "s3:ListAllMyBuckets",\n      "s3:ListBucket",\n      "sqs:GetQueueAttributes",\n      "sqs:ListQueueTags",\n      "sqs:ListQueues",\n      "sns:ListTopics",\n      "sns:GetTopicAttributes",\n      "sns:ListTagsForResource",\n      "sns:ListSubscriptions",\n      "sns:ListSubscriptionsByTopic",\n      "sns:GetSubscriptionAttributes",\n      "dynamodb:ListTables",\n      "dynamodb:DescribeTable",\n      "dynamodb:DescribeGlobalTable",\n      "dynamodb:ListTagsOfResource",\n      "dynamodb:DescribeTimeToLive",\n      "dynamodb:DescribeTableReplicaAutoScaling",\n      "dynamodb:DescribeContinuousBackups"\n    ]\n    resources = ["*"]\n  }\n}\n\nresource "aws_iam_role" "driftctl_assume_role" {\n  name = "driftctl_assume_role"\n  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json\n}\n\nresource "aws_iam_role_policy" "driftctl_policy" {\n  name = "driftctl_policy"\n  role = aws_iam_role.driftctl_assume_role.id\n  policy = data.aws_iam_policy_document.policy.json\n}\n')),(0,o.kt)("h2",{id:"cloudformation-template"},"CloudFormation template"),(0,o.kt)("p",null,"Deploy this CloudFormation template to create our limited permission role that you can use as per our above authentication guide."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/quickcreate?stackName=driftctl-stack&templateURL=https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml"},(0,o.kt)("img",{parentName:"a",src:"https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg",alt:"Launch Stack"}))),(0,o.kt)("p",null,"Once the stack is deployed, you need to attach the following policy to your IAM User which will allow him to assume only the role. For more information about granting a user access to assume a role, see the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html"},"IAM User Guide"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "sts:AssumeRole",\n      "Resource": "arn:aws:iam::<IDOFYOURACCOUNT>:role/driftctl_assume_role"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"update-the-cloudformation-template"},"Update the CloudFormation template"),(0,o.kt)("p",null,"It does not exist an automatic way to update the CloudFormation template from our side because you launched this template on your AWS account. That's why you must be the one to update the template to be on the most recent driftctl role."),(0,o.kt)("p",null,"Find below two ways to update the CloudFormation template:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"With the AWS console")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/cloudformation"},"AWS CloudFormation console"),", from the list of stacks, select the driftctl stack"),(0,o.kt)("li",{parentName:"ul"},"In the stack details pane, choose ",(0,o.kt)("strong",{parentName:"li"},"Update")),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Replace current template")," and specify our ",(0,o.kt)("strong",{parentName:"li"},"Amazon S3 URL")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml"),", click ",(0,o.kt)("strong",{parentName:"li"},"Next")),(0,o.kt)("li",{parentName:"ul"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Specify stack details")," and the ",(0,o.kt)("strong",{parentName:"li"},"Configure stack options")," pages, click ",(0,o.kt)("strong",{parentName:"li"},"Next")),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Change set preview")," section, check that AWS CloudFormation will indeed make changes"),(0,o.kt)("li",{parentName:"ul"},"Since our template contains one IAM resource, select ",(0,o.kt)("strong",{parentName:"li"},"I acknowledge that this template may create IAM resources")),(0,o.kt)("li",{parentName:"ul"},"Finally, click ",(0,o.kt)("strong",{parentName:"li"},"Update stack"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"With the AWS CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ aws cloudformation update-stack --stack-name DRIFTCTL_STACK_NAME --template-url https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml --capabilities CAPABILITY_NAMED_IAM\n")),(0,o.kt)("h2",{id:"least-privileged-policy"},"Least privileged policy"),(0,o.kt)("p",null,"driftctl needs access to your cloud provider account so that it can list resources on your behalf."),(0,o.kt)("p",null,"As AWS documentation recommends, the below policy is granting only the permissions required to perform driftctl's tasks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Resource": "*",\n            "Action": [\n                "cloudfront:GetDistribution",\n                "cloudfront:ListDistributions",\n                "cloudfront:ListTagsForResource",\n                "ec2:DescribeAddresses",\n                "ec2:DescribeImages",\n                "ec2:DescribeInstanceAttribute",\n                "ec2:DescribeInstances",\n                "ec2:DescribeInstanceCreditSpecifications",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeNetworkAcls",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeSnapshots",\n                "ec2:DescribeTags",\n                "ec2:DescribeVolumes",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeVpcAttribute",\n                "ec2:DescribeVpcClassicLink",\n                "ec2:DescribeVpcClassicLinkDnsSupport",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeNatGateways",\n                "ecr:DescribeRepositories",\n                "ecr:ListTagsForResource",\n                "iam:GetPolicy",\n                "iam:GetPolicyVersion",\n                "iam:GetRole",\n                "iam:GetRolePolicy",\n                "iam:GetUser",\n                "iam:GetUserPolicy",\n                "iam:ListAccessKeys",\n                "iam:ListAttachedRolePolicies",\n                "iam:ListAttachedUserPolicies",\n                "iam:ListPolicies",\n                "iam:ListRolePolicies",\n                "iam:ListRoles",\n                "iam:ListUserPolicies",\n                "iam:ListUsers",\n                "kms:DescribeKey",\n                "kms:GetKeyPolicy",\n                "kms:GetKeyRotationStatus",\n                "kms:ListAliases",\n                "kms:ListKeys",\n                "kms:ListResourceTags",\n                "lambda:GetEventSourceMapping",\n                "lambda:GetFunction",\n                "lambda:GetFunctionCodeSigningConfig",\n                "lambda:ListEventSourceMappings",\n                "lambda:ListFunctions",\n                "lambda:ListVersionsByFunction",\n                "rds:DescribeDBInstances",\n                "rds:DescribeDBSubnetGroups",\n                "rds:ListTagsForResource",\n                "route53:GetHostedZone",\n                "route53:ListHostedZones",\n                "route53:ListResourceRecordSets",\n                "route53:ListTagsForResource",\n                "route53:ListHealthChecks",\n                "route53:GetHealthCheck",\n                "s3:GetAccelerateConfiguration",\n                "s3:GetAnalyticsConfiguration",\n                "s3:GetBucketAcl",\n                "s3:GetBucketCORS",\n                "s3:GetBucketLocation",\n                "s3:GetBucketLogging",\n                "s3:GetBucketNotification",\n                "s3:GetBucketObjectLockConfiguration",\n                "s3:GetBucketPolicy",\n                "s3:GetBucketRequestPayment",\n                "s3:GetBucketTagging",\n                "s3:GetBucketVersioning",\n                "s3:GetBucketWebsite",\n                "s3:GetEncryptionConfiguration",\n                "s3:GetInventoryConfiguration",\n                "s3:GetLifecycleConfiguration",\n                "s3:GetMetricsConfiguration",\n                "s3:GetReplicationConfiguration",\n                "s3:ListAllMyBuckets",\n                "s3:ListBucket",\n                "sqs:GetQueueAttributes",\n                "sqs:ListQueueTags",\n                "sqs:ListQueues",\n                "sns:ListTopics",\n                "sns:GetTopicAttributes",\n                "sns:ListTagsForResource",\n                "sns:ListSubscriptions",\n                "sns:ListSubscriptionsByTopic",\n                "sns:GetSubscriptionAttributes",\n                "dynamodb:ListTables",\n                "dynamodb:DescribeTable",\n                "dynamodb:DescribeGlobalTable",\n                "dynamodb:ListTagsOfResource",\n                "dynamodb:DescribeTimeToLive",\n                "dynamodb:DescribeTableReplicaAutoScaling",\n                "dynamodb:DescribeContinuousBackups"\n            ]\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);