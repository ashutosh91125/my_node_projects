const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydb');

const DemoSchema = new mongoose.Schema({
    name : String,
    price : Number
})

const DemoModel = mongoose.model('cars',DemoSchema);

module.exports = DemoModel;