/**
 * Created by yishuangxi on 2016/2/29.
 */
define(function(require, exports, module){
    console.log('lib 2 init in lib2 ');
    return {
        log:function(msg){
            console.log('this is lib 2 ' + msg);
        }
    }
});