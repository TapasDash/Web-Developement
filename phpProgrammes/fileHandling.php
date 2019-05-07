<?php 
	$targetfolder = 'f:/';
	$targetfolder = $targetfolder.basename($_FILES['file']['name']['type']);
	$file_type = $_FILES['file']['type'];
	if ($file_type == 'applications/pdf' || $file_type == 'image/gif' || $file_type == 'image/jpeg') {
		if (move_uploaded_file($_FILES['file']['tmp_name'], $targetfolder)) {
			echo "The file".basename($_FILES['file']['name'])."is uploaded";
		}
		else if (condition) {
			echo "Problem in uploading file";
		}
		else
			echo "You may uploaded only PDFs,JPEGs or GIF files <br>";
	}
 ?>
