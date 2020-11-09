$(document).ready(function () {
    var position = -260; //최초위치, 목적지 left값
    var movesize = 350; //li하나의 넓이 이동값

    var timeonoff;

    $('.port_inner').children('div').css('overflow', 'hidden');
    $('.clone_div ul').after($('.clone_div ul').clone());

    $('.port_btn').click(function () {

        if ($(this).hasClass('btn_left')) {
            if (position == -2010) { //왼쪽 다섯번 누르면
                $('.clone_div').css('left', -260);
                position = -260; //최초의 위치로 돌아가
            };

            position -= movesize; //350씩감소

            $('.clone_div').stop().animate({
                left: position
            }, 'fast', function () {
                if (position == -2010) { //왼쪽 다섯번 누르면
                    $('.clone_div').css('left', -260);
                    position = -260; //최초의 위치로 돌아가
                };
            });

        } else if ($(this).hasClass('btn_right')) {

            if (position == 90) { 
                $('.clone_div').css('left', -1660);
                position = -1660; //최초의 위치로 돌아가
            };

            position += movesize; //350씩감소

            $('.clone_div').stop().animate({
                left: position
            }, 'fast', function () {
                if (position == 90) { //왼쪽 다섯번 누르면
                    $('.clone_div').css('left', -1660);
                    position = -1660; //최초의 위치로 돌아가
                };
            });
        };

    });

});
