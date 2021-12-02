$(document).ready(function(){
    // 좌우 슬라이드
    start1();
    var imgs = 2;
    var now = 0;

    function start1(){
        $(".imgs1>img").eq(0).siblings().css({"margin-left:":"-1000px"});
        setInterval(function(){slide1();},3000);
    }
    
    function slide1(){
        now=now==imgs?0:now+=1;
        // $(".imgs>img").eq(now+1).css({"width":"50px"});
        $(".imgs1>img").eq(now-1).css({"margin-left":"-1000px"});
        $(".imgs1>img").eq(now).css({"margin-left":"0px"});
    }


    // 상하 슬라이드
    start2();
    var imgs2 = 2;
    var now2 = 0;

    function start2(){
        $(".imgs2>img").eq(0).siblings().css({"margin-top:":"-400px"});
        setInterval(function(){slide2();},3000);
    }
    
    function slide2(){
        now2=now2==imgs2?0:now2+=1;
        // $(".imgs>img").eq(now+1).css({"width":"50px"});
        $(".imgs2>img").eq(now2-1).css({"margin-top":"-400px"});
        $(".imgs2>img").eq(now2).css({"margin-top":"0px"});
    }

    // fade in / fade out
    start3();
    var imgs3 = 2;
    var now3 = 0;

    function start3(){
        $(".imgs3>img").eq(0).siblings().fadeOut('slow');
        setInterval(function(){slide3();},3000);
    }
    
    function slide3(){
        now3=now3==imgs3?0:now3+=1;
        // $(".imgs>img").eq(now+1).css({"width":"50px"});
        $(".imgs3>img").eq(now3-1).fadeOut('slow');
        $(".imgs3>img").eq(now3).fadeIn('slow');
    }

});