$(".content").click(function () {
    $(".shoye").css({
        "display" : "none"
    })
    $(".footer").css({
        "display" : "none"
    })
    $(".xiangxi").css({
        "display" : "block"
    })
})
$(".fh").click(function () {
    $(".shoye").css({
        "display" : "block"
    })
    $(".footer").css({
        "display" : ""
    })
    $(".xiangxi").css({
        "display" : "none"
    })
})

$(".sou").click(function () {
        $(".shoye").css({
            "display" : "none"
        })
        // $(".footer").css({
        //     "display" : "none"
        // })
        $(".sousuo").css({
            "display" : "block"
        })
})

$(".top_two").click(function() {
    $(".sousuo").css({
        "display" : "none"
    })
    $(".shoye").css({
        "display" : "block"
    })
})