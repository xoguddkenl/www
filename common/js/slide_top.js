    $(document).ready(function () {
        var th=$('.visual').height();
        
        $('.topMove').hide();      
        //처음엔 숨겨라
        //스크롤은 윈도우 객체 이벤트
        
        $(window).on('scroll', function () {
        //스크롤의 거리가 발생되면 생기는 이벤트
            var scroll = $(window).scrollTop();
            //scroll 변수에 스크롤의 거리값 저장
            
            if (scroll > th) { //스크롤 변수값이 251보다 커지면
                $('.topMove').fadeIn('slow');
            } else {
                $('.topMove').fadeOut('fast');
            }
        });

        $('.topMove').click(function () {
            //상단으로 스르륵 이동합니다.
            $("html,body").stop().animate({ //html,body꼭 사용
                "scrollTop": 0 //스크롤탑 속성 0 으로지정
            }, 1000);//움직이는 시간
        });
    });

//패밀리사이트 함수
$(document).ready(function() {
	$('.fa_con1 .arrow').click(function(){
		$('.fa_con1 .a_list').show();			  
	});
	$('.fa_con1 .a_list').mouseleave(function(){
		$(this).hide();			  
	});
    
    $('.fa_con1 .a_list').find('a').hover(function(){
       $(this).css({background:'#666',color:'#fff'}); 
    },function(){
       $(this).css({background:'#fff',color:'#333'}); 
    });
	//tab키 처리
	  $('.fa_con1 .arrow').bind('focus', function () {        
              $('.fa_con1 .a_list').show();	
       });
       $('.fa_con1 .a_list li:last').find('a').bind('blur', function () {        
              $('.fa_con1 .a_list').hide();
       });  
});