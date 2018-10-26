import express from 'express'
import cookieParser from 'cookie-parser'

export default {
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
    // Disabled gzip compression
    gzip: { threshold: 1073741824 },
  }
}
