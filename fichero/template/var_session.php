 <?php
	session_start();
	if(!isset($_SESSION["user_session"]))
	{
		header("Location: index.php");
	}
	// session_destroy();
	// header("Location: index.php");
?>