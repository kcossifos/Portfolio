
<?php

class Login{

	function loginUser(){

		include("includes/dbcredentials.php");

		if (!is_null($_POST['username_li']) && !is_null($_POST['password_li'])){


			$salt = "KelseyC";
			$usernameInput = $_POST['username_li'];
			$passwordInput = $_POST['password_li'];
			$epass = md5($_POST['password_li'].$salt);

			$sth = $dbh->prepare('select userid, username, password from users101 WHERE username = :username and password = :password');

			$sth->bindParam(':username', $usernameInput);
			$sth->bindParam(':password', $epass);

			$sth->execute();
			$results = $sth->fetchAll();

		if (isset($results[0]['userid'])){

			$user_id = $results[0]['userid'];

			$_SESSION['user_id'] = $user_id;
			$_SESSION['user_name'] = $usernameInput;
			$_SESSION['pass_word'] = $passwordInput;

			echo "Session Check: You are now logged in<br/><br/>";

			//confirm user login
			echo "Congrats you have successfully logged in!<br/>";
			echo "<a href='?action=logoutUser'>Logout</a><br/><br/>";
			echo "<a href='?action=dashboard'>Dashboard</a><br/>";

			foreach ($results as $row){

				echo "<p>";

				$userid = $row['userid'];
				$username = $row['username'];
				$password = $row['password'];

				echo "</p>";
				echo "<ul>";
				echo "<li>Your User ID is:" . $userid . "</li>";
				echo "<li>Your User Name is:" . $username . "</li>";
				echo "<li>YourPassword is:" . $password . "</li>";
				echo "</ul>";
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