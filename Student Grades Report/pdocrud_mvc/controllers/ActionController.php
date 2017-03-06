

<?php
//Kelsey Cossifos

session_start();



include("models/ViewsClass.php");
include("models/CreateClass.php");
include("models/ReadClass.php");
include("models/DeleteClass.php");



$views = new Views();
$create = new CreateInfo();
$read = new ReadInfo();
$delete = new DeleteInfo();


if (!empty($_GET["action"])){
if ($_GET["action"] == "teacherApp"){

		$views->getView("views/header.php");

		$grade = $_POST['grade'];
		$name = $_POST['name'];
		$views->getView("views/students.php");
		$create->create($grade, $name);
		$results = $read->readRecords();
		$views->getView("views/dashboard.php", $results);
		$views->getView("views/footer.php");
	}

if ($_GET["action"] == "deleteForm"){

		$id = $_GET['id'];

		if ($_GET["action"] == "deleteStudent"){

			$delete->deleteStudent();
			header('location: ?action=teacherApp');
			$deleteUser = $read->readRecord($_GET['id']);
			$views->getView("views/delete.php", $deleteUser);
		}else {

			$views->getView("views/header.php");
			$deleteUser = $read->readRecord($_GET['id']);
			$views->getView("views/delete.php", $deleteUser);
			$views->getView("views/footer.php");
			}
	}else if ($_GET["action"] == "deleteStudent"){

		$delete->deleteStudent();
		header('location: ?action=teacherApp');
	}
}else {

		header("location: ?action=teacherApp");
	}	

?>

<pre>
	<?php print_r(get_defined_vars());?>
</pre>	