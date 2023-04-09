
//--------------------------------------------------------------------------------------------Variables

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