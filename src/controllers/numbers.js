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

module.exports.add = (req, res) => {
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
};

exports.subtract = (req, res) => {
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
};

exports.multiply = (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (!Number.isNaN(parseInt(a, 10))) {
    res.status(200).json({
      result: multiply(parseInt(a, 10), parseInt(b, 10)),
    });
  } else if (!Number.isNaN(parseInt(b, 10)) && !Number.isNaN(parseInt(a, 10))) {
    res.status(400).json({
      error: 'Parameters "a" and "b" must be valid numbers.',
    });
  } else {
    res.status(400).json({
      error: 'Parameters "a" and "b" are required.',
    });
  }
};

exports.divide = (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a === undefined || b === undefined) {
    res.status(400).json({
      error: 'Parameters \"a\" and \"b\" are required.',
    });
  } else if (b < 1) {
    res.status(400).json({
      error: 'Unable to divide by 0.',
    });
  } else if (Number.isNaN(parseInt(a, 10)) && Number.isNaN(parseInt(b, 10))) {
    res.status(400).json({
      error: 'Parameters \"a\" and \"b\" must be valid numbers.',
    });
  } else {
    res.status(200).json({
      result: divide(a, b),
    });
  }
};
