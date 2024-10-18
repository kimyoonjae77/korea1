$(document).ready(function() {

    let activeItem = $('.height_line>li.active');

    function setUnderlinePosition(item) {
        // 선택한 메뉴의 위치를 계산하여 막대바의 위치를 설정
        var leftPosition = item.position().left + (item.outerWidth() / 2) - ($('.dot').outerWidth() / 2);
        $('.dot').css({'left': leftPosition + 'px'});
    }

    
    setUnderlinePosition(activeItem);       // 초기 상태 설정

    $('.height_line>li').click(function() {
        let list = $(this).index();
        $(".att_list>li").stop().fadeOut();
        $(".att_list>li").eq(list).stop().fadeIn();

        $('.height_line>li').removeClass('active');
        $(this).addClass('active');

        // 선택한 메뉴에 따라 막대바 위치 업데이트
        setUnderlinePosition($(this));
    });
});