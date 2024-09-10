const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const e = require("express");
const app = express();
const PORT = 3001;

app.use(bodyParser.json()); // Sirve para que el servidor pueda interpretar los datos que le enviamos

app.get("/users", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.log("Error leyendo el archivo", err);
      return;
    }
    res.json(JSON.parse(data)); // Devuelve los datos del archivo users.json
  });
});

// Ruta para agregar un nuevo usuario
app.post("/users", (req, res) => {
  const newUser = req.body;

  fs.readFile("users.json", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error al leer el archivo" });
    }

    let users = JSON.parse(data);
    const userExists = users.find((user) => user.username === newUser.username);

    if (userExists) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    users.push(newUser);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al guardar el archivo" });
      }
      res.json({ message: "Usuario registrado exitosamente" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
