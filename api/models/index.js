const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter the name of the establishment.',
  },
  entryCreationDate: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    required: 'Please enter a valid address.',
  },
  photo: String,
});

module.exports = mongoose.model('Place', PlaceSchema);
