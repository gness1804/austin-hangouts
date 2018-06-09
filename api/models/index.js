// @flow

const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const PlaceSchema: Schema = new Schema({
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

module.exports = model('Place', PlaceSchema);
