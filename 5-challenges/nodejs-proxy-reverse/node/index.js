import express from 'express';
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "app-proxy-reverse",
  port: 3306,
})

const PORT = 3000;

const app = express();

const sql = 'CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);'
connection.connect(function(err) {
  if (err) throw err
});
connection.query(sql);

app.get('/', (request, response) => {
    connection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      response.send(result);
    });
});

app.get('/create-user', (request, response) => {
  const sql = `INSERT INTO users(name) values ('Lucas')`
  connection.query(sql, function(err, result, fields) {
    if (err) throw err;
    response.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
});