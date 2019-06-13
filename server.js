const { Builder } = require('nuxt')
const { app, nuxt } = require('./app')

const IS_PROD = process.env.NODE_ENV === 'production'
const PORT = IS_PROD ? 80 : 3000

require('dotenv').config({
  path: `./.env.${IS_PROD ? 'production' : 'development'}`,
});

(async function main() {
  if (!IS_PROD) {
    await new Builder(nuxt).build()
  }

  app.listen(PORT)
})()
