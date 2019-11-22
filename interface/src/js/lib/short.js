define(['jquery'], function($) {
    return {
      reg: function() {
            $('.submit').on('click', function() {
                console.log(1)
                let userphone = $('#phone').val();
                console.log(userphone);
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/1910/yougou/libs/short.php",
                    data: {
                        userphone:phone,
                    },
                    dataType: "json",
                    success: function(res) {
                        alert(res.msg)

                    }
                });
            })
        }
    }
})