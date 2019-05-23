const express = require('express');

const router = express.Router();

const numbersController = require('../controllers/numbers');


router.get('/add/:a/and/:b', numbersController.add);

// Number 2 endpoint
router.get('/subtract/:a/from/:b', numbersController.subtract);

// Number 3 endpoint
router.post('/multiply', numbersController.multiply);

// Number 4 endpoint
router.post('/divide', numbersController.divide);

module.exports = router;
