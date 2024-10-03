import { consulta } from "./gestor_db";

const express = require("express");
const app = express();
const puerto = 5000;
app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.get('/',async function read() {
    var memory = [];
    await(
        resultado
        .then((value)=>{res.send(value);})
        .catch((err))
    )
})

app.listen(puerto, () => {
  console.log("ejecutando express");
});
