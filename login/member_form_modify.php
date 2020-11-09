<?
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<link href="../common/css/common.css" rel="stylesheet" type="text/css" media="all">
	<link href="../member/css/member_form.css" rel="stylesheet" type="text/css" media="all">
	<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	<script>

		function check_input() {
			if (!document.member_form.pass.value) {
				alert("비밀번호를 입력하세요");
				document.member_form.pass.focus();
				return;
			}

			if (!document.member_form.pass_confirm.value) {
				alert("비밀번호확인을 입력하세요");
				document.member_form.pass_confirm.focus();
				return;
			}


			if (!document.member_form.nick.value) {
				alert("닉네임을 입력하세요");
				document.member_form.nick.focus();
				return;
			}

			if (!document.member_form.hp2.value || !document.member_form.hp3.value) {
				alert("휴대폰 번호를 입력하세요");
				document.member_form.nick.focus();
				return;
			}

			if (document.member_form.pass.value !=
				document.member_form.pass_confirm.value) {
				alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
				document.member_form.pass.focus();
				document.member_form.pass.select();
				return;
			}

			document.member_form.submit();
		}

		function reset_form() {
			document.member_form.id.value = "";
			document.member_form.pass.value = "";
			document.member_form.pass_confirm.value = "";
			document.member_form.name.value = "";
			document.member_form.nick.value = "";
			document.member_form.hp1.value = "010";
			document.member_form.hp2.value = "";
			document.member_form.hp3.value = "";
			document.member_form.email1.value = "";
			document.member_form.email2.value = "";

			document.member_form.pass.focus();

			return;
		}

	</script>
</head>
<?
    //$userid='aaa';
    
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);
    //$row[id]....$row[level]

    $hp = explode("-", $row[hp]);  //000-0000-0000
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>

<body>
 <? include "../common/sub_head.html" ?>

    <article id="content">

        <h2>정보수정</h2>
        
        
        <div class="step_container">
           <img src="#" alt="">
        </div>

       
        <form name="member_form" method="post" action="modify.php">
           <div class="form_title"><h3>수정정보 입력</h3><p><span class="astric">*</span>는 필수입력사항입니다.</p></div>
            
            <p class="imp"><span class="astric">*</span>ID는 변경할 수 없으니 신중하게 선택해주세요.</p>
            <p class="imp imp2"><span class="astric">*</span>연락처와 이메일 정보는 입사지원 시에 사용되오니 실제 정보를 입력해주세요.</p>
            <div class="form_group">
                <ul>
                    <li><label for="id">아이디</label></li>
                    <li><?= $userid ?></li>
                </ul>
            </div>
            <div class="form_group">
                <ul>
                    <li><label for="pass">비밀번호<span class="astric">*</span></label></li>
                    <li><input type="password" name="pass" id="pass" required placeholder="사용할 비밀번호를 입력해주세요"></li>
                </ul>
            </div>
            <div class="form_group">
                <ul>
                    <li><label for="pass_confirm">비밀번호확인<span class="astric">*</span></label></li>
                    <li> <input type="password" name="pass_confirm" id="pass_confirm" required placeholder="비밀번호 확인을 위해 다시 한 번 더 입력해주세요"></li>
                </ul>
            </div>
            <div class="form_group">
                <ul>
                    <li><label for="nick">닉네임<span class="astric">*</span></label></li>
                    <li> <input type="text" name="nick" id="nick" required placeholder="사용할 닉네임을 입력해주세요"></li>
                </ul>
            </div>
            <div class="form_group">
                <ul>
                    <li><label for="name">이름</label></li>
                    <li><?= $username ?></li>
                </ul>
            </div>
            <div class="form_group">
                <ul>
                    <li class="label_p_e">휴대폰<span class="astric">*</span></li>
                    <li> <label class="hidden" for="hp1">전화번호앞3자리</label>
                        <select class="hp" name="hp1" id="hp1">
                            <option value='010'>010</option>
                            <option value='011'>011</option>
                            <option value='016'>016</option>
                            <option value='017'>017</option>
                            <option value='018'>018</option>
                            <option value='019'>019</option>
                        </select><label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" required placeholder="1234"><label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" required placeholder="5678"></li>
                </ul>
            </div>
            <div class="form_group">
                <ul>
                    <li class="label_p_e">이메일<span class="astric">*</span></li>
                    <li> <label class="hidden" for="email1">이메일아이디</label>
                        <input type="text" id="email1" name="email1" required placeholder="아이디를 입력해주세요"> @
                        <label class="hidden" for="email2">이메일주소</label>
                        <input type="text" name="email2" id="email2" required placeholder="주소를 입력해주세요"></li>
                </ul>
            </div>
            <div class="action_btn">
                <ul>
                    <li><a href="javascript:void(0)" onclick="check_input()">수정완료</a></li>
                    <li><a href="javascript:void(0)" onclick="reset_form()">다시작성</a></li>
                </ul>
            </div>

            


        </form>

    </article>
    <? include "../common/sub_foot.html" ?>

</body>

</html>
