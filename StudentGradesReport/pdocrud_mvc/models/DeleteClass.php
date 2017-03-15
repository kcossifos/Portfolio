<?php
//Kelsey Cossifos
class DeleteInfo {

	function deleteStudent(){

		$id = $_GET['id'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("DELETE from students101 where id = :id");

		$stmt->bindParam(':id', $id);

		$stmt->execute();

	} //method
}
?>