/**
 * Created by yishuangxi on 2016/2/29.
 */
define(function(require, exports, module){
    require('css_lib1');
    require('css_lib2');
    require('../../css/index.css');
    var a = require('./a');
    var lib2 = require('lib2');
    lib2.log(" in module index.js");
    a.log();
    console.log('this is index.js');
});