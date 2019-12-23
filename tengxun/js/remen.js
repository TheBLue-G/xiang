var fenlei = [
    "王者荣耀","快看","神剪辑","搞笑","新闻","舞蹈","健康","健身","娱乐","游戏","英雄联盟","萌宠","情感","汽车","美食"
]
var video = [
    {
        timu:"王者荣耀：英雄就是比普通人更变态的辩变态，张飞这种玩法最无敌！！",
        bg:"./imgs/rm-1.jpeg",
        user:"./imgs/rmyh-1.jpeg",
        sort:"王者荣耀",
        sort_2:"朋程说游"
    },
    {
        timu:"王者荣耀搞笑：最强射手鲁班",
        bg:"./imgs/rm-2.jpeg",
        user:"./imgs/rmyh-2.jpg",
        sort:"王者荣耀",
        sort_2:"搞笑"
    },
    {
        timu:"王者荣耀搞笑小动画，大乔是这样被宫本套路的",
        bg:"./imgs/rm-3.jpeg",
        user:"./imgs/rmyh-3.jpg",
        sort:"王者荣耀",
        sort_2:"动画"
    },
    {
        timu:"王者荣耀：玩家自己制作了4位英雄，连天美都不得不服",
        bg:"./imgs/rm-4.jpeg",
        user:"./imgs/rmyh-4.jpg",
        sort:"王者荣耀",
        sort_2:"游戏制作"
    }
]
var fenlei_div = ""
for(var i = 0 ; i < fenlei.length; i++){
    fenlei_div += `
                <span>` + fenlei[i] + `</span>
    `

}
$(".classify").append($(fenlei_div))
// 热门的高度
// $(".remen").css({
//     "height":$(".shouye").outerHeight() + "px"
// })
// 热门的center的高度
// $(".rm_center").css({
//     "height":$(".remen").outerHeight() - $(".rm_top").outerHeight() + "px"
// })


// 作为footer
$(".wuyong").css({
    "height":$(".footer").outerHeight() + "px"
})

// 热门内容
var block=""
for(var i = 0 ; i < video.length; i++){
    block += `          
    <div class="video_one">
        <img src="` + video[i].bg + `" alt="" class="tu_1">
        <p class="piao">`+ video[i].timu +`</p>
        <div class="jianjie">
            <div class="touxiang" style="background-image: url(`+ video[i].user +`)"></div>
            <div class="label">` + video[i].sort + `</div>
            <div class="label">` + video[i].sort_2 + `</div>
            <div class="label_right">
                <img src="./imgs/rmtb-1.svg" alt="">
                <img src="./imgs/rmtb-2.png" alt="">
                <img src="./imgs/rmtb-3.svg" alt="">
            </div>
        </div>
    </div>
    `
}
$(".rm_center").append($(block))