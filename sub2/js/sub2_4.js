var new_list = ['', '', '', '', '', '', '', '']; //제이슨 사용하기위한 전역변수

$(document).ready(function () {
    var move_distance = 268; //버튼 한번당 움직일 거리
    var defult = 0; //위치 기본값
    var move_distance1 = 268; //버튼 한번당 움직일 거리
    var defult1 = 0; //위치 기본값
    var move_distance2 = 268; //버튼 한번당 움직일 거리
    var defult2 = 0; //위치 기본값

    $('.move_box ul').eq(0).after($('.move_box ul').eq(0).clone());
    $('.move_box1 ul').eq(0).after($('.move_box1 ul').eq(0).clone());
    $('.move_box2 ul').eq(0).after($('.move_box2 ul').eq(0).clone());

    $('.fix_box').each(function (index) {

    });

    $('#content_area').find('a').each(function (index) {
        $(this).click(function () {
            if (index == 0) {
                if (defult == -804) {
                    $('.move_box').css('left', 0);
                    defult = 0;
                };

                defult -= move_distance;

                $('.move_box').stop().animate({
                    left: defult
                }, 'fast', function () {
                    if (defult == -804) {
                        $('.move_box').css('left', 0);
                        defult = 0;
                    };
                });
            } else if (index == 1) {
                if (defult == 0) {
                    $('.move_box').css('left', -804);
                    defult = -804;
                };

                defult += move_distance;

                $('.move_box').stop().animate({
                    left: defult
                }, 'fast', function () {
                    if (defult == 0) {
                        $('.move_box').css('left', -804);
                        defult = -804;
                    };
                });
            } else if (index == 2) {
                if (defult1 == -804) {
                    $('.move_box1').css('left', 0);
                    defult1 = 0;
                };

                defult1 -= move_distance1;

                $('.move_box1').stop().animate({
                    left: defult1
                }, 'fast', function () {
                    if (defult1 == -804) {
                        $('.move_box1').css('left', 0);
                        defult1 = 0;
                    };
                });
            } else if (index == 3) {
                if (defult1 == 0) {
                    $('.move_box1').css('left', -804);
                    defult1 = -804;
                };

                defult1 += move_distance1;

                $('.move_box1').stop().animate({
                    left: defult1
                }, 'fast', function () {
                    if (defult1 == 0) {
                        $('.move_box1').css('left', -804);
                        defult1 = -804;
                    };
                });
            } else if (index == 4) {
                if (defult2 == -804) {
                    $('.move_box2').css('left', 0);
                    defult2 = 0;
                };

                defult2 -= move_distance2;

                $('.move_box2').stop().animate({
                    left: defult2
                }, 'fast', function () {
                    if (defult2 == -804) {
                        $('.move_box2').css('left', 0);
                        defult2 = 0;
                    };
                });
            } else if (index == 5) {
                if (defult2 == 0) {
                    $('.move_box2').css('left', -804);
                    defult2 = -804;
                };

                defult2 += move_distance2;

                $('.move_box2').stop().animate({
                    left: defult2
                }, 'fast', function () {
                    if (defult2 == 0) {
                        $('.move_box2').css('left', -804);
                        defult2 = -804;
                    };
                });
            }
        });
    });
});


$(document).ready(function () {
    var xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.
    xhr.onload = function () { // When readystate changes
        //if(xhr.status === 200) {                      // If server status was ok
        var subtext = JSON.parse(xhr.responseText); //서버로 부터 전달된 json 데이터를 변수에 담는다  
        for (var i = 0; i < 9; i++) {
            new_list[i] += '<h1>' + subtext.info[i].title + '</h1>';
            new_list[i] += '<img src="' + subtext.info[i].pic + '" alt="">';
            new_list[i] += '<p>' + subtext.info[i].prag + '</p>';
            new_list[i] += '<a href="javascript:void(0);"></a>';
        }
    };
    xhr.open('GET', 'js/sub2_4_info.json', true); // 제이슨파일 불러옴
    xhr.send(null); // 요청을 전송한다
});


//모달 클릭 이벤트
$(document).ready(function () {
    $('.click_open_modal').click(function () {
        $('.modal_back').fadeIn();
    });

    $('.modal_back').click(function () {
        $('.modal_back').fadeOut();
    });


    $('.click_open_modal').each(function (index) {
        $(this).click(function () {
            if (index == 0 || index == 3) {
                $('.modal_con').html(new_list[0]);
            } else if (index == 1 || index == 4) {
                $('.modal_con').html(new_list[1]);
            } else if (index == 2 || index == 5) {
                $('.modal_con').html(new_list[2]);
            } else if (index == 6 || index == 9) {
                $('.modal_con').html(new_list[3]);
            } else if (index == 7 || index == 10) {
                $('.modal_con').html(new_list[4]);
            } else if (index == 8 || index == 11) {
                $('.modal_con').html(new_list[5]);
            } else if (index == 12 || index == 15) {
                $('.modal_con').html(new_list[6]);
            } else if (index == 13 || index == 16) {
                $('.modal_con').html(new_list[7]);
            } else if (index == 14 || index == 17) {
                $('.modal_con').html(new_list[8]);
            }
        });
    });


});
