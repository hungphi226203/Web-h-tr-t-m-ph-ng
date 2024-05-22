const mysql = require('mysql');
const pool  = mysql.createPool({
  host: "localhost",
  user: "hungphi",
  password: "226203",
  database: "TTCS"
});
module.exports = pool