const mysql = require('mysql');
const con = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : 'root',
    database : 'DEMO1'
});

con.connect((err)=>{
    if(err)console.log("Database is connected")
})

module.exports =  con;