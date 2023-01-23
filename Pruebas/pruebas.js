alert("Hola mundo");
if(confirm("Te llamas Alejandro?")){
    let zona = document.getElementById("pruebas");
    zona.innerHTML("<h1>Hola Alejandro</h1>");
}
else{
    console.log("Error");
}