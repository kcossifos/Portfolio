<?php 

class Delete{
	function deleteList(){
		//gets the id
		$todo = $_GET['id'];
		include("includes/db.php");
		
		//deletes from database
		$stmt = $dbh->prepare("delete from PhpMVC where itemId = :itemId");
		$stmt->bindParam(':itemId', $todo);
		$stmt->execute();
	}
}

?>