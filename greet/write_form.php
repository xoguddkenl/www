<? 
	session_start(); 
     @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="../common/css/common.css" rel="stylesheet">
    <link href="../sub4/common/css/sub4common.css" rel="stylesheet">
    <link href="css/write_form.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>

<body>
    <? include "../common/sub_head.html"; ?>

    <div id="header">
    </div> <!-- end of header -->

    <div id="content">

        <div id="col2">
            <div id="title">
                게시글 작성
            </div>
            <div class="clear"></div>


            <form name="board_form" method="post" action="insert.php">
                <div id="write_form">
                    <div class="write_line"></div>
                    <div id="write_row1">
                        <div class="col1 wr1"> 닉네임 </div>
                        <div class="col2 wr2"> <?=$usernick?></div>
                        <div class="col3 wr3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>
                    </div>
                    <div class="write_line"></div>
                    <div class="col2 wl2"><input type="text" name="subject" placeholder="제목을 입력해 주세요."></div>
                </div>
                <div class="write_line"></div>
                <div id="write_row3">
                    <div class="col2"><textarea rows="15" cols="79" name="content"></textarea></div>
                </div>
                <div class="write_line"></div>


                <div id="write_button">
                    <input type="submit" value="완료">&nbsp;
                    <a href="list.php?page=<?=$page?>">목록</a>
                </div>
            </form>

        </div> <!-- end of col2 -->
    </div> <!-- end of content -->
    <? include "../common/sub_foot.html"; ?>

</body>

</html>
