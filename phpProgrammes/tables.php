<?php 
/*
It takes any number as an input such as % here...nd will give  output such as
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50

*/

	$n = 5;
	for ($i=1; $i <= 10; $i++) { 
		echo "$n * $i = ".$n*$i."<br>";
	}
 ?>
