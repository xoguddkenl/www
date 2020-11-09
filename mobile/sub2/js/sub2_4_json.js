$(document).ready(function(){
    
var xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function () { // When readystate changes

    //if(xhr.status === 200) {                      // If server status was ok
    var subtext = JSON.parse(xhr.responseText); //서버로 부터 전달된 json 데이터를 변수에 담는다

    var new_list = '';
    var new_list1 = '';
    var new_list2 = '';

    new_list += '<ul>';
    for (var i = 0; i < 3 ;i++) {
        new_list += '<li>';
        new_list += '<ul class="click_open_modal">';
        new_list += '<li><img src="' + subtext.job[i].pimg + '"></li>';
        new_list += '<li>' + subtext.job[i].pname + '</li>';
        new_list += '<li>' + subtext.job[i].poder + '</li>';
        new_list += '<li>' + subtext.job[i].time + '</li>';
        new_list += '<li>' + subtext.job[i].form + '</li>';
        new_list += '</ul>';
        new_list += '</li>';
    };
    new_list += '</ul>';


    new_list1 += '<ul>';
    for (var i = 3; i < 6; i++) {
        new_list1 += '<li>';
        new_list1 += '<ul class="click_open_modal">';
        new_list1 += '<li><img src="' + subtext.job[i].pimg + '"></li>';
        new_list1 += '<li>' + subtext.job[i].pname + '</li>';
        new_list1 += '<li>' + subtext.job[i].poder + '</li>';
        new_list1 += '<li>' + subtext.job[i].time + '</li>';
        new_list1 += '<li>' + subtext.job[i].form + '</li>';
        new_list1 += '</ul>';
        new_list1 += '</li>';
    };
    new_list1 += '</ul>';

    new_list2 += '<ul>';
    for (var i = 6; i < 9 ;i++) {
        new_list2 += '<li>';
        new_list2 += '<ul class="click_open_modal">';
        new_list2 += '<li><img src="' + subtext.job[i].pimg + '"></li>';
        new_list2 += '<li>' + subtext.job[i].pname + '</li>';
        new_list2 += '<li>' + subtext.job[i].poder + '</li>';
        new_list2 += '<li>' + subtext.job[i].time + '</li>';
        new_list2 += '<li>' + subtext.job[i].form + '</li>';
        new_list2 += '</ul>';
        new_list2 += '</li>';
    };
    new_list2 += '</ul>';

    $('.move_box').eq(0).html(new_list);
    $('.move_box').eq(1).html(new_list1);
    $('.move_box').eq(2).html(new_list2);

};

xhr.open('GET', 'js/sub2_4.json', true); // 제이슨파일 불러옴
xhr.send(null); // 요청을 전송한다

});