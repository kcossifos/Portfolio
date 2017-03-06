<?php 

class Create{
	function createList(){

		if(isset($_POST['submit'])){
			if(!empty($_POST['Todo'])){
						include("includes/db.php");
						
						$item = $_POST['Todo'];
						$description = $_POST['descrip'];
						$date = $_POST['date'];

						$toDoItem = array(
							"Todo"=>$item,
							"descrip"=>$description,
							"date"=>$date);

						//inserts into database
						$stmt = $dbh->prepare("insert into PhpMVC(Todo,descrip,date) values(:Todo, :descrip, :date)");
						
						//binds the parameters
						$stmt->bindParam(':Todo', $toDoItem['Todo']);
						$stmt->bindParam(':descrip', $toDoItem['descrip']);
						$stmt->bindParam(':date', $toDoItem['date']);
						$stmt->execute();
						header('location: ?action=home');
			}
			else{
				echo "You left the input box empty. Please, try again!<br/>";
				echo "<a href='?action=home'>Try Again?</a>";
			}
		}
		
	}
}

?>