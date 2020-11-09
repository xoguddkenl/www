<? 
	session_start(); 
     @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
   //세션변수 4
    //num=7&page=1

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="../common/css/common.css" rel="stylesheet">
    <link href="css/modify.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
<body>
    <? include "../common/sub_head.html" ?>
  <div id="content">


	<div id="col2">        
		<div id="title">
			게시글 수정
		</div>

		<div class="clear"></div>
		<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>"> 
		<div id="write_form">
			<div class="write_line"></div>
			<div id="write_row1">
				<div class="col1 wr1"> 닉네임 </div>
				<div class="col2 wr2"><?=$usernick?></div>
			</div>
			<div class="write_line"></div>
			<div class="col2 wl2"><input type="text" name="subject" value="<?=$item_subject?>" ></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3">
                    <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
                </div>
			<div class="write_line"></div>

		<div id="write_button">
                    <input type="submit" value="완료">&nbsp;
                    <a href="list.php?page=<?=$page?>">목록</a>
                </div>
		</form>

	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
 <!-- end of wrap -->
    <? include "../common/sub_foot.html" ?>
</body>
</html>