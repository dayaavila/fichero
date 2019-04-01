function validacion()
{
	var empresa = document.getElementById("empresa").value;
	var direccion = document.getElementById("direccion").value;
	var nombre = document.getElementById("nombre").value;
	// var dni = document.getElementById("dni").value;
	var tlf = document.getElementById("tlf").value;
	var email = document.getElementById("email").value;
	var sector = document.getElementsByName("tamano");


	var isValidEmpresa = this.isValidEmpresa(empresa);
	var isValidDireccion = this.isValidDireccion(direccion);
	var isValidNombre = this.isValidNombre(nombre);
	// var isValidDni = this.isValidDni(dni);
	var isValidTlf = this.isValidTlf(tlf);
	var isValidEmail = this.isValidEmail(email);

	if (isValidEmpresa === true &&
		isValidDireccion === true && 
		isValidNombre === true &&
		// isValidDni === true &&
		isValidTlf === true &&
		isValidEmail === true)
	{
		return true;
	}
	else{
		return false;
	}
}

function isValidEmpresa(empresa)
{
	if(empresa == null || empresa.length == 0 || /^\s+$/.test(empresa) || empresa.length < 3) 
	{
		document.getElementById("box_empresa").innerHTML ="Campo invalido, solo letras, mínimo tres letras, campos con (*) obligatorio";
		document.getElementById("box_empresa").style.color = "red";
		document.getElementById("box_empresa").style.fontSize = ".9rem";
		document.getElementById("empresa").style.border = "1px solid red";
		return false;
	}
	else
	{
		document.getElementById("empresa").style.border = "1px solid lightgrey";
  		document.getElementById("box_empresa").innerHTML ="";
	}
	return true;
}

function isValidDireccion(direccion)
{
	if(direccion == null || direccion.length < 3)
	{
		document.getElementById("box_direcc").innerHTML ="Debes escribir mínimo tres letras, los campos con (*) son obligatorio";
		document.getElementById("box_direcc").style.color = "red";
		document.getElementById("box_direcc").style.fontSize = ".9rem";
		document.getElementById("direccion").style.border = "1px solid red";
		return false;				
	}
	else
	{
		document.getElementById("direccion").style.border = "1px solid lightgrey";
  		document.getElementById("box_direcc").innerHTML ="";
	}
	return true;
}

function isValidNombre(nombre)
{
	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) || nombre.length < 3)
	{
		document.getElementById("box_nombre").innerHTML ="Debes escribir mínimo tres letras, los campos con (*) son obligatorio";
		document.getElementById("box_nombre").style.color = "red";
		document.getElementById("box_nombre").style.fontSize = ".9rem";
		document.getElementById("nombre").style.border = "1px solid red";
		return false;				
	}
	else
	{
		document.getElementById("nombre").style.border = "1px solid lightgrey";
  		document.getElementById("box_nombre").innerHTML ="";
	}
	return true;
}

// function isValidDni(dni)
// { 
// 	var numero;
// 	var let;
// 	var letra;
// 	var expresion_regular_dni;
	
// 	expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
	
// 	if(expresion_regular_dni.test (dni) == true)
// 	{
// 		numero = dni.substr(0,dni.length-1);
// 		let = dni.substr(dni.length-1,1);
// 		let=let.toUpperCase();
// 		numero = numero % 23;
// 		letra='TRWAGMYFPDXBNJZSQVHLCKET';
// 		letra=letra.substring(numero,numero+1);

// 		if (letra!=let) 
// 		{
// 			document.getElementById("box_dni").innerHTML ="La letra no corresponde con el DNI, los campos con (*) son obligatorio";
// 			document.getElementById("box_dni").style.color = "red";
// 			document.getElementById("box_dni").style.fontSize = ".9rem";
// 			document.getElementById("dni").style.border = "1px solid red";          
// 		}
// 		else
// 		{
// 			document.getElementById("dni").style.border = "1px solid lightgrey";
//   			document.getElementById("box_dni").innerHTML ="";
// 			return true;
// 		}
// 	}
// 	else
// 	{
// 		document.getElementById("box_dni").innerHTML ="DNI no válido, los campos con (*) son obligatorio";
// 		document.getElementById("box_dni").style.color = "red";
// 		document.getElementById("box_dni").style.fontSize = ".9rem";
// 		document.getElementById("dni").style.border = "1px solid red";
// 	}
// 	return false;
// }

function isValidTlf(tlf)
{
	var primer = tlf.substring(0, 1);
	if (primer!=6 && primer!=7 && primer!=9 || tlf.length>9)
	{
		document.getElementById("box_tlf").innerHTML ="El teléfono introducido es invalido, debe comenzar por 6,7 ó 9, máximo 9 números, los campos con (*) son obligatorio";
		document.getElementById("box_tlf").style.color = "red";
		document.getElementById("box_tlf").style.fontSize = ".9rem";
	    document.getElementById("tlf").style.border = "1px solid red";
		return false;				
	}
	else
	{
		document.getElementById("tlf").style.border = "1px solid lightgrey";
  		document.getElementById("box_tlf").innerHTML ="";
	}
	return true;
}

function isValidEmail(email)
{
	var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var ValidEmail = emailRegex.test(email);
	if( !ValidEmail ) 
	{
		document.getElementById("box_email").innerHTML ="El email introducido es invalido, los campos con (*) son obligatorio";
		document.getElementById("box_email").style.color = "red";
		document.getElementById("box_email").style.fontSize = ".9rem";
		document.getElementById("email").style.border = "1px solid red";
		return false;
	}
	else
	{
		document.getElementById("email").style.border = "1px solid lightgrey";
		document.getElementById("box_email").innerHTML ="";
	}
	return true;
}

function isValidRadio(sector)
{ 	
	var valueSelected = "";
	for(var i = 0; i < sector.length; i++) 
	{
		if (sector[i].checked) {
			valueSelected = (sector[i].value);			
			break;
		}
	}
	return valueSelected;
}



// function isValidDni(dni)
// { 
// 	var numero;
// 	var let;
// 	var letra;
// 	var expresion_regular_dni;
	
// 	expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
	
// 	if(expresion_regular_dni.test (dni) == true)
// 	{
// 		numero = dni.substr(0,dni.length-1);
// 		let = dni.substr(dni.length-1,1);
// 		let=let.toUpperCase();
// 		numero = numero % 23;
// 		letra='TRWAGMYFPDXBNJZSQVHLCKET';
// 		letra=letra.substring(numero,numero+1);
		
// 		if (letra!=let) 
// 		{
// 			document.getElementById("box_dni").innerHTML ="La letra no corresponde con el DNI, los campos con (*) son obligatorio";
// 			document.getElementById("box_dni").style.color = "red";
// 			document.getElementById("box_dni").style.fontSize = ".9rem";
// 			document.getElementById("dni").style.border = "1px solid red";          
// 		}
// 		else
// 		{
// 			document.getElementById("dni").style.border = "1px solid lightgrey";
//   			document.getElementById("box_dni").innerHTML ="";
// 			return true;
// 		}
// 	}
// 	else
// 	{
// 		document.getElementById("box_dni").innerHTML ="DNI no válido, los campos con (*) son obligatorio";
// 		document.getElementById("box_dni").style.color = "red";
// 		document.getElementById("box_dni").style.fontSize = ".9rem";
// 		document.getElementById("dni").style.border = "1px solid red";
// 	}
// 	return false;
// }


