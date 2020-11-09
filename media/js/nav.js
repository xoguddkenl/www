 $(document).ready(function () {

     $(".btn").toggle(function () {
         $("#gnb").stop().slideDown('slow');
     }, function () {
         $("#gnb").stop().slideUp('fast');
     });

     var current = 0; //모바일 해상도
     $(window).resize(function () {
         var screenSize = $(window).width();
         if (screenSize > 768) {
             $("#gnb").show();
             $(".btn").hide();
             current = 1; //모바일 이상의 해상도
         }
         if (current == 1 && screenSize < 768) {
             $("#gnb").hide();
             $(".btn").show();
             current = 0;
         }
     });

     var winwith = $(window).width();
     if (winwith > 768) {
         $("#gnb").show();
         $(".btn").hide();
     } else {
         $("#gnb").hide();
         $(".btn").show();
     }

 });
