require.config({
    paths: {
        jquery: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min", //CDN地址
        phone: "./lib/xiangqing",
        // lazyload: "./jquery.lazyload.min"
    },
    shim: {
        // lazyload: ['jquery']
    }
});

require(['jquery', 'xiangqing'], function($, xiangqing) {
    xiangqing.xiangqing();
})