<?php

class DeleteData {

	function deleteUserNow(){

		$userid = $_GET['id'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("DELETE from users101 where userid = :userid");

		$stmt->bindParam(':userid', $userid);

		$stmt->execute();

	} //method
}
?>