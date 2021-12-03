$(document).ready(function () {
    // first
    setInterval(slide1, 3000);

    function slide1() {
        $('.first .slider').animate({
            marginLeft: -800
        }, 1000, slideNext1);
    }

    function slideNext1() {
        $('.first .slider>li').eq(0).appendTo('.first .slider');
        $('.first .slider').animate({
            marginLeft: 0
        }, 0);
    }

    // second
    setInterval(slide2, 3000);

    function slide2() {
        $('.second .slider').stop().animate({
            marginTop: -300
        }, 1000, slideNext2);
    }

    function slideNext2() {
        $('.second .slider>li').eq(0).appendTo('.second .slider');
        $('.second .slider').animate({
            marginTop: 0
        }, 0);
    }

    // third
    setInterval(slide3, 3000);

    function slide3() {
        $('.third .slider').stop().animate({
            marginTop: 300
        }, 1000, slideNext3);
    }

    function slideNext3() {
        $('.third .slider>li').eq(2).prependTo('.third .slider');
        $('.third .slider').stop().animate({
            marginTop: 0
        }, 0);
    }


    // fourth
    /*
    start();
    let imgs = 2;
    let now = 0;

    function start(){
        $(".fourth img").eq(0).siblings().fadeOut('slow');
        setInterval(function(){slide();},3000);
    }
    function slide(){
        now=now==imgs?0:now+=1;
        $(".fourth img").eq(now-1).fadeOut('slow');
        $(".fourth img").eq(now).fadeIn('slow');
    }
    */

    // 다른 내용
    setInterval(newSlide,3000);
    var slides = 2;
    var cnt = 0;
    
    function newSlide(){
        cnt=cnt==slides?0:cnt+1;
        $(".fourth img").fadeOut('slow');
        $(".fourth img").eq(cnt).fadeIn('slow');

    }


});