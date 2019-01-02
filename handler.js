const { Nuxt } = require('nuxt')
const serverless = require('serverless-http')
const express = require('express')
const nuxtConfig = require('./nuxt.config')

const config = {
  ...nuxtConfig,
  dev: false,
}

const nuxt = new Nuxt(config)

const app = express()

app.use('/_nuxt', (req, res) => (
  res.redirect(process.env.ASSETS_BUCKET_URL + req.path)
))

app.use('/static', (req, res) => (
  res.redirect(process.env.STATIC_BUCKET_URL + req.path)
))

app.use((req, res) => (
  setTimeout(() => nuxt.render(req, res), 0)
))

exports.render = serverless(app)
