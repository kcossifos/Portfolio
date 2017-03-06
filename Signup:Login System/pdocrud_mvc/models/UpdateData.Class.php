<?php

class UpdateData {

	function updateUserNow(){

		$userid = $_GET['id'];

		$username = $_POST['username'];
		$email = $_POST['email'];
		$fullname = $_POST['fullname'];
		$company_address = $_POST['company_address'];
		$phone = $_POST['phone'];
		$favorite_rest = $_POST['favorite_rest'];
		$birthday = $_POST['birthday'];
		$website = $_POST['website'];

		include("includes/dbcredentials.php");

		$stmt = $dbh->prepare("UPDATE clients SET email = :email, 
			fullname=:fullname, username = :username, 
			company_address = :company_address,
			phone = :phone, favorite_rest = :favorite_rest,
			birthday = :birthday, website = :website where userid = :userid");

		$stmt->bindParam(':userid', $userid);
		$stmt->bindParam(':username', $username);
		$stmt->bindParam(':email', $email);
		$stmt->bindParam(':fullname', $fullname);
		$stmt->bindParam(':company_address', $company_address);
		$stmt->bindParam(':phone', $phone);
		$stmt->bindParam(':favorite_rest', $favorite_rest);
		$stmt->bindParam(':birthday', $birthday);
		$stmt->bindParam(':website', $website);


		$stmt->execute();

	} 
}
?>