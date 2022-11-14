var a = 1;

function x() {
  console.log(a); // En esta línea el valor de "a" es 1
  a = 5; // Aquí creamos una variable "a" en el ámbito anterior

  console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)
  console.log(window.a); // Aquí el valor de "a" es 5 (ámbito global)
}

function y() {
    console.log(a); // En esta línea el valor de "a" es undefined
    var a = 5; // Aquí creamos una variable "a" a nivel de función
  
    console.log("var b = " + b); // Aquí el valor de "a" es 5 (a nivel de función)
    console.log(window.a); // Aquí el valor de "a" es 1 (ámbito global)
  }

x(); 
y();
console.log("var b = " + b); // Aquí el valor de "a" es 5 (a nivel de función)
