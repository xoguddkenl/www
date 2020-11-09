<?
           session_start();
?>
<meta charset="utf-8">
<!--폼요소의 ID PASSWORD 값을 받아서 DB와 대조하고 로그인 시켜주는 PHP-->

<?
   @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 
   // 이전화면에서 이름이 입력되지 않았으면 "이름을 입력하세요"
   // 메시지 출력
   // $id=>입력id값    $pass=>입력 pass값
   
  

   if(!$id) {   //아무값도 입력되지 않았냐? 그럼 다시 전페이지로 돌아가~
     echo("
           <script>
             window.alert('아이디를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!$pass) {  //아무값도 입력되지 않았냐? 그럼 다시 전페이지로 돌아가~
     echo("
           <script>
             window.alert('비밀번호를 입력하세요.');
             history.go(-1);
           </script>
         ");
         exit;
   }

    


   include "../lib/dbconn.php";  //ID와 PASS가 입력되었다면 DB연결해~


   $sql = "select * from member where id='$id'";
            //멤버테이블에 ID필드에 들어온 아이디 검색
   $result = mysql_query($sql, $connect);

   $num_match = mysql_num_rows($result);  
            //데이터가 있으면 true,1  없으면0,null

   if(!$num_match) //검색 레코드 넘버가 없으면
   {
     echo("
           <script>
             window.alert('등록되지 않은 아이디입니다.');
             history.go(-1);
           </script>
         ");
    }
    else    //검색 레코드 넘버가 있으면
    {
		 $row = mysql_fetch_array($result);
          //멤버 테이블의 id값의 레코드를 row에 담고 아래와같은 형식으로 사용할 수 있다.
          //$row[id] ,.... $row[level]
         $sql ="select * from member where id='$id' and pass=password('$pass')";
        
         //입력된 id값 = 저장된 id값 찾고
         //입력된 비버 = 저장된 비번
        
          //암호화된 패스워드는 다시 원래대로 돌릴수없다
          //그래서 비밀번호를 대조할 때는 입력된 비밀번호를 다시 암호화시켜서 비교하면된다.
        
          //입력된 값 암호화 = DB에있는 암호화 된 값.
          //입력된 암호화된값 = 저장되어있는 암호화된 값.
        
         $result = mysql_query($sql, $connect);
          //위의 쿼리문 실행
         $num_match = mysql_num_rows($result);
          //id pass 둘다 일치하면 참 아니면 거짓
     
  
        if(!$num_match)  //적은 패스워드와 디비 패스워드가 같지않을때
        {
           echo("
              <script>
                window.alert('비밀번호가 틀립니다.');
                history.go(-1);
              </script>
           ");

           exit;
        }
        else    // 입력 pass 와 테이블에 저장된 pass 일치한다.
        {
           $userid = $row[id]; //멤버 테이블에서 id값을 추출해서 저장
		   $username = $row[name]; //이름 저장
		   $usernick = $row[nick]; //닉네임 저장
		   $userlevel = $row[level];//회원레벨저장
  
            
           //저장된 레코드의 테이블 값을 세션변수에 저장하고 사용한다.
           //세션변수에 id~level 값을 저장한다(로그인상태)
           $_SESSION['userid'] = $userid;//$_SESSION['userid'] = $row[id];
           $_SESSION['username'] = $username;//$_SESSION['username'] = $row[name];
           $_SESSION['usernick'] = $usernick;//$_SESSION['usernick'] = $row[nick];
           $_SESSION['userlevel'] = $userlevel;//$_SESSION['userlevel'] = $row[level];

           echo("
              <script>
			    alert('로그인이 되었습니다.');
                location.href = '../index.html';
              </script>
           ");
        }
   }          
?>
