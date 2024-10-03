var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "bsgl1234",
  database: "services",
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  
  console.log('connected as id ' + connection.threadId);

  // Consulta SQL para insertar datos
  var sql = "INSERT INTO persons (name, age) VALUES (?, ?)";
  var values = ['Lorena', 23];

  // Ejecutar la consulta SQL
  connection.query(sql, values, function (err, results) {
    if (err) {
      console.error('error executing query: ' + err.stack);
      return;
    }
    console.log('Record inserted, ID: ' + results.insertId);
  });

  // Cerrar la conexión después de la consulta
  connection.end();
});
