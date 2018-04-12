'use strict';
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./.nuxt/dist/server-bundle.json')
const clientManifest = require('./.nuxt/dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  template: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
      </head>
      <body>
        <!--vue-ssr-outlet-->
      </body>
    </html>
  `,
  runInNewContext: true,
  clientManifest,
})

exports.render = (event, context, callback) => {
  renderer.renderToString({ url: event.path || '/' }, (err, html) => {
    if (err) { 
      callback(new Error(err), {
        statusCode: 500,
        body: err,
      }) 
    } else {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: html,
      })
    }
  })
}
