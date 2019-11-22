require.config({
    paths: {
        // jquery: "./jquery.min",  //本地文件地址
        jquery: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min", //CDN地址
        index: "./lib/index"
    },
    shim: {}
});

require(['jquery', 'index'], function($, index) {
    index.xuanran();
    // index.nav();
});