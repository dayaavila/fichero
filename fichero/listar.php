<?php
	session_start();
	require_once "template/menu.php"; 
?>

<!DOCTYPE html>
<html lang="es">
<body>
	<form action="anadir.php" method="$_POST">
		<table border="1px solid black">
			<tr>
				<th>Empresa</th>
				<th>Dirección</th>
				<th>Nombre</th>
				<th>DNI</th>
				<th>Teléfono</th>
				<th>E-mail</th>
				<th>Rama</th>
			</tr>
<?php
	//aqui mostrare el fichero en la vista listar
	$canal = fopen("listar.txt", "r");
	//Comprueba si el puntero a un archivo está al final del archivo
	while(!feof($canal))
	{
		//Obtiene una línea desde el puntero a un fichero
		$line = fgets($canal);
		$partes = explode(";", $line);
		echo "<tr>";
		
		foreach ($partes as $value) 
		{
			echo "<td>".$value."</td>";	
		}
		echo "</tr>";
	}
?>
		</table>
	</form>
</body>
</html>


	



