<?php 

class Read{
	function displayList(){
		//displays them all
		include("includes/db.php");
		$stmt = $dbh->prepare("select * from PhpMVC order by itemId asc");
		$stmt->execute();
		$data = $stmt->fetchAll();
		foreach ($data as $toDoItems) {
				echo "<section>Title: {$toDoItems['Todo']}" .  "</br>" . "Description: {$toDoItems['descrip']}" 
				. "</br>" . "Date: {$toDoItems['date']}" . "</br>" .
				"<a href=?action=deleteItems&id={$toDoItems['itemId']}>Delete item</a> " . 
				"<a href=?action=updateItems&id={$toDoItems['itemId']}>Update item</a></br></section>";
		}
	}
	function displayItem(){
		//displays one todo item
		$todo = $_GET['id'];
		include("includes/db.php");
		$stmt = $dbh->prepare("select * from PhpMVC where itemId = :itemId");
		$stmt->bindParam(':itemId', $todo);
		$stmt->execute();
		$results = $stmt->fetchAll();
		return $results;
	}
}
?>