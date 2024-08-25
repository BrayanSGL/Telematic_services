const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));  // si se pone un archivo index.html en la carpeta public se mostrara en la raiz


app.get("/", (req, res) => {
    res.send("Respuesta a la solicitud GET v2");
});

app.get("/productos", (req, res) => {
    res.send("Listado de productos");
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
}); // se coloca al despues de todas las rutas para que si no se encuentra ninguna coincidencia se muestre el 404.html

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
