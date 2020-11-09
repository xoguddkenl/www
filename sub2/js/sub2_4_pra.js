 window.onload = function () { //a=1 (파라미터)값이 넘어온다.   

     var purl = window.location; //호출된 현재창의 주소를 tmp에 담는다. sub.html?a=1에서 a=1필요  location객체는 주소창을 관리하는 객체
     tmp = String(purl).split('?'); //? 이전과 이후가 배열에 담김 split함수는''안에 담긴 문자를 기준으로 앞 뒤를 구분짓는다.
     //?기준 앞 뒤 두개로 나뉜것을 tmp에 담아서 tmp는 배열이 된다.
     //tmp[0]='sub.html' , tmp[1]='a=1 , a=2 , a=3'

     tmp2 = tmp[1].split('=');
     //tmp[1] = 'a=1' 을 '=' 기준으로 나누어서 tmp2에 담는다
     //tmp2[0]= 'a' , tmp2[1] = '1' 이 되었다.


     if (tmp2[1] == 1) {
         $('html, body').animate({
             scrollTop: 400
         }, 'slow');
     } else if (tmp2[1] == 2) {
         $('html, body').animate({
             scrollTop: 900
         }, 'slow');
     } else if (tmp2[1] == 3) {
         $('html, body').animate({
             scrollTop: 1600
         }, 'slow');
     }

 }
