/**
 * Created by yishuangxi on 2016/2/29.
 */
define(function(require, exports, module){
    var b = require('./b');
    var lib1 = require('lib1');
    lib1.log(" in module a");
    return {
        log:function(){
            b.log();
            console.log('a a a');
        }
    }
});