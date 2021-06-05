const mongoose = require('mongoose');
const {schema} = 'mongoose';

const userSchema = new Schema ({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)