define(['jquery', 'md5'], function($) {
    return {
        reg: function() {
            let upass = /^[A-z]\w{7,15}$/
            let num = /^1[3-9]\d{9}$/;
           
            //验证密码
            $('#password').on('keyup', function() {
                if (upass.test($('#password').val())) {
                    $('.upass').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.upass').html('未通过验证').addClass('red').removeClass('green')
                }
            });
            //确认密码
            $('#password2').on('keyup', function() {
                    console.log(1)
                    if ($('#password2').val() == $('#password').val()) {
                        $('.uver').html('密码一致，可以注册').addClass('green').removeClass('red')
                    } else {
                        $('.uver').html('密码不一致，请重新输入').addClass('red').removeClass('green')
                    }
                })
                //验证手机号
            $('#phone').on('keyup', function() {
                    if (num.test($('.phone').val())) {
                        $('.uphone').html('通过验证').addClass('green').removeClass('red')
                    } else {
                        $('.uphone').html('未通过验证').addClass('red').removeClass('green')
                    }
                })
                //提交数据
            $('.submit').on('click', function() {
                console.log($.md5($('#password').val()))
                $.ajax({
                    type: "post",
                    url: "http://127.0.0.1:8080/1910/yougou/libs/reg.php",
                 
                    data: {
                        password: $.md5($('#password').val()),
                        phone: $('#phone').val()
                    },
                    success: function(res) {
                        //返回结果
                        alert(JSON.parse(res).msg);
                    }
                });
                // location.reload(); //刷新页面
                console.log($.md5($('#password').val()))
            })
        }
    }
})