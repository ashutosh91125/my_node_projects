const express = require('express');
const user= express();
const multer = require('multer');
const path = require('path');
const bodyparser = require('body-parser');

user.use(bodyparser.urlencoded({extended: true}));
user.use(express.static(path.resolve(__dirname,'public')));


var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads')
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

var upload = multer({storage : storage});

var userController = require('../controllers/userController')

user.post('/importUser',upload.single('file'),userController.importUser)


module.exports = app; 