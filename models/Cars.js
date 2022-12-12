const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title:{type: String, required: true},
    price:{type: Number, required: true},
    image:{type: String, required: true},
    color: {type: String, required: true},
    imageDetails: {type: String, required: true},
    peakPower:{type: String, required: true},
    milesPerSec:{type: String, required: true},
    acceleration:{type: String, required: true},
    userId:{type: mongoose.Types.ObjectId, ref:"users" ,required: true}
})
const Car = mongoose.model('cars',schema);
module.exports = Car;