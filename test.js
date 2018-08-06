var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "mage",
  password: "Zapp02099!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});