// Varibles globales
var boton = document.getElementById("btn");
var imagen = document.getElementById("img");
console.log("Fabricio lo pela");

var listaImagenes = [
  "https://www.w3schools.com/w3images/nature.jpg",
  "https://www.w3schools.com/w3images/fjords.jpg",
  "https://www.w3schools.com/w3images/mountains.jpg",
  "https://www.w3schools.com/w3images/paris.jpg",
  "https://www.w3schools.com/w3images/newyork.jpg",
];

var contador = 0;
// Eventos
boton.addEventListener("click", function () {
  console.log("Me diste click");
  console.log(listaImagenes.length);
  if (contador < listaImagenes.length) {
    imagen.src = listaImagenes[contador];
    contador++;
  } else {
    contador = 0;
    imagen.src = listaImagenes[contador];
    contador++;
  }
});
