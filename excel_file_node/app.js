const UserModel = require('./models/User');

const express = require('express');
const app = express();

var useRoute = require('./routes/userRoutes')

app.use('/',useRoute);

app.listen(3000, ()=>{
    console.log('Listening on port 3000!');
})