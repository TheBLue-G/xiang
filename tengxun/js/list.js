var list_one =[
    {   
        "color":"background-color: rgba(212, 48, 48, 1);",
        "shunxu":"1",
        "name":"扶摇",
        "redu":"./imgs/xiangxi/减号.png"
    },
    {
        "color":"background-color: rgba(255, 141, 26, 1);",
        "shunxu":"2",
        "name":"甜蜜暴击",
        "redu":"./imgs/xiangxi/减号.png"
    },
    {
        "color":"background-color: rgba(255, 235, 59, 1);",
        "shunxu":"3",
        "name":"小猪佩奇第4季",
        "redu":"./imgs/xiangxi/减号.png"
    },
    {
        "color":"background-color:rgba(166, 166, 166, 1);",
        "shunxu":"4",
        "name":"猎毒人",
        "redu":"./imgs/xiangxi/减号.png"
    },
    {
        "color":"background-color:rgba(166, 166, 166, 1);",
        "shunxu":"5",
        "name":"奔跑吧  第2季",
        "redu":"./imgs/xiangxi/减号.png"
    },
    {
        "color":"background-color:rgba(166, 166, 166, 1);",
        "shunxu":"6",
        "name":"中国好声音  第7季",
        "redu":"./imgs/xiangxi/减号.png"
    },
    {
        "color":"background-color: rgba(166, 166, 166, 1);",
        "shunxu":"7",
        "name":"一千零一夜",
        "redu":"./imgs/xiangxi/list.svg "
    },
    {
        "color":"background-color:rgba(166, 166, 166, 1);",
        "shunxu":"8",
        "name":"延禧攻略",
        "redu":"./imgs/xiangxi/listup.svg"
    },
]
var li = ""
for (var i = 0; i < list_one.length; i++){
    li +=`
    <div class="sl_one">
    <div class="sl_one_two">
        <div class="sl_one_1" style="`+ list_one[i].color +`">` + list_one[i].shunxu + `</div>
        <span class="sl_one_2">` + list_one[i].name + `</span>
    </div>
    <div class="sl_one_3">
    <img src="` + list_one[i].redu + `" alt="">
    </div>
    </div>
    `
}
$(".sou_list").append($(li))
