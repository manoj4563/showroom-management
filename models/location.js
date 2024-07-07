const mongoose = require('mongoose');
const locationScheme = new mongoose.Schema({
    location: String,
    name:String,
    model:String,
    price:Number
})
const Location = mongoose.model('location',locationScheme);
module.exports = Location;