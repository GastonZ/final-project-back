const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true},
    image:{type: String, required: true},
    description:{type: String, required: true},
    userId:{type: mongoose.Types.ObjectId, ref:"users" ,required: true}
})
const Items = mongoose.model('items',schema);
module.exports = Items;