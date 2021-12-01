$(document).ready(function(){
    // 레이어 팝업
    $(".partner img").click(function(){
        $("#popup1").addClass("active");
    });

    $("#popup1 button").click(function(){
        $("#popup1").removeClass("active");
        
    })

    // 모달 레이어 팝업
    $(".partner2 img").click(function(){
        $("#popup2").addClass("active");
    });

    $("#popup2 button").click(function(){
        $("#popup2").removeClass("active");
        
    })

});