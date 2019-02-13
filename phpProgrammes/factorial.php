<?php 
/*
It takes in input as an integer i.e 5
Input : 5
Output : Factorial of 5 is 120
*/ 
	$n = 5;
	$f = 1;
	for ($i=$n; $i > 0; $i--) { 
		$f = $f * $i;
	}
	echo "Factorial of $n is $f";
?>
