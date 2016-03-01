/**
 * Created by yishuangxi on 2016/3/1.
 */
define(function(require, exports, module){

    require('css_lib2');
    require('css_lib1');
    console.log("about.js start");
    var lib1 = require("lib1");
    var lib2 = require('lib2');

    lib1.log(" in about.js");
    lib2.log(" in about.js");
    console.log("about.js end");
});