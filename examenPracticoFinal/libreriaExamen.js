//Librería de funciones de Alejandro Meno Fernández 44662476H - 08/04/2023
/////////////////////////////////////////////////////////
// Función cross-browser para añadir Eventos: devuelve una función según el soporte del navegador.
/////////////////////////////////////////////////////////
var crearEvento = function(){
	function w3c_crearEvento(elemento, evento, mifuncion){
		elemento.addEventListener(evento, mifuncion, false);
	}
	
	function ie_crearEvento(elemento, evento, mifuncion){
		var fx = function(){mifuncion.call(elemento);};
		
		// Enlazamos el evento con attachEvent.
		// Cuando usamos attachEvent dejamos de tener acceso al objeto this en mifuncion. 
		// Para solucionar eso usaremos el método call() del objeto Function, 
		// que nos permitirá asignar el puntero this para su uso dentro de la función. 
		// El primer parámetro que pongamos en call será la referencia que se usará como 
		// objeto this dentro de nuestra función. 
		// De esta manera solucionamos el problema de acceder a this usando attachEvent en IE.
		elemento.attachEvent('on' + evento, fx);
	}

	if (typeof window.addEventListener !== 'undefined')	return w3c_crearEvento;
	else if (typeof window.attachEvent !== 'undefined')	return ie_crearEvento;
}();	// <= Esta es la parte más crítica - tiene que terminar en () y ;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Función cross-browser para quitar Eventos
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var eliminarEvento = function(){
	function w3c_eliminarEvento(elemento, evento, mifuncion){
		elemento.removeEventListener(evento, mifuncion, false);
	}
	
	function ie_crearEvento(elemento, evento, mifuncion){
		var fx = function(){mifuncion.call(elemento);};
		
		// Enlazamos el evento con attachEvent.
		// Cuando usamos attachEvent dejamos de tener acceso al objeto this en mifuncion. 
		// Para solucionar eso usaremos el método call() del objeto Function, 
		// que nos permitirá asignar el puntero this para su uso dentro de la función. 
		// El primer parámetro que pongamos en call será la referencia que se usará como 
		// objeto this dentro de nuestra función. 
		// De esta manera solucionamos el problema de acceder a this usando attachEvent en IE.
		elemento.detachEvent('on' + evento, fx);
	}

	if (typeof window.removeEventListener !== 'undefined')	return w3c_eliminarEvento;
	else if (typeof window.detachEvent !== 'undefined')	return ie_eliminarEvento;
}();

/////////////////////////////////////////////////////////
//// mis métodos superrecudidos de obtener elementos
/////////////////////////////////////////////////////////
function gI(id){
	return document.getElementById(id);
}
function gC(clase,nodo){
	if (nodo) return nodo.getElementsByClassName(clase);
	return document.getElementsByClassName(clase);
}
function gN(nombre,nodo){
	if (nodo) return nodo.getElementsByName(nombre);
	return document.getElementsByName(nombre);
}
function gT(tag,nodo){
	if (nodo) return nodo.getElementsByTagName(tag);
	return document.getElementsByTagName(tag);
}

////////////////////////////////////////////////////////
//// mis métodos superrecudidos de trabajar con nodos
/////////////////////////////////////////////////////////
function cE(etiqueta){
	return document.createElement(etiqueta);
}
function sA(nodo,atrib,valor) {
	return nodo.setAttribute(atrib,valor);
}
function rA(nodo, atrib){
	return nodo.removeAttribute(atrib);
}
//Función que define un nodo como hijo de otro
function aC(nodo,nodoHijo) {
	return nodo.appendChild(nodoHijo);
}
function rC(nodo,nodoHijo) {
	return nodo.removeChild(nodoHijo);
}
function cT(texto){
	return document.createTextNode(texto);
}

////////////////////////////////////////
//otros métodos Cross-Browser usados para insertar y borrar nombres de clase
//////////////////////////////////////
function bC(nodo,nombreClase){  //borra un nombre de clase de la list
	//si no recibe nombre de clase es que hay que borrarlos todos
	if (nombreClase) {
		var patron=new RegExp("/\b"+nombreClase+"\b/");
		if (navigator.appName.indexOf("Explorer") != -1) nodo.className = nodo.className.replace(patron,'') ;
		else if (nodo.classList)
			if (nodo.classList.length>0) nodo.classList.remove(nombreClase);
	}
	else if (navigator.appName.indexOf("Explorer") != -1) nodo.className =""
	     else nodo.classList="";
}

