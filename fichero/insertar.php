<?php 
	session_start();
	require_once "template/menu.php"; 
?>

<?php 
if(isset($_POST["insertar"]))
{
	echo "<table border=1 align='center'>";
	
	$empresa = $_POST["empresa"];
	$direccion = $_POST["direccion"];
    $nombre = $_POST["nombre"];
    $dni = $_POST["dni"];
	$tlf = $_POST["tlf"];
    $email = $_POST["email"];
    $tamano = $_POST["tamano"];

    $canal = fopen("listar.txt", "a");

	while(!feof($canal))
	{
		$line = fgets($canal);
		$parts = explode(";", $line);

		echo "<tr>"				
		foreach ($parts as $value) 
		{
			echo "<td>".$value."</td>";
		}
		echo "</tr>";

		echo "</table>";
	}
	
	else
	{
		header("Location: index.php");
	}
}
?> 
