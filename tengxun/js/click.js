
// 底部到行上的点击事件
$(".dianji").click(function () {

    var that = this

    var dian_index = $(this).index()

    $(".dianji").each(function (index , item)   {
        if (dian_index == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src" ,cur_src.replace(".png" , "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src" ,cur_src.replace("_a" , ""))
    
        }
    })  
    $(".all>div").each(function (index , item) {
        if ($(that).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})