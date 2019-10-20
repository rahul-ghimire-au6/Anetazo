<?php
$con=mysqli_connect("localhost","id11285029_rahul","123456","id11285029_anetazo") or die('ERROR');

$NAME=$_POST['name'];
$CONTACT=$_POST['contact'];
$EMAIL=$_POST['email'];
$MESSAGE=$_POST['message'];

$sql="INSERT INTO contactus(name,contact,email,message) VALUES('$NAME','$CONTACT','$EMAIL','$MESSAGE')";

if(!mysqli_query($con,$sql)){
echo 'not inserted';
}
else{
echo 'inserted';
}



 ?>
