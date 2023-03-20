var aficiones=["Leer","Dormir","Cine","Videojuegos","Fúbol","Tenis","Nadar","Bucear","Senderismo","Escalada","Esquiar","Pescar"];
//creamos variable globales para almacenar cada uno de los objetos
var selectAficiones;
var selectAficionesSeleccionadas;
var botonPasarAlgunas;
var botonPasarTodas;
var botonRegresarAlgunas;
var botonRegresarTodas;

//controlmos la carga del documento
window.addEventListener("load",comenzar,false);

//función que se ejecuta cuando se carga el documento
function comenzar(){
	//obtenemos los objetos y los almacenamos en las variables globales
	selectAficiones=gI("aficiones");
	selectAficionesSeleccionadas=gI("aficionesSeleccionadas");
	botonPasarAlgunas=gI("pasaSeleccionados");
	botonPasarTodas=gI("pasaTodos");
	botonRegresarAlgunas=gI("regresaSeleccionados");
	botonRegresarTodas=gI("regresaTodos");
	//cargamos todas las aficiones de la variabe en el select
	rellenarSelect(selectAficiones,aficiones);
	//añadimos los eventos a los objetos button
	botonPasarAlgunas.addEventListener("click",pasarAlgunas,false);
	botonPasarTodas.addEventListener("click",pasarTodas,false);
	botonRegresarAlgunas.addEventListener("click",regresarAlgunas,false);
	botonRegresarTodas.addEventListener("click",regresarTodas,false);
}

//functión de evento que pasa las que están seleccionadas de iz a dcha
function pasarAlgunas(){
	pasar(selectAficiones,selectAficionesSeleccionadas,botonPasarAlgunas);
}

//función de evento que pasa todas de iz a dcha
function pasarTodas(){
	pasar(selectAficiones,selectAficionesSeleccionadas,botonPasarTodas);
}

//función de evento que pasa algunas de iz a dcha
function regresarAlgunas(){
	pasar(selectAficionesSeleccionadas,selectAficiones,botonRegresarAlgunas);
}

//función de evento que pasa todas de iz a derecha
function regresarTodas(){
	pasar(selectAficionesSeleccionadas,selectAficiones,botonRegresarTodas);
}

//funcion que me permite obtener un elemento a través de su ids
//recibe
//	id- del objeto a obtener
//	retorna el objeto
function gI(id){
	return document.getElementById(id);
}

//funcion que rellena un selecec con el contenido de un array unidimensional
//recibe
//	objSelect-el objeto select a rellenarSelect
//	array- array unidimensional de donde se obtienen los datos
function rellenarSelect(objSelect,array){
	//recorremos el array
	for (let pos=0;pos<array.length;pos++){
		//añadimos el contenido del array como una opción del select
		objSelect.add(new Option(array[pos]));
	}
}

//función genérica que pasa algunos elementos de un select a otro conservando el orden
//la función controla si hay elementos seleccionados o no para pasarlo todos en caso de no haber elementos seleccionados
//recibe 
// origen- objeto select del que se quieren pasar los elementos
// destino- objeto select al que se quieren pasar
// boton- objeto que causo el evento
function pasar(origen,destino,boton){
	let seleccionadas; //para obtener el conjunto de opciones seleccionadas del objeto select origen
	seleccionadas=origen.selectedOptions;
	//miramos si es alguno de los botones de pasar algunas
	//para comprobar si hay alguna seleccionadas
	if (((boton.id=="pasaSeleccionados")||(boton.id=="regresaSeleccionados"))&&(seleccionadas.length==0)){
		alert("No hay elemento seleccionados");
		return false;
	}
	//comprobamos que boton se pulsó porque puede haber en origen elementos seleccionados y tiene que ignorar la selección en el caso de que se quieran pasar todas
	if ((boton.id=="pasaTodos")||(boton.id=="regresaTodos")) origen.selectedIndex=-1; //deselecciono todo
	//si viene por aquí es por que o es uno de los botones de pasar o regresar todas
	//o porque hay alguna seleccioonada
	if (seleccionadas.length==0) {
		//es uno de los otros botones
		//no hay elementos seleccionados por lo que hay que pasarlos todos
		//mientras haya opciones en el select de la origen cogeré la que tiene la posición 0  y la añado al select de destino
		while (origen.length>0){
			destino.add(origen[0]);
			//origen.remove(0); //no hace falta borrarlo porque al llevarlo al select de destino desaparece del de origen
		}
	} else {
		//hay elementos seleccionados
		let puesto=0; //para controlar el orden en el que se insertarán en el select de la izq para que conserven la misma posición
		//recorremos las opciones seleccionadas al reves
		for (let opc=seleccionadas.length-1;opc>=0;opc--){
			//las añadimos pero en el orden en el que estaban 
			destino.add(seleccionadas[opc],destino.length-puesto);
			puesto++;
		}		
	}
	destino.selectedIndex=-1; //para deseleccionar lo que estuviera seleccionado
}