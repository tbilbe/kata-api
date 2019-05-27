const {
  getNthElement,
  arrayToCSVString,
} = require('../lib/arrays.js');

exports.getNthElement = (req, res) => {
  const index = req.params.index;
  res.status(200).json({
    result: getNthElement(index, req.body.array),
  });
};

exports.arrayToCSVString = (req, res) => {
  res.status(200).json({
    result: arrayToCSVString(req.body.array),
  });
};
