<?php
include('includes/db.php');
$stmt = $dbh->prepare("select Todo from PhpMVC order by rand() limit 1");
$stmt->execute();
$result = $stmt->fetchAll();
$result = json_encode($result);
?>