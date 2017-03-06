<?php



$userid = $_GET['id'];


if(!empty($_SESSION['user_name'])){

	echo "Welcome<b> ";
	echo $_SESSION['user_name'] . "</b>!<br/>";
	echo "<a href='?action=logoutUser'>Logout</a>";

//Setup Nav
echo "   <a href='?action=dashboard'>Delete Someone Else?</a></br></br>";
echo "<h2>Delete user console</br></h2>";

foreach ($results as $result){

	echo "<br/><br/>User ID = " . $userid . "<br/>Username: " . $result['username'] . "<br/><br/>";

	 ?>

	<form action="?action=deleteUserNow&id=<?php echo $userid ?>" method="post">
		If so, click yes <input type="submit" name="submit" value="Yes"/>
	</form>
	
	<?php 

	}

}else{
	echo "<h2 align=center>Dashboard</h2>";
	echo "Sorry you must be logged in to access this area</br>";
	echo "<a href='?action=home'>Login</a>";

}


?>