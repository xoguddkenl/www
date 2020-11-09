$(document).ready(function () {

    var gaonoff=null;
    var timeonoff=null; //자동기능 구현
    var imageCount = 3; //이미지 개수 *** 
    var cnt = 1; //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
    var direct = 1; //1씩 증가(+1)/감소(-1)
    var position = 0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
    var onoff = true;

    $('.visual').find('.btn1').css('background', 'rgba(255,255,255,1)');
    $('.visual').children('ul').eq(1).children('li').eq(0).css('width', '30'); //첫번째 동그라미 흰색


    var w = 0;

    function ga_ani() {
        w += 1; //1씩증가
        $('.ga_in').width(w + '%'); //위쓰값 퍼센테이지
        if (w == 100) { //100퍼센트되면
            w = 0;
            clearInterval(gaonoff);
            //gaonoff 멈춰
        }
    };



    function moveg() {
        gaonoff = setInterval(ga_ani, 40);
        cnt += direct; //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......
        //각각의 카운트에 대한 left 좌표값을 처리
        if (cnt == 1) {
            position = 0;

        } else if (cnt == 2) {
            position = -2000;

        } else if (cnt == 3) {
            position = -4000;

        }

        $('.btn').css('background', 'rgba(255,255,255,.5)');
        //다 불꺼
        $('.visual').children('ul').eq(1).children('li').stop().animate({
            width: 20
        });

        $('.btn' + cnt).css('background', 'rgba(255,255,255,1)');
        $('.visual').children('ul').eq(1).children('li').eq(cnt - 1).stop().animate({
            width: 30
        });
        //자신만 불켜      

        $('.visual').children('ul').eq(0).animate({
            left: position
        }, 'slow'); //겔러리 무비의 left값을 움직여라~
        if (cnt == imageCount) direct = -1; //cnt가 3일때 디렉트 값 -1
        if (cnt == 1) direct = 1; //cnt가1일때 디렉트값 1
    };


    timeonoff = setInterval(moveg, 4000);


    $('.btn').click(function (event) { //각각의 버튼을 클릭한다면...
        var $target = $(event.target); //$target == this =>실제 클릭한 버튼
        clearInterval(timeonoff); //타이머를 중지!!
        clearInterval(gaonoff);
        $('.ga_in').width(0 + '%');



        $('.visual').children('ul').eq(1).children('li').stop().animate({
            width: 20
        });

        $('.btn').css('background', 'rgba(255,255,255,.5)');

        if ($target.is('.btn1')) { //첫번째 버튼을 클릭했다면...
            $('.visual').children('ul').eq(0).animate({
                left: 0
            }, 'slow');
            cnt = 1;
            direct = 1;

        } else if ($target.is('.btn2')) { //두번째 버튼을 클릭했다면...
            $('.visual').children('ul').eq(0).animate({
                left: -2000
            }, 'slow');
            cnt = 2;

        } else if ($target.is('.btn3')) { //세번째 버튼을 클릭했다면...
            $('.visual').children('ul').eq(0).animate({
                left: -4000
            }, 'slow');
            cnt = 3;
            direct = -1;

        }

        $('.btn' + cnt).css('background', 'rgba(255,255,255,1)');

        $('.visual').children('ul').eq(1).children('li').eq(cnt - 1).stop().animate({
            width: 30
        });
        //클릭한 버튼의 불켜
        timeonoff = setInterval(moveg, 4000); //타이머의 재 동작
        if (onoff == false) {
            onoff = true;
            $('.ps').css('background', 'url(images/stop.png)');
        };
    });

    $('.ps').click(function () {
        if (onoff == true) {

            clearInterval(timeonoff); // stop버튼 클릭시
            $(this).children('span').css('background', 'url(images/play.png)');
            onoff = false;


        } else {

            timeonoff = setInterval(moveg, 4000); //play버튼
            $(this).children('span').css('background', 'url(images/stop.png)');
            onoff = true;

        }
    });
});
