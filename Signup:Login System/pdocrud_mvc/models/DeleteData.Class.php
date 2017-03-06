<?php

class DeleteData {

	function deleteUserNow(){

		$userid = $_GET['id'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("DELETE from clients where userid = :userid");

		$stmt->bindParam(':userid', $userid);

		$stmt->execute();

	} 
}
?>