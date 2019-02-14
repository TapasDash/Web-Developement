<?php 
/*
Input : 5
Output: 153 is an armstrong
*/
	$n = 153;
	$t = 0;
	$v = $n;
	while ($v != 0) {
		$rem = $v % 10;
		$t = $t + $rem*$rem*$rem;
		$v = $v / 10;
	}
	if ($t == $n)
		echo "$n is an armstrong";
	else
		echo "$n is not an armstrong";
 ?>
