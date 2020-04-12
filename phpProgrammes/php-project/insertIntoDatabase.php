<?php
if (isset($_POST["submit"])) {
    $host = "localhost";
    $user = "root";
    $pass = "";
    $dbname = "insertdb";
    $conn = mysqli_connect($host, $user, $pass, $dbname);
    if (!$conn)
        echo "Connection failed";
    else {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $mbno = $_POST['mbno'];
        $query = "INSERT INTO `student`(`Name`, `Email`, `Mobile Number`) VALUES ('$name','$email','$mbno')";
        $run = mysqli_query($conn, $query);

        if ($run == TRUE) {
            echo "Hello $name ! <br/><br/>
            Your Email: $email <br/><br/>
            Your Mobile Number : $mbno
            ";
        } else {
            echo "Data Submission failed!";
        }
    }
}
?>
