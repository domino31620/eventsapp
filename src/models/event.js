const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
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
    required: true,
    type: String,
    enum: {
      values: ['business', 'casual', 'party', 'general'],
      message: '{VALUE} is not supported',
    },
    
  },
  image: {
    type: String,
  }
});

const event = mongoose.model('event', eventSchema);
module.exports = event;