/**
 * Created by xiaoguo0426 on 2016/8/22.
 * 定义js文件的路径，在需要的时候调用加载就可以了
 */
var require_config = requirejs.s.contexts._.config;

requirejs.config({
    urlArgs: "v=" +  (new Date()).getTime(),//禁用缓存，上线后去掉
    baseUrl: (typeof require_config.cdnUrl !== 'undefined') ? require_config.cdnUrl : 'js/',
    paths: {
        "jquery": "jquery",
        "bootstrap": "bootstrap",
        "metisMenu": "plugins/metisMenu/jquery.metisMenu",
        "slimscroll": "plugins/slimscroll/jquery.slimscroll",
        "flot":"plugins/flot/jquery.flot",
        "inspinia":"inspinia",
        "pace":"plugins/pace/pace.min"
    },
    shim:{
        "bootstrap":"jquery",
        "metisMenu":"jquery",
        "slimscroll":{
            deps:["jquery"],
            deports:'slimscroll'
        },
        "flot":{
            deps:["jquery"],
            deports:'flot'
        },
        "inspinia":"jquery",
        "pace":"jquery",
    }
});