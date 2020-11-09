$(document).ready(function () {

	var wrap_menu = $('.open_sub_menu');
	//전체 a를 담았다.

	function wrap_toggle() {
		wrap_menu.toggle(function () {
			$(this).next('ul').stop().slideDown();
		}, function () {
			$(this).next('ul').stop().slideUp();
		});
	}

	//햄버거메뉴 토글 이벤트
	$('#gnb a').toggle(function () {
		$('.drop_down_menu').stop().slideDown('fast');
		$('#gnb').find('div').eq(0).addClass('rotatebox');
		$('#gnb').find('div').eq(1).addClass('rotatebox3');
		$('#gnb').find('div').eq(2).addClass('rotatebox2');
		wrap_toggle();
	}, function () {
		$('.hide').stop().slideUp();
		$('.drop_down_menu').stop().slideUp('fast');
		$('#gnb').find('div').eq(0).removeClass('rotatebox');
		$('#gnb').find('div').eq(1).removeClass('rotatebox3');
		$('#gnb').find('div').eq(2).removeClass('rotatebox2');
		wrap_toggle();
	});


	//비즈니스 fade 이벤트

    
    $('.buis').find('li').click(function(){
       
    });


	//TOP이벤트
	$('.stop').click(function () {
		//상단으로 스르륵 이동합니다.
		$("html,body").stop().animate({ //html,body꼭 사용
			"scrollTop": 0 //스크롤탑 속성 0 으로지정
		}, 1000); //움직이는 시간
	});


});
