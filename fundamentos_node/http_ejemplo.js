const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Estoy respondiendo a tu solicitud v4");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando solicitudes...");
});


//instalandolo con npm install -g nodemon y ejecutandolo con nodemon app.js se actualiza automaticamente