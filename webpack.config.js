var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: ['./apps/app.js'],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath:'/static/'
  },

  devServer: {
    inline: true,
    port: 8888
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react','stage-0']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }

};


module.exports = config;