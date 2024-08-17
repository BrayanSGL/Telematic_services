const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
  var mensaje = req.body.msg;
  res.send("Mensaje recibido: " + mensaje);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
