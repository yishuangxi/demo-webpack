/**
 * Created by yishuangxi on 2016/2/29.
 */

module.exports = {
    entry:{
        index:'./js/index/index.js',
        lib:['./lib/lib1.js', './lib/lib2.js']
    },
    output:{
        path:'dist/js',
        filename:'[name].js'
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },
    resolve:{
        root:"D:/git/demo-webpack",
        alias:{
            lib1:'lib/lib1.js',
            lib2:'lib/lib2.js',
            css_lib1:'lib/lib1.css'
        }
    }
}