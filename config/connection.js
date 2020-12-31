// Node connection to mysql
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({

    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});
}
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Exporting connection 
module.exports = connection;