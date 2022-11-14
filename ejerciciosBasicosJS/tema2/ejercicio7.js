function max(a,b) {

            if(a>b){
                return a           
             }
            else if(a == b){
                return null;
            }
            else{
                return b;
            }
               
 
        }
        a=parseInt(prompt("Introduzca un número"));
        b=parseInt(prompt("introduzca otro número"));
        var resultado = max(a,b);

if(resultado == a){
    alert("El mayor es " + resultado);
}
else if(resultado == b){
    alert("El mayor es " + resultado);
}
else{
    alert("Los números son iguales");
}