function iC(nodo,nombreClase){  //añade un nombre de clase a la lista
	if (navigator.appName.indexOf("Explorer") != -1) nodo.className+=" "+nombreClase;
	else if (nodo.classList)
		if (nodo.classList.length==0) sA(nodo,"class",nombreClase)
		else nodo.classList.add(nombreClase);
}
function pC(nodo,pos) { //indica el nombre de clase que ocupa la posición pos de un nodo
	if (navigator.appName.indexOf("Explorer") != -1) {
		var nombreClase=nodo.className;
		return nombreClase.split(" ")[pos];
	} else return nodo.classList[pos];
}	

//////////////////////////////////////////////////
/////////////////////metodos para el select
//////////////////////////////////////////////////
function cO(desde,hasta,id){
	//esta función crea opciones en un select de opciones con valores numéricos desde el valor desde hasta el valor hasta
	//el select al que se le añaden las opciones tiene que tener el indetinficador = argumento id
	var elemento=gI(id);	
	for (var i=desde;i<=hasta;i++){
		var opcion=new Option(i);
		elemento.add(opcion);
	}
}

function cOl(lista,valores){ //amabs listas tienen que tener la misma longitud)
	//función que crea las opciones en un select
	//los contenidos que tendrán los elementos option están almacenados en la lista
	//los value los obtiene de la posición que tiene cada valor en la lista o de la lista de valores (de existir)
	for (var i=0;i<lista.length;i++){
		if (valores) {  //new Option(contenido_opción,valor_atributo_value)
			var opcion=new Option(lista[i],valores[i]);
		} else {
			var opcion=new Option(lista[i],i);
		}
		elemento.add(opcion);
	}
}

//////////////////////////////////////////
///////////////// métodos para crear celdas con contenido
///////////////////////////////////////////
function cC(contenido,tipoCelda){   //tipoCelda puede ser th o td
	var celda=cE(tipoCelda);
	var nodoTexto=cT(contenido);
	aC(celda,nodoTexto);
	return celda;
}	

//////////////////////////////////////////
///////////////// métodos para crear tablas
///////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! Métodos personales y anotaciones relativas a la temática del examen
///////////////////////////////////////////


/* //añadimos el evento de control de carga
crearEvento(window,"load",iniciar);

//Función que gestionará el flujo de eventos
function iniciar(){
	código de la interfaz
} */


//Crear una estructura de datos:
let ciudades = ["Madrid", "Barcelona", "París", "Londres", "Roma"];

//Introducirla una cadena en un select como secuencia de selects
function generarSelect(array) {
	// Obtener el elemento contenedor donde se añadirá el select
	const contenedor = document.getElementById("contenedor");
	
	// Crear el elemento select
	const select = document.createElement("select");
	select.size = array.length;

	// Recorrer cada elemento y añadirlo como una opción del select
	array.forEach((elemento, indice) => {
	  const opcion = document.createElement("option");
	  opcion.value = indice;
	  opcion.text = elemento;
	  select.add(opcion);
	});
	
	// Añadir el select al contenedor
	contenedor.appendChild(select);
  }

  //Generar un select usando las funciones de la liberia:
 /**
  * La función genera toda la estructura del select (appends, id, labels...)
  * @param {*} idZona : contenedor donde se alojará el select
  * @param {*} idSelect : id que le daremos al select para identificar y referenciar
  */
function crearSelect(idZona,idSelect){
	//Primero crea los objetos select y label.
    let objSelect=cE("select");
    let label=cE("label");
	//Del label desciende un texto que da titulo al select
    aC(label,cT("Lista de jugadores"));
	//Ahora definimos los atributos del label y del select
    sA(label,"for",idSelect);
    sA(objSelect,"id",idSelect);
    sA(objSelect,"title","Lista de Jugadores");

	//Por último, seleccionamos la zona donde colocaremos los elementos y los insertamos como hijos.
    aC(gI(idZona),label);
    aC(gI(idZona),objSelect);
}

//------------------------------------------------------------------------------------------------------------ !ejemplo aplicacion
var contenedorSelect = document.createElement("div");
const diasSemana = [
  { valor: "1", texto: "Lunes" },
  { valor: "2", texto: "Martes" },
  { valor: "3", texto: "Miercoles" },
  { valor: "4", texto: "Jueves" },
  { valor: "5", texto: "Viernes" },
  { valor: "6", texto: "Sabado" },
  { valor: "7", texto: "Domingo" }
];

// Ejemplo de uso
const datosEjemplo = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 35 }
];

