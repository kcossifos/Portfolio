<?php 

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

if(!empty($_GET['action'])){
	if($_GET['action'] == "home"){
		$views->getView("view/header.php");
		$views->getView("view/list.php");
		$read->displayList();
		$views->getView("view/footer.php");
	}
	if($_GET['action'] == "toDoList"){
		$create->createList();
	}
	if($_GET['action'] == "deleteItems"){
			$views->getView("view/header.php");
			$views->getView("view/list.php");
			$delete->deleteList();
			$read->displayList();
			$views->getView("view/footer.php");
	}
	if($_GET['action'] == "updateItems"){
		$views->getView("view/header.php");
		$items = $read->displayItem($_GET['id']);
		$views->getView("view/updatelist.php", $items);
		$views->getView("view/footer.php");
	}
	elseif($_GET['action'] == "updateItem"){
			$update->updateList();
	}
}
else{
	header("location: ?action=home");
}

?>