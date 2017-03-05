<?php 

class Create{
	function createList(){
		if(isset($_POST['submit'])){
			if(!empty($_POST['Todo'])){
						include("includes/db.php");
						$item = $_POST['Todo'];
			
						$toDoItem = array(
							"Todo"=>$item);
						$stmt = $dbh->prepare("insert into PhpMVC(Todo)
												values(:Todo)");
						$stmt->bindParam(':Todo', $toDoItem['Todo']);
				
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