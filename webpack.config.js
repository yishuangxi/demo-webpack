/**
 * Created by yishuangxi on 2016/2/29.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    devtool: 'source-map',
    entry: {
        about: 'src/js/about/index.jsx',
        index: 'src/js/index/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")}
        ]
    },
    resolve: {
        root: __dirname,
        alias: {
            lib1: 'src/js/lib/lib1.js',
            lib2: 'src/js/lib/lib2.js',
            css_lib1: 'lib/lib1.css',
            css_lib2: 'lib/lib2.css'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
        new ExtractTextPlugin("[name].css")
    ],
    postcss: function () {
        return [autoprefixer];
    },
    // more options in the optional jshint object
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,
        //
        //// custom reporter function
        //reporter: function(errors) { console.log(errors); }
    }
}