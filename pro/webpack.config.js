/**
 * Created by lenovo on 2016/4/30.
 */
// var path = require('path');
// var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//   entry: {
//     index: './src/js/page/index.js'
//   },
//
//   output: {
//     path: path.join(__dirname, 'dist'),
//     publicPath: '/c/Users/lenovo/git/webpack-demo/pro/dist',
//     filename: 'js/[name].js',
//     chunkFilename: 'js/[id].chunk.js'
//   },
//
//   module: {
//     loaders: [
//       { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
//     ],
//     plugins: [
//       new ExtractTextPlugin('style.css'),
//       new HtmlWebpackPlugin({
//         // favicon: './src/img/favicon.ico',
//         filename: '/views/index.html',
//         template: './src/view/index.html',
//         inject: true,
//         hash: true,
//         minify: {
//           removeComments: true,
//           collapseWhitespace: false
//         }
//       })
//     ]
//   }
// }

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/page/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash:8].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name]-[chunkhash:8].css"),
    new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
      // favicon: './src/img/favicon.ico', //favicon路径
      filename: '/view/index.html',    //生成的html存放路径，相对于 path
      template: './src/view/index.html',    //html模板路径
      inject: true,    //允许插件修改哪些内容，包括head与body
      hash: true,    //为静态资源生成hash值
      minify: {    //压缩HTML文件
        removeComments: true,    //移除HTML中的注释
        collapseWhitespace: false    //删除空白符与换行符
      }
    })
  ]
}