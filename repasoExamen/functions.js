const texto = "Hola, ¿cómo estás?";
const regex = new RegExp("hola", "i");

if (regex.test(texto)) {
  console.log("Se encontró la cadena 'hola' en el texto.");
} else {
  console.log("No se encontró la cadena 'hola' en el texto.");
}