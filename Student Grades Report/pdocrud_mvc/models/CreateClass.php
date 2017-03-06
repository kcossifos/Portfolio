<?php 
//Kelsey Cossifos
class CreateInfo{

	function create(){

		if (isset($_POST['submit'])){


			if ( !empty($_POST['name'])){
				if($_POST['grade'] >= 90){
					echo "Letter Grade:  A" . "<br/>";
				}
				elseif ($_POST['grade'] >= 80) {
					echo "Letter Grade:  B" . "<br/>";
				}
				elseif ($_POST['grade'] >= 70) {
					echo "Letter Grade:  C" . "<br/>";
				}
				elseif ($_POST['grade'] >= 60) {
					echo "Letter Grade:  D" . "<br/>";
				}
				elseif ($_POST['grade'] >= 0 && is_numeric($_POST['grade'])) {
					echo "Letter Grade:  F" . "<br/>"; 
				}
				elseif (!is_numeric($_POST['grade'])){
					echo "ERROR! HI Teacher, Please try entering a percentage 
					at this time! Thank you :)";
				}


				function sArray(){

				$grade = $_POST['grade'];
				$name = $_POST['name'];

				return array("Name" => $name, "Student Percentage" => $grade);
			}


			$data = sArray();

			foreach ($data as $info => $data){

				echo "<p>{$info}</span>: {$data}";
			}
				

				include("includes/dbcredentials.php"); 
				$grade = $_POST['grade'];
				$name = $_POST['name'];

				

				$stmt = $dbh->prepare('insert into students101 (grade, name) 
				values(:grade, :name)');

				
				$stmt->bindParam(':grade', $grade);
				$stmt->bindParam(':name', $name);

				
				$stmt->execute();

			}else{
				echo "Sorry you must enter all fields to continue!!<br/>";
			}	
			}
		}
	}
