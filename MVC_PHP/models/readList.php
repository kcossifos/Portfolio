<?php 

class Read{
	function displayList(){
		include("includes/db.php");
		$stmt = $dbh->prepare("select * from PhpMVC order by itemId asc");
		$stmt->execute();
		$data = $stmt->fetchAll();
		foreach ($data as $toDoItems) {
				echo " To-do item: {$toDoItems['Todo']}" .  "</br>" . 
				"<a href=?action=deleteItems&id={$toDoItems['itemId']}>Delete item</a> " . 
				"<a href=?action=updateItems&id={$toDoItems['itemId']}>Update item</a></br>";
		}
	}
	function displayItem(){
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