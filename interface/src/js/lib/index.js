let baseUrl = "http://localhost:8080/1910/yougou/interface";
define(['jquery'], function ($) {
    return {

        //渲染
        xuanran: function () {
            // console.log(1)

            $.ajax({
                type: "get",
                url: `http://localhost:8080/1910/yougou/libs/xuanran.php`,
                dataType: "json",
                success: function (res) {
                    // alert(res.msg);
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        sm = JSON.parse(elm.small)[0].src;
                        console.log(sm);
                        temp += `
                        <div class="col-xs-3 col-md-3">
                        <a href="${baseUrl}/src/html/product.html?id=${elm.id}">
                        <p class="name">${elm.name}<img src="${baseUrl}/${sm}" alt=""></p>
                        <p class="price">￥${elm.price}</p>
                        </a>
                    </div> `
                    })
                    $('.xunran').append(temp);
                }
            });
        },
        // nav: function () {
        //     $('#nav').on('mousedown', function () {
        //         $('.items').addClass('show');
        //         $('.notice-list ').addClass('background');
        //         $('.item a').addClass('color')
        //     });
        //     $('#nav').on('mousedown', function () {
        //         $('.items').addClass('show');
        //         $('.notice-list ').addClass('background');
        //         $('.item a').addClass('color')
        //     });
        //     $('#nav').on('mousedown', function () {
        //         $('.items').addClass('show');
        //         $('.notice-list ').addClass('background');
        //         $('.item a').addClass('color')
        //     });
        // }
    }
})
