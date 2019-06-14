const awsServerlessExpress = require('aws-serverless-express')
const { app } = require('./app')

const BINARY_MIME_TYPES = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
]

const server = awsServerlessExpress.createServer(app, null, BINARY_MIME_TYPES)
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
