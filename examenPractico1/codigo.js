const misCoches = ["Saab", "Volvo", "BMW"];

const misCoches2 = ["Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW"];
//Función con control de eventos que se ejecutará tras la carga del HTML
window.onload = function() {
    
    imprimirContenido();
    imprimirContenido2();
    
}



function imprimirContenido(){
    document.getElementById('contenido').innerHTML = misCoches;
};

function imprimirContenido2(){
    document.getElementById('contenido').innerHTML += misCoches2;
};