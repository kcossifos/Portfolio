<?php

//Check and find out if someone is logged in using $_Session

if(!empty($_SESSION['user_name'])){

	echo "Welcome<br>";
	echo $_SESSION['user_name'] . "</b>!";
	echo "Click here to " . "<a href='?action=logoutUser'>Logout</a>";

	//Lets store the values from their login into the $_SESSION

	$user_id = $_SESSION['user_id'];
	$usernameInput = $_SESSION['user_name'];
	$passwordInput = $_SESSION['pass_word'];

	//give user full acces to the dashboard
	//Layout HTML for Dashboard formatting
	echo "<h2 align=center>Users 101 Dashboard</h2>";
	echo "<table width=70% align=center>";
	echo "<tr align=left>";
	echo "<th>User ID</th>";
	echo "<th>User Name</th>";
	echo "<th>Password</th>";
	echo "<th>ACTION</th></tr>";

	//grab results from database readDisplayAllRecords() class
	foreach ($results as $row) {
		//echo out each row...and format in HTML
		echo '<tr align=left><td>' . $row['userid'] . '</td><td>' . $row['username'] . '</td><td>' 
		. $row['password'] . '</td><td><a href="?action=deleteForm&id=' . 
		$row['userid'] . '">Delete</a></td><td><a href="?action=updateForm&id=' .
		$row['userid'] . '">Update</a></td>';

	}// end foreach

	echo "</tr></table>";
} else {
	echo "<h2 align=center>Users 101 Dashboard</h2>";
	echo "Sorry you must be logged in to access this area</br>";
	echo "<a href='?action=home'>Login</a>";
}