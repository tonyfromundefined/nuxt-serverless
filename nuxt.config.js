const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports = {
  head: {
    title: 'nuxt-serverless',
    meta: [
      { chatset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/static/favicon.png' },
    ],
  },
  srcDir: './src',
  serverMiddleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cookieParser(),
  ],
  build: {
    standalone: true,
  },
  render: {
    etag: false,
    compressor: { threshold: Infinity },
  },
}
