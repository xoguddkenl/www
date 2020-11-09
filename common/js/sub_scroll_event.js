$(document).ready(function () {

    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();

        if (scroll_top < 400) {
            $('.gnb_box').css({
                background: 'rgba(0,0,0,.5)',
                borderBottom: 'none'
            });
            $('.menu').find('a').css('color', '#fff');

            $('.menu').find('li').hover(function () {
                $(this).children('a').css('color', 'rgba(255,0,51,1)');
            }, function () {
                $(this).children('a').css('color', 'rgba(255,255,255,1)');
            });

        } else {
            $('.gnb_box').css({
                background: 'rgba(255,255,255,1)',
                borderBottom: '1px solid #ccc'
            });
            $('.menu').find('a').css('color', '#333');
            $('.menu').find('li').hover(function () {
                $(this).children('a').css('color', 'rgba(255,0,51,1)');
            }, function () {
                $(this).children('a').css('color', 'rgba(0,0,0,1)');
            });
        };
    });
});


