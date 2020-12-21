<?php




if (isset($_POST['submit'])){
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];
	$msg = $_POST['msg'];
	$comment = $_POST['comment'];
	$serviceRate = $_POST['serviceRate'];
	$readTime = $_POST['readTime'];
	$orderType = $_POST['orderType'];
	$sFriend = $_POST['sFriend'];
	$custExp = $_POST['custExp'];
	$mailMe = $_POST['mailMe'];
	$respond = $_POST['respond'];
	
	
	$mailTo = "support@holymercy.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an e-mail from ".$name.".\n\n".
	$txt = "What is your specific prayer request?".$message.".\n\n".
	$txt = "What don't you like about this site?".$msg.".\n\n".
	$txt = "What can we do to make this site better?".$comment.".\n\n".
	$txt = "Rate the overall website".$serviceRate.".\n\n".
	$txt = "How often do you spend reading?".$readTime.".\n\n".
	$txt = "Where did you hear about us?".$orderType.".\n\n".
	$txt = "Have you purchased any of our downloads".$sFriend.".\n\n".
	$txt = "If you have; are you going to purchase more in the future? / If you haven't; tell us why?".$custExp.".\n\n".
	$txt = "Add my email to the list for the monthly newsletter".$mailMe.".\n\n".
	$txt = "Email me a follow-up response to my survey submission".$respond; 
	
	mail($mailTo, $subject, $txt, $headers);
	header("Location: prayer.php?mailsend");
	
	
}

?>