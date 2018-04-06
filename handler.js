'use strict';
const awsServerlessExpress = require('aws-serverless-express')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')

// Initializing nuxt renderer
const config = require('./nuxt.config')
config.dev = false
const nuxt = new Nuxt(config)

// Initializing express application
const app = express()
app.use(nuxt.render)

// Disabled gzip compression
const binaryMimeTypes = []
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)
exports.render = (event, context) => awsServerlessExpress.proxy(server, event, context)
