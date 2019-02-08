<?php 
$arrayName = array(5,4,3,1,2);

for ($i=0; $i < 5; $i++) { 
	foreach ($arrayName as $vr) {
		if ($arrayName[$i] > $vr) {
			$k = $arrayName[$i];
			$arrayName = $vr;
			$vr = $k;
	}

}
}

foreach ($vr as $ar) {
	echo $ar;
	echo "<br>";
}

 ?>
