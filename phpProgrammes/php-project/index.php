<!DOCTYPE html>
<html>
<style>
	.error {
		color: #FF0000;
	}
</style>

<head>
	<title>Registration form</title>
	<link rel="stylesheet" type="text/css" href="index.css">

<body>

	<?php
	$nameError = $emailError = $mobileError = "";
	$name = $email = $mobileNumber =  "";
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (empty($_POST["name"])) {
			$nameError = "Name is required";
		} else {
			$name = test_input($_POST["name"]);
			// check if name only contains letters and whitespace
			if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
				$nameError = "Only letters and white space allowed";
			}
		}
		if (empty($_POST["mbno"])) {
			$mobileError = "Mobile Number is required";
		} else {
			$mobileNumber = test_input($_POST["mbno"]);
			// check if name only contains letters and whitespace
			if (!preg_match('/^[0-9]{10}+$/', $mobileNumber)) {
				$mobileError = "10 digit Number";
			}
		}
		if (empty($_POST["email"])) {
			$emailError = "Email is required";
		} else {
			$email = test_input($_POST["email"]);
			// check if e-mail address is well-formed
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
				$emailError = "Invalid email format";
			}
		}
	}
	function test_input($data)
	{
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	?>

	<form method="post" action=" insert.php <?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> ">
		Name: <input type="text" name="name" value="<?php echo $name; ?>" placeholder="Tapas Dash." required>
		<span class="error">* <?php echo $nameError; ?></span>
		<br><br>
		Mobile: <input type="tel" name="mbno" value="<?php echo $mobileNumber; ?>" placeholder="9815002866" required>
		<span class="error">* <?php echo $mobileError; ?></span>
		<br><br>
		E-mail: <input type="email" name="email" value="<?php echo $email; ?>" placeholder="eg.tapasdash017@gmail.com" required>
		<span class="error">* <?php echo $emailError; ?></span>
		<br><br>
		<input type="submit" name="submit" value="Submit">
	</form>

</body>

</html>
