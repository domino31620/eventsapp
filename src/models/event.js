const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    min: [1, 'Must be at least 1, received {VALUE}'],
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: ['business', 'casual', 'party', 'general'],
      message: '{VALUE} is not supported',
    },
    required: true,
  },
})

module.exports = mongoose.model('event', eventSchema)