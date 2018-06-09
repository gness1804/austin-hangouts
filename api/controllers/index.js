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

const createPlace = async (req, res) => {
  const place = await (new Place(req.body)).save();
  res.json(place);
};

module.exports = {
  listAll,
  createPlace,
};
