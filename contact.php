<?php
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$comment=$_REQUEST['comment']

if (empty($name) || empty($email) || empty($comment))
{
	echo "Please fill all the fields";
}

else{
	mail("hariharanr1000@gmail.com", "Website Contact Us", $message, "From: $name <$email>");
	echo "<script type='text/javascript'>alert('message sent');
		window.history.log(-1);
	</script>";
}
?>