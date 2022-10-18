//Javascript: aprendizaje de estructuras de datos básicas.
var numeros = new Array(10);
var mayor = 0;
alert("Introduce 10 números");

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = prompt("Introduce un número mayor de 20");
    if (numeros[i] > 20) {
        if(numeros[i]>mayor){
            mayor == numeros[i];
        }
    }
    else {
        alert("El número debe ser mas alto de 20");
        i--;
    }

}
alert("Los números introducidos son: " + numeros+ "Y el mayor es: " + mayor);
