<?php

$userid = $_GET['id'];
 
if(!empty($_SESSION['user_name'])){

	echo "<b>Welcome ";
	echo $_SESSION['user_name'] . "</b>!</br>";
	echo "<a href='?action=logoutUser'>Logout</a></br><br/>";



foreach ($results as $result){

	

	 ?>
	<fieldset style="background-color:#C7E8E8;">
	<h1>Update User Information</h1>
	<form  action="?action=updateUserNow&id=<?php echo $userid ?>" method="post">
		<br/>
		Username:  <input type="text" name="username" value=<?php echo $result['username'];?> /><br/>
		Full Name: <input type="text" name="fullname" value=<?php echo $result['fullname'];?>/><br/>
		Email:     <input type="text" name="email" value=<?php echo $result['email'];?>/><br/>
		Company Address: <input type="text" name="company_address" value=<?php echo $result['company_address'];?>/><br/>
		Phone Number: <input type="text" name="phone" value=<?php echo $result['phone'];?>/><br/>
		Website: <input type="text" name="website" value=<?php echo $result['website'];?>/><br/>
		Birthday: <input type="text" name="birthday" value=<?php echo $result['birthday'];?>/><br/>
		Favorite Resturant: <input type="text" name="favorite_rest" value=<?php echo $result['favorite_rest'];?>/><br/>
		<input type="submit" name="submit" value="Submit"/>
	</form>
	</fieldset>
	<?php 

	} 

}else{
	echo "<h2 align=center>Update</h2>";
	echo "Sorry you must be logged in to access this area</br>";
	echo "<a href='?action=home'>Login</a>";

}


?>