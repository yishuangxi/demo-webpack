/**
 * Created by yishuangxi on 2016/2/29.
 */
define(function(require, exports, module){

    console.log('lib 1 init in lib1');
    return {
        log:function(msg){
            console.log('this is lib 1 ' + msg);
        }
    }
});