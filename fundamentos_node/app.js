const express = require("express");
const app = express();
const port = 3000;

// motor de plantillas
app.set("view engine", "ejs"); // se debe instalar npm install ejs
app.set("views", __dirname + "/views"); // Indidca la carpeta donde se encuentran las vistas (plantillas ejs)

app.use(express.static("public"));  // si se pone un archivo index.html en la carpeta public se mostrara en la raiz


app.get("/", (req, res) => {
    //res.send("Respuesta a la solicitud GET v2");
    res.render("index", {titulo: "Titulo dinamico"}); // renderiza la vista index.ejs ya no se usa send
});

app.get("/servicios", (req, res) => {
    //res.send("Listado de productos");
    res.render("servicios", {tituloServicios: "Titulo de servicios"});
});

app.use((req, res, next) => {
  //res.status(404).sendFile(__dirname + "/public/404.html");
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Titulo del sitio web"
  });
}); // se coloca al despues de todas las rutas para que si no se encuentra ninguna coincidencia se muestre el 404.html

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
