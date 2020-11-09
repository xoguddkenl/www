$(document).ready(function () {
    $('.content').children('div').eq(0).show();

    $('.content').find('li').each(function (index) {
        $(this).on('click', function () {
            $('.content').children('div').eq(index).show();
            $('.content').children('div').eq(index).siblings('div').hide();
            $(this).children('a').addClass('acurrnet');
            $(this).siblings('li').children('a').removeClass();
            $('html, body').animate({
                scrollTop: 400
            }, 'slow');

        });
    });

    $('.content').addClass('box_move');
    $(window).on('scroll', function () {
        var wintop = $(window).scrollTop();
        if (wintop > 600) {
            $('.content>ol').css({
                position: 'fixed',
                top: 190
            });
        } else {
            $('.content>ol').css({
                position: 'relative',
                top: 0
            });

        }

    });

});
