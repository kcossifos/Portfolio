<?php 
$todo = $_GET['id'];
echo "<a id='back' href='?action=home'>Go Back</a>" .
"<form action='?action=updateItem&id={$todo}' method='post'>
	Title: <input type='text' name='item' value='{$results[0]['Todo']}' required>
	Description: <input type='text' name='desc' value='{$results[0]['descrip']}' required>
	Date: <input type='text' name='dates' value='{$results[0]['date']}' required>
	       <input id='button' type='submit' name='submit' value='Update Now'/>
</form> "
?>