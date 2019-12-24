// 频道的长度
$(".pindao").css({
    "height" : $(".remen").outerHeight() + "px"
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
var pdshuju_sb=""
for(var i = 0; i < pdshuju.length; i++){
    pdshuju_sb +=`
    <div class="gun">
    <div class="tu" style="background-image:url(`+ pdshuju[i].img +`);">
    </div>
    <p>`+ pdshuju[i].name +`</p> 
    <p>` + pdshuju[i].new + `</p>
    </div>
    `
}
console.log(pdshuju_sb)
$(".pd-img").append($(pdshuju_sb))