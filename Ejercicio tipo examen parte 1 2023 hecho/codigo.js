//8:39
//9:42 final codificación
//10:11 final depuración
//Declarar e inicializar un array mixto (objeto literal cuyas claves sean los meses del año (sus 3 primeras letras) y el valor sea el número del mes.
var meses={
    ene:0,
    feb:1,
    mar:2,
    abr:3,
    may:4,
    jun:5,
    jul:6,
    ago:7,
    sep:8,
    oct:9,
    nov:10,
    dic:11
}

/*
Declarar un array bidimensional que contenga los datos de 3 personas. De cada persona se 
almacenarán los datos:
• Nombre completo
• DNI
• Fecha de nacimiento (en formato: año,mes(3 letras),día)
• Booleano (que representa si la persona es capitán o no de un equipo).
*/

var personas=[
    ["José López Domínguez","11111111A","2000,ene,12",false],
    ["José Lope Doguez","12211111B","2001,jul,19",false],
    ["Jos Lez Dez","11133111C","2002,mar,15",true]
];

var datosPersona; //parea almacenar cada una de las entradas del usuario

// Declarar un array que permita almacenar los datos de diferentes equipos
var equipos=[];

var mensajeEntrada="Introduzce los datos de un jugador con el siguiente formato:\n";
mensajeEntrada+="    nombre_jugador,DNI,aaaa-mmm-dd[,capitan]\n";
mensajeEntrada+="El DNI estará formado por 6 a 8 dígitos y una letra\n";
mensajeEntrada+="El contenido del campo capitán puede ser S (para Sí) o N (para No). Si se omite se tomará el valor N\n";
mensajeEntrada+="mmm son las 3 primeras letras del mes\n\n";
mensajeEntrada+="Para finalizar introducir un *";


/*
Hacer un programa que permita introducir datos de diferentes jugadores hasta que se decida 
finalizar con *.
a) El mensaje de petición de datos deberá ser significativo
*/
datosPersona=prompt(mensajeEntrada);
while (datosPersona!="*"){
    let patronDNI=/^\d{6,8}[a-zñ]$/i;
    if (!patronDNI.test(datosPersona.split(",")[1])){
        alert("El DNI no cumple con el formato de tener de 6 a 8 dígitos seguido de una letra");
    } else {
        if (!estaRepetido(datosPersona.split(",")[1],personas)){
            //añadimos este jugador al array de personas
            let nombreJug=datosPersona.split(",")[0];
            let dniJug=datosPersona.split(",")[1];
            let fechaJug=datosPersona.split(",")[2].split("-").join(",");
            let capitan;
            if (datosPersona.split(",")[3]!=undefined){
                if ((datosPersona.split(",")[3].toUpperCase()=="CAPITAN")||(datosPersona.split(",")[3].toUpperCase()=="CAPITÁN")){
                    capitan=true;
                }else{
                    capitan=false;
                }
            }else{
                capitan=false;
            }
            personas.push([nombreJug,dniJug,fechaJug,capitan]);
        } else {
            alert ("el DNI "+datosPersona.split(",")[1]+" ya ha sido usado\nTendrá que introducir los datos de la persona de nuevo");
        }
    }
    datosPersona=prompt(mensajeEntrada); 
}

/*
Una vez finalizada la introducción de datos el programa deberá formar tantos equipos como 
capitanes haya en el array. Para ello:
a) Deberá solicitar por teclado un nombre para el equipo con mensaje significativo.
b) Crear el equipo con los datos del nombre del equipo y su capitán y almacenarlo en el array 
de equipos del punto 4
c) Asignar de forma aleatoria a los equipos los jugadores restantes. Para ello, mientras haya 
jugadores disponibles y de forma rotatoria, asignar aleatoriamente un jugador a cada 
equipo empleando el método definido en 3.c
*/

formarEquipos(personas,equipos);




/*
3. Definir un objeto Equipo con:
a) Las siguientes propiedades:
• Nombre del equipo
• Capitán del equipo
• Jugadores: array bidimensional que contiene los datos de cada jugador (nombre, DNI y 
año de nacimiento)
Las propiedades pueden ser opcionales e inicializarse en el momento de la creación del 
objeto.
b) Un método que calcula la media de edad aproximada de sus jugadores (basándose en el 
año de nacimiento) y retorne dicha media
c) Un método que permita añadir los datos de un jugador del equipo a la lista de jugadores
de dicho equipo.
*/
//el capitán del equipo puede ser el nombre del capitán o el índice del array de jugadores que tiene los datos del capitán
function Equipo(nombre,capitan,jugadores){
    //propiedades
    this.nombre=nombre||"";
    this.capitan=capitan||"";
    //se almacenarán los datos que provienen del array de personas
    this.jugadores=[]||jugadores.concat([]);
    //métodos
    this.addJugador=function (jugador){this.jugadores.push(jugador);};
    this.calcularMediaEdad=function(){
        let sumaEdades=0;
        let anoActual=new Date().getFullYear();
        //recorremos jugadores
        for (let nJug=0;nJug<this.jugadores.length;nJug++){
            //sumo los años
            sumaEdades+=+this.jugadores[nJug][2].split(",")[0];
        }
        return (anoActual-sumaEdades/this.jugadores.length);
    };
}

//función que recorre las personas y comprueba si existe alguna con el mismo dni
//recibe
//  dni-
//  array- array bidimensional que contiene el dni en la columna 1
//retorna
//  true-si ese dni ya existe
//  false- en caso contrario
function estaRepetido(dni,array){
    let nPersona=0;
    while ((nPersona<array.length-1) &&(array[nPersona][1]!=dni)){
        nPersona++;
    }
    return array[nPersona][1]==dni;
}

//función que forma los equipos con los datos almacenados
//recibe
//  personas-es el array con los datos de las personas
//  equipos-es el array con los equipos (inicialmente vacío)
function formarEquipos(personas,equipos){
    //para no destrozar el array de personas creo una copia del que ire borrando a medida que vayan siendo asignafdos los jugadores a cada uno de los equipos
    let misPersonas=personas.concat([]);
    let turnoEquipo=0;
    //primero crearé tantos equipos como capitanes haya
    for (let nPersona=misPersonas.length-1;nPersona>=0;nPersona--){
        if (misPersonas[nPersona][3]){
            let nombreEquipo=prompt("¿Cómo vas a llamar al equipo cuyo capitán es "+misPersonas[nPersona][0]+"?");
            //es un capitán
            let nuevoEquipo=new Equipo(nombreEquipo,misPersonas[nPersona][0]);
            //añadimos al capitán como jugador del equipo
            nuevoEquipo.addJugador(misPersonas[nPersona]);
            //saco al capitán del array
            misPersonas.splice(nPersona,1);
            //actualizo el array de equipos
            equipos.push(nuevoEquipo);
        }
    }
    //tengo que recorrer los equipos asignando aleatoriamente jugadores mientras haya jugadores en el equipo
    
    while (misPersonas.length>0){
        let nAleat=Math.floor(Math.random()*misPersonas.length);
        equipos[turnoEquipo].addJugador(misPersonas[nAleat]);
        turnoEquipo++;
        if (turnoEquipo==equipos.length) turnoEquipo=0;
        misPersonas.splice(nAleat,1);
    } 
}