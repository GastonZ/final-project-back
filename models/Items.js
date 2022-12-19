const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    image:{type: String, required: true},
    gender:{type: String, required: false},
    description:{type: String, required: true},
    inCart: {type: Boolean, default: false},
    userId:{type: mongoose.Types.ObjectId, ref:"users" ,required: false}
})
const Items = mongoose.model('items',schema);
module.exports = Items;