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

// Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Midel
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.render("index", { Titulo: "Reporte" });
});

app.get("/report-db", (req, res) => {
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

app.use((req, res, next) => {
  //   res.status(404).send("Sorry cant find that!");
  //res.status(404).sendFile(__dirname + "/public/404.html");
  res.render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
