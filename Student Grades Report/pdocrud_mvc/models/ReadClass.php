<?php
//Kelsey Cossifos
class ReadInfo {

	function readRecord(){

		$id = $_GET['id'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("SELECT * from students101 where id = :id");

		$stmt->bindParam(':id', $id);

		$stmt->execute();

		$results = $stmt->fetchALL();

		return $results;
	}

	function readRecords(){

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("SELECT * from students101 order by id ASC");

		$stmt->execute();

		$results = $stmt->fetchALL();

		return $results;
	}
}