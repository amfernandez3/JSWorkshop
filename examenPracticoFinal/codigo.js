//--------------------------------------------------------------------------------Anotaciones


//--------------------------------------------------------------------------------Variables
var datosCiudades={
    "Toledo":[
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //hoy
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //mañana
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //el día que corresponda
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5] //....
            ],
    "Ourense":[
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //hoy
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //mañana
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //el día que corresponda
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5] //....
            ],
    "Madrid":[
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //hoy
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //mañana
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //el día que corresponda
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5] //....
            ],
    "Badajoz":[
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //hoy
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //mañana
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //el día que corresponda
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5] //....
            ],
    "Guadalajara":[
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //hoy
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //mañana
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //el día que corresponda
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5] //....
            ],
    "Lugo":[
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //hoy
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //mañana
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //el día que corresponda
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5] //....
            ],
    "Pontevedra":[
               [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //hoy
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //mañana
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //el día que corresponda
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5], //....
                [20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5] //....
            ]
}

//Variable que almacena los días de la semana
var diasSemana=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var datosCiudad=new Informacion();//objeto que contendrá los datos relevantes calculados que se mostrarán en el mensaje

//Variables auxiliares ! no necesarios
/* var seleccionProxDias = document.getElementById("proxDias");
var seleccionUnDia = document.getElementById("unDia"); */
//-------------------------------------------------------------------------------- Funciones

//Creamos el evento que controla la interfaz
window.addEventListener('load',cargarInterfaz,false);
//Por defecto desmarcamos la selección de días
window.addEventListener('load',desactivarSelectDias,false);
    //Creamos la función que se llamará al cargar la página
    function cargarInterfaz(){
    //Creamos los selects:
    generarSelect(datosCiudades,5, "ciudades");

    //Primero creamos un array auxiliar con los días de la semana modificados:
    let arrayAux = seleccionarDias(diasSemana);
    //Ahora creamos el select
    generarSelectDias(arrayAux,3,"dias");
    
    //Con todas las estructura definidas, queremos definir dos eventos w3c que activen o desactiven el select de dias
    
    document.getElementById("unDia").addEventListener('click',desactivarSelectDias,false);
    document.getElementById("proxDias").addEventListener('click',activarSelectDias,false);

    //Ahora todo el menú de selección está operativo, procedemos a crear las tablas con la información:
    //Primero obtenemos la informacion de la ciudad a través de su selección
    document.getElementById("ciudades").addEventListener('click',crearInformacionCiudad,false);

    //Mostramos la información
    
}

//Introducir una cadena en un select definido por parámetro
    function generarSelect(array, tamaño, selectNombre) {
	// Crear el elemento select
	const select = document.getElementById(selectNombre);
	select.size = tamaño || array.length;

	// Recorrer cada elemento y añadirlo como una opción del select
	/* array.forEach((elemento, indice) => {
	  const opcion = document.createElement("option");
	  opcion.value = indice;
	  opcion.text = elemento;
	  select.add(opcion);
	}); */

    //Funcion que recorre el array de datos
    for(var elemento in array){
        const opcion = new Option(elemento,elemento,false,false);
        select.add(opcion);
    }
	
    }

  //Funcion que genera el select de los dias
     function generarSelectDias(array, tamaño, selectNombre) {
        // Crear el elemento select
        const select = document.getElementById(selectNombre);
        select.size = tamaño || array.length;

        //Funcion que recorre el array de datos
        for(let aux = 0; aux < array.length ; aux++){           
            const opcion = new Option(array[aux],aux,false,false);
            select.add(opcion);
        }
	
  }
  //Funcion que devuelve el array de dias modificado segun lo que pide el ejercicio, poniendo hoy y mañana de primeros
    function seleccionarDias(arrayDias){
    let arrayDiasModificado;
    //Calculamos la fecha:
    let fechaActual = new Date();
    let diaActual = fechaActual.getDay(); 

    //Dividiremos el array y luego concatenaremos en el orden que nos conviene
    let arraySeccion1 = arrayDias.slice(diaActual, arrayDias.length);
    let arraySeccion2 = arrayDias.slice(0,diaActual);
    //Concatenamos los arrays:
    arrayDiasModificado = arraySeccion1.concat(arraySeccion2);
    return arrayDiasModificado;
    }

    //Función que permite activar el select de dias de semana para la selección
    function activarSelectDias(){
        let select = document.getElementById("dias");

        select.removeAttribute("disabled");
    }

    //Función que permite desactivar el select de dias de semana para la selección

    function desactivarSelectDias(){
        let select = document.getElementById("dias");
    
        select.setAttribute("disabled","");
    }

    function crearInformacionCiudad(){
        
        var select = document.getElementById('ciudades');
        select.addEventListener('change',
        function(){
        var ciudadSeleccionada = this.options[select.selectedIndex];
        let espacioInfoMinMax = document.getElementById("infoMinMax");

        document.getElementById("infoMinMax").style.display = 'block';

        espacioInfoMinMax.innerText = "Ciudad seleccionada: "+ ciudadSeleccionada.value;
        });
        
    }

    
//---------------------------------------- cargamos la definición del objeto información para usarlo en las salidas:
//-------------------------------------
//    OBJETOS DE LA APLICACIÓN
//-------------------------------------

//definición de un objeto conveniente al ejercicio
//yo voy a definir un objeto que almacene los datos a mostrar por el ejercicio cuando todo es correcto
function Informacion(){
    
    //PROPIEDADES
    this.temperaturaMaxima; 
    this.temperaturaMinima; 
    this.nombreCiudad;
    this.temperaturasMedias=[]; //almacenará el array de temperaturas medias de cada día la semana de la ciudad elegida
    this.diaSemana; //será un valor numérico de 0 a 6
    
    //MÉTODOS
    
    //calcula y almacena el dato de la temperatura máxima de un día de la semana 
    //recibe
    //  temperaturasDia- un array con las 24 horas del día 
    this.calcularTemperaturaMaximaMinima=function(temperaturasDia){
        let temperaturaMaxima=-99;
        let temperaturaMinima=99;
        for (let nTemperatura=0;nTemperatura<temperaturasDia.length;nTemperatura++){
            if (temperaturasDia[nTemperatura]>temperaturaMaxima) temperaturaMaxima=temperaturasDia[nTemperatura];
            if (temperaturasDia[nTemperatura]<temperaturaMinima) temperaturaMinima=temperaturasDia[nTemperatura];
        }
        this.temperaturaMaxima=temperaturaMaxima;
        this.temperaturaMinima=temperaturaMinima;   
    }
    
    //calcula la temperatura media de un día y lo acumula en la propiedad
    //recibe
    //  temperaturasDia- las 24 temperaturas de un día de la semana
    this.calculaMedia=function(temperaturasDia){
        let sumaTemperaturasDia=0;
        for (let nTemperatura=0;nTemperatura<temperaturasDia.length;nTemperatura++){
            sumaTemperaturasDia+=temperaturasDia[nTemperatura];
        }
        this.temperaturasMedias.push(sumaTemperaturasDia/temperaturasDia.length);
    }
}

//Funcion que muestra el maximo y minimo de las temperaturas:
function mostrarMinMax(){

}
    
