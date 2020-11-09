$(document).ready(function () {

    var startX, endX;
    //시작과 끝을 감지하는 변수
    var move_swiper = 0;

    $('.box_swiper').on('touchstart mousedown', function (e) { //마우스클릭 혹은 모바일에서 터치 했을 때 매개변수에 값이 담긴다.
        //이벤트 중첩은 한칸띄고 쓴다.
        //모바일은 터치스타트만 있어도되지만 PC에서는 마우스다운도 필요하다.

        //링크 막는메소드
        e.preventDefault();
        startX = e.pageX || e.originalEvent.touches[0].pageX;
        //스타트X에 X좌표가 담긴다.
        //두번째 조건은 모바일디바이스에서 터치했을 때 좌표가 담긴다.
    });


    $('.box_swiper').on('touchend mouseup', function (e) { //마우스 혹은 터치를 뗐을 때 매개변수에 값이 담긴다.

        e.preventDefault();
        endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
        //앤드X에 마우스 or 터치를 뗏을 때 값이 담긴다.

        move_swiper += endX - startX;


        if (startX < endX) {

            $('.box_swiper').stop().animate({
                left: move_swiper
            });

            if (move_swiper > 200) {
                move_swiper = 0;
                $('.box_swiper').stop().animate({
                    left: move_swiper
                });
            }

            //왼쪽에서 오른쪽으로 밀었을 때
            //왼쪽으로 움직여야지
        } else {

            var end_swiper = -$('.box_swiper').width() + $('.box_swiper').width() / 6;
            var end_swiper2 = -$('.box_swiper').width() + $('.box_swiper').width() / 4

            $('.box_swiper').stop().animate({
                left: move_swiper
            });


            if (move_swiper < end_swiper) {

                move_swiper = end_swiper2;
                $('.box_swiper').stop().animate({
                    left: move_swiper
                });

            }

            //오른쪽에서 왼쪽으로 밀었을 때
        }
    });

    $(window).on("orientationchange", function (event) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            // 세로 모드 (평소 사용하는 각도)
            move_swiper = 0;
            $('.box_swiper').stop().animate({
                left: move_swiper
            });
            console.log('세로');
            $("#orientation_val").html("portrait");
            $('.swiper-slide').eq(0).children('img').attr('src', 'images/visual1rand.jpg');
            $('.swiper-slide').eq(1).children('img').attr('src', 'images/visual2rand.jpg');
            $('.swiper-slide').eq(2).children('img').attr('src', 'images/visual3rand.jpg');



        } else if (window.matchMedia("(orientation: landscape)").matches) {
            // 가로 모드 (동영상 볼때 사용하는 각도)
            move_swiper = 0;


            $("#orientation_val").html("landscape");
            $('.swiper-slide').eq(0).children('img').attr('src', 'images/visual640.png');
            $('.swiper-slide').eq(1).children('img').attr('src', 'images/visual2640.png');
            $('.swiper-slide').eq(2).children('img').attr('src', 'images/visual3640.png');

            $('.box_swiper').stop().animate({
                left: move_swiper
            });
        } else {
            alert("The orientation has changed!");
        }
    });


});
