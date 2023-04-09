//Ejercicio de desarrollo de un sistema que permita sacar estadísticas (medias, mínimas y máximas) del tiempo en una ciudad

//Primero declaramos las variables de ámbito global
//Primero un array denso para trabajar con las ciudades, se elige un denso porque no contendrá índices vacíos.
var ciudades = ["vigo","barcelona"];

//Para definir los días de la semana usamos un array mixto para poder enumerar los índices
var diasSemana = {
    0 :"lunes",
    1 :"martes",
    2: "miercoles",
    3: "jueves",
    4: "viernes",
    5: "sabado",
    6: "domingo"
}

//Creamos las estructuras de datos que contendrán los valores de temperatura para los diferentes días de la semana:

var temperaturaBarcelona = [
    [14, 23, 12 , 12, 11, 34 ,5 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21],
    [4, 23, 12 , 12, 11, 31 ,5 , 21,4, 23, 2 , 2, 1, 3 ,5 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21],
    [4, 3, 12 , 12, 1, 30 ,5 , 1,4, 23, 12 , 12, 11, 34 ,25 , 1,4, 23, 12 , 12, 11, 34 ,5 , 21],
    [4, 23, 12 , 12, 1, 3 ,5 , 21,4, 23, 12 , 2, 11, 34 ,5 , 1,4, 3, 12 , 12, 11, 34 ,15 , 21],
    [4, 2, 12 , 12, 11, 27 ,5 , 21,4, 3, 12 , 12, 11, 34 ,5 , 21,4, 23, 12 , 12, 1, 34 ,5 , 21],
    [4, 3, 12 , 12, 11, 36 ,5 , 1,4, 2, 12 , 12, 11, 34 ,25 , 1,4, 2, 12 , 12, 11, 34 ,5 , 21],
    [4, 23, 12 , 12, 11, 30 ,25 , 1,4, 2, 12 , 12, 11, 34 ,25 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21]
  ];
var temperaturaVigo = [
    [14, 23, 12 , 12, 11, 34 ,5 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21],
    [4, 23, 12 , 12, 11, 34 ,5 , 21,4, 23, 2 , 2, 1, 3 ,5 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21],
    [4, 3, 12 , 12, 1, 3 ,5 , 1,4, 23, 12 , 12, 11, 34 ,25 , 1,4, 23, 12 , 12, 11, 34 ,5 , 21],
    [4, 23, 12 , 12, 1, 3 ,5 , 21,4, 23, 12 , 2, 11, 34 ,5 , 1,4, 3, 12 , 12, 11, 34 ,15 , 21],
    [4, 2, 12 , 12, 11, 32 ,5 , 21,4, 3, 12 , 12, 11, 34 ,5 , 21,4, 23, 12 , 12, 1, 34 ,5 , 21],
    [4, 3, 12 , 12, 11, 33 ,5 , 1,4, 2, 12 , 12, 11, 34 ,25 , 1,4, 2, 12 , 12, 11, 34 ,5 , 21],
    [4, 23, 12 , 12, 11, 42 ,25 , 1,4, 2, 12 , 12, 11, 34 ,25 , 21,4, 23, 12 , 12, 11, 34 ,5 , 21]
  ];
  



//Definimos un último array en el que se reflejen las temperaturas por ciudad y por día en un plazo de una semana
//usamos un array bidimensional



//Creamos la variable mensaje que permitirá gestionar más comodamente las ayudas al usuario
var mensaje = "Hola, bienvenido al sistema de estadísticas del tiempo\n\n";
mensaje += "Introduce el nombre de tu ciudad con el siguiente formato (solo letras):\n\n"
mensaje += "nombreciudad\n\n";
mensaje += "Las ciudades actuales del sistema son: " + ciudades[0] + " y " + ciudades[1];


//Función aleatoria que genera las temperaturas de las ciudades
function generarTemperaturas(arrayTemperaturasCiudad) {
    //Variables auxiliares para el recorrido de los arrays
    contadorHorasDia = 0;
    contadorDiasSemana = 0;

    //Variables que controlan los mínimos y máximos de las temperaturas
    for (contadorDiasSemana; contadorDiasSemana < 7; contadorDiasSemana++) {
        for (contadorHorasDia; contadorHorasDia < 24; contadorHorasDia++) {
            arrayTemperaturasCiudad[contadorDiasSemana][contadorHorasDia] = Math.floor(Math.random() * (40 - 0 + 1) + 0);
            arrayTemperaturasCiudad[contadorDiasSemana][contadorHorasDia];
        }
    }

    return arrayTemperaturasCiudad;
}

