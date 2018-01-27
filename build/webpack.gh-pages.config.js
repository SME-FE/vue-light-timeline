const webpack = require('webpack')
const merge = require('webpack-merge')
const example = require('./webpack.example.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(example, {
  devtool: 'none',
  output: {
    publicPath: '/vue-light-timeline/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('gh')
      }
    }),
    new ExtractTextPlugin('style.css'),
    new UglifyJSPlugin()
  ]
})
