# 🚀 Nuxt.js SSR on AWS Serverless Stack (Lambda + API Gateway + S3)

Nuxt.js Serverless SSR Starter on AWS (Lambda + API Gateway + S3) with *Serverless Framework* 
  
## Pre-requisites
- 🔑 **IAM Account** for *Serverless framework* (Requires pre-configuration using `aws configure`)

```bash
$ aws configure
```

> API Gateway addresses generated via CloudFront will result in a JavaScript error. (stage routing problem) Please test by attaching Custom Domain

## Configuration

Edit `serverless.yml`

```yaml
service: "nuxt-edge-serverless-template" # Edit service name

provider:
  name: aws
  runtime: nodejs8.10
  stage: develop
  region: ap-northeast-2  # Edit region name
  environment:
    NODE_ENV: production

resources:
  Resources:
    AssetsBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: "assets.erion.io" # Specify a new bucket name for client assets

custom:
  ...
  s3Sync:
    - bucketName: "assets.erion.io" # Retype the bucket name specified above
      localDir: .nuxt/dist
  customDomain:
    domainName: "dev.erion.io" # Specify a new domain name to be created
    stage: develop
    certificateName: "erion.kr" # Enter the Certicate name with that domain
    createRoute53Record: true
```

## Build Setup

```bash
# Install dependencies
$ yarn

# Serve develop server at localhost:3000 using Nuxt.js
$ yarn dev

# Create Domain and S3 Bucket and Deploy bundled assets
$ yarn create

# build for production and launch local server with 'serverless-offline' plugin
$ yarn offline

# Re-build and deploy assets
$ yarn deploy

# Remove all serverless stacks
$ yarn remove
```

## To-do
- [ ] gzip Compression
- [x] Server-side Bundling
- [x] TypeScript Support
- [x] Nuxt.js 2.0 (`nuxt-edge`) Support
- [x] AWS Assets Automation
- [ ] CDN (CloudFront) Support
- [ ] Optimize Configuration
- [ ] ESLint, TSLint Support
