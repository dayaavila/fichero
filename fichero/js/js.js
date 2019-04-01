$(document).ready(function(){
	
	var msg ="";

	$("#my_form").on("submit", function(e){
		msg = "";
		//este e... detiende el envio del formulario.
		e.preventDefault();

		if($("#empresa").val() == ""){
			msg += "El campo empresa está vacío <br>";
			$("#empresa").css("border","1px solid red");
		} else {
			$("#empresa").css("border","1px solid grey");
		}

		if($("#direccion").val() == ""){
			msg += "El campo dirección está vacío <br>";
			$("#direccion").css("border","1px solid red");
		} else {
			$("#direccion").css("border","1px solid grey");
		}

		if($("#nombre").val() == ""){
			msg += "El campo nombre está vacío <br>";
			$("#nombre").css("border","1px solid red");
		} else {
			$("#nombre").css("border","1px solid grey");
		}

		if($("#dni").val() == ""){
			msg += "El campo DNI está vacío <br>";
			$("#dni").css("border","1px solid red");
		} else {
			$("#dni").css("border","1px solid grey");
		}

		if($("#tlf").val() == ""){
			msg += "El campo teléfono está vacío <br>";
			$("#tlf").css("border","1px solid red");
		} else {
			$("#tlf").css("border","1px solid grey");
		}

		if($("#email").val() == ""){
			msg += "El campo email está vacío <br>";
			$("#email").css("border","1px solid red");
		} else {
			$("#email").css("border","1px solid grey");
		}

  		$("#errors").html(msg);

  		if(msg == ""){
  			$("#my_form").submit();
  		}
	});
});

	