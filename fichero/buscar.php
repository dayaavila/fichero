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
    $findme = $_POST["palabra"];
    
    //Guarda el contenido del archivo en una variable en este caso lo que esta dentro listar.txt
    $archivo = file_get_contents("listar.txt");

    //Busca la cadena '$findme' en el contenido de la variable
    $posicion = strpos($archivo, $findme);

    if ($posicion === false) 
    {
        echo "La palabra '$findme' NO fue encontrada en el archivo";
    } 
    else 
    {
        echo "La palabra '$findme' fue encontrada en el archivo";
        echo " y existe en la posición $posicion";
    }
}
?>