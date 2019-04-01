<!DOCTYPE html>
<html lang="es">
<body>
	<div><br>
		<form action="buscar.php" method="POST">
			<label>Introduce la palabra a buscar: </label>
			<input type="text" name="palabra" id="palabra" placeholder="palabra">
			<input type="submit" value="Buscar" name="buscar" id="buscar"> 
		</form><br><hr><br>
	</div>
</body>
</html>

<?php
if (isset($_POST["buscar"])) 
{
    echo "<table border='1px solid black'>";
    echo "<tr>";
    echo "<th>Empresa</th>
          <th>Dirección</th>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Teléfono</th>
          <th>E-mail</th>
          <th>Rama</th>";
    echo "</tr>";
    echo "</table>";

    $findme = $_POST["palabra"];
    $archivo = file_get_contents("listar.txt");

    $posicion = strpos($archivo, $findme);

    if ($posicion === false) 
    {
        echo "La palabra".$findme." NO fue encontrada en el archivo";
    } 
    else 
    {
        echo "La palabra ".$findme." fue encontrada en el archivo";
        echo " y existe en la posición $posicion";
    }

}
?>