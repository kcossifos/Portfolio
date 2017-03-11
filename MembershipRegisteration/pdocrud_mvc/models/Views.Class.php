
<?php
//Create Class object called views with method = getview
class Views {

	function getView($filename="", $results=array()){

		include $filename;
	}
}


?>