const express = require('express')
const app = express()
const port = 3000
// const mysql = require('mysql')

// const config = {
//   host: 'db',
//   user: 'root',
//   password: 'root',
//   database: 'nodedb'
// }
// const connection = mysql.createConnection(config)

// const sql = `INSERT INTO people(name) values ('Lucas')`
// connection.query(sql)
// connection.end()


app.get('/', (request, response) => {
  response.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => console.log('Rodando na porta ', + port))