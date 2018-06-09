const express = require('express');

const router = express.Router();
const controller = require('../controllers');

const { listAll } = controller;

router.get('/', (req, res) => {
  res.send('hello');
});
router.get('/places', listAll);

module.exports = router;
