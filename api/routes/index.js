const express = require('express');

const router = express.Router();
const controller = require('../controllers');

const { listAll, createPlace } = controller;

// get method
router.get('/', (req, res) => {
  res.send('hello');
});

router.get('/places', listAll);

// post method
router.post('/places', createPlace);

module.exports = router;
