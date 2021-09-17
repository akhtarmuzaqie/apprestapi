var mysql = require('mysql');

//Connection to Database

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Connected To Mysql')
});

module.exports = conn;