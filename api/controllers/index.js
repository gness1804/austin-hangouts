const mongoose = require('mongoose');

const Place = mongoose.model('Place');

const listAll = (req, res) => {
  Place.find({}, (err, place) => {
    if (err) {
      res.send(err);
    }
    res.json(place);
  });
};

module.exports = {
  listAll,
};
