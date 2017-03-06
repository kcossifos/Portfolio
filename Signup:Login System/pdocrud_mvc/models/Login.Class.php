
<?php

class Login{

	function loginUser(){

		include("includes/dbcredentials.php");

		if (!is_null($_POST['username']) && !is_null($_POST['password'])){


			$salt = "KelseyC";
			$usernameInput = $_POST['username'];
			$passwordInput = $_POST['password'];
			$epass = md5($_POST['password'].$salt);

			$sth = $dbh->prepare('select userid, username, email, website, favorite_rest, company_address, photo, birthday,  fullname, password from clients WHERE username = :username and password = :password');

			$sth->bindParam(':username', $usernameInput);
			$sth->bindParam(':password', $epass);
			

			$sth->execute();
			$results = $sth->fetchAll();

		if (isset($results[0]['userid'])){

			$user_id = $results[0]['userid'];

			$_SESSION['user_id'] = $user_id;
			$_SESSION['user_name'] = $usernameInput;
			$_SESSION['pass_word'] = $passwordInput;

			echo "You are now logged in<br/><br/>";

			//confirm user login
			echo "Congrats you have successfully logged in!<br/>";
			echo "<a href='?action=logoutUser'>Logout</a><br/>";
			echo "<a href='?action=dashboard'>Dashboard</a><br/>";

			foreach ($results as $row){

				echo "<p>";

				$userid = $row['userid'];
				$username = $row['username'];
				$password = $row['password'];
				$fullname = $row['fullname'];
				$photo = $row['photo'];
				$email = $row['email'];
				$birthday = $row['birthday'];
				$website = $row['website'];
				$company_address = $row['company_address'];
				$favorite_rest = $row['favorite_rest'];

				echo "</p>";
				echo "<ul>";
				echo "<li>Your User ID is: " . $userid . "</li>";
				echo "<li>Your Full Name is: " . $fullname . "</li>";
				echo "<li>Your Email is: " . $email . "</li>";
				echo "<li>Your User Name is: " . $username . "</li>";
				echo "<li>Your Password is: " . $password . "</li>";
				echo "<li>Your Birthday is: " . $birthday . "</li>";
				echo "<li>Your Website is: " . $website . "</li>";
				echo "<li>Your Company Address is: " . $company_address . "</li>";
				echo "<li>Your Favorite Resturant is: " . $favorite_rest . "</li>";
				echo "<li>Your Photo is: " . $photo. "</li>";
				echo "</ul>";
				echo '<a href="?action=updateForm&id=' .$row['userid'] . '">Update</a>';
			 	}	
			}else {

				echo "Sorry, Your username and/or password is incorrect<br/>";
				echo "<a href='?action=home'>Please, Try Again</a><br/>";
				}	
			}else {

				echo "Sorry, You need to submit both login fields to proceed<br/>";
				echo "<a href='?action=home'>Please, Try Again</a><br/>";
			}
		}

}


?>