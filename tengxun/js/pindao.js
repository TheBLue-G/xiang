// 频道的长度
// $(".pindao").css({
//     "height" : 100%
// })
$(".pindao").css({
    "height": $(".gun").outerHeight() * 3 +  $(".footer").outerHeight() + "px",
})
$(".pd-img").css({
    "height": $(".gun").outerHeight() * 3 + "px",
})
var pdshuju = [
    {
        img:"./imgs/频道/pd-2.jpeg",
        name:"扶摇[会员抢先看]",
        new:"戏精赢了！五福成功闯天煞"
    },
    {
        img:"./imgs/频道/pd-3.jpeg",
        name:"沙海[会员抢先看]",
        new:"哈哈毛不易本色出演男护士"
    },
    {
        img:"./imgs/频道/pd-4.jpeg",
        name:"甜蜜暴击[首播 会员先看]",
        new:"鹿晗变身格斗系元气学长"
    },
    {
        img:"./imgs/频道/pd-5.jpg",
        name:"快把我哥带走[会员提前看]",
        new:"兄妹相爱相杀治愈成长路"
    },
    {
        img:"./imgs/频道/pd-6.jpeg",
        name:"限定24小时[首播]",
        new:"技术宅男获得触物为人超能力"
    },
    {
        img:"./imgs/频道/pd-7.jpg",
        name:"重返20岁[会员抢先看]",
        new:"韩东君牵手胡冰卿逆转时光"
    },
]
var pdshuju_two = [
    {
        img:"./imgs/频道/pd-2.1.jpeg",
        name:"《西部世界2》-9.3豆瓣高分烧脑神作",
        new:""
    },
    {
        img:"./imgs/频道/pd-2.2.jpeg",
        name:"吸血鬼日记8",
        new:"Nina回归最终季"
    },
    {
        img:"./imgs/频道/pd-2.3.jpg",
        name:"破产姐妹6",
        new:"打工姐妹花以破产告终？"
    },
    {
        img:"./imgs/频道/pd-2.4.jpg",
        name:"女超人",
        new:"超人超女合体拯救地球"
    },
    {
        img:"./imgs/频道/pd-2.5.jpg",
        name:"绿箭侠5",
        new:"糖哥跑男超女大玩联动交叉"
    },
]
var pdshuju_sb=""
for(var i = 0; i < pdshuju.length; i++){
    pdshuju_sb +=`
    <div class="gun">
    <img src="`+ pdshuju[i].img + `" alt="">
    <p>`+pdshuju[i].name + `</p>
    <p>` + pdshuju[i].new + `</p>
</div> 
    `
}
var pdshuju_2sb=""
for(var i = 0; i < pdshuju_two.length; i++){
    pdshuju_2sb +=`
    <div class="gun_2">
                    <img src="`+ pdshuju_two[i].img + `" alt="">
                    <p>`+pdshuju_two[i].name + `</p>
                    <p>` + pdshuju_two[i].new + `</p>
                </div> 
    `
}
$(".pd-img").append($(pdshuju_sb))
$(".pd-img2").append($(pdshuju_2sb))
$(".pindao").css({
   "height" : $(".pindao").outerHeight() + $(".footer").outerHeight() + "px"
})