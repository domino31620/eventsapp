const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please enter valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})


