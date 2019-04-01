<?php 
	session_start();
	require_once "template/menu.php"; 
?>

<!DOCTYPE html>
<html lang="es">
<script src="js/validacion.js"></script>
<body>
	<div>
		<form action="anadir.php" method="POST" onsubmit="return validacion()">
			<h1>Inserta!</h1>
			<label>Introduce el nombre de la empresa: </label>
			<input type="text" name="empresa" id="empresa" placeholder="Google"><br>
			<div id="box_empresa"></div>
			<hr>
			<label>Introduce la dirección: </label>
			<input type="text" name="direccion" id="direccion" placeholder="Av.Madrid 12">
			<div id="box_direcc"></div>
			<hr>
			<label>Introduce el nombre: </label>
			<input type="text" name="nombre" id="nombre" placeholder="Pedro"><br>
			<div id="box_nombre"></div>
			<hr>
			<label>Introduce el DNI: </label>
			<input type="text" name="dni" id="dni" placeholder="12345678E"><br>
			<div id="box_dni"></div>
			<hr>
			<label>Introduce el Teléfono: </label>
			<input type="number" name="tlf" id="tlf" placeholder="645758117"><br>
			<div id="box_tlf"></div>
			<hr>
			<label>Introduce el e-mail: </label>
			<input type="email" name="email" id="email" placeholder="admin@gmail.com"><br>
			<div id="box_email"></div>
			<hr>
			<label for="sector" >Introduce el sector: </label><br>
			<input type="radio" name="tamano" value="Informática" checked="checked">Informática
			<br>
			<input type="radio" name="tamano" value="Química">Química
			<div id="box_sector"></div>
			<br><hr>
			<input type="submit" value="Insertar" name="insertar" id="insertar"> 
		</form>
	</div>
	<?php 
	//verifico que venga del fichero con isset
		if(isset($_POST["insertar"]))
		{
			//obtengo los datos ingresados con super global $_POST 
			$empresa = $_POST["empresa"];
			$direccion = $_POST["direccion"];
		    $nombre = $_POST["nombre"];
		    $dni = $_POST["dni"];
			$tlf = $_POST["tlf"];
		    $email = $_POST["email"];
		    $tamano = $_POST["tamano"];
		    //abro la carpeta e indico que hará, en este caso con a añade
		    $canal = fopen("listar.txt", "a");
		    // fwrite escribe y PHP_EOL me indica el salto de linea
			fwrite($canal, PHP_EOL.$empresa.";".$direccion.";".$nombre.";".$dni.";".$tlf.";".$email.";".$tamano);
			fclose($canal);
		}
	?>
</body>
</html>

