<?php 
$todo = $_GET['id'];
echo "<a href='?action=home'>Go Back</a>" .
"<form action='?action=updateItem&id={$todo}' method='post'>
	To-do item: <input type='text' name='item' value='{$results[0]['Todo']}'>
	       <input type='submit' name='submit' value='Update Now'/>
</form> "
?>