var headersCreated = false; // Variable que indica si las cabeceras de la tabla ya han sido creadas

//Dentro del contenedor introduciremos informacion, pero debemos anclarlo al body.
document.body.appendChild(contenedorSelect);

//--------------------------------------------------------------------------------------------Funciones de carga de interfaz
//Creamos el evento que condicionará la carga de la interfaz
window.addEventListener('load',cargarInterfaz,false);

//Creamos la función que se llamará al cargar la página
function cargarInterfaz(){
  //Creamos los elementos que tendremos:
  crearElemento(contenedorSelect,"p","textoPrueba");
  crearElemento(contenedorSelect,"p","textoAux");
  crearElemento(contenedorSelect,"select","selectPrueba");
  //Creamos una tabla para mostrar la informacion
  crearElemento(contenedorSelect,"table","tablaPrueba");
  //Definimos un evento para la seleccion de los datos que mandar a tabla
  selectPrueba.addEventListener("change", crearTabla, false);

  introducirTexto(textoPrueba,"Hola mundo!");
  introducirTexto(textoAux,"Select:");
  introducirOpcionesSelect(selectPrueba,diasSemana);
}

//--------------------------------------------------------------------------------------------Funciones recurrentes DOM

/** Función estandar para la creación de elementos del DOM
 * 
 * @param {*} zona :  define donde se añadirá el elemento //!(sin comillas)
 * @param {*} tipoElemento :  define el tipo de elemento a crear
 * @param {*} idElemento  :  define un id para identificar y referenciar el elemento
 */
function crearElemento(zona, tipoElemento, idElemento){
  //Suponemos que la zona ya existe y está vinculada al body (ej contenedor)
  let nuevoElemento = document.createElement(tipoElemento);
  nuevoElemento.id = idElemento;

  //Comprobamos que zona sea un elemento
    if (zona instanceof Element) {
      zona.appendChild(nuevoElemento);
    } else {
      console.error('El parámetro zona no es un elemento del DOM válido');
    }


}

  /** Función para añadir texto a un elemento
   * 
   * @param {*} elemento : Elemento sobre el que trabajar //!(sin comillas)
   * @param {*} texto : Texto a introducir
   */
  function introducirTexto(elemento, texto){
    elemento.textContent = texto;
  }


  /** Función para crear los elementos de un select
   * 
   * @param {*} selectID : Select en el que incluiremos los datos
   * @param {*} estructuraDatos : Datos que serán las opciones del select
   */
  function introducirOpcionesSelect(selectID, estructuraDatos){
    let select = selectID;
    select.size = estructuraDatos.length;
    //Estructura que recorre los datos creando opciones
    for (let i = 0; i < estructuraDatos.length; i++) {
      let opcion = document.createElement('option');
      opcion.textContent = estructuraDatos[i].texto;
      opcion.value = estructuraDatos[i].valor;
      select.appendChild(opcion);
    }
  }

 //----------------------------------------------------------------------------------------- Trabajo con tablas:
 function crearTabla() {
  // Obtener los datos seleccionados del select
  const opcionSeleccionada = selectPrueba.options[selectPrueba.selectedIndex].value;
  const datos = diasSemana.filter(dato => dato.valor == opcionSeleccionada);

  // Busca la tabla existente
  const tablaExistente = document.getElementById("tablaPrueba");


  // Crea la tabla si aún no ha sido creada
  const tabla = tablaExistente.querySelector("table") || document.createElement('table');
  if (!headersCreated) {
    // Crea el encabezado
    const thead = document.createElement('thead');
    const encabezado = document.createElement('tr');

    // Crea una celda de encabezado para cada propiedad en el primer objeto del array
    Object.keys(datos[0]).forEach((propiedad) => {
      const columna = document.createElement('th');
      columna.textContent = propiedad;
      encabezado.appendChild(columna);
    });

    thead.appendChild(encabezado);
    tabla.appendChild(thead);

    headersCreated = true; // Cambia la variable a true para indicar que las cabeceras ya han sido creadas
  }

  // Crea el cuerpo de la tabla
  const tbody = document.createElement('tbody');

  // Crea una fila por cada objeto en el array
  datos.forEach((dato) => {
    const fila = document.createElement('tr');

    // Crea una celda por cada propiedad del objeto
    Object.values(dato).forEach((valor) => {
      const celda = document.createElement('td');
      celda.textContent = valor;
      fila.appendChild(celda);
    });

    tbody.appendChild(fila);
  });

  tabla.appendChild(tbody);
  tablaExistente.appendChild(tabla);
}
