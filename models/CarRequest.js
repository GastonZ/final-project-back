const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    car_model: {type: String, required: true},
    request: {type: String, required: true},
    user_name: {type: String, required: true},
    user_email:{type: String, required: true},
    car_photo: {type: String, required: true},
    userId: {type: mongoose.Types.ObjectId, ref: 'user', required: true}
})

const CarRequest = mongoose.model('carrequest', schema)
module.exports = CarRequest