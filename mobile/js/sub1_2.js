$(document).ready(function () {
	$('.content').children('div').eq(0).show();
	$('.content').children('div').eq(0).siblings('div').hide();

	$('.content').find('li').each(function (index) {
		$(this).on('click', function () {
			$('.content').children('div').eq(index).show();
			$('.content').children('div').eq(index).siblings('div').hide();
			
			$(this).children('a').addClass('acurrnet');
			$(this).siblings('li').children('a').removeClass('acurrnet');
		});
	});
});
