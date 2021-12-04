$(document).ready(function(){
    $('.tabmenu>li>a').click(function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        //$(this).parent().addClass('active').siblings().removeClass('active');
        //return false;
    });

    $('.modal').click(function(){
        $('#modal').css({"display":"block"});
    });
    $('#modal button').click(function(){
        $('#modal').css({"display":"none"});
    });

    $('.layerModal').click(function(){
        $('#layerModal').css({"display":"block"});
    });
    $('#layerModal button').click(function(){
        $('#layerModal').css({"display":"none"});
    });

});