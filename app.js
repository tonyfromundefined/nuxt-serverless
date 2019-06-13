const express = require('express')
const asyncify = require('express-asyncify')
const { Nuxt } = require('nuxt')

const nuxtConfig = require('./nuxt.config')
const api = require('./src/api')

const IS_PROD = process.env.NODE_ENV === 'production'

const nuxt = new Nuxt({
  ...nuxtConfig,
  dev: !IS_PROD,
})

let isNuxtReady = false

const app = asyncify(express())

app.use('/static', express.static('./static'))

app.use(api)
app.use(async (req, res) => (isNuxtReady || await nuxt.ready() && (isNuxtReady = true)) && nuxt.render(req, res))

module.exports = {
  app,
  nuxt,
}
