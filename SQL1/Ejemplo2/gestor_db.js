async function consulta() {
  var mysql = require("mysql2");

  var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "bsgl1234",
    database: "services",
  });

  const [rows, filds] = await(connection.execute('select * from persons;'))
  connection.end();
  return rows;
}

module.exports = consulta();
