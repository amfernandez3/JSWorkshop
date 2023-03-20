formularios  = document.forms;
var lienzo = document.getElementById("lienzo");
var botonFuncion = document.getElementsByTagName("button")[0];
var reset = document.getElementsByTagName("button")[1];
var nombreInput = document.getElementById("nombre");


function pintarLienzo(texto){
    lienzo.innerHTML += texto;
}

function botonModifica(){
    nombreInput.value = "Alejandro";
    //ó document.forms[0].elements[0].value;
}
function botonReset(){
    nombreInput.value = "borrado";
}

    function marcar() {
    document.getElementById("verano").checked=true;
    }
    function desmarcar() {
    document.getElementById("verano").checked=false;
    }


botonFuncion.addEventListener("click",botonModifica,false);
reset.addEventListener("click",botonReset,false);
pintarLienzo("Texto enviado por DOM" + document.forms[0].elements[0].value);
