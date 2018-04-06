const config = {
  head: {
    title: 'Nuxt.js Serverless Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Serverless Project' },
    ],
  },
  srcDir: 'src/',
  render: {
    etag: false,
    // Disabled gzip compression
    gzip: { threshold: 1073741824 },
  },
}

// 'webpack-s3-plugin' doesn't packaged in lambda function
if (process.env.NODE_ENV !== 'production') {
  const WebpackS3Plugin = require('webpack-s3-plugin')
  const awsConfig = require('./aws.config')
  config.build = {
    extractCSS: true,
    publicPath: awsConfig.cloudfrontUrl,
    plugins: [
      new WebpackS3Plugin({
        s3Options: {
          accessKeyId: awsConfig.accessKeyId,
          secretAccessKey: awsConfig.secretAccessKey,
          region: awsConfig.region,
        },
        s3UploadOptions: {
          Bucket: awsConfig.s3BucketName,
        },
        cloudfrontInvalidateOptions: {
          DistributionId: awsConfig.cloudfrontDistributionId,
          Items: ["/*"],
        },
      }),
    ],
  }
}

module.exports = config