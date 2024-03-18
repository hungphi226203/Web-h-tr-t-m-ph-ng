const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "hungphi",
  password: "yourpassword",
  database: "TTCS"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;