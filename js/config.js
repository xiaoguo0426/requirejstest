/**
 * Created by xiaoguo0426 on 2016/8/22.
 */
requirejs.config({
    baseUrl: 'js/',
    paths: {
        "jquery": "jquery",
        "bootstrap": "bootstrap.min",
        "metisMenu": "plugins/metisMenu/jquery.metisMenu",
        "slimscroll": "plugins/slimscroll/jquery.slimscroll.min",
    }
});
requirejs(["jquery", "bootstrap","metisMenu","slimscroll"]);