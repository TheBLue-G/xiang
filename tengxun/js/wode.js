$(".vip").css({
    "height": $(".wd_top").outerHeight() - $(".via").outerHeight() +"px",
    "line-height": $(".wd_top").outerHeight() - $(".via").outerHeight() +"px"
})
$(".wode").css({
    "height": zong_gao + $(".footer").outerHeight() +"px",
})
var ls = [
    {
        name:"制裁特工",
        movie:"./imgs/history-1.jpg"
    },
    {
        name:"藩篱",
        movie:"./imgs/history-2.jpg"
    },
    {
        name:"小偷家族",
        movie:"./imgs/history-3.jpg"
    },
    {
        name:"碟中谍6",
        movie:"./imgs/history-4.jpg"
    },
    {
        name:"精灵旅社3",
        movie:"./imgs/history-5.jpg"
    },
    {
        name:"的士速递5",
        movie:"./imgs/history-6.jpg"
    },

]
var movie_div=""
for (var i = 0 ; i < ls.length; i++){
    movie_div +=`
    <div class="lishi">
                            <img src="` + ls[i].movie + `" alt="">
                            <span>` + ls[i].name + `</span>
                        </div>
    `
}
console.log(movie_div)
$(".history_xiao").append($(movie_div))
$(".order").click(function() {
    $(".wode").css({
        "display" : "none"
    })
    $(".footer").css({
        "display" : "none"
    })
    $(".kandan").css({
        "display" : "inline-block"
    })
})

// 我的看单  返回键
$(".return").click(function () {
    $(".kandan").css({
        "display" : "none"
    })
    $(".wode").css({
        "display" : "block"
    })
    $(".footer").css({
        "display" : ""
    })
})


// 我的看单center高度
$(".kandan_center").css({
    "height" : $(".all").outerHeight() - $(".kandan_footer").outerHeight() - $(".kandan_top").outerHeight() + "px"
})


var kangkang = [
    {
        name:"沙海",
        xiangxi:"更新至10集/全54集"
    },
    {
        name:"明日之子优享版",
        xiangxi:"更新至1更新至优享版第8期：赛道分组密室讨论全程0集/全54集"
    },
    {
        name:"沙海",
        xiangxi:"更新至10集/全54集/全54集"
    },
    {
        name:"明日之子优享版",
        xiangxi:"更新至1更新至优享版第8期：赛道分组密室讨论全程0集/全54集"
    },
    {
        name:"沙海",
        xiangxi:"更新至10集/全54集/全54集/全54集"
    },
    {
        name:"明日之子优享版",
        xiangxi:"更新至1更新至优享版第8期：赛道分组密室讨论全程0集/全54集"
    },
    
]


var  kangkang_pi = ""
for ( var i = 0 ; i < kangkang.length ; i++) {
    kangkang_pi +=`
        <div class="kandan_one">
            <img src="./imgs/kandan-1.jpeg" alt="">
            <div class="kandan_zi">
                <p>` + kangkang[i].name + `</p>
                <p>` + kangkang[i].xiangxi + `</p>
            </div>
        </div>
    `
}

$(".kandan_center").append($(kangkang_pi))