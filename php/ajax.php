<?php 
try{
	error_reporting(E_ALL);
	//require('mail/class.phpmailer.php');

	if($_POST)
	{
		$to_Email       = "ispinfo@ispartners.net"; //Replace with recipient email address: recruitment@dentsumvn.com
		$subject        = 'An Inquiry from ISPARTNERS.net'; //Subject line for emails
	   
		//check if its an ajax request, exit if not
		if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	   
			//exit script outputting json data
			$output = json_encode(
			array(
				'type'=>'error',
				'text' => 'Request must come from Ajax'
			));
		   
			die($output);
		}
	   
		//check $_POST vars are set, exit if any missing
		if(!isset($_POST["userName"]) || !isset($_POST["userMail"]) || !isset($_POST["userMessage"]))
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
			die($output);
		}
		

		//Sanitize input data using PHP filter_var().
		$user_Name = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
		$user_Mail = filter_var($_POST["userMail"], FILTER_SANITIZE_STRING);
		$user_Message = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);	  
		
		$mail  = false;
		
		### Mail send	###
		$messageHTML = '---------------------<br/><b>Name:</b><br/>'.$user_Name.'<br/><br/><b>eMail:</b><br/>'.$user_Mail.'<br/><br/><b>Message: </b><br/>'.$user_Message.'<br/>---------------------';
		//the Content-type header 
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		
		// Mail
		$mail = mail($to_Email, $subject, $messageHTML, $headers);	
	   
		if(!$mail) //output success or failure messages
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Error!'));
			die($output);
		}else{
			$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_Name .' Thank you for your email'));
			die($output);
		}
	} else { echo 'Wrong place, huh?'; }
}catch (Exception $e) {
	$output = json_encode(array('type'=>'error', 'text' => $e->getMessage()));
	die($output);
}
?>