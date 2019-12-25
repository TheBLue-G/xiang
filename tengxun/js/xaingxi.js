var  xiangxi_sb = [
    {
        "img" :"./imgs/xiangxi/pianhua1.jpeg" ,
        "name":"华晨宇聊到魔音选手心疼落泪：没想到陆政廷会被淘汰..."
    },
    {
        "img" :"./imgs/xiangxi/pianhua2.jpeg" ,
        "name":"文兆杰专访：没想过自己会复活，以后不会在让花花失望"
    },
    {
        "img" :"./imgs/xiangxi/pianhua3.jpeg" ,
        "name":"斯外戈专访：能复活超开心，最对不起和感谢的人是春春"
    },
]
var xiangxi_tj = [
        {
            "img" :"./imgs/xiangxi/tuijian1.jpeg" ,
            "name":"我家那小子",
            "new" :"第4期：父母离异，陈学冬武艺受影响"
        },
        {
            "img" :"./imgs/xiangxi/tuijian2.jpeg" ,
            "name":"放开我北鼻 第3季",
            "new" :"第10期：释小龙空降少林寺教萌娃练功夫"
        },
        {
            "img" :"./imgs/xiangxi/tuijian3.jpeg" ,
            "name":"明日之子悠享版",
            "new" :"悠享版第8期：赛道分组密室讨论全程"
        },  
]
var xaingxi_tuijian=""
var xiangxi_dasb =""
for (var i = 0; i<xiangxi_sb.length; i++){
    xiangxi_dasb+=`
    <div class="ph_center">
        <img src="` + xiangxi_sb[i].img + `" alt="">
        <p>`+ xiangxi_sb[i].name +`</p>
    </div>
    `
}

for (var i = 0; i<xiangxi_tj.length; i++){
    xaingxi_tuijian+=`
    <div class="tj_center">
        <img src="` + xiangxi_tj[i].img + `" alt="">
        <div class="tj_zi">
            <p>` + xiangxi_tj[i].name + `</p>
            <p>` + xiangxi_tj[i].new + `</p>
        </div>
    </div>
    `
}

$(".ph_top").append($(xiangxi_dasb))
$(".tj_top").append($(xaingxi_tuijian))



