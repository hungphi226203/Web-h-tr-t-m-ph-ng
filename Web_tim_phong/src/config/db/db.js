const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodejs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});

module.exports = con;