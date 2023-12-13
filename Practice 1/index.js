// const http = require('http');
// const data = require('./data');
// http.createServer((req, res)=>{
//     res.writeHead(200,{'content-type': 'application\json'});
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(5000);

// 

//3.
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'files');

// fs.readdir(dirpath, (err,files)=>{
//     files.forEach((item)=>{
//         console.log('file name is ',item);
//     })
// });

//4.
// const fs = require ('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'crud');
// const filepath = path.join(dirpath,'apple.txt')
// fs.writeFileSync(`${dirpath}/apple.txt`,'This is a simple text file')
// fs.appendFile(filepath,' and file name is apple.txt', (err)=>{
//     if(!err){
//         console.log("File is inserted");
//     }
// })

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);  
// })
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if(!err) console.log('File name is updated')
// })
// fs.unlinkSync(`${dirpath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("File is deleted")
//     }
// })

//5.
// setTimeout(()=>{
//     console.log("Hello")
// },2000);

// 6. Handle Asynbchronous Data
// let a = 20;
// let b = 0;

// let waitingData = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(30)
//     },2000)  
// })

// waitingData.then((data)=>{
//     b = data
//     console.log(a+b)
// })

// 8. Sending data from browser using get service
// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     console.log("data send by Brower =>>>>",req.query.name)
//     res.send("Welcome "+req.query.name)
// }).listen(5000);

// // 9. Render HTML and Json
// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     res.send(`<h1>Welcome ${req.query.name}</h1>`)
// })

// app.get('/help',(req,res)=>{
//     res.send([{'name':'Ankit','course':'BCA'},{'name':'Shubham','course':'B.TECH'}])
// })

// app.listen(5000);


//10.Make HTML page
// const express = require('express');
// const app = express();
// const path = require('path');

// const dirpath = `${__dirname}/crud`;

// app.use(express.static(dirpath));

// app.listen(5000);

// 11. Remove Extention from URL and create 404 page
// const express = require('express');
// const app = express();
// const path = require('path');

// const dirpath = `${__dirname}/crud`;

// app.get('',(req,res)=>{
//     res.sendFile(`${dirpath}/index.html`);
// })

// app.get('/help',(req,res)=>{
//     res.sendFile(`${dirpath}/help.html`);
// })

// app.get('*',(req,res)=>{
//     res.sendFile(`${dirpath}/404.html`);
// })
// app.listen(5000);



// 12. Using EJS template engine and creating Dynamic page
// const express = require('express');
// const app = express();
// const path = require('path');

// const dirpath = `${__dirname}/crud`;

// app.set('view engine','ejs');

// app.get('/profile',(req,res)=>{
//     const user = {name : 'Aman', email : 'aman@test.com', city : 'Noida', skill : ['Java', 'c++']}
//     res.render('profile',{user});
// });

// app.get('',(req,res)=>{
//     res.sendFile(`${dirpath}/index.html`);
// })

// app.get('/help',(req,res)=>{
//     res.sendFile(`${dirpath}/help.html`);
// })

// app.get('*',(req,res)=>{
//     res.sendFile(`${dirpath}/404.html`);
// })
// app.listen(5000);

// const express = require('express');
// const app = express();

// const reqFilter = (req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please provide age');
//     }

//     else if(req.query.age < 18 ){
//         res.send('Beta abhi 18 ka ho ja fir dekh lena')
//     }
    
//     else{
//         next();
//     }
// }

// app.use(reqFilter);

// app.get('', (req,res)=>{
//     res.send('Lo ab dekh lo')
// })

// app.listen(5000);


//connect with mongo client
// const {MongoClient} = require('mongodb');
// const express = require('express');
// const app = express();
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);
// const database = 'mydb';

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('demo');

//     // response = await collection.find({}).toArray();
//     // console.log(response);
// }


// const dbConnect = require('./mongodb');

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find({}).toArray();
//     console.warn(data);
// }

// main();


// Creating a API with mongoDB
// const express = require('express');
// const dbConnect =require('./mongodb');
// const mongodb = require('mongodb');

// const app = express();

// app.use(express.json());
// app.get('/',async(req,res)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     res.send(data);
// });

// app.post('/',async(req,res)=>{
//     let data = await dbConnect();
//     data = await data.insertMany(req.body);
// })

// app.put('/:name',async(req,res)=>{
//     let data = await dbConnect();
//     data = await data.updateMany(
//         {name :req.params.name},
//         {$set: req.body}
//     );
//     res.send({result : "Updated"});
// });

// app.delete('/:id', async(req,res)=>{
//     let data = await dbConnect();
//     data = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
//     res.send('Done');
// });

// app.listen(5000);


//connecting with database using mongoose and crud operation 
// const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/mydb");
// const DemoSchema = new mongoose.Schema({
//     name : String,
//     price : Number
// });

// const DemoModel = mongoose.model('cars',DemoSchema);

// const saveInDB = async ()=> {

//     let data = new DemoModel({name : 'nano',price : '10'})
//     let result = await data.save();
//     console.log(result);
// }

// //  saveInDB();

// const updateInDB = async ()=>{
//     let update = await DemoModel.updateOne({name : 'nano'}, {$set : {name : 'Tata Nano'}})

//     console.log(update);
// }

// // updateInDB();

// const deleteInDB = async ()=>{
//     let del = await DemoModel.deleteOne({name : 'nano'})
//     console.log(del);
// }

// // deleteInDB();

// const read = async()=>{
//     let read = await DemoModel.find({});
//     console.log(read);
// }

// // read();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const DemoModel = require('./mongoose');
app.use(express.json());
app.post('/data',(req,res)=>{
        console.log(req.body);
        res.send('Hello');
})

app.listen(5000);




