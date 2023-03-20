var aficiones=["Leer","Dormir","Cine","Videojuegos","Fúbol","Tenis","Nadar","Bucear","Senderismo","Escalada","Esquiar","Pescar"]; //lista  de aficiones a incluir en el select de la izquierda
//creamos variable globales para almacenar cada uno de los objetos
var selectAficiones;
var selectAficionesSeleccionadas;
var botonSeleccionarAlgunas;
var botonSeleccionarTodas;
var botonDeseleccionarAlgunas;
var botonDeseleccionarTodas;

//controlmos la carga del documento
window.addEventListener("load",comenzar,false);

//función que se ejecuta cuando se carga el documento
function comenzar(){
	//obtenemos los objetos y los almacenamos en las variables globales
	selectAficiones=gI("aficiones");
	selectAficionesSeleccionadas=gI("aficionesSeleccionadas");
	botonSeleccionarAlgunas=gI("pasaSeleccionados");
	botonSeleccionarTodas=gI("pasaTodos");
	botonDeseleccionarAlgunas=gI("regresaSeleccionados");
	botonDeseleccionarTodas=gI("regresaTodos");
	//cargamos todas las aficiones de la variabe en el select
	rellenarSelect(selectAficiones,aficiones);
	//añadimos los eventos a los objetos button
	botonSeleccionarAlgunas.addEventListener("click",pasarAlgunas,false);
	botonSeleccionarTodas.addEventListener("click",pasarTodas,false);
	botonDeseleccionarAlgunas.addEventListener("click",regresarAlgunas,false);
	botonDeseleccionarTodas.addEventListener("click",regresarTodas,false);
}

//functión de evento que pasa las que están seleccionadas de iz a dcha
function pasarAlgunas(){
	//obtengo la colección de elementos seleccionados
	let seleccionadas=selectAficiones.selectedOptions;
	let puesto=0; //para controlar el orden en el que se insertarán en el select de la derecha para que conserven la misma posición
	//comprobamos si hay opciones seleccionadas
	if (seleccionadas.length>0){
		//recorremos las opciones seleccionadas al reves
		for (let opc=seleccionadas.length-1;opc>=0;opc--){
			//las añadimos pero en el orden en el que estaban 
			selectAficionesSeleccionadas.add(seleccionadas[opc],selectAficionesSeleccionadas.length-puesto);
			puesto++;
		}
	}else {
		alert("No has seleccionado ninguna afición");
	}
}

//función de evento que pasa todas de iz a dcha
function pasarTodas(){
	//mientras haya opciones en el select de la izquierda cogeré la que tiene la posición 0  y la añado al select de la derecha
	while (selectAficiones.length>0){
		selectAficionesSeleccionadas.add(selectAficiones[0]);
		//selectAficiones.remove(0); //no hace falta borrarlo porque al llevarlo al select de la derecha desaparece del de la izquierda
	}
}

//función de evento que pasa algunas de iz a dcha
function regresarAlgunas(){
	//obtengo la colección de elementos seleccionados
	let seleccionadas=selectAficionesSeleccionadas.selectedOptions;
	let puesto=0; //para controlar el orden en el que se insertarán en el select de la izq para que conserven la misma posición
	//comprobamos si hay opciones seleccionadas
	if (seleccionadas.length>0){
		//recorremos las opciones seleccionadas al reves
		for (let opc=seleccionadas.length-1;opc>=0;opc--){
			//las añadimos pero en el orden en el que estaban 
			selectAficiones.add(seleccionadas[opc],selectAficiones.length-puesto);
			puesto++;
		}
	}else {
		alert("No has seleccionado ninguna afición");
	}
}

//función de evento que pasa todas de iz a derecha
function regresarTodas(){
	//mientras haya opciones en el select de la derecha cogeré la que tiene la posición 0  y la añado al select de la izquierda
	while (selectAficionesSeleccionadas.length>0){
		selectAficiones.add(selectAficionesSeleccionadas[0]);
		//selectAficiones.remove(0); //no hace falta borrarlo porque al llevarlo al select de la izquierda desaparece del de la derecha
	}	
}

//funcion que me permite obtener un elemento a través de su id
//recibe
//	id- del objeto a obtener
//	retorna el objeto
function gI(id){
	return document.getElementById(id);
}

//funcion que rellena un select con el contenido de un array unidimensional
//recibe
//	objSelect-el objeto select a rellenar
//	array- array unidimensional de donde se obtienen los datos
function rellenarSelect(objSelect,array){
	//recorremos el array
	for (let pos=0;pos<array.length;pos++){
		//añadimos el contenido del array como una opción del select
		objSelect.add(new Option(array[pos]));
	}
}