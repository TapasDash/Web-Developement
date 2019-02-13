<?php 
	$n = 47;//it is th number which we gonna check wheter its prime or not
	$f = 0;//flag variable
	for($i=2; $i < $n; $i++) { 
		if ($n % $i == 0) 
			$f = 1;
	}
	if ($n == 1) 
		echo "$n is neither prime nor composite";
	else if ($f == 1) 
		echo "$n is not a prime number";
	else 
		echo "$n is a prime number";
		
 ?>
