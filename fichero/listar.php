<?php 
	session_start();
	require_once "template/menu.php"; 
?>

<?php
	
	if(isset($_POST["insertar"]))
	{
		$empresa = $_POST["empresa"];
		$direccion = $_POST["direccion"];
        $nombre = $_POST["nombre"];
        $dni = $_POST["dni"];
		$tlf = $_POST["tlf"];
        $email = $_POST["email"];
        $tamano = $_POST["tamano"];
		
		echo "<html><body><table border=1 align='center'>";
		echo "<tr><th>Empresa</th><th>Direccion</th><th>Nombre</th><th>DNI</th><th>Teléfono</th><th>Email</th><th>Sector</th></tr>";

		$listar = PHP_EOL.$empresa.";".$direccion.";".$nombre.";".$dni.";".$tlf.";".$email.";".$tamano;
		$canal = fopen("listar.txt", "a");
		fputs($canal, $listar);


		
		// for ($i=0; $i < count($listar); $i++) 
		// {
			// echo $lineas[i]."<br>";
			echo "<tr><td>".$empresa."</td><td>".$direccion."</td><td>".$nombre."</td><td>".$dni."</td><td>"
			.$tlf."</td><td>".$email."</td><td>".$tamano."</td></tr>";	
		// }	
		echo "</table></body></html>";
	}

	fclose($canal);
?>









<!-- for ($i=0; $i < count($listar); $i++) 
		{
			echo $lineas[i]."<br>";
		 } -->
