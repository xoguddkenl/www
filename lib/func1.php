<?
   function latest_article($table, $loop, $char_limit, $con_limit) 
   {
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];
            $len_subject = mb_strlen($row[subject], 'utf-8');
            $len_con = mb_strlen($row[content], 'utf-8');
            
			$subject = $row[subject];
            $content = $row[content];

			if ($len_subject > $char_limit)
			{
				$subject = str_replace( "&#039;", "'", $subject);               
                $subject = mb_substr($subject, 0, $char_limit, 'utf-8');
				$subject = $subject."...";
			}
            
            if ($len_con > $con_limit)
			{
				$content = str_replace( "&#039;", "'", $content);               
                $content = mb_substr($content, 0, $con_limit, 'utf-8');
				$content = $content."...";
			}

			echo "      
                <dl class='news_notice_wrap'> 
                    <dt class='news_notice_sub_title'>$subject</dt>
                    <dd class='news_notice_pra'>$content</dd>
                    <dd><a href='$table/view.php?table=$table&num=$num' class='news_notice_more'>뉴스1</a></dd>
                    <dd>$regist_day</dd>
                </dl>
			     ";
		}
		mysql_close();
   }
?>

