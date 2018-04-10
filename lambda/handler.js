'use strict';
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./dist/server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: true,
  template: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello</title>
      </head>
      <body>
        <!--vue-ssr-outlet-->
      </body>
    </html>
  `,
  clientManifest,
})

exports.render = (event, context, callback) => {
  renderer.renderToString({ url: event.path }, (err, html) => {
    if (err) { callback(new Error(err), {
      statusCode: 500,
      body: err,
    }) }
    else {
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html',
        },
        body: html,
      })
    }
  })
  // callback(null, {
  //   body: event.path,
  // })
  // try {
  //   const body = await renderer.renderToString({ url: event.path })
  //   callback(null, {
  //     statusCode: 200,
  //     headers: { 'Content-Type': 'text/html' },
  //     body,
  //   })
  // } catch (err) {
  //   callback(new Error(err))
  // }
}
