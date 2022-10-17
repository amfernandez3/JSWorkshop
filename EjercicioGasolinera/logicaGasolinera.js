//Ejercicio gasolinera

// Capacidad en L
var capacidadDeposito = 50000;
var capacidadSuficiente = true;
var precioLitro = 1.24;
var cantidadLitrosRepostar;
var intencionRepostar = false;
var contadorVehiculos = 0 ;
var importeMedio = 0;
var flagSalida = false;


while(capacidadSuficiente){
    alert("Bienvenido a la gasolinera A carballeira.\nQuedan "
    + capacidadDeposito + " Litros.");
    if(capacidadDeposito>5000){
        intencionRepostar = prompt("¿Deseas repostar?\n1- Si.\n2- No");

        //Controlamos cuanto quiere repostar, una vez declarado que quiere hacerlo.
        if(intencionRepostar == 1){
            cantidadLitrosRepostar = prompt("¿Cuanto deseas repostar?(En euros)");
            cantidadLitrosRepostar = repostaVehiculo(cantidadLitrosRepostar);
            
            if(cantidadLitrosRepostar <= capacidadDeposito-5000){
                
                capacidadDeposito -= cantidadLitrosRepostar;
                alert("Muy bien, se suministran: " + cantidadLitrosRepostar + " Litros. \nQuedan : "+ parseInt(capacidadDeposito) + " Litros");
                contadorVehiculos++;
            }
            else{
                if(confirm("No quedan tantos litros de gasolina, puedes repostar: "+ (capacidadDeposito - 5000)*1.24 +"Euros de gasolina")){
                    capacidadDeposito = 5000;
                    contadorVehiculos++;
                }
            }
        }
        else{
            if(!confirm("De acuerdo, vuelva otro día!")){
                flagSalida = true;
            }
        }
        
    }
    else{
        alert("No queda suficiente gasolina para repostar.")
    }

    if(capacidadDeposito <= 5000 || flagSalida){
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
    var importeMedio = (50000 - capacidadDeposito)*1.24 / contadorVehiculos;
    var porcentajeExtra;
    if(capacidadDeposito>5000){
       porcentajeExtra = ((capacidadDeposito - 5000)*100)/5000;
    }
    else if(capacidadDeposito == 5000){
        porcentajeExtra = 0;
    }

    var datosDia = "Los datos diarios son: "+ contadorVehiculos+ "\n" + "La media de gasto es:" + importeMedio
    + "\nLos litros restantes son: "+ capacidadDeposito + "\nel porcentaje de litros por encima del mínimo es: " + porcentajeExtra;
    
    alert(datosDia);
}
