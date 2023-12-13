const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

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

app.post('/task', async function(req,res){
	var project = req.body.project;
	var task =req.body.task;
	var stime = req.body.stime;
    var etime = req.body.etime;


	var data = {
		"project" : project,
        "task":task,
        "stime":stime,
        "etime":etime
	}

	db.collection('datas').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
        res.send({result : "Data Inserted"})
			
	});
})
app.listen(3000);