<?php
	if (isset($_POST["enviar"])) 
	{
		$nombre = $_POST["nombre"];
		$pass = $_POST["pass"];

		$canal = fopen("txt.txt", "r");
		$correcto = false;

		while (!feof($canal)) 
		{
			$line = fgets($canal);
			$partes = explode(";", $line);
			if(($nombre == $partes[0]) && ($pass == $partes[1]))
			{
				$correcto = true;
				break;
			}
		}

		if($correcto==true)
		{
			echo "Se ha registrado correctamente";
			session_start();
			$_SESSION["user_session"] = $nombre;

			header("Location: page1.php");
		}
		else
		{
			echo "El nombre de usuario o contraseña no es correcto";
			header("Location: index.php");
		}
	}
?>



