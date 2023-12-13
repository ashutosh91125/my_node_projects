const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mongo911:mongo911@cluster0.b8qsuv1.mongodb.net',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log('Getting an error', e)
})