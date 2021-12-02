$(document).ready(function(){
    $(".tab_menu>li>a").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
        return false;
    })
    
});