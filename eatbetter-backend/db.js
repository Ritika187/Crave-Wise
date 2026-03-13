const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",        // your MySQL username
  password: "database", // replace with your actual MySQL password
  database: "eatbetterdb"
});

connection.connect((err) => {
  if (err) console.log("DB Error:", err);
  else console.log("Connected to MySQL database");
});

module.exports = connection;