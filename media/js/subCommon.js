    $(document).ready(function () {
    	var imgHeight = $(".videoBox").height();
    	$("#content").css('margin-top', imgHeight);

    	$('.top_btn').click(function () {
    		$("html,body").stop().animate({
    			"scrollTop": 0
    		}, 1000);
    	});
		
		
    	$(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    		screenSize = $(window).width();
    		screenHeight = $(window).height();

    		$("#content").css('margin-top', screenHeight);

    	});


    });
