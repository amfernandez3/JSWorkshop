// gestión de variables según scope : var global, let local.
var a = 7;
var b = 8;

if(a<b){
    let a = 6
}
//El resultado es 7, el valor asignado en el condicional es local al mismo.

//? Conversiones entre tipos de datos:

4 + 5; // el Resultado es la suma.
4 + "5"; // El resultado es 45 (no se pueden realizar operaciones sobre diferentes tipos de dato.)
parseInt("5"); // El valor de cadena "5" pasa a un 5 numérico.
(" " + 5);  // El valor pasa a ser literal de cadena.

