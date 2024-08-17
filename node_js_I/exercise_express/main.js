const express = require("express");
const app = express();
const port = 3000;

const path = require("path"); // es para poder usar path.join

const bodyParser = require("body-parser"); // es para poder usar body-parser

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
}); // es para que al entrar a la página principal se muestre el archivo index.html

app.post("/", (req, res) => {
  var edad = req.body.age; // es para que al enviar un mensaje se muestre el mensaje recibido
  res.send("Edad recibida: " + edad);
});

app.listen(port, () => {
  console.log(`Ejemplo de app escuchando en http://localhost:${port}`);
}); // es para que el servidor esté escuchando en el puerto 3000
