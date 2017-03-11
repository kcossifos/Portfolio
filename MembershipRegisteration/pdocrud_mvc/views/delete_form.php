<?php

//grab the $_GET id

$userid = $_GET['id'];

//Find out who is logged in 
if(!empty($_SESSION['user_name'])){

	echo "Welcome<br>";
	echo $_SESSION['user_name'] . "</b>!";
	echo "Click here to " . "<a href='?action=logoutUser'>Logout</a></br>";

//Setup Nav
echo "<a href='?action=dashboard'>Delete Someone Else?</a></br>";
echo "Delete user console</br>";
echo "Are you sure?</br>";

foreach ($results as $result){

	echo "<br/><br/>User ID = " . $userid . "<br/>Username: " . $result['username'] . "<br/><br/>";

	// end PHP temp ?>

	<form action="?action=deleteUserNow&id=<?php echo $userid ?>" method="post">
		If so, click yes <input type="submit" name="submit" value="Yes"/>
	</form>
	
	<?php 

	} // ending foreach	

}else{
	echo "<h2 align=center>Users 101 Dashboard</h2>";
	echo "Sorry you must be logged in to access this area</br>";
	echo "<a href='?action=home'>Login</a>";

}//ending if statement


?>