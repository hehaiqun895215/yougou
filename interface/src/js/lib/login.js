define(['jquery', 'md5'], function ($, md5) {
    return {
        reg: function () {
            console.log(1)
            $('.submit').on('click', function () {
                let userphone = $('#phone').val();
                let userpass = $('#password').val();
                console.log(userphone, userpass);
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/1910/yougou/libs/login.php",
                    data: {
                        userphone: userphone,
                        userpass: $.md5(userpass)
                    },
                    dataType: "json",
                    success: function (res) {
                         alert(res.msg);
                        // console.log(res)

                    },

                });
            })
        }
    }
})