//Visualizar los 10 primeros números pares:

var mensaje = "La respuesta es:\n";
var i = 0;
var cont = 0;

do {
    if (i % 2 == 0) {
        mensaje += i + "\n";
        cont++;
    }
    i++;

} while (cont < 10);

alert(mensaje);