// JavaScript Document

$(document).ready(function () {

    var article = $('.faq .article'); //모든 li를 변수article에 담았다.
    article.find('.a').slideUp(100); //모든 li의 답변 p를 닫아라.
    var tf_qa = false;
    var cnt_onoff = 0;

    $('.faq .article .trigger').click(function () { //질문 a태그를 클릭하면
        var myArticle = $(this).parents('.article'); //각각의 질문 a태그의 li를 변수 myArticle에 담았다.

        if (myArticle.hasClass('hide')) {
            //클릭한 li의 답변이 닫혀있어?   
            article.find('.a').slideUp(100); //모든 답변 다닫아
            article.removeClass('show').addClass('hide'); //모든 답변 숨겨
            myArticle.removeClass('hide').addClass('show'); //클릭한 li 클래스 바꿔치기
            myArticle.find('.a').slideDown(100); //클릭한 li의 자손 a 슬라이드 다운

        } else { //클릭한 리스트 답변이 열려있어?
            myArticle.removeClass('show').addClass('hide'); //열려있으면 숨겨
            myArticle.find('.a').slideUp(100);

        };


        cnt_onoff = $('.faq .hide').length;
        //alert(cnt_onoff);
        if (cnt_onoff == 5) {
            article.find('.a').slideUp(100);
            article.removeClass('show').addClass('hide');
            article.find('span').text('+');
            $('.all').text('모두열기▼');

            tf_qa = false;
        }
    });

    $('.all').click(function () {

        if (tf_qa == false) {

            article.find('.a').slideDown(100);
            article.removeClass('hide').addClass('show');
            article.find('span').text('-');
            $(this).text('모두닫기▲');

            tf_qa = true;
        } else {
            article.find('.a').slideUp(100);
            article.removeClass('show').addClass('hide');
            article.find('span').text('+');
            $(this).text('모두열기▼');

            tf_qa = false;
        }

    });
});
