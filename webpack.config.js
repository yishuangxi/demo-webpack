/**
 * Created by yishuangxi on 2016/2/29.
 */

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: './js/index/index.js',
        about: './js/about/about.js'
    },
    output: {
        path: 'dist/js',
        filename: '[name].js',
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    },
    resolve: {
        root: "D:/git/demo-webpack",
        alias: {
            lib1: 'lib/lib1.js',
            lib2: 'lib/lib2.js',
            css_lib1: 'lib/lib1.css',
            css_lib2: 'lib/lib2.css'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
        new ExtractTextPlugin("[name].css")
    ]
}