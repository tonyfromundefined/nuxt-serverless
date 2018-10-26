const express = require('express')
const cookieParser = require('cookie-parser')

module.exports = {
  srcDir: 'src',
  head: {
    title: 'Nuxt Serverless Template',
    meta: [
      { chatset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Serverless Template' },
    ],
  },
  extensions: ['js', 'ts'],
  serverMiddleware: [
    express.json(),
    cookieParser(),
  ],
  css: [
    { src: '~/styles/main.scss', lang: 'scss' },
  ],
  build: {
    extend(config, { isServer }) {
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/],
      };
      config.module.rules.push({
        test: /((client|server)\.js)|(\.tsx?)$/,
        ...tsLoader,
      })
      config.resolve.extensions.push('.ts')
      config.module.rules.map((rule) => {
        if (rule.loader === 'vue-loader') {
          rule.options.loaders = { ts: tsLoader }
        }
        return rule
      })
      if (isServer) {
        config.externals = []
      }
    },
  },
  render: {
    etag: false,
    // Disabled compression
    compressor: { threshold: 1073741824 },
  }
}
