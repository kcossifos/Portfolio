<?php 

class Delete{
	function deleteList(){
		$todo = $_GET['id'];
		include("includes/db.php");
		$stmt = $dbh->prepare("delete from PhpMVC where itemId = :itemId");
		$stmt->bindParam(':itemId', $todo);
		$stmt->execute();
	}
}

?>