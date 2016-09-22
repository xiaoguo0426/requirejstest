/**
 * Created by xiaoguo0426 on 2016/8/22.
 * 定义js文件的路径，在需要的时候调用加载就可以了
 */
requirejs.config({
    // baseUrl: 'http://odanj4w3g.bkt.clouddn.com/',
    baseUrl: 'js/',
    paths: {
        "jquery": "jquery",
        "bootstrap": "bootstrap",
        "metisMenu": "plugins/metisMenu/jquery.metisMenu",
        // "slimscroll": "plugins/slimscroll/jquery.slimscroll.min",
        "slimscroll": "plugins/slimscroll/jquery.slimscroll",
        "flot":"plugins/flot/jquery.flot",
        "inspinia":"inspinia",
        "pace":"plugins/pace/pace.min"
    },
    shim:{
        "bootstrap":"jquery",
        "metisMenu":"jquery",
        "slimscroll":"jquery",
        "flot":"jquery",
        "inspinia":"jquery",
        "pace":"jquery",
    }
});
// requirejs(["jquery", "bootstrap","metisMenu","slimscroll","flot","inspinia","pace"]);