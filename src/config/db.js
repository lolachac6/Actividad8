const mysql = require('mysql2')
require('dotenv').config();

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password: process.env.PASSWORDDB,
    port:3306,
    database:'act_8'
})

module.exports = pool.promise()