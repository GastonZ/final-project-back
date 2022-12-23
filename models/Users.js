const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    lastName: {type: String, required: true},
    role: {type: String, required: true},
    photo:{type: String, required: false},
    banner:{type: String, required: false},
    email:{type: String, required: true},
    testimony:{type: String, required: false},
    password:{type: String, required: true},
    code:{type: String, required: true},
    verified:{type: Boolean, required: true},
    logged: {type: Boolean, required: true}
})
const User = mongoose.model('users',schema);
module.exports = User;