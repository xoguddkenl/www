$(document).ready(function () {
    $('#content_area').children('div').eq(1).addClass('box_move');

    $(window).on('scroll', function () {
        var scroll_h = $(window).scrollTop();

        if (scroll_h > 1000) {
            $('#content_area').children('div').eq(2).addClass('box_move');
        }
    });
});
