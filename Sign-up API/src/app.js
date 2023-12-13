const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')
require("./db/conn");
const port = process.env.PORT || 3000;

const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");



app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path)
//  app.use(express.static(file_path))

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{
    console.log(`Service is running at port number ${port}`);
})