const express = require('express');

const router = express.Router();
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

router.get('/hello/:string', (req, res) => {
  res.status(200).json({
    result: 'Hello world!',
  });
});

router.get('/hello/:string', (req, res) => {
  res.status(200).json({
    result: sayHello(req.params.string),
  });
});

router.get('/upper/:string', (req, res) => {
  res.status(200).json({
    result: uppercase(req.params.string),
  });
});

router.get('/lower/:string', (req, res) => {
  res.status(200).json({
    result: lowercase(req.params.string),
  });
});
// Strings 5 endpoint

router.get('/first-characters/:string', (req, res) => {
  res.status(200).json({
    result: firstCharacter(req.params.string),
  });
});

// Strings 5a endpoint
router.get('/first-characters/:string', (req, res) => {
  res.status(200).json({
    result: firstCharacters(req.params.string, req.query.length),
  });
});

module.exports = router;
