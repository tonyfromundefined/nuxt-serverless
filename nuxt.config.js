const yaml = require('require-yml')
const serverlessConfig = yaml('./serverless.yml')
const awsRegion = serverlessConfig.provider.region
const awsS3BucketName = serverlessConfig.resources.Resources.AssetsBucket.Properties.BucketName

module.exports = {
  srcDir: 'src/',
  head: {},
  loading: { color: '#51cf66' },
  extensions: ['js', 'ts'],
  build: {
    extractCSS: true,
    publicPath: `https://s3.${awsRegion}.amazonaws.com/${awsS3BucketName}/`,
    extend(config, { isServer }) {
      const tsLoader = {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
        exclude: [
          /vendor/,
          /\.nuxt/,
        ],
      }
      config.module.rules.push({
        test: /((client|server)\.js)|(\.tsx?)$/,
        ...tsLoader,
      })
      config.resolve.extensions.push('.ts')
      config.module.rules.map((rule) => {
        if (rule.loader === 'vue-loader') {
          rule.options.loaders = {
            ts: tsLoader,
          }
        }
      })
      if (isServer) {
        config.externals = []
      }
    },
  },
  render: {
    etag: false,
    // Disabled gzip compression
    gzip: { threshold: 1073741824 },
  }
}
