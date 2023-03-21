window.onload = eventosClick; //modelo de eventos tradicional

function eventosClick() { //añade los eventos a los objetos del formulario
	var objetosFormulario = document.getElementById("formulario").elements;
	for (var obj = 0; obj < objetosFormulario.length; obj++) {
		if ((objetosFormulario[obj].type == "text") || (objetosFormulario[obj].type == "radio")) {
			objetosFormulario[obj].onclick = ver; //modelo de eventos tradicional
			//solo añadimos eventos a los objetos input (a los label no) ya que el bucle recorre todos los objetos que hay en el formulario
		}
	}
}

function ver() { //función que enseña las propiedades del objeto en el que se hizo clic
	var atrName = this.name;
	var atrId = this.id;
	var atrValue = this.value;
	var atrType = this.type;
	var mensaje = "Datos del objeto:\n\n";
	mensaje += "   name : " + atrName + "\n";
	mensaje += "   id   : " + atrId + "\n";
	mensaje += "   value: " + atrValue + "\n";
	mensaje += "   type : " + atrType;
	alert(mensaje);
}