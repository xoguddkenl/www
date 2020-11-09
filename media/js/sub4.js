$(document).ready(function () {
	$('#imgBG').attr('src', 'images/cast_1.jpg');
	$('.swiper-slide').eq(0).css('opacity','1');

	$('.swiper-slide').click(function () {
		var img_index = $(this).index();
		console.log(img_index);
		
		$(this).css('opacity','1');
		$(this).siblings().css('opacity','.5');

		if (img_index == 0) {
			$('#imgBG').attr('src', 'images/cast_1.jpg');
			$('.act_name').text('Suraj Sharma');
		} else if (img_index == 1) {
			$('#imgBG').attr('src', 'images/cast_2.jpg');
			$('.act_name').text('Irrfan Khan');
		} else if (img_index == 2) {
			$('#imgBG').attr('src', 'images/cast_3.jpg');
			$('.act_name').text('Rafe Spall');
		} else if (img_index == 3) {
			$('#imgBG').attr('src', 'images/cast_4.jpg');
			$('.act_name').text('Adil Hussain');
		} else if (img_index == 4) {
			$('#imgBG').attr('src', 'images/cast_5.jpg');
			$('.act_name').text('Tabu');
		} else if (img_index == 5) {
			$('#imgBG').attr('src', 'images/cast_6.jpg');
			$('.act_name').text('Gerard Depardieu');
		}
	});


});
