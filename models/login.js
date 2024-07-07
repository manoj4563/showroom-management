const mongoose = require('mongoose');
const loginScheme = new mongoose.Schema({
    name: String,
    age: Number,
    email:String,
    password:String
})
const Login = mongoose.model('start',loginScheme);
module.exports = Login;