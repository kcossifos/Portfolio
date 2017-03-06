<?php 

class CreateData{

	function createRecord(){

		if (isset($_POST['submit'])){
			if (!empty($_POST['username']) && !empty($_POST['password']) &!empty($_POST['fullname']) 
				&!empty($_POST['company_address']) &!empty($_POST['phone']) &!empty($_POST['birthday'])
				 &!empty($_POST['favorite_rest'])){
				if(preg_match("/@/", $_POST['email'])){
				 		if(preg_match("/com/" , $_POST['website'])){

				function makeArray(){

				$salt = "KelseyC";
				$epass = md5($_POST['password'].$salt);
				$euser = $_POST['username'];
				$email = $_POST['email'];
				$fullname = $_POST['fullname'];
				$company_address = $_POST['company_address'];
				$phone = $_POST['phone'];
				$favorite_rest = $_POST['favorite_rest'];
				$birthday = $_POST['birthday'];
				$website = $_POST['website'];
				$photo = $_POST['photo'];

				return array("Fullname" => $fullname, "Email" => $email, "Username" => $euser, 
					"Password" => $epass, "Company Address" => $company_address, "Phone" => $phone, 
					"Favorite Restaurant" => $favorite_rest, "Birthday" => $birthday, 
					"Website" => $website, "Photo" => $photo);
			}

			//Output Login Detail to User
			echo "<h2>Congratulations!</h2> Your membership account sign-up was created succesfully";
			echo "<table align=left border=0><td></td>";


			$data = makeArray();

			foreach ($data as $attribute => $data){

				echo "<p align=left><span style=text-decoration:underline>{$attribute}</span>: {$data}";
			}
				echo "<br/><br/><a href='?action=home'>Please try logging in now!</a>";
				echo "</td></tr></table>";


				include("includes/dbcredentials.php"); 
				$salt = "KelseyC";
				$epass = md5($_POST['password'].$salt);
				$euser = $_POST['username'];
				$email = $_POST['email'];
				$fullname = $_POST['fullname'];
				$company_address = $_POST['company_address'];
				$phone = $_POST['phone'];
				$favorite_rest = $_POST['favorite_rest'];
				$birthday = $_POST['birthday'];
				$website = $_POST['website'];
				$photo = $_POST['photo'];
				

				$stmt = $dbh->prepare('insert into clients (username, password, email, fullname, 
					company_address, phone, favorite_rest, birthday, website, photo) 
				values(:username, :password, :email, :fullname, :company_address, 
					:phone, :favorite_rest, :birthday, :website, :photo)');

				
				$stmt->bindParam(':username', $euser);
				$stmt->bindParam(':password', $epass);	
				$stmt->bindParam(':email', $email);
				$stmt->bindParam(':fullname', $fullname);
				$stmt->bindParam(':company_address', $company_address);
				$stmt->bindParam(':phone', $phone);
				$stmt->bindParam(':favorite_rest', $favorite_rest);
				$stmt->bindParam(':birthday', $birthday);
				$stmt->bindParam(':website', $website);
				$stmt->bindParam(':photo', $photo);

				
				$stmt->execute();

				}else{
					echo "Sorry, the website you have entered was not in the correct format<br/>";
					echo "<br/><br/><a href='?action=home'>Try Again</a><br/><br/>";
				}
			}else{
				echo "Sorry, the emails you have entered was not in the correct format<br/>";
				echo "<br/><br/><a href='?action=home'>Try Again</a><br/><br/>";
			}		
			}else{

				echo "Sorry, you must submit ALL registration fields to proceed.";
				echo "<br/><br/><a href='?action=home'>Try Again</a><br/><br/>";
			}
		}
	}
}