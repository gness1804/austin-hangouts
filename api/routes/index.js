const express = require('express');

const router = express.Router();
const controller = require('../controllers');

const {
  listAll,
  createPlace,
  updatePlace,
  readPlace,
} = controller;

// get method
router.get('/', (req, res) => {
  res.send('hello');
});
router.get('/places', listAll);
router.get('/places/:placeId', readPlace);

// post method
router.post('/places', createPlace);

// put method
router.put('/places/:placeId', updatePlace);

module.exports = router;
