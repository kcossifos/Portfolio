<?php

	foreach ($results as $row) {
		echo '<br/>' . 'Student ID: ' . $row['id'] . '<br/>' . '  Student Name:  ' . $row['name'] . '<br/>' .  'Student Grade: ' . $row['grade']  . '  '
		. '<a href="?action=deleteForm&id=' . 
		$row['id'] . '">Delete</a>' . '<br/>';

	}

	?>