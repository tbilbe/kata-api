const express = require('express');
const app = express();


//Strings endpoint 
app.get('/strings/Hello/world', (req, res) => {
  res.status(200).json({
    "result": 'Hello world!',
  });
});

module.exports = app;
