const mysql = require('mysql')
//! create connection to mysql db
const usersDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})
module.exports = usersDb