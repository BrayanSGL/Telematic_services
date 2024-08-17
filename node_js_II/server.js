const express = require("express");
const app = express();
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Atencios a la solicitud 
app.get("/", (req, res) => {
  res.render("index", {title: "Inicio"});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