//Creamos la función que controlará la entrada del usuario
/**
 * Se recibe la entrada y se ejecutan dos comprobaciones sobre ella:
 * - primero se comprueba que la entrada no pasa el test de la expresión regular
 * - después se comprueba que la ciudad no existe
 * Si ambas comprobaciones de error son falsas, el valor es adecuado.
 * @returns entradaUsuario : devuelve la entrada validada para poder volcarla en una variable
 */
function interaccionUsuario() {
    let entradaUsuario = prompt(mensaje);
    entradaUsuario = entradaUsuario.toLowerCase();
    if (!comprobarEntrada(entradaUsuario)) {
        alert("El formato introducido no es correcto, inténtalo de nuevo.");
    }
    else if (entradaUsuario.trim() != ciudades[0] && entradaUsuario.trim != ciudades[1]) {
        alert("La ciudad introducida no es correcta, por favor, inténtalo de nuevo siguiendo las instrucciones.");
    }
    else {
        return entradaUsuario;
    }
}

//Función a la que se le pasa la estrcutura de horas de una semana y recorre los dias asignando un valor 
//Con el día elegido recorre las horas sumándolas en una variable y devolviendo (tras dividir entre el num horas) el resultado
function temperaturaMediaDia(temperaturasCiudad){
    mensaje = "";
    let contadorDiasSemana = 0;
    let contadorHoras = 0;
    let sumaTemperaturas = 0;
    for(contadorDiasSemana; contadorDiasSemana < 7; contadorDiasSemana++){
        for(contadorHoras; contadorHoras <24 ; contadorHoras++){
       
            sumaTemperaturas+=  temperaturasCiudad[contadorDiasSemana][contadorHoras];
        
    }
    mensaje += "La temperatura media del día:  " + diasSemana[contadorDiasSemana]+ "  es: " + sumaTemperaturas/contadorHoras+ "\n\n";
    sumaTemperaturas = 0;
    contadorHoras = 0;
    }
    
    return mensaje;
}

//Función que devuelve las temperaturas maximas y minimas de un dia aleatorio
function temperaturaMaxMin(temperaturasCiudad){
    let diaAleatorio = Math.floor(Math.random() * (6 - 0));
    let contadorHoras = 0;
    let max = 0;
    let min = 0;

    //Recorremos las horas del día seleccionado al azar
    //Si alguna hora es mayor que la hora maxima, la definimos como nueva máxima
    //Si la minima es cero le asignamos el valor de la siguiente y si encuentra un valor menor, lo asume 
    for(contadorHoras; contadorHoras <24 ; contadorHoras++){
       if(temperaturasCiudad[diaAleatorio][contadorHoras] > max){
            max = temperaturasCiudad[diaAleatorio][contadorHoras];
       }
       if(min == 0){
        min = temperaturasCiudad[diaAleatorio][contadorHoras];
       }
       else if(temperaturasCiudad[diaAleatorio][contadorHoras] < min){
        min = temperaturasCiudad[diaAleatorio][contadorHoras];
       }
            
        
    }
    mensaje = "La temperatura max del día: \n " + diasSemana[diaAleatorio]+ "  es: " + max + "\n\n y la mínima es:" +min;
    return mensaje;
}

//Creamos una función que compruebe con una expresión regular si se está introduciendo el nombre de una ciudad únicamente con letras
function comprobarEntrada(entrada) {
    let patronEntrada = /^[a-zA-Z]+$/;
    return patronEntrada.test(entrada.trim()); 
}

//Aquí va el flujo de ejecución de los métodos utilizados en el programa:
//Primero asignamos temperaturas a las ciudades durante la semana, para ello llamamos a la función random que hemos creado

//temperaturaBarcelona = generarTemperaturas(temperaturaBarcelona);
temperaturaVigo =  generarTemperaturas(temperaturaVigo);
temperaturaBarcelona =  generarTemperaturas(temperaturaBarcelona);

//Con el sistema creado, procedemos a interactuar con el usuario:
/**
 * Ahora el usuario debe introducir el nombre de una ciudad, debe ser validada y sobre ella se ejecutan los siguientes métodos:
 * temperaturaMedia
 * datosDiaAleatorio (en este programa los datos ya se generan aleatoriamente en cada interacción)
 */

var ciudadEntrada = interaccionUsuario();
//Realizamos una comprobación sencilla para cotejar la entrada con las ciudades y ejecutamos sus funciones de salida
if(ciudadEntrada == ciudades[0]){
    alert(temperaturaMediaDia(temperaturaBarcelona));   
    alert(temperaturaMaxMin(temperaturaBarcelona));
}
else if(ciudadEntrada == ciudades[1]){
    alert(temperaturaMediaDia(temperaturaVigo));   
    alert(temperaturaMaxMin(temperaturaVigo));
}