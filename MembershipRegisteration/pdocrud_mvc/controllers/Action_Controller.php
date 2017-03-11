

<?php

session_start();

//includes

include("models/Views.Class.php");
include("models/CreateData.Class.php");
include("models/ReadData.Class.php");
include("models/Login.Class.php");
include("models/DeleteData.Class.php");
include("models/UpdateData.Class.php");

//instantiate the classes

$views = new Views();
$create = new CreateData();
$read = new ReadData();
$login = new Login();
$delete = new DeleteData();
$update = new UpdateData();
//traffic control by routing the user based on form action

if (!empty($_GET["action"])){

	if ($_GET["action"] == "home"){

		$views->getView("views/header.php");
		$views->getView("views/signup_form.php");
		$views->getView("views/login_form.php");
		$views->getView("views/footer.php");
	}

	if ($_GET["action"] == "signupUser"){

		$views->getView("views/header.php");

		$salt = "KelseyC";
		$epass = md5($_POST['password'].$salt);
		$euser = $_POST['user'];
	
		$create->createRecord($euser, $epass);
		$views->getView("views/footer.php");
	} // close out signup user if statement

	//Crud action = dashboard
	if ($_GET["action"] == "loginUser"){

		$views->getView("views/header.php");
	
		$login->loginUser();
		$views->getView("views/footer.php");
	}

	if ($_GET["action"] == "logoutUser"){

		if(isset($_SESSION)){
			$_SESSION = array();
			setcookie(session_name(), null, time() - 3600);
			session_destroy();
			session_regenerate_id(true);
		}

		$views->getView("views/header.php");
		$views->getView("views/logout.php");
		$views->getView("views/footer.php");
	}

		if ($_GET["action"] == "dashboard"){

			if(!empty($_SESSION['user_name'])){

				$views->getView("views/header.php");
				$results = $read->readDisplayAllRecords();
				$views->getView("views/dashboard.php", $results);
				$views->getView("views/footer.php");
			}else{

				echo "<h2>Users dashboard</h2>";
				echo "Sorry you must be logged in to access this page";
				echo "<a href='?action=home'>Login</a>";
			}

	
	}
	if ($_GET["action"] == "deleteForm"){

		$userid = $_GET['id'];

		if ($_SESSION['user_id'] == $userid){

	
			$views->getView("views/header.php");
			echo "You cannot delete yourself";
			echo "<a href='?action=dashboard'>Delete Someone Else?</a></br>";
			$views->getView("views/footer.php");
		}else {

			$views->getView("views/header.php");
			$deleteUser = $read->readDisplayOneRecord($_GET['id']);
			$views->getView("views/delete_form.php", $deleteUser);
			$views->getView("views/footer.php");
			}
	}else if ($_GET["action"] == "deleteUserNow"){

		$delete->deleteUserNow();
		header('location: ?action=dashboard');
	}

	if ($_GET["action"] == "updateForm"){

		$userid = $_GET['id'];

		if ($_SESSION['user_id'] == $userid){

	
			$views->getView("views/header.php");
			echo "You cannot update yourself";
			echo "<a href='?action=dashboard'>Update Someone Else?</a></br>";
			$views->getView("views/footer.php");
		}else {

			$views->getView("views/header.php");
			$updateUser = $read->readDisplayOneRecord($_GET['id']);
			$views->getView("views/update_form.php", $updateUser);
			$views->getView("views/footer.php");
			}
	}else if ($_GET["action"] == "updateUserNow"){

		$update->updateUserNow();
		header('location: ?action=dashboard');
	}

}else {

		header("location: ?action=home");
	}	

?>

<pre>
	<?php print_r(get_defined_vars());?>
</pre>	