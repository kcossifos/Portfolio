<?php 

class CreateData{

	function createRecord(){

		if (isset($_POST['submit'])){


			if (!empty($_POST['user']) && !empty($_POST['password'])){

				//Setup Arracy to pull from super global post
				function makeArray(){

				$salt = "KelseyC";
				$epass = md5($_POST['password'].$salt);
				$euser = $_POST['user'];

				return array("USERNAME" => $euser, "Hashed Password w/ Salt" => $epass);
			}

			//Output Login Detail to User
			echo "<h2>Congratulations!</h2> Your membership account sign-up was created succesfully";
			echo "<table width=100% align=left border=0><td></td>";

			//Convert the array into a variable

			$data = makeArray();

			//Use foreach loop to display

			foreach ($data as $attribute => $data){

				echo "<p align=left><span style=color:Purple;>{$attribute}</span>: {$data}";
			}
				echo "<br/><br/><a href='?action=home'>Please try logging in now!</a>";
				echo "</td></tr></table>";

				// Step 1 start database interation here

				include("includes/dbcredentials.php"); //connection to my sql through pdo
				$salt = "KelseyC";
				$epass = md5($_POST['password'].$salt);
				$euser = $_POST['user'];

				//Step 2 inset into DB using PREPARE() method of pod

				$stmt = $dbh->prepare('insert into users101 (username, password) 
				values(:username, :password)');

				//Step 3 bind the para,eters through bindparam method of pdo
				$stmt->bindParam(':username', $euser);
				$stmt->bindParam(':password', $epass);	

				//Step 4 execute
				$stmt->execute();			

			}else{

				echo "Sorry, you must submit ALL registration fields to proceed.";
				echo "<br/><br/><a href='?action=home'>Try Again</a><br/><br/>";
			}
		}
	}
}


