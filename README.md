# 🚀 Nuxt.js 2.0 SSR on AWS Serverless Stack (Lambda + API Gateway + S3)

Nuxt.js 2.0 Serverless Server-side Rendering Starter on AWS Serverless Stack (Lambda + API Gateway + S3) with *Serverless Framework*

### Pre-Installed
- Nuxt.js 2.0 (`nuxt-edge`)
- Serverless Framework
- TypeScript
- Sass (SCSS)
- ESLint
- TSLint
- @nuxtjs/axios
- @nuxtjs/apollo

If you have a feature request, please create a new issue. And also, pull requests are always welcome🙏

# Caution
- Libraries that are used only by the server or that are used by both the server and the client should be included in the `dependencies`. To optimize the lambda capacity, make sure that the library used only by the client is included in `dev-dependencies`.
- Auto generated URL `https://*.execute-api.aws-region-name.amazonaws.com/*` will result in a JavaScript error. (routing problem) Please use the Custom Domain

## Pre-requisites
- 🔑 **IAM Account** for *Serverless framework* (Requires pre-configuration using `aws configure`)

```bash
$ aws configure
```

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
        BucketName: "my-s3-bucket" # Specify a new bucket name for client assets

custom:
  ...
  s3Sync:
    - bucketName: "my-s3-bucket" # Retype the bucket name specified above
      localDir: .nuxt/dist
  customDomain:
    domainName: "nuxt.mydomain.com" # Specify a new domain name to be created
    stage: develop
    certificateName: "*.mydomain.com" # Enter the Certicate name with that domain
    createRoute53Record: true
```

## Build Setup

```bash
# Install dependencies
$ yarn

# Serve develop server at localhost:3000 using Nuxt.js
$ yarn dev

# Build
$ yarn build

# Prod server start with built assets
$ yarn start

## SERVERLESS DEPLOYMENT ##
# You must run `yarn sls:create` before `yarn sls:deploy`
# Build assets, Create Domain and S3 Bucket, Deploy the function and bundled assets
$ yarn sls:create

# launch local server with bundled assets and 'serverless-offline' plugin
$ yarn sls:local

# Re-build and deploy the function and bundled assets
$ yarn sls:deploy

# Remove all stacks
# Please do not delete it separately and use this script
$ yarn sls:remove
```

## To-do
- [x] Server-side Bundling
- [x] TypeScript Support
- [x] Nuxt.js 2.0 (`nuxt-edge`) Support
- [x] AWS Assets Automation
- [x] Integrate with express using `serverless-http` (for using `req` in nuxt `context`)
- [x] Sass(SCSS) Support
- [x] @nuxtjs/apollo Support
- [x] @nuxtjs/axios Support
- [x] ESLint, TSLint Support
- [ ] gzip Compression
- [ ] static file serve
