<?php
include('includes/db.php');
//selects only one of the rows
$stmt = $dbh->prepare("select Todo, descrip, date from PhpMVC order by rand() limit 1");
$stmt->execute();
$result = $stmt->fetchAll();
//returns a string that contains the json value
$result = json_encode($result);
?>