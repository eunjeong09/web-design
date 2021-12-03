$(document).ready(function () {
    // menu
    $(".nav li").mouseover(function () {
        $(this).children(".submenu").stop().slideDown();
    });
    $(".nav li").mouseleave(function () {
        $(this).children(".submenu").stop().slideUp();
    })

    // image slide - 다시
    // start();
    // let imgs = 2;
    // let now = 0;
    // function start() {
    //     $(".imageSlide>img").eq(0).siblings().css({"margin-top":"-150px"});
    //     setInterval(function(){slide();},3000);
    // }
    // function slide() {
    //     now=now==imgs?0:now+1;
    //     // $(".imageSlide>img").eq(now-1).css({"margin-top":"-150px"});

    //     $(".imageSlide>img").eq(now).css({"margin-top":"0px"});
    // }
    setInterval(slide,3000);
    function slide(){
        $("#slider").stop().animate({
            marginTop:-300
        },1000,slideNext);
    }
    function slideNext(){
        $('#slider>li').eq(0).appendTo('#slider');
        $('#slider').stop().animate({
            marginTop:0
        },0);
    }

    // tab
    $(".tabMenu li a").click(function () {
        $(this).parent().addClass("on").siblings().removeClass("on");
        return false;
    });

    // popup
    $(".notice li:first-child>a").click(function () {
        $("#popup").addClass("active");
    });
    $("#popup button").click(function () {
        $("#popup").removeClass("active");
    })
});