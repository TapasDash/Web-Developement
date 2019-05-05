<?php 
	$host = "localhost";
	$user = "";
	$pass = "";
	$conn = mysqli_connect($host,$user,$pass);
	if (!$conn) 
		echo "Connection failed";
	else
		echo "Connection Sucessful";
	
 ?>
