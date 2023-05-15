const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    descripe:{
        type: String,
        required: true
    }
},{timestamps: true});

const Bike = mongoose.model('Bike',bikeSchema);

module.exports = Bike;