//Ver lista de formularios:
var arrayForms = document.forms;
//Elegimos el primer formulario:
var formulario = document.forms[0];
//Definimos la variable a donde irá la salida
var lienzo = document.getElementById("lienzo");
var mensaje;

//Funciones
function salidaLienzo(entrada){
    lienzo.innerHTML += entrada;

}
formulario.action = "tecnitium.com";
var mensaje = "El tamaño del array es: " + arrayForms.length + " <br>El nombre es: " + arrayForms[0].action;
mensaje += "<br>El target es: " + arrayForms[1].target;
mensaje += "<br>Las entradas son: " + document.forms[0].elements[1].name;
salidaLienzo(mensaje);



/**
 * Pendiente: uso de reset() y submit() como métodos del form.
 */