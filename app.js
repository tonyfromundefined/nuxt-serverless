const express = require('express')
const asyncHandler = require('express-async-handler')
const { Nuxt } = require('nuxt')
const nuxtConfig = require('./nuxt.config')
const api = require('./src/api')

const IS_PROD = process.env.NODE_ENV === 'production'

const app = express()

const nuxt = new Nuxt({
  ...nuxtConfig,
  dev: !IS_PROD,
})

app.use('/static', express.static('./static'))

app.use(api)
app.use(asyncHandler(async (req, res) => {
  if (nuxt.ready) {
    await nuxt.ready()
  }

  nuxt.render(req, res)
}))

module.exports = {
  app,
  nuxt,
}
