# 🚀 Nuxt.js SSR on AWS Serverless Stack (Lambda + API Gateway + S3)

Nuxt.js Serverless Server-side Rendering Starter on AWS Serverless Stack (Lambda + API Gateway + S3) with *Serverless Framework*

### Pre-Installed
- Nuxt.js 2.0
- Serverless Framework
- TypeScript
- Sass (SCSS)
- TSLint

If you have a feature request, please create a new issue. And also, pull requests are always welcome🙏

### Caution
- Libraries that are used in the client should be included in the `dependencies` for SSR.
- If you install a `module` for nuxt.js, it must be in a the `dependencies` not `dev-dependencies`
- Auto generated URL `https://*.execute-api.aws-region-name.amazonaws.com/*` will result in a JavaScript error. (routing problem) Please use the Custom Domain
- If you encounter `Cannot GET /` error message, the error log can be founded in the AWS CloudWatch

## Pre-requisites
- 🔑 **IAM Account** for *Serverless framework* (Requires pre-configuration using `aws configure`)

```bash
$ aws configure
```

## Configuration

Edit `serverless.yml`

```yaml
service: nuxt-serverless  # 1. Edit whole service name

provider:
  name: aws
  runtime: nodejs8.10
  stage: ${opt:stage, 'dev'}
  region: ap-northeast-2 # 2. Edit AWS region name
  environment:
    NODE_ENV: production
    BUCKET_NAMESPACE: mybucket  # 3. Specify a new AWS S3 bucket namespace for bundled assets and static assets (should be unique)
    ASSETS_BUCKET_NAME: ${self:provider.environment.BUCKET_NAMESPACE}-assets-${opt:stage, 'dev'}
    STATIC_BUCKET_NAME: ${self:provider.environment.BUCKET_NAMESPACE}-static-${opt:stage, 'dev'}
    ASSETS_BUCKET_URL: https://s3.${self:provider.region}.amazonaws.com/${self:provider.environment.ASSETS_BUCKET_NAME}
    STATIC_BUCKET_URL: https://s3.${self:provider.region}.amazonaws.com/${self:provider.environment.STATIC_BUCKET_NAME}

custom:
  customDomain:
    domainName: service.mydomain.io  # 4. Specify a new domain name to be created
    stage: ${opt:stage, 'dev'}
    certificateName: mydomain.io  # 5. Enter the certificate name in AWS Certificate Manager (us-east-1) for https connection
    createRoute53Record: true
  serverless-offline:
    port: 4000
  s3Sync:
    - bucketName: ${self:provider.environment.ASSETS_BUCKET_NAME}
      localDir: .nuxt/dist/client
    - bucketName: ${self:provider.environment.STATIC_BUCKET_NAME}
      localDir: static
```

## Build Setup

```bash
# Install dependencies
$ npm install

# Serve develop server at localhost:3000 using Nuxt.js
$ npm run dev

# Build
$ npm run build

# Prod server start with built assets
$ npm run start

## SERVERLESS DEPLOYMENT ##
# You must run `yarn sls:create` before `yarn sls:deploy`
# Build assets, Create Domain and S3 Bucket, Deploy the function and bundled assets
$ npm run sls:create

# launch local server with bundled assets and 'serverless-offline' plugin
$ npm run sls:local

# Re-build and deploy the function and bundled assets
$ npm run sls:deploy

# Remove all stacks
# Please do not delete it separately and use this script
$ npm run sls:remove
```

## To-do
- [x] static file serve
- [ ] gzip Compression
- [ ] optimize the lambda capacity (create SSR bundle with no dependencies)
