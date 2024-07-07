const mongoose = require('mongoose');
const ModelScheme = new mongoose.Schema({
    name: String,
    model: String,
    display:String,
    speed:String,
    milleage:String
})
const Detail = mongoose.model('Model',ModelScheme);
module.exports = Detail;