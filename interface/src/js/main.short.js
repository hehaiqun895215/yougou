require.config(
    {
        paths:{
            'jquery':"./jquery.min",
            'reg':'./lib/short',
            // 'md5':"./jquery.md5"
        },
        // shim:{
        //     'md5':['jquery']
        // }
    }
)
require(['jquery','reg'],function($,short){
  short. reg();
})