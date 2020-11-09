$(document).ready(function () {
     
    $('.lo_in1').on('blur', function () {

        var in_val = $(this).val();

        if (in_val) {
            $(this).next('span').fadeIn('fast');
            $(this).css({
                'border-bottom': '1px solid rgb(255,104,0)'
            })
        } else if (in_val == false) {

        }
    });

    $('.lo_in1').on('focus', function () {
        $(this).next('span').fadeOut('fast');
        $(this).css({
            'border-bottom': '1px solid #999'
        })
    });
    
    
    $('.lo_in2').on('blur', function () {

        var in_val = $(this).val();

        if (in_val) {
            $(this).next('span').fadeIn('fast');
            $(this).css({
                'border-bottom': '1px solid rgb(255,104,0)'
            });
        }
    });

    $('.lo_in2').on('focus', function () {
        $(this).next('span').fadeOut('fast');
        $(this).css({
            'border-bottom': '1px solid #999'
        });
    });


});
