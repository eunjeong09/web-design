$(document).ready(function(){
    // first
    $('.first .mainmenu a').mouseover(function(){
        $('.first .submenu').css({"display":"block"});
    });
    $('.first .mainmenu a').mouseleave(function(){
        $('.first .submenu').css({"display":"none"});
    });


    // twice
    $('.twice .mainmenu a').mouseover(function(){
        $(this).parent().addClass('on');
    });
    $('.twice .mainmenu a').mouseleave(function(){
        $(this).parent().removeClass('on');
    })
});

/* pdf로 유형 알아보기

1. 메뉴
- 메인 중 하나에 마우스를 올리면 서브영역 부드럽게 나타남
- 메인 중 하나에 마우스를 올리면 서브영역 부드럽게 나타남(전체넓이)
- 메인 중 하나에 마우스를 올리면 해당 서브영역 부드럽게 나타남
- 마우스 올린 서브영역에 해당하는 메인 하이라이트(설명 잘 읽어야할듯)

- 위 그대로 세로버전
2. 슬라이드
- 위아래로 이동
- 좌우로 이동
- fade in / fade out

3. 모달
- 레이어 팝업 / 모달 레이어 팝업(배경색)


*/