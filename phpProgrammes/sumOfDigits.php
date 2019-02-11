<?php 
	$n = 1968;
	$sum = 0;
	$r = 0;
	for ($i=0; $i < strlen($n); $i++) { 
		$r = $n % 10; // 1968 % 10 = 8
		$sum = $sum + $r;
		$n = $n / 10; // 1968 / 10 = 196
	}
	echo "Sum of digits of 1968 is $sum";
 ?>
