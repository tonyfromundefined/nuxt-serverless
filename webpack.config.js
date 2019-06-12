const path = require('path')
const WebpackBarPlugin = require('webpackbar')

module.exports = {
  mode: 'production',
  entry: {
    server: path.resolve(__dirname, './server.js'),
    serverless: path.resolve(__dirname, './serverless.js'),
  },
  output: {
    path: path.resolve(__dirname, './.nuxt/dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: [
    'nuxt',
  ],
  stats: 'errors-only',
  plugins: [
    new WebpackBarPlugin({
      name: 'Serverless',
      color: '#228be6',
    }),
  ],
}
