"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16127],{67271:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(74848),i=s(28453);const o={id:"authentication",title:"Authentication"},c=void 0,a={id:"providers/aws/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use credentials and configuration settings declared as user environment variables, or in local AWS configuration files.",source:"@site/versioned_docs/version-0.31.0/providers/aws/authentication.mdx",sourceDirName:"providers/aws",slug:"/providers/aws/authentication",permalink:"/0.31.0/providers/aws/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.31.0/providers/aws/authentication.mdx",tags:[],version:"0.31.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Log level",permalink:"/0.31.0/usage/log-level"},next:{title:"Supported Resources",permalink:"/0.31.0/providers/aws/resources"}},r={},l=[{value:"Custom credentials to read a state on an S3 backend",id:"custom-credentials-to-read-a-state-on-an-s3-backend",level:2},{value:"Terraform custom role",id:"terraform-custom-role",level:2},{value:"CloudFormation template",id:"cloudformation-template",level:2},{value:"Update the CloudFormation template",id:"update-the-cloudformation-template",level:3},{value:"Least privileged policy",id:"least-privileged-policy",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",children:"credentials and configuration"})," settings declared as user environment variables, or in local AWS configuration files."]}),"\n",(0,n.jsxs)(t.p,{children:["driftctl supports ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html",children:"named profile"}),". By default, the CLI uses the settings found in the profile named ",(0,n.jsx)(t.code,{children:"default"}),". You can override an individual setting by declaring the supported environment variables such as ",(0,n.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"}),", ",(0,n.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"}),", ",(0,n.jsx)(t.code,{children:"AWS_PROFILE"})," ..."]}),"\n",(0,n.jsxs)(t.p,{children:["If you are using an ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-role.html",children:"IAM role"})," as an authorization tool, which is considered a good practice, please be aware that you can still use driftctl by defining a profile for the role in your ",(0,n.jsx)(t.code,{children:"~/.aws/config"})," file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"[profile driftctlrole]\nrole_arn = arn:aws:iam::123456789012:role/<NAMEOFTHEROLE>\nsource_profile = user # profile to assume the role\nregion = eu-west-3\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can now use driftctl by overriding the profile setting."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ AWS_PROFILE=driftctlrole driftctl scan\n"})}),"\n",(0,n.jsx)(t.h2,{id:"custom-credentials-to-read-a-state-on-an-s3-backend",children:"Custom credentials to read a state on an S3 backend"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use a different set of AWS credentials to read your state on S3, you can override each specific AWS environment variable with the ",(0,n.jsx)(t.code,{children:"DCTL_S3_"})," prefix. The purpose here is to have the choice to read a state in a different region than your infrastructure. Please don't forget to use your usual AWS credentials to read the resources of your actual infrastructure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'# Export a dedicated AWS named profile (or any other AWS environment variables) to read your state in your S3 backend\n$ export DCTL_S3_PROFILE="s3reader"\n# Export the usual driftctl AWS named profile\n$ export AWS_PROFILE="driftctlrole"\n$ driftctl scan --from tfstate+s3://mybucket/terraform.tfstate\n\n# You can also use a specific region to authenticate to the S3 bucket\n$ DCTL_S3_REGION=us-east-1 driftctl scan --from tfstate+s3://mybucket/terraform.tfstate\n'})}),"\n",(0,n.jsx)(t.h2,{id:"terraform-custom-role",children:"Terraform custom role"}),"\n",(0,n.jsx)(t.p,{children:"You will find below our custom role that you can assume to run driftctl written in HCL."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hcl",children:'data "aws_caller_identity" "current" {}\n\ndata "aws_iam_policy_document" "assume_role_policy" {\n  statement {\n    effect = "Allow"\n    actions   = ["sts:AssumeRole"]\n    principals {\n      type        = "AWS"\n      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]\n    }\n  }\n}\n\ndata "aws_iam_policy_document" "policy" {\n  statement {\n    effect = "Allow"\n    actions   = [\n      "apigateway:GET",\n      "cloudformation:DescribeStacks",\n      "cloudformation:GetTemplate",\n      "cloudfront:GetDistribution",\n      "cloudfront:ListDistributions",\n      "cloudfront:ListTagsForResource",\n      "ec2:DescribeAddresses",\n      "ec2:DescribeImages",\n      "ec2:DescribeInstanceAttribute",\n      "ec2:DescribeInstances",\n      "ec2:DescribeInstanceCreditSpecifications",\n      "ec2:DescribeInternetGateways",\n      "ec2:DescribeKeyPairs",\n      "ec2:DescribeNetworkAcls",\n      "ec2:DescribeRouteTables",\n      "ec2:DescribeSecurityGroups",\n      "ec2:DescribeSnapshots",\n      "ec2:DescribeTags",\n      "ec2:DescribeVolumes",\n      "ec2:DescribeVpcs",\n      "ec2:DescribeVpcAttribute",\n      "ec2:DescribeVpcClassicLink",\n      "ec2:DescribeVpcClassicLinkDnsSupport",\n      "ec2:DescribeSubnets",\n      "ec2:DescribeNatGateways",\n      "ec2:DescribeLaunchTemplates",\n      "ec2:GetEbsEncryptionByDefault",\n      "ecr:DescribeRepositories",\n      "ecr:ListTagsForResource",\n      "elasticache:DescribeCacheClusters",\n      "iam:GetPolicy",\n      "iam:GetPolicyVersion",\n      "iam:GetRole",\n      "iam:GetRolePolicy",\n      "iam:GetUser",\n      "iam:GetUserPolicy",\n      "iam:ListAccessKeys",\n      "iam:ListAttachedRolePolicies",\n      "iam:ListAttachedUserPolicies",\n      "iam:ListPolicies",\n      "iam:ListRolePolicies",\n      "iam:ListRoles",\n      "iam:ListUserPolicies",\n      "iam:ListUsers",\n      "iam:ListGroups",\n      "iam:ListGroupPolicies",\n      "kms:DescribeKey",\n      "kms:GetKeyPolicy",\n      "kms:GetKeyRotationStatus",\n      "kms:ListAliases",\n      "kms:ListKeys",\n      "kms:ListResourceTags",\n      "lambda:GetEventSourceMapping",\n      "lambda:GetFunction",\n      "lambda:GetFunctionCodeSigningConfig",\n      "lambda:ListEventSourceMappings",\n      "lambda:ListFunctions",\n      "lambda:ListVersionsByFunction",\n      "rds:DescribeDBInstances",\n      "rds:DescribeDBSubnetGroups",\n      "rds:ListTagsForResource",\n      "route53:GetHostedZone",\n      "route53:ListHostedZones",\n      "route53:ListResourceRecordSets",\n      "route53:ListTagsForResource",\n      "route53:ListHealthChecks",\n      "route53:GetHealthCheck",\n      "s3:GetAccelerateConfiguration",\n      "s3:GetAnalyticsConfiguration",\n      "s3:GetBucketAcl",\n      "s3:GetBucketCORS",\n      "s3:GetBucketLocation",\n      "s3:GetBucketLogging",\n      "s3:GetBucketNotification",\n      "s3:GetBucketObjectLockConfiguration",\n      "s3:GetBucketPolicy",\n      "s3:GetBucketRequestPayment",\n      "s3:GetBucketTagging",\n      "s3:GetBucketVersioning",\n      "s3:GetBucketWebsite",\n      "s3:GetEncryptionConfiguration",\n      "s3:GetInventoryConfiguration",\n      "s3:GetLifecycleConfiguration",\n      "s3:GetMetricsConfiguration",\n      "s3:GetReplicationConfiguration",\n      "s3:ListAllMyBuckets",\n      "s3:ListBucket",\n      "s3:GetBucketPublicAccessBlock",\n      "sqs:GetQueueAttributes",\n      "sqs:ListQueueTags",\n      "sqs:ListQueues",\n      "sns:ListTopics",\n      "sns:GetTopicAttributes",\n      "sns:ListTagsForResource",\n      "sns:ListSubscriptions",\n      "sns:ListSubscriptionsByTopic",\n      "sns:GetSubscriptionAttributes",\n      "dynamodb:ListTables",\n      "dynamodb:DescribeTable",\n      "dynamodb:DescribeGlobalTable",\n      "dynamodb:ListTagsOfResource",\n      "dynamodb:DescribeTimeToLive",\n      "dynamodb:DescribeTableReplicaAutoScaling",\n      "dynamodb:DescribeContinuousBackups",\n      "rds:DescribeDBClusters",\n      "rds:DescribeGlobalClusters",\n      "application-autoscaling:DescribeScheduledActions",\n      "autoscaling:DescribeLaunchConfigurations",\n      "elasticloadbalancing:DescribeLoadBalancers",\n      "elasticloadbalancing:DescribeListeners"\n    ]\n    resources = ["*"]\n  }\n}\n\nresource "aws_iam_role" "driftctl_assume_role" {\n  name = "driftctl_assume_role"\n  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json\n}\n\nresource "aws_iam_role_policy" "driftctl_policy" {\n  name = "driftctl_policy"\n  role = aws_iam_role.driftctl_assume_role.id\n  policy = data.aws_iam_policy_document.policy.json\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"cloudformation-template",children:"CloudFormation template"}),"\n",(0,n.jsx)(t.p,{children:"Deploy this CloudFormation template to create our limited permission role that you can use as per our above authentication guide."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/quickcreate?stackName=driftctl-stack&templateURL=https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml",children:(0,n.jsx)(t.img,{src:"https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg",alt:"Launch Stack"})})}),"\n",(0,n.jsxs)(t.p,{children:["Once the stack is deployed, you need to attach the following policy to your IAM User which will allow him to assume only the role. For more information about granting a user access to assume a role, see the official ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html",children:"IAM User Guide"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "sts:AssumeRole",\n      "Resource": "arn:aws:iam::<IDOFYOURACCOUNT>:role/driftctl_assume_role"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"update-the-cloudformation-template",children:"Update the CloudFormation template"}),"\n",(0,n.jsx)(t.p,{children:"It does not exist an automatic way to update the CloudFormation template from our side because you launched this template on your AWS account. That's why you must be the one to update the template to be on the most recent driftctl role."}),"\n",(0,n.jsx)(t.p,{children:"Find below two ways to update the CloudFormation template:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"With the AWS console"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.a,{href:"https://console.aws.amazon.com/cloudformation",children:"AWS CloudFormation console"}),", from the list of stacks, select the driftctl stack"]}),"\n",(0,n.jsxs)(t.li,{children:["In the stack details pane, choose ",(0,n.jsx)(t.strong,{children:"Update"})]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Replace current template"})," and specify our ",(0,n.jsx)(t.strong,{children:"Amazon S3 URL"})," ",(0,n.jsx)(t.code,{children:"https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml"}),", click ",(0,n.jsx)(t.strong,{children:"Next"})]}),"\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"Specify stack details"})," and the ",(0,n.jsx)(t.strong,{children:"Configure stack options"})," pages, click ",(0,n.jsx)(t.strong,{children:"Next"})]}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"Change set preview"})," section, check that AWS CloudFormation will indeed make changes"]}),"\n",(0,n.jsxs)(t.li,{children:["Since our template contains one IAM resource, select ",(0,n.jsx)(t.strong,{children:"I acknowledge that this template may create IAM resources"})]}),"\n",(0,n.jsxs)(t.li,{children:["Finally, click ",(0,n.jsx)(t.strong,{children:"Update stack"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"With the AWS CLI"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ aws cloudformation update-stack --stack-name DRIFTCTL_STACK_NAME --template-url https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml --capabilities CAPABILITY_NAMED_IAM\n"})}),"\n",(0,n.jsx)(t.h2,{id:"least-privileged-policy",children:"Least privileged policy"}),"\n",(0,n.jsx)(t.p,{children:"driftctl needs access to your cloud provider account so that it can list resources on your behalf."}),"\n",(0,n.jsx)(t.p,{children:"As AWS documentation recommends, the below policy is granting only the permissions required to perform driftctl's tasks."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Resource": "*",\n            "Action": [\n                "apigateway:GET",\n                "cloudformation:DescribeStacks",\n                "cloudformation:GetTemplate",\n                "cloudfront:GetDistribution",\n                "cloudfront:ListDistributions",\n                "cloudfront:ListTagsForResource",\n                "ec2:DescribeAddresses",\n                "ec2:DescribeImages",\n                "ec2:DescribeInstanceAttribute",\n                "ec2:DescribeInstances",\n                "ec2:DescribeInstanceCreditSpecifications",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeNetworkAcls",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeSnapshots",\n                "ec2:DescribeTags",\n                "ec2:DescribeVolumes",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeVpcAttribute",\n                "ec2:DescribeVpcClassicLink",\n                "ec2:DescribeVpcClassicLinkDnsSupport",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeNatGateways",\n                "ec2:DescribeLaunchTemplates",\n                "ec2:GetEbsEncryptionByDefault",\n                "ecr:DescribeRepositories",\n                "ecr:ListTagsForResource",\n                "elasticache:DescribeCacheClusters",\n                "iam:GetPolicy",\n                "iam:GetPolicyVersion",\n                "iam:GetRole",\n                "iam:GetRolePolicy",\n                "iam:GetUser",\n                "iam:GetUserPolicy",\n                "iam:ListAccessKeys",\n                "iam:ListAttachedRolePolicies",\n                "iam:ListAttachedUserPolicies",\n                "iam:ListPolicies",\n                "iam:ListRolePolicies",\n                "iam:ListRoles",\n                "iam:ListUserPolicies",\n                "iam:ListUsers",\n                "iam:ListGroups",\n                "iam:ListGroupPolicies",\n                "kms:DescribeKey",\n                "kms:GetKeyPolicy",\n                "kms:GetKeyRotationStatus",\n                "kms:ListAliases",\n                "kms:ListKeys",\n                "kms:ListResourceTags",\n                "lambda:GetEventSourceMapping",\n                "lambda:GetFunction",\n                "lambda:GetFunctionCodeSigningConfig",\n                "lambda:ListEventSourceMappings",\n                "lambda:ListFunctions",\n                "lambda:ListVersionsByFunction",\n                "rds:DescribeDBInstances",\n                "rds:DescribeDBSubnetGroups",\n                "rds:ListTagsForResource",\n                "route53:GetHostedZone",\n                "route53:ListHostedZones",\n                "route53:ListResourceRecordSets",\n                "route53:ListTagsForResource",\n                "route53:ListHealthChecks",\n                "route53:GetHealthCheck",\n                "s3:GetAccelerateConfiguration",\n                "s3:GetAnalyticsConfiguration",\n                "s3:GetBucketAcl",\n                "s3:GetBucketCORS",\n                "s3:GetBucketLocation",\n                "s3:GetBucketLogging",\n                "s3:GetBucketNotification",\n                "s3:GetBucketObjectLockConfiguration",\n                "s3:GetBucketPolicy",\n                "s3:GetBucketRequestPayment",\n                "s3:GetBucketTagging",\n                "s3:GetBucketVersioning",\n                "s3:GetBucketWebsite",\n                "s3:GetEncryptionConfiguration",\n                "s3:GetInventoryConfiguration",\n                "s3:GetLifecycleConfiguration",\n                "s3:GetMetricsConfiguration",\n                "s3:GetReplicationConfiguration",\n                "s3:ListAllMyBuckets",\n                "s3:ListBucket",\n                "s3:GetBucketPublicAccessBlock",\n                "sqs:GetQueueAttributes",\n                "sqs:ListQueueTags",\n                "sqs:ListQueues",\n                "sns:ListTopics",\n                "sns:GetTopicAttributes",\n                "sns:ListTagsForResource",\n                "sns:ListSubscriptions",\n                "sns:ListSubscriptionsByTopic",\n                "sns:GetSubscriptionAttributes",\n                "dynamodb:ListTables",\n                "dynamodb:DescribeTable",\n                "dynamodb:DescribeGlobalTable",\n                "dynamodb:ListTagsOfResource",\n                "dynamodb:DescribeTimeToLive",\n                "dynamodb:DescribeTableReplicaAutoScaling",\n                "dynamodb:DescribeContinuousBackups",\n                "rds:DescribeDBClusters",\n                "rds:DescribeGlobalClusters",\n                "application-autoscaling:DescribeScalableTargets",\n                "application-autoscaling:DescribeScalingPolicies",\n                "application-autoscaling:DescribeScheduledActions",\n                "autoscaling:DescribeLaunchConfigurations",\n                "elasticloadbalancing:DescribeLoadBalancers",\n                "elasticloadbalancing:DescribeListeners"\n            ]\n        }\n    ]\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);