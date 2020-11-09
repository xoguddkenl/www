$(document).ready(function(){
    
    $('#content_area .down_box').eq(0).addClass('box_move');
    
    $(window).on('scroll',function(){
        var scroll_top = $(window).scrollTop();
        
        if(scroll_top >= 700 && scroll_top <1700){
            $('#content_area .down_box').eq(1).addClass('box_move');
        }else if(scroll_top >= 1700 && scroll_top<1800){
             $('#content_area h3.down_box').addClass('box_move');
        }else if(scroll_top > 1800){
             $('#content_area ul.down_box').addClass('box_move');
        };
        
    });
   
    
});