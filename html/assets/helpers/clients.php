<?php
  error_reporting(E_ALL); ini_set('display_errors', 1);

  // Get settings.
  require_once('../../settings.php');

  $servername = $mysql_hostname;
  $username = $mysql_username;
  $password = $mysql_password;

  // Only process POST reqeusts.
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(empty($_POST["mac-address"])){
      $macAddressError = "Mac Address is required."
    }
      // Get the form fields and remove whitespace.
      $name = trim($_POST["name"]);
      $macAddress = $_POST["mac-address"];
      $device = trim($_POST["device"]);

      // Create connection
      $conn = new mysqli($servername, $username, $password);

      // Check connection
      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
      echo "Connected successfully";

      $sql = 'INSERT into $mysql_clients_table values($name,$macAddress,$device,current_date)';
      $conn->exec($sql);
      echo "Record created successfull";

      // Set a 200 (okay) response code.
      http_response_code(200);

  } else {

      // Not a POST request, set a 403 (forbidden) response code.
      http_response_code(403);
  }

?>
