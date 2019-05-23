const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('../src/routes/numbers');
// const booleansRouter = require('../src/routes/booleans');
const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);

module.exports = app;
