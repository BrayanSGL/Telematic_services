const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "administrator",
  database: "Soccer",
});

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
  console.log('Hola bb')
});

app.listen(port, () => {
  console.log("Express server running on port " + port);
});

app.get("/generar-reporte", (req, res) => {
  //conexion a la base de datos local
  connection.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Conectado a la base de datos");
  });

  //consultar tabla premierleagueteams

  connection.query("SELECT * FROM premierleagueteams", (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Consulta exitosa");
    console.log(rows);
    res.json(rows);
  });
});
