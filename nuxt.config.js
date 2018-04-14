/* eslint no-param-reassign: 0, max-len: 0 */

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const yaml = require('require-yml');

const serverlessConfig = yaml('./serverless.yml');
const awsRegion = serverlessConfig.provider.region;
const awsS3AssetsBucketName = serverlessConfig.resources.Resources.AssetsBucket.Properties.BucketName;

module.exports = {
  srcDir: 'src/',
  head: {
    title: 'Nuxt Edge Serverless Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt-edge Serverless Template' },
    ],
  },
  loading: { color: '#51cf66' },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],
  extensions: ['js', 'ts'],
  serverMiddleware: [
    bodyParser(),
    cookieParser(),
  ],
  apollo: { clientConfigs: { default: '~/apollo/clientConfigs/default.js' } },
  build: {
    extractCSS: true,
    publicPath: `https://s3.${awsRegion}.amazonaws.com/${awsS3AssetsBucketName}/`,
    extend(config, { isServer }) {
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/],
      };
      config.module.rules.push({ test: /((client|server)\.js)|(\.tsx?)$/, ...tsLoader });
      config.resolve.extensions.push('.ts');
      config.module.rules.map((rule) => {
        if (rule.loader === 'vue-loader') { rule.options.loaders = { ts: tsLoader }; }
        return rule;
      });
      if (isServer) { config.externals = []; }
    },
  },
  render: {
    etag: false,
    // Disabled gzip compression
    gzip: { threshold: 1073741824 },
  },
};
