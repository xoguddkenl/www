<? 
	session_start(); 
     @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    //세션변수
    //view.php?num=7&page=1

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="../common/css/common.css" rel="stylesheet">
    <link href="css/view.css" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <script>
        function del(href) {
            if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
            }
        }

    </script>
</head>

<body>
    <? include "../common/sub_head.html" ?>

    <div id="content">
        <div id="col2">
            <div id="title">
                공지사항
            </div>


            <div id="view_title">
                <div id="view_title1"><?= $item_subject ?></div>
                <div id="view_title2"><?= $item_date ?> </div><div id="view_title3"><?= $item_hit ?> </div>
            </div>

            <div id="view_content">
                <?= $item_content ?>
            </div>

            <div id="view_button">
                <a href="list.php?page=<?=$page?>">목록</a>&nbsp;
                <? 
	if($userid==$item_id || $userlevel==1 || $userid=="admin")
	{
?>
                <a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
                <a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
                <?
	}
?>

            </div>

            <div class="clear"></div>

        </div> <!-- end of col2 -->
    </div> <!-- end of content -->
    <? include "../common/sub_foot.html" ?>

</body>

</html>
