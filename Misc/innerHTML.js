//El siguiente código ejemplifica la manera de pasar información al HTML usando innerHtml.
function suma (a,b){
    var sum = a + b;

    document.getElementById('resultado').innerHTML = sum;
  };

  suma(3,4);
