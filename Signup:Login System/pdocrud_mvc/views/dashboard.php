<?php


if(($_SESSION['user_name']) === "admin" & ($_SESSION['pass_word'] == "admin")){

	echo "<b>Welcome ";
	echo $_SESSION['user_name'] . "</b>!<br/>";
	echo "<a href='?action=logoutUser'>Logout</a>";


	$user_id = $_SESSION['user_id'];
	$usernameInput = $_SESSION['user_name'];
	$passwordInput = $_SESSION['pass_word'];

	
	echo "<h2 align=center>Admin Dashboard</h2>";
	echo "<table width=100% align=center style=background-color: #B5E0DF;>";
	echo "<tr align=left>";
	echo "<th>User ID</th>";
	echo "<th>Full Name</th>";
	echo "<th>User Name</th>";
	echo "<th>Email</th>";
	echo "<th>Password</th>";
	echo "<th>Birthday</th>";
	echo "<th>Company Address</th>";
	echo "<th>Website</th>";
	echo "<th>Favorite Restuarnt</th>";
	echo "<th>Photo</th>";
	echo "<th>ACTION</th></tr>";


	foreach ($results as $row) {
		
		echo '<tr align=left><td>' . $row['userid'] . '</td><td>' . $row['fullname'] . '</td>
		<td>' . $row['username'] . '</td><td>' . $row['email'] . '</td><td>' . $row['password'] . '</td>
		<td>' . $row['birthday'] . '</td><td>' . $row['company_address'] . '</td><td>' . $row['website'] . '</td>
		<td>' . $row['favorite_rest'] . '</td><td>' . $row['photo'] . '</td>
		<td><a href="?action=deleteForm&id=' . $row['userid'] . '">Delete</a></td>
		<td><a href="?action=updateForm&id=' .$row['userid'] . '">Update</a></td>';

	}

	echo "</tr></table>";
} else {
	echo "<h2 align=center>Admin Dashboard</h2>";
	echo "Sorry you must be an Admin User to Visit this page</br>";
	echo "<a href='?action=home'>Login</a>";
}