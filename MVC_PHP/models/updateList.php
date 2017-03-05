<?php 

class Update{
	function updateList(){
		$itemid = $_GET['id'];
		$item = $_POST['item'];

		include("includes/db.php");
		$stmt = $dbh->prepare("update PhpMVC set Todo = :item
							   where itemId = :itemId");

		$stmt->bindParam(':itemId', $itemid);
		$stmt->bindParam(':item', $item);

		$stmt->execute();
		header('location: ?action=home');
	}
}

?>