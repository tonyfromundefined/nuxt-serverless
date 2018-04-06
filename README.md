# 🚀 Nuxt.js SSR on AWS Serverless Stack (Lambda + API Gateway + S3)

Nuxt.js Serverless SSR Starter on AWS (Lambda + API Gateway + S3) with *Serverless Framework* 
  
## Pre-requisites
- 🔑 **IAM Account** for *Serverless framework*
- 🛢 **S3 Bucket** for bundled client assets (js, css, ...)
	1. Bucket name
	2. Region  
- 🌏 **CloudFront Distribution** serves files in S3 with `https` protocols
	1. Distribution URL
	2. Distribution ID

## Configuration
Create `aws.config.js` in root folder (`aws.config.example.js` is in the folder)

```js
module.exports = {
  accessKeyId: '',
  secretAccessKey: '',
  region: '',
  s3BucketName: '', // where the bundled assets uploaded
  cloudfrontUrl: '',
  cloudfrontDistributionId: '',
}
```

Edit `provider/region` property in `serverless.yml`

```yaml
provider:
  name: aws
  runtime: nodejs8.10
  stage: dev
  region: ap-northeast-2  # Edit region name
  environment:
    NODE_ENV: production
```

And `AWS-CLI` should be configured  

```bash
$ aws configure
```

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch local server with 'serverless-offline' plugin
$ yarn offline

# build for production and deploy to AWS
$ yarn deploy
```

## To-do
- [ ] gzip Compression
- [ ] Server-side Bundling
- [ ] Server-side Babel Support
- [ ] TypeScript Support
- [ ] Nuxt.js 2.0 (`nuxt-edge`) Support
