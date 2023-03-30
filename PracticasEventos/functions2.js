function crearNueva(direccion) {//direccion contiene la URL que se abrirá en la ventana creada
    nuevaVentana = window.open(direccion,"","height=400,width=800");
    return nuevaVentana;
    }


    function cerrarNueva() {
    if (nuevaVentana) {//nuevaVentana es una variable global
    nuevaVentana.close();
    }
    }

    var nuevaVentana;
    var direccion="http://www.google.es";
    alert("Vamos a crear una nueva ventana con la dirección de google");
    crearNueva(direccion);
    alert("¿Has visto ya la ventana? \nAhora vamos a abrir otra con la dirección del tiempo,así que mueve antes la anterior a otra zona de la pantalla");direccion="http://www.eltiempo.es";
    crearNueva(direccion);
    alert("Ahora tenemos tres ventanas abiertas: \n1. La que está ejecutando el script\n2.La de la página de google\n3. La que nos muestra el tiempo\n\nAhora vamos a llamar almétodo de cerrar la ventana"); //alert(“Todo en la misma línea”)
    cerrarNueva();
    alert("¿Cuál de ellas se cerró?\n\nLlamamos de nuevo al método cerrarNueva");
    cerrarNueva();
    