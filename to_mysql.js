const fs = require('fs')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_testdb',
})

connection.connect()

connection.query('show databases;', (error, results, fields) => {
  if (error) throw error
  console.log('The solution is: ', results)
})

connection.end()
