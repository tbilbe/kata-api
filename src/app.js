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


//Strings 1 endpoint 
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

// strings 5 endpoint

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({
    result: firstCharacter(req.params.string),
  });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({
    result: firstCharacters(req.params.string, req.query.length),
  });
});

module.exports = app;
