cadenaEntrada = "texto prueba";
datosValidos = false;
posicionSeparador = 0;
apellidos = "por defecto";
nombre = "Carlos";

while (!datosValidos) {
    //Esta cadena almacenará los datos de la entrada
    cadenaEntrada = prompt("Introduce apellidos y nombre (Formato: Apellidos, Nombre)");
    if (cadenaEntrada.includes(",")) {
        posicionSeparador = cadenaEntrada.indexOf(",");
        if (cadenaEntrada.substring(posicionSeparador+1, cadenaEntrada.length).includes(",")) {
            alert("No puede haber más de una coma");
        }
        else {
            apellidos = apellidos.trim();
            nombre = nombre.trim();
            if(apellidos!= "" || nombre!= ""){
                alert("Introduce bien los datos.")
            }
            else{
                
            apellidos = cadenaEntrada.substring(0, posicionSeparador);
            nombre = cadenaEntrada.substring(posicionSeparador + 1, cadenaEntrada.length);
            alert("Los apellidos son: " + apellidos + " Y el nombre es: " + nombre);
            datosValidos = true;
            }
        }

    }
    else {
        alert("El formato introducido no es el correcto: falta la coma");
    }
}
mostrarSalida(cadenaEntrada);

function mostrarSalida(datos) {
    alert(datos);
}
