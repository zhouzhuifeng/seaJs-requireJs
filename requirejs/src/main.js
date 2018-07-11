define(function () {
    //公共的 配置， a,b,c三个模块都会依赖jquery模块
    require.config({
        // baseUrl:'src/',
        paths: {
            'jquery': 'lib/jquery'
        }
    });
});