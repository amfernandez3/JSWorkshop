//función que convierta a mayúscula solo la primera letra
function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

//Ejemplo 
alert(capitalize("HOLA MUNDO"));

//función que crea un objeto propietario

class propietario{
    constructor(nombrePropietario, tipoMascota, edadMascota, nombreMascota){
        this.nombrePropietario = nombrePropietario;
        this.tipoMascota = tipoMascota;
        this.edadMascota = edadMascota;
        this.nombreMascota = nombreMascota;
    }

    getNombrePropietario(){
        return this.nombrePropietario;
    }

    setNombrepropietario(nombre){
        this.nombrePropietario = nombre;
    }
    getTipoMascota(){
        return this.tipoMascota;
    }

    setTipoMascota(tipo){
        this.TipoMascota = tipo;
    }
    getEdadMascota(){
        return this.edadMascota;
    }

    setEdadMascota(edad){
        this.edadMascota = edad;
    }
    getNombreMascota(){
        return this.nombreMascota;
    }

    setNombreMascota(nombre){
        this.nombreMascota = nombre;
    }
}

/* const propietario1 = new propietario("Alejandro","Perro",12,"Coque");
console.log(propietario1.getNombreMascota); */

//Array de mascotas
mascotas = [["gato",2,"Coque","Alejandro"],["Oso panda",5,"Nano","Lucía"],["perro",4,"Sherpa","Lorena"],["gato",6,"Claudio","César"]
,["Lemur",12,"Pepo","Alba"]]

//Crear un array de propietarios, paralelo al de mascotas, a partir de los datos almacenados en mascotas, el array
//debe contener tantos objetos propietario como objetos mascotas.
function arrayParalelo(arrayMascotas){
    let auxLong = arrayMascotas.length();
    let contador = 0;
    const propietario = [];
    while(auxLong>0){
        propietario = new propietario(mascotas[contador].getNombrePropietario,mascotas[contador].getTipoMascota,mascotas[contador].getEdadMascota,mascotas[contador].getNombreMascota);
        contador++;
        auxLong--;
    }
}

//El usuario debe introducir datos de nuevas mascotas hasta que introduzca la secuencia de escape