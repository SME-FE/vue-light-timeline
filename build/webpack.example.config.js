
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './example/index.js',
    libs: [
      'vue'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader?'
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: [/_cache/]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      inject: true,
      template: path.resolve(__dirname, '../example/index.html'),
      chunks: ['libs', 'main']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    compress: true,
    port: 8080
  }
}
