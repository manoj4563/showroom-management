const mongoose = require('mongoose');
const BookingScheme = new mongoose.Schema({
    name: String,
    address:String,
    phonenumber:Number
})
const Booking = mongoose.model('Booking',BookingScheme);
module.exports = Booking;