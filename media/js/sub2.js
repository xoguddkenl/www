$(document).ready(function () {
$('#imgBG').attr('src', 'images/sub2_back.jpg');



$(document).ready(function () {

var s_w=$(window).width();
    
    if (s_w < 768) {
        $('.move_div').insertAfter('.block_div');
        $('.move_div').css('background', '#99cccc');
        $('.block_div').css({
            background: "url(images/sub2_char2.jpg)",
            backgroundSize: "cover"
        });
    } else if (s_w > 768) {
        $('.block_div').insertAfter('.move_div');
        $('.block_div').css({
            background: "url(images/sub2_char2.jpg)center center",
            backgroundSize: "cover"
        });
    }





$(window).resize(function () {
    var screen_width = $(window).width();
    console.log(screen_width);
    if (screen_width < 768) {
        $('.move_div').insertAfter('.block_div');
        $('.move_div').css('background', '#99cccc');
        $('.block_div').css({
            background: "url(images/sub2_char2.jpg)",
            backgroundSize: "cover"
        });
    } else if (screen_width > 768) {
        $('.block_div').insertAfter('.move_div');
        $('.block_div').css({
            background: "url(images/sub2_char2.jpg)center center",
            backgroundSize: "cover"
        });
    }
});
});
});
