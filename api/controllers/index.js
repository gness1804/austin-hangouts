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

const updatePlace = async (req, res) => {
  const place = await Place.findOneAndUpdate({ _id: req.params.placeId }, req.body, {
    new: true,
    runValidators: true,
  }).exec();
  res.send(`Successfully updated ${place.name}`);
};

const readPlace = async (req, res) => {
  const place = await Place.findOne({ _id: req.params.placeId });
  res.json(place);
};

module.exports = {
  listAll,
  createPlace,
  updatePlace,
  readPlace,
};
