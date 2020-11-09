//$('ul.dropdownmenu').on('hover', function () {
//        
//}, function () {
//        $(this).parents('.gnb_box').stop().slideDown(1000);
//        $(this).parents('.gnb_box').stop().animate({height:245},'fast');
//     $(this).find('ul').fadeIn('nomal');
//})


$(document).ready(function () {

    $('ul.dropdownmenu').hover(
        function () {
            $(this).parents('.gnb_box').stop().animate({
                height: 268
            }, 'fast');
            $('li.menu').children('ul').stop().fadeIn('fast');
        },
        function () {
            $(this).parents('.gnb_box').stop().animate({
                height: 108
            }, 'fast');
            $('li.menu').children('ul').stop().fadeOut('fast');
        });


    //tab키처
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
        $('ul.dropdownmenu li.menu ul').slideDown('fast');
        $('.menu_box').slideDown('fast');
    });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('.menu_box').slideUp('fast');
    });

});
