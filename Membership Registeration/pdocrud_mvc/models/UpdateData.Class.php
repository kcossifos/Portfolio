<?php

class UpdateData {

	function updateUserNow(){

		$userid = $_GET['id'];

		$username = $_POST['user'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("UPDATE users101 SET username = :username where userid = :userid");

		$stmt->bindParam(':userid', $userid);
		$stmt->bindParam(':username', $username);

		$stmt->execute();

	} //method
}
?>