<?php

class ReadData {

	function readDisplayOneRecord(){

		$userid = $_GET['id'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("SELECT * from clients where userid = :userid");

		$stmt->bindParam(':userid', $userid);

		$stmt->execute();

		$results = $stmt->fetchALL();

		return $results;
	}

	function readDisplayAllRecords(){

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("SELECT * from clients order by userid ASC");

		$stmt->execute();

		$results = $stmt->fetchALL();

		return $results;
	}
}