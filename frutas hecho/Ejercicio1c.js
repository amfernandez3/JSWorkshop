//controlamos la carga del documento
window.addEventListener("load",crearEventos,false);

//función que se ejecuta cuando termina de cargarse el documento
function crearEventos(){
	//añadimos los eventos click a los diferentes elementos
	document.getElementById("misFrutas").addEventListener("change",seleccionar,false); //al select
	document.getElementById("nuevaFruta").addEventListener("click",anadirFruta,false); //a la caja de texto donde se introduce el nombre de la fruta
    document.getElementById("operar").addEventListener("click",operar,false);  //al botón de Ejecutar operación  
}

//función que se ejecuta cuando el usuario hace un clic sobre la lista de frutas o sobre la etiqueta asociada a la lista
function seleccionar() { 
	//activa directamente el botón de Borrar frutas seleccionadas
	//porque damos por hecho que si el usuario ha seleccionado alguna fruta es porque quiere borrarlas
	document.getElementById("borrar").checked = true;
}

//función que se ejecuta cuando el usuario hace un clic sobre la caja de texto o sobre la etiqueta asociada a la caja
function anadirFruta() { 
	//selecciona el contenido de la caja de texto para facilitar al usuario el cambio de nombre que esté escrito
	document.getElementById("nuevaFruta").select();
	//activa directamente el botón de Añadir Fruta porque damos por hecho que si está escribiendo un nombre es porque el usuario quiere añadirlo a la lista
	document.getElementById("añadir").checked = true;
}

//función que se llama cuando el usuario pulsa en el botón Ejecutar operación
//realiza la operación depenciendo de la opción que esté seleccionada
//	añadir un elemento a la lista 
//	borrar los elementos de la lista que están seleccionados 
function operar() { 
	//comprobamos que botón de opción está seleccionado
	//var seleccion=document.getElementsByTagName("operacion");
	if (document.frutas.añadir.checked) { //está seleccionado añadir
		anadirUnaFruta();
	} else if (document.frutas.borrar.checked) { //está seleccionado borrar
        borrarFrutas();
    } else { //no está seleccionada ninguna de las opciones
        alert("Debes seleccionar una de las dos opciones");
    }
}

//función que añade la fruta que esté escrita en la caja de texto a la lista
function anadirUnaFruta() {
	//obtenemos el nombre de la fruta escrita en la caja de texto
	var nuevaFruta = document.getElementById("nuevaFruta").value;
	//obtenemos el conjunto de las frutas de la lista. Valores de los option del select
	var frutas = document.getElementById("misFrutas");
	var anadir=false; //para controlar cuando tengo que añadir ya que si la fruta ya existe o no se introdujo nada en la caja no tiene nada que añadir
	var mensaje="";
	nuevaFruta=nuevaFruta.trim()
    //comprobamos que hay alguna fruta escrita
	if (nuevaFruta == "") {
		mensaje="Se ha dejado en blanco el nombre de la fruta";
	} else {
		//transformamos internamente la fruta para que coincida con el formato presentado en la lista
		//	Inicial mayúscula y resto minúsculas
		//para que la encuentre anunque esté escrita de diferente forma
		nuevaFruta=nuevaFruta.toLowerCase();
		nuevaFruta=nuevaFruta.substr(0,1).toUpperCase()+nuevaFruta.substr(1);
		//comprobamos si la lista está vacía y contiene solo el texto "No quedan frutas" para borrarlo antes de añadir
		if (frutas[0].value == "No quedan frutas") {
			//borro el texto No quedan frutas
			frutas.remove(0);
			anadir=true;
		} else {
			//comprobamos si el elemento a añdir ya está en la lista
			if (yaExiste(nuevaFruta,frutas)) {
				mensaje=nuevaFruta + " ya está en la lista. No se va a añadir";
			} else {
				anadir=true;
			}
		}
	}
	if (anadir==true) {
		//cremos un nuevo objeto opcion (new Option(text, value))
		var opcion = new Option(nuevaFruta, nuevaFruta);
		//esta forma de añadir añade siempre al final
		frutas.add(opcion);
		mensaje="Se va a añadir "+nuevaFruta+" a la lista";
	} 
	alert(mensaje);
}

//función que indica si una elemento forma parte de las opciones de un select
//	item - texto a añadir
//	lista- es objeto select que contiene 1 o más opciones
//retorna
//	true o false dependiendo de si item se encuentra o no en la lista
function yaExiste(item,lista) {
	//comprobamos si existe el item en una lista que es un objeto
	var i = 0;
	while (i < lista.length) {
		if (sinAcentos(lista[i].value) == sinAcentos(item)) { //quitamos los acentos a cada valor de la lista y comprobamos si coincide con el valor que se introdujo en la caja también sin acentos
			return true;
		}
		i++;
	}
	return false;
}

//función que transforma un texto en el mismo pero sin acentos
//recibe
//	texto- cualquier texto
//retorna
//	nuevoTexto- el texto sin acentos
function sinAcentos(texto){
	var acentos="ÁáÄäÀàÂâÉéËëÈèÊêÍíÏïÌìÎîÓóÖöÒòÔôÚúÜüÚúÛû";
	var sinAcentos="AaAaAaAaEeEeEeEeIiIiIiIiOoOoOoOoUuUuUuUu";
	var nuevoTexto="";
	for (var nLetra=0;nLetra<texto.length;nLetra++){ //recorro cada una de las letras del texto
		var posicionEnAcentos=acentos.indexOf(texto.substr(nLetra,1)); //miramos si encuentra la letra en la cadena de acentos. si es así el valor devuelto será diferente de -1
		if (posicionEnAcentos!=-1) {
			//sustituimos el caracter acentuado por el mismo sin acento cogiendo la letra en la cadena sinAcentos que tiene esa misma posición
			nuevoTexto+=sinAcentos.substr(posicionEnAcentos,1);
		} else {
			nuevoTexto+=texto.substr(nLetra,1); //nos quedamos con la letra tal y como está
		}
	}
	return nuevoTexto;
}

//función que se ejecuta cuando la opción seleccionada es la de borrar y le damos al botón ejecutar operación
function borrarFrutas() {
	var frutas = document.getElementById("misFrutas");
	var seleccionadas=frutas.selectedOptions; //coge el conjunto de opciones seleccionadas en el select
	var mensaje="";
	if (seleccionadas.length>0) {  //si hay alguna seleccionada el conjunto tendra una longitud >0
		mensaje=mensajeItemsABorrar(seleccionadas); //construyo un mensaje con el conjunto de opciones seleccionadas
		if (confirm("Las frutas seleccionadas: "+mensaje+" van a ser borradas\n¿Quieres borrarlas de verdad?")) {
			//recorremos los elementos de la lista en orden inverso para que el borrado de un índice no afecte a las posiciones de sus siguientes
			for (i = frutas.length - 1; i >= 0; i--) {
				//preguntamos si el elemento de la posición i está seleccionado
				if (frutas[i].selected) {
					frutas.remove(i); //lo borramos del select
				}
			}
			if (frutas.length == 0) { //comprobamos si una vez borrados nos hemos quedado sin elementos
				//si se queda sin elementos añadimos uno indicando que está vacía
				var nuevaFruta = "No quedan frutas";
				var opcion = new Option(nuevaFruta, nuevaFruta);
				frutas.add(opcion);
			}
		}
	} else {
		alert("No has seleccionado ninguna fruta");
	}
}

//construye un mensaje de texto con los valores de los items seleccionados de un select
//recibe 
//	seleccionados- el conjunto de opciones seleccionadas
//devuelve
//	mensaje- texto con los nombres de los items seleccionados retorna un cadena con los valores separados por ,
function mensajeItemsABorrar(seleccionados){
	var mensaje="";
	for (var elemento in seleccionados) {//recorro el conjunto de elementos seleccionados
		if (!isNaN(elemento)){
			mensaje+=seleccionados[elemento].value+","; //coge la propiedad value del elemento seleccionado
		}
	}
	return mensaje.substring(0,mensaje.length-1); //retorna el mensaje quitando la última ,
}       
