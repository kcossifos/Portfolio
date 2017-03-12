<?php

class ReadData {

	function readDisplayOneRecord(){

		$userid = $_GET['id'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("SELECT * from users101 where userid = :userid");

		$stmt->bindParam(':userid', $userid);

		$stmt->execute();

		$results = $stmt->fetchALL();

		return $results;
	} //method

	function readDisplayAllRecords(){

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("SELECT * from users101 order by userid ASC");

		$stmt->execute();

		$results = $stmt->fetchALL();

		return $results;
	}
} // class