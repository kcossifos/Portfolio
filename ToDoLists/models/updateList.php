<?php 

class Update{
	function updateList(){
		
		$itemid = $_GET['id'];
		$item = $_POST['item'];
		$desc = $_POST['desc'];
		$dates = $_POST['dates'];

		include("includes/db.php");
		$stmt = $dbh->prepare("update PhpMVC set Todo = :item, descrip = :desc, date = :dates
							   where itemId = :itemId");

		$stmt->bindParam(':itemId', $itemid);
		$stmt->bindParam(':item', $item);
		$stmt->bindParam(':desc', $desc);
		$stmt->bindParam(':dates', $dates);

		$stmt->execute();
		header('location: ?action=home');
	}

}

?>