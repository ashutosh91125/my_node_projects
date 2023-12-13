const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const secretKey = 'secretkey';

app.get('/', (req,res)=>{
    res.json({
        Message : 'A simple API'
    })
})

app.post('/',(req,res)=>{
    const user = {
        id : 1,
        username : 'ashu',
        password :'ashu'
    }
    jwt.sign({user},secretKey, {expiresIn: '300s'},(err, token)=>{
        res.json({
            token
        })
    })
})

app.post('/profile',verifyToken,(req,res)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.send({result : "Invalid Token"})
        }else{
            res.json({
                message:"Profile accessed",
                authData
            })
        }
    })
})
function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }else{
        res.send({
            result : 'not a valid token'
        })
    }
}

app.listen(3000,()=>{
    console.log('App is running on 3000 port')
}) 