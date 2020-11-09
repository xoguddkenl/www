<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>


<!DOCTYPE html>
<!--폼요소의 ID와 PASSWORD의 값만 전송해주는 php-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <link href="../common/css/common.css" rel="stylesheet" type="text/css" media="all">
    <link href="login.css" rel="stylesheet" type="text/css" media="all">
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script src="login.js"></script>

    
</head>

<body>
    <div id="login_wrap">
        <div id="wrap">
            <div id="content">
                <div id="col2">
                    <form name="member_form" method="post" action="login.php">
                        <div id="title">
                            <a href="../index.html">
                                <p class="hidden">메인페이지로 가기</p><img src="images/login_logo.png" alt="">
                            </a>
                        </div>
                        <div id="sub_title">
                            <p>Wellcome To <span>SK E&amp;C</span> Sign in and join now.</p>
                        </div>
                        <div id="login_form">
                            <div id="id_pw_input">
                                <ul>
                                    <li class="input_img"><input type="text" name="id" class="login_input lo_in1"><span></span></li>
                                    <li class="input_img"><input type="password" name="pass" class="login_input lo_in2"><span></span></li>
                                </ul>
                            </div>
                            <div id="action_btn">
                                <div id="login_button">
                                    <!--					    input type="image" 는 submit과 같은기능-->
                                    <input type="submit" value="로그인">
                                </div>

                                <div id="join_button"><a href="../member/join.html">회원가입</a></div>
                            </div>
                        </div> <!-- end of form_login -->
                    </form>
                </div> <!-- end of col2 -->
            </div> <!-- end of content -->
        </div> <!-- end of wrap -->
    </div>
</body>
</html>
