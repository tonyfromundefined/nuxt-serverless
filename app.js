const express = require('express')
const { Nuxt } = require('nuxt')
const nuxtConfig = require('./nuxt.config')

const IS_PROD = process.env.NODE_ENV === 'production'

const app = express()

const nuxt = new Nuxt({
  ...nuxtConfig,
  dev: !IS_PROD,
})

app.use(nuxt.render)

module.exports = {
  app,
  nuxt,
}
