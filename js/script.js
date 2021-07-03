$(".read-more").click(function (l) {
    $(".text-hidden").toggleClass("hidden")

    if ($(".text-hidden").hasClass("hidden")) {
        $(".read-more").text("Read-More")

    } else {
        $(".read-more").text("hidden")
    }
})


 $(".nav").css({
    position: "fixed",
    width: "100%",
    "z-index": 10,
    top: $(window).height() - $(".nav").outerHeight()
})

$(window).scroll(function () {
    let position = $(window).height() - $(".nav").outerHeight() - $(window).scrollTop();
    if (position > 0) {
        $(".nav").css({ top: position });
    } else {
        $(".nav").css({ top: 0 });
    }
    // console.log(position);
})




$(window).scroll(function () {
    if ($(window).scrollTop() < 150) {
        $(".btn").removeClass("show")
    } else if ($(window).scrollTop() > 220) {
        $(".btn").addClass("show")
    }
    console.log($(window).scrollTop());
})

$(".btn").click(function (e) {
    $("html").stop().animate({
        scrollTop: 0
    }, 1000)
})