const path = require('path');
const webpack = require('webpack');
const slsw = require('serverless-webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'handler.js',
    library: 'nuxt-renderer-bundle',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [],
  },
  externals: [
    'vue-server-renderer',
  ],
  plugins: [
    new ProgressBarPlugin(),
  ],
};
