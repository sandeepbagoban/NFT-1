
<?php
  $servername = "161.97.164.70";
  $username = "yoadmin_wk_user";
  $password = "ZD~UZ~Mwc~t!g!Bj{E";
  $dbname = "yoadmin_wk";
  $searchquery = trim($_POST['search_text']); //input for search
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }

 $sql = "SELECT address FROM wk WHERE address='$searchquery'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
// output data of each row
// while($row = $result->fetch_assoc()) {
    echo 1;
// }
} else {
echo 2;
}
$conn->close();
?>
