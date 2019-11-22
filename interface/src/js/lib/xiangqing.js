define(['jquery',  'cookie'], function($,  cookie) {
    return {
        //详情渲染
        xiangqing: function(callback) {
            let baseUrl = "http://localhost:8080/1910/yougou";
            let id = location.search.split('=')[1];
            $.ajax({ //ajax请求后端数据
                type: "get",
                url: `${baseUrl}/libs/xie.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function(res) {
                    // console.log(res)
                    let name = res.name;
                    let pic = JSON.parse(res.bigpic)[0];
                    let title = JSON.parse(res.title)[0];
                    // let intr = JSON.parse(res.intr)[0];
                    // console.log(intr)
                    //页面元素渲染
                    let phonelist = `
                    <h3>${name}</h3>
                    <li>
                    <a href="javascript:;"><img src="${pic.bg01}" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="${pic.bg02}" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="${pic.bg03}" alt=""></a>
                </li>
                <li>
                <a href="javascript:;"><img src="${pic.bg04}" alt=""></a>
                </li>
                <li>
                <a href="javascript:;"><img src="${pic.bg05}" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="${pic.bg06}" alt=""></a>
                </li>`;
                    let buyxie = `
                <h3>${title.name}</h3>
                <p>
                ${title.title}
                </p>
                    <div class="price">
                        <p><span>￥</span>${res.price}</p>
                        <div class="buy">
                            <p><span>加价购</span> 另加35元起，即可换购超值商品<a href="">立即加购&gt</a></p>
                        </div>
                    </div>
                    <div class="post">
                        <p>支&nbsp;&nbsp;持&nbsp;&nbsp;&nbsp;&nbsp;花呗分期&nbsp;&nbsp;&nbsp;&nbsp;顺丰发货&nbsp;&nbsp;&nbsp;&nbsp;7天无理由退货（激活后不支持）</p>
                        <p>
                            配送服务&nbsp;&nbsp;&nbsp;&nbsp;浙江省&nbsp;&nbsp;杭州市<br> 本商品由 优购 负责发货并提供售后服务&nbsp;&nbsp;&nbsp;&nbsp;<a href="">商城客服</a>
                        </p>
                    </div>
                    <div class="intro">
                        <p><span class="lf">型号</span><span>${title.name}</span></p>
                        <p><span class="lf">颜色分类</span><span>蓝</span> <span>绿</span><span>橙</span></p>
                        <p><span class="lf">尺码</span><span>s</span><span>m</span><span>xl</span><span>xxl</span></p>
                        <p><span class="lf">数量</span><input type="number" placeholder="1" min="1" max="${res.num}" class="num"></p>
                        <p class="buy"><a href="">立即购买</a><a href="javascript:;" class="add">加入购物车</a></p>
                    </div>
                `;
                 
                    //渲染结果添加至页面
                    $('.xie h3').html(name);
                    $('.bx').append(`<a href="javascript:;"><img src="${pic.bg01}" alt=""></a>`)
                    $('.xielist').append(xielist);
                    $('.buyxie').append(buypxie);

                    // $(function() {
                    //     $("img.lazy").lazyload({ effect: "fadeIn" });
                    // }); //懒加载
                    $('.title').append(intro);
                    //判断回调
                    callback && callback(res.id, res.price)
                }
            });
        },
        //加入购物车
        addCar: function(id, price, num) {
            console.log(id, price, num);
            //获取cookie值
            let shopping = cookie.get('shopping');
            //设置商品数据
            let xie = {
                    id: id,
                    price: price,
                    num: num
                }
                //判断cookie数据是否存在
            if (shopping) {
                //有内容，修改cookie
                shopping = JSON.parse(shopping);
                //判断商品id是否存在
                if (shopping.some(elm => elm.id == id)) {
                    //存在，修改cookie值中的数量
                    shopping.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    })
                } else {
                    //不存在该id，添加cookie
                    shopping.push(phone)
                }

            } else {
                //无内容，新增cookie
                shopping = [];
                shopping.push(xie)
                console.log(shopping)
            }
            //将cookie值写入浏览器cookie
            cookie.set('shopping', JSON.stringify(shopping), 1)
        }
    }
})