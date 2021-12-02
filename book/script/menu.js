$(document).ready(function(){
    $(".navi_box1").mouseover(function(){
        $(this).children(".menu_box1").stop().slideDown();
    });

    $(".navi_box1").mouseleave(function(){
        $(this).children(".menu_box1").stop().slideUp();
    })

    // 가로 메뉴 박스형
    $(".navi_box3 > ul > li").mouseover(function(){
        $(this).children(".menu_box3").stop().slideDown();
    });

    $(".navi_box3 > ul > li").mouseleave(function(){
        $(this).children(".menu_box3").stop().slideUp();
    })

    // 세로 다운 박스형
    $(".navi_box4 > ul > li").mouseover(function(){
        $(this).children(".menu_box4").stop().slideDown();
    })
    $(".navi_box4 > ul > li").mouseleave(function(){
        $(this).children(".menu_box4").stop().slideUp();
    })
 });