
var data = [
    {
        img: "./imgs/one.jpeg",
        name: "惹上冷殿下·8.8首播",
        new: "迷妹撩爱豆 饭圈高糖恋"
    },
    {
        img: "./imgs/two.jpeg",
        name: "惹上冷殿下·8.8首播",
        new: "迷妹撩爱豆 饭圈高糖恋"
    },
    {
        img: "./imgs/new1.jpeg",
        name: "爱情进化论·8.2首播",
        new: "张若昀偷吻张天爱"
    },
    {
        img: "./imgs/new2.jpeg",
        name: "爱情进化论·8.2首播",
        new: "张若昀偷吻张天爱"
    },
    {
        img: "./imgs/new3.jpeg",
        name: "爱情进化论·8.2首播",
        new: "张若昀偷吻张天爱"
    },
    {
        img: "./imgs/new4.jpeg",
        name: "爱情进化论·8.2首播",
        new: "张若昀偷吻张天爱"
    },
    {
        img: "./imgs/new45.jpeg",
        name: "爱情进化论·8.2首播",
        new: "张若昀偷吻张天爱"
    },
    {
        img: "./imgs/new6.jpeg",
        name: "爱情进化论·8.2首播",
        new: "张若昀偷吻张天爱"
    },

]
var data2 = [

    {
        img: "./imgs/2-1.jpeg",
        name: "马航MH370事件'终极报告'今天将出炉！",
        new: ""
    },
    {
        img: "./imgs/2-2.jpeg",
        name: "8月起这些新规将实施 我们都将收到这样一条短信",
        new: ""
    },
    {
        img: "./imgs/2-3.jpeg",
        name: "孟美岐演讲实录：我就是那个拿了第一名的女孩",
        new: ""
    },
    {
        img: "./imgs/2-4.jpeg",
        name: "迷妹专访101|yamy：很喜欢有遗憾的感觉",
        new: ""
    },
    {
        img: "./imgs/2-5.jpeg",
        name: "SNH48总决选前三专访：李艺彤自称未来一片辉煌",
        new: ""
    },
    {
        img: "./imgs/2-6.jpeg",
        name: "真正的金缕玉衣！古人葬礼都这么奢侈吗",
        new: ""
    },
]
var data3 = [
    {
        img: "./imgs/mr_1.jpeg",
        name: "九大厂牌候选人争夺战",
        new: "2018-07-28 第5期",
    },
    {
        img: "./imgs/mr_2.jpeg",
        name: "升级战13强冲出重围",
        new: "2018-07-21 第4期 ",
    },
    {
        img: "./imgs/mr_3.jpeg",
        name: "升级战13强冲出重围",
        new: "2018-07-21 第4期 ",
    },
    {
        img: "./imgs/mr_4.jpeg",
        name: "升级战13强冲出重围",
        new: "2018-07-21 第4期 ",
    },
    {
        img: "./imgs/mr_5.jpeg",
        name: "升级战13强冲出重围",
        new: "2018-07-21 第4期 ",
    }
]
var conter_str = ""
// for (var i = 0; i < data.length; i++) {
//     var one_data = data[i]
//     conter_str +=`
//     <h3 class = "biaoti">`+ one_data.biaoti +`</h3>
//     `
for (var i = 0; i < data.length; i++) {
    conter_str += `<div class="one">
                    <img src="`+ data[i].img + `" alt="">
                    <p>`+ data[i].name + `</p>
                    <p>` + data[i].new + `</p>
                </div>           
    `
}
var conter_str2 = ""
for (var j = 0; j < data2.length; j++) {
    conter_str2 += `<div class="one">
                    <img src="`+ data2[j].img + `" alt="">
                    <p>`+ data2[j].name + `</p>
                    <p>` + data2[j].new + `</p>
                </div>           
    `
}
var conter_str3 = ""
for (var k = 0; k < data3.length; k++) {
    conter_str3 += `<div class="two">
                    <img src="`+ data3[k].img + `" alt="">
                    <p>`+ data3[k].name + `</p>
                    <p>` + data3[k].new + `</p>
                </div>           
    `
}
// console.log(bbb)
// 拼接界面
$(".pian").append($(conter_str))
$(".pian2").append($(conter_str2))
$(".xiao").append($(conter_str3))
// $(".aaa").append($(conter_str))
var zong_gao = window.screen.height
var zong_kuan = window.screen.width

// 首页的内容高度
$(".content").css({
    "height": zong_gao - $(".footer").outerHeight() - $(".top").outerHeight() + "px",
    "padding-top":$(".top").outerHeight() + "px"
})

// 第一块1
$(".pian").css({
    "height": $(".one").outerHeight() * 4 +48 + "px"
})
// 第一块2
$(".pian2").css({
    "height": $(".one").outerHeight() * 3 +36 + "px"
})
