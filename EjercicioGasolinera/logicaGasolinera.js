//Ejercicio gasolinera

// Capacidad en L
var capacidadDeposito = 50000;
var capacidadSuficiente = true;
var precioLitro = 1.24;
var cantidadLitrosRepostar;
var intencionRepostar = false;
var contadorVehiculos = 0 ;
var importeMedio = 0;

while(capacidadSuficiente){
    alert("Bienvenido a la gasolinera A carballeira.\nQuedan "
    + capacidadDeposito + " Litros.");
    if(capacidadDeposito>5000){
        intencionRepostar = prompt("¿Deseas repostar?\n1- Si.\n2- No");

        //Controlamos cuanto quiere repostar, una vez declarado que quiere hacerlo.
        if(intencionRepostar == 1){
            cantidadLitrosRepostar = prompt("¿Cuanto deseas repostar?(En euros)");

            if(cantidadLitrosRepostar <= capacidadDeposito-5000){
                cantidadLitrosRepostar = repostaVehiculo(cantidadLitrosRepostar);
                contadorVehiculos++;
                capacidadDeposito -= cantidadLitrosRepostar;
                alert("Muy bien, se suministran: " + cantidadLitrosRepostar + " Litros. \nQuedan : "+ parseInt(capacidadDeposito) + " Litros");
            }
            else{
                alert("No quedan tantos litros de gasolina.\n")
            }
        }
        else{
            alert("De acuerdo, vuelva otro día!");
        }
        
    }
    else{
        alert("No queda suficiente gasolina para repostar.")
    }

    if(capacidadDeposito <= 5000){
        capacidadSuficiente = false;
    }
}

calculosFinDia();

//Función que devuelve los litros que reposta el coche (presupuesto/precioLitro)
function repostaVehiculo(presupuesto){
    cantidadLitrosRepostar = presupuesto/precioLitro;
    return cantidadLitrosRepostar;
}

function calculosFinDia(){
    var datosDia = "Los datos diarios son: ";
    datosDia+contadorVehiculos;

    echo (datosDia);
}
