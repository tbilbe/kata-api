const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

exports.hello = (req, res) => {
  res.status(200).json({
    result: 'Hello world!',
  });
};

exports.upper = (req, res) => {
  res.status(200).json({
    result: uppercase(req.params.string),
  });
};

exports.lower = (req, res) => {
  res.status(200).json({
    result: lowercase(req.params.string),
  });
};

exports.firstChars = (req, res) => {
  res.status(200).json({
    result: firstCharacter(req.params.string),
  });
};

exports.firstChars1 = (req, res) => {
  res.status(200).json({
    result: firstCharacters(req.params.string, req.query.length),
  });
};
