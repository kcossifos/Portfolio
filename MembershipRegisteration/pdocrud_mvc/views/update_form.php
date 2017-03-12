<?php

//grab the $_GET id
$userid = $_GET['id'];

//Find out who is logged in 
if(!empty($_SESSION['user_name'])){

	echo "Welcome<br>";
	echo $_SESSION['user_name'] . "</b>!";
	echo "Click here to " . "<a href='?action=logoutUser'>Logout</a></br>";

//Setup Nav
echo "<a href='?action=dashboard'>Update Someone Else?</a></br>";
echo "Update user console</br>";
echo "Are you sure?</br>";

foreach ($results as $result){

	

	// end PHP temp ?>

	<form action="?action=updateUserNow&id=<?php echo $userid ?>" method="post">
		<br/>You are about to change the following username:
		<input type="text" name="user" value=<?php echo $result['username'];?>/>
		<input type="submit" name="submit" value="Yes"/>
	</form>
	
	<?php 

	} // ending foreach	

}else{
	echo "<h2 align=center>Users 101 Dashboard</h2>";
	echo "Sorry you must be logged in to access this area</br>";
	echo "<a href='?action=home'>Login</a>";

}//ending if statement


?>