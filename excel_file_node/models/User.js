var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongo911:mongo911@cluster0.b8qsuv1.mongodb.net/test')

var userSchema = mongoose.Schema({
    name: String,
    email : String,
    mobile : Number
});


var UserModel = mongoose.model('newModel',userSchema);
module.exports = UserModel;