var express=require("express");
var bodyParser=require("body-parser");
const path = require('path');
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mongo911:mongo911@cluster0.b8qsuv1.mongodb.net/');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})	

var app=express()

app.use(express.json());

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', async function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	
	const hashpass = await bcryptjs.hash(pass, 10);

	var data = {
		"name": name,
		"email":email,
		"password":hashpass,
		"phone":phone
	}

	db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.sendFile(`${__dirname}/signup_success.html`);
})

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})


app.get('/login',(req,res)=>{

	res.sendFile(`${__dirname}/login.html`)
})

app.post('/login',async(req,res)=>{
	
	try{
		let email = req.body.email;
		let password = req.body.password;

		let userdata = await db.collection('details').findOne({email:email});
		
		const  isMatch = await bcryptjs.compare(password, userdata.password);

		if(isMatch){
			res.status(201).send("Login Successful");
		}
		else{
			res.send("Wrong Details!")
		}

	}catch (err){
		res.send('invalid Details')
	}

})

// app.get('/',function(req,res){
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// return res.redirect('index.html');
// });
app.listen(3000)


console.log("server listening at port 3000");
