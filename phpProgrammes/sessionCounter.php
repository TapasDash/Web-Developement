<?php 
	session_start();
	if (!isset($_SESSION['count'])) 
		$_SESSION['count'] = 1;
	else
		$_SESSION['count'] = $_SESSION['count'] + 1;
		
	$acess = $_SESSION['count'];
 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title>Acess Counter</title>
 </head>
 <body>
 <h1>Acess Counter</h1>
 <p> You have acessed this page <?php echo $acess; ?></p>
 </body>
 </html>
