<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	$table = "news";
//해당 게시판의 테이블명으로 담아놓고 sql문만 수정한다.
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta charset="utf-8">
    <link href="../common/css/common.css" rel="stylesheet">
    <link href="../sub4/common/css/sub4common.css" rel="stylesheet">
    <link href="css/news.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
<?
	include "../lib/dbconn.php";

    
   if (!$scale)
    $scale=10;			// 한 화면에 표시되는 글 수

    
    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>

<body>
    <? include "../common/sub_head.html" ?>
    <? $_GET['num']=1;
        include "common/sub_indecator.html"; ?>


    <div id="content">
        <div id="title">
            <div id="content_area">
                <div class="title_area">
                    <div class="line_map"><span>home</span> &gt; <span>홍보센터</span> &gt; <strong>뉴스</strong>
                    </div>
                    <h2>뉴스</h2>
                </div>

            </div>
        </div>
        <form name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search">
            <div id="list_search">
                <div id="list_search1"> TOTAL <?= $total_record ?></div>
                <select name="scale" onchange="location.href='list.php?scale='+this.value" class="selecter">
                    <option value=''>보기</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                </select>
                <div id="list_search3">
                    <select name="find">
                        <option value='subject'>제목</option>
                        <option value='content'>내용</option>
                        <option value='nick'>별명</option>
                        <option value='name'>이름</option>
                    </select></div>
                <div id="list_search4"><input type="text" name="search" placeholder="검색할 단어를 입력해주세요"></div>
                <div id="list_search5"><input type="submit" value="검색"></div>
            </div>
        </form>

        <div id="list_content">
            <?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
      mysql_data_seek($result, $i);       
      // 가져올 레코드로 위치(포인터) 이동  
      $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	  $item_num     = $row[num];
	  $item_id      = $row[id];
	  $item_name    = $row[name];
      $item_content = $row[content];
  	  $item_nick    = $row[nick];
	  $item_hit     = $row[hit];
      $item_date    = $row[regist_day];
	  $item_date = substr($item_date, 0, 10);  
	  $item_subject = str_replace(" ", "&nbsp;", $row[subject]);
        
    $item_len = mb_strlen($item_subject, 'utf-8');
    $con_len = mb_strlen($item_content, 'utf-8');
       
       
       if($item_len > 40){
           $item_subject = str_replace( "&#039;", "'", $item_subject); 
           $item_subject = mb_substr($item_subject, 0, 50, 'utf-8');
           $item_subject = $item_subject."...";
       }
       
       if($con_len > 160){
           $item_content = str_replace( "&#039;", "'", $item_content); 
           $item_content = mb_substr($item_content, 0, 160, 'utf-8');
           $item_content = $item_content."...";
       }
       
       
       
       
      if($row[file_copied_0]){ //배열에 인덱스0에 값이 있다면 (파일이 있다면)
        $item_img = 'data/'.$row[file_copied_0];  
      }else{ //첨부된 이미지가 없으면
        $item_img = 'data/default.jpg'  ;
      }
      
?>
            <div id="list_item">
               <div id="list_item_con">
                   <dl>
                       <dt><?= $item_subject ?></dt>
                       <dd><?= $item_date ?></dd>
                       <dd><?= $item_content ?></dd>
                   </dl>
               </div>
               <div id="list_item_img">
                 <img src="<?= $item_img ?>" alt="">  
               </div>
               <a href="view.php?num=<?=$item_num?>&page=<?=$page?>&table=<?=$table?>">뉴스상세페이지로</a>
            </div>
        
            <?
   	   $number--;
   }
?>
            <div id="page_button">
                <div id="page_num"> ◀ &nbsp;&nbsp;&nbsp;&nbsp;
                    <?
   // 게시판 목록 하단에 페이지 링크 번호 출력
  for ($i=1; $i<=$total_page; $i++)
   {
		if ($page == $i)     // 현재 페이지 번호 링크 안함
		{
			echo "<b> $i </b>";
		}
		else
		{ 
           if($mode=="search"){
             echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search'> $i </a>"; 
            }else{    
            
			  echo "<a href='list.php?page=$i&scale=$scale'> $i </a>";
           }
		}      
   }
?>
							&nbsp;&nbsp;&nbsp;&nbsp; ▶
						</div>
						<div id="button">
							<a href="list.php?page=<?=$page?>">목록</a>&nbsp;
							<? 
	if($userid)
	{
?>
							<a href="write_form.php?table=<?=$table?>">작성</a>
							<?
	}
?>
						</div>
					</div> <!-- end of page_button -->

				</div> <!-- end of list content -->

				<div class="clear"></div>

			</div> <!-- end of col2 -->
	<? include "../common/sub_foot.html" ?>
</body>

</html>