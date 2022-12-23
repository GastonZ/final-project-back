const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title:{type: String, required: true},
    category_id: {type: String, required: true},
    unit_price: {type: Number, required: true},
    picture_url:{type: String, required: true},
    gender:{type: String, required: false},
    description:{type: String, required: true},
    inCart: {type: Boolean, default: false},
    userId:{type: mongoose.Types.ObjectId, ref:"users" ,required: true}
})
const Items = mongoose.model('items',schema);
module.exports = Items;