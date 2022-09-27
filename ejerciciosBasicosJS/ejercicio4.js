//Visualizar los n primeros números naturales:
// ! el 0 no es un número natural

var n = prompt("¿Cuántos números naturales quieres visualizar?")
var mensaje = "La respuesta es: ";

for(let i  = 1 ; i <= n  ; i++){
    mensaje += i + " ";
}

alert(mensaje);