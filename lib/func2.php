﻿<?
   function latest_article2($table, $loop, $char_limit) 
   {
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];
			$len_subject = mb_strlen($row[subject], 'utf-8');
			$subject = $row[subject];

			if ($len_subject > $char_limit)
			{
				 $subject = str_replace( "&#039;", "'", $subject);               
                                                       $subject = mb_substr($subject, 0, $char_limit, 'utf-8');
				$subject = $subject."...";
			}

			$regist_day = substr($row[regist_day], 0, 10);

             //목록 이미지 경로 불러오기
			$img_name = $row[file_copied_0];
			if($img_name){
				$img_name = "./$table/data/".$img_name;
			}else{
				$img_name = "./$table/data/default.jpg"; 
			}


			echo "      
				<div class='col1'>
				
				<img src='$img_name' width='80' height='60'>
				<a href='./$table/view.php?table=$table&num=$num'>$subject</a></div> <div class='col2'>$regist_day</div>
				<div class='clear'></div>
			";
		}
		mysql_close();
   }
?>