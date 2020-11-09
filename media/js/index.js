$(document).ready(function () {


    $('.trailer').find('li').mouseenter(function () {
        var num = $(this).index() + 1;
        $(this).find('img').attr('src', 'images/t' + num + '2.jpg');
    });


    $('.trailer').find('li').mouseleave(function () {
        var num = $(this).index() + 1;
        $(this).find('img').attr('src', 'images/t' + num + '.jpg');
    });


    $('.top_btn').click(function () {
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000);
    });


    var current = 0; //모바일 해상도
    $(window).resize(function () {
        var screenSize = $(window).width();
        if (screenSize > 1280) {

            $(".cgimg1").attr('src', 'images/gal2.jpg');
            $(".cgimg2").attr('src', 'images/gal3.jpg');
            current = 1; //모바일 이상의 해상도
        }
        if (current == 1 && screenSize < 1280) {
            $(".cgimg1").attr('src', 'images/gal22.jpg');
            $(".cgimg2").attr('src', 'images/gal33.jpg');

            current = 0;
        }
    });

});
