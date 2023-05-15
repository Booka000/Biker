const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    pickupAddress:{
        type: String,
        required: true
    },
    bike:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
},{timestamps: true});

const Rent = mongoose.model('Rent',rentSchema);

module.exports = Rent;