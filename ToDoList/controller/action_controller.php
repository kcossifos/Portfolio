<?php 

//includes all files in the models folder
include("models/viewsList.php");
include("models/createList.php");
include("models/deleteList.php");
include("models/readList.php");
include("models/updateList.php");


$views = new Views();
$create = new Create();
$delete = new Delete();
$read = new Read();
$update = new Update();

//displays the view pages and runs the displayList function
if(!empty($_GET['action'])){
	if($_GET['action'] == "home"){
		$views->getView("view/header.php");
		$views->getView("view/list.php");
		$read->displayList();
		$views->getView("view/footer.php");
	}
	//runs the create function 
	if($_GET['action'] == "toDoList"){
		$create->createList();
	}
	//runs the deleteList function and the displayList function displays the view pages
	if($_GET['action'] == "deleteItems"){
			$views->getView("view/header.php");
			$views->getView("view/list.php");
			$delete->deleteList();
			$read->displayList();
			$views->getView("view/footer.php");
	}
	//displays the item by id 
	if($_GET['action'] == "updateItems"){
		$views->getView("view/header.php");
		$items = $read->displayItem($_GET['id']);
		$views->getView("view/updatelist.php", $items);
		$views->getView("view/footer.php");
	}
	//runs the updateList function
	elseif($_GET['action'] == "updateItem"){
			$update->updateList();
	}
}
else{
	header("location: ?action=home");
}

?>