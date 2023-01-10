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
/* function arrayParalelo(arrayMascotas){
    let auxLong = arrayMascotas.length();
    let contador = 0;
    const propietario = [];
    while(auxLong>0){
        propietario = new propietario(mascotas[contador].getNombrePropietario,mascotas[contador].getTipoMascota,mascotas[contador].getEdadMascota,mascotas[contador].getNombreMascota);
        contador++;
        auxLong--;
    }
} */

let propietarios = [];
for (let i = 0; i < mascotas.length; i++) {
    let mascota = mascotas[i];
    let propietario = new Propietario(mascota[3], mascota[0], mascota[2], mascota[1]);
    propietarios.push(propietario);
}

//El usuario debe introducir datos de nuevas mascotas hasta que introduzca la secuencia de escape
let mascotas = [];
while (true) {
    let datos = prompt("Ingrese los datos de la mascota en el siguiente formato: [Nombre del propietario],[Nombre de la mascota],[Tipo de mascota],[Edad de la mascota]").split(",");
    if (datos[0] === "*") {
        break;
    }
    if (datos.length !== 4) {
        alert("Se han omitido algunos datos o se ha intentado cancelar");
        continue;
    }
    //TODO:revisar errores de espaciados
    let propietario = datos[0].trim();
    let nombremascota = datos[1].trim();
    let tipomascota = datos[2].trim();
    let edadmascota = parseInt(datos[3].trim());
    //Definición de la expresion regular
    let edadRegex = new RegExp('^[1-9][0-9]{0,2}$');
    if (!edadRegex.test(edadmascota)) {
        alert("La edad de la mascota no está comprendida entre 1 y 175");
        continue;
    }
    let mascotasAux = mascotas.filter(function (mascota) {
        return mascota.nombremascota === nombremascota && mascota.edadmascota === edadmascota && mascotota.propietario === propietario && mascota.tipomascota === tipomascota;
    });
    if (mascotasAux.length !== 0) {
        alert("Se ha introducido una mascota duplicada");
        continue;
    }
}

// agregar mascotas no duplicadas -> intregrar en el previo
/* mascotas.push({ propietario: propietario, nombremascota: nombremascota, tipomascota: tipomascota, edadmascota: edadmascota });
propietarios.push(new Propietario(propietario, tipomascota, edadmascota, nombremascota));
alert("Mascota agregada exitosamente");
} */

