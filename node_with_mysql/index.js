const con = require("./config");
const express = require('express');
const body_parser = require('body-parser');

const app = express();
app.use(body_parser.json())
app.get('/',(req,res)=>{
    con.query("select * from newtable",(err,result)=>{
        if(err){
            res.send("Some error found");
        }

        else{
            res.send(result);
        }
    })
}).listen(3000);
