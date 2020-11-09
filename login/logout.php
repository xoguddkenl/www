<?
  session_start();
  //로그아웃은 세션변수를 삭제시키면 된다.
  unset($_SESSION['userid']);
  unset($_SESSION['username']);
  unset($_SESSION['usernick']);
  unset($_SESSION['userlevel']);
  
  //로그아웃되면 인덱스로 이동
  echo("
       <script>
          location.href = '../index.html'; 
         </script>
       ");
?>
