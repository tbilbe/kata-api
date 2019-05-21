const express = require('express');
const app = express();
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

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
} = require('./lib/numbers');


// Strings 1 endpoint
app.get('/strings/Hello/world', (req, res) => {
  res.status(200).json({
    "result": 'Hello world!',
  });
});

// Strings 2 endpoint
app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({
    result: sayHello(req.params.string),
  });
});

// Strings 3 endpoint

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({
    result: uppercase(req.params.string),
  });
});

// Strings 4 endpoint

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({
    result: lowercase(req.params.string),
  });
});

// Strings 5 endpoint

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({
    result: firstCharacter(req.params.string),
  });
});

// Strings 5a endpoint
app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({
    result: firstCharacters(req.params.string, req.query.length),
  });
});

// Numbers 1 endpoint

app.get('/numbers/add/:a/and/:b', (req, res) => {
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
app.get('/numbers/subtract/:a/from/:b', (req, res) => {
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

module.exports = app;
