/*Ejercicio 6
1.	En este ejercicio (para abreviar) hacerlo para 15 alumnos
    y para los días Lunes, Martes y Miércoles 
	(tendría que ser extensible para infinitos alumnos y al resto de los días de la semana 
	con sólo cambiar los datos de entrada en los arrays).
a.	Crear un array mixto donde el índice del array es el código de la cuenta de usuario 
    y el contenido para cada índice es el nombre del alumno que tiene dicha cuenta de usuario.
b.	Crear un array mixto donde el índice es el nombre del módulo 
    (abreviatura de cuatro letras) en el que puede estar matriculado un alumno 
	y el contenido es el nombre del profesor que lo imparte.
c.	Crear un array bidimensional con el horario del curso (donde las filas representan 
    la hora de clase (en ordinal: primera, segunda, tercera, ...) 
	y las columnas representan los días de la semana (lunes, martes, ...), 
	siendo el contenido el nombre del módulo (en abreviatura) que tiene el alumno 
	ese día a esa hora.
	
	DCLI	DINW	….
	DCLI	DAW	….
	DINW	EIEM	….
	….	….	….

d.	Crear un array mixto donde el índice es la cuenta de usuario 
    y el contenido es un array denso con los módulos (abreviatura) 
	en las que está matriculado cada alumno

Hacer un programa que pida por pantalla la cuenta de un usuario 
y nos muestre su horario, indicando profesor y asignatura que tiene en cada hora. 

	DCLI (Bea)	DINW (Ana)	….
	DCLI (Bea)	DAW (María)	….
	DINW (Ana)	-----------------	….
	….	….	….

	(La salida que ve el usuario que esté lo más ordenada posible. 
	Si el usuario no estuviese matriculado en algún módulo puede rellenar 
	el hueco con guiones)

	Si la cuenta de usuario no existe tendrá que mostrar el error correspondiente.
*/
//a
var users={
	"DAW201":"Iria",
	"DAW202":"Elena",
	"DAW203":"Oscar",
	"DAW204":"Baris",
	"DAW205":"Rubén",
	"DAW206":"Ivan",
	"DAW207":"Manuel",
	"DAW208":"Alberto",
	"DAW209":"Diego",
	"DAW210":"Alejandro",
	"DAW211":"Raul",
	"DAW212":"Ismael",
	"DAW213":"Belinda",
	"DAW214":"Erik",
	"DAW215":"Juan"
};
//b
var modulos={
	"DCLI":"Bea",
	"DINT":"Ana",
	"DAPW":"Juan",
	"EIEM":"Marta",
	"DSER":"Luis"
};
//Array días semana
var diasSemana ={
    0 : "Lunes",
    1 : "Martes",
    2 : "Miércoles"
}
//c
var horasClase=[
	["DCLI","EIEM","DAPW"],
	["DCLI","EIEM","DAPW"],
	["DSER","DSER","DSER"],
	["DSER","DSER","DSER"],
	["DINT","DCLI","DINT"],
	["DINT","DCLI","DINT"]
];
//d
var modulosUsers={
	"DAW201":new Array("DCLI","EIEM","DAPW"),
	"DAW202":new Array("DAPW"),
	"DAW203":new Array("DCLI","EIEM","DAPW"),
	"DAW204":new Array("DCLI","EIEM","DAPW"),
	"DAW205":new Array("DCLI","EIEM","DAPW"),
	"DAW206":new Array("DCLI","EIEM","DAPW"),
	"DAW207":new Array("DCLI","EIEM","DAPW"),
	"DAW208":new Array("DCLI","EIEM","DAPW"),
	"DAW209":new Array("DCLI","EIEM","DAPW"),
	"DAW210":new Array("DCLI","EIEM","DAPW"),
	"DAW211":new Array("DCLI","EIEM","DAPW"),
	"DAW212":new Array("DCLI","EIEM","DAPW"),
	"DAW213":new Array("DCLI","DINT","EIEM","DAPW"),
	"DAW214":new Array("DCLI","EIEM","DAPW"),
	"DAW215":new Array("DCLI","DAPW")
};

var user=prompt("Introduce el nombre de cuenta de un usuario.","DAW201");

var salida=""; //para mostrar la información del horario o el error de ser necesario
//intento obtener el nombre de usuario
var nameUser=users[user];

/* if (user!=null){
    if (user==""){
        salida="No has escrito ningún código de usuario";
    } else if (nameUser==undefined){ //es que no encontramos el código de usuario que se introdujo
        salida="No se encontró el usuario/a con el número de cuenta "+user;
    } else {
        //elaboro el horario para user
        salida="El horario de "+nameUser+" con código de cuenta de usuario/a "+user+" es:\n";
        salida+="Hora |       Lunes        |       Martes        |   Miércoles\n";
        for (var nHora=0;nHora<horasClase.length;nHora++){ //recorro las horas 1ª, 2ª...
            salida+="   "+(nHora+1)+"ª   |";
            for (nDiaSemana=0;nDiaSemana<horasClase[nHora].length;nDiaSemana++){ //recorro los días de la semana lunes, martes, miércoles..
                //tengo que averiguar si el usuario tiene clase del módulo que toca ese día a esa hora
                let modulo=horasClase[nHora][nDiaSemana]; //módulo que hay a esa hora en ese días
                if (modulosUsers[user].includes(modulo)){ //el usuario/a está matriculado/a en ese módulo
                    salida+="   "+modulo+" ("+modulos[modulo]+")     |  ";
                } else {
                    salida+="     -----------     | ";
                }
            }
            salida+="\n";
        }
    }
} else {
    salida="Has cancelado el ejercicio. Otra vez será ";
} */

/**
 * 
 * @param {*} alumno código del usuario sobre el que se realiza la comprobación 
 * @param {*} codigoDia número del día (secuencial) de la semana que queremos comprobar ej: lunes -> 1, martes->2...
 * Devuelve un booleano que representa la veracidad de la comprobación realizada en la función
 */
function tieneClase(alumno, codigoDia){

    nHora = 0;
    while(nHora < horasClase.length-1 && !modulosUsers[alumno].includes(horasClase[nHora][codigoDia-1])){
        nHora++;
    }

    return modulosUsers[alumno].includes(horasClase[nHora][codigoDia-1]);


}

alert(tieneClase("DAW202",2));
alert(tieneClase("DAW202",3));

if(tieneClase("DAW202",2)){
    alert(users['DAW202']+" tiene clase el: " + diasSemana[1]);
}
else{
    alert(users['DAW202']+" no tiene clase el: " + diasSemana[1]);
}
