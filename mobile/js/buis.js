// JavaScript Document

$(document).ready(function () {

    var article = $('.pra'); //모든 div를 변수article에 담았다.
    article.slideUp(500); //모든 div닫아

    $('.buis').find('li').click(function () { //질문 li태그를 클릭하면
        
        var myArticle = $(this).find('.pra'); //각각의 답변을 변수 myArticle에 담았다.

        if (myArticle.hasClass('hide')) {
            //클릭한 li의 답변이 닫혀있어?   
            article.slideUp(500); //모든 답변 다닫아
            article.removeClass('show').addClass('hide'); //모든 답변 숨겨
            myArticle.removeClass('hide').addClass('show'); //클릭한 li 클래스 바꿔치기
            myArticle.slideDown(500); //클릭한 li의 자손 a 슬라이드 다운

        } else { //클릭한 리스트 답변이 열려있어?
            myArticle.removeClass('show').addClass('hide'); //열려있으면 숨겨
            myArticle.slideUp(500);

        };
    });
});
