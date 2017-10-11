/**
 * 页面入口文件，依赖config.js文件
 */
requirejs(['./config'],function () {
	var require_config = requirejs.s.contexts._.config;
	console.log(requirejs.s.contexts._.config);
    requirejs(['app/index-index']);
});