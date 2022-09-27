//Visualizar suma de los n primeros números naturales:


var n = prompt("¿Cuántos números quieres sumar?")
//var mensaje = "La respuesta es: ";
var suma = 0;

parseInt(n);
for(let i  = 1 ; i <= n  ; i++){
    suma += i;
}

alert(suma);