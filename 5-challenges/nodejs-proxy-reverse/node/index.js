import express from 'express';
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "app-proxy-reverse"
})

const PORT = 3000;

const app = express();

app.get('/', (request, response) => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      response.send(result);
    });
  })
});

app.post('/create-user', (request, response) => {
  const sql = `INSERT INTO users(name) values ('Lucas')`
  connection.query(sql)
  connection.end()
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
});