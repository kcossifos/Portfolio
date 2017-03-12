<?php



$id = $_GET['id'];


echo "Are you sure?</br>";

foreach ($results as $result){

	echo "<br/><br/>User ID = " . $id . "<br/>Username: " . $result['name'] . "<br/><br/>";

	?>

	<form action="?action=deleteStudent&id=<?php echo $id ?>" method="post">
		If so, click yes <input type="submit" name="submit" value="Yes"/>
	</form>
	
	<?php 

	}

?>