const express = require('express');
const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('../lib/numbers');

const router = express.Router();


router.get('/add/:a/and/:b', (req, res) => {
  // console.log('req.params.a', typeof req.params.a);
  const a = req.params.a;
  const b = req.params.b;
  if (!Number.isNaN(parseInt(a, 10)) || !Number.isNaN(parseInt(b, 10))) {
    res.status(200).json({
      result: add(parseInt(req.params.a, 10), parseInt(req.params.b, 10)),
    });
  } else {
    res.status(400).json({
      error: 'Parameters must be valid numbers.',
    });
  }
});

// Number 2 endpoint
router.get('/subtract/:a/from/:b', (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  if (!Number.isNaN(parseInt(a, 10)) || !Number.isNaN(parseInt(b, 10))) {
    res.status(200).json({
      result: subtract(parseInt(req.params.b, 10), parseInt(req.params.a, 10)),
    });
  } else {
    res.status(400).json({
      error: 'Parameters must be valid numbers.',
    });
  }
});

// Number 3 endpoint
router.post('/multiply', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (!Number.isNaN(parseInt(a, 10))) {
    res.status(200).json({
      result: multiply(parseInt(a, 10), parseInt(b, 10)),
    });
    if (!Number.isNaN(parseInt(b, 10)) && !Number.isNaN(parseInt(a, 10))) {
      res.status(400).json({
        error: 'Parameters "a" and "b" must be valid numbers.',
      })
    }
  } else {
    res.status(400).json({
      error: 'Parameters "a" and "b" are required.',
    });
  }
});

module.exports = router